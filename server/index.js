require("dotenv").config();
const express = require("express");
const app = require("./src/init");
const { apiRouter, globalRouter } = require("./src/router");
require("./src/db");
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/", globalRouter);

app.use("/api", apiRouter);
