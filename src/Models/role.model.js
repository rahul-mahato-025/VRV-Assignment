const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true,
  },
  permissions: {
    type: [
      {
        type: String,
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("Role", roleSchema);
