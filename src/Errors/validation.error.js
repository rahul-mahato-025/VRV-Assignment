const { StatusCodes } = require("http-status-codes");

class ValidationError extends Error {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

module.exports = ValidationError;
