const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://kritika_0709:<kritika_0709>@cluster0.apz3n.mongodb.net/test/contact")
    console.log("DB connected:", connect.connection.host)
  } catch (error) {
    console.log(error)
  }
}
module.exports = { connectDB }




