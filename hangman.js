let POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];
let guesses = "";
let word = "";
let MAX_GUESSES = 6;
let guessCount = MAX_GUESSES;

let gameState = false;//Added to track games state for win/loss status

function newGame() {
    guesses = "";
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];

    document.getElementById("guess").value = "";//Added this so clears text for new game!
    updateScreen();
}

function guess() {

    if (word === "") { return; }//Added to prevent guess before game starts.

    let input = document.getElementById("guess");
    let letter = input.value.toLowerCase();//Added so  letter can match anyword in array
    input.value = "";//Added so that it empties the field afterwards

    if (letter === "" || guess.indexOf(letter) >= 0) { return; }//This prevents duplicate letters

    if (word.indexOf(letter) < 0) {
        guessCount--;
    }
    guesses += letter;

    updateScreen();
}

function updateScreen() {
    let clueString = "";
    for (let i = 0; i < word.length; i++) {
        let letter = word.charAt(i);
        if (guesses.indexOf(letter) >= 0) {
            clueString += letter + " ";
        }
        else {
            clueString += "_ ";
        }
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;
    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guesses Letters: " + guesses;

    //Added to display text for winning and losing messages
    if (guessCount === 0) {
        gameState = true;
        guessArea.textContent = "Too bad you LOSE!";
    }
    else if (clueString.indexOf("_") === -1) {
        gameState = true;
        guessArea.textContent = "Congradulations you WIN!";
    }

    let image = document.getElementById("hangmanpic");
    image.src = `images/${guessCount}.gif`;
}
/*
If you have whole word you dont have dashes
No dupe guesses
Guess clears out the box
Did you lose?
Cant guess before game starts
*/