const mongoose = require("mongoose")
const commentSchema =  new mongoose.Schema({
    title: String,
    body:  String
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment
