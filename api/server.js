const express = require("express");
const server = express();
server.use(express.json());

const postRouter = require("../api/posts/posts-router");
const userRouter = require("../api/users/users-router");

const { logger } = require("./middleware/middleware");

server.use("/api/posts", logger, postRouter);
server.use("/api/users", logger, userRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
