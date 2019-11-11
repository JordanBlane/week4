let dice = document.getElementById('dice');
let startbutton = document.getElementById('start');
let roll = document.getElementById('roll');
let playername = document.getElementById('playername');
let playerscore = document.getElementById('playerscore');
let score = 0

function game(){
    //set up screen
    dice.style.visibility = 'visible';
    roll.style.visibility = 'visible';
    start.style.visibility = 'hidden';
    //set to player 1
    playername.innerHTML = 'Player 1';
    //set up screen
    playername.style.visibility = 'visible';
    playerscore.style.visibility = 'visible';
}
startbutton.addEventListener('click', game)

function rolldice(){
    random = Math.ceil(Math.random() * 6);
    dice.src = 'img/'+random+'.png';
    score += random;
    if (score <= 20){
        playerscore.innerHTML = score
    }else{
        alert('you win')
    }
}
roll.addEventListener('click',rolldice)