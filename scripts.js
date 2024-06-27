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
        return true;
    } else {
        return false;
    }
}

function playRound(humanChoice, computerChoice) {
    let humanShort = humanChoice.toLowerCase().trim();
    if (humanShort != "rock"
        && humanShort != "paper"
        && humanShort != "scissors") {
        console.log(`Computer : ${computerScore} (${computerChoice}) and Human : ${humanScore} (${humanChoice})`)
        if(!checkIfWinner(humanScore, computerScore, winToWin)) {
            alertRound(humanShort, computerChoice, "error");
        }
        return errorMessage;
    }
    else if (humanShort == computerChoice) {
        currentRound++;
        document.querySelector("#currentRound").textContent = currentRound;
        console.log(`Computer : ${computerScore} (${computerChoice}) and Human : ${humanScore} (${humanChoice})`)
        if(!checkIfWinner(humanScore, computerScore, winToWin)) {
            alertRound(humanShort, computerChoice, "tie");
        }
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
        if(!checkIfWinner(humanScore, computerScore, winToWin)) {
            alertRound(humanShort, computerChoice, "winner");
        }
        return winMessage;
    }
    else {
        computerScore++;
        document.querySelector("#computerScore").textContent = computerScore;
        currentRound++;
        document.querySelector("#currentRound").textContent = currentRound;
        console.log(`Computer : ${computerScore} (${computerChoice}) and Human : ${humanScore} (${humanChoice})`)
        if(!checkIfWinner(humanScore, computerScore, winToWin)) {
            alertRound(humanShort, computerChoice, "loser");
        };
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

function popUp() {

    const popUpWindow = {
        mainWindow : document.querySelector("#mainWindow"),
        message : document.createElement("div"),
        fakeNav : document.createElement("div"),
        fakeBtn : document.createElement("div"),
        closeBtn : document.createElement("button"),
        content : document.createElement("div"),
        title : document.createElement("h1"),
        description : document.createElement("div"),
        computerChoiceImg : document.createElement("img"),
        humanChoiceImg : document.createElement("img"),
        text : document.createElement("p")
    };
    
    popUpWindow.message.classList.add("tab");
    popUpWindow.fakeNav.classList.add("fakeNav");
    popUpWindow.fakeBtn.classList.add("fakeBtn");
    popUpWindow.closeBtn.classList.add("close");
    popUpWindow.closeBtn.textContent = "x";
    popUpWindow.fakeBtn.appendChild(popUpWindow.closeBtn);
    popUpWindow.fakeNav.appendChild(popUpWindow.fakeBtn);
    popUpWindow.message.appendChild(popUpWindow.fakeNav);
    popUpWindow.message.appendChild(popUpWindow.content);
    popUpWindow.content.appendChild(popUpWindow.title);
    popUpWindow.description.classList.add("popUp");
    popUpWindow.content.appendChild(popUpWindow.description);
    popUpWindow.description.appendChild(popUpWindow.computerChoiceImg);
    popUpWindow.description.appendChild(popUpWindow.text);
    popUpWindow.description.appendChild(popUpWindow.humanChoiceImg);
    popUpWindow.mainWindow.appendChild(popUpWindow.message);

    return popUpWindow;
}

let popUpCollection = [];

function alertRound(humanChoice, computerChoice, result) {
    let alertBox = popUp();
    popUpCollection.push(alertBox);
    console.log(popUpCollection);
    alertBox.message.classList.add("roundMessage");
    alertBox.title.textContent = `Computer played ${computerChoice} against your ${humanChoice}`;

    switch (result) {
        case "winner" : 
            alertBox.text.textContent = winMessage;
            break;
        case "loser" :
            alertBox.text.textContent = loseMessage;
            break;
        case "tie" :
            alertBox.text.textContent = drawMessage;
            break;
        default :
            alertBox.text.textContent = errorMessage;
    }

    switch (computerChoice) {
        case "rock" : 
            alertBox.computerChoiceImg.src = "images/rock.png";
            computerImg.src = "images/Computer_Hand/Computer_Rock.gif";
            break;
        case "paper" :
            alertBox.computerChoiceImg.src = "images/paper.png";
            computerImg.src = "images/Computer_Hand/Computer_Paper.gif";
            break;
        case "scissors" :
            alertBox.computerChoiceImg.src = "images/scissors.png";
            computerImg.src = "images/Computer_Hand/Computer_Scissors.gif";
            break;
        default :
            alertBox.computerChoiceImg.src = "images/error.png";
            computerImg.src = "images/Computer_Hand/Computer_Idle.gif";
    }

    switch (humanChoice) {
        case "rock" : 
            alertBox.humanChoiceImg.src = "images/rock.png";
            break;
        case "paper" :
            alertBox.humanChoiceImg.src = "images/paper.png";
            break;
        case "scissors" :
            alertBox.humanChoiceImg.src = "images/scissors.png";
            break;
        default :
            alertBox.humanChoiceImg.src = "images/error.png";
    }
    
    alertBox.closeBtn.addEventListener("click", () => {
        alertBox.message.remove();
        humanImg.src = "images/Human_Hand/Human_Idle.gif"
        computerImg.src = "images/Computer_Hand/Computer_Idle.gif";
    });
}

function alertWinner(humanFinalScore, ComputerFinalScore) {
    const gameLoseMessage = `With a score of ${ComputerFinalScore}, computer wins !`;
    const gameWinMessage = `With a score of ${humanFinalScore}, you win !`;
    const gameErrorMessage = `Hmmm... the computer has a score of ${ComputerFinalScore}, and your score 
        is ${humanFinalScore} but to me honest I don't know what happened...`;
    
    let winBox = popUp();
    winBox.message.classList.add("winMessage");
    popUpCollection.forEach(popUpBox => {
        popUpBox.message.remove();
    });

    if (humanFinalScore < ComputerFinalScore) {
        winBox.title.textContent = `At least you had fun ?`;
        winBox.text.textContent = gameLoseMessage;
        console.log(gameLoseMessage);
    } else if (humanFinalScore > ComputerFinalScore) {
        winBox.title.textContent = `Wasn't it great ?.`;
        winBox.text.textContent = gameWinMessage;
        console.log(gameWinMessage);
    } else {
        winBox.title.textContent = `Well...`;
        winBox.text.textContent = gameErrorMessage;
        console.log(gameErrorMessage);
    }

    winBox.closeBtn.addEventListener("click", () => {
        winBox.message.remove();
        humanScore = 0;
        document.querySelector("#playerScore").textContent = humanScore;
        computerScore = 0;
        document.querySelector("#computerScore").textContent = computerScore;
        currentRound = 1;
        document.querySelector("#currentRound").textContent = currentRound;
    });
}
