/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var res = {

    bg : "res/images/bg.jpg",

    FlappyBird_fnt : "res/fonts/flappyBird.fnt",
  
    blue: "res/images/blue.png",
    green: "res/images/green.png",
    red: "res/images/red.png",
    cyan: "res/images/cyan.png",
    yellow: "res/images/yellow.png",
    pink: "res/images/pink.png",
    orange: "res/images/orange.png",
  
    blue_voice: "res/sounds/blue.mp3",
    green_voice: "res/sounds/green.mp3",
    red_voice: "res/sounds/red.mp3",
    cyan_voice: "res/sounds/cyan.mp3",
    yellow_voice: "res/sounds/yellow.mp3",
    pink_voice: "res/sounds/pink.mp3",
    orange_voice: "res/sounds/orange.mp3",


    basket: "res/images/basket.png",
  
    heart: "res/images/heart.png",
    play : "res/images/play.png",
    play_pressed : "res/images/play_pressed.png",


    
    egginbasket: "res/sounds/egginbasket.mp3",
    crash:"res/sounds/crash.mp3",
    music:"res/sounds/music.mp3",
    ops:"res/sounds/ops.mp3"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
