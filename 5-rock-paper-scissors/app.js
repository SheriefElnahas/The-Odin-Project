/********************************************************************************************************/
/*------------------- DOM Selection -----------------*/
// Modal & Overlay
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal__text');
// const overlay = document.querySelector('.overlay');


// Show Result Element & Show Details Element
const resultElement = document.querySelector('.game__result');
const detailsElement = document.querySelector('.game__details');


// Player & Computer Choice ( Rock , Paper Or Scissors )) 
const playerChoiceElement = document.querySelector('.player__choice');
const computerChoiceElement = document.querySelector('.computer__choice');

// Player & Computer Score Html Element
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');


//  ( Rock , Paper Or Scissors ) Buttons
const buttons = document.querySelectorAll('.btn');


// Reset Button & Game Over Variable To Check Game State
const playAgain = document.querySelector('.modal__button');
let gameOver = false;


// Track Player & Computer Score To Determine The Winner
let playerScore = 0;
let computerScore = 0;
/********************************************************************************************************/




/********************************************************************************************************/
/*------------------- Logic -----------------*/
const choices = ['rock', 'paper', 'scissors'];

// Helper Function
const randomNum = () => Math.floor(Math.random() * 3);

function computerPlay() {
    return choices[randomNum()];
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

// Function To Change From String To Emoji
function changeToEmoji(choice) {
    if (choice === 'paper') {
        choice = '✋';
    } else if (choice === 'rock') {
        choice = '✊';
    } else if (choice === 'scissors') {
        choice = '✌';
    }
    return choice;
}



function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {

        // Player Wins
        playerScore++;
        return `You Won! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`
    } else if
        (computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'scissors' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection === 'rock') {

        // Computer Wins
        computerScore++;
        return `You Lost! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`
    } else {

        // Draw
        return `It's a tie! ${capitalizeFirstLetter(playerSelection)} ties with ${capitalizeFirstLetter(computerSelection)}`
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        // Get Player & Computer Choice
        const playerChoice = e.target.classList[1];
        const computerChoice = computerPlay();

        // Get The Result Of Playing
        const result = checkWinner(playerChoice, computerChoice);


        // Stop The Game Of The Score is 5 & Hide The Modal & Overlay
        if (playerScore === 5 || computerScore === 5) {
            gameOver = true;
            modalText.textContent = result.split('!')[0] + "!";
            modal.showModal();

        }

        if (!gameOver) {
            // Display Player & Computer Choice
            playerChoiceElement.textContent = changeToEmoji(playerChoice);
            computerChoiceElement.textContent = changeToEmoji(computerChoice);

            // Display The Result & Details 
            resultElement.textContent = result.split('!')[0] + "!";
            detailsElement.textContent = result.split('!')[1];
        }

        // Display Player & Computer Choice
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    })
})

function reset() {
    // Remove The Modal & Overlay

    modal.close();

    // Reset Result & Details Text 
    resultElement.textContent = 'Choose your weapon!';
    detailsElement.textContent = 'First to score 5 points wins the game';


    // Reset Player & Computer Score HTML Elements
    playerChoiceElement.textContent = computerChoiceElement.textContent = '?';
    playerScoreElement.textContent = computerScoreElement.textContent = 0;

    // Reset Player & Computer Score Variables
    playerScore = computerScore = 0;

    // Start The Game Again
    gameOver = false;
}

playAgain.addEventListener('click', function () {
    reset();
});


/********************************************************************************************************/




