import AsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

import User from "../models/UserModel.js";

const protect = AsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
  next();
});

const adminCheck = AsyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user.isAdmin === false) {
    res.status(401);
    throw new Error("You are not an Admin");
  } else {
    next();
  }
});

export { protect, adminCheck };
