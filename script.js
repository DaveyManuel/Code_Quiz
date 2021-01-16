const startBtn = document.querySelector('#startBtn');
const multipleChoiceQuestion = document.querySelector('#questionContainer');
const potentialMultChoice = Array.from(document.querySelectorAll('.form-check-label'));
const nextBtn = document.querySelector('#next')
const timer = document.querySelector('#timer'); //setInterval()
const scoreNumber = document.querySelector('#score');


let currentQuestion = 0;
let rightAnswer = true; //???
let score = 0;
let questionCounter = 0; //???
let questionsToChooseFrom = []; //???


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
        question: 'What is 2 + 3?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 4?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 5?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 6?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 7?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 2 + 8?',
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


    
    //console.log("start game");

}

function setQuestion(){

    multipleChoiceQuestion.innerHTML = potentialQuestions[currentQuestion].question
    currentQuestion += 1


    //let newQuestion = Math.floor(Math.random()*potentialQuestions.length)
   // currentQuestion = potentialQuestions[newQuestion]

}

function nextQuestion(){
    
    
    nextBtn.addEventListener("click", setQuestion);

    //console.log("next question");
    //multipleChoiceQuestion = "David Sanchez"
    //functionality for next button

}

nextQuestion();

