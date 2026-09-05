const mongoose = require("mongoose");

const myOrderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productIds: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, default: 1 },
    totalPrice: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Cancelled"],
      default: "Pending"
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model("MyOrder", myOrderSchema);
