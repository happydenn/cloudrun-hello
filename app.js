const express = require('express');
const { nanoid } = require('nanoid');

const app = express();

const revId = process.env.K_REVISION;
const instanceId = nanoid();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send(`Hello Cloud Run!\nRevision: ${revId}\nInstance ID: ${instanceId}\n`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`Server started. Revision=${revId} InstanceID=${instanceId}`);
});
