var display = document.getElementById('game');

var win = false;
var player = 1;
var game = true;
var board = [
    /* 0 */[0,0,0,0,0,0],
    /* 1 */[0,0,0,0,0,0],
    /* 2 */[0,0,0,0,0,0],
    /* 3 */[0,0,0,0,0,0],
    /* 4 */[0,0,0,0,0,0]];
function playermove(){
    display.innerHTML = board[0] +'<br>' +board[1] +'<br>' +board[2] +'<br>' +board[3] +'<br>' +board[4]
    if(player == 1){
        // switch(choice){
        //     case '1':
        //         if(board[4][0] !== 1){
        //             board[4][0] = 1;
        //         }
        // }
    }
}
playermove()
board[4][0] =1
display.innerHTML = board[0] +'<br>' +board[1] +'<br>' +board[2] +'<br>' +board[3] +'<br>' +board[4]