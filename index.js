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

const startGame = () => {
    // document.querySelector('.msg3').innerHTML = `Make your move`;
    document.querySelector('.msg1').innerHTML = `Make your move`;
    document.querySelector('.container_diff').setAttribute("style", "display: flex;");
    document.querySelector('.ur_score').innerHTML = `0`;
    document.querySelector('.pc_score').innerHTML = `0`;
    document.querySelector('.pc').innerHTML = `COMPUTER`;
    document.querySelector('.you').innerHTML = `PLAYER`;
}

const announceWinner = (outcome) => {
    document.querySelector(".winner").innerHTML = outcome;
    document.querySelector('.container_diff').setAttribute("style", "display: none;");
    // document.querySelector('.msg3').innerHTML = ``;
    document.querySelector('.msg1').innerHTML = ``;
    document.querySelector('.again').setAttribute("style", "display: block;");
    document.querySelector('.ur_score').innerHTML = ``;
    document.querySelector('.pc_score').innerHTML = ``;
    document.querySelector('.pc').innerHTML = ``;
    document.querySelector('.you').innerHTML = ``;
    document.querySelector('.result').innerHTML = ``;
}

document.querySelector('#submit').addEventListener('click', () => {
    const name_val = document.querySelector("#name").value;
    var typed3 = new Typed('.msg1', {
        strings: [`Greetings Mr ${name_val}. At the moment of this message, a missle has been fired, aiming at your capital city. As we are decoding the defence system of the missle, there is a rock-paper-scissors game in-built in the system. The only way to stop it, is to win the game, reach the required points first, so that the missle could be disarmed from detonation. In the mission, should you be caught or killed, the Secretary will disavow any knowledge of your actions. Your mission, Mr ${name_val}, should you choose to accept it...`],
        typeSpeed: 10,
        backSpeed: 0,
        smartBackspace: true
    });
    const accept = document.querySelector('#accept');
    setTimeout(()=>{
        accept.setAttribute("style", "display: block;animation-duration: 5s;animation-name: appearOut;");
    }, 10000);
    const msg_input = document.querySelector(".msg_input");
    const submit = document.querySelector("#submit");
    const name = document.querySelector("#name");
    msg_input.setAttribute("style", "display: none;");
    name.setAttribute("style", "display: none;");
    submit.setAttribute("style", "display: none;");
})

const accept = document.querySelector('#accept');

accept.addEventListener('click', () => {
    const name_val = document.querySelector("#name").value;
    const msg1 = document.querySelector(".msg1");
    document.querySelector('.msg1').innerHTML = `This tape will self-destruct in five seconds. Good luck, Mr ${name_val}`;
    accept.setAttribute("style", "display: none;");

    const countDownDate = new Date().getTime();

    countdown = setInterval(() => {
        const now = new Date().getTime();
        let seconds = Math.floor(7 - ((now - countDownDate) % (1000 * 60)) / 1000);
        document.querySelector(".timer").innerHTML = seconds;
        if (seconds == 0) {
            // clearInterval(countdown);
            document.querySelector(".timer").innerHTML = 0;
            document.querySelector(".timer").setAttribute("style", "display: none;");
            // document.querySelector('.msg2').setAttribute("style", "display: none;");
            startGame();
        }
    }, 1000);
})

const panels = document.querySelectorAll('.panel');

let playerScore = 0;
let computerScore = 0;

panels.forEach(panel => panel.addEventListener('click', () => {
    // panels.style.setProperty("display",  "none");
    let playerSelection = panel.value;
    let computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    document.querySelector('.result').innerHTML = `${outcome}`;
    if (outcome === `You win! ${playerSelection} beats ${computerSelection}.`) {
        playerScore+=1;
        document.querySelector('.ur_score').innerHTML = `${playerScore}`;
    } else if (outcome === `You lose! ${computerSelection} beats ${playerSelection}.`) {
        computerScore += 1;
        document.querySelector('.pc_score').innerHTML = `${computerScore}`;
    } 
    if (computerScore == 5) {
        let result = `You lose... You score ${playerScore} points`;
        announceWinner(result);
    }
    if (playerScore == 5) {
        let result = `You win! Computer scores ${computerScore} points`;
        announceWinner(result);
    }
}))

document.querySelector('.again').addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".winner").innerHTML = ``;
    document.querySelector('.again').setAttribute("style", "display: none;");
    startGame();
})
