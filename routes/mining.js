'use strict';
var express = require('express');
var router = express.Router();

var mining = require('../mining');

/* GET users listing. */
router.get('/mining', function(req, res, next) {
  var miningStatus = mining.isMining() ? "Quit Mining" : "Start Mining";
  res.render('mining', { title: 'Get Work', miningStatus: miningStatus} );
});

router.get('/changeMiningStatus', function(req, res, next){
  console.log('in change mining status');
  var miningStatus = 0;

  mining.changeMiningStatus()
      .then((status)=> {
      miningStatus = status ? "Quit Mining" : "Start Mining";
      console.log('mining status' + status);
      res.render('mining', { title: 'Get Work', miningStatus: miningStatus} );
  });

});
module.exports = router;
