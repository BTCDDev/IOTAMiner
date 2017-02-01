/**
 * Created by matthew on 2/1/17.
 */
'use strict';
let nanomsg = require('nanomsg');

let req = nanomsg.socket('req');
req.connect('tcp://127.0.0.1:5555');


req.on('data', function (buf) {
    console.log('NANOMSG GOT: ' + String(buf));
});

let SubmitTransaction = function(trytes){
    req.send(trytes);
};



module.exports = {
    SubmitTransaction: SubmitTransaction
};