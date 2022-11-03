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

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += `${userGuess}`;

    if (userGuess === randomNumber) {
        lastResult.Result = "Congrats you go 'er right!";
        lastResult.style.color = "green";
        lowOrHi.textContent = "";
        setGameOver(); // function yet to be created!!
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