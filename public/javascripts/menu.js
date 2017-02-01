/**
 * Created by matthew on 1/30/17.
 */
'use strict';
let ButtonListener = function(buttonID, params){
    params = (typeof params !== 'undefined') ?  params : 0;

    if(params == 0){
        window.location.href = '/' + buttonID;
    }
    else{
        $.ajax({
            url: '/' + buttonID,
            method: 'POST',
            data: params
        }).done( function(r) {
            alert(r);
        } );
    }
};