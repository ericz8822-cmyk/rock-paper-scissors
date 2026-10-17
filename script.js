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
        
function playRound (humanChoice) {
    let computerChoice = getComputerChoice();
    if (computerChoice === 'rock') {
        if (humanChoice === 'scissors') {
            const para = document.createElement('p');
            para.textContent = 'You lose! Rock beats scissors.';
            result.appendChild(para);
            console.log('You lose! Rock beats scissors.');
            computerScore++;
        } else if (humanChoice === 'paper') {
            const para = document.createElement('p');
            para.textContent = 'You win! Paper neats rock.';
            result.appendChild(para);
            console.log('You win! Paper neats rock.');
            humanScore++;
        }
    }
    if (computerChoice === 'scissors') {
        if (humanChoice === 'paper') {
            const para = document.createElement('p');
            para.textContent = 'You lose! Scissors beats paper.';
            result.appendChild(para);
            console.log('You lose! Scissors beats paper.');
            computerScore++;
        } else if (humanChoice === 'rock') {
            const para = document.createElement('p');
            para.textContent = 'You win! Rock neats scissors.';
            result.appendChild(para);
            console.log('You win! Rock neats scissors.');
            humanScore++;
        }
    }
    if (computerChoice === 'paper') {
        if (humanChoice === 'rock') {
            const para = document.createElement('p');
            para.textContent = 'You lose! Paper beats rock.';
            result.appendChild(para);
            console.log('You lose! Paper beats rock.');
            computerScore++;
        } else if (humanChoice === 'scissors') {
            const para = document.createElement('p');
            para.textContent = 'You win! Scissors neats paper.';
            result.appendChild(para);
            console.log('You win! Scissors neats paper.');
            humanScore++;
        }
    }
    if (computerChoice === humanChoice) {
        const para = document.createElement('p');
        para.textContent = `Draw! Both are ${computerChoice}.`;
        result.appendChild(para);
        console.log(`Draw! Both are ${computerChoice}.`);
    }

    const para = document.createElement('p');
    para.textContent = `Your current score: ${humanScore}\nComputer's current score: ${computerScore}`;
    result.appendChild(para);
    console.log(`Your current score: ${humanScore}\nComputer's current score: ${computerScore}`);

    rounds ++;
    console.log(rounds);
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore) {
        console.log('You win against Computer!');
    } else if (computerScore > humanScore) {
        console.log('Computer beats you!')
    } else {
        console.log('You drawed with computer. ')
    }
}

let rounds = 0;
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('div');

rock.addEventListener('click', () => {
    playRound('rock');
});
paper.addEventListener('click', () => {
    playRound('paper');
});
scissors.addEventListener('click', () => {
    playRound('scissors');
});