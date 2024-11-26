class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(dataObj) {
    try {
      const response = await this.model.create(dataObj);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id, dataObj) {
    try {
      const response = await this.model.findByIdAndUpdate(id, dataObj, {
        new: true,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const response = await this.model.find({});
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      await this.model.findByIdAndDelete(id);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CrudRepository;
