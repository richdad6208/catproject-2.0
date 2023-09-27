require("dotenv").config();
const express = require("express");
const app = require("./src/init");
const { globalRouter, api } = require("./src/router");
require("./src/db");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const token = jwt.sign({ foo: "bar" }, "coarse");
const passport = require("passport");

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/", globalRouter);

app.use("/api", api);
