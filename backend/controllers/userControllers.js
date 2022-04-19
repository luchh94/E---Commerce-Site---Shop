import AsyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";
import Order from "../models/OrderModel.js";

const getAllUsers = AsyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const getUserById = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
    return;
  } else {
    res.status(404).json({
      message: "UserNotFound",
    });
  }
});

const deleteUser = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  const orders = await Order.find({ user: req.params.id });
  console.log(orders);
  if (user) {
    await user.remove();



    res.json({
      message: "user was removed",
    });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      city: user.city,
      zipcode: user.zipcode,
      adress: user.adress,
      country: user.country,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid password or email");
  }
});

const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(400);
    throw new Error("This Email is already in use");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

const getUserProfile = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      city: user.city,
      zipcode: user.zipcode,
      adress: user.adress,
      isAdmin: user.isAdmin,
      country: user.country,
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

const updateUserProfile = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.city = req.body.city;
    user.zipcode = req.body.zipcode;
    user.adress = req.body.adress;
    user.country = req.body.country;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      city: updatedUser.city,
      adress: updatedUser.adress,
      zipcode: updatedUser.zipcode,
      country: updatedUser.country,

      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const updateUser = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    user.city = req.body.city || user.city;
    user.zipcode = req.body.zipcode || user.zipcode;
    user.adress = req.body.adress || user.adress;
    user.country = req.body.country || user.country;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      city: updatedUser.city,
      adress: updatedUser.adress,
      zipcode: updatedUser.zipcode,
      country: updatedUser.country,

      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

export {
  getAllUsers,
  getUserById,
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  deleteUser,
  updateUser,
};
