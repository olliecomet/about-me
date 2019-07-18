import getThrow from './get-throw.js';

const button = document.getElementById('button');
const handImage = document.getElementById('hand-image');
const message = document.getElementById('message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const drawCount = document.getElementById('draw-count');

let wins = 0;
let losses = 0;
let draws = 0;

button.addEventListener('click', () => {
    const hand = getThrow();

    handImage.classList.remove('invisible');
    const src = 'assets/' + hand + '.jpg';
    handImage.src = src;

    const handButton = document.querySelector('input:checked');

    let record;

    if(handButton.value === hand) {

        record = 'draw';
    }
    else if(handButton.value === 'rock' && hand === 'scissors' || 
            handButton.value === 'paper' && hand === 'rock' || 
            handButton.value === 'scissors' && hand === 'paper') {

        record = 'won';
    }
    else if(handButton.value === 'scissors' && hand === 'rock' ||
            handButton.value === 'rock' && hand === 'paper' ||
            handButton.value === 'paper' && hand === 'scissors') {

        record = 'lost';
    }

    if(record === 'draw') {
        message.textContent = 'It was a draw...';
        draws++;
        drawCount.textContent = draws;
    }
    else if(record === 'won') {
        message.textContent = 'You won!';
        wins++;
        winCount.textContent = wins;
    }
    else if(record === 'lost') {
        message.textContent = 'You lost!';
        losses++;
        lossCount.textContent = losses;
    }
});