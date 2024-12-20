const { StatusCodes } = require("http-status-codes");

class BaseError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = BaseError;
