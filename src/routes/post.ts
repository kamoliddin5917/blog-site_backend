import { Router } from "express";
import PostController from "../controllers/PostController";
import validate from "../middleware/validation";
import requestSchema from "../requestSchema/post";

const router = Router({ mergeParams: true });
const ctrl = new PostController();

router.route("/create").post(validate(requestSchema.post), ctrl.create);
router
  .route("/update/:postId")
  .put(validate(requestSchema.update), ctrl.update);
router
  .route("/delete/:postId")
  .delete(validate(requestSchema.delete), ctrl.delete);

export default router;
