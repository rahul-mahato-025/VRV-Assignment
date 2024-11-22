const User = require("../Models/user.model");
const CrudRepository = require("./");

class RoleRepository extends CrudRepository {
  constructor() {
    super(User);
  }
}

module.exports = RoleRepository;
