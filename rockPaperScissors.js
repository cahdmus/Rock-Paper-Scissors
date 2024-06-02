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
    
// Human input
function getHumanChoice () {
    return prompt("THIS IS THE ROCK PAPER SCISSORS TOURNAMENT !\nWhat are you going to play ?", "Rock, paper or scissors ?");
}
    
// Logic
let humanScore = 0;
let computerScore = 0;

const winMessage = "Oh my god, you win !";
const loseMessage = "Boohoo you loose...";
const drawMessage = "It's a draw";

function playRound(humanChoice, computerChoice) {
    let humanShort = humanChoice.toLowerCase().trim();
    if (humanShort == computerChoice) {
        return drawMessage;
    }
    else if (humanShort == "rock" && computerChoice == "scissors" 
            || humanShort == "paper" && computerChoice == "rock"
            || humanShort == "scissors" && computerChoice == "paper") {
        humanScore++;
        return winMessage;
            }
    else {
        computerScore++;
        return loseMessage;
    }
}
    
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
    
alert(`Computer played ${computerSelection}, and human played ${humanSelection}. What a thrilling game !!\nTherefore the results are in : ${playRound(humanSelection, computerSelection)}`);    
    
