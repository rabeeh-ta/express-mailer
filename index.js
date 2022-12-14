const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const sendMail = require('./mailer');
const dataUriParser = require('./dataUriParser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  return res.send('./public/index.html');
});

app.get('/mails-stat', (req, res) => {
  return res.send({
    message: 'total number of mails send',
    count: Math.round(Math.random() * 500),
  });
});

app.post('/send-mail', (req, res) => {
  const { toEmail, subject, message } = req.body;
  const attachment = dataUriParser(req.body.attachment.toString());

  sendMail(toEmail, subject, message, attachment).then((mailSendRes) => {
    res.send({ response: 'mail sent successfully' });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
