const express = require("express");
const Post = require("./posts-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Post.get()
    .then(posts => res.status(200).json(posts))
    .catch(error => {
      console.log(error);
    });
});

router.get("/:id", (req, res, next) => {
  Post.getById(req.params.id)
    .then(post => {
      res.status(201).json(post);
      next();
    })
    .catch(error => {
      res.status(500).json({
        message: `Server Error: ${error.message}, \n Stack: ${error.stack}`,
      });
    });
});

router.use((error, req, res, next) => {
  res.status(500).json({
    info: "something horrible happened inside postsRouter",
    message: error.message,
    stack: error.stack,
  });
});

module.exports = router;
