const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
    price: {
        base_fare: { type: Number, required= true },
        surcharges: { type: Number, required: true },
        other: [{
            type : Number
        },]
    },
    date: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "users"
    }
    
});

const Checkout = mongoose.model("checkouts", checkoutSchema)

module.exports = Checkout;