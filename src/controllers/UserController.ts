import { Request, Response } from "express";
import User from "../models/User";
import Token from "../utils/jwt";
import Bcrypt from "../utils/bcrypt";

import Post from "../models/Post";
import Comment from "../models/Comment";

export default class {
  async get(req: Request, res: Response) {
    try {
      const { token } = req.headers;
      const id: any = Token.verify(token);

      const user: any = await User.findById(id.userId).select("-password");
      const posts: any = await Post.find({ author: id.userId }).populate(
        "author",
        ["_id", "firstName", "lastName", "username"]
      );
      const comments: any = await Comment.find().populate(
        "author post commentId",
        [
          "_id",
          "firstName",
          "lastName",
          "username",
          "media",
          "title",
          "body",
          "author",
          "comment",
        ]
      );

      res.status(200).json({ message: "ok", data: { user, posts, comments } });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const data = req.body;

      if (
        !data.password.match(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{7,17}$/
        )
      )
        return res.status(400).json({
          message:
            "Kamida 7 ta belgi, ko'pi bn 17 ta belgi, kotta-kichkina harf, belgi, son bo'lishi kerak!",
        });

      const existingUser = await User.findOne({ email: data.email });

      if (existingUser)
        return res.status(400).json({ message: "Bad request!" });

      const hashedPassword = await Bcrypt.hashPassword(data.password);

      if (!hashedPassword)
        return res.status(500).json({ message: "Server Error!" });

      const user = await User.create({
        ...data,
        password: hashedPassword,
        confirmPassword: hashedPassword,
      });

      if (!user)
        return res.status(500).json({ message: "Server Created Error!" });

      const token = Token.sign({ userId: user.id });

      res.status(201).json({ message: "User Created!", token });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = req.body;
      const { token } = req.headers;
      const id: any = Token.verify(token);

      const updateUser = await User.findOneAndUpdate(
        { _id: id.userId },
        { $set: data }
      ).select("-password");

      if (!updateUser)
        return res.status(500).json({ message: "Server Update Error!" });

      res.status(200).json({ message: "User Update!", updateUser });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { token } = req.headers;
      const id: any = Token.verify(token);

      const deleteUser = await User.findByIdAndDelete({
        _id: id.userId,
      }).select("-password");

      if (!deleteUser)
        return res.status(500).json({ message: "Server Deleted Error!" });

      res.status(200).json({ message: "User Deleted!", deleteUser });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  }
}
