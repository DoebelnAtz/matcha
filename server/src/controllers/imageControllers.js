const { parseQuery } = require('../utils');
const catchErrors = require('../errors/catchErrors');
const CustomError = require('../errors/customError');
const { query, connect } = require('../db');

const uploadImage = catchErrors(async (req, res) => {
	console.log(req.publicUrl);
	let user = await query(
		`
		SELECT pictures, u_id FROM users WHERE u_id = $1
	`,
		[req.decoded.u_id],
	);
	user = parseQuery(user)[0];
	console.log(user);
	let pics;
	if (!!user?.pictures.length) {
		pics = JSON.parse(user?.pictures);
	} else {
		pics = [];
	}
	console.log(pics);
	pics.push({ url: req.publicUrl, hash: req.body.hash });
	await query(
		`
		UPDATE users SET pictures = $1 WHERE u_id = $2
	`,
		[JSON.stringify(pics), req.decoded.u_id],
	);
	res.json({ pics });
}, '');

const deleteImage = catchErrors(async (req, res) => {
	let user = await query(
		`
		SELECT pictures, u_id FROM users WHERE u_id = $1
	`,
		[req.decoded.u_id],
	);
	user = parseQuery(user)[0];
	console.log(user);
	let pics;
	if (!!user?.pictures.length) {
		pics = JSON.parse(user?.pictures);
	} else {
		pics = [];
	}
	console.log(pics);
	pics.filter((pic) => pic.filename !== req.filename);
	await query(
		`
		UPDATE users SET pictures = $1 WHERE u_id = $2
	`,
		[JSON.stringify(pics), req.decoded.u_id],
	);
	res.json({ pics });
}, '');

module.exports = {
	uploadImage,
	deleteImage,
};
