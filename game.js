// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num1 = Math.round(Math.random() * 100);
var num2 = Math.round(Math.random() * 100);

var num1div = document.getElementById("number1");
var num2div = document.getElementById("number2");

// Iteration 3: Creating variables required to make the game functional
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mul = document.getElementById("mul");
var divide = document.getElementById("divide");
var modulus = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var num3;
var num3div = document.getElementById("number3");

var score = 0;
var time = 20;
var timer = document.getElementById("timer");
var intervalId; // Declare intervalId outside the function scope

// Iteration 5: Creating a randomise function to make the game functional and call the function randomise
function randomise() {
    num1 = Math.round(Math.random() * 100);
    num2 = Math.round(Math.random() * 100);
    num3 = generateRandomNum3();
    num1div.innerHTML = num1;
    num2div.innerHTML = num2;
    num3div.innerHTML = num3;
}

function generateRandomNum3() {
    var operation = Math.floor(Math.random() * 5);
    switch (operation) {
        case 0:
            return num1 + num2;
        case 1:
            return num1 - num2;
        case 2:
            return num1 * num2;
        case 3:
            return Math.round((num1 / num2) * 100) / 100; // Round to 2 decimal places
        case 4:
            return num1 % num2;
        default:
            return generateRandomNum3();
    }
}

// Iteration 6: Making the Operators (button) functional
plus.onclick = () => {
    if (checkAnswer(num1 + num2, num3)) {
        updateScore();
        randomise();
        startTimer(); // Restart the timer after each correct answer
    } else {
        gameOver();
    }
};

minus.onclick = () => {
    if (checkAnswer(num1 - num2, num3)) {
        updateScore();
        randomise();
        startTimer(); // Restart the timer after each correct answer
    } else {
        gameOver();
    }
};

mul.onclick = () => {
    if (checkAnswer(num1 * num2, num3)) {
        updateScore();
        randomise();
        startTimer(); // Restart the timer after each correct answer
    } else {
        gameOver();
    }
};

divide.onclick = () => {
    if (checkAnswer(Math.round((num1 / num2) * 100) / 100, num3)) {
        updateScore();
        randomise();
        startTimer(); // Restart the timer after each correct answer
    } else {
        gameOver();
    }
};

modulus.onclick = () => {
    if (checkAnswer(num1 % num2, num3)) {
        updateScore();
        randomise();
        startTimer(); // Restart the timer after each correct answer
    } else {
        gameOver();
    }
};

function startTimer() {
    clearInterval(intervalId); // Clear the previous interval
    time = 20;
    timer.innerHTML = time;
    intervalId = setInterval(() => {
        time--;
        if (time == 0) {
            clearInterval(intervalId);
            window.location.href = "./gameover.html";
        }
        timer.innerHTML = time;
    }, 1000);
}

function checkAnswer(userAnswer, correctAnswer) {
    return userAnswer == correctAnswer;
}

function updateScore() {
    score++;
    localStorage.setItem("score", score); // Store the score in localStorage
}


function gameOver() {
    window.location.href = "./gameover.html";
}

startTimer();
randomise();
