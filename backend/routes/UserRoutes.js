import express from "express";
import {
  getAllUsers,
  getUserById,
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { protect, adminCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, adminCheck, getAllUsers);
router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
