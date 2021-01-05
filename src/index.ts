const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
const port = 3000;

app.get('/', (req, res) => {
    let name: string;
    name = 'Hello World';
  res.send(name);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})