
let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

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
    const userAnswer = Number (document.getElementById('answer').value);

    if (userAnswer === correctAnswer) {
        if (userAnswer === correctAnswer)
            messageDiv.textContent = "Correct!";
            message.style.color = "green;"
    }
        else {
            messageDiv.textContent = "Wrong!";
            message.style.color = "red;"
        }
}

function displayNextQuestion() {
    const questionString = generateQuestion();
    const questionDiv = document.getElementById('question');
    questionDiv.textContent = questionString;
}

displayNextQuestion();
const question = generateQuestion();
console.log(question);