var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();

// Get friends
router.get('/api/friends', function(req, res) {
  res.sendFile(path.join(__dirname, '../data', 'friends.js'));
});

router.post("/api/friends", function(req, res) {
  res.send(req.body);
});

module.exports = router;