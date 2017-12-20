var express = require('express');
var path = require('path');
var users = require("../data/friends.js");
var router = express.Router();

// Get friends
router.get('/api/friends', function(req, res) {
  res.send(users);
});

router.post('/api/friends', function(req, res) {
  users.push(req.body);
});

module.exports = router;
