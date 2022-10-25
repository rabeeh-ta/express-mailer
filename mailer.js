require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendMail(toEmail, subject, message, attachment) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.GOOGLE_APP_KEY,
    },
  });

  const mailOptions = {
    to: toEmail,
    subject: subject,
    text: message,
    // attachments: [
    //   {
    //     filename: 'main.py',
    //     content: 'print("iamsendingmails")',
    //   },
    // ],
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendMail;
