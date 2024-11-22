const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotExistError extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      `The ${resourceName} with value ${resourceValue} does not exists.`,
      StatusCodes.BAD_REQUEST
    );
  }
}

module.exports = NotExistError;
