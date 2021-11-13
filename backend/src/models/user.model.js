const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  id: { type: String, required: true },




  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile: {
    type: Number,
    min: 1000000000,
    max: 9999999999,
    unique: true,
  },
  checkout: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "checkouts",
    },
  ],
  order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orders",
    },
  ],
});

const User = mongoose.model("users", userSchema);

module.exports = User;
