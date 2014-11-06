/*! Copyright (c) SESHENGHUO.COM - Author: LIJUN - Email: zwlijun@gmail.com - Git: https://github.com/zwlijun/se.lib */
define(function(require,exports,module){require("mod/polyfill/array");var a=require("mod/se/listener"),b=["webkit","Moz","ms","O",""],c=b.length,d=document.createElement("div").style,e=/^((translate|rotate|scale)(X|Y|Z|3d)?|skew(X|Y)|matrix(3d)?|perspective)$/,f=function(){for(var a="",e="",f=0;c>f;f++)if(e=b[f],a=(e?e+"T":"t")+"ransform",a in d)return e;return void 0}(),g=function(a){return void 0===f?void 0:""===f||a in d?a:f+a.charAt(0).toUpperCase()+a.substr(1)},h=function(a){return void 0===f?void 0:""===f||a in d?a:"-"+f.toLowerCase()+"-"+i(a)},i=function(a){var b=a.replace(/([A-Z])/g,"-$1").toLowerCase();return b},j=h("transform"),k=h("transition"),l=h("animation");j=void 0===j||"transform"==j?"":j,k=void 0===k||"transition"==k?"":k,l=void 0===l||"animation"==l?"":l;var m=function(a){this.name=a,this.frames=[]};m.prototype={push:function(a,b){if(-1==this.frames.indexOf(a)){var c=[],d="",f="",g=[];for(var i in b)f=b[i],e.test(i)?g.push(i+"("+f+")"):(d=h(i),c.push(void 0!==d&&d!=i?d+": "+f:i+": "+f));g.length>0&&c.push(j?j+": "+g.join(" "):"transform: "+g.join(" ")),this.frames.push(a+" {"+c.join("; ")+"}")}},print:function(){var a=this.frames.join("\n"),b="keyframes",c=this.name,d="-"+f.toLowerCase()+"-"+b,e=" "+c+" {\n"+a+"\n}",g=[];g.push("@"+d+e),g.push("@"+b+e),$("head").append('<style type="text/css">\n'+g.join("\n")+"\n</style>")}};var n=function(b,c,d){this.target=$(b),this.domNode=this.target[0],this.backupStyle=this.domNode.style.cssText,this.runtimeStyle=this.backupStyle,this.source=c,this.current=0,this.queue=this.parse(c),this.keyframes={},this.animationIndex=0,this.listener=new a({ontransitionEnd:null,onanimationStart:null,onanimationEnd:null,onanimationIteration:null,oncomplete:null}),!1!==d&&this.on()};n.prototype={exec:function(a,b){return this.listener.exec(a,b)},set:function(a,b){this.listener.set(a,b)},remove:function(a){this.listener.remove(a)},get:function(a){return this.listener.get(a)},clear:function(){this.listener.clear()},off:function(){var a=this,b=a.target;b.off("webkitAnimationStart","").off("webkitAnimationEnd","").off("webkitAnimationIteration","").off("webkitTransitionEnd","")},on:function(a){var b=this,c=b.target,d=c.attr("data-bindla");("1"!=d||!0===a)&&(b.off(),c.on("webkitAnimationStart","",b,function(a){var b=a.data;b.animationStart(a)}),c.on("webkitAnimationEnd","",b,function(a){var b=a.data;b.animationEnd(a)}),c.on("webkitAnimationIteration","",b,function(a){var b=a.data;b.animationIteration(a)}),c.on("webkitTransitionEnd","",b,function(a){var b=a.data;b.transitionEnd(a)}))},animationStart:function(a){a.preventDefault(),a.stopPropagation();var b=this;b.exec("animationStart",[b.target,b.current]);var c="animationIterationCount",d=g(c),e=b.domNode.style[c];d&&(e=b.domNode.style[d]),"infinite"==e&&(b.current++,b.__play__())},animationEnd:function(a){a.preventDefault(),a.stopPropagation();var b=this;b.exec("animationEnd",[b.target,b.current]),b.current++,b.__play__()},animationIteration:function(a){a.preventDefault(),a.stopPropagation();var b=this;b.exec("animationIteration",[b.target,b.current])},transitionEnd:function(a){a.preventDefault(),a.stopPropagation();var b=this,c=b.target,d=c.css(g("transition")),e=d.split(",").length,f=++b.animationIndex;e==f&&(b.exec("transitionEnd",[c,b.current]),b.current++,b.animationIndex=0,b.__play__())},parse:function(a){var b="::",c=a.indexOf(b),d=a.substring(0,c),e=a.substr(c+b.length);if("transition"==d)return this.parseTransition(e);if("animation"==d)return this.parseAnimation(e);throw new Error("Unknown animation schema("+d+")")},parseTransition:function(a){for(var b=a.split(">"),c=b.length,d=null,f=null,g=/^([^:]+):([^!]+)!(.+)?$/g,l=null,m=null,n=[],o=!1,p=[],q=0;c>q;q++){n=[],o=!1,d=b[q],m={properties:[],values:[],animate:[]},f=d.split(";");for(var r=0,s=f.length;s>r;r++)for(;null!=(l=g.exec(f[r]));){var t=l[1],u=l[2],v=l[3]||"",w=h(t),x=i(t);w=void 0===w||w==t?"":w,e.test(t)?(n.push(t+"("+u+")"),v&&!1===o&&(m.values.push(j?j+" "+v:"transform "+v),o=!0)):(m.properties.push(w?w+": "+u:x+": "+u),v&&m.values.push(w?w+" "+v:x+" "+v))}n.length>0&&m.properties.push(j?j+": "+n.join(" "):"transform: "+n.join(" ")),m.animate.push(k?k+": "+m.values.join(", "):"transition: "+m.values.join(", ")),p.push(m)}return p},parseAnimation:function(a){for(var b=a.split(">"),c=b.length,d=null,e=null,f=/^([^:]+):([^!]*)!(.+)?$/g,g=null,h=null,i=[],j=0;c>j;j++){d=b[j],h={properties:[],values:[],animate:[]},e=d.split(";");for(var k=0,m=e.length;m>k;k++)for(;null!=(g=f.exec(e));){var n=g[1],o=(g[2],g[3]||"");h.values.push(n+" "+o)}h.animate.push(l?l+": "+h.values.join(", "):"animation: "+h.values.join(", ")),i.push(h)}return i},clearKeyFrames:function(){this.keyframes={}},addKeyFrame:function(a,b,c){a in this.keyframes||(this.keyframes[a]=new m(a)),this.keyframes[a].push(b,c)},printKeyFrames:function(){for(var a in this.keyframes)this.keyframes[a].print()},mergerCss:function(a,b,c){var d=/(;\s*)$/g,e=a.replace(d,""),f=b.replace(d,""),g=(c||"").split(":")[1]||"",h=(e?e+";":"")+(f?f+";":"")+(g&&g.length>1?c:"");return h},__play__:function(){var a=this.queue[this.current];if(a){var b=a.properties,c=(a.values,a.animate),d=this.mergerCss(this.runtimeStyle,b.join(";"),c.join(";"));this.runtimeStyle=this.domNode.style.cssText=d}else this.exec("complete",[this.target])},updateSource:function(a){this.source=a,this.queue=this.parse(a)},updateTarget:function(a){this.target=$(a),this.domNode=this.target[0],this.backupStyle=this.domNode.style.cssText,this.runtimeStyle=this.backupStyle},play:function(){this.reset(),this.__play__()},reset:function(){this.domNode.style.cssText=this.runtimeStyle=this.backupStyle,this.animationIndex=0,this.current=0}};var o={newInstance:function(a,b,c){var d=new n(a,b,c);return{target:d.target,set:function(a,b){return d.set(a,b),this},addKeyFrame:function(a,b,c){return d.addKeyFrame(a,b,c),this},printKeyFrames:function(){return d.printKeyFrames(),this},clearKeyFrames:function(){return d.clearKeyFrames(),this},updateTarget:function(a){return d.updateTarget(a),this},source:function(a){return d.updateSource(a),this},play:function(){return setTimeout(function(){d.play()},60),this},reset:function(){return d.reset(),this},off:function(){return d.off(),this},on:function(a){return d.on(a),this}}}};module.exports=o});