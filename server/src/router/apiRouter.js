const express = require("express");
const apiRouter = express.Router();

apiRouter.route("/posts").get((req, res) => {
  console.log("hi");
});

apiRouter.route("/auth/sign-up").post((req, res) => {
  // const { email, password, userName } = req.body;
  console.log(req.body);
  res.end();
});

module.exports = apiRouter;
