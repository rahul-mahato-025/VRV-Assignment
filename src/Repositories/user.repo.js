const User = require("../Models/user.model");
const CrudRepository = require("./crud.repo");

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
}

module.exports = UserRepository;
