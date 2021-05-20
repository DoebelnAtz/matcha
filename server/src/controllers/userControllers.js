const catchErrors = require('../errors/catchErrors');
const { parseQuery } = require('../utils');
const CustomError = require('../errors/customError');
const { query, connect } = require('../db');

const getMe = catchErrors(async (req, res) => {
	const id = req.decoded.u_id;
	let user = await query(
		`
        SELECT 
        	email, name, lastname, 
        	dob, u.u_id, bio, verified, 
        	preference, gender, pictures, t.tags 
        FROM users u
        LEFT JOIN 
		(
			SELECT u_id, ARRAY_AGG(value) as tags 
			FROM tags JOIN users_tags USING(t_id) 
			GROUP BY u_id
		) 
		t ON t.u_id = u.u_id 
        WHERE u.u_id = $1
    `,
		[id],
	);
	user = parseQuery(user)[0];
	user = { ...user, pictures: JSON.parse(user.pictures) };
	res.json(user);
}, 'Failed to get me');

const getProfileFeed = catchErrors(async (req, res) => {
	const id = req.decoded.u_id;
	const page = req.query.page;
	let profiles = await query(
		`
		SELECT u.u_id, name, dob, gender, bio, pictures, t.tags, l.u1_id 
		FROM users u 
		LEFT JOIN 
		(
			SELECT u_id, ARRAY_AGG(value) as tags 
			FROM tags JOIN users_tags USING(t_id) 
			GROUP BY u_id
		) 
		t ON t.u_id = u.u_id 
		LEFT JOIN likes l ON l.u2_id = u.u_id
		WHERE NOT u.u_id = $1 AND (l.u1_id != $1 OR l.u1_id IS NULL)
		ORDER BY name ASC OFFSET $2 LIMIT 3
	`,
		[id, page],
	);
	profiles = parseQuery(profiles).map((profile) => ({
		...profile,
		pictures: JSON.parse(profile.pictures),
	}));
	res.json(profiles);
}, 'Failed to get profile feed');

const updateProfilePictures = catchErrors(async (req, res) => {
	const { pictures } = req.body;
	const u_id = req.decoded.u_id;
	await query(
		`
		UPDATE users SET pictures = $1 WHERE u_id = $2
	`,
		[JSON.stringify(pictures), u_id],
	);

	res.json({ success: true });
}, 'Failed to update profile pictures');

const updateProfile = catchErrors(async (req, res) => {
	const { profile } = req.body;
	const userId = req.decoded.u_id;
	await query(
		`
		UPDATE users SET 
			name=$1, lastname=$2, email=$3,
			dob=$4, bio=$5, preference=$6, gender=$7 
		WHERE u_id = $8
	`,
		[
			profile.name,
			profile.lastname,
			profile.email,
			profile.dob,
			profile.bio,
			profile.preference,
			profile.gender,
			userId,
		],
	);
	res.json(profile);
}, 'Failed to update profile');

const likeProfile = catchErrors(async (req, res) => {
	const userId = req.decoded.u_id;
	const { targetId } = req.body;

	const client = await connect();
	try {
		await client.query('BEGIN');

		// check for existing like
		let targetLike = await client.query(
			`
			SELECT u1_id, u2_id FROM likes
			WHERE u1_id = $1 AND u2_id = $2
		`,
			[targetId, userId],
		);

		// if user hasnt been liked yet nothing will be returned
		if (!targetLike.rows.length) {
			await client.query(
				`
				INSERT INTO likes (u1_id, u2_id, u1likes)
				VALUES ($1, $2, TRUE)
			`,
				[userId, targetId],
			);
		} else {
			await client.query(
				`
				UPDATE likes SET u2likes = TRUE, match = TRUE
				WHERE u1_id = $1 AND u2_id = $2
				`,
				[targetId, userId],
			);
		}

		if (targetLike) await client.query('COMMIT');
	} catch (e) {
		await client.query('ROLLBACK');
		console.log(e);
		return res.status(500).json({
			success: false,
			message: 'Failed to like user',
		});
	} finally {
		client.release();
	}
	res.json({ success: true });
}, 'Failed to like user');

const searchProfiles = catchErrors(async (req, res) => {
	const search = req.query.q;

	/*
	 	search for 10 matches starting prefixed by
		string, then search for any profiles containing the
		string
	*/

	const resultsPrefix = await query(
		`
		SELECT 
			name, pictures, dob, u_id 
		FROM 
			users
		WHERE 
			LOWER(name) LIKE $1 
			ORDER BY name ASC
			LIMIT 10
	`,
		[`${search.toLowerCase()}%`],
	);

	let resultsAny = { rows: [] };

	if (resultsPrefix.rows.length < 10) {
		const excludedIds = resultsPrefix.rows.map((u) => u.u_id);
		resultsAny = await query(
			`
		SELECT 
			name, pictures, dob, u_id 
		FROM 
			users
		WHERE 
			LOWER(name) LIKE $1 
			AND NOT u_id = ANY($2::text[]) 
			ORDER BY name ASC
		LIMIT ${10 - resultsPrefix.rows.length}
	`,
			[`%${search.toLowerCase()}%`, excludedIds],
		);
	}

	let results = [...resultsPrefix.rows, ...resultsAny.rows];
	res.json(
		results.map((res) => ({ ...res, pictures: JSON.parse(res.pictures) })),
	);
}, 'Failed to search for profiles');

module.exports = {
	getMe,
	getProfileFeed,
	updateProfilePictures,
	updateProfile,
	likeProfile,
	searchProfiles,
};
