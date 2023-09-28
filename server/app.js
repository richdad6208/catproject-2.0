require("dotenv").config();
const express = require("express");
const app = require("./src/init");
const { globalRouter, apiRouter } = require("./src/router");
require("./src/db");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/api", apiRouter);
