import { Router } from "express";
import CommentController from "../controllers/CommentController";
import validate from "../middleware/validation";
import requestSchema from "../requestSchema/comment";

const router = Router({ mergeParams: true });
const ctrl = new CommentController();

router.route("/create").post(validate(requestSchema.comment), ctrl.create);
router
  .route("/update/:commentId")
  .put(validate(requestSchema.update), ctrl.update);
router
  .route("/delete/:commentId")
  .delete(validate(requestSchema.delete), ctrl.delete);

export default router;
