var Letter = function(guessedLetter) {
	this.character = guessedLetter;
	this.shown = false;
	this.renderLetter = function() {
		if (this.shown === true) {
			return this.character;
		}
		else {
			return "_";
		}
	};
};

module.exports.Letter = Letter;