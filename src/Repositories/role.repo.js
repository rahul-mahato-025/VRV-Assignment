const Role = require("../Models/role.model");
const CrudRepository = require("./crud.repo");

class RoleRepository extends CrudRepository {
  constructor() {
    super(Role);
  }

  async findByRoleName(roleName) {
    try {
      const response = await this.model.findOne({ roleName });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RoleRepository;
