var Tank = function(){
	this.bodyDef = new b2BodyDef;
	this.fixDef = new b2FixtureDef;
	this.bodyDef.type = b2Body.b2_DynamicBody;
	this.fixDef.shape = new b2PolygonShape;
	this.fixDef.shape.SetAsBox(20,10);
	this.fixDef.density = 0.1;
	this.fixDef.friction = 0.1;
	this.fixDef.restitution = 0.1;
	this.bodyDef.position.x = canvas.width;
	this.bodyDef.position.y = canvas.height-10-20;
	//this.x;
	//this.y;
	this.speedX = 0;
	this.speedY = 0;
	this.accelerationX = -5;
	this.accelerationY;
	this.velocityX = 0.9;
	this.velocityY = 0.9;
}

Tank.prototype.init = function(world) {
	this.body = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef).GetBody();
	//this.x = this.body.GetPosition().x;
	//this.y = this.body.GetPosition().y;
};

Tank.prototype.Move = function(b2Vec2) {
	var x = this.body.GetPosition().x;
	x += this.accelerationX;
	
	this.body.SetPosition(new b2Vec2(x,this.body.GetPosition().y))

};
Tank.prototype.checkBorders = function(b2Vec2) {
	if(this.body.GetPosition().x < 0){
		this.body.SetPosition(new b2Vec2(canvas.width,canvas.height-10-20));
	}
};