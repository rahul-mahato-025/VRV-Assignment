const express = require("express");
const { userController } = require("../../Controllers");
const { validateCreateUser } = require("../../Middlewares/user.middleware");
const { validateToken } = require("../../Middlewares/auth.middleware");

const userRouter = express.Router();
userRouter.post("/", validateCreateUser, userController.create);
userRouter.patch("/:userId", userController.update);
userRouter.get("/:userId", validateToken, userController.findById);
userRouter.delete("/:userId", userController.destroy);

module.exports = userRouter;
