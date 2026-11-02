let POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious", "dissonant", "toady", "imdempotent"];
let guesses = "";
let word = "";

function newGame() {
    guesses = "";
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    updateScreen();
}

function guess() {
    let input = document.getElementById("guess");
    let letter = input.value;
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
}