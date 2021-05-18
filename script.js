const startBtn = document.querySelector('#startBtn');
const multipleChoiceQuestion = document.querySelector('#questionContainer');
const choices = Array.from(document.querySelectorAll('#choice'));
const timer = document.querySelector('#timer'); //setInterval()
const scoreNumber = document.querySelector('#score');


let rightAnswer = true; 
let score = 0;
let questionCounter = 0; 
let questionsToChooseFrom = []; 
let currentQuestion = {};

console.log(choices)


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
        question: 'What kind of operator is used to describe if a value is true or false?',
        choice1: 'Boolean',
        choice2: 'String',
        choice3: 'Number',
        choice4: 'Object',
        answer: 1,
    },
    {
        question: 'What JavaScript method do we use in order to turn a string into an integer?',
        choice1: 'push',
        choice2: 'concat',
        choice3: 'parseInt',
        choice4: 'toUpperCase',
        answer: 3,
    },
    {
        question: 'To successfully create a function, one must end the function with a ',
        choice1: 'curly brace {}',
        choice2: 'parenthesis ()',
        choice3: 'bracket []',
        choice4: 'period .',
        answer: 1,
    },
    {
        question: 'This function is primarily used for debugging purposes:',
        choice1: 'concat',
        choice2: 'printInfo',
        choice3: 'find',
        choice4: 'console.log',
        answer: 4,
    },
    {
        question: 'To refactor code is to...',
        choice1: 'decrease repetition',
        choice2: 'organize code',
        choice3: 'simplify code',
        choice4: 'all of the above',
        answer: 4,
    },
    {
        question: 'Which DOM method do we primarily use to select any element from our HTML',
        choice1: 'concat',
        choice2: 'querySelector',
        choice3: 'find',
        choice4: 'getElementbyId',
        answer: 2,
    },
    {
        question: 'The .setAttribute method is used to...',
        choice1: 'add functionality to an element',
        choice2: 'link our JS with our HTML',
        choice3: 'add a class to an element', 
        choice4: 'none of the above',
        answer: 3,
    },
    {
        question: 'Which tag is used in HTML to link our JavaScript',
        choice1: 'script', 
        choice2: 'link',
        choice3: 'src',
        choice4: 'java',
        answer: 1,
    },

]

const scorePoints = 10
const numberOfQuestions = 10

startGame = () => {
    questionCounter = 0
    score = 0
    questionsToChooseFrom = [...potentialQuestions]
    newQuestion()
}

newQuestion = () => {

    if(questionsToChooseFrom.length === 0 || questionCounter > numberOfQuestions){
        localStorage.setItem('lastScore', score)

        return window.location.assign('highscores.html')
    }

    questionCounter++

    const questionIndex = Math.floor(Math.random() * questionsToChooseFrom.length)
    currentQuestion = questionsToChooseFrom[questionIndex]
    multipleChoiceQuestion.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    questionsToChooseFrom.splice(questionIndex, 1)

    rightAnswer = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!rightAnswer) {
            newQuestion()
        } 

        rightAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        if (selectedAnswer == currentQuestion.answer){
            incrementScore(scorePoints)
            newQuestion()
        }

    })
})

incrementScore = (number) => {
    score +=number
    scoreNumber.innerText = score
}

startGame();
