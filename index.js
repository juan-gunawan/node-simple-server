// Mock JSON
const oneway = require('./mocks/oneway');

const express = require('express');
const app = express();
const port = 3000;

app.get('/oneway', (req, res) => {
  res.send(oneway);
});

app.listen(port, () => console.log(`Simple Server listening on port ${port}!`));
