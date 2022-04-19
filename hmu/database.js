const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://kritika_0709:<Kritika_0709>@cluster0.apz3n.mongodb.net/contact")
    console.log("DB connected:", connect.connection.host)
  } catch (error) {
    console.log(error)
  }
}
module.exports = { connectDB }




