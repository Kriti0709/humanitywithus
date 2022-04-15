const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb://localhost:27017/contact")
    console.log("DB connected:", connect.connection.host)
  } catch (error) {
    console.log(error)
  }
}
module.exports = { connectDB }




