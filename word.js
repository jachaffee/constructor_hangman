var letter = require("./letter.js");

var Word = function(wrd) {
	this.word = wrd;
	this.letters = [];
	this.solved = false;
	this.getLetters = function() {
		for (var i = 0; i < this.word.length; i++) {
			this.letters.push(new letter.Letter(this.word[i]));
		}
	};

	this.allLettersGuessed = function() {
		var returnTrue = 0;
		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].shown === true) {
				returnTrue++;
			}
			else {
				return false;
			}
		}
		if (returnTrue === this.letters.length) {
			this.solved = true;
		}
		else {
			this.solved = false;
		}

		return this.solved;
	};

	this.letterChecker = function(guess) {
		var showLetters = 0;

		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].character === guess) {
				this.letters[i].shown = true;
				showLetters += 1;
			}
		}

		return showLetters;
	};

	this.renderWord = function() {
		var string = "";

		for (var i = 0; i < this.letters.length; i++) {
			string += this.letters[i].renderLetter();
		}
		return string;
	};
};

module.exports.Word = Word;