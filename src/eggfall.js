var eggfall = cc.Layer.extend({
	falling:null,
	egg:{
		before:null,
		focus:null
	},
	speed:4,
	sounds:[res.blue_voice,res.red_voice,res.green_voice,res.yellow_voice,res.pink_voice,res.cyan_voice,res.orange_voice],
	colors:["blue","red","green","yellow","pink","cyan","orange"],
	spawnDelay:3,
	basket:null,
	score:0,
	highScore:null,
	scoreLabel:null,
	highScoreLabel:null,
	typeLabel:null,
	eggtype:null,
	heart:{
		index:0,
		item:[]
	},

	ctor:function() {
		this._super();
		
		var size = cc.winSize;

		var bg = cc.Sprite.create(res.bg);
        bg.setAnchorPoint(cc.p(0.5,0));
        bg.setPosition(cc.p(size.width/2,0));
        this.addChild(bg,0);


    	this.typeLabel = new cc.LabelBMFont("",res.FlappyBird_fnt,'200');
    	this.scoreLabel = new cc.LabelBMFont("0",res.FlappyBird_fnt,'50');
    	this.highScoreLabel = new cc.LabelBMFont("HI "+cc.sys.localStorage.getItem('score'),res.FlappyBird_fnt,'300');
    	
    	this.highScoreLabel.setPosition(cc.p(87,size.height-50));

    	this.addChild(this.highScoreLabel);

		this.basket = new Basket();
        this.addChild(this.basket,5);
        
        this.generateEggType();

		this.schedule(this.fallingEggs,this.spawnDelay);
        this.schedule(this.egginbasket);
        this.schedule(this.setTypeLabel);
        this.schedule(this.setScoreLabel);
       	this.schedule(this.gameOver);
       	this.schedule(this.updatespeed,10);
       	this.schedule(this.incrementScore,1);
        this.addChild(this.typeLabel);
        this.addChild(this.scoreLabel);

        this.generateSounds();

        
        this.setHearts();
        for (var i = 0; i <3; i++) {
    		this.addChild(this.heart.item[i]);
    	}



	},
	
	fallingEggs:function() {
		if(this.egg.focus !=null){
			this.egg.before = this.egg.focus;
			this.egg.focus = new Egg(this.eggtype,this.spawnCount,this.speed);
			this.addChild(this.egg.focus,0);

		}
		else{
			this.egg.focus = new Egg(this.eggtype,this.spawnCount,this.speed);
			this.addChild(this.egg.focus,0);
		}

		
	},

    updatespeed: function(dt) {
        if(this.speed>1 && this.spawnDelay>0.6){
        this.speed -=0.3;
        this.spawnDelay-=0.24;
		this.schedule(this.fallingEggs,this.spawnDelay);

    	}
    	return;
    },

    generateEggType:function() {
        var x = Math.floor(Math.random() * Math.floor(this.colors.length));
        this.eggtype = this.colors[x];
    },

    egginbasket:function() {
    	if(this.egg.before!=null){

	        if( (this.egg.before.y)<80 ){
	        	 if((this.basket.x<(this.egg.before.x+50) && this.basket.x>(this.egg.before.x-50))){
	        	 	if(this.egg.before.eggIndex == this.eggtype){
	      
		                cc.audioEngine.playEffect(res.egginbasket);
        				this.generateEggType();
        				this.generateSounds();
        				this.removeChild(this.egg.before);
        				this.spawnCount=0;
	        	 		this.egg.before =null;	


	        	 	}
	        	 	else{
	        	 		this.removeChild(this.egg.before);
	        	 		this.removeChild(this.heart.item[this.heart.index]);
		                cc.audioEngine.playEffect(res.ops);	
	        	 		this.heart.index++;
	        	 		this.egg.before =null;
	        	 	}
	                
	        		 }
	        	else {
	        	 	if(this.egg.before.eggIndex == this.eggtype && this.egg.before.y<10){
	        	 		this.removeChild(this.heart.item[this.heart.index]);
		                cc.audioEngine.playEffect(res.ops);	
	        	 		this.heart.index++;
	        	 		this.egg.before =null;
	        	 	}
	        	}
	        	if(this.egg.before!=null){
	        		if((this.egg.before.y)<10){
       	 				this.egg.before =null;	

	        			this.spawnCount++;
	        			}
	        		}
	        	}
	        }
            return;
    },

    setTypeLabel:function() {
    	this.typeLabel.setAnchorPoint(cc.p(0.5,0.5));
    	this.typeLabel.setPosition(cc.p(cc.winSize.width/2,cc.winSize.height-50));
    	this.typeLabel.setString(this.eggtype);
    },
    
    incrementScore:function() {
    	this.score++;
    	if(this.score > cc.sys.localStorage.getItem('score')){
    		this.scoreLabel.color= cc.color.RED;
    	}
    },

    setScoreLabel:function () {
    	this.scoreLabel.setAnchorPoint(cc.p(1,0.5));
    	this.scoreLabel.setPosition(cc.p(150,cc.winSize.height-100));
    	this.scoreLabel.setString(this.score);
    },
    
    setHearts:function() {
    	for (var i = 0; i <3; i++) {
    		this.heart.item[i] = cc.Sprite.create(res.heart);
    	}
    	this.heart.item[2].setPosition(cc.p(cc.winSize.width-100,cc.winSize.height-70));
    	this.heart.item[1].setPosition(cc.p(cc.winSize.width-150,cc.winSize.height-70));
    	this.heart.item[0].setPosition(cc.p(cc.winSize.width-200,cc.winSize.height-70));

    },
    
    gameOver:function() {
    	if(this.heart.index==3){
	        var scene = new GameMenuScene();
           	cc.director.pushScene(new cc.TransitionFade(1,scene));
          	this.heart.index=0;
           	this.highScore();
		}
    },

    highScore:function() {
    	if(this.highScore==null){
    		this.highScore = cc.sys.localStorage;    	
    		this.highScore.setItem('score',this.score);
    	}
    	if(cc.sys.localStorage.getItem('score') < this.score)
    		cc.sys.localStorage.setItem('score',this.score);

    	this.highScore = cc.sys.localStorage.getItem('score');
    },

    generateSounds:function() {
    	var voice = this.sounds[this.colors.indexOf(this.eggtype)];
		cc.audioEngine.playEffect(voice);

    }


});


