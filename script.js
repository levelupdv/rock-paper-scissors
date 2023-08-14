const buttons = document.querySelectorAll('button');
const pChoice = document.querySelector('#pChoice');
const cChoice = document.querySelector('#cChoice');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const msg = document.querySelector('h3');
const winMsg = document.querySelector('h4');
let computerSelection;
let playerSelection;
let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } return "Scissors";
}
buttons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        playerSelection = e.target.innerText;
        if ( playerScore < 5 && compScore < 5) {
        playRound(playerSelection);
        } else if (compScore === 5) {
            winMsg.innerText = "SORRY! You Lost The Game";
        } else if (compScore === playerScore) {
            winMsg.innerText = "It's a Tie Game!";
        } else { winMsg.innerText = "CONGRATULATIONS!!! You Win The Game!"; }
        pScore.innerText = playerScore;
        cScore.innerText = compScore;
        
        
    })
});
function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();
    pChoice.innerText = playerSelection;
    cChoice.innerText = computerSelection;
        

    if (computerSelection === "Rock" && playerSelection === "Paper") {
        playerScore = playerScore + 1;
        msg.innerText = "You Win! Paper beats Rock";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        compScore = compScore + 1;
        msg.innerText = "You Lose! Paper beats Rock";
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        playerScore = playerScore + 1;
        msg.innerText = "You Win! Rock beats Scissors";
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        compScore = compScore + 1;
        msg.innerText = "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        playerScore = playerScore + 1;
        msg.innerText = "You Win! Scissors beats Paper";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        compScore = compScore + 1;
        msg.innerText = "You Lose! Scissors beats Paper";
    } else { msg.innerText = "Its a Tie!"; }


}


    
    


