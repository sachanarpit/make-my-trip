const mongoose = require("mongoose");

const successSchema = new mongoose.Schema({
  razorpay_order_id: { type: String, required: true },
  razorpay_payment_id: { type: String, required: false },
  user: { type: String, required: true },
});

const Success = mongoose.model("success", successSchema);

module.exports = Success;
