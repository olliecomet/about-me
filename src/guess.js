// needed import from js files?
import compareNumbers from './compare-numbers.js';

// needed DOM elements 
const guessButton = document.getElementById('guess-button');
const userGuess = document.getElementById('number');
const tooHighLow = document.getElementById('too-high-low');
const winOrLoss = document.getElementById('win-or-loss');
const winImage = document.getElementById('win-image');
const lossImage = document.getElementById('loss-image');

// initialized states
const correctNumber = 8;
let tries = 4;

guessButton.addEventListener('click', () => {
    // storing the user's guess 
    const guess = parseInt(userGuess.value);

    const result = compareNumbers(guess, correctNumber);

    // conditions to determine if user wins or loses
    if(result === 0) {
        
        winOrLoss.textContent = ('You got it!');

        winImage.classList.remove('hidden');

        guessButton.disabled = true;
    }
    else if(result === -1) {
        tooHighLow.textContent = ('Your guess was too low!')

        tries -= 1;

        if(tries === 0) {
            winOrLoss.textContent = ('You lost!');

            lossImage.classList.remove('hidden');

            guessButton.disabled = true;
        }
    }
    else if(result === 1) {
        tooHighLow.textContent = ('Your guess was too high!');

        tries -= 1;

        if(tries === 0){
            winOrLoss.textContent = ('You lost!');

            lossImage.classList.remove('hidden');
    
            guessButton.disabled = true;
        }
    }  
});    