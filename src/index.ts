const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const morgan = require('morgan');

const app = express();

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  hbs({
    extname: '.hbs'
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

const port = 3000;

app.get('/', (req, res) => {
  console.log('PATH: ', path.join(__dirname, 'resources', 'views'));
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
