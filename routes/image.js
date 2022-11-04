var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.setHeader('Content-Type', 'image/jpg');
  res.sendFile(__dirname + '/images/hamster.jpg');
});

module.exports = router;
