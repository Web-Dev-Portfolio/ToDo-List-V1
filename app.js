const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine", "ejs")

let items =[]

app.get("/", function(req,res){
  // alert("Hello world!")
  var date = new Date()
  let options = {
    weekday : "long",
    day : "numeric",
    month : "long",
    year : "numeric"
  }
  todayFullDate = date.toLocaleDateString("id-ID", options)
  res.render("list", {listTitle : todayFullDate, addedItem : items})
})

app.post("/", function(req,res){
  let item = req.body.addedItem
  items.push(item)
  res.redirect("/")
})

app.listen(3000, function(){
  console.log("Server ready gan!")
})
