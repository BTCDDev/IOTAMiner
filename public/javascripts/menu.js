/**
 * Created by matthew on 1/30/17.
 */


var ButtonListener = function(buttonID){
    console.log('making ajax call ' + buttonID);
    $.ajax({
        url: "/" + buttonID + "",
        success: function(data) {
            console.log('going to /'+buttonID);
            window.location.href = '/' + buttonID + ''
        }
    });
};