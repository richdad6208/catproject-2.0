const express = require("express");
const usersRouter = express.Router();
const { createUser, loginUser } = require("../../controllers");

usersRouter.route("/sign-up").post(createUser);

usersRouter.route("/sign-in").post(loginUser);

module.exports = usersRouter;
