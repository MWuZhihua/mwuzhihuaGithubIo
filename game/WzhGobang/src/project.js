require=function e(t,i,r){function s(c,a){if(!i[c]){if(!t[c]){var n="function"==typeof require&&require;if(!a&&n)return n(c,!0);if(o)return o(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var p=i[c]={exports:{}};t[c][0].call(p.exports,function(e){var i=t[c][1][e];return s(i?i:e)},p,p.exports,e,t,i,r)}return i[c].exports}for(var o="function"==typeof require&&require,c=0;c<r.length;c++)s(r[c]);return s}({Game:[function(e,t,i){"use strict";cc._RF.push(t,"c184bf0pMhNvrP42P/3dnY2","Game"),cc.Class({"extends":cc.Component,properties:{overSprite:{"default":null,type:cc.Sprite},overLabel:{"default":null,type:cc.Label},chessPrefab:{"default":null,type:cc.Prefab},chessList:{"default":[],type:[cc.node]},whiteSpriteFrame:{"default":null,type:cc.SpriteFrame},blackSpriteFrame:{"default":null,type:cc.SpriteFrame},touchChess:{"default":null,type:cc.Node,visible:!1},gameState:"white",fiveGroup:[],fiveGroupScore:[]},startGame:function(){cc.director.loadScene("game")},toMenu:function(){cc.director.loadScene("startMenu")},judgeOver:function(){for(var e=this.touchChess.tag%15,t=parseInt(this.touchChess.tag/15),i=0,r=0;r<15;r++)if(this.chessList[15*t+r].getComponent(cc.Sprite).spriteFrame===this.touchChess.getComponent(cc.Sprite).spriteFrame){if(i++,5==i)return"black"===this.gameState?(this.overLabel.string="你赢了",this.overSprite.node.x=0):(this.overLabel.string="你输了",this.overSprite.node.x=0),void(this.gameState="over")}else i=0;i=0;for(var s=0;s<15;s++)if(this.chessList[15*s+e].getComponent(cc.Sprite).spriteFrame===this.touchChess.getComponent(cc.Sprite).spriteFrame){if(i++,5==i)return"black"===this.gameState?(this.overLabel.string="你赢了",this.overSprite.node.x=0):(this.overLabel.string="你输了",this.overSprite.node.x=0),void(this.gameState="over")}else i=0;var o=t-e;i=0;for(var r=0;r<15;r++)if(!(o+r<0||o+r>14))if(this.chessList[15*(o+r)+r].getComponent(cc.Sprite).spriteFrame===this.touchChess.getComponent(cc.Sprite).spriteFrame){if(i++,5==i)return"black"===this.gameState?(this.overLabel.string="你赢了",this.overSprite.node.x=0):(this.overLabel.string="你输了",this.overSprite.node.x=0),void(this.gameState="over")}else i=0;o=t+e,i=0;for(var r=0;r<15;r++)if(!(o-r<0||o-r>14))if(this.chessList[15*(o-r)+r].getComponent(cc.Sprite).spriteFrame===this.touchChess.getComponent(cc.Sprite).spriteFrame){if(i++,5==i)return"black"===this.gameState?(this.overLabel.string="你赢了",this.overSprite.node.x=0):(this.overLabel.string="你输了",this.overSprite.node.x=0),void(this.gameState="over")}else i=0;"black"===this.gameState?this.gameState="white":this.gameState="black"},ai:function(){for(var e=0;e<this.fiveGroup.length;e++){for(var t=0,i=0,r=0;r<5;r++)this.getComponent(cc.Sprite).spriteFrame,this.chessList[this.fiveGroup[e][r]].getComponent(cc.Sprite).spriteFrame==this.blackSpriteFrame?t++:this.chessList[this.fiveGroup[e][r]].getComponent(cc.Sprite).spriteFrame==this.whiteSpriteFrame&&i++;t+i==0?this.fiveGroupScore[e]=7:t>0&&i>0?this.fiveGroupScore[e]=0:0==t&&1==i?this.fiveGroupScore[e]=35:0==t&&2==i?this.fiveGroupScore[e]=800:0==t&&3==i?this.fiveGroupScore[e]=15e3:0==t&&4==i?this.fiveGroupScore[e]=8e5:0==i&&1==t?this.fiveGroupScore[e]=15:0==i&&2==t?this.fiveGroupScore[e]=400:0==i&&3==t?this.fiveGroupScore[e]=1800:0==i&&4==t&&(this.fiveGroupScore[e]=1e5)}for(var s=0,o=0,e=0;e<this.fiveGroupScore.length;e++)this.fiveGroupScore[e]>s&&(s=this.fiveGroupScore[e],o=function(e){return e}(e));for(var c=!1,a=!1,n=0,e=0;e<5;e++)if(c||null!=this.chessList[this.fiveGroup[o][e]].getComponent(cc.Sprite).spriteFrame||(n=function(e){return e}(e)),a||null==this.chessList[this.fiveGroup[o][e]].getComponent(cc.Sprite).spriteFrame||(c=!0,a=!0),a&&null==this.chessList[this.fiveGroup[o][e]].getComponent(cc.Sprite).spriteFrame){n=function(e){return e}(e);break}this.chessList[this.fiveGroup[o][n]].getComponent(cc.Sprite).spriteFrame=this.whiteSpriteFrame,this.touchChess=this.chessList[this.fiveGroup[o][n]],this.judgeOver()},onLoad:function(){cc.log("init"),this.overSprite.node.x=1e4;for(var e=this,t=0;t<15;t++)for(var i=0;i<15;i++){var r=cc.instantiate(this.chessPrefab);this.node.addChild(r),r.setPosition(cc.p(40*i+20,40*t+20)),r.tag=15*t+i,r.on(cc.Node.EventType.TOUCH_END,function(t){cc.log("click"),e.touchChess=this,"black"===e.gameState&&null===this.getComponent(cc.Sprite).spriteFrame&&(this.getComponent(cc.Sprite).spriteFrame=e.blackSpriteFrame,e.judgeOver(),"white"==e.gameState&&(cc.log("white"),e.scheduleOnce(function(){cc.log("aiaiaiai"),e.ai()},1)))}),this.chessList.push(r)}this.chessList[112].getComponent(cc.Sprite).spriteFrame=this.whiteSpriteFrame,this.gameState="black";for(var t=0;t<15;t++)for(var i=0;i<11;i++)this.fiveGroup.push([15*t+i,15*t+i+1,15*t+i+2,15*t+i+3,15*t+i+4]);for(var i=0;i<15;i++)for(var t=0;t<11;t++)this.fiveGroup.push([15*t+i,15*(t+1)+i,15*(t+2)+i,15*(t+3)+i,15*(t+4)+i]);for(var s=-10;s<=10;s++)for(var i=0;i<11;i++)s+i<0||s+i>10||this.fiveGroup.push([15*(s+i)+i,15*(s+i+1)+i+1,15*(s+i+2)+i+2,15*(s+i+3)+i+3,15*(s+i+4)+i+4]);for(var s=4;s<=24;s++)for(var t=0;t<11;t++)s-t<4||s-t>14||this.fiveGroup.push([15*t+s-t,15*(t+1)+s-t-1,15*(t+2)+s-t-2,15*(t+3)+s-t-3,15*(t+4)+s-t-4])}}),cc._RF.pop()},{}],startMenu:[function(e,t,i){"use strict";cc._RF.push(t,"51dfaqZra9H+L+8AD7SgjIf","startMenu"),cc.Class({"extends":cc.Component,properties:{labelMessage:{"default":null,type:cc.Label}},showLableMessage:function(e,t){this.labelMessage.node.x=0,this.labelMessage.string=t,this.scheduleOnce(function(){this.labelMessage.node.x=-3e3},2)},startGame:function(){cc.director.loadScene("game")},onButtonBToCClick:function(){this.startGame()},onButtonBToBClick:function(){this.showLableMessage(2,"该功能正在开发！！")},onButtonShareClick:function(){this.showLableMessage(2,"该功能正在开发！！")},onLoad:function(){this.labelMessage.node.x=-3e3},update:function(e){}}),cc._RF.pop()},{}]},{},["Game","startMenu"]);