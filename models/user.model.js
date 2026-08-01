const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    password: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true, unique: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    // order: [
    //   {
    //     productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    //     // name: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    //     quantity: { type: Number, required: true, default: 1 },
    //     totalPrice: { type: Number, required: true, default: 0 },
    //   },
    // ],
  },
  { timestamp: true },
);

module.exports = mongoose.model("User", userSchema);
