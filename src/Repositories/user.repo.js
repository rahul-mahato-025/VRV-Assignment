const User = require("../Models/user.model");
const CrudRepository = require("./crud.repo");

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async findByEmail(email) {
    try {
      const response = await this.model.findOne({ email });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
