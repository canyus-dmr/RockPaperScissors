function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";
    } else {
        return "You Lose! Scissors beats Paper";
    }

};
function getComputerChoice () {
    let a = (Math.random * 3) + 1; 
    if (a === 1) {
        return "Rock";
    } else if (a === 2) {
        return "Paper";        
    } else {
        return "Scissors";
    }
    
}
;
const playerSelection = "rock";
const computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
};