import AsyncHandler from "express-async-handler";
import Order from "./../models/OrderModel.js";

const createNewOrder = AsyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAdress,
    taxPrice,
    shippingPrice,
    paymentMethod,
    totalPrice,
    totalPriceItem,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Items in Order");
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAdress,
      taxPrice,
      shippingPrice,
      paymentMethod,
      totalPrice,
      totalPriceItem,
    });

    const savedOrder = await order.save();

    res.status(200).json({
      savedOrder,
    });
  }
});

const getOrderById = AsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(400);
    throw new Error("Order Not Found");
  }
});

export { createNewOrder, getOrderById };
