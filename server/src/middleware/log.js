const logIncoming = (req, res, next) => {
	if (process.env.NODE_ENV !== 'test')
		console.log(
			`path: ${req.path} | type: ${req.method} | query: ${JSON.stringify(
				req.query,
			)}`,
		);
	next();
};

module.exports = logIncoming;
