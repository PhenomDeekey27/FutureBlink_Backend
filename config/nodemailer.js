const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, body) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_ADDRESS,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text: body,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
