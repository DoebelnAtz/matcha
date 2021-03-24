const logIncoming = (req, res, next) => {
	console.log(`path: ${req.path} | query: ${JSON.stringify(req.query)}`);
	next();
};

module.exports = logIncoming;
