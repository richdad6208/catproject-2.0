const express = require("express");
const globalRouter = express.Router();

globalRouter.route("/").get((req, res) => {
  res.json({ success: true, data: { name: "jaesung", age: 12 } });
});

module.exports = globalRouter;
