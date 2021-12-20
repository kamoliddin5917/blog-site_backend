import { Router } from "express";
import UserController from "../controllers/UserController";
import validate from "../middleware/validation";
import requestSchema from "../requestSchema/user";

const router = Router({ mergeParams: true });
const ctrl = new UserController();

router.route("/profile").get(ctrl.get);

router.route("/register").post(validate(requestSchema.register), ctrl.register);

router.route("/update").put(validate(requestSchema.update), ctrl.update);

router.route("/delete").delete(ctrl.delete);

export default router;
