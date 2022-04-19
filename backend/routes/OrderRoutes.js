import express from "express";
import {
  createNewOrder,
  getAllOrders,
  getLoggedUserOrders,
  getOrderById,
  updateOrderToPaid,
} from "./../controllers/orderController.js";
import { protect, adminCheck } from "./../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, createNewOrder)
  .get(protect, adminCheck, getAllOrders);
router.route("/myorders").get(protect, getLoggedUserOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;
