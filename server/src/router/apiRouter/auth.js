const express = require("express");
const { createUser, loginUser } = require("../../controllers");
const passport = require("passport");
const { setUserToken } = require("../../utils/jwt");
const auth = express.Router();

auth
  .route("/")
  .post(passport.authenticate("jwt", { session: false }), (req, res, next) => {
    setUserToken(res, req.user);
    res.redirect("/");
  });

//   .post(passport.authenticate("Jwt", { session: false }), (req, res) => {
//     console.log(req.user);
//     res.end();
//   });

auth.route("/sign-up").post(createUser);

auth.route("/sign-in").post(loginUser);

module.exports = auth;
