const DuplicateError = require("./duplicate.error");
const NotExistError = require("./notExist.error");
const UnAuthorizedError = require("./unauthorized.error");
const ValidationError = require("./validation.error");

module.exports = {
  DuplicateError,
  NotExistError,
  ValidationError,
  UnAuthorizedError,
};
