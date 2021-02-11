const express = require("express");
const Post = require("./posts-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Post.get()
    .then(posts => res.status(200).json(posts))
    .catch(error => next(error));
});

router.get("/:id", (req, res, next) => {
  Post.getById(req.params.id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => next(error));
});

router.use((error, req, res, next) => {
  res.status(500).json({
    info: "Error occured inside postsRouter",
    message: error.message,
    stack: error.stack,
  });
});

module.exports = router;
