const catchErrors = require('../errors/catchErrors');
const { parseQuery } = require('../utils');
const CustomError = require('../errors/customError');
const { query, connect } = require('../db');

const getMe = catchErrors(async (req, res) => {
	const id = req.decoded.u_id;
	let user = await query(
		`
        SELECT email, name, dob, u_id, bio, verified, preference, gender, pictures FROM users WHERE u_id = $1
    `,
		[id],
	);
	user = parseQuery(user)[0];
	user = { ...user, pictures: JSON.parse(user.pictures) };
	res.json(user);
}, '');

const getProfileFeed = catchErrors(async (req, res) => {
	const id = req.decoded.u_id;
	const page = req.query.page;
	let profiles = await query(
		`
		SELECT name, dob, gender, bio, pictures 
		FROM users 
		WHERE NOT u_id = $1 
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

module.exports = {
	getMe,
	getProfileFeed,
};
