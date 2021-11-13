let mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  razorpayDetails: {
    orderId: { type: String },
    paymentId: { type: String },
    signature: { type: String },
  },
  success: { type: Boolean },
});

let Payment = mongoose.model("payments", paymentSchema);

module.exports = Payment;
