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

//playRound asks user to type "rock, paper or scissors"
//the input should not be case sensitive. 
//A message will tell the user of the results. 

function playRound(playerSelection, computerSelection) {
    results.innerText = `You chose: ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} Computer chose: ${computerSelection}.`;
    if (computerSelection.toUpperCase() == playerSelection.toUpperCase()) {
        results.append('It\'s a tie!');
        return 'tie';
    }
    else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors') {
        results.append('You won! Rock beats scissors!');
        return 'win';
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
        results.append('You won! Paper covers rock!');
        return 'win';
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
        results.append('You won! Scissors cuts paper!');
        return 'win';
    } else if(playerSelection.toUpperCase() !== 'ROCK' && playerSelection.toUpperCase() !== 'PAPER' && playerSelection.toUpperCase() !== 'SCISSORS') {
        results.append('Invalid Input!');
        return null;
    }
     else {
        results.append('You lose! Try again!');
        return 'lose';
    }
}

//
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', function(e) {
let playerSelection = 'Rock';
playerSelection;
let computerSelection = computerPlay();
playRound(playerSelection, computerSelection);

})

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', function(e) {
let playerSelection = 'Paper';
playerSelection;
let computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
})

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', function(e) {
let playerSelection = 'Scissors';
let computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
})

const results = document.querySelector('#results');


//old code(may reuse score tracker)
//This code will be reformed into something that displays on the webpage for the user to see instead of the console.
//game will begin keeping track of the scores
//game will add a point to the winner's score each round
//game will update the scoreboard
let playerScore = 0;
let computerScore = 0;
function game() {
    while (playerScore < 5 && computerScore < 5) {
        
        //let playerSelection = prompt('Choose! Rock, Paper, Scissors!');
        //let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 'win') {
            playerScore = ++playerScore;
            console.log(`Your Score: ${playerScore}, Computer Score: ${computerScore}`);
            if (playerScore === 5) {
                console.log('You win!');
                console.log(`Final Score: You: ${playerScore} Computer: ${computerScore}`);
            }
        } else if (roundResult !== 'win' && roundResult === 'lose') {
            computerScore = ++computerScore;
            console.log(`Your Score: ${playerScore}, Computer Score: ${computerScore}`);
            if (computerScore === 5) {
                console.log('You lose!');
                console.log(`Final Score: You: ${playerScore} Computer: ${computerScore}`);
            }
        } else {
            console.log(`The scores remain: ${playerScore} ${computerScore}`);           
        }
    }    
}