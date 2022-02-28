import mongoose from "mongoose";
import dotenv from "dotenv";
import AllUsers from "./data/AllUsers.js";
import products from "./data/AllProducts.js";
import User from "./models/UserModel.js";
import Product from "./models/ProductModel.js";
import Order from "./models/OrderModel.js";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(AllUsers);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported");

    process.exit();
  } catch (error) {
    console.log(`There was a problem with the import: ${error}`);
    process.exit();
  }
};
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("Data Destroyed");

    process.exit();
  } catch (error) {
    console.log(`There was a problem with deleting: ${error}`);
    process.exit();
  }
};

if (process.argv[2] === "d") {
  destroyData();
} else {
  importData();
}
