const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class UnAuthorizedError extends BaseError {
  constructor() {
    super("Please log in to perform this action", StatusCodes.UNAUTHORIZED);
  }
}

module.exports = UnAuthorizedError;
