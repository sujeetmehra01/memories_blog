import express from "express";
import { createPost, getPosts } from "../controllers/posts.controller.js";

const postsRouter = express.Router();

postsRouter.get("/", getPosts);
postsRouter.post("/create", createPost);

export default postsRouter;
