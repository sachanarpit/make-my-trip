const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
  flight_name: { type: String, required: true },
  payment: { type: Boolean, required: true },
  user: { type: String, required: true },
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
