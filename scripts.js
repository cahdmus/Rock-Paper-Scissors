let humanScore = 0;
document.querySelector("#playerScore").textContent = humanScore;
let computerScore = 0;
document.querySelector("#computerScore").textContent = computerScore;
let currentRound = 1;
document.querySelector("#currentRound").textContent = currentRound;
let winToWin = 2;

const winMessage = "You win this round !";
const loseMessage = "Boohoo you lose...";
const drawMessage = "It's a draw";
const errorMessage = "You played an unauthorized hand ! Disgusting..."

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
    
function declareWinner(humanFinalScore, ComputerFinalScore) {
    if (humanFinalScore < ComputerFinalScore) {
        console.log(gameLoseMessage);
    }
    else if (humanFinalScore > ComputerFinalScore) {
        console.log(gameWinMessage);
    }
    else {
        console.log(gameErrorMessage);
    };
}


function checkIfWinner(human, computer, round) {
    if (human >= round || computer >= round) {
        alertWinner(human, computer);
    } else {
        alertRound();
    }
}

function playRound(humanChoice, computerChoice) {
    let humanShort = humanChoice.toLowerCase().trim();
    if (humanShort != "rock"
        && humanShort != "paper"
        && humanShort != "scissors") {
        console.log(`Computer : ${computerScore} (${computerChoice}) and Human : ${humanScore} (${humanChoice})`)
        checkIfWinner(humanScore, computerScore, winToWin);
        alertRound(humanShort, computerChoice, "error");
        return errorMessage;
    }
    else if (humanShort == computerChoice) {
        currentRound++;
        document.querySelector("#currentRound").textContent = currentRound;
        console.log(`Computer : ${computerScore} (${computerChoice}) and Human : ${humanScore} (${humanChoice})`)
        checkIfWinner(humanScore, computerScore, winToWin);
        alertRound(humanShort, computerChoice, "tie");
        return drawMessage;
    }
    else if (humanShort == "rock" && computerChoice == "scissors"
        || humanShort == "paper" && computerChoice == "rock"
        || humanShort == "scissors" && computerChoice == "paper") {
        humanScore++;
        document.querySelector("#playerScore").textContent = humanScore;
        currentRound++;
        document.querySelector("#currentRound").textContent = currentRound;
        console.log(`Computer : ${computerScore} (${computerChoice}) and Human : ${humanScore} (${humanChoice})`)
        checkIfWinner(humanScore, computerScore, winToWin);
        alertRound(humanShort, computerChoice, "winner");
        return winMessage;
    }
    else {
        computerScore++;
        document.querySelector("#computerScore").textContent = computerScore;
        currentRound++;
        document.querySelector("#currentRound").textContent = currentRound;
        console.log(`Computer : ${computerScore} (${computerChoice}) and Human : ${humanScore} (${humanChoice})`)
        checkIfWinner(humanScore, computerScore, winToWin);
        alertRound(humanShort, computerChoice, "loser");
        return loseMessage;
    }
}


// Human Input
const humanInputs = document.querySelectorAll(".humanInput");
const humanImg = document.querySelector("#humanImg");
const computerImg = document.querySelector("#computerImg");

// Start Round
humanInputs.forEach(humanInput => {
    humanInput.addEventListener("mouseover", () => {
        switch (humanInput.id) {
            case "rock":
                humanImg.src = "images/Human_Hand/Human_Rock.gif";
                break;
            case "paper":
                humanImg.src = "images/Human_Hand/Human_Paper.gif";
                break;
                case "scissors":
                humanImg.src = "images/Human_Hand/Human_Scissors.gif";
                break;
            default :
                humanImg.src = "images/Human_Hand/Human_Idle.gif";
        }
    })
    humanInput.addEventListener("click", () => {
        playRound(humanInput.id, getComputerChoice());
    });
});

// pop-up message at the end of rounds
const mainWindow = document.querySelector("#mainWindow");
const message = document.createElement("div");
const fakeNav = document.createElement("div");
const fakeBtn = document.createElement("div");
const closeBtn = document.createElement("button");
const content = document.createElement("div");
const title = document.createElement("h1");
const description = document.createElement("div");
const computerChoiceImg = document.createElement("img");
const humanChoiceImg = document.createElement("img");
const text = document.createElement("p");

function popUp() {
    message.classList.add("tab");
    fakeNav.classList.add("fakeNav");
    fakeBtn.classList.add("fakeBtn");
    closeBtn.classList.add("close");
    closeBtn.textContent = "x";
    fakeBtn.appendChild(closeBtn)
    fakeNav.appendChild(fakeBtn)
    message.appendChild(fakeNav)
    message.appendChild(content);
    content.appendChild(title);
    description.classList.add("popUp");
    content.appendChild(description);
    description.appendChild(computerChoiceImg);
    description.appendChild(text);
    description.appendChild(humanChoiceImg);
    mainWindow.appendChild(message);
}

function alertRound(humanChoice, computerChoice, result) {
    popUp();
    message.classList.add("roundMessage");
    title.textContent = `Computer played ${computerChoice} against your ${humanChoice}`;

    switch (result) {
        case "winner" : 
            text.textContent = winMessage;
            break;
        case "loser" :
            text.textContent = loseMessage;
            break;
        case "tie" :
            text.textContent = drawMessage;
            break;
        default :
            text.textContent = errorMessage;
    }

    switch (computerChoice) {
        case "rock" : 
            computerChoiceImg.src = "images/rock.png";
            computerImg.src = "images/Computer_Hand/Computer_Rock.gif";
            break;
        case "paper" :
            computerChoiceImg.src = "images/paper.png";
            computerImg.src = "images/Computer_Hand/Computer_Paper.gif";
            break;
        case "scissors" :
            computerChoiceImg.src = "images/scissors.png";
            computerImg.src = "images/Computer_Hand/Computer_Scissors.gif";
            break;
        default :
            computerChoiceImg.src = "images/error.png";
            computerImg.src = "images/Computer_Hand/Computer_Idle.gif";
    }

    switch (humanChoice) {
        case "rock" : 
            humanChoiceImg.src = "images/rock.png";
            break;
        case "paper" :
            humanChoiceImg.src = "images/paper.png";
            break;
        case "scissors" :
            humanChoiceImg.src = "images/scissors.png";
            break;
        default :
            humanChoiceImg.src = "images/error.png";
    }
    
    closeBtn.addEventListener("click", () => {
        message.remove();
        humanImg.src = "images/Human_Hand/Human_Idle.gif"
        computerImg.src = "images/Computer_Hand/Computer_Idle.gif";
    });
}

function alertWinner(humanFinalScore, ComputerFinalScore) {
    const gameLoseMessage = `With a score of ${ComputerFinalScore}, computer wins !`;
    const gameWinMessage = `With a score of ${humanFinalScore}, you win !`;
    const gameErrorMessage = `Hmmm... the computer has a score of ${ComputerFinalScore}, and your score 
        is ${humanFinalScore} but to me honest I don't know what happened...`;
    
    popUp();
    message.classList.add("winMessage");

    if (humanFinalScore < ComputerFinalScore) {
        title.textContent = `At least you had fun ?`;
        text.textContent = gameLoseMessage;
        console.log(gameLoseMessage);
    } else if (humanFinalScore > ComputerFinalScore) {
        title.textContent = `Wasn't it great ?.`;
        text.textContent = gameWinMessage;
        console.log(gameWinMessage);
    } else {
        title.textContent = `Well...`;
        text.textContent = gameErrorMessage;
        console.log(gameErrorMessage);
    }

    closeBtn.addEventListener("click", () => {
        message.remove();
        humanScore = 0;
        document.querySelector("#playerScore").textContent = humanScore;
        computerScore = 0;
        document.querySelector("#computerScore").textContent = computerScore;
        currentRound = 1;
        document.querySelector("#currentRound").textContent = currentRound;
    });
}

