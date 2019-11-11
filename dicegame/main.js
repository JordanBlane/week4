let dice = document.getElementById('dice');
let startbutton = document.getElementById('start');
let roll = document.getElementById('roll');
let playername = document.getElementById('playername');
let playerscore = document.getElementById('playerscore');
let player1score = 0
let count = 1;
let player2score = 0;
let player1name = prompt('player ones name: ');
let player2name = prompt('player twos name: ');

function game(){
    dice.src = 'img/1.png';
    playerscore.innerHTML = 0;
    playername.innerHTML = '.'
    dice.style.visibility = 'visible';
    roll.style.visibility = 'visible';
    start.style.visibility = 'hidden';
    playername.style.visibility = 'visible';
    playerscore.style.visibility = 'visible';
}

function reset(){
    player1score = 0;
    player2score = 0;
    dice.src = 'img/1.png';
    playerscore.innerHTML = 0;
    playername.innerHTML = '.'
    dice.style.visibility = 'hidden';
    roll.style.visibility = 'hidden';
    start.style.visibility = 'visible';
    playername.style.visibility = 'hidden';
    playerscore.style.visibility = 'hidden';
}
startbutton.addEventListener('click', game)

function rolldice(){
    let random = Math.ceil(Math.random() * 6);
    dice.src = 'img/'+random+'.png';
    if (count == 1){
        playername.innerHTML = player1name
        count = 2
        player1score += random;
        playerscore.innerHTML = player1name +' score: ' +player1score;
        if(random == 1){
            reset();
            start.innerHTML = player2name +' Wins <br> Click to play again'
        }
        else if(score > 20){
            reset();
            start.innerHTML = player2name +' Wins <br> Click to play again'
        }
    }else{
        playername.innerHTML = player2name
        count = 1
        player2score += random;
        playerscore.innerHTML = player2name +' score: ' +player2score;
        if(random == 1){
            reset();
            start.innerHTML = player1name +' Wins <br> Click to play again'
        }
        else if (player2score > 20){
            reset();
            start.innerHTML = player1name +' Wins <br> Click to play again'
        }
    }

}
roll.addEventListener('click',rolldice)