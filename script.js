const startBtn = document.querySelector('#startBtn');
const multipleChoiceQuestion = document.querySelector('#questionContainer');
const potentialMultChoice1 = document.querySelector('#choice1');
const potentialMultChoice2 = document.querySelector('#choice2');
const potentialMultChoice3 = document.querySelector('#choice3');
const potentialMultChoice4 = document.querySelector('#choice4');
const nextBtn = document.querySelector('#next')
const timer = document.querySelector('#timer'); //setInterval()
const scoreNumber = document.querySelector('#score');


let rightAnswer = true; //???
let score = 0;
let questionCounter = 0; //???
let questionsToChooseFrom = []; //???


let potentialQuestions = [
    {
        question: 'Which is used to store multiple values within one variable?',
        choice1: 'Integer',
        choice2: 'Array',
        choice3: 'Let',
        choice4: 'Const',
        answer: 2,
    },
    {
        question: 'What word is used to complete an if statement?',
        choice1: 'then',
        choice2: 'while',
        choice3: 'else',
        choice4: 'else if',
        answer: 3,
    },
    {
        question: 'What kind of operator is used to describe a value of true or false?',
        choice1: 'Boolean',
        choice2: 'String',
        choice3: 'Number',
        choice4: 'Object',
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

    let currentQuestion = 0;
    let currentMultChoice = 0; 


    multipleChoiceQuestion.innerHTML = potentialQuestions[currentQuestion].question
    currentQuestion += 1

    potentialMultChoice1.innerHTML = potentialQuestions[currentMultChoice].choice1
    potentialMultChoice2.innerHTML = potentialQuestions[currentMultChoice].choice2
    potentialMultChoice3.innerHTML = potentialQuestions[currentMultChoice].choice3
    potentialMultChoice4.innerHTML = potentialQuestions[currentMultChoice].choice4
    currentMultChoice += 1


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

