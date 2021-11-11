const express = require("express");

const rauter = express.Router();

const User = require("../models/user.model");

rauter.post("", async (req, res) => {
  const user = await User.create(req.body);
  return res.status(201).send(user);
});

rauter.get("", async (req, res) => {
  const user = await User.find().lean().exec();
  return res.status(200).send({ user });
});

module.exports = rauter;
