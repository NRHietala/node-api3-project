const express = require("express");
const User = require("./users-model");

const router = express.Router();

router.get("/", (req, res) => {
  User.get()
    .then(user => res.status(200).json(user))
    .catch(error => {
      console.log(error);
    });
});

router.get("/:id", (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
});

router.post("/", (req, res) => {
  // do your magic!
  // this needs a middleware to check that the request body is valid
});

router.put("/:id", (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete("/:id", (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
});

router.get("/:id/posts", (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

module.exports = router;
