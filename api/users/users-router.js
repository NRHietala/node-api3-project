const express = require("express");
const router = express.Router();

const User = require("./users-model");
const Post = require("../posts/posts-model");

const {
  validateUser,
  validateUserId,
  validatePost,
} = require("../middleware/middleware");

router.get("/", (req, res, next) => {
  User.get()
    .then(user => res.status(200).json(user))
    .catch(error => next(error));
});

router.get("/:id", validateUserId, (req, res, next) => {
  res.status(200).json(req.user);
});

router.post("/", validateUser, (req, res, next) => {
  User.insert(req.body)
    .then(user => res.status(201).json(user))
    .catch(error => {
      next(error);
    });
});

router.put("/:id", validateUserId, validatePost, (req, res, next) => {
  User.update(req.params.id, req.body)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      next(error);
    });
});

router.delete("/:id", validateUserId, (req, res, next) => {
  User.remove(req.params.id)
    .then(tablesChanged => {
      res.status(200).json(tablesChanged);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/:id/posts", validateUserId, (req, res, next) => {
  User.getUserPosts(req.params.id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      next(error);
    });
});

router.post("/:id/posts", validateUserId, validatePost, (req, res, next) => {
  const messageInfo = { user_id: req.params.id, ...req.body };

  Post.insert(messageInfo)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(error => {
      next(error);
    });
});

router.use((error, req, res, next) => {
  res.status(500).json({
    info: "Error occured inside UserRouter",
    message: error.message,
    stack: error.stack,
  });
});

module.exports = router;
