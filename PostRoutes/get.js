const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");


router.get("/", async (req, res) => {
  try {
    // console.log(Post.find(), "working");
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
      console.log('not working');
    res.json({ message: error });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const particular = await Post.findById(req.params.postId);
    res.json(particular);
  } catch (err) {
    res.json({ messagse: err });
  }
});

module.exports = router;
