const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset');
const tools = ['rock', 'paper', 'scissors'];
const pChoice = document.querySelector('#pWep');
const cChoice = document.querySelector('#cWep');
const plScore = document.querySelector('#pScore');
const coScore = document.querySelector('#cScore');
const winningScoreSelect = document.querySelector('#playto');
const msg = document.querySelector('.result');
const winMsg = document.querySelector('.winMsg');
const btns = document.querySelectorAll('.btns');

let playerChoice = "";
let compChoice = "";
let winningScore = 3;
let pScore = 0;
let cScore = 0;

rock.addEventListener('click', function(e) {
    playerChoice = e.target.innerText.toLowerCase();
    playGame();
});
paper.addEventListener('click', function(e) {
    playerChoice = e.target.innerText.toLowerCase();
    playGame();
});
scissors.addEventListener('click', function(e) {
    playerChoice = e.target.innerText.toLowerCase();
    playGame();
});

function playGame () {
    if (pScore !== winningScore && cScore !== winningScore) {
        playRound();
    }
}

function gameState() {
    if (pScore === winningScore) {
        winMsg.innerText = "CONGRATULATIONS!!! You Win The Game!";
        winMsg.classList.add('has-text-success');
        plScore.classList.add('has-text-success');
        coScore.classList.add('has-text-danger');
        btns.forEach((btn) => btn.disabled = true);
        return;
    } else if (cScore === winningScore) { 
        winMsg.innerText = "SORRY! You Lost The Game";
        winMsg.classList.add('has-text-danger');
        coScore.classList.add('has-text-success');
        plScore.classList.add('has-text-danger');
        btns.forEach((btn) => btn.disabled = true);
        return;
    }
}

function playRound() {
    compChoice = tools[Math.floor(Math.random() * 3)];
     if (compChoice === "rock" && playerChoice === "paper") {
        pScore++
        msg.innerText = "You Win! Paper beats Rock";
        gameState();
    } else if (compChoice === "paper" && playerChoice === "rock") {
        cScore++
        msg.innerText = "You Lose! Paper beats Rock";
        gameState();
    } else if (compChoice === "scissors" && playerChoice === "rock") {
        pScore++
        msg.innerText = "You Win! Rock beats Scissors";
        gameState();
    } else if (compChoice === "rock" && playerChoice === "scissors") {
        cScore++
        msg.innerText = "You Lose! Rock beats Scissors";
        gameState();
    } else if (compChoice === "paper" && playerChoice === "scissors") {
        pScore++
        msg.innerText = "You Win! Scissors beats Paper";
        gameState();
    } else if (compChoice === "scissors" && playerChoice === "paper") {
        cScore++
        msg.innerText = "You Lose! Scissors beats Paper";
        gameState();
    } else { msg.innerText = "Its a Tie!";
            gameState();
}

    
    pChoice.innerText = playerChoice;
    cChoice.innerText = compChoice;
    plScore.innerText = pScore;
    coScore.innerText = cScore;



}

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);
function reset() {
     playerChoice = "";
     compChoice = "";
     pScore = 0;
     cScore = 0;
     pChoice.innerText = playerChoice;
     cChoice.innerText = compChoice;
     plScore.innerText = pScore;
     coScore.innerText = cScore;
     msg.innerText = "";
     winMsg.innerText = "";
     plScore.classList.remove('has-text-success', 'has-text-danger');
     coScore.classList.remove('has-text-success', 'has-text-danger');
     winMsg.classList.remove('has-text-success', 'has-text-danger');
     btns.forEach((btn) => btn.disabled = false);
}
























































// const buttons = document.querySelectorAll('button');
// const pChoice = document.querySelector('#pWep');
// const cChoice = document.querySelector('#cWep');
// const pScore = document.querySelector('#pScore');
// const cScore = document.querySelector('#cScore');
// const msg = document.querySelector('.result');
// const winMsg = document.querySelector('.winMsg');
// const resetButton = document.querySelector('#reset');
// let computerSelection;
// let playerSelection;
// let playerScore = 0;
// let compScore = 0;

// function getComputerChoice() {
//     let choice = Math.floor(Math.random() * 3) + 1;
//     if (choice === 1) {
//         return "Rock";
//     } else if (choice === 2) {
//         return "Paper";
//     } return "Scissors";
// }
// buttons.forEach((btn) => {
//     btn.addEventListener('click', function (e) {
//         playerSelection = e.target.innerText;
//         if ( playerScore < 5 && compScore < 5) {
//         playRound(playerSelection);
//         } else if (compScore === 5) {
//             winMsg.innerText = "SORRY! You Lost The Game";
//         } else if (compScore === playerScore) {
//             winMsg.innerText = "It's a Tie Game!";
//         } else { winMsg.innerText = "CONGRATULATIONS!!! You Win The Game!"; }
//         pScore.innerText = playerScore;
//         cScore.innerText = compScore;
        
        
//     })
// });
// function playRound(playerSelection, computerSelection) {

//     computerSelection = getComputerChoice();
//     pChoice.innerText = playerSelection;
//     cChoice.innerText = computerSelection;
        

//     if (computerSelection === "Rock" && playerSelection === "Paper") {
//         playerScore = playerScore + 1;
//         msg.innerText = "You Win! Paper beats Rock";
//     } else if (computerSelection === "Paper" && playerSelection === "Rock") {
//         compScore = compScore + 1;
//         msg.innerText = "You Lose! Paper beats Rock";
//     } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
//         playerScore = playerScore + 1;
//         msg.innerText = "You Win! Rock beats Scissors";
//     } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
//         compScore = compScore + 1;
//         msg.innerText = "You Lose! Rock beats Scissors";
//     } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
//         playerScore = playerScore + 1;
//         msg.innerText = "You Win! Scissors beats Paper";
//     } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
//         compScore = compScore + 1;
//         msg.innerText = "You Lose! Scissors beats Paper";
//     } else { msg.innerText = "Its a Tie!"; }


// }
