var Tank = function(){
	this.bodyDef = new b2BodyDef;
	this.fixDef = new b2FixtureDef;
	this.bodyDef.type = b2Body.b2_DynamicBody;
	this.fixDef.shape = new b2PolygonShape;
	this.fixDef.shape.SetAsBox(20,10);
	this.fixDef.density = 1;
	this.fixDef.friction = 1;
	this.fixDef.restitution = 1;
	this.bodyDef.position.x = canvas.width;
	this.bodyDef.position.y = canvas.height-10-30;
	this.accelerationX = -100;
	this.velocity;
}

Tank.prototype.init = function(world) {
	this.body = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef).GetBody();
	this.velocity = this.body.GetLinearVelocity();
	this.velocity.x = this.accelerationX;
	this.body.SetLinearVelocity(this.velocity);
};

Tank.prototype.Move = function(b2Vec2) {
	
};
Tank.prototype.checkBorders = function(b2Vec2) {
	if(this.body.GetPosition().x < -10){
		this.body.SetPosition(new b2Vec2(canvas.width,this.body.GetPosition().y));
	}
};