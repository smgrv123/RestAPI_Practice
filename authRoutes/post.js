const express = require("express");
const router = express.Router();
const auth = require("../models/Auth");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const Bpassword = await bcrypt.hash(req.body.password, 10);
    const authPost = new auth({
      username: req.body.username,
      password: Bpassword,
    });
    const sendData = await authPost.save();
    res.json(sendData);
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
});

module.exports = router;