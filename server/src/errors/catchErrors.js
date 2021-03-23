const CustomError = require('./customError');

const catchErrors = (requestHandler, errorMessage = 'Error') => {
	return async (req, res, next) => {
		try {
			return await requestHandler(req, res, next);
		} catch (error) {
			return next(
				new CustomError(
					error._response?.length ? error?.response : errorMessage,
					error._status || 500,
					error._description || error,
					error._message || '',
				),
			);
		}
	};
};

module.exports = catchErrors;
