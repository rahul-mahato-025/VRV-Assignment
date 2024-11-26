const { RoleDto } = require("../dtos");
const { DuplicateError, NotExistError } = require("../Errors");
const { RoleRepository } = require("../Repositories");

class RoleService {
  constructor() {
    this.roleRepository = new RoleRepository();
  }

  async create(dataObj) {
    try {
      const rolExists = await this.roleRepository.findByRoleName(
        dataObj.roleName
      );
      if (rolExists) throw new DuplicateError("role", dataObj.roleName);

      const response = await this.roleRepository.create(dataObj);
      return new RoleDto(response);
    } catch (error) {
      throw error;
    }
  }

  async update(id, dataObj) {
    try {
      const rolExists = await this.roleRepository.findById(id);
      if (!rolExists) throw new NotExistError("role", dataObj.roleName);

      const response = await this.roleRepository.update(id, dataObj);
      return new RoleDto(response);
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      const rolExists = await this.roleRepository.findById(id);
      if (!rolExists) throw new NotExistError("roleId", id);

      const response = await this.roleRepository.findById(id);
      return new RoleDto(response);
      e;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const response = await this.roleRepository.findAll();
      return response.map((role) => new RoleDto(role));
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const rolExists = await this.roleRepository.findById(id);
      if (!rolExists) throw new NotExistError("role", id);

      const response = await this.roleRepository.delete(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RoleService;
