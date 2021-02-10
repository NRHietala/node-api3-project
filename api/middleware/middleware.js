const Post = require("../posts/posts-model");
const User = require("../users/users-model");

function logger(req, res, next) {
  console.log(
    `[${new Date().toUTCString()}] ${req.method} to ${req.url} from ${req.get(
      "origin"
    )}`
  );
  next();
}

async function validateUserId(req, res, next) {
  try {
    const post = await User.getById(req.params.id);
    if (post) {
      req.post = post;
      next();
    } else {
      res.status(404).json(`post with id: ${req.params.id} not found`);
    }
  } catch (error) {
    res.status(500).json("ouch");
  }
}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {
  if (req.body) {
    next();
  } else {
    res.status(400).json({ message: "Please fill out all fields" });
  }
}

module.exports = {
  logger,
  validateUser,
  validateUserId,
  validatePost,
};
