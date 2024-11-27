const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please enter a correct email address."],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // password: {
    //   type: String,
    //   required: true,
    // },
    roles: {
      type: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "Role",
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.pre("save", function () {
//   this.password = bcrypt.hashSync(this.password, 12);
// });

module.exports = mongoose.model("User", userSchema);
