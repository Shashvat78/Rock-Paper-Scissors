let humanScore = 0;
let computerScore = 0;

const rockBtn=document.querySelector("#rock");
const scissorBtn=document.querySelector("#scissors");
const paperBtn=document.querySelector("#paper");
const results=document.getElementById("results");
rockBtn.addEventListener("click",function(){ playRound(1)});
paperBtn.addEventListener('click', () => playRound(3));
scissorBtn.addEventListener('click', () => playRound(2));

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function playRound(playerSelection) {
    if (humanScore >= 5 || computerScore >= 5) return;

    const computerSelection = getComputerChoice();
    let roundResult = '';

    if (playerSelection === computerSelection) {
        roundResult = `It's a tie! Both chose ${choiceToWord(playerSelection)}.`;
    } else if (
        (playerSelection === 1 && computerSelection === 2) ||
        (playerSelection === 2 && computerSelection === 3) ||
        (playerSelection === 3 && computerSelection === 1)
    ) {
        roundResult = 'You win this round!';
        humanScore++;
    } else {
        roundResult = 'Computer wins this round!';
        computerScore++;
    }

    updateResults(roundResult);

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function updateResults(message) {
    results.innerHTML = `
        <p>${message}</p>
        <p>Player Score: ${humanScore} | Computer Score: ${computerScore}</p>
    `;
}

function announceWinner() {
    if (humanScore === 5) {
        results.innerHTML += `<p>🏆 You win the game!</p>`;
    } else {
        results.innerHTML += `<p>💻 Computer wins the game!</p>`;
    }
}

function choiceToWord(choice) {
    if (choice === 1) return 'Rock';
    if (choice === 2) return 'Scissors';
    if (choice === 3) return 'Paper';
}

