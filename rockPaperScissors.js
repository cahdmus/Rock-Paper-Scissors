 function playGame() {
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

    const winMessage = "Oh my god, you win this round !";
    const loseMessage = "Boohoo you loose this round...";
    const drawMessage = "It's a draw";
    const errorMessage = "You played an unauthorized hand ! Disgusting..."

    let humanScore = 0;
    let computerScore = 0;

    // Single round of game
    function playRound(humanChoice, computerChoice) {
        let humanShort = humanChoice.toLowerCase().trim();
        if (humanShort != "rock" 
                && humanShort != "paper" 
                && humanShort != "scissors") {
            return errorMessage;
        }
        else if (humanShort == computerChoice) {
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

    // fetching human and computer choices
    function getPlayersChoices() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        return `Computer played ${computerSelection}, and human played ${humanSelection}. What a thrilling game !!\nTherefore the results are in : 
        ${playRound(humanSelection, computerSelection)}`; 
    }

    // Number of rounds
    alert(getPlayersChoices());
    alert(getPlayersChoices());
    alert(getPlayersChoices());
    alert(getPlayersChoices());
    alert(getPlayersChoices());

    const gameDrawMessage = `Well, whatever you did the computer has a score of ${computerScore}, and your score is ${humanScore} so it's a draw !`;
    const gameLoseMessage = `With a score of ${computerScore}, computer wins !`;
    const gameWinMessage = `With a score of ${humanScore}, you win !`;
    const gameErrorMessage = `Hmmm... the computer has a score of ${computerScore}, and your score is ${humanScore} but to me honest I don't know what happened...`;
    
    // Calculating winner
    function declareWinner(player1, player2) {
        if (player1 == player2) {
            return gameDrawMessage;
        }
        else if (player1 < player2) {
            return gameLoseMessage;
        }
        else if (player1 > player2) {
            return gameWinMessage;
        }
        else {
            return gameErrorMessage;
        }
    } 
    
    return declareWinner(humanScore, computerScore);
}

// Starting the game
alert(playGame());