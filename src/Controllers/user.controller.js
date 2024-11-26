const { UserService } = require("../Services");
const { StatusCodes } = require("http-status-codes");

const userService = new UserService();

async function create(req, res, next) {
  try {
    const dataObj = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      // password: req.body.password,
      roles: req.body.roles ? req.body.roles : [],
      status: req.body.status ? req.body.status : "active",
      isAdmin: req.body.isAdmin ? req.body.isAdmin : false,
    };
    const response = await userService.create(dataObj);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      data: response,
      err: {},
      message: "User Created Successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const userId = req.params.userId;
    console.log(userId, req.body);

    const dataObj = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      roles: req.body.roles ? req.body.roles : [],
      status: req.body.status ? req.body.status : "active",
      isAdmin: req.body.isAdmin ? req.body.isAdmin : false,
    };

    const response = await userService.update(userId, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      err: {},
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function findById(req, res, next) {
  try {
    const response = await userService.findById(req.params.userId);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      err: {},
      message: "User fetched Successfully",
    });
  } catch (error) {
    console.log("User fetch Error", error);
  }
}

async function findAll(req, res, next) {
  try {
    const response = await userService.findAll(req.params.userId);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      err: {},
      message: "Users fetched Successfully",
    });
  } catch (error) {
    console.log("Users fetch Error", error);
  }
}

async function destroy(req, res, next) {
  try {
    await userService.delete(req.params.userId);
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
  findById,
  findAll,
  destroy,
};
