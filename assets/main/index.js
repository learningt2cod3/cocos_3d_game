System.register("chunks:///_virtual/npc.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,r,c;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,c=t.Component}],execute:function(){var o;n._RF.push({},"480feVDe8dDrp6fBZv8GfhW","npc",void 0);var s=r.ccclass;r.property,t("Npc",s("Npc")(o=function(t){function n(){return t.apply(this,arguments)||this}return e(n,t),n.prototype.start=function(){},n}(c))||o);n._RF.pop()}}}));

System.register("chunks:///_virtual/main.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,o,n,r,a,s,c,h,l,m,u,g,p,f,y,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized,r=e.defineProperty},function(e){a=e.cclegacy,s=e._decorator,c=e.Node,h=e.Label,l=e.Vec3,m=e.systemEvent,u=e.SystemEvent,g=e.KeyCode,p=e.director,f=e.tween,y=e.math,v=e.Component}],execute:function(){var b,E,d,S,w,D,T,K,_,C,R;a._RF.push({},"959d1lGHYZJGIN+X82CMXkA","main",void 0);var P=s.ccclass,Y=s.property;e("Main",(b=P("Main"),E=Y({type:c}),d=Y({type:h}),S=Y({type:c}),w=Y({type:c}),b((K=t((T=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,o(n(t),"camera",K,n(t)),o(n(t),"scoreLabel",_,n(t)),r(n(t),"moveDirection",new l(0,0,0)),r(n(t),"cameraTargetPos",new l),r(n(t),"cameraTargetRot",new l),r(n(t),"smoothing",.4),r(n(t),"rotationSmoothing",1),r(n(t),"gameScore",0),o(n(t),"Questions",C,n(t)),r(n(t),"currentQuestion",0),o(n(t),"final",R,n(t)),t}i(t,e);var a=t.prototype;return a.onLoad=function(){m.on(u.EventType.KEY_DOWN,this.onKeyDown,this),m.on(u.EventType.KEY_UP,this.onKeyUp,this),m.on(u.EventType.MOUSE_MOVE,this.setCameraAngle,this)},a.onEnable=function(){},a.onDestroy=function(){m.off(u.EventType.KEY_DOWN,this.onKeyDown,this),m.off(u.EventType.KEY_UP,this.onKeyUp,this)},a.onKeyDown=function(e){switch(this.moveDirection.x=this.moveDirection.z=0,e.keyCode){case g.KEY_W:console.log("Press a key"),this.moveDirection=this.camera.forward;break;case g.KEY_S:this.moveDirection=this.camera.forward.negative();break;case g.KEY_A:this.moveDirection.z=-1*this.smoothing;break;case g.KEY_D:this.moveDirection.z=1*this.smoothing;break;case g.ESCAPE:this.reset();break;case g.KEY_R:p.loadScene("scene")}this.moveCamera(this.moveDirection)},a.onKeyUp=function(e){switch(e.keyCode){case g.KEY_A:console.log("Release a key")}},a.moveCamera=function(e){this.cameraTargetPos=this.camera.getPosition(),l.add(this.cameraTargetPos,this.cameraTargetPos,e),f(this.camera).to(.1,{position:this.cameraTargetPos}).start()},a.update=function(e){},a.setCameraAngle=function(e){var t,i=e.movementX;e.movementY;this.cameraTargetRot=this.camera.eulerAngles,t=i>0?-1:1,l.add(this.cameraTargetRot,this.cameraTargetRot,new l(0*this.rotationSmoothing,t*this.rotationSmoothing,0)),this.cameraTargetRot.x=y.clamp(this.cameraTargetRot.x,-75,75),f(this.camera).to(.1,{eulerAngles:this.cameraTargetRot}).start()},a.reset=function(){this.camera.setRotationFromEuler(new l(0,0,0))},a.addScore=function(e){var t=this;console.log(e),e.target.parent.active=!1,this.currentQuestion<this.Questions.length-1?(this.currentQuestion++,this.Questions[this.currentQuestion].active=!0):(this.final.getComponent(h).string="Congrats your Score is:"+this.gameScore.toString(),this.final.active=!0,f(this.final).to(2,{active:!1},{easing:"smooth"}),this.scheduleOnce((function(){t.final.active=!1}),2)),this.gameScore+=20,this.scoreLabel.string="SCORE: "+this.gameScore.toString()},a.subScore=function(e){this.gameScore>20&&(this.gameScore-=20),this.scoreLabel.string="SCORE: "+this.gameScore.toString()},t}(v)).prototype,"camera",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(T.prototype,"scoreLabel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(T.prototype,"Questions",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),R=t(T.prototype,"final",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=T))||D));a._RF.pop()}}}));

System.register("chunks:///_virtual/hint.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,r,o,i,c,s,a;return{setters:[function(t){e=t.inheritsLoose,n=t.defineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,i=t._decorator,c=t.tween,s=t.Vec3,a=t.Component}],execute:function(){var u;o._RF.push({},"c11ebUug0FJ6a/LEtcJhFKJ","hint",void 0);var l=i.ccclass;i.property,t("Hint",l("Hint")(u=function(t){function o(){for(var e,o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i))||this,n(r(e),"player",null),e}e(o,t);var i=o.prototype;return i.onLoad=function(){c(this.node).by(.5,{eulerAngles:new s(45,0,0)}).repeatForever().start()},i.showhint=function(){},o}(a))||u);o._RF.pop()}}}));

System.register("chunks:///_virtual/player.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,i,r,o,a,c,l,u,s,p,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,c=e.Node,l=e.systemEvent,u=e.SystemEvent,s=e.Vec3,p=e.KeyCode,y=e.Component}],execute:function(){var h,f,b,m,d,v,P,w,g,C,N,z,D,E,K,_,I;o._RF.push({},"e1a6dRMCGVK2Lw3KvMoW8Az","player",void 0);var L=a.ccclass,M=a.property;e("Player",(h=L("Player"),f=M({type:c}),b=M({type:c}),m=M({type:c}),d=M({type:c}),v=M({type:Number}),P=M({type:c}),w=M({type:c}),h((N=t((C=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,i(r(t),"nonPlayerCharacters",N,r(t)),i(r(t),"hints",z,r(t)),i(r(t),"NPCNode",D,r(t)),i(r(t),"hintNode",E,r(t)),i(r(t),"minDistance",K,r(t)),i(r(t),"interactionUI",_,r(t)),i(r(t),"interactPrompt",I,r(t)),t}n(t,e);var o=t.prototype;return o.start=function(){var e=this;this.NPCNode.children.forEach((function(t){e.nonPlayerCharacters.push(t)}))},o.onLoad=function(){l.on(u.EventType.KEY_DOWN,this.onKeyDown,this)},o.onKeyDown=function(e){var t=s.distance(this.node.parent.position,this.nonPlayerCharacters[0].position);switch(e.keyCode){case p.KEY_E:t<this.minDistance?(this.interact(),this.interactPrompt.active=!0):this.interactPrompt.active=!1}},o.interact=function(){this.interactionUI.active=!0},t}(y)).prototype,"nonPlayerCharacters",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),z=t(C.prototype,"hints",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),D=t(C.prototype,"NPCNode",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(C.prototype,"hintNode",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(C.prototype,"minDistance",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),_=t(C.prototype,"interactionUI",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(C.prototype,"interactPrompt",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=C))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./npc.ts","./main.ts","./hint.ts","./player.ts"],(function(){"use strict";return{setters:[null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});