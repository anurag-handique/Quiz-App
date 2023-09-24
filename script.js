const questions = [
  {
    question: "Which of the following JavaScript design patterns focuses on creating objects without exposing the instantiation logic to the client?",
    answers: [
        { text: "Factory Pattern", correct: true },
        { text: "Observer Pattern", correct: false },
        { text: "Singleton Pattern", correct: false },
        { text: "Decorator Pattern", correct: false }
    ]
},
    {
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        answers: [
            { text: "To declare a new variable.", correct: false },
            { text: "To determine the type of a value or expression.", correct: true },
            { text: "To assign a value to a variable.", correct: false },
            { text: "To create a new object.", correct: false },
        ]
    },
    {
        question: "In JavaScript, what does the term 'scope' refer to?",
        answers: [
            { text: "The visibility of a variable within a function.", correct: true },
            { text: "The number of lines of code in a JavaScript file.", correct: false },
            { text: "The size of a webpage.", correct: false },
            { text: "The speed of code execution.", correct: false },
        ]
    },
    {
        question: "What is the key difference between 'null' and 'undefined' in JavaScript?",
        answers: [
            { text: "They are the same and can be used interchangeably.", correct: false },
            { text: "'null' represents an empty or non-existent value, while 'undefined' indicates a variable has been declared but not assigned a value.", correct: true },
            { text: "'null' indicates a variable has been declared but not assigned a value, while 'undefined' represents an empty or non-existent value.", correct: false },
            { text: "'null' is a reserved keyword, and 'undefined' is not.", correct: false },
        ]
    },
    {
        question: "What does the term 'hoisting' mean in JavaScript?",
        answers: [
            { text: "Elevating variables and functions to the top of their containing scope during compilation.", correct: true },
            { text: "Loading JavaScript code from a remote server.", correct: false },
            { text: "Moving elements up and down the DOM tree.", correct: false },
            { text: "Storing data in a cache for faster access.", correct: false },
        ]
    },
    {
        question: "What is event delegation in JavaScript?",
        answers: [
            { text: "It refers to the process of creating new events in JavaScript.", correct: false },
            { text: "It involves attaching multiple event listeners to the same element.", correct: false },
            { text: "It involves attaching a single event listener to a common ancestor for multiple child elements.", correct: true },
            { text: "It is a way to stop event propagation in the DOM.", correct: false },
        ]
    },
    {
        question: "What is a closure in JavaScript?",
        answers: [
            { text: "A way to securely store sensitive information.", correct: false },
            { text: "A type of loop used for iteration.", correct: false },
            { text: "A function that has access to variables from its outer (enclosing) function scope.", correct: true },
            { text: "A method for compressing JavaScript files.", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            { text: "It refers to the current function.", correct: false },
            { text: "It refers to the global object.", correct: false },
            { text: "It refers to the current object or context in which code is executed.", correct: true },
            { text: "It refers to a reserved keyword in JavaScript.", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'setTimeout()' function in JavaScript?",
        answers: [
            { text: "To execute a function after a specified delay.", correct: true },
            { text: "To stop the execution of a function.", correct: false },
            { text: "To set a timer for animations.", correct: false },
            { text: "To pause JavaScript execution.", correct: false },
        ]
    },
    {
        question: "What is the difference between 'let', 'const', and 'var' in terms of variable declaration in JavaScript?",
        answers: [
            { text: "They are interchangeable and have no differences.", correct: false },
            { text: "'let' and 'const' have block scope, while 'var' has function scope.", correct: true },
            { text: "'let' and 'const' can be used for constants only, while 'var' is for variables.", correct: false },
            { text: "'var' is the modern way of declaring variables, while 'let' and 'const' are outdated.", correct:false },
        ]
    },
    {
        question: "What is a callback function in JavaScript?",
        answers: [
            { text: "A function that returns a callback error.", correct: false },
            { text: "A function that calls another function as an argument.", correct: true },
            { text: "A function used to create animations.", correct: false },
            { text: "A function that is called automatically when an event occurs.", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
        answers: [
            { text: "To parse JSON data into a JavaScript object.", correct: false },
            { text: "To convert a JavaScript object into a JSON-formatted string.", correct: true },
            { text: "To validate JSON data.", correct: false },
            { text: "To remove all whitespace from a JSON string.", correct: false },
        ]
    },
    {
        question: "What is the role of the event loop in JavaScript?",
        answers: [
            { text: "To handle HTTP requests and responses.", correct: false },
            { text: "To manage the order of execution of JavaScript code.", correct: true },
            { text: "To define the layout of a web page.", correct: false },
            { text: "To create and modify HTML elements.", correct: false },
        ]
    },
    {
        question: "What does the term 'immutable' mean in the context of JavaScript data types?",
        answers: [
            { text: "That data types in JavaScript cannot be changed.", correct: false },
            { text: "That data types in JavaScript are always constant.", correct: false },
            { text: "That certain data types in JavaScript cannot be modified after creation.", correct: true },
            { text: "That data types in JavaScript are unique and cannot be compared.", correct: false },
        ]
    },
    {
        question: "What is a promise in JavaScript?",
        answers: [
            { text: "A guarantee that a function will always return a value.", correct: false },
            { text: "A mechanism for handling asynchronous operations and their results.", correct: true },
            { text: "A built-in JavaScript object for creating classes.", correct: false },
            { text: "A way to prevent errors in JavaScript code.", correct: false },
        ]
    },
    {
        question: "What is a module in JavaScript?",
        answers: [
            { text: "A type of HTML element.", correct: false },
            { text: "A JavaScript file containing reusable code that can be imported into other files.", correct: true },
            { text: "A function that returns a promise.", correct: false },
            { text: "A way to define variables in JavaScript.", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'map()' function in JavaScript?",
        answers: [
            { text: "To create a map of key-value pairs.", correct: false },
            { text: "To iterate over the elements of an array and modify each element.", correct: true },
            { text: "To remove elements from an array.", correct: false },
            { text: "To check if an array contains a specific value.", correct: false },
        ]
    },
    {
        question: "What is the role of the Document Object Model (DOM) in JavaScript?",
        answers: [
            { text: "To manage the appearance and styling of a web page.", correct: false },
            { text: "To handle HTTP requests and responses.", correct: false },
            { text: "To represent the structure of an HTML document as a tree of objects.", correct: true },
            { text: "To define the logic and behavior of a web application.", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'async' and 'await' keywords in JavaScript?",
        answers: [
            { text: "To declare asynchronous functions.", correct: true },
            { text: "To pause the execution of JavaScript code.", correct: false },
            { text: "To add comments to JavaScript code.", correct: false },
            { text: "To define class methods.", correct: false },
        ]
    },
    {
        question: "What is a JavaScript constructor function?",
        answers: [
            { text: "A function that creates an instance of a class.", correct: true },
            { text: "A function that constructs HTML elements.", correct: false },
            { text: "A function that deletes objects in JavaScript.", correct: false },
            { text: "A function that handles HTTP requests.", correct: false },
        ]
    }
];
if (document.referrer.includes("index.html")) {
    // Disable the back button functionality
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
}
// Disable the back button functionality
history.pushState(null, null, location.href);
window.onpopstate = function () {
history.go(1);
};


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; // Index of the current question
let score = 0; // Player's score

// Add an event listener for the beforeunload event
window.addEventListener("beforeunload", function (e) {
    const confirmationMessage = "Progress will not be saved. Are you sure you want to reload?";
    e.returnValue = confirmationMessage;
    if (!confirm(confirmationMessage)) {
        return;
    }
    window.location.href = "index.html"; 
});



function startQuiz() {
    // Initialize the quiz
    currentQuestionIndex = 0; // Reset to the first question
    score = 0; // Reset the score
    nextButton.innerHTML = "Next"; // Change the "Next" button text
    showQuestions(); // Show the first question
}

function showQuestions() {
    // Display the current question and answer choices
    resetState(); // Reset the state (clear previous question)
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Create buttons for answer choices
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    // Reset the state (clear previous question and answers)
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    // Handle user's answer selection
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct"); // Mark as correct
        score++; // Increase the score
    } else {
        selectedBtn.classList.add("incorrect"); // Mark as incorrect
    }

    // Disable all answer buttons
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block"; // Show the "Next" button
}

function showScore() {
    // Display the player's score after completing the quiz
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block"; // Show the "Try Again" button
}

function handleNextButton() {
    // Handle the "Next" button click
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < questions.length) {
        showQuestions(); // Display the next question
    } else {
        showScore(); // Show the score if all questions are answered
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton(); // Handle "Next" button click
    } else {
        startQuiz(); // Restart the quiz when "Try Again" is clicked
    }
});

startQuiz(); // Start the quiz when the page loads
