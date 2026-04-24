import express from "express";
import {
  getExpenses,
  addExpense,
  deleteExpense,
  updateExpense,
} from "../controllers/expenseController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all
router.get("/", authMiddleware, getExpenses);

// ADD new
router.post("/", authMiddleware, addExpense);

// DELETE
router.delete("/:id", authMiddleware, deleteExpense);

// UPDATE (optional)
router.put("/:id", authMiddleware, updateExpense);

export default router;
