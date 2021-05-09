const catchErrors = require('../errors/catchErrors');
const { connect, query } = require('../db');

const searchTags = catchErrors(async (req, res) => {
	const search = req.query.q;

	/*
	 	search for 10 matches starting prefixed by
		string, then search for any tags containing the
		string
	*/

	const resultsPrefix = await query(
		`
		SELECT 
			t_id, value 
		FROM 
			tags 
		WHERE 
			value LIKE $1 
			ORDER BY value ASC
			LIMIT 10
	`,
		[`${search}%`],
	);

	let resultsAny = { rows: [] };

	if (resultsPrefix.rows.length < 10) {
		const excludedIds = resultsPrefix.rows.map((t) => t.t_id);
		console.log(excludedIds);
		resultsAny = await query(
			`
		SELECT t_id, value 
		FROM tags 
		WHERE 
			value LIKE $1 
			AND NOT t_id = ANY($2::int[]) 
		LIMIT ${10 - resultsPrefix.rows.length}
	`,
			[`%${search}%`, excludedIds],
		);
	}

	let results = [...resultsPrefix.rows, ...resultsAny.rows];
	console.log(results);
	res.json(results);
}, 'Failed to search for tags');

const deleteTag = catchErrors(async (req, res) => {}, 'Failed to delete tag');

const addTag = catchErrors(async (req, res) => {
	const { value } = req.body;
	const userId = req.decoded.u_id;

	let existingTag = await query(
		`
		SELECT value, t_id 
		FROM tags 
		WHERE LOWER(value) = $1
	`,
		[value.toLowerCase()],
	);
	if (!!existingTag.rows.length) {
		let existingConnection = await query(
			`
			SELECT u_id FROM users_tags 
			WHERE t_id = $1 AND u_id = $2`,
			[existingTag.rows[0].t_id, userId],
		);
		if (!!existingConnection.rows.length) {
			return res.json({ code: 1, message: 'Tag already added to user' });
		} else {
			await query(
				`
			INSERT INTO users_tags(t_id, u_id)
			VALUES ($1, $2)
		`,
				[existingTag.rows[0].t_id, userId],
			);
			return res.json({ code: 2, message: 'Added existing tag to user' });
		}
	} else {
		const client = await connect();
		try {
			await client.query('BEGIN');

			const createdTag = await client.query(
				`
				INSERT INTO tags(value)
				VALUES($1) RETURNING t_id
			`,
				[value.toLowerCase()],
			);

			await client.query(
				`
				INSERT INTO users_tags(t_id, u_id)
				VALUES ($1, $2)
			`,
				[createdTag.rows[0].t_id, userId],
			);

			await client.query('COMMIT');
		} catch (e) {
			await client.query('ROLLBACK');
			console.log(e);
			return res.status(500).json({
				success: false,
				message: 'Failed to create tag',
			});
		} finally {
			client.release();
		}
	}
	return res
		.status(200)
		.json({ code: 3, message: 'Created and added tag to user' });
}, 'Failed to create tag');

module.exports = {
	addTag,
	searchTags,
};
