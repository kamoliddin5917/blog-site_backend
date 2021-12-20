import { Request, Response } from "express";
import Post from "../models/Post";
import mongoose from "mongoose";
import Token from "../utils/jwt";

export default class {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const { token } = req.headers;
      const id: any = Token.verify(token);

      const post = await Post.create({ ...data, author: id.userId });

      if (!post)
        return res.status(500).json({ message: "Server Created Error" });

      res.status(201).json({ message: "Post Created!", post });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = req.body;
      const { postId } = req.params;
      const { token } = req.headers;
      const id: any = Token.verify(token);

      if (!mongoose.Types.ObjectId.isValid(postId))
        return res.status(400).json({ message: "Bad request!" });

      const updatePost = await Post.findOneAndUpdate(
        { _id: postId, author: id.userId },
        { $set: data }
      );

      if (!updatePost)
        return res.status(500).json({ message: "Server Update Error!" });

      res.status(200).json({ message: "Post Update!", updatePost });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { postId } = req.params;
      const { token } = req.headers;
      const id: any = Token.verify(token);

      if (!mongoose.Types.ObjectId.isValid(postId))
        return res.status(400).json({ message: "Bad request!" });

      const deletePost = await Post.findOneAndDelete().and([
        { author: id.userId },
        { _id: postId },
      ]);

      if (!deletePost)
        return res.status(500).json({ message: "Server Deleted Error!" });

      res.status(200).json({ message: "Post Deleted!", deletePost });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  }
}
