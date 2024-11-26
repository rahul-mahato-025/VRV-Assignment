const { UserDto } = require("../dtos");
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
      return new UserDto(response);
    } catch (error) {
      throw error;
    }
  }

  async update(id, dataObj) {
    try {
      const userExists = await this.userRepository.findById(id);
      if (!userExists) throw new NotExistError("userId", id);

      const response = await this.userRepository.update(id, dataObj);
      return new UserDto(response);
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      const response = await this.userRepository.findById(id);
      return new UserDto(response);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const response = await this.userRepository.findAll();
      return response.map((user) => new UserDto(user));
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
