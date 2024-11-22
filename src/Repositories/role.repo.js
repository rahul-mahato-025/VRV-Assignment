const Role = require("../Models/role.model");
const CrudRepository = require("./crud.repo");

class RoleRepository extends CrudRepository {
  constructor() {
    super(Role);
  }
}

module.exports = RoleRepository;
