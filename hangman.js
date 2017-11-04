var prompt = require('prompt');
var Word = require('./word.js');
var gameTime = require('./game.js');
var guessedLetters = "";

prompt.start();

game = {

	guessedLetters: "",
	wordsGuessed: 0,
	guessesLeft: 10,
	currentWord: null,
	gameBegin: function(wrd) {
		this.resetGuesses();
		this.currentWord = new Word.Word(gameTime.game.wordChoices[Math.floor(Math.random() * gameTime.game.wordChoices.length)]);
		this.currentWord.getLetters();
		this.gameScript();
	},

	resetGuesses: function() {
		this.guessesLeft = 10;
	},

	gameScript: function() {
		var self = this;

		prompt.get(['guess'], function(err, result) {
			guessedLetters += result.guess;
			console.log("Letter Guessed: " + result.guess);

			var findLetters = self.currentWord.letterChecker(result.guess);

			if (findLetters === 0) {
				console.log("Sorry, you guessed wrong.");
				self.guessesLeft--;
			}
			else {
				console.log("Nice job! You got that one right!");

				if (self.currentWord.allLettersGuessed()) {
					console.log("Woo Hoo! You Won!");
					return;
				}
			}

			console.log("Guesses Remaining: ", self.guessesLeft);
			console.log(self.currentWord.renderWord());
			console.log("Letters Guessed: " + guessedLetters);

			if ((self.guessesLeft > 0) && (self.currentWord.solved === false)) {
				self.gameScript();
			}
			else if (self.guessesLeft === 0) {
				console.log("Sorry, you lose! The word was ", self.currentWord.word);
			}
			else {
				console.log(self.currentWord.renderWord());
			}
		});
	}

};

game.gameBegin();