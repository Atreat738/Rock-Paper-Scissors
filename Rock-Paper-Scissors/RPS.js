//const startGame = document.querySelector('button');

//commputerPlay creates a random selection of rock, paper, or scissors. 
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
let playerSelection = prompt('Choose! Rock, Paper, Scissors!');

//playRound asks user to type "rock, paper or scissors"
//the input should not be case sensitive. 
//A message will tell the user of the results in the console. 

function playRound(playerSelection, computerSelection) {
    console.log(`You chose: ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)}.`, `Computer chose:  ${computerSelection}.`);
    if (computerSelection.toUpperCase() == playerSelection.toUpperCase()) {
        console.log('It\'s a tie! Who woulda thunk!?');
        return 'It\'s a tie! Who woulda thunk!?';
    }
    else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors') {
        console.log('You won! Rock beats scissors!');
        return 'win';
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
        console.log('You won! Paper covers rock!');
        return 'win';
    }
    else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
        console.log('You won! Scissors beats paper!');
        return 'win';
    }else if(playerSelection.toUpperCase() !== 'Rock' && playerSelection.toUpperCase() !== 'Paper' && playerSelection.toUpperCase() !== 'Scissors') {
        console.log('Invalid Input!')
        return null;
    }
     else {
        console.log('You lose! Try again!');
        return 'lose';
    }
}



