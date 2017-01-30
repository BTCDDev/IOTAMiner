'use strict';

var express = require('express');
var router = express.Router();

var mining = require('../mining');

/* GET home page. */
router.get('/', function(req, res, next) {
  var miningStatus = mining.isMining() ? "Quit Mining" : "Start Mining";
  res.render('index', { title: 'IOTA Miner', miningStatus: miningStatus });
});

module.exports = router;
