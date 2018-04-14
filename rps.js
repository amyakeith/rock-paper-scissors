// function for computer's choice
// choose random number between 1 and 3 and
// determine move
function computerPlay()
{
  // get random number between 1 and 3
  var num = Math.floor(Math.random() * 3) + 1;
  return num;
}

// function for the user's choice
function playerSelection(id)
{
  var userChoice;
  const results = document.querySelector(".moves");
  const userMove = document.createElement("p");
  // if user selects ROCK
  if (id == "rock")
  {
    userChoice = 1;
    // add p w/ rock
    results.classList.add("userMove");
    userMove.textContent = "ROCK";
  }
  // if user selects PAPER
  else if (id == "paper")
  {
    userChoice = 2;
    // add p w/ PAPER
  }
    // if user selects SCISSORS
  else {
    userChoice = 3;
    // add p with SCISSORS
  }
  return userChoice;
}

// compare user's choice to computer's choice
const computerSelection = computerPlay();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function(e){playerSelection(button.id)});
});
