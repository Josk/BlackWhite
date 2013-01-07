var Copter = function(){

	this.bodyDef = new b2BodyDef;
	this.fixDef = new b2FixtureDef;
	this.bodyDef.type = b2Body.b2_dynamicBody;
	this.fixDef.shape = new b2PolygonShape;
	this.fixDef.shape.SetAsBox(25,12.5);
	this.fixDef.density = 0;
	this.fixDef.friction = 0;
	this.fixDef.restitution = 0;
	this.bodyDef.position.x = 100;
	this.bodyDef.position.y = Math.random() * 100;
	this.speedX = 0;
	this.speedY = 0;
	this.accelerationX = 20;
	this.accelerationY = 20;
	this.velocityX = 0.9;
	this.velocityY = 0.9;
}

Copter.prototype.init = function(world) {
	this.body = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef).GetBody();
};
Copter.prototype.Move = function(keys,b2Vec2){

	if(keys.pressed["left"]){
		if(!keys.pressed["up"] && !keys.pressed["down"]){
			this.speedY *= this.velocityY;
		}
		if(this.speedX >= -400)
			this.speedX -= this.accelerationX;
		
	}
	
	if(keys.pressed["right"]){
		if(!keys.pressed["up"] && !keys.pressed["down"]){
			this.speedY *= this.velocityY;
		}
		if(this.speedX <= 400)
			this.speedX += this.accelerationX;
	}
	
	if(keys.pressed["up"]){
		if(!keys.pressed["left"] && !keys.pressed["right"]){
			this.speedX *= this.velocityX;
		}
		if(this.speedY >= -400)
			this.speedY -= this.accelerationY;
	}
	
	/*if(keys.pressed["down"]){
		if(!keys.pressed["left"] && !keys.pressed["right"]){
			this.speedX *= this.velocityX;
		}
		if(this.speedY <= 400)
			this.speedY += this.accelerationY;
		
	}*/
	if(keys.noKeyPress() || keys.pressed["down"]){

		this.speedX *= this.velocityX;
		this.speedY *= this.velocityY;
	}

	if(this.speedX != 0 || this.speedY != 0)
		this.body.SetLinearVelocity(new b2Vec2(this.speedX,this.body.GetLinearVelocityFromLocalPoint(this.body.GetPosition()).y));
	
	if(this.speedX < 1 && this.speedX > -1 && this.speedX != 0)
		this.speedX = 0;
	if(this.speedY < 1 && this.speedY > -1 && this.speedY != 0)
		this.speedY = 0;
	console.log(this.body.GetLinearVelocityFromLocalPoint(this.body.GetPosition()))
}