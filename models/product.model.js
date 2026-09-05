const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", require: true },
  imageUrl: { type: String, required: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  features: [
    {
      key: { type: String, required: true },
      value: { type: String, required: true }
    }
  ]
}, { timestamps: true})

module.exports = mongoose.model('Product', productSchema)
