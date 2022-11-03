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
    alert("I'm a placeholder");
}
