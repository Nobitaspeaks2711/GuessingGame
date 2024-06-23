let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

let numGuesses = 0;
btn.addEventListener("click", () => {
    guessNumber();
});

function guessNumber() {
    let userGuess = parseInt(input.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        wrng.innerHTML = "Enter a number between 1 and 100";
    } else {
        numGuesses++;
        guesses.innerHTML = "Number of guesses: " + numGuesses;
        if (userGuess > answer) {
            wrng.innerHTML = "You guessed too high!";
            input.value = "";
        } else if (userGuess < answer) {
            wrng.innerHTML = "You guessed too low!";
            input.value = "";
        } else {
            wrng.innerHTML = "Congratulations, you are correct!";
            input.value = answer;
            
            setTimeout(() => {
                resetGame();
            }, 5000);
        }
    }
}

function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);
    input.value = "";
    wrng.innerHTML = "";
    guesses.innerHTML = "Number of guesses: 0";
}
