/* eslint-disable no-console*/
import isYes from './is-yes.js';

const quizButton = document.getElementById('quiz-button');
const quizResult = document.getElementById('quiz-result');

quizButton.onclick = function() {
    //getting and saving the user's name
    let name = '';

    const firstName = prompt('Hello, user. What is your first name?');
    name = name + firstName;

    const lastName = prompt('What is your last name?');
    name = name + ' ' + lastName;

    //confirm user wants to take the quiz
    const confirmed = confirm(`Are you sure you want to take this quiz, ${name}?`);

    if(confirmed === false) {
        return;
    }

    //tracking correct answers to questions
    let correctAnswers = 0;
   
    const questionOne = prompt('Has Ollie attended multiple high schools (Y/N)?');

    const correctQuestionOne = true;

    if(isYes(questionOne) === correctQuestionOne) {
        correctAnswers += 1;
    }

    const questionTwo = prompt('Does Ollie like anime (Y/N)?');

    const correctQuestionTwo = true;

    if(isYes(questionTwo) === correctQuestionTwo) {
        correctAnswers += 1;
    }

    const questionThree = prompt('Has Ollie been out of state before (Y/N)?');

    const correctQuestionThree = true;

    if(isYes(questionThree) === correctQuestionThree) {
        correctAnswers += 1;
    }

    //alerting user they've completed the quiz
    alert(`Congrats! You have completed the quiz, ${name}.`);

    //showing how many questions the user got correct
    let response = 'Your name is ' + name;

    if(correctAnswers >= 1) {
        response += ' and you know about Ollie!';
    }
    else {
        response += ' and you need to get to know Ollie better...';
    }

    quizResult.textContent = response;
};