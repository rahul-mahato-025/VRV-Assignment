const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
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
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [
      {
        type: String,
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
