const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    fullName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    postalCode: { type: String },
    landmark: { type: String },
    addressType: { type: String, enum: ["Home", "Office"], default: "Home" },
    isDeefault: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Address", addressSchema);
