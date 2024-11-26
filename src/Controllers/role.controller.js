const { RoleService } = require("../Services");
const { StatusCodes } = require("http-status-codes");

const roleService = new RoleService();

async function create(req, res, next) {
  try {
    const dataObj = {
      roleName: req.body.roleName,
      permissions: req.body.permissions ? req.body.permissions : [],
    };
    console.log(req.body);

    const response = await roleService.create(dataObj);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      data: response,
      err: {},
      message: "Role Created Successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const roleId = req.params.roleId;
    const dataObj = {
      roleName: req.body.roleName,
      permissions: req.body.permissions ? req.body.permissions : [],
    };
    const response = await roleService.update(roleId, dataObj);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      err: {},
      message: "Role updated successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function findById(req, res, next) {
  try {
    const response = await roleService.findById(req.params.roleId);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      err: {},
      message: "Role fetched Successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function findAll(req, res, next) {
  try {
    const response = await roleService.findAll();

    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      err: {},
      message: "Roles fetched Successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function destroy(req, res, next) {
  try {
    await roleService.delete(req.params.roleId);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: {},
      err: {},
      message: "Role deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  create,
  update,
  findById,
  findAll,
  destroy,
};
