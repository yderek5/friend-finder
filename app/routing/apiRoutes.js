var express = require('express');
var path = require('path');
var users = require("../data/friends.js");
var router = express.Router();

// Get friends
router.get('/api/friends', function(req, res) {
  res.send(users);
});

router.post('/api/friends', function(req, res) {

  // This takes the array, converts all values to integers and then adds them all up to get the total sum
  var yourScore = req.body.score.map(function(x){return parseInt(x,10)}).reduce(add);
  function add(a, b) {
    return a + b;
  }
users.push(req.body);
  /*go through all users in the users array and log their total score 
  excluding the last one (that is the user you just created)*/
  var differenceArr = [];
  // push them to difference array..lowest num is your match
  for(var i=0;i<users.length-1;i++) {
    var usersScores = users[i].score.map(function(x){return parseInt(x,10)}).reduce(add);
    var difference = Math.abs(yourScore - usersScores);
    differenceArr.push(difference);
  }
  // find the index of the smallest number in the differenceArr
  var indexOfSmallest = 0;
  var value = differenceArr[0];
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
