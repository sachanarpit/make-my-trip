const Success = require("../models/success.model");
const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const sendMail = require("../config/mails");

// rauter.get("/:name", (req, res) => {
//   let regex = req.params.name;

//   Checkout.find({ user: regex }).then((result) => {
//     return res.status(200).json(result);
//   });
// });

router.post("", async (req, res) => {
  let regex = req.body.user;
  const success = await Success.create(req.body);
  let user = await User.find({ _id: regex });
  sendMail({
    from: "me@arpitsachan.com",
    to: user[0].email,
    subject: `hello ${user[0].name} we confirm your booking`,
    text: `welcome to make my trip this is your order id ${req.body.razorpay_order_id}`,
  });
  return res.status(201).send({ success });
});

module.exports = router;
