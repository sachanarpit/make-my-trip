const express = require("express");
const connect = require("./config/db");
<<<<<<< HEAD
=======
<<<<<<< HEAD
const cors = require("cors");
=======
>>>>>>> origin/dharmesh
>>>>>>> master
const app = express();
require("dotenv").config();
const port = process.env.port;
app.use(express.json());
<<<<<<< HEAD
=======
<<<<<<< HEAD
app.use(cors());
let userController = require("./controllers/user.controller");
let checkoutController = require("./controllers/checkout.controller");
let orderController = require("./controllers/order.controller");
let paymentController = require("./controllers/payment.controller");
=======
>>>>>>> master

let userController = require("./controllers/user.controller");
let checkoutController = require("./controllers/checkout.controller");
let orderController = require("./controllers/order.controller");
<<<<<<< HEAD
=======
>>>>>>> origin/dharmesh
>>>>>>> master

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/users", userController);
app.use("/checkout", checkoutController);
app.use("/order", orderController);
<<<<<<< HEAD
=======
<<<<<<< HEAD
app.use("/razorpay", paymentController);
=======
>>>>>>> origin/dharmesh
>>>>>>> master

const start = async () => {
  await connect();
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

module.exports = start;
