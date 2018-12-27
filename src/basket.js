var Basket = cc.Sprite.extend({
	actions:{
		wait:null,
		play:null
	},
	jumpLeft:null,
	jumpRight:null,
	ctor:function() {
		this._super();
		this.init(res.basket);
		this.setPosition(cc.p(cc.winSize.width/2,0));
        this.setAnchorPoint(cc.p(0.5,0));
		this.setEvents(this);

	},

	moveLeft:function() {
		 if(this.x>(cc.winSize.width/2)){
                    this.jumpLeft = cc.JumpTo.create(0.01,cc.p(cc.winSize.width/2,0),10,1);
                    this.runAction(this.jumpLeft);

                }else 
                	if(this.x<=(cc.winSize.width/2)){
                    this.jumpLeft = cc.JumpTo.create(0.01,cc.p(cc.winSize.width/4,0),10,1);
                    this.runAction(this.jumpLeft);
                }
                return;

	},

	moveRight:function() {
		if(this.x<(cc.winSize.width/2)){
            this.jumpRight = cc.JumpTo.create(0.01,cc.p(2*cc.winSize.width/4,0),10,1);
            this.runAction(this.jumpRight);
        }
        else if (this.x>=(2*cc.winSize.width/4)){
	             this.jumpRight = cc.JumpTo.create(0.01,cc.p(3*cc.winSize.width/4,0),10,1);
	            this.runAction(this.jumpRight);
	        }
	        return;
	},

	setEvents:function(basket) {
		cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed:  function(keyCode, event){
            	if(keyCode==cc.KEY.left)
            		basket.moveLeft();
            	else if(keyCode == cc.KEY.right)
            			basket.moveRight();
            }
        }, this);

        cc.eventManager.addListener({
              event: cc.EventListener.TOUCH_ONE_BY_ONE,
             swallowTouches: true,
            onTouchBegan: function (touch, event) { 
                var target = event.getCurrentTarget();  
            
                var locationInNode = target.convertToNodeSpace(touch.getLocation());    
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);
                if (cc.rectContainsPoint(rect, locationInNode)) {       
                return true;
            }
            return false;
        },
        onTouchMoved: function (touch, event) {         
            var target = event.getCurrentTarget();
            var delta = touch.getDelta();
            target.x += delta.x;
            target.y = delta.y;
            
            },
        onTouchEnded: function (touch, event) {         
            var target = event.getCurrentTarget();            
            }
    	},this);

        
	}
	




})