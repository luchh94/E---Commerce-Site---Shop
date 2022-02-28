import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/ErrorMiddleware.js";

import productRouter from "./routes/ProductRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use("/api/products", productRouter);
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
