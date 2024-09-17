import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json()); // Allows json as input for backend

app.listen(3000, () => {
  console.log("Server is listening to Port 3000");
});

app.use("/backend/user", userRoutes); // export default can import with a different name
app.use("/backend/auth", authRoutes);
