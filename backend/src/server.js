const express = require("express");
const connect = require("./config/db");
const app = express();
require("dotenv").config();
const port = process.env.port;
app.use(express.json());

let userController = require("./controllers/user.controller");
let checkoutController = require("./controllers/checkout.controller");
let orderController = require("./controllers/order.controller");
let paymentController = require("./controllers/payment.controller");

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/users", userController);
app.use("/checkout", checkoutController);
app.use("/order", orderController);
app.use("/payment", paymentController);

const start = async () => {
  await connect();
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

module.exports = start;
