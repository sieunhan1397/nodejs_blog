export {}
const mongoose = require('mongoose')

async function connect(): Promise<void> {
  try {
    await mongoose.connect('mongodb://localhost:27017/edu_express_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    console.log('Connect Success!!!')
  } catch (err) {
    console.log('Connect Fail!!!')
  }
}

module.exports = { connect }
