const express = require("express");
const User = require("../models/user");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");

const router = express.Router();

// Get all users
router.get("/users", verifyToken, verifyAdmin, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// Delete user
router.delete("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

// Promote to admin
router.put("/users/:id/promote", verifyToken, verifyAdmin, async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { role: "admin" });
  res.json({ message: "User promoted to admin" });
});

// Demote to normal user
router.put("/users/:id/demote", verifyToken, verifyAdmin, async (req, res) => {

  // 🚫 Prevent admin from demoting themselves
  if (req.user._id.toString() === req.params.id) {
    return res.status(400).json({ message: "You cannot demote yourself" });
  }

  await User.findByIdAndUpdate(req.params.id, { role: "user" });

  res.json({ message: "User demoted to user" });
});

module.exports = router;