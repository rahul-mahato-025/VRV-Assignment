const { DuplicateError, NotExistError } = require("../Errors");
const { UserRepository } = require("../Repositories");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(dataObj) {
    try {
      const userExists = await this.userRepository.findByEmail(dataObj.email);
      if (userExists) throw new DuplicateError("email", dataObj.email);

      const response = await this.userRepository.create(dataObj);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id, dataObj) {
    try {
      const userExists = await this.userRepository.findById(id);
      if (!userExists) throw new NotExistError("userId", id);

      const response = await this.userRepository.update(id, dataObj);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      const response = await this.userRepository.findById(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const response = await this.userRepository.delete(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
