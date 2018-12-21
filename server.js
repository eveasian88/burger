// requiring express, bodyparser, and mysql
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var path = require('path');

// creating an express app instance
var app = express();

var PORT = process.env.PORT || 8080;


// set default directory to public
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

// tells app to use json
app.use(bodyParser.json());

// requiring express handlebars
var exphbs = require("express-handlebars");

// prepare express app to use and layout handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");







// sets app to listen at the specified port.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
