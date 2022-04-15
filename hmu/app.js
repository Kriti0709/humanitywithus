const express = require("express")
const path = require("path")
const { connectDB } = require("./database")

const ejs = require("ejs")
const bodyParser = require("body-parser")
const app = express()
const Contact = require("./contact-service/models/Contact")
const Comment = require("./contact-service/models/Comment")
connectDB()
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.json()).use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.json())



app.get("/", (req, res) => {
  res.render("homehmu")
})
app.get("/about", (req, res) => {
  res.render("abouthmu")
})

app.get("/contact", (req, res) => {
  res.render("registerhmu")
})


app.get("/services", (req, res) => {
  res.render("serviceshmu")
})

app.post("/contact", (req, res) => {
  console.log(req.body)
  var myData = new Contact(req.body)
  myData
    .save()
    .then(() => {
      res.render("registerhmu")
    })
    .catch(() => {
      res.status(404).send("Data not saved")
    })
})

app.post("/comment", (req, res) => {
  console.log(req.body)
  var myData = new Comment(req.body)
  myData
    .save()
    .then(() => {
      res.render("homehmu")
    })
    .catch(() => {
      res.status(404).send("Data not saved")
    })
})

//server
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})
