const express = require("express");

const rauter = express.Router();

const Checkout = require("../models/checkout.model");
const User = require("../models/user.model");

rauter.post("/", async (req, res) => {
  //   let data = req.body;
  //   console.log(data.user);
  //   //   let user = await User.findByIdAndUpdate(
  //   //     data.user,
  //   //     { $push: { checkout: { data } } },
  //   //     { upsert: true, new: true }
  //   //   );
  //   let result = await User.findById(data.user);
  //   result.checkout.push(data);
  //   await result.save();

  const items = await Checkout.create(req.body);

  return res.status(201).send(items);
});

rauter.get("/:name", (req, res) => {
  let regex = req.params.name;

  Checkout.find({ user: regex }).then((result) => {
    return res.status(200).json(result);
  });
});

module.exports = rauter;
