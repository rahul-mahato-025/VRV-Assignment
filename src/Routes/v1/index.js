const express = require("express");
const userRouter = require("./user.route");
const roleRouter = require("./role.route");

const v1Router = express.Router();
v1Router.use("/users", userRouter);
v1Router.use("/roles", roleRouter);

module.exports = v1Router;
