import Product from "../models/ProductModel.js";
import AsyncHandler from "express-async-handler";

const getProducts = AsyncHandler(async (req, res) => {
  const allProducts = await Product.find({});
  res.json(allProducts);
});

const getProductById = (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
    return;
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

export { getProductById, getProducts}
