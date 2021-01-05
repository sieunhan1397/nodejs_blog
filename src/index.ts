const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let name: string;
    name = 'Hello World';
  res.send(name);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})