import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postsRouter from "./routes/posts.router.js";

// initialize server instance
const app = express();

// routes
app.use("/api/v1/posts", postsRouter);

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// cors for cross origin resource sharing
app.use(cors());

// mongoose connection
// YlBd2JmMCIJIIQGY
// mongodb+srv://sm829564:YlBd2JmMCIJIIQGY@memories-blog.a5kbzr3.mongodb.net/memories-blog
const CONNECTION_URL =
  "mongodb+srv://sm829564:YlBd2JmMCIJIIQGY@memories-blog.a5kbzr3.mongodb.net/memories-blog";
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection established"))
  .catch((error) => console.log(error.message));

// listen to port
const PORT = process.env.PORT || 5000;

// listen to server
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
