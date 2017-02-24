/**
 * Created by matthew on 1/30/17.
 */
'use strict';
let express = require('express');
let router = express.Router();
let transaction = require('../transaction');
let PoolInterface = require('../PoolInterface');


router.get('/submitTransaction', function(req, res, next) {
    res.render('submitTransaction', { title: 'Submit A Transaction' } );
});

router.post('/newTx', function(req, res, next) {
  let body = req.body;
  if(!body.seed || !body.address || !body.amount || !body.fee){
      res.end('Please enter all fields');
  }

  let seed    = body.seed,
      address = body.address,
      amount  = body.amount,
      fee     = body.fee;

  transaction.CreateTransaction({seed: seed, fee: fee, dest: [{address: address, value: Number(amount)}]})
      .then((e)=> {
        console.log(e);
        PoolInterface.SubmitTransaction(e).then(() => {
            console.log('submitted ' + e)
            //res.end(e);
        });
      })
      .catch((e)=> {
        res.end(e);
      });
  });

module.exports = router;
