const choices = document.querySelectorAll('.choice_1');
const choices_2 = document.querySelectorAll('.choice_2');
const choices_3 = document.querySelectorAll('.choice_3');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const rulesButton = document.getElementById('rules-button');
const rulesPopup = document.getElementById('rules-popup');
const closeRules = document.getElementById('close-rules');

let playerScore = 0;
let computerScore = 0;


choices.forEach(choice_1 => {
    choice_1.addEventListener('click', () => playRound(choice_1.id));
});
choices_2.forEach(choice_2 => {
    choice_2.addEventListener('click', () => playRound(choice_2.id));
});
choices_3.forEach(choice_3 => {
    choice_3.addEventListener('click', () => playRound(choice_3.id));
});


rulesButton.addEventListener('click', () => rulesPopup.style.display = 'block');


closeRules.addEventListener('click', () => rulesPopup.style.display = 'none');


function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getWinner(player, computer) {
    if (player === computer) return 'draw';
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'player';
    } else {
        return 'computer';
    }
}

function displayResult(playerChoice, computerChoice, winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        resultMessage.textContent = 'You win!';
        
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        resultMessage.textContent = 'Computer wins!';
    } else {
        resultMessage.textContent = 'It\'s a draw!';
    }
    
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
}


playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
playerScoreSpan.textContent = playerScore;
computerScoreSpan.textContent = computerScore;
