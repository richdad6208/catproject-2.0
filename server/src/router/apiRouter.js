const express = require("express");
const apiRouter = express.Router();

apiRouter.route("/posts").get((req, res) => {
  console.log("hi");
});

module.exports = apiRouter;
