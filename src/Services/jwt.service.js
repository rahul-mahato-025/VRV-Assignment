const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRY } = require("../configs/server.config");

class JWtService {
  async generateToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
  }

  async verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
  }
}

module.exports = new JWtService();
