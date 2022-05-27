const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const date = require(__dirname + "/date.js")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")

let items = []
let workItems = []
let todayFullDate = date.getDayName()

app.get("/", function(req, res) {
  res.render("list", {
    listName: "General List",
    addedItem: items,
    todayDate : todayFullDate
  })
})

app.get("/work", function(req, res) {
  res.render("list", {
    listName: "Work List",
    addedItem: workItems,
    todayDate : todayFullDate
  })
})

app.post("/", function(req, res) {
  let item = req.body.addedItem
  if (item != "") {
    if (req.body.list === "Work") {
      workItems.push(item)
      res.redirect("/work")
    } else if (req.body.list === "General") {
      items.push(item)
      res.redirect("/")
    }
  } else {
    console.log("No item")
  }
})

app.listen(process.env.PORT ||3000, function() {
  console.log("Server ready gan!")
})
