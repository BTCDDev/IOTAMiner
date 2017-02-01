/**
 * Created by matthew on 2/1/17.
 */
'use strict';
let nanomsg = require('nanomsg');

let req = nanomsg.socket('req');
req.connect('tcp://127.0.0.1:8080');
console.log('sending');
req.send('["9999999999", "9999999999999"]');
req.on('data', function (buf) {
    console.log('NANOMSG GOT: ' + String(buf));
});

let SubmitTransaction = function(trytes){
    console.log('sending!');
    req.send(trytes);
};



module.exports = {
    SubmitTransaction: SubmitTransaction
};