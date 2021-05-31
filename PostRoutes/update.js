const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");

router.patch("/:id", async (req, res) => {
    try {
      const update = await Post.updateOne(
        { _id: req.params.id },
        { $set: { title: req.body.title } }
      );
      res.json(update);
    } catch (error) {
      res.json({ message: error });
    }
  });

module.exports = router;
