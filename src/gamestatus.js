cc.eventManager.addListener({
              event: cc.EventListener.TOUCH_ONE_BY_ONE,
             swallowTouches: true,
        //onTouchBegan event callback function                      
            onTouchBegan: function (touch, event) { 
            // event.getCurrentTarget() returns the *listener's* sceneGraphPriority node.   
                var target = event.getCurrentTarget();  
            
                var locationInNode = target.convertToNodeSpace(touch.getLocation());    
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);
            
            //Check the click area
            if (cc.rectContainsPoint(rect, locationInNode)) {       
                return true;
            }
            return false;
        },
        onTouchMoved: function (touch, event) {         
            //Move the position of current button sprite
            var target = event.getCurrentTarget();
            var delta = touch.getDelta();
            target.x += delta.x;
            target.y = delta.y;
            
            },
        //Process the touch end event
        onTouchEnded: function (touch, event) {         
            var target = event.getCurrentTarget();            

            //Reset zOrder and the display sequence will change
            }
        },this);