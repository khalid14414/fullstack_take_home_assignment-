import { Router } from "express";
import {
  createPostController,
  getPostsController,
  approveRejectController,
} from "../controllers/post.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// USER can create posts
router.post("/", authMiddleware(["USER"]), createPostController);
router.get("/", authMiddleware(["USER", "ADMIN"]), getPostsController);

// ADMIN approves/rejects
router.put("/approve/:postId", authMiddleware(["ADMIN"]), approveRejectController);

export default router;
