import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const test_1 = async (req, res) => {
  const { username, email, password } = req.body; // Destructure and get name email and pass from req.body
  const hashedPassword = bcryptjs.hashSync(password, 10); // encrypt received password
  const newUser = new User({ username, email, password: hashedPassword }); // Create new user from model and encrypt password
  try {
    await newUser.save(); // Save new user
    res.status(201).json({ message: "User created succesfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
