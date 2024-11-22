const express = require("express");
const { roleController } = require("../../Controllers");

const roleRouter = express.Router();
roleRouter.post("/", roleController.create);
roleRouter.patch("/:roleid", roleController.update);
roleRouter.get("/:id", roleController.findById);
roleRouter.delete("/:id", roleController.destroy);

module.exports = roleRouter;
