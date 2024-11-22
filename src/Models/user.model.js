const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "incactive"],
    default: "active",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
