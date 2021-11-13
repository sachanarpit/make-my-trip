const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.post("", async (req, res) => {
  let user = await User.create(req.body);
  return res.send(user);
});

router.get("", async (req, res) => {
  let user = await User.find().lean().exec();
  return res.status(200).send({ user });
});

router.get("/:id", async (req, res) => {
  let regex = req.params.id;
  let user = await User.find({ _id: regex });
  return res.status(200).send({ user });
});

module.exports = router;
