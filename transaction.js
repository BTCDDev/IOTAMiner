/**
 * Created by matthew on 1/30/17.
 */
'use strict';

let IOTA = require('iota.lib.js');

let iota = new IOTA({
    host: 'http://eugene.iota.community',
    port: 14265
});

let Transaction = function(data){
    return new Promise(function(resolve, reject){
        console.log('preparing')
        iota.api.prepareTransfers(data.seed, data.dest, function(error, response){
            if(error){
                console.log(JSON.stringify(error));
                console.log(error);
                reject(error);
            }
            else{
                resolve(response);
            }
        });

    });
};


let CreateTransaction = function(data){
    return new Promise(function(resolve, reject) {
        Transaction({seed: data.seed, dest: data.dest})
            .then((e) => {
                resolve(e);
            }).catch((e) => {
            reject(e);
        });
    });
};

module.exports = {
    CreateTransaction: CreateTransaction
};