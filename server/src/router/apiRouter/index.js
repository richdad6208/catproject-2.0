const express = require("express");
const usersRouter = require("./usersRouter");
const posts = require("./posts");
const authRouter = require("./auth");
const api = express.Router();

api.use("/posts", posts);
api.use("/users", usersRouter);
api.use("/auth", authRouter);
module.exports = api;
