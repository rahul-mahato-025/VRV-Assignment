const express = require("express");
const { roleController } = require("../../Controllers");

const roleRouter = express.Router();
roleRouter.post("/", roleController.create);
roleRouter.patch("/:roleId", roleController.update);
roleRouter.get("/:roleId", roleController.findById);
roleRouter.delete("/:roleId", roleController.destroy);

module.exports = roleRouter;
