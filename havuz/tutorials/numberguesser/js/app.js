let min = 1,
    max = 10,
    winningNum = createWinningNum(min,max),
    guessesLeft = 3;

//UI Elements

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');
//Assign Ui min max

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown',function(e){
    if(e.target.id === 'play-again'){
        window.location.reload();
    }
})

guessBtn.addEventListener('click', function () {

    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage('danger', `Please enter a number between ${min} and ${max} .`);
    }
    else{
        if (guess === winningNum) {
            gameOver(true,`You won! ${winningNum} was correct.`)

        }
        else {
            guessesLeft = guessesLeft - 1;
            if (guessesLeft === 0) {

                gameOver(false,`Game Over! Number was ${winningNum}.`)

            }
            else {
                setMessage('danger',`${guess} is not correct. ${guessesLeft} guesses left! `);
            }
        }
    }
});

function gameOver(won,msg){
    let color ;
    won === true ? color ='green' : 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(color,msg);
    guessBtn.value ='Play Again';
    guessBtn.className='uk-button uk-button-danger';
    guessBtn.id='play-again';
}

function setMessage(type, msg) {
    guessInput.value ='';
    message.textContent = msg;
    message.className = `uk-text-${type}`;
}

function createWinningNum(min,max){
   return Math.floor(Math.random()*(max-min+1)+min);
}

