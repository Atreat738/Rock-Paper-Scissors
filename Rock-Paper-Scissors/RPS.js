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
        let newP = document.createElement('p')
        newP.innerText = 'It\'s a tie!';
        results.appendChild(newP);
        return 'tie';
    }
    else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors') {
        let newP = document.createElement('p')
        newP.innerText = 'You won! Rock beats scissors!';
        results.appendChild(newP);
        return 'win';
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
        let newP = document.createElement('p')
        newP.innerText = 'You won! Paper covers rock!';
        results.appendChild(newP);
        return 'win';
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
        let newP = document.createElement('p')
        newP.innerText = 'You won! Scissors cuts paper!';
        results.appendChild(newP);
        return 'win';
    } else if(playerSelection.toUpperCase() !== 'ROCK' && playerSelection.toUpperCase() !== 'PAPER' && playerSelection.toUpperCase() !== 'SCISSORS') {
        let newP = document.createElement('p')
        newP.innerText = 'Invalid Input!';
        results.appendChild(newP);
        return null;
    }
     else {
        let newP = document.createElement('p')
        newP.innerText = 'You lose! Try again!';
        results.appendChild(newP);
        return 'lose';
    }
}

//Each button will input Rock, paper, or scissors and start/continue the game. 
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', function(e) {
    let playerSelection = 'Rock';
        playerSelection;
    let computerSelection = computerPlay();
    let roundPoint = playRound(playerSelection, computerSelection);
        roundPoint;
        gameScore(roundPoint);
})

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', function(e) {
    let playerSelection = 'Paper';
        playerSelection;
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

const results = document.querySelector('#results');

//game will begin keeping track of the scores
//game will add a point to the winner's score each round
//game will update the scoreboard
let playerScore = 0;
let computerScore = 0;
function gameScore(roundPoint) {
        let roundResult = roundPoint;
        let displayScore = document.createElement('p');
        if (roundResult === 'win') {
            playerScore = ++playerScore;
            displayScore.innerText = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;
            results.appendChild(displayScore);
            if (playerScore === 5) {
                //let winResult = document.createElement('p');
                alert('You win!');
                let finalScore = document.createElement('p');
                //winResult.innerText = 'You win!';
                finalScore.innerText = `Final Score: You: ${playerScore} Computer: ${computerScore}`;
                //results.appendChild(winResult);
                results.appendChild(finalScore);
                playerScore = 0;
                computerScore = 0;
            }
        } else if (roundResult !== 'win' && roundResult === 'lose') {
            computerScore = ++computerScore;
            displayScore.innerText = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;
            results.appendChild(displayScore);
            if (computerScore === 5) {
                //let loseResult = document.createElement('p');
                alert('You Lose!')
                let finalScore = document.createElement('p')
                //loseResult.innerText = 'You lose!'
                finalScore.innerText = `Final Score: You: ${playerScore} Computer: ${computerScore}` 
                //results.appendChild(loseResult);
                results.appendChild(finalScore);
                playerScore = 0;
                computerScore = 0;
            }
        } else {
            displayScore.innerText = `The scores remain: ${playerScore} ${computerScore}`;
            results.appendChild(displayScore);

        }
        
}