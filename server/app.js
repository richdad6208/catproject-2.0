require("dotenv").config();
const express = require("express");
const app = require("./src/init");
const { globalRouter, apiRouter } = require("./src/router");
require("./src/db");
const morgan = require("morgan");
const passport = require("passport");
const getUserFromJwt = require("./src/middlewares/get-user-from-token");
require("./src/passport")();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use(morgan("dev"));

app.use(getUserFromJwt);
app.use("/", globalRouter);
app.use("/api", apiRouter);
