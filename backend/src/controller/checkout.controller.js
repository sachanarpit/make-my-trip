const express = require("express");

const rauter = express.Rauter();

const Checkout = require("../models/checkout.model");

rauter.post("/", async (req, res) => {
  const items = await Checkout.create(req.body);
  return res.status(201).send(items);
});

module.exports = rauter;
