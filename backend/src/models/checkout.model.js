const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  price: {
    base_fare: { type: Number, required: true },
    surcharges: { type: Number, required: true },
  },
  date: { type: String },
  user: {
    type: String,
    required: true,
  },
});

const Checkout = mongoose.model("checkouts", checkoutSchema);

module.exports = Checkout;
