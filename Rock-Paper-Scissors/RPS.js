const playerChoiceDisplay = document.querySelector('#playerChoiceDisplay p');
const computerChoiceDisplay = document.querySelector('#computerChoiceDisplay p');
const results = document.querySelector('#results');
const resultsDisplay = document.querySelector('#results p');
const resetButton = document.querySelector('#resetButton');

let isGameOver = false;
resetButton.style.display = 'none';
finalScore.style.display = 'none';
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
    playerChoiceDisplay.innerText = `${playerSelection[0].toUpperCase()}${playerSelection.slice(1)}`
    computerChoiceDisplay.innerText = `${computerSelection}.`;
    if (computerSelection.toUpperCase() == playerSelection.toUpperCase()) {
        resultsDisplay.innerText = 'It\'s a tie!';
        return 'tie';
    }
    else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors') {
        resultsDisplay.innerText = 'You won! Rock beats scissors!';
        return 'win';
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
        resultsDisplay.innerText = 'You won! Paper covers rock!';
        return 'win';
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
        resultsDisplay.innerText = 'You won! Scissors cuts paper!';
        return 'win';
    } else if(playerSelection.toUpperCase() !== 'ROCK' && playerSelection.toUpperCase() !== 'PAPER' && playerSelection.toUpperCase() !== 'SCISSORS') {
        resultsDisplay.innerText = 'Invalid Input!';
        return null;
    }
     else {
        resultsDisplay.innerText = 'You lose! Try again!';
        return 'lose';
    }
}

//Each button will input Rock, paper, or scissors and start/continue the game. 
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', function(e) {
    let playerSelection = 'Rock';
    let computerSelection = computerPlay();
    let roundPoint = playRound(playerSelection, computerSelection);
        roundPoint;
        gameScore(roundPoint);
})

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', function(e) {
    let playerSelection = 'Paper';
    let computerSelection = computerPlay();
    let roundPoint = playRound(playerSelection, computerSelection);
        roundPoint;
        gameScore(roundPoint);
})

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', function(e) {
    let playerSelection = 'Scissors';
    let computerSelection = computerPlay();
    let roundPoint = playRound(playerSelection, computerSelection);
        roundPoint;
        gameScore(roundPoint);
})


//game will begin keeping track of the scores
//game will add a point to the winner's score each round
//game will update the scoreboard
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;
function gameScore(roundPoint) {
    if(isGameOver !== true) {
        let roundResult = roundPoint;
        if (roundResult === 'win') {
            let updateScore1 = document.querySelector('#playerScoreDisplay p');
            playerScore = ++playerScore;
            updateScore1.innerText = `${playerScore}`;
            if (playerScore === 5) {
                alert('You win!');
                let finalScore = document.querySelector('#finalScore');
                finalScore.innerText = `Final Score: You: ${playerScore} Computer: ${computerScore}`;
                finalScore.style.display = 'block';
                isGameOver = true;
                askReset();
            }
        } else if (roundResult !== 'win' && roundResult === 'lose') {
            let updateScore2 = document.querySelector('#computerScoreDisplay p');
            computerScore = ++computerScore;
            updateScore2.innerText = `${computerScore}`;
            if (computerScore === 5) {
                alert('You Lose!')
                let finalScore = document.querySelector('#finalScore')
                finalScore.innerText = `Final Score: You: ${playerScore} Computer: ${computerScore}` 
                finalScore.style.display = 'block';
                isGameOver = true;
                askReset();
            }
        } 
    }
        
}

function askReset() {
    if (isGameOver == true) {
        resetButton.style.display = 'block';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    } 
}


resetButton.addEventListener('click', function(e) {
    let updateScore1 = document.querySelector('#playerScoreDisplay p');
    let updateScore2 = document.querySelector('#computerScoreDisplay p');
    playerScore = 0;
    computerScore = 0;
    updateScore1.innerText = '0';
    updateScore2.innerText = '0';
    playerChoiceDisplay.textContent = "";
    computerChoiceDisplay.textContent = "";
    resultsDisplay.innerText = "";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    resetButton.style.display = 'none';
    finalScore.style.display = 'none';
    finalScore.innerText = "";
    isGameOver = false;
});