require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.GOOGLE_APP_KEY,
  },
});

const mailOptions = {
  to: 'rabeehwork02@gmail.com',
  subject: 'Test email again',
  text: 'This is awesome,',
  attachments: [
    {
      filename: 'main.py',
      content: 'print("iamsendingmails")',
    },
  ],
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
