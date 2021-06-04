const startGame = document.getElementById('StartGame');


function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    if (result == 0) {   
        return 'Rock';
    } else if (result == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}


const computerSelection = computerPlay();
//const playerSelection = 'Rock';
let playerSelection = prompt('Choose! Rock, Paper, Scissors!');

function playRound(playerSelection, computerSelection) {
    console.log(`'You chose: '${playerSelection}`, `'Computer chose: ' ${computerSelection}`);
    if (computerSelection.toUpperCase() == playerSelection.toUpperCase()) {
        console.log('It\'s a tie! Who whoulda thunk!?');
    }
    else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors') {
        console.log('You won! Rock beats scissors!');
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
        console.log('You won! Paper covers rock!');
    }
    else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
        console.log('You won! Scissors beats paper!');
    } else {
        return console.log('You lose! Try again!');
    }
}

playRound(playerSelection, computerSelection);

//button.onclick = playRound(playerSelection, computerSelection);
//startGame.addEventListener("click", playRound(playerSelection, computerSelection));


