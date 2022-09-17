const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Cloud Run!');
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log('Server started.');
});
