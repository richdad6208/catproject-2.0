const express = require("express");
const { createUser, loginUser } = require("../../controllers");
const auth = express.Router();

auth.route("/sign-up").post(createUser);

auth.route("/sign-in").post(loginUser);

module.exports = auth;
