var Box = function(){

	this.bodyDef = new b2BodyDef;
	this.fixDef = new b2FixtureDef;
	this.bodyDef.type = b2Body.b2_staticBody;
	this.fixDef.shape = new b2PolygonShape;
	this.fixDef.shape.SetAsBox(2,1);
	this.fixDef.density = 1.0;
	this.fixDef.friction = 0.5;
	this.fixDef.restitution = 0.2;
	this.bodyDef.position.x = Math.random() * 25;
	this.bodyDef.position.y = Math.random() * 10;
}

Box.prototype.init = function(world) {
	world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
};