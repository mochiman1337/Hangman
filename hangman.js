let POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious", "dissonant", "toady", "imdempotent"];
let guesses = "";
let word = "";
let MAX_GUESSES = 6;
let guessCount = MAX_GUESSES;

function newGame() {
    guesses = "";
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    updateScreen();
}

function guess() {
    let input = document.getElementById("guess");
    let letter = input.value;
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
    guessArea.textContent = "Guesses Letters: " + guesses

    let image = document.getElementById("hangmanpic");
    image.src = `images` + ${ };
}
/*
If you have whole word you dont have dashes
No dupe guesses
Guess clears out the box
Did you lose?
Cant guess before game starts
*/