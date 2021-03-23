
class CustomError extends Error {
	constructor(
		response = 'Internal server error',
		status = 500,
		description = '',
		message = '',
	) {
		super();

	}
}
module.exports = CustomError;
