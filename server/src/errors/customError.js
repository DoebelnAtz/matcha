class CustomError extends Error {
	constructor(
		response = 'Internal server error',
		status = 500,
		description = '',
		message = '',
	) {
		super();
		this._response = response;
		this._status = status;
		this._description = description;
		this._message = message;
	}
}
module.exports = CustomError;
