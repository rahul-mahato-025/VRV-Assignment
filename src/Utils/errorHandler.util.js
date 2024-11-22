const { StatusCodes } = require("http-status-codes");

function errorhandler(err, req, res, next) {
  return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    data: {},
    err: err.message,
  });
}

module.exports = errorhandler;
