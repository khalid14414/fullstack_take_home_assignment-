import { Router } from "express";
import {
  createUserController,
  setPasswordController,
  getUsersController,
} from "../controllers/user.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// ADMIN only routes
router.post("/", authMiddleware(["ADMIN"]), createUserController);
router.get("/", authMiddleware(["ADMIN"]), getUsersController);

// User sets password
router.put("/set-password/:userId", setPasswordController);

export default router;
