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

const determineWinner = (userWin, computerWin) => {
  if (userWin > computerWin) {
    return `You Win the Game! You won ${userWin} games and the computer won ${computerWin}.`;
  } else if (userWin === computerWin) {
    return `You Tied the Game! You won ${userWin} games and the computer won ${computerWin}.`;
  } else {
    return `You Lost the Game! You won ${userWin} games and the computer won ${computerWin}.`;
  }
};

const game = () => {
  let userWin = 0;
  let computerWin = 0;

  for (let gameCount = 0; gameCount < 20; gameCount++) {
    console.log(gameCount);
    // FIXME
    // const userInput = prompt(
    //   "Please enter Rock, Paper or Scissor"
    // ).toLowerCase();
    const computerResult = computerPlay();
    if (
      userInput !== "rock" &&
      userInput !== "paper" &&
      userInput !== "scissor"
    ) {
      console.log("Please type in a correct input: Rock, Paper, Scissor.");
      game();
    }

    const roundResult = calculateResults(userInput, computerResult);

    if (roundResult === 0) {
      console.log(`You Lost! ${computerResult} beats ${userInput}.`);
      computerWin++;
    } else if (roundResult === 1) {
      console.log(`You Tied. ${computerResult} is equal to ${userInput}`);
    } else if (roundResult === 2) {
      console.log(`You Win! ${userInput} beats ${computerResult}`);
      userWin++;
    }
  }

  console.log(determineWinner(userWin, computerWin));
};

game();
