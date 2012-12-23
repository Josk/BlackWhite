var Copter = function(){

	this.bodyDef = new b2BodyDef;
	this.fixDef = new b2FixtureDef;
	this.bodyDef.type = b2Body.b2_staticBody;
	this.fixDef.shape = new b2PolygonShape;
	this.fixDef.shape.SetAsBox(25,12.5);
	this.fixDef.density = 0;
	this.fixDef.friction = 0;
	this.fixDef.restitution = 0;
	this.bodyDef.position.x = 100;
	this.bodyDef.position.y = Math.random() * 100;
	//this.x;
	//this.y;
	this.speedX = 0;
	this.speedY = 0;
	this.accelerationX = 1.5;
	this.accelerationY = 1.5;
	this.velocityX = 0.9;
	this.velocityY = 0.9;
}

Copter.prototype.init = function(world) {
	this.body = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef).GetBody();
	//this.x = this.body.GetPosition().x;
	//this.y = this.body.GetPosition().y;
};
Copter.prototype.Move = function(keys,b2Vec2){

	if(keys.pressed["left"]){
		if(!keys.pressed["up"] && !keys.pressed["down"]){
			this.speedY *= this.velocityY;
		}
		if(this.speedX >= -2)
			this.speedX -= this.accelerationX;
		
	}
	
	if(keys.pressed["right"]){
		if(!keys.pressed["up"] && !keys.pressed["down"]){
			this.speedY *= this.velocityY;
		}
		if(this.speedX <= 2)
			this.speedX += this.accelerationX;
	}
	
	if(keys.pressed["up"]){
		if(!keys.pressed["left"] && !keys.pressed["right"]){
			this.speedX *= this.velocityX;
		}
		if(this.speedY >= -2)
			this.speedY -= this.accelerationY;
	}
	
	if(keys.pressed["down"]){
		if(!keys.pressed["left"] && !keys.pressed["right"]){
			this.speedX *= this.velocityX;
		}
		if(this.speedY <= 2)
			this.speedY += this.accelerationY;
	}
	if(keys.noKeyPress()){

		this.speedX *= this.velocityX;
		this.speedY *= this.velocityY;
	}
	var x = this.body.GetPosition().x;
	x += this.speedX;
	var y = this.body.GetPosition().y;
	y += this.speedY;
	this.body.SetPosition(new b2Vec2(x,y));
}