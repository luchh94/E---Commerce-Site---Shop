import express from "express";
import {
  createNewOrder,
  getOrderById,
} from "./../controllers/orderController.js";
import { protect } from "./../middleware/authMiddleware.js";

const router = express.Router();

router.route("/:id").get(protect, getOrderById);
router.route("/").post(protect, createNewOrder);


export default router;
