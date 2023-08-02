function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } return "scissors";
}
const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper or Scissors?", "Shoot!").toLocaleLowerCase();


function playRound(playerSelection, computerSelection) {

    if (computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You Win! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You Win! Scissors beats Paper";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beats Paper";
    } else { return "Its a Tie!";}


}
console.log(`You Choose: ${playerSelection}`);
console.log(`Computer Choose: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));