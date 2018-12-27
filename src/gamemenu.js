var GameMenu = cc.Layer.extend({

    ctor:function() {
        this._super();
        var size = cc.winSize;

        //This is the background image
        var bg = new cc.Sprite.create(res.bg);
        bg.setAnchorPoint(cc.p(0.5,0));
        bg.setPosition(cc.p(size.width/2,0));
        this.addChild(bg,0);

        //The background music 
        cc.audioEngine.playMusic(res.music,true);
        cc.audioEngine.setMusicVolume(0.5);
        
        //The menu
        var menuItem = new cc.MenuItemImage(res.play,res.play_pressed,function() {
            var scene = new GamePlayScene();
            cc.director.pushScene(new cc.TransitionFade(1,scene));
        });
        var menu = new cc.Menu(menuItem);
        menu.alignItemsVertically();
        this.addChild(menu);
       



        return true;
    }
})