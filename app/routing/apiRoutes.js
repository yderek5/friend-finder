var express = require('express');
var path = require('path');
var users = require("../data/friends.js");
var router = express.Router();

// Get users array
router.get('/api/friends', function(req, res) {
  res.send(users);
});

router.post('/api/friends', function(req, res) {

  // This takes your answer vals and gets the sum given as yourScore
  var yourScore = req.body.score.map(function(x){return parseInt(x,10)}).reduce(add);
  function add(a, b) {
    return a + b;
  }
  // push created user to users array
users.push(req.body);
  // create a difference array to store difference from you and all other users
  var differenceArr = [];
  /* this goes through the users array, calculates total score and then gets 
  the abs difference of yourScore - userScores excluding the last object 
  because that's the one you just entered, otherwise you'd match with 
  yourself everytime */
  for(var i=0;i<users.length-1;i++) {
    var usersScores = users[i].score.map(function(x){return parseInt(x,10)}).reduce(add);
    var difference = Math.abs(yourScore - usersScores);
    differenceArr.push(difference);
  }
  var indexOfSmallest = 0;
  var value = differenceArr[0];
  // this goes through the differenceArr and finds the index of the smallest number
  for(var k=0;k<differenceArr.length;k++) {
    if(differenceArr[k] < value) {
      value = differenceArr[k];
      indexOfSmallest = k;
    }
  }
  // send the match with the smallest difference
  res.send(users[indexOfSmallest]);
});

module.exports = router;
