const express = require("express");
const { userController } = require("../../Controllers");

const userRouter = express.Router();
userRouter.post("/", userController.create);
userRouter.patch("/:userId", userController.update);
userRouter.get("/:id", userController.findById);
userRouter.delete("/:id", userController.destroy);

module.exports = userRouter;
