const MyOrder = require("../models/myOrder.model");
const Product = require('../models/product.model')
const { broadcast } = require("../ws");

exports.addToOrder = async (req, res) => {
  try {
    const {quantity} = req.body

    const order = await MyOrder.create({
      user: req.userId,
      productIds: [productId],
      quantity,
      totalPrice: product.price * quantity
    })
    
    broadcast({ type: "ORDER_ADDED", data: order })
    return res.status(201).json({ order, success: true })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' })
  }
};

exports.myOrder = async (req, res) => {
  try {
    const userId = req.user.id

    const product = await Product.find({userId})

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found'})
    }
    return res.status(201).json({ product, success: true })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' })
  }
};

exports.customerOrder = async (req, res) => {
  try {
    const order = await myOrder.find()
  
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' })
    }
    return res.status(201).json(order, { success: true })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' })
  }
};
