var Menu = function(){

	this.speedAlpha = +0.01;
	this.alpha = 0.99;

}

Menu.prototype.render = function() {
	ctx.clearRect(0,0,canvas.width,canvas.height/2);
	ctx.fillStyle = "black";
	ctx.font = "50pt SilkscreenNormal";
	ctx.textAlign = "center";
	ctx.fillText("BLACK",canvas.width/2,canvas.height/2-50);
	ctx.fillStyle = "black";
	ctx.fillRect(0,canvas.height/2,canvas.width,canvas.height/2);
	ctx.fillStyle = "white";
	ctx.fillText("WHITE",canvas.width/2,canvas.height/2+100);
	ctx.font = "15pt SilkscreenNormal";
	ctx.fillText("Tower Builder",canvas.width/2,canvas.height-130);
	ctx.fillText("Stack the blocks",canvas.width/2,canvas.height-100);

};

Menu.prototype.Blink = function() {
	
	ctx.font = "20pt SilkscreenNormal";
	ctx.fillStyle = "rgba(255,255,255,"+this.alpha+")";
	
	if(this.alpha+this.speedAlpha <= 0 || this.alpha+this.speedAlpha >= 1)
		this.speedAlpha *= -1;
	this.alpha += this.speedAlpha;

	ctx.fillText("PRESS ENTER",canvas.width/2,canvas.height-50);
		

};