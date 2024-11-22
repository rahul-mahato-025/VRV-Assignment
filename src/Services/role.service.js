const { RoleRepository } = require("../Repositories");

class RoleService {
  constructor() {
    this.roleRepository = new RoleRepository();
  }

  async create(dataObj) {
    try {
      const response = await this.roleRepository.create(dataObj);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id, dataObj) {
    try {
      const response = await this.roleRepository.update(id, dataObj);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      const response = await this.roleRepository.findById(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const response = await this.roleRepository.delete(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RoleService;
