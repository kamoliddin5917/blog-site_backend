import { Response } from "express";
import User from "../models/User";
import Post from "../models/Post";
import Comment from "../models/Comment";

export default class {
  async get(_: any, res: Response) {
    try {
      const users: any = await User.find().select("-password").populate("");
      const posts: any = await Post.find().populate("author", [
        "_id",
        "firstName",
        "lastName",
        "username",
      ]);
      const comments: any = await Comment.find().populate("author commentId", [
        "_id",
        "firstName",
        "lastName",
        "username",
        "comment",
      ]);

      res.status(200).json({ message: "ok", data: { users, posts, comments } });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  }
}
