const { UnAuthorizedError } = require("../Errors");
const { UserService } = require("../Services");
const jwtService = require("../Services/jwt.service");

function validateToken(req, res, next) {
  const { token } = req.cookies;
  if (!token) return next(new UnAuthorizedError());

  const validToken = jwtService.verifyToken(token);
  if (!validToken) return next(new UnAuthorizedError());

  const user = new UserService().findById(validToken.id);
  if (!user) return next(new UnAuthorizedError());

  req.user = user;
  next();
}

module.exports = {
  validateToken,
};
