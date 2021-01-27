export {}
const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const morgan = require('morgan')
const route = require('./routes')
//Connect Database
const db = require('./config/db')
db.connect()

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public\\')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(express.static('/src/public'));

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  hbs({
    extname: '.hbs',
  })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
