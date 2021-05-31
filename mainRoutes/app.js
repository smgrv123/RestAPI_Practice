const express = require("express");
const app = express.Router();
const postRoute = require("../PostRoutes/post");
const getRoute = require("../PostRoutes/get");
const deleteRoute = require("../PostRoutes/delete");
const updateRoute = require("../PostRoutes/update");

app.use("/get", getRoute);
app.use("/delete", deleteRoute);
app.use("/posts", postRoute);
app.use("/update", updateRoute);

module.exports = app;
