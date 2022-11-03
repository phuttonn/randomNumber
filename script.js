let randomNumber = Math.floor(Math.random() * 100) + 1; // set randomNumber to a number between 1 and 100

// stores references to results paragraph in HTML
const guesses = document.querySelector('.guesses'); 
const lastResult = document.querySelector('.lastResult'); 
const lowOrHi = document.querySelector('.lowOrHi'); 

// stores references to the form text input and submit button 
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1; // initialize guessCount at 1
let resetButton;
guessField.focus();

function checkGuess() {
    const userGuess = Number(guessField.value); //declares variable which takes number from user

    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congrats you got 'er right!";
        lastResult.style.color = "green";
        lowOrHi.textContent = "";
        setGameOver(); 
    } else if (guessCount === 10) {
        lastResult.textContent = "!!! GAME OVER !!!";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent ="Wrong! Guess again"
        lastResult.style.color = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent ="Last guess was too low!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function gameOver() {
    guessField.disabled = true; // disable text field
    guessSubmit.disabled = true; // disable the submit button
    resetButton = document.createElement("button"); // creates new button
    resetButton.textContent = "Start new game"; // give new button content
    document.body.append(resetButton); // add button to out HTML
    resetButton.addEventListener("click", resetGame); // make it clickable; resets game
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll("resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton); // removes New game button from HTML

    guessField.disabled = false; // enables text field
    guessSubmit.disabled =  false; //enables submit button
    guessField.value = ""; // clears text field
    guessField.focus();

    lastResult.style.color = "rgb( 245 245 200"; // removes text color from previous guess

    randomNumber = Math.floor(Math.random() * 100) + 1;
}