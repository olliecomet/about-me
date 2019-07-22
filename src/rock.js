import getThrow from './get-throw.js';

const button = document.getElementById('button');
const handImage = document.getElementById('hand-image');
const message = document.getElementById('message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const drawCount = document.getElementById('draw-count');
let wallet = document.getElementById('money');

let wins = 0;
let losses = 0;
let draws = 0;

let money = parseInt(wallet.textContent);

let record;

button.addEventListener('click', () => {
    const hand = getThrow();

    handImage.classList.remove('invisible');
    const src = 'assets/' + hand + '.jpg';
    handImage.src = src;

    const handButton = document.querySelector('input:checked');

    let bet = parseInt(document.getElementById('number').value);

    stopIllegalBehavior(bet);

    if(button.disabled) {
        return;
    }

    if(isNaN(bet)) {
        bet = 0;
    }

    decideResult(handButton, hand);

    counter(bet);

    updateUI();
});

function decideResult(handButton, hand) {
    if(handButton.value === hand) {
        record = 'draw';
    }
    else if(handButton.value === 'rock' && hand === 'scissors' ||
        handButton.value === 'paper' && hand === 'rock' ||
        handButton.value === 'scissors' && hand === 'paper') {

        record = 'won';
    }
    else {
        record = 'lost';
    }
}

// UI stuff
function updateUI() {
    if(record === 'draw') {
        message.textContent = 'It was a draw...';
        drawCount.textContent = draws;
    }
    else if(record === 'won') {
        message.textContent = 'You won!';
        winCount.textContent = wins;
        wallet.textContent = parseInt(money);
    }
    else if(record === 'lost') {
        message.textContent = 'You lost!';
        lossCount.textContent = losses;
        wallet.textContent = parseInt(money);

        if(money === 0) {
            message.textContent += ' ...And you\'re broke!';
            button.disabled = true;
        }
    }
}

// record stuff
function counter(bet) {
    if(record === 'draw') {
        draws++;
    }
    else if(record === 'won') {
        wins++;
        money += bet;
    }
    else if(record === 'lost') {
        losses++;
        money -= bet;
    }
}

function stopIllegalBehavior(bet) {
    if(bet > money) {
        button.disabled = true;
        alert('We know you\'re trying to cheat!');
    }
}