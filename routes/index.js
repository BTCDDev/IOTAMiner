'use strict';

let express = require('express');
let router = express.Router();

let mining = require('../mining');

/* GET home page. */
router.get('/', function(req, res, next) {
  let miningStatus = mining.isMining() ? "Quit Mining" : "Start Mining";
  res.render('index', { title: 'IOTA Miner', miningStatus: miningStatus });
});

module.exports = router;
