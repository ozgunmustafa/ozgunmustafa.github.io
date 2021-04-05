const game = () => {
    let pScore = 0;
    let cScore = 0;


    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn")

        });
    };
    const playMach = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerChoiceIndex = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerChoiceIndex];

                compareHands(this.textContent, computerChoice)

                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            winner.textContent = "Berabere";
            return;
        }
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else {
                cScore++;
                updateScore();

                winner.textContent = "Computer Wins"
                return;
            }
        }
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {

                cScore++;
                updateScore();

                return;
            } else {
                winner.textContent = "Player Wins"
                pScore++;
                updateScore();

                return;
            }
        }
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();


                return;
            } else {
                winner.textContent = "Player Wins"
                pScore++;
                updateScore();


                return;
            }
        }


    }

    startGame();
    playMach();
};
game();