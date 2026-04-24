import express from "express";
import { googleLogin } from "../controllers/authController.js";

const router = express.Router();

// SAME STYLE as your expense route
router.post("/google", googleLogin);

export default router;
