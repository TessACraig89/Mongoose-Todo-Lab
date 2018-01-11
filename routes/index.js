
var express = require('express');
var router = express.Router();

// when routed to home page render
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
