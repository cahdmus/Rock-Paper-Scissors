// Computer Output
function getComputerChoice() {
    let computerResult = Math.floor(Math.random() * 3);
    switch (computerResult) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Hmmmm... I think I messed up somewhere";
    }
}

console.log(`Computer played ${getComputerChoice()} !`);

// Human input
function getHumanChoice() {
    return prompt("THIS IS THE ROCK PAPER SCISSORS TOURNAMENT !\nWhat are you going to play ?", "Rock, paper or scissors ?");
}

// Logic
let humanScore = 0;
let computerScore = 0;

const winMessage = "Oh my god, you win !";
const LoseMessage = "Boohoo you loose...";
const DrawMessage = "It's a draw";

function playRound(humanChoice, computerChoice) {
    switch (humanChoice.toLowerCase().trim()) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    return DrawMessage;
                case "paper":
                    computerScore = + 1;
                    return LoseMessage;
                case "scissors":
                    humanScore = + 1;
                    return winMessage;
            }
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanScore = + 1;
                    return winMessage;
                case "paper":
                    return DrawMessage;
                case "scissors":
                    computerScore = + 1;
                    return LoseMessage;
            }
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore = + 1;
                    return LoseMessage;
                case "paper":
                    humanScore = + 1;
                    return winMessage;
                case "scissors":
                    return DrawMessage;
            }
        default:
            return "What just happened ?"
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
// console.log(`Human played ${getHumanChoice()} !`);