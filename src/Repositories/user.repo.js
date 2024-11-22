const User = require("../Models/user.model");
const CrudRepository = require("./");

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
}

module.exports = UserRepository;
