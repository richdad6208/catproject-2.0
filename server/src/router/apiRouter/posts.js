const express = require("express");
const posts = express.Router();

posts.route("/", (req, res) => {
  console.log("hi");
});

module.exports = posts;
