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
  res.render("list", {listTitle : "Testing title", addedItem : items})
})

app.post("/", function(req,res){
  let item = req.body.addedItem
  items.push(item)
  res.redirect("/")
})

app.listen(3000, function(){
  console.log("Server ready gan!")
})
