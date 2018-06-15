let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById("playerScore");
let computerScore_span = document.getElementById("computerScore");
let scoreboard_div = document.querySelector(".scoreboard");
let result_span = document.getElementById("result")
const choices_div = document.querySelector(".choices")
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// get computer move
function getComputerChoice () {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Round result
function win (playerChoice, computerChoice) {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_span.innerHTML = `You played ${playerChoice} and Computer played ${computerChoice}. YOU WIN.`
}

function lose (playerChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  playerScore_span.innerHTML = playerScore;
}

// Play a round
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();

  switch (playerChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(playerChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(playerChoice, computerChoice);
      result_span.innerHTML = `You played ${playerChoice} and Computer played ${computerChoice}. YOU LOSE.`
      break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
      result_span.innerHTML = `You played ${playerChoice} and Computer played ${computerChoice}. TIE. GO AGAIN.`
      break;
  }

  if (playerScore === 5 ) {
    result_span.innerHTML = "GAME OVER. YOU OWNED THE COMPUTER."
    resetButton.style.visibility = "visible";
    rock.removeEventListener('click', playRound, true)
  }
  else if (computerScore === 5 ) {
    result_span.innerHTML = "GAME OVER. COMPUTER SMASHED YOU. TRY AGAIN?"
    resetButton.style.visibility = "visible";
    rock.removeEventListener('click', playRound, true)
  }
}

// Player makes a move
rock.addEventListener('click', () => playRound("rock"))
paper.addEventListener('click', () => playRound("paper"))
scissors.addEventListener('click', () => playRound("scissors"))

// Reset game
const resetButton = document.getElementById("resetButton");
function resetGame () {
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
    result_span.innerHTML = "New game! Waiting for your move...";
    resetButton.style.visibility = "hidden";
  }
resetButton.addEventListener('click', resetGame, false)
