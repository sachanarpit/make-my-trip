const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile: {
      type: Number,
      min: 1000000000,
      max: 9999999999,
      unique: true,
    },
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: cart,
      },
    ],
    checkout: [{ type: mongoose.Schema.Types.ObjectId, ref: checkout }],
    order: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: order,
      },
    ],
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
