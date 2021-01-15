const startBtn = document.querySelector('#startBtn');
const multipleChoiceQuestion = document.querySelector('#questionContainer');
const potentialMultChoice = Array.from(document.querySelectorAll('.form-check-label'));
const timer = document.querySelector('#timer');
const scoreNumber = document.querySelector('#score');


let currentQuestion = {};
let rightAnswer = true;
let score = 0;
let questionCounter = 0;
let questionsToChooseFrom = [];

let potentialQuestions = [
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },

]

function startGame(){


    startBtn.addEventListener("click", setQuestion());

}

function setQuestion(){

    let newQuestion = Math.floor(Math.random()* 10)
    currentQuestion = potentialQuestions[newQuestion]
}

function nextQuestion(){

}
