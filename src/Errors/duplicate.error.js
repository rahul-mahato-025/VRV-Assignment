const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class DuplicateError extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      `The resource ${resourceName} with value ${resourceValue} already exists.`,
      StatusCodes.BAD_REQUEST
    );
  }
}

module.exports = DuplicateError;
