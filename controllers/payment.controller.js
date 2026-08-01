const Payment = require('../models/payment.model')
const { broadcast } = require('../ws')

exports.addPayment = async (req, res) => {
  try {
    const { order, method, amount, currency, paymentStatus, transactionId, paidAt } = req.body
  
    const payment = await Payment.create({
      user: req.userId,
      order,
      method,
      amount,
      currency,
      paymentStatus,
      transactionId,
      paidAt,
    })
  
    broadcast({ type: 'New Payment', data: payment })
    return res.status(200).json({ payment, success: true })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}

exports.getPayment = async (req, res) => {
  try {
    const userId = req.user.id

    const payment = await Payment.find({userId})
    if (!payment) {
      return res.status(400).json({ success: false, message: 'No address yet' })
    }

    return res.status(201).json({payment, success: true })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}

exports.getAllPayment = async (req, res) => {
  try {
    const payment = await Payment.find()
    if (!payment) {
      return res.status(400).json({ success: false, message: 'No address yet' })
    }

    return res.status(201).json({payment, success: true })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}