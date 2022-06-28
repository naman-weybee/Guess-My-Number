'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        NoNumber();
    
    }else if(guess === secretNumber){
        success();

    }else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High !' : 'Too Low !';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            LostGame();
        }
        
    }
})

// ----------------------- Coding Challenge #1 --> "RESET THE GAME" ------------------

document.querySelector('.again').addEventListener('click', function(){
    Reset();
})

function DisplayMessage(msg){
    document.querySelector('.message').textContent = msg;
}

function NoNumber(){
    DisplayMessage('No number !');
}

function success (){
    document.querySelector('.number').textContent = secretNumber;
    DisplayMessage('correct number !');
    document.querySelector('body').style.backgroundColor = 'rgb(0, 212, 254)';
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}

function LostGame(){
    document.querySelector('.score').textContent = 0;
   DisplayMessage('You Lost the Game !');
}

function Reset(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.score').textContent = score;
    DisplayMessage('Start Guessing... !');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}
