// Computer Output
function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    switch(result) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Hmmmm... I think I messed up somewhere";
    }
}

console.log(`Computer plays ${getComputerChoice()} !`);

// Player
