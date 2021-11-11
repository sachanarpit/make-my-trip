const express = require("express");
const connect = require("./config/db");

require("dotenv").config();
const app = express();
app.use(express.json());
const port = process.env.port;

const userController = require("./controller/user.controller");

app.use("/users", userController);

app.get("/", (req, res) => res.send("Hello World!"));

const start = async () => {
  await connect();
  app.listen(port, () => console.log(`app listening on port ${port}!`));
};

module.exports = start;
