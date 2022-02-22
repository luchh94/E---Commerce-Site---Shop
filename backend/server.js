const express = require("express");
const AllProducts = require("./data/AllProducts");
const AppleProducts = require("./data/AppleProducts");
const CameraProducts = require("./data/CameraProducts");
const MouseAndKeyboardProducts = require("./data/MouseAndKeyboardProducts");

const app = express();

app.get("/api/products", (req, res) => {
  res.json(AllProducts);
});

app.get("/api/product/:id", (req, res) => {
  const product = AllProducts.find((p) => p.id == req.params.id);
  res.json(product);
});

app.get("/api/appleproducts", (req, res) => {
  res.json(AppleProducts);
});

app.get("/api/cameraproducts", (req, res) => {
  res.json(CameraProducts);
});

app.get("/api/mouseandkeyboards", (req, res) => {
  res.json(MouseAndKeyboardProducts);
});

app.listen(4000, console.log("Server running on port 4000"));
