import { Request, Response, RequestHandler } from 'express';
import PostMessage from "../models/postMessage";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const postMessages = await PostMessage.find();

    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    }
  }
};

export const createPost: RequestHandler = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    if (error instanceof Error) {
      res.status(409).json({ message: error.message });
    }
  }
};
