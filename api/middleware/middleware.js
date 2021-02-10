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
    const user = await User.getById(req.params.id);
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(404).json(`user with id: ${req.params.id} not found`);
    }
  } catch (error) {
    res.status(500).json("Could not validate user id");
  }
}

async function validateUser(req, res, next) {
  try {
    const user = await Users.get(req.body);
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(404).json(`user with id ${req.body} not found`);
    }
  } catch (error) {
    res.status(500).json("Could not validate user");
  }
}

function validatePost(req, res, next) {
  if (req.body.name) {
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
