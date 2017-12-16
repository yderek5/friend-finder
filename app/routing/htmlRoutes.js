var express = require('express');
var router = express.Router();
var path = require('path');

// Home
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'home.html'));
});

// Survey
router.get('/survey', function(req,res) {
  res.sendFile(path.join(__dirname, '../public', 'survey.html'));
});

module.exports = router;