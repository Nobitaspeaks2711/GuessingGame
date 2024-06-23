
# Guessing Game

## Description

The Guessing Game is a simple web application where users can guess a randomly generated number between 1 and 100. The game provides feedback on whether the guess was too high, too low, or correct. The game resets automatically after a correct guess and a short delay.

## Features

- Random number generation between 1 and 100.
- Input validation to ensure guesses are within range.
- Feedback on whether the guess is too high, too low, or correct.
- Displays the number of guesses taken.
- Resets the game after a correct guess.

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nobitaspeaks2711/guessing-game.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd guessing-game
   ```

3. **Open the `index.html` file in your web browser**

   ```bash
   open index.html
   ```

## Usage

1. Open the `index.html` file in your preferred web browser.
2. Enter your guess in the input field and click the "Guess" button.
3. Feedback will be provided on whether your guess is too high, too low, or correct.
4. The number of guesses will be displayed.
5. The game resets automatically after a correct guess and a short delay.

## Code Explanation

### HTML Structure

- The HTML structure includes an input field for entering guesses, a button to submit guesses, and paragraphs to display feedback and the number of guesses.

### CSS Styling

- Basic styling is applied to the body, container, input field, and button for a clean and user-friendly interface.
- The `body` class centers the content and applies background styling.
- Input fields and buttons have consistent padding, border, and background colors.
- The button has hover and active state styling for better user interaction feedback.

### JavaScript Functionality

- The JavaScript code handles the button click event.
- When the button is clicked, it validates the input and provides feedback on whether the guess is too high, too low, or correct.
- If the guess is correct, the game resets automatically after a short delay.
- The number of guesses is tracked and displayed.

### JavaScript Code

```javascript
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
```

### CSS Code

```css
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dc7b3c;
}

#line {
    border-top: 1px solid black;
}

.container {
    background-color: #fff;
    border-radius: 50px;
}

.head {
    padding: 30px;
    border-radius: 2px solid #dc7b3c;
}

.entry {
    margin: 20px;
    text-align: center;
}

.entry input {
    height: 60px;
    width: 300px;
    border-radius: 20px;
    margin-right: 20px;
    margin-bottom: 50px;
    border: 4px solid #fa6400;
}

#btn {
    align-items: center;
    background-clip: padding-box;
    background-color: #fa6400;
    border: 1px solid transparent;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
}

#btn:hover,
#btn:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

#btn:hover {
    transform: translateY(-1px);
}

#btn:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
}
```

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

---

