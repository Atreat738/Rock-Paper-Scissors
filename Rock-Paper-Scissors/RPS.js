//const startGame = document.querySelector('button'); Will come back to this after learning more about DOM Manipulation.

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
//A message will tell the user of the results in the console. 

function playRound(playerSelection, computerSelection) {
    console.log(`You chose: ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} Computer chose: ${computerSelection}.`);
    if (computerSelection.toUpperCase() == playerSelection.toUpperCase()) {
        console.log('It\'s a tie! Who woulda thunk!?');
        return 'tie';
    }
    else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors') {
        console.log('You won! Rock beats scissors!');
        return 'win';
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
        console.log('You won! Paper covers rock!');
        return 'win';
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
        console.log('You won! Scissors cuts paper!');
        return 'win';
    } else if(playerSelection.toUpperCase() !== 'ROCK' && playerSelection.toUpperCase() !== 'PAPER' && playerSelection.toUpperCase() !== 'SCISSORS') {
        console.log('Invalid Input!');
        return null;
    }
     else {
        console.log('You lose! Try again!');
        return 'lose';
    }
}

//game will begin keeping track of the scores
//game will add a point to the winner's score each round
//game will update the scoreboard
let playerScore = 0;
let computerScore = 0;


function game() {
    while (playerScore < 5 && computerScore < 5) {
        
        let playerSelection = prompt('Choose! Rock, Paper, Scissors!');
        let computerSelection = computerPlay();
        //playRound(playerSelection, computerSelection);
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
game();



