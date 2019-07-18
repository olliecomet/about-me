export default function getThrow() {
    const number = Math.floor(Math.random() * 3);

    const hand = getThrowFromNumber(number);

    return hand;
}

export function getThrowFromNumber(number) {
    if(number === 0) {
        return 'rock';
    }
    else if(number === 1) {
        return 'paper';
    }
    else if(number === 2) {
        return 'scissors';
    }
}