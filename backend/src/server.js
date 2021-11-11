const express = require("express");
const connect = require("./config/db");
const app = express();
require("dotenv").config();
const port = process.env.port;
app.use(express.json());

let userController = require("./controllers/user.controller");

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/users", userController);

const start = async () => {
  await connect();
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

module.exports = start;
