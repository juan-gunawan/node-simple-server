// Mock JSON
const mock = require('./mocks/oneway');

const express = require('express');
const app = express();
const port = 3000;

app.get('/mock', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(mock);
});

app.listen(port, () => console.log(`Simple Server listening on port ${port}!`));
