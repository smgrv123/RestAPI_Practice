const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");


// * post new data to the database
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedData = await post.save();
    res.json(savedData);
  } catch (error) {
    res.json({ message: error });
  }
});


module.exports = router;
