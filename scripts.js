let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

function generateQuestion() {
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);

    operator = operators[Math.floor(Math.random() * operators.length)];

    if (operator === "+") {
        correctAnswer = num1 + num2;
    } else if (operator === "-") {
        correctAnswer = num1 - num2;
    } else if (operator === "*") {
        correctAnswer = num1 * num2;
    }

    return `${num1} ${operator} ${num2}`;
}

function checkAnswer() {
    const userAnswer = Number(document.getElementById('answer').value);
    const messageDiv = document.getElementById('message');
    const oldAnswer = correctAnswer; // saved before the question changes

    if (userAnswer === oldAnswer) {
        score++;
        messageDiv.textContent = "Correct!";
        messageDiv.style.color = "green";
    } else {
        messageDiv.textContent = "Wrong! Correct answer was " + oldAnswer;
        messageDiv.style.color = "red";
    }

    document.getElementById('score').textContent = score;
    document.getElementById('answer').value = "";

    if (score === 5) {
        document.getElementById('div-questions').style.display = "none";
        document.getElementById('div-success').style.display = "block";
    } else {
        displayNextQuestion();
    }
}

function playAgain() {
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('message').textContent = "";

    document.getElementById('div-success').style.display = "none";
    document.getElementById('div-questions').style.display = "block";

    displayNextQuestion();
}

function displayNextQuestion() {
    const questionString = generateQuestion();
    const questionDiv = document.getElementById('question');
    questionDiv.textContent = questionString;
}

displayNextQuestion();
