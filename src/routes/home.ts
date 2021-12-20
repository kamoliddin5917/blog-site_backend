import { Router } from "express";
import HomeController from "../controllers/HomeController";

const router = Router({ mergeParams: true });
const ctrl = new HomeController();

router.route("/").get(ctrl.get);

export default router;
