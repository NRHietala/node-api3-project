const express = require("express");
const Post = require("./posts-model");

const { validatePost } = require("../middleware/middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
  Post.get()
    .then(posts => res.status(200).json(posts))
    .catch(error => {
      console.log(error);
    });
});

router.get("/:id", validatePost, (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

module.exports = router;
