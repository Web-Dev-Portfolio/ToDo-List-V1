const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", function(req,res){
  // alert("Hello world!")
  res.render("list", {listTitle : "Testing title", addedItem : "Testing Item"})
})

app.post("/", function(req,res){

})

app.listen(3000, function(){
  console.log("Server ready gan!")
})
