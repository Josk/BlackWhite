var World = function(){

	this.world = new b2World(new b2Vec2(0,10), true);
	

	this.fixDef = new b2FixtureDef;
	this.fixDef.density = 1.0;
	this.fixDef.friction = 0.5;
	this.fixDef.restitution = 0.2;
	this.bodyDef = new b2BodyDef;
	this.bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;

	this.bodyDef.position.x = canvas.width / 2;
	this.bodyDef.position.y = (canvas.height) - 10;
	this.fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape;
	this.fixDef.shape.SetAsBox((canvas.width) / 2, 10);
	this.world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
}