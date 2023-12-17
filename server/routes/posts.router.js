import express from "express";

const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  res.send("Hello World!");
});

export default postsRouter;
