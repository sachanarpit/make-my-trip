const express = require("express");

const router = express.Router();

const Order = require("../models/order.model");

router.post("", async (req, res) => {
  let user = await Order.create(req.body);
  return res.send(user);
});

router.get("/:name", (req, res) => {
  let regex = req.params.name;

  Order.find({ user: regex }).then((result) => {
    return res.status(200).json(result);
  });
});

module.exports = router;
