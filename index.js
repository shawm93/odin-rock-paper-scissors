const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let result;
    if (playerSelection === computerSelection) {
        result = `Draw! Both are ${playerSelection}.`
    } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors" )
    || (playerSelection === "Paper" && computerSelection === "Rock" )
    || (playerSelection === "Scissors" && computerSelection === "Paper" )
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    return result;
  }

const getComputerChoice = () => {
    const choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random()*3)];
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What is your play");
        playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
        const computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection);
        if (outcome === `You win! ${playerSelection} beats ${computerSelection}.`) {
            playerScore = playerScore + 1;
        } else if (outcome === `You lose! ${computerSelection} beats ${playerSelection}.`) {
            computerScore = computerScore + 1;
        } 
        console.log(outcome);
    }
    if (computerScore > playerScore) {
        result = `You lose by ${computerScore - playerScore} points`;
    } else if (playerScore > computerScore) {
        result = `You win by ${playerScore - computerScore} points`;
    } else {
        result = `Draw! You score ${playerScore} points`;
    }
    return result;
}



