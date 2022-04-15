const mongoose = require("mongoose")

const commentschema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
})

const Comment = mongoose.model("Comment", commentschema)

module.exports = Comment


