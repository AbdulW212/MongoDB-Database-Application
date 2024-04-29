const mongoose = require("mongoose")
const userSchema =  new mongoose.Schema({
    title: String,
    body:  String
})

const User = mongoose.model("User", userSchema)

module.exports = User
