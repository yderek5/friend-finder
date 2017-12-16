// Dependencies
// ================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

// Set up express
// ================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Set up data parsing
// ================================================
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// Routes
// ================================================
var htmlRoutes = require('./app/routing/htmlRoutes.js');
app.use(htmlRoutes);

// Starts the server to begin listening
// ================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});