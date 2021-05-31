const express = require("express");

const router = express.Router();

const Post = require("../models/Posts");

//* get all the posts back
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

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

  //   post
  //     .save()
  //     .then((data) => {
  //       res.status(200).json(data);
  //     })
  //     .catch((err) => res.json({ message: err }));
});

// * get a particular post
// router.get("/:postId", async (req, res) => {
//   try {
//     const particular = await Post.findById(req.params.postId);
//     res.json(particular);
//   } catch (err) {
//     res.json({ message: err.message });
//   }
// });

// * delete post
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await Post.deleteOne({ _id: req.params.id });
//     res.json({
//       id: deleted.$clusterTime.signature.keyId,
//       message: "Object has been successfully removed",
//     });
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

// *updated posts

// router.patch("/:id", async (req, res) => {
//   try {
//     const update = await Post.updateOne(
//       { _id: req.params.id },
//       { $set: { title: req.body.title } }
//     );
//     res.json(update);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

module.exports = router;
