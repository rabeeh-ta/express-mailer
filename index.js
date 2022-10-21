const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('./public/index.html');
});

app.get('/mailsStat', (req, res) => {
  res.send({ message: 'total number of mails send', count: 193 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
