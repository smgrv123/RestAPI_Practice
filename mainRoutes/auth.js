const express = require("express");
const app = express();
const postAuth = require("../authRoutes/postSignUp");
const getAuth=require('../authRoutes/postLogIn')

app.use("/signup", postAuth);
app.use('/login',getAuth)

module.exports = app;
