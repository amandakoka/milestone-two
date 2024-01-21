const questions = [
    {
        question: "assets/img/switzerland.png",
        answers: [
            { text: "Denmark", correct: false},
            { text: "Tunisia", correct: false},
            { text: "Austria", correct: false},
            { text: "Switzerland", correct: true},
        ]
    },
    {
        question: "assets/img/croatia.png",
        answers: [
            { text: "Russia", correct: false},
            { text: "Croatia", correct: true},
            { text: "Serbia", correct: false},
            { text: "Slovenia", correct: false},
        ]
    },
    {
        question: "assets/img/romania.png",
        answers: [
            { text: "Chad", correct: false},
            { text: "Moldova", correct: false},
            { text: "Romania", correct: true},
            { text: "Armenia", correct: false},
        ]
    },
    {
        question: "assets/img/czech.png",
        answers: [
            { text: "Philippines", correct: false},
            { text: "Czech Republic", correct: true},
            { text: "Chile", correct: false},
            { text: "France", correct: false},
        ]
    },
    {
        question: "assets/img/portugal.png",
        answers: [
            { text: "Spain", correct: false},
            { text: "Belarus", correct: false},
            { text: "Portugal", correct: true},
            { text: "Mexico", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("nextbtn");
const correctScoreElement = document.getElementById("score");
const incorrectScoreElement = document.getElementById("incorrect");

let currentQuestionIndex = 0;
let correctScore = 0;
let incorrectScore = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    correctScore = 0;
    incorrectScore = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.src = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;    
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    questionElement.src = ``;
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        correctScore++;
        correctScoreElement.textContent = correctScore;
    }else{
        selectedBtn.classList.add("incorrect");
        incorrectScore++;
        incorrectScoreElement.textContent = incorrectScore;
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    nextButton.innerHTML = "Play again!";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
