const paperBtn = document.querySelector('.paper-btn');
const rockBtn = document.querySelector('.rock-btn');
const scissorBtn = document.querySelector('.scissor-btn');

function clickPaperBtn() {
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
        result = 'paper';
    }
    else if (random = 1) {
        result = 'rock';
    }
    else if (random = 2) {
        result = 'scissor'
    }
    
    let guess = 'paper';
    
    if (guess === result) {
        alert('You Win!');
    }

     else {
        alert('You Lose!');
     }
}