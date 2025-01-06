function Game(playerChoice) {
    console.log(`Player's choice: ${playerChoice}`);

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(`Computer's choice: ${computerChoice}`);

    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    document.getElementById('result').textContent = `Player chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}
