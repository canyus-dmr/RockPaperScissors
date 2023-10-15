function getComputerChoice() {
    let a = Math.floor((Math.random() * 3) + 1);
    if (a === 1) {
        return "Rock";
    } else if (a === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

const playerSelection = null; 
const computerSelection = null; 

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Your selection: ");
    computerSelection = getComputerChoice();
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
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();