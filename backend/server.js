import path from "path";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan"

import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/ErrorMiddleware.js";

import productRouter from "./routes/ProductRoutes.js";
import userRouter from "./routes/UserRoutes.js";
import orderRouter from "./routes/OrderRoutes.js";
import uploadRoutes from "./routes/UploadRoutes.js";

dotenv.config();

connectDB();

const app = express();
if(process.env.NODE_ENV === "development"){
  app.use(morgan("dev"))
}
app.use(express.json()); // Will enable JSON Data in the Body

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
