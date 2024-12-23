let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice;
    switch(Math.floor(Math.random(3) * 3)) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors"
            break;
    }

    return choice;
}

function getPlayerChoice() {
    let input = prompt("Rock, paper, or scissors?");
    switch(input.toLowerCase()) {
        case "rock":
            break
        case "paper":
            break
        case "scissors":
            break
        default:
            alert("Invalid choice. Please try again.");
    }

    return input;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie. Both players chose ${humanChoice}.`)
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lost.");
        computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You won!");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lost.");
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You won!");
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lost.");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You won!");
        humanScore += 1;
    }
}



function playGame() {
    let roundsPlayed = 0;
    do {
        const humanChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        roundsPlayed += 1;
    } while (roundsPlayed < 5);

    if (humanScore < computerScore) {
        console.log(`You lost. Score - You: ${humanScore} Computer: ${computerScore}`);
    } else {
        console.log(`You won! Score - You: ${humanScore} Computer: ${computerScore}`);
    }
}

playGame();