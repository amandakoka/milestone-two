// Quiz questions array
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

// DOM Elements 
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("nextbtn");
const correctScoreElement = document.getElementById("score");
const incorrectScoreElement = document.getElementById("incorrect");
const messageContainer = document.getElementById("message-container");
const timerContainer = document.getElementById("timer-container");
const timerElement = document.getElementById("timer");

// Quiz State Variables
let currentQuestionIndex = 0;
let correctScore = 0;
let incorrectScore = 0;
let timerSeconds = 0; 
let timerInterval;

/**
 * @function startQuiz
 * Initializes the quiz by showing the start screen and starting the timer.
 */
function startQuiz() {
    showStartScreen();
    // Event listener to transition to quiz content when "start quiz" button is clicked.
    startButton.addEventListener("click", startQuizContent);
}

/**
 * @function showStartScreen
 * Displays the start screen and sets up an event listener for the "Start Quiz" button.
 */
function showStartScreen() {
    startScreen.style.display = "block";
    quizContainer.style.display = "none";

    //Event listener to transition to quiz content when "start quiz" button is clicked.
    startButton.addEventListener("click", startQuizContent);
}

/**
 * @function startQuizContent
 * Transitions from the start screen to the quiz content.
 */
function startQuizContent() {
    startScreen.style.display = "none";
    quizContainer.style.display = "block";
    
    //Start the timer 
    startTimer()

    restartQuiz();
}

/**
 * @function startTimer
 * Starts the timer.
 */
function startTimer() {
    timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
    }, 1000);
}

/**
 * @function updateTimerDisplay
 * Updates the timer display with the current elapsed time.
 */
function updateTimerDisplay() {
    timerElement.textContent = `Time: ${timerSeconds}s`;
}

/**
 * @function restartQuiz
 * Resets quiz state, starts timer and displays the first question.
 */
function restartQuiz() {
    currentQuestionIndex = 0;
    correctScore = 0;
    incorrectScore = 0;
    timerSeconds = 0; // Reset timer seconds
    clearInterval(timerInterval);

    // Call startTimer to initiate a new timer
    startTimer();

    showQuestion();
    updateProgressBar();
    nextButton.innerHTML = "Next";

    messageContainer.textContent = "";
    
    const finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = "";
    
    correctScoreElement.textContent = "0";
    incorrectScoreElement.textContent = "0";
    
    const headerElement = document.querySelector('.quiz h3');
    headerElement.style.display = 'block';
}

/**
 * @function showQuestion
 * Displays the current question image and corrensponding answer buttons.
 */
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.src = currentQuestion.question;

    // Create buttons for each answer option and attach event listeners
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

/**
 * @function resetState
 * Resets the state of the quiz (e.g., clears previous question state).
 */
function resetState() {
    nextButton.style.display = "none";
    questionElement.src = ``;

    messageContainer.textContent = ""; 

    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * @function selectAnswer
 * Handles the user's answer selection, updates scores, and provides feedback.
 * @param {Event} e - The click event object.
 */
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if(isCorrect) {
        displayMessage("Correct!")
        selectedBtn.classList.add("correct");
        correctScore++;
        correctScoreElement.textContent = correctScore;
    }else {
        displayMessage("Incorrect!")
        selectedBtn.classList.add("incorrect");
        incorrectScore++;
        incorrectScoreElement.textContent = incorrectScore;
    }
    // Disable all buttons after user selection
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // Display the "Next" button for the user to proceed
    nextButton.style.display = "block";
}

/**
 * @function displayMessage
 * Displays a message in the message container.
 * @param {string} message - The message to be displayed.
 */
function displayMessage(message) {
    messageContainer.textContent = message;
}

/**
 * @function showScore
 * Displays the final score, stops timer and controls the end-game behavior.
 */
function showScore() {
    console.log("Final Score:", correctScore, incorrectScore);
    resetState();
    nextButton.innerHTML = "Play again!";
    nextButton.style.display = "block";

    // Stop the timer
    clearInterval(timerInterval);
    updateTimerDisplay();

    const finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = `Your final score: ${correctScore} correct and ${incorrectScore} incorrect`;
    
    // Update progress bar to 100 when showing the final score
    const progressBar = document.getElementById("progress-bar");
    progressBar.value = 100;

    // Checks if the currentQuestionIndex is equal to or greater than the number of questions, indicating that the game is finished
    // Removes header when game is finished.
    const headerElement = document.querySelector('.quiz h3');
    if (currentQuestionIndex >= questions.length) {
        headerElement.style.display = 'none';
    } else {
        headerElement.style.display = 'block';
    }
}

/**
 * @function updateProgressBar
 * Updates the progress bar to reflect the user's progress through the quiz.
 */
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const totalQuestions = questions.length;

    if (currentQuestionIndex < totalQuestions) {
        const percentageComplete = (currentQuestionIndex / totalQuestions) * 100;
        progressBar.value = percentageComplete;  
    }
}

/**
 * @function handleNextButton
 * Handles the click event of the "Next" button, advancing to the next question or displaying the final score.
 */
function handleNextButton() {
    console.log("Next Button Clicked");
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        updateProgressBar(); 
    } else {
        showScore();
    }
}

// Event Listener for Next Button
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        restartQuiz();
    }
})

// Call startQuiz function to initialise the start screen 
startQuiz();
