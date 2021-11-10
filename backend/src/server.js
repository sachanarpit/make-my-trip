const express = require("express");
const connect = require("./config/db");

require("dotenv").config();
const app = express();
const port = process.env.port;
console.log("port:", port);

app.get("/", (req, res) => res.send("Hello World!"));

const start = async () => {
  await connect();
  app.listen(port, () => console.log(`app listening on port ${port}!`));
};

module.exports = start;
