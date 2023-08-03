let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } return "scissors";
}
let computerSelection;
let playerSelection;

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Rock, Paper or Scissors?", "Shoot!").toLocaleLowerCase();
    computerSelection = getComputerChoice();

    console.log(`You Choose: ${playerSelection}`);
    console.log(`Computer Choose: ${computerSelection}`);


    if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore = playerScore + 1;
        console.log(`Player Score: ${playerScore} - Comp Score: ${compScore}`);
        return "You Win! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        compScore = compScore + 1;
        console.log(`Player Score: ${playerScore} - Comp Score: ${compScore}`);
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore = playerScore + 1;
        console.log(`Player Score: ${playerScore} - Comp Score: ${compScore}`);
        return "You Win! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        compScore = compScore + 1;
        console.log(`Player Score: ${playerScore} - Comp Score: ${compScore}`);
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore = playerScore + 1;
        console.log(`Player Score: ${playerScore} - Comp Score: ${compScore}`);
        return "You Win! Scissors beats Paper";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        compScore = compScore + 1;
        console.log(`Player Score: ${playerScore} - Comp Score: ${compScore}`);
        return "You Lose! Scissors beats Paper";
    } else { return "Its a Tie!"; }


}

// if (compScore === 5) {
//     console.log("You Lose!")
// } else if (playerScore === 5) {
//     console.log("You Win!")
// }

function game() {

    for (let i = 0; i < 5; i++)
    console.log(playRound(playerSelection, computerSelection));
    if (compScore > playerScore) {
        console.log("You Lose The Game")
    } else { console.log("You Win The Game!")}
}

console.log(game());
// console.log(playRound(playerSelection, computerSelection));