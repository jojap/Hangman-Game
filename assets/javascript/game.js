//establish the variables wins, guess, and number of guesses

var wins = 0;
var guessremaining = 13;
var lettersGuessed = [];

var hangmanword = [];

//there's an array that holds the words that needs to be guessed in the game

//the user presses any letter key to initialize the game.
// The key is then stored in an array, "alreadyguessed",
// which is displayed, and that letter can't be stored/activated anymore


// There is a list of words, already predetermined, that will progress in the same order every time.
// The word that the user needs to guess in this list will be the "hangmanword". The first word in the list
// becomes the word


//the letters of the "hangmanword" are displayed as gaps that are revealed as the correct keys are pressed

//the game checks if the userInput's letter matches the "hangmanword. If it matches, the letter is revealed"
//if the letter does not match, "guessremaining" decreases by 1

// if "guessremaining" reaches 0, the loss counter increases by 1

// if the word is guessed correctly, wins increases by 1


// the "hangmanword" changes, the number of guesses resets, and the letters already guessed resets