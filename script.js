let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userStat = document.querySelector("#user-score");
const compStat = document.querySelector("#comp-score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let rndIdx = Math.floor(Math.random() * 3);
  return options[rndIdx];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw";
  msg.style.backgroundColor = "#515a47";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    userScore++;
    userStat.innerText = userScore;
    msg.style.backgroundColor = "green";
  } else {
    msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
    compScore++;
    compStat.innerText = compScore;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
