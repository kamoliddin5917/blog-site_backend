import { Request, Response, NextFunction } from "express";
import Token from "../utils/jwt";

export default class {
  async auth(req: Request, res: Response, next: NextFunction) {
    try {
      const url = req.url;

      if (
        url === "/home" ||
        url === "/auth/login" ||
        url === "/users/register"
      ) {
        next();
        return;
      }
      const { token } = req.headers;
      const id: any = Token.verify(token);

      if (!id.userId)
        return res.status(400).json({
          message:
            "BRAT YOKI OPA YOMONAM ADASHTIZU ☻ ;) Registratsiyadan o'tin agar o'tgan bo'sez Login qilin!",
        });

      next();
    } catch (error) {
      res.status(400).json({
        message:
          "BRAT YOKI OPA YOMONAM ADASHTIZU ☻ ;) Registratsiyadan o'tin agar o'tgan bo'sez Login qilin!",
      });
    }
  }
}
