const { ValidationError } = require("../Errors");

function validateCreateUser(req, res, next) {
  if (!req.body.firstName || !req.body.email) {
    return next(new ValidationError("Missing required feilds"));
  }
  next();
}

function validateUpdateUser(req, res, next) {
  if (!req.body.firstName || !req.body.email) {
    return next(new ValidationError("Missing required feilds"));
  }
  next();
}

module.exports = {
  validateCreateUser,
  validateUpdateUser,
};
