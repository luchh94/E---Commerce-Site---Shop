import express from "express";
import {
  getAllUsers,
  getUserById,
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  updateUser,
} from "../controllers/userControllers.js";
import { protect, adminCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, adminCheck, getAllUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, adminCheck, deleteUser)
  .get(protect, adminCheck, getUserById)
  .put(protect, adminCheck, updateUser);

export default router;
