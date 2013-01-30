var HUD = function(){

	this.escape = "ESC";
	this.score = "SCORE:";

	this.speedAlpha = +0.01;
	this.alpha = 0.99;
}

HUD.prototype.render = function(actualScore,nbFloors,nonIsTipsRendered,isEndGame) {
	if(!isEndGame){
		ctx.fillStyle = "black";
		ctx.font = "12pt SilkscreenNormal";
		ctx.textAlign = "center";
		ctx.fillText(this.escape,17,12);


		ctx.fillText(this.score,canvas.width-130,12);
		ctx.textAlign = "right";
		ctx.fillText(actualScore+"PTS",canvas.width,12);


		if(nbFloors == 0 && !nonIsTipsRendered){
			ctx.fillStyle = "rgba(0,0,0,"+this.alpha+")";
		
			if(this.alpha+this.speedAlpha <= 0 || this.alpha+this.speedAlpha >= 1)
				this.speedAlpha *= -1;
			this.alpha += this.speedAlpha;
			ctx.textAlign = "center";
			ctx.font = "20pt SilkscreenNormal";
			ctx.fillText("PRESS SPACE",canvas.width/2,canvas.height/2);
		}
	}

	if(isEndGame){
		ctx.fillStyle = "black";
		ctx.fillText("SCORE:"+actualScore+"PTS",canvas.width/2,canvas.height/2);
		ctx.fillStyle = "rgba(0,0,0,"+this.alpha+")";
	
		if(this.alpha+this.speedAlpha <= 0 || this.alpha+this.speedAlpha >= 1)
			this.speedAlpha *= -1;
		this.alpha += this.speedAlpha;
		ctx.textAlign = "center";
		ctx.font = "20pt SilkscreenNormal";
		ctx.fillText("PRESS ESCAPE",canvas.width/2,canvas.height/2+30);

	}
};