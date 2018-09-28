// Mock JSON
const mock = require('./mocks/oneway');
const cors = require('cors'); 

const express = require('express');
const app = express();
const port = 3000;

app.use(cors())

app.post('/mock', (req, res) => {
  res.send(mock);
});

app.listen(port, () => console.log(`Simple Server listening on port ${port}!`));
