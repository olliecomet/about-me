// needed import from js files?
import compareNumbers from './compare-numbers.js';

// needed DOM elements 
const guessButton = document.getElementById('guess-button');
const userGuess = document.getElementById('number');
const tooHighLow = document.getElementById('too-high-low');
const winOrLoss = document.getElementById('win-or-loss');
const winImage = document.getElementById('win-image');
const lossImage = document.getElementById('loss-image');
const guesses = document.getElementById('guesses');

// initialized states
const correctNumber = Math.floor(Math.random() * 20) + 1;
let tries = 4;

guessButton.addEventListener('click', () => {
    // storing the user's guess 
    const guess = parseInt(userGuess.value);

    const result = compareNumbers(guess, correctNumber);

    // conditions to determine if user wins or loses
    if(result === 0) {
        winOrLoss.textContent = ('You got it!');

        winImage.classList.remove('hidden');
        tooHighLow.classList.add('hidden');

        guessButton.disabled = true;
    }
    else if(result === -1 || result === 1) {
        hotColdMessage(result);

        decreaseTries();

        failState();
    }
});

function hotColdMessage(result) {
    if(result === -1) {
        tooHighLow.textContent = ('Your guess was too low!');
    } 
    else if(result === 1) {
        tooHighLow.textContent = ('Your guess was too high!');
    }
}

function decreaseTries() {
    tries -= 1;
    guesses.textContent = (tries);
}

function failState() {
    if(tries === 0) {
        winOrLoss.textContent = ('You lost! The answer was: ' + correctNumber);

        lossImage.classList.remove('hidden');
        guessButton.disabled = true;
    }
}