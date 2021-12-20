import { Request, Response } from "express";
import User from "../models/User";
import Token from "../utils/jwt";
import Bcrypt from "../utils/bcrypt";

export default class {
  async login(req: Request, res: Response) {
    try {
      const data = req.body;

      const $or = [];

      if (data.email) {
        $or.push({ email: data.email });
      }

      if (data.username) {
        $or.push({ username: data.username });
      }

      const user = await User.findOne({ $or });

      if (!user) return res.status(400).json({ message: "Bad request!" });

      const compare = await Bcrypt.comparePassword(
        data.password,
        user.password
      );

      if (!compare) return res.status(400).json({ message: "Bad request!" });

      const token = Token.sign({ userId: user.id });

      res.status(201).json({ message: "User Created!", token });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  }
}
