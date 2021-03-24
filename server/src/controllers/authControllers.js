const mailgun = require('mailgun-js');
const catchErrors = require('../errors/catchErrors');
const CustomError = require('../errors/customError');
const bcrypt = require('bcrypt');
const { v4 } = require('uuid');
const { query, connect } = require('../db');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { calculateAge } = require('../utils');

const signUp = catchErrors(async (req, res) => {
	const { email, password, name, dob } = req.body;

	if (!email.length || !password.length || !name.length) {
		throw new CustomError(
			'Invalid input',
			422,
			'User entered empty password or email',
			'Password and email are required',
		);
	} else if (calculateAge(new Date(dob)) < 18) {
		throw new CustomError(
			'Invalid age',
			401,
			'User is minor',
			'Minimum age is 18',
		);
	} else {
		const client = await connect();

		let id = v4();
		let hashedPassword = await bcrypt.hash(password, 10);
		try {
			await client.query('BEGIN');

			await client.query(
				`INSERT INTO users (
                u_id,
                name,
                dob,
                password,
                email
            ) VALUES (
              $1,
              $2,
              $3,
              $4,
              $5
            )`,
				[id, name, dob, hashedPassword, email],
			);
			let emailRecipient = {};
			emailRecipient[email] = { id: id };
			await sendEmailInvites(emailRecipient);
			await client.query('COMMIT');
		} catch (e) {
			await client.query('ROLLBACK');

			res.status(500).json({
				success: false,
				message: 'email already exists',
			});
		} finally {
			client.release();
		}
	}

	res.json({ success: true });
}, 'Failed to sign up');

const getUserInfo = catchErrors(async (req, res) => {}, '');
const updateUserInfo = catchErrors(async (req, res) => {}, '');

const verifyToken = catchErrors(async (req, res) => {
	const u_id = req.params.uid;
	await query(
		`
		'SELECT email, u_id, password, verified FROM users WHERE u_id = $1',
		
	`,
		[u_id],
	);
	res.json({ success: true });
}, 'Failed to verify token');

const verifyUser = catchErrors(async (req, res) => {
	const { gender, preference, email, bio, name } = req.body;
	const u_id = req.params.uid;
	await query(
		`
		UPDATE users SET gender = $1, preference = $2, bio = $3, verified = TRUE where u_id = $4
		
	`,
		[gender, preference, bio, u_id],
	);
	res.json({ success: true });
}, 'Failed to verify user');

const logIn = catchErrors(async (req, res) => {
	const { email, password } = req.body;

	let existingUser;

	existingUser = await query(
		'SELECT email, u_id, password, verified FROM users WHERE email = $1',
		[email.toLowerCase()],
	);
	existingUser = existingUser.rows[0];

	// Even though this seems like a 404 error we don't want to return information
	// on whether or not a user exists
	if (!existingUser) {
		throw new CustomError(
			`Failed to log in: invalid credentials`,
			401,
			`Failed to log in did not find user: ${email}`,
		);
	}

	let isValidPass = false;
	try {
		isValidPass = await bcrypt.compare(password, existingUser.password);
	} catch (e) {
		throw new CustomError(
			`Failed to log in`,
			500,
			`Bcrypt failed to compare passwords`,
		);
	}

	if (!isValidPass) {
		throw new CustomError('Failed to log in', 401, 'Invalid credentials');
	}
	let token = jwt.sign(
		{
			email: email,
			u_id: existingUser.u_id,
			verified: existingUser.verified,
		},
		process.env.TOKEN_PASS || 'development',
		{
			expiresIn: '24h', // expires in 24 hours
		},
	);

	let refreshToken = jwt.sign(
		{
			email: email,
			u_id: existingUser.u_id,
			verified: existingUser.verified,
		},
		process.env.REFRESH_PASS || 'development',
		{
			expiresIn: '4d', // expires in 4 days
		},
	);
	// return the JWT token for the future API calls
	res.json({
		success: true,
		message: 'Authentication successful!',
		token: token,
		refreshToken: refreshToken,
		user: {
			email: existingUser.email,
			u_id: existingUser.u_id,
			verified: existingUser.verified,
		},
	});
}, 'Failed to log in');

const sendEmailInvites = async (recipient) => {
	//const formatted = data.emailHTML.replace('<URL_PLACEHOLDER>', link);
	const domain = 'mg.atzimuth.com';
	const key = process.env.EMAIL_API_KEY;

	const mg = mailgun({
		apiKey: key,
		domain: domain,
		host: 'api.eu.mailgun.net',
		testMode: false,
	});
	let html = await fs.readFileSync(
		path.resolve(__dirname, '../html-templates/email.html'),
		'utf8',
	);

	const message = {
		from: 'Matcha <noreply@mg.atzimuth.com>',
		to: Object.keys(recipient),
		subject: 'Verify your account on matcha',
		html: html,
		'recipient-variables': JSON.stringify(recipient),
	};
	mg.messages().send(message, (error, body) => {
		if (error) {
			throw new Error('failed to send confirmation email');
		}
		console.log(body);
	});
};

module.exports = { signUp, logIn, verifyUser };
