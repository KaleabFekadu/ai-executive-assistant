const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(to, subject, content) {
  const msg = {
    to,
    from: "your-email@domain.com", // Replace with verified SendGrid sender
    subject,
    text: content,
  };
  await sgMail.send(msg);
}

module.exports = { sendEmail };
