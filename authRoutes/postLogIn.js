const express = require("express");
const router = express.Router();
const auth = require("../models/Auth");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    await auth
      .find()
      .select("username")
      .then((users) => {
        users.forEach((docs) => {
          if (docs.username === req.body.username) {
            bcrypt.compare(
              req.body.password,
              docs.password,
              function (err, result) {
                if (!err) {
                  res.json({ result: result });
                }
              }
            );
          }
        });
      });
  } catch (error) {
    res.send({ message: error });
  }
});

module.exports = router;
