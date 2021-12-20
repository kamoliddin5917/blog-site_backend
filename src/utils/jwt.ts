import { sign, verify } from "jsonwebtoken";

export default {
  sign: (data: any) => sign(data, process.env.JWT_SECRET),
  verify: (data: any) => verify(data, process.env.JWT_SECRET),
};
