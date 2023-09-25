const express = require("express");
const globalRouter = express.Router();

globalRouter.route("/").get((req, res) => {
  res.send("hellow");
});

module.exports = globalRouter;
