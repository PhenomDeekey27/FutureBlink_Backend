const sendEmail = require("../../utils/mailer");

module.exports = (agenda) => {
  agenda.define("send email job", async (job) => {
    const { to, subject, body } = job.attrs.data;
    console.log(`📤 Sending email to: ${to} | Subject: ${subject}`); // Add this line
    await sendEmail(to, subject, body);
    console.log("✅ Email sent.");
  });
};
