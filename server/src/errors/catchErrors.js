const CustomError = require("./customError");

const catchErrors = (requestHandler, errorMessage = "Error") => {
  return async (req, res, next) => {
    try {
      return await requestHandler(req, res, next);
    } catch (error) {
      console.log(error);
      return next(
        new CustomError(
          error.response?.length ? error.response : errorMessage,
          error.status || 500,
          error.description || error,
          error.message
        )
      );
    }
  };
};

module.exports = catchErrors;
