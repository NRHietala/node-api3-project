const express = require("express");
const server = express();
server.use(express.json());

const postRouter = require("../api/posts/posts-router");

// global middlewares and routes need to be connected here
server.use("/api/posts", postRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
