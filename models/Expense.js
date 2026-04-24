import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    title: String,
    amount: Number,
    category: String,
    date: {
      type: Date,
      default: Date.now,
    },
    userEmail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
