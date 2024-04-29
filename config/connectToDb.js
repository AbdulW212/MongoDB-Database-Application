require("dotenv").config()

const mongoose = require('mongoose')

const connectToDb = async() => { 
  await mongoose.connect(process.env.DB_URL);
// -> This is how the app connects to our database
    console.log(process.env.DB_URL)
}
module.exports = connectToDb