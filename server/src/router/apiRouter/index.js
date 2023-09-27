const express = require("express");
const auth = require("./auth");
const posts = require("./posts");
const api = express.Router();

api.use("/posts", posts);
api.use("/auth", auth);

module.exports = api;
