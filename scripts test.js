let humanScore = 0;
    document.querySelector("#playerScore").textContent= humanScore;
let computerScore = 0;
    document.querySelector("#computerScore").textContent= computerScore;
let currentRound = 1;
    document.querySelector("#currentRound").textContent= currentRound;

function playGame(getHumanChoice) {
    let numberOfRound = 5;
    
    const gameDrawMessage = `Well, whatever you did the computer has a score of ${computerScore}, 
        and your score is ${humanScore} so it's a draw !`;
    const gameLoseMessage = `With a score of ${computerScore}, computer wins !`;
    const gameWinMessage = `With a score of ${humanScore}, you win !`;
    const gameErrorMessage = `Hmmm... the computer has a score of ${computerScore}, and your score 
        is ${humanScore} but to me honest I don't know what happened...`;  
    
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

    const winMessage = "Oh my god, you win this round !";
    const loseMessage = "Boohoo you loose this round...";
    const drawMessage = "It's a draw";
    const errorMessage = "You played an unauthorized hand ! Disgusting..."

    // Single round of game
    function playRound(humanChoice, computerChoice) {
        let humanShort = humanChoice.toLowerCase().trim();
        if (humanShort != "rock" 
                && humanShort != "paper" 
                && humanShort != "scissors") {
            console.log(`${computerScore} and ${humanScore}`)
            return errorMessage;
        }
        else if (humanShort == computerChoice) {
            currentRound++;
            document.querySelector("#currentRound").textContent= currentRound;
            console.log(`${computerScore} and ${humanScore}`)
            return drawMessage;
        }
        else if (humanShort == "rock" && computerChoice == "scissors" 
                || humanShort == "paper" && computerChoice == "rock"
                || humanShort == "scissors" && computerChoice == "paper") {
            humanScore++;
            document.querySelector("#playerScore").textContent= humanScore;
            currentRound++;
            document.querySelector("#currentRound").textContent= currentRound;
            console.log(`${computerScore} and ${humanScore}`)
            return winMessage;
                }
        else {
            computerScore++;
            document.querySelector("#computerScore").textContent= computerScore;
            currentRound++;
            document.querySelector("#currentRound").textContent= currentRound;
            console.log(`${computerScore} and ${humanScore}`)
            return loseMessage;
        }
    }

    // fetching human and computer choices
    function getPlayersChoices() {
        const humanSelection = getHumanChoice;
        const computerSelection = getComputerChoice();
        
        return `Computer played ${computerSelection}, and human played ${humanSelection}. What a thrilling game !!\nTherefore the results are in : 
        ${playRound(humanSelection, computerSelection)}`; 
    }
  
    // Calculating winner
    function declareWinner(human, computer, round) {
        if (human < round || computer < round) {
            return getPlayersChoices();
        }
        else if (human < computer) {
            return gameLoseMessage;
        }
        else if (human > computer) {
            return gameWinMessage;
        }
        else {
            return gameErrorMessage;
        }
    } 

    return declareWinner(humanScore, computerScore, numberOfRound);
}

// Human Input
const humanInputs = document.querySelectorAll(".humanInput");

// Start Game
humanInputs.forEach(humanInput => {
    humanInput.addEventListener("click", () => {
        playGame(humanInput.id);
    });
});


// pop-up message at the end of rounds
const mainWindow = document.querySelector("#mainWindow");

const roundMessage = document.createElement("div");
roundMessage.classList.add("tab");
roundMessage.classList.add("roundMessage");


const fakeNav = document.createElement("div");
fakeNav.classList.add("fakeNav");

const fakeBtn = document.createElement("div");
fakeBtn.classList.add("fakeBtn");

const closeBtn = document.createElement("button");
closeBtn.classList.add("close");
closeBtn.textContent = "x";

fakeBtn.appendChild(closeBtn)

fakeNav.appendChild(fakeBtn)

roundMessage.appendChild(fakeNav) 


const content = document.createElement("div");
roundMessage.appendChild(content);

const title = document.createElement("h1");
title.textContent = "You win this round !";
content.appendChild(title);
const description = document.createElement("div");
description.classList.add("popUp");
content.appendChild(description);
const computerChoiceImg = document.createElement("img");
computerChoiceImg.src = "images/computerchoicetest.png";
description.appendChild(computerChoiceImg);
const text = document.createElement("p");
text.textContent = `Computer played Paper, and human played Scissors. What a thrilling game !`;
description.appendChild(text);

mainWindow.appendChild(roundMessage) 
// roundMessage.classList.add("showPopUp");
// roundMessage.classList.add("hidePopUp");

closeBtn.addEventListener("click", () => {
    roundMessage.classList.add("hidePopUp");
});