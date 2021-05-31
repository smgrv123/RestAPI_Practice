const express = require("express");
const app = express();
require("dotenv/config");
const postPageAPI = require("./mainRoutes/app");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.listen(3000);
app.use("/posts", postPageAPI);

mongoose.connect(
  process.env.DB_CONNECTOR,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);
