import { Request, Response } from "express";
import Comment from "../models/Comment";
import mongoose from "mongoose";
import Token from "../utils/jwt";

export default class {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const { token } = req.headers;

      const id: any = Token.verify(token);

      if (!mongoose.Types.ObjectId.isValid(data.post))
        return res.status(400).json({ message: "Bad request!" });

      const comment = await Comment.create({ ...data, author: id.userId });

      if (!comment)
        return res.status(500).json({ message: "Server Created Error" });

      res.status(201).json({ message: "Comment Created!", comment });
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: "Server Error!" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = req.body;
      const { commentId } = req.params;
      const { token } = req.headers;
      const id: any = Token.verify(token);

      if (!mongoose.Types.ObjectId.isValid(commentId))
        return res.status(400).json({ message: "Bad request!" });

      const updateComment = await Comment.findOneAndUpdate(
        { _id: commentId, author: id.userId },
        { $set: data }
      );

      if (!updateComment)
        return res.status(500).json({ message: "Server Update Error!" });

      res.status(200).json({ message: "Comment Update!", updateComment });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { commentId } = req.params;
      const { token } = req.headers;
      const id: any = Token.verify(token);

      if (!mongoose.Types.ObjectId.isValid(commentId))
        return res.status(400).json({ message: "Bad request!" });

      const deleteComment = await Comment.findOneAndDelete().and([
        { author: id.userId },
        { _id: commentId },
      ]);

      if (!deleteComment)
        return res.status(500).json({ message: "Server Deleted Error!" });

      res.status(200).json({ message: "Comment Deleted!", deleteComment });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  }
}
