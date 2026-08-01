const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    method: {
      type: String,
      enum: [
        "Card",
        "Baank Transfer",
        "Paystack",
        "Flutterwave",
        "Cash on Delivery",
      ],
      required: true,
    },
    amount: { type: Number, required: true },
    currency: { type: String, default: "USD" },
    currency: {
      type: String,
      enum: ["Pending", "Successful", "Failed", "Refunded"],
      default: "Pending",
    },
    transactionId: { type: String },
    paidAt: { type: Date }
  },
  { timestamps: true },
);

module.exports = mongoose.model("Payment", paymentSchema);
