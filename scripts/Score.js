var Score = function(){

	this.score = 0;
}

Score.prototype.IncrementScore = function(quantity) {
	this.score += quantity;
};