const Rock = document.getElementById("rock");
const Paper = document.getElementById("paper");
const Scissors = document.getElementById("scissors");
const Quit = document.getElementById("quit");
const result = document.getElementById("result");
let user_score = document.getElementById("user");
let computer_score = document.getElementById("comp");

function playRound(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
        result.innerHTML = `It's a Tie! Both chose ${userChoice}`;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result.innerHTML = `You Win! ${userChoice} beats ${computerChoice}`;
        user_score.textContent = Number(user_score.textContent) + 1;
    } else {
        result.innerHTML = `You Lose! ${computerChoice} beats ${userChoice}`;
        computer_score.textContent = Number(computer_score.textContent )+ 1;
    }
}

Rock.onclick = () => playRound("rock");
Paper.onclick = () => playRound("paper");
Scissors.onclick = () => playRound("scissors");
