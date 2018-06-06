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
const resetButton = document.getElementById("resetButton");

function getComputerChoice () {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

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

function tie (userChoice, computerChoice) {
  console.log("tie")
}

// Play a game
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  console.log(playerChoice);
  console.log(computerChoice);

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
      tie(playerChoice, computerChoice);
      result_span.innerHTML = `You played ${playerChoice} and Computer played ${computerChoice}. TIE. GO AGAIN.`
      break;
  }

  if (playerScore === 5 ) {
    result_span.innerHTML = "GAME OVER. YOU OWNED THE COMPUTER."
    resetButton.style.visibility = "visible";
    document.querySelector(".choices").disabled = true;

  }
  else if (computerScore === 5 ) {
    result_span.innerHTML = "GAME OVER. COMPUTER SMASHED YOU. TRY AGAIN?"
    resetButton.style.visibility = "visible";
    document.querySelector(".choices").disabled = true;
  }

}

// Player makes a move
rock.addEventListener('click', function () {
  playRound("rock");
})

paper.addEventListener('click', function () {
  playRound("paper");
})

scissors.addEventListener('click', function () {
  playRound("scissors");
})

// Reset game
resetButton.addEventListener('click', function resetGame () {
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
    rock.removeEventListener('click', function () {
      playRound("rock");
    })

    paper.removeEventListener('click', function () {
      playRound("paper");
    })

    scissors.removeEventListener('click', function () {
      playRound("scissors");
    })
    result_span.innerHTML = "New game! Waiting for your move...";
    resetButton.style.visibility = "hidden";
  })




// function game () {
//   for (var rounds = 0; rounds < 5; rounds++) {
//     function playRound();
//   }
//   else {
//     function whoWins();
//   }
// }

/*

function game () {

  let choices = ["Rock", "Paper", "Scissors"]
  let choice = choices[Math.floor(Math.random() * choices.length)]



}

var choices = ["Rock", "Paper", "Scissors"]
var choice = choices[Math.floor(Math.random() * choices.length)]
var playerScore = document.getElementById("playerScore").innerHTML
var computerScore = document.getElementById("computerScore").innerHTML

if (playerChoice === computerChoice) {
  console.log("It's a tie!");
}
else if (playerChoice === "rock" && computerChoice === "paper") {
  console.log("Computer wins!")
}
else if (playerChoice === "rock" && computerChoice === "scissors") {
  console.log("Player wins!")
}
else if (playerChoice === "paper" && computerChoice === "scissors") {
  console.log("Computer wins!")
}
else if (playerChoice === "paper" && computerChoice === "rock") {
  console.log("Player wins!")
}
else if (playerChoice === "scissors" && computerChoice === "rock") {
  console.log("Computer wins!")
}
else if (playerChoice === "scissors" && computerChoice === "paper") {
  console.log("Player wins!")
}

//document.getElementById("rock").onclick = function computerPlay () {
//  console.log(choice);
//  document.getElementById("computerplay").innerHTML = choice;
//  return choice
//} */
