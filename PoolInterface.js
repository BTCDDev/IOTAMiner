/**
 * Created by matthew on 2/1/17.
 */
'use strict';
const request = require('request')

let SubmitTransaction = function(trytes){
    console.log('submitting')
    request.post({
            url: 'http://127.0.0.1:4000/submitTx',
            json: true,
            body: {transaction: trytes}
        },
        function(err,httpResponse,body){
            console.log('Error: err\n' + 'httpResponse: httpResponse\n' + ' body: ' + body);
    });
};

module.exports = {
    SubmitTransaction: SubmitTransaction
};