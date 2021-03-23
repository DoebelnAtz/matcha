const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
	let token =
		(req.headers['x-access-token']) ||
		(req.headers['authorization']);
	if (!token) {
		return res.status(401).json({
			success: false,
			message: 'Invalid token',
		});
	}
	if (token.startsWith('Bearer ')) {
		token = token.slice(7, token.length);
	}

	if (token) {
		jwt.verify(
			token,
			process.env.TOKEN_PASS,
			(err, decoded) => {
				if (err) {
					return res.status(401).json({
						success: false,
						message: 'Invalid token',
					});
				} else {
					req.decoded = decoded;
					next();
				}
			},
		);
	} else {
		return res.status(401).json({
			success: false,
			message: 'Invalid token',
		});
	}
};

module.exports = checkToken;

