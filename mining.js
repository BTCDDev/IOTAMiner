/**
 * Created by matthew on 1/30/17.
 */
'use strict';
var mining = 0; //not mining

var isMining = function(){
    return mining;
};

var startMining = function(){
    mining = 1;
};

var stopMining = function(){
    mining = 0;
};

var changeMiningStatus = function(){
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
  changeMiningStatus: changeMiningStatus()
};