const logIncoming = (req, res, next) => {
	console.log(
		`path: ${req.path} | type: ${req.method} | query: ${JSON.stringify(
			req.query,
		)}`,
	);
	next();
};

module.exports = logIncoming;
