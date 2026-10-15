function getComputerChoice () {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            // console.log('rock');
            return 'rock';
        case 1:
            // console.log('paper');
            return 'paper';
        case 2:
            // console.log('scissors');
            return 'scissors';
    }
}
        
function getHumanChoice() {
    let choice = prompt('Please enter one of the three: rock, paper, scissors');
    // console.log(choice);
    return choice;
}

function playRound (computerChoice, humanChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice === 'rock') {
        if (humanChoice === 'scissors') {
            console.log('You lose! Rock beats scissors.');
            computerScore++;
        } else if (humanChoice === 'paper') {
            console.log('You win! Paper neats rock.');
            humanScore++;
        }
    }
    if (computerChoice === 'scissors') {
        if (humanChoice === 'paper') {
            console.log('You lose! Scissors beats paper.');
            computerScore++;
        } else if (humanChoice === 'rock') {
            console.log('You win! Rock neats scissors.');
            humanScore++;
        }
    }
    if (computerChoice === 'paper') {
        if (humanChoice === 'rock') {
            console.log('You lose! Paper beats rock.');
            computerScore++;
        } else if (humanChoice === 'scissors') {
            console.log('You win! Scissors neats paper.');
            humanScore++;
        }
    }
    if (computerChoice === humanChoice) {
        console.log(`Draw! Both are ${computerChoice}.`);
    }
    console.log(`Your current score: ${humanScore}\nComputer's current score: ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;

playRound();


