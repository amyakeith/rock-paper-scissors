// establish results div variable to attach things to it
const resultsDiv = document.querySelector(".results");

// create a p element to show the user's selection
function addUserMove(text)
{
  // create a user move paragraph
  const userMove = document.createElement("p");
  // give it a classname
  userMove.classList.add("userMove");
  // give it text
  userMove.textContent = text;
  userMove.setAttribute("style", "display: inline")
  // append it to the results div
  resultsDiv.appendChild(userMove);
}

function addComputerMove(text)
{
  // create a new user move paragraph
  const computerMove = document.createElement("p");
  // give it a classname
  computerMove.classList.add("computerMove");
  // add text
  computerMove.textContent = text;
  computerMove.setAttribute("style", "display: inline")
  // append it to resultsDiv
  resultsDiv.appendChild(computerMove);
}

// function for the user's choice
function playerSelection(id)
{
  var userChoice;

  // if user selects ROCK
  if (id == "rock")
  {
    userChoice = 1;
  }
  // if user selects PAPER
  else if (id == "paper")
  {
    userChoice = 2;
  }
    // if user selects SCISSORS
  else {
    userChoice = 3;
  }
  return userChoice;
}

// choose random number between 1 and 3 and
// determine move
function computerPlay()
{
  // get random number between 1 and 3
  var num = Math.floor(Math.random() * 3) + 1;
  return num;
}

// display user move
function displayUser(move)
{
  if (move == 1) {
    addUserMove("ROCK");
  }
  else if (move == 2) {
    addUserMove("PAPER");
  }
  else {
    addUserMove("SCISSORS");
  }
}

// display computer move
function displayComputer(move)
{
  if (move == 1) {
    addComputerMove(" vs. ROCK");
  }
  else if (move == 2) {
    addComputerMove(" vs. PAPER");
  }
  else {
    addComputerMove(" vs. SCISSORS");
  }
}

// display winner
function winner(text) {
  const win = document.createElement("p");
  // give it a classname
  win.classList.add("win");
  // give it text
  win.textContent = text;
  // append it to the results div
  resultsDiv.appendChild(win);
}

// display user score

// display computer score


// compare user's choice to computer's choice
function determineWinner(user, computer)
{
  // if user chose ROCK
  if (user == 1) {
    // if computer chose ROCK
    if (computer == 1) {
      winner("it's a tie!");
    }
    // if computer chose PAPER
    else if (computer == 2) {
      winner("i win!");
    }
    // if computer chose SCISSORS
    else {
      winner("you win!");
    }
  }
  // if user chose PAPER
  else if (user == 2) {
    // if computer chose ROCK
    if (computer == 1) {
      winner("you win!")
    }
    // if computer chose PAPER
    else if (computer == 2) {
      winner("it's a tie!");
    }
    // if computer chose SCISSORS
    else {
      winner("i win!");
    }
  }
  // if user chose SCISSORS
  else
  {
    // if computer chose ROCK
    if (computer == 1) {
      winner("i win!");
    }
    // if computer chose PAPER
    else if (computer == 2)
    {
      winner("you win!");
    }
    // if computer chose SCISSORS
    else {
      winner("it's a tie!");
    }
  }
}

function game(btnID)
{
  while (resultsDiv.firstChild)
  {
      resultsDiv.removeChild(resultsDiv.firstChild);
  }
  var user = playerSelection(btnID);
  displayUser(user);
  var comp = computerPlay();
  displayComputer(comp);
  determineWinner(user, comp);
}

function clickEvent() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", function(e){game(button.id)});
  });
}



// BE SURE TO CLEAR CHILD NODES AFTER EACH GAME!!!
