var express = require('express');
var path = require('path');
var users = require("../data/friends.js");
var router = express.Router();

var newuser;

// Get friends
router.get('/api/friends', function(req, res) {
  res.send(users);
});

router.post('/api/friends', function(req, res) {
  console.log(req.body);
  friends.push(request.body);
});

module.exports = router;
