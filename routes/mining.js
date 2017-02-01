'use strict';
let express = require('express');
let router = express.Router();

let mining = require('../mining');

let miningStatus = mining.isMining() ? "Quit Mining" : "Start Mining";

/* GET users listing. */
router.get('/mining', function(req, res, next) {
  res.render('mining', { title: 'Get Work', miningStatus: miningStatus} );
});

router.get('/changeMiningStatus', function(req, res, next){
  console.log('in change mining status');
  mining.changeMiningStatus()
      .then((status) => {
          miningStatus = (status==1) ? "Quit Mining" : "Start Mining";
          console.log('mining status ' + status);
          res.render('mining', { title: 'Get Work', miningStatus: miningStatus} );
  });

});

module.exports = router;
