// Mock JSON
const mock = require('./mocks/oneway');
const mock2 = require('./mocks/tokeninfo');
const cors = require('cors'); 

const express = require('express');
const app = express();
const port = 3000;

app.use(cors())

app.post('/mock', (req, res) => {
  res.send(mock);
});

app.post('/mock2', (req, res) => {
  res.send(mock2);
});

app.listen(port, () => console.log(`Simple Server listening on port ${port}!`));
