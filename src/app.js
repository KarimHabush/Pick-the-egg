var GameMenuScene = cc.Scene.extend({
    onEnter:function () {

        this._super();

        var layer = new GameMenu();
        this.addChild(layer);
    }
});

var GamePlayScene = cc.Scene.extend({
    onEnter:function() {
        this._super();

        var layer = new eggfall();
        this.addChild(layer);
    }
})
