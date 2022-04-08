import express from "express";
import {
  createNewOrder,
  getLoggedUserOrders,
  getOrderById,
  updateOrderToPaid,
} from "./../controllers/orderController.js";
import { protect } from "./../middleware/authMiddleware.js";

const router = express.Router();


router.route("/myorders").get(protect, getLoggedUserOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/").post(protect, createNewOrder);
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;
