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
let currentQuestion = 0;
let currentMultChoice = 0; 


let potentialQuestions = [
    {
        question: 'Which is used to store multiple values within one variable?',
        choice1: 'Integer',
        choice2: 'Array',
        choice3: 'Let',
        choice4: 'Const',
        answer: 'Array',
    },
    {
        question: 'What word is used to complete an if statement?',
        choice1: 'then',
        choice2: 'while',
        choice3: 'else',
        choice4: 'else if',
        // answer: 3,
    },
    {
        question: 'What kind of operator is used to describe if a value is true or false?',
        choice1: 'Boolean',
        choice2: 'String',
        choice3: 'Number',
        choice4: 'Object',
        // answer: 1,
    },
    {
        question: 'What JavaScript method do we use in order to turn a string into an integer?',
        choice1: 'push',
        choice2: 'concat',
        choice3: 'parseInt',
        choice4: 'toUpperCase',
       // answer: 3,
    },
    {
        question: 'To successfully create a function, one must end the function with a ',
        choice1: 'curly brace {}',
        choice2: 'parenthesis ()',
        choice3: 'bracket []',
        choice4: 'period .',
        // answer: 1,
    },
    {
        question: 'This function is primarily used for debugging purposes:',
        choice1: 'concat',
        choice2: 'printInfo',
        choice3: 'find',
        choice4: 'console.log',
        // answer: 4,
    },
    {
        question: 'To refactor code is to...',
        choice1: 'decrease repetition',
        choice2: 'organize code',
        choice3: 'simplify code',
        choice4: 'all of the above',
        // answer: 4,
    },
    {
        question: 'Which DOM method do we primarily use to select any element from our HTML',
        choice1: 'concat',
        choice2: 'querySelector',
        choice3: 'find',
        choice4: 'getElementbyId',
        // answer: 2,
    },
    {
        question: 'The .setAttribute method is used to...',
        choice1: 'add functionality to an element',
        choice2: 'link our JS with our HTML',
        choice3: 'add a class to an element', 
        choice4: 'none of the above',
       // answer: 3,
    },
    {
        question: 'Which tag is used in HTML to link our JavaScript',
        choice1: 'script', 
        choice2: 'link',
        choice3: 'src',
        choice4: 'java',
        // answer: 1,
    },

]

function startGame(){


    
    //console.log("start game");

}

function setQuestion(){


    multipleChoiceQuestion.textContent = potentialQuestions[currentQuestion].question
    currentQuestion += 1


    potentialMultChoice1.textContent = potentialQuestions[currentMultChoice].choice1
    potentialMultChoice2.textContent = potentialQuestions[currentMultChoice].choice2
    potentialMultChoice3.textContent = potentialQuestions[currentMultChoice].choice3
    potentialMultChoice4.textContent = potentialQuestions[currentMultChoice].choice4
    currentMultChoice += 1


  potentialMultChoice1.addEventListener("click", function(){

    console.log(potentialQuestions[currentMultChoice].answer);

    if (potentialMultChoice1.textContent === potentialQuestions[currentMultChoice].answer) {
        alert("right");
    } else {
        alert("wrong");
    }
  })

  potentialMultChoice2.addEventListener("click", function(){

    if (potentialMultChoice2.textContent === potentialQuestions[currentMultChoice].answer) {
        alert("right");
    } else {
        alert("wrong");
    }

    console.log(potentialMultChoice2.textContent);
    console.log(potentialQuestions[currentMultChoice].answer);
    
  });

console.log(potentialQuestions[currentMultChoice].answer)
  

    


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



// in if statements if get right increment score 
//take away time if wrong