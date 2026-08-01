const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true, unique: true },
    role: { type: String, enum: ["user", "admin"], default: "admin" },
  },
  { timestamp: true },
);

module.exports = mongoose.model("Admin", adminSchema);
