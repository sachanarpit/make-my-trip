const express = require("express");
const connect = require("./config/db");
const app = express();
require("dotenv").config();
const port = process.env.port;

app.get("/", (req, res) => res.send("Hello World!"));

const start = async () => {
  await connect();
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

module.exports = start;
