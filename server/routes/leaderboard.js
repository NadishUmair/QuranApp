const express = require("express");
const router = express.Router();
const User = require("../models/assessments");

router.post("/update-xp", async (req, res) => {
  const { userId, xp } = req.body;
  try {
    const user = await User.findById(userId);
    if (user) {
      user.xp += xp;
      await user.save();
      res.json({ message: "XP updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
