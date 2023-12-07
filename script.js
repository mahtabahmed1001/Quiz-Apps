const questions=[
    {
        question: 'Which is the largest animal in the world?',
        answers: [
            {text:'Shark', correct: false},
            {text:'Elephant', correct: false},
            {text:'Blue Whale', correct: true},
            {text:'Giraffe', correct: false},
        ]
    },
    {
        question: 'Which is the Smallest City in the world?',
        answers: [
            {text:'Dhaka', correct: false},
            {text:'London', correct: false},
            {text:'New York', correct: false},
            {text:'Vetican City', correct: true},
        ]
    },
    {
        question: 'Which is the smallest Continent in the world?',
        answers: [
            {text:'Australia', correct: true},
            {text:'Asia', correct: false},
            {text:'Europe', correct: false},
            {text:'Africa', correct: false},
        ]
    },
    {
        question: 'Which is the largest country in the world?',
        answers: [
            {text:'China', correct: false},
            {text:'Russia', correct: true},
            {text:'Canda', correct: false},
            {text:'India', correct: false},
        ]
    }

];
const questionElement=document.getElementById('questions');
const answerButton=document.getElementById('answer-button');
const nextButton=document.getElementById('next-btn');

let currentQuestionsIndex=0;
let score=0;

function startQuiz(){
    currentQuestionsIndex= 0;
    score= 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
    
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionsIndex];
    let questionNo=currentQuestionsIndex + 1;

    questionElement.innerHTML=questionNo +'. '+ currentQuestion.question;

    currentQuestion.answers.forEach(answer=> {
        const button=document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextButton.style.display='none';
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }

}
function selectAnswer(e){
    const selectBtn= e.target;
    const isCorrect=selectBtn.dataset.correct === 'true';
    if (isCorrect){
        selectBtn.classList.add('correct');
        score++;
    } else{
        selectBtn.classList.add('Incorrect');
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add('correct');
        }
        button.disabled=true;

    }
        );
        nextButton.style.display='block';
}
        function showScore(){
            resetState();
            questionElement.innerHTML=`You Scored ${score}  out of of ${questions.length}!`;

            nextButton.innerHTML='Play again';
            nextButton.style.display='block';
        }


      function handleNext(){
            currentQuestionsIndex ++;
            if(currentQuestionsIndex < questions.length){
                showQuestion();
            } else {
                showScore();
            }
        }


    nextButton.addEventListener('click', ()=>{
        if (currentQuestionsIndex < questions.length){
            handleNext();
        } else{
            startQuiz();
        }
    }
    )


startQuiz();