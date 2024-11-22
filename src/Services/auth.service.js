const bcrypt = require("bcrypt");
const { UserRepository } = require("../Repositories");
const { ValidationError } = require("../Errors");
const jwtService = require("./jwt.service");
const UserService = require("./user.service");

class AuthService {
  constructor() {
    this.userService = new UserService();
    this.userRepository = new UserRepository();
  }

  async register(userData) {
    try {
      const user = await this.userService.create(userData);
      const token = jwtService.generateToken({
        id: user._id,
        firstName: user.firstName,
        email: user.email,
      });

      return token;
    } catch (error) {
      throw error;
    }
  }

  async login(userData) {
    try {
      const user = await this.userRepository.findByEmail(userData.email);
      if (!user) throw new ValidationError("Invalid Credentials");

      const isValidPass = this.#comparePassword(
        userData.password,
        user.password
      );
      if (!isValidPass) throw new ValidationError("Invalid Credentials");

      const token = jwtService.generateToken({
        id: user._id,
        firstName: user.firstName,
        email: user.email,
      });

      return token;
    } catch (error) {
      throw error;
    }
  }

  async logout() {}

  #comparePassword(plainPass, encryptedPass) {
    return bcrypt.compareSync(plainPass, encryptedPass);
  }
}

module.exports = AuthService;
