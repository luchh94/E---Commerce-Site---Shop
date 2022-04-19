import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  createReview,
} from "../controllers/productController.js";
import { protect, adminCheck } from "./../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, adminCheck, createProduct);
router.route("/:id/reviews").post(protect,  createReview);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, adminCheck, deleteProduct)
  .put(protect, adminCheck, updateProduct);

export default router;
