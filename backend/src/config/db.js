const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.mongo);

const connect = () => {
  return mongoose.connect(process.env.mongo);
};

module.exports = connect;
