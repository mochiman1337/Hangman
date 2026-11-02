##How is hangman played IRL?
1. Draw the starting point //Check//
2. Pick the word -> A list of possible words, save on of them into a variable
3. Draw dashes -> 1 dash for each letter in the word
    a. For loop? For Each?
4. Guess time
    a. Give an input -> Letter
    b. Check if the letter is in the string
        a. If the letter is in the string, replace dash with the letter
        b. If not in the string, draw the next step
        c. No matter, keep track of guesses user did
            a. Dont let same guess more than 1
5. Game Ends
    a. If they guess the whole word-> game ends-> you win
    b. If the full body drawn, game ends, you lose
    