const express = require("express");
const Post = require("./posts-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Post.get().then(posts => res.status(200).json(posts));
});

router.get("/:id", (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

// do not forget to export the router

module.exports = router;
