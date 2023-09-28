const express = require("express");
const authenticate = require("../../middlewares/authenticate");
const authRouter = express.Router();

authRouter.get("/", authenticate, (req, res) => {
  console.log("hi");
  res.end();
});

module.exports = authRouter;
