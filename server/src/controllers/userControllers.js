const catchErrors = require('../errors/catchErrors');
const { parseQuery } = require('../utils');
const CustomError = require('../errors/customError');
const { query, connect } = require('../db');

const getMe = catchErrors(async (req, res) => {
	const id = req.decoded.u_id;
	let user = await query(
		`
        SELECT email, name, dob, u_id, verified FROM users WHERE u_id = $1
    `,
		[id],
	);
	user = parseQuery(user);
	res.json(user[0]);
}, '');

module.exports = {
	getMe,
};
