const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  imageUrl: { type: String, required: true, unique: true },
  brand: { type: String, required: true, unique: false },
  name: { type: String, required: true, unique: false },
  description: { type: String, required: true, unique: false },
  price: { type: Number, required: true, unique: false },
  features: [
    {
      key: { type: String, required: true },
      value: { type: String, required: true }
    }
  ]
}, { timestamp: true})

module.export = mongoose.model('Product', productSchema)
