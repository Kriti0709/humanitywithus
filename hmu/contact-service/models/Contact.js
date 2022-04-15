const mongoose = require("mongoose")

const contactschema = new mongoose.Schema({
  namee: String,
  phoneno: String,
  email: String,
  orgname: String,
  servicee: String,
  addresss: String,
})

const Contact = mongoose.model("Contact", contactschema)

module.exports = Contact


