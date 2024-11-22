const express = require("express");
const { userController } = require("../../Controllers");
const { validateCreateUser } = require("../../Models/user.middleware");

const userRouter = express.Router();
userRouter.post("/", validateCreateUser, userController.create);
userRouter.patch("/:userId", userController.update);
userRouter.get("/:userId", userController.findById);
userRouter.delete("/:userId", userController.destroy);

module.exports = userRouter;
