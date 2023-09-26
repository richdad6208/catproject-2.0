const express = require("express");
const { createUser } = require("../controllers/user");
const apiRouter = express.Router();

apiRouter.route("/posts").get((req, res) => {
  console.log("hi");
});

apiRouter.route("/auth/sign-up").post(createUser);

module.exports = apiRouter;
