const { UserRepository } = require("../Repositories");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(dataObj) {
    try {
      const response = await this.userRepository.create(dataObj);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id, dataObj) {
    try {
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
