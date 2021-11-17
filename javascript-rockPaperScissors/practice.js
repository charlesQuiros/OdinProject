//computer chooses randomly
const computerPlay = () => {
  const result = Math.floor(Math.random() * 3);
  switch (result) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
    default:
      return "error";
  }
};

//player input and computer play are compared to declare a victory
const calculateResults = (userInput, computerResult) => {
  switch (userInput) {
    case "rock":
      if (computerResult === "rock") {
        return 1;
      } else if (computerResult === "paper") {
        return 0;
      } else if (computerResult === "scissor") {
        return 2;
      }
    case "paper":
      if (computerResult === "rock") {
        return 2;
      } else if (computerResult === "paper") {
        return 1;
      } else if (computerResult === "scissor") {
        return 0;
      }
    case "scissor":
      if (computerResult === "rock") {
        return 0;
      } else if (computerResult === "paper") {
        return 2;
      } else if (computerResult === "scissor") {
        return 1;
      }
  }
};

const checkVictory = (userWin, computerResult) => {
  console.log(userWin, +" " + computerResult);
  if (userWin === 5) {
    document.querySelector("#victory").textContent = "You Win!";
  } else if (computerResult === 5) {
    document.querySelector("#victory").textContent = "You Lose!";
  } else {
    return;
  }
};

//where the game logic is initiated
const game = () => {
  const userClick = document.querySelectorAll("button");

  userClick.forEach((button) => {
    button.addEventListener("click", () => {
      let userWin = document.querySelector("#user-score").textContent;
      let computerWin = document.querySelector("#pc-score").textContent;

      userWin = parseInt(userWin, 10);
      computerWin = parseInt(computerWin, 10);

      const computerResult = computerPlay();
      const userInput = button.id;

      const roundResult = calculateResults(userInput, computerResult);

      checkVictory(userWin, computerWin);

      if (roundResult === 0) {
        document.querySelector(
          "#output"
        ).textContent = `You Lost! ${computerResult} beats ${userInput}.`;
        document.querySelector("#pc-score").textContent = computerWin + 1;
      } else if (roundResult === 1) {
        document.querySelector(
          "#output"
        ).textContent = `You Tied. ${computerResult} is equal to ${userInput}`;
      } else if (roundResult === 2) {
        document.querySelector(
          "#output"
        ).textContent = `You Win! ${userInput} beats ${computerResult}.`;
        document.querySelector("#user-score").textContent = userWin + 1;
      }
    });
  });
};

game();
