const nodemailer = require("nodemailer");
require("dotenv").config();

const { CURRENT_ENVIRONMENT, SMTP_USERNAME, SMTP_PASSWORD, SMTP_PORT } =
  process.env;

const transporter = nodemailer.createTransport({
  host: CURRENT_ENVIRONMENT == "development" ? "smtp.mailtrap.io" : "",
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});

module.exports = transporter;
