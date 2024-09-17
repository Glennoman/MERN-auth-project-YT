import express from "express";
import { test_1 } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", test_1);

export default router;
