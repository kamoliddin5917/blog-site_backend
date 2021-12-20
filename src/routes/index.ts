import { Router } from "express";
import userRoutes from "./user";
import authRoutes from "./auth";
import postRoutes from "./post";
import commentRoutes from "./comment";
import homeRoutes from "./home";

const router = Router({ mergeParams: true });

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
router.use("/home", homeRoutes);

export default router;
