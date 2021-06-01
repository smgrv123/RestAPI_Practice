const express = require("express");
const app = express();
const postAuth = require("../authRoutes/post");
const getAuth=require('../authRoutes/get')

app.use("/signup", postAuth);
app.use('/login',getAuth)

module.exports = app;
