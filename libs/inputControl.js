
Keys = function(){
	this.pressed  = {};	
	this.keysTab = {};
	this.onMouseDown = {} ;
	this.onMouseUp = {} ; 
	this.mouseDownEventParam = {}; 
	this.mouseUpEventParam = {}; 
	
};

Keys.prototype.addKeys = function(keysTab){
	
	for(var action in keysTab){

		this.pressed[action] = false;
	
		var keys = keysTab[action];
		
		for(var i =0; i<keys.length; i++)
		{
			this.keysTab[""+keys[i]] = action;
				
		}
	}	
};
	
Keys.prototype.removeKeysByNameEvent = function(nameEvent){
	
	delete this.pressed.nameEvent;
	
	for(var key in this.keysTab){
		if(this.keysTab[key] == nameEvent){
			delete this.keysTab.key ;
		}
	}
}

Keys.prototype.removeKeyCode = function(keyCode){
	
	for(var key in this.keysTab){
		if(key == ""+keyCode){
			delete this.keysTab.key ;
		}
	}
}
	
Keys.prototype.init = function(keysTab, objectToAttach){
	
	this.addKeys(keysTab);
	
		var that = this;
		
		objectToAttach.addEventListener("keydown", function (e) {
			that.isKeyDown(e.keyCode);
		}, false);

		objectToAttach.addEventListener("keyup", function (e) {
			that.isKeyUp(e.keyCode);
		}, false);				
};

Keys.prototype.isKeyDown = function(keyCode){
	
	var keyTmp = this.keysTab[""+keyCode];
	
	if(keyTmp != undefined){
		this.pressed[keyTmp] = true;
	}
}

Keys.prototype.isKeyUp = function(keyCode){
	
	var keyTmp = this.keysTab[""+keyCode];

	if(keyTmp != undefined){
		this.pressed[keyTmp] = false;
	}
}

Keys.prototype.addEventOnMouseDown = function(varFunction){
	
	this.onMouseDown = varFunction;
	
	var that = this;
	
	window.addEventListener("mousedown", function (e) {
		that.mouseDownEventParam = e;
		that.onMouseDown();
	}, false);
};

Keys.prototype.addEventOnMouseUp = function(varFunction){
	
	this.onMouseUp = varFunction;
	
	var that = this;
	
	window.addEventListener("mouseup", function (e) {
		that.mouseUpEventParam = e;
		that.onMouseUp();
	}, false);
};

Keys.prototype.noKeyPress = function(){

	for(var key in this.pressed){
		if(this.pressed[key]){
			return false;
		}
	}
	return true;
};










	
	