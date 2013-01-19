var World = function(){

	this.world = new b2World(new b2Vec2(0,100), true);
	

	this.fixDefBot = new b2FixtureDef;
	this.fixDefBot.density = 1.0;
	this.fixDefBot.friction = 0.5;
	this.fixDefBot.restitution = 0;
	this.bodyDefBot = new b2BodyDef;
	this.bodyDefBot.type = Box2D.Dynamics.b2Body.b2_staticBody;
	this.bodyDefBot.position.x = canvas.width / 2;
	this.bodyDefBot.position.y = (canvas.height) - 10;
	this.fixDefBot.shape = new Box2D.Collision.Shapes.b2PolygonShape;
	this.fixDefBot.shape.SetAsBox((canvas.width) / 2, 10);
	this.world.CreateBody(this.bodyDefBot).CreateFixture(this.fixDefBot);

	/*this.fixDefTop = new b2FixtureDef;
	this.fixDefTop.density = 1.0;
	this.fixDefTop.friction = 0.5;
	this.fixDefTop.restitution = 0.2;
	this.bodyDefTop = new b2BodyDef;
	this.bodyDefTop.type = Box2D.Dynamics.b2Body.b2_staticBody;
	this.bodyDefTop.position.x = canvas.width / 2;
	this.bodyDefTop.position.y = 0;
	this.fixDefTop.shape = new Box2D.Collision.Shapes.b2PolygonShape;
	this.fixDefTop.shape.SetAsBox((canvas.width) / 2, 10);
	this.world.CreateBody(this.bodyDefTop).CreateFixture(this.fixDefTop);*/
}