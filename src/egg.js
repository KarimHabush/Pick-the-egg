var Egg = cc.Sprite.extend({
    src:[],
    index:[],
    eggType:null,
    eggIndex:null,
    positions:null,
    initialPosition: null,
    actions:{
        fall:null,
    },
    ctor:function(type,spawnCount,speed) {
        this._super();
        this.generatePosition();
        this.generateEgg(spawnCount,type);
        this.init(this.eggType);
        this.falling(speed);

    },
    
    generateEgg:function(spawnCount,eggType) {
        this.src = [res.blue,res.red,res.green,res.yellow,res.pink,res.cyan,res.orange];
        this.index = ["blue","red","green","yellow","pink","cyan","orange"];
        var x = Math.floor(Math.random() * Math.floor(this.src.length));
        var y = Math.floor(Math.random() * Math.floor(5));

        if(!(spawnCount%5) && spawnCount>2){
            x = this.index.indexOf(eggType);
        }         
        cc.log(x);
        this.eggType = this.src[x];
        this.eggIndex = this.index[x];
    },
    
    generatePosition:function () {
        this.positions=[cc.p(cc.winSize.width/2,cc.winSize.height),cc.p(cc.winSize.width/4,cc.winSize.height),cc.p(3*cc.winSize.width/4,cc.winSize.height)];
        this.initialPosition = this.positions[Math.floor(Math.random() * Math.floor(this.positions.length))];
        this.setPosition(this.initialPosition);
        this.setAnchorPoint(cc.p(0.5,0));
    },
   
    falling: function(speed) {
        this.generatePosition();    
        this.actions.fall = cc.sequence(
            cc.moveBy(speed,cc.p(0,-cc.winSize.height)),
            cc.fadeTo(0.1,0)
        )

        this.runAction(this.actions.fall);

    }
    
    

});
