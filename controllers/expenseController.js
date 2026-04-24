import Expense from "../models/Expense.js";

// GET all expenses
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      userEmail: req.user.email,
    });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD new expense
export const addExpense = async (req, res) => {
  try {
    const newExpense = new Expense({
      ...req.body,
      userEmail: req.user.email,
    });
    const saved = await newExpense.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE expense
export const deleteExpense = async (req, res) => {
  try {
    await Expense.findOneAndDelete({
      _id: req.params.id,
      userEmail: req.user.email,
    });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Optional: UPDATE expense
export const updateExpense = async (req, res) => {
  try {
    const updated = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }, // return updated document
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
