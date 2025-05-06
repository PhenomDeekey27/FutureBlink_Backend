const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const sendEmail = async (to, subject, body) => {
  const mailOptions = {
    from: process.env.GMAIL_ADDRESS,
    to,
    subject,
    text: body,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
