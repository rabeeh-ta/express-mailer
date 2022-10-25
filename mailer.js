require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendMail(toEmail, subject, message) {
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
    //     // encoded string as an attachment
    //     filename: 'img.png',
    //     content:
    //       'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
    //     encoding: 'base64',
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
