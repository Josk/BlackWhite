var Floor = function(){

	this.bodyDef = new b2BodyDef;
	this.fixDef = new b2FixtureDef;
	this.bodyDef.type = b2Body.b2_dynamicBody;
	this.fixDef.shape = new b2PolygonShape;
	this.width = Math.random()*100+10;
	this.height = Math.random()*20+10;
	this.fixDef.shape.SetAsBox(this.width,this.height);
	this.fixDef.density = 0.5;
	this.fixDef.friction = 0.5;
	this.fixDef.restitution = 0;
	this.bodyDef.position.x = 0-this.width/2;
	this.bodyDef.position.y = 100;
	this.movingFactor;
	this.isMoving = true;
}

Floor.prototype.Init = function(world,factor) {
	this.body = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef).GetBody();
	this.movingFactor = factor;
};

Floor.prototype.StopMoving = function() {
	this.isMoving = false;
};

Floor.prototype.Move = function() {
	if(this.isMoving){
		this.body.SetLinearVelocity(new b2Vec2(this.movingFactor,-1));
	}
	if(this.body.GetPosition().x >= canvas.width+this.width/2){
		this.body.SetPosition(new b2Vec2(0-this.width/2,100));
	}
};
