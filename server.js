/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Gautam Singh
 * Email: singhga@oregonstate.edu
 */




 
var path = require('path');
var express = require('express');
var exphbs = require("express-handlebars")
var twitData = require("./twitData.json")

var app = express();
var port = process.env.PORT || 3400;

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")



app.get('/', function (req, res) {
  res.status(200).render("twitpage", {
  twitpage: twitData, 
  multiTwit: true

  })
  
});

app.use(express.static('public'));

app.get('/:number', function (req, res) {

  var num = req.params.number
   
  console.log("Typeof: ", typeof(num))
  var test = twitData[num]
  
  if (test) {
    console.log("Twit exists")
    res.status(200).render("twitpage", {
      text: twitData[num].text,
      author: twitData[num].author,
      multiTwit: false

    })
  }

  else {
    console.log("Twist doesn't exist")
    res.status(404).render("404", {page: req.url})
  }

  
});

app.get('*', function (req, res) {
  res.status(404).render("404", {page: req.url})
});



app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
