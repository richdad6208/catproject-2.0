require("dotenv").config();
const express = require("express");
const app = require("./src/init");
const path = require("path");
const { apiRouter, globalRouter } = require("./src/router");
require("./src/db");

app.set(express.json());
app.set(express.urlencoded({ extended: false }));
app.use("/", globalRouter);

app.use("/api", apiRouter);
