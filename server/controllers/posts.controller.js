import PostMessage from "../models/postMessage.model.js";

// get all posts from database
export const getPosts = async (req, res) => {
  try {
    // get all posts from database
    const postMessages = await PostMessage.find();
    //response to user
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create a new post message
export const createPost = async (req, res) => {
  //get post from request user
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    // save post in to database
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
