const { RoleService } = require("../Services");
const { StatusCodes } = require("http-status-codes");

this.roleService = new RoleService();

async function create(req, res, next) {
  try {
    const dataObj = {
      roleName: req.body.roleName,
      permissions: req.body.permission ? req.body.permission : [],
    };
    const response = await this.roleService.create(dataObj);
    return res.status(StatusCodes.CREATED).jons({
      success: true,
      data: response,
      err: {},
      message: "Role Created Successfully",
    });
  } catch (error) {
    console.log("Role Creation Error");
  }
}

async function update(req, res, next) {
  try {
    const roleId = req.params.roleId;
    const dataObj = {
      roleName: req.body.roleName,
      permissions: req.body.permission ? req.body.permission : [],
    };
    const response = await this.roleService.update(roleId, dataObj);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      err: {},
      message: "Role updated successfully",
    });
  } catch (error) {
    console.log("Role updation Error");
  }
}

async function find(req, res, next) {
  try {
    const response = await this.roleService.create(req.params.roleId);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      err: {},
      message: "Role fetched Successfully",
    });
  } catch (error) {
    console.log("Role fetch Error");
  }
}

async function destroy(req, res, next) {
  try {
    await this.roleService.create(req.params.roleId);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: {},
      err: {},
      message: "Role deleted Successfully",
    });
  } catch (error) {
    console.log("Role deletion Error");
  }
}

module.exports = {
  create,
  update,
  find,
  destroy,
};
