/*! Copyright (c) SESHENGHUO.COM - Author: LIJUN - Email: zwlijun@gmail.com - Git: https://github.com/zwlijun/se.lib */
define(function(require,exports,module){var a=$.Util=require("mod/se/util.49db40d40a068545864259f8d349426d62bfb26d"),b=".js-layerbox",c='<div class="flexbox center middle layerbox-stage hide '+b.substr(1)+'">  <figure class="box layerbox-panel">    <!-- dynamic html -->  </figure>  <div class="layerbox-mask"></div></div>',d='    <figcaption class="flexbox center middle layerbox-title">$!{title}</figcaption>    <div class="flexbox middle layerbox-content">$!{content}</div>    <div class="center middle layerbox-buttons">$!{button}</div>',e=null,f=null,g={insertData:function(c){var e=$(b+" .layerbox-panel");if(e.length>0){for(var f='<button type="button" data-index="${index}">${label}</button>',g=c.btns||[{label:"确定",callback:function(){this.hide()},args:[],context:this}],h=g.length,i="",j=0;h>j;j++)g[j].index=j,i+=a.formatData(f,g[j]);c.title=c.title||"提示",c.button=i,e.html(a.formatData(d,c));for(var k=0;h>k;k++)this.bindButtonEvent($('button[data-index="'+k+'"]'),{callback:g[k].callback||null,args:g[k].args||[],context:g[k].context||this})}},bindButtonEvent:function(b,c){b.on(a.CLICK_EVENT,function(b){b.preventDefault(),b.stopPropagation();var d=c.callback,e=!!d;c.callback=e?d:function(){g.hide()},a.execHandler(c)})},data:function(a){this.insertData(a)},callback:function(a){a=a||{},e=a.show||null,f=a.hide||null},visible:function(c){var d=$(b);d.length>0&&(!0===c?(d.removeClass("hide"),a.execHandler(e)):(d.addClass("hide"),a.execHandler(f)))},show:function(){this.visible(!0)},hide:function(){this.visible(!1)}};$(function(){var d=$(b);0==d.length&&$("body").append(c),d=null,setTimeout(function(){var c=$(b+" .layerbox-mask");c.length>0&&c.on(a.CLICK_EVENT,function(a){a.preventDefault(),a.stopPropagation(),g.hide()})},0)});var h={maskclose:!0,data:function(a){return g.data(a),this},callback:function(a){return g.callback(a),this},show:function(){return g.show(),this},hide:function(){return!0===h.maskclose&&g.hide(),this}};module.exports=h});
