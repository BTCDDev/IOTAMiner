/**
 * Created by matthew on 1/30/17.
 */
'use strict';
let mining = 0; //not mining

let isMining = function(){
    return mining;
};

let startMining = function(){
    mining = 1;
};

let stopMining = function(){
    mining = 0;
};

let changeMiningStatus = function(){
    return new Promise(function(resolve, reject){
        console.log('changing');
        if(isMining()){
            stopMining();
        } else{
            startMining();
        }
        resolve(isMining());
    });
};

module.exports = {
  isMining:   isMining,
  changeMiningStatus: changeMiningStatus
};