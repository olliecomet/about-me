export default function getThrow() {

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