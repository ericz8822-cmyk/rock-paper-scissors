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
getComputerChoice();
        
function getHumanChoice() {
    let choice = prompt('Please enter one of the three: rock, paper, scissors');
    // console.log(choice);
    return choice;
}
// getHumanChoice();
