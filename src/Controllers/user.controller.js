const { UserService } = require("../Services");
const { StatusCodes } = require("http-status-codes");

this.userService = new UserService();

async function create(req, res, next) {
  try {
    const dataObj = {
      firstname: req.body.firstName,
      lastname: req.body.lastname,
      status: req.body.status ? req.body.status : "active",
      isAdmin: req.body.isAdmin ? req.body.isAdmin : false,
    };
    const response = await this.userService.create(dataObj);
    return res.status(StatusCodes.CREATED).jons({
      success: true,
      data: response,
      err: {},
      message: "User Created Successfully",
    });
  } catch (error) {
    console.log("User Creation Error");
  }
}

async function update(req, res, next) {
  try {
    const userid = req.params.userid;
    const dataObj = {
      firstname: req.body.firstName,
      lastname: req.body.lastname,
      status: req.body.status ? req.body.status : "active",
      isAdmin: req.body.isAdmin ? req.body.isAdmin : false,
    };
    const response = await this.userService.update(userid, dataObj);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      err: {},
      message: "User updated successfully",
    });
  } catch (error) {
    console.log("User updation Error");
  }
}

async function find(req, res, next) {
  try {
    const response = await this.userService.create(req.params.userid);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      err: {},
      message: "User fetched Successfully",
    });
  } catch (error) {
    console.log("User fetch Error");
  }
}

async function destroy(req, res, next) {
  try {
    const response = await this.userService.create(req.params.userid);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: {},
      err: {},
      message: "User deleted Successfully",
    });
  } catch (error) {
    console.log("User deletion Error");
  }
}

module.exports = {
  create,
  update,
  find,
  destroy,
};
