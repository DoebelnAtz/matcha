const handleError = (error, req, res, next) => {
	console.log(error);
	return res.status(error._status || 500).json({
		error: error._response,
		message: error._message,
		code: error._code || 0,
	});
};

module.exports = {
	handleError,
};
