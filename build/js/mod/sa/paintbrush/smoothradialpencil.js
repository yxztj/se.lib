/*! Copyright (c) SESHENGHUO.COM - Author: LIJUN - Email: zwlijun@gmail.com - Git: https://github.com/zwlijun/se.lib */
define(function(require,exports,module){var a=require("mod/sa/paintbrush/basebrush.4f8d82e6edbb2f72d2e27e84bccbd83f16a5f134"),b=$.Listener,c=function(c){var d=this.brush=new a(c);this.setted=!1,this.listener=new b({onstart:null,ondrawing:null,onend:null}),d.bind(),d.setLineWidth(10),d.setLineJoin("round"),d.setLineCap("round"),d.addColor(0,"#000"),d.addColor(.5,"rgba(0,0,0,0.5)"),d.addColor(1,"rgba(0,0,0,0)"),d.set("start",{callback:function(a,b){var c=b.context,d=b.getPointerPosition(a);b.isDrawing=!0,!1===this.setted&&(c.lineJoin=b.lineJoin,c.lineCap=b.lineCap,this.setted=!0),b.lastPoint=b.currentPoint={x:d.x,y:d.y},this.exec("start",[a,b])},context:this}),d.set("end",{callback:function(a,b){b.isDrawing=!1,this.exec("end",[a,b])},context:this}),d.set("drawing",{callback:function(a,b){var c=b.context,d=b.getPointerPosition(a),e=d.x,f=d.y,g=b.lineWidth,h=g/2,i=2*g,j=4*g,k=null;if(b.currentPoint={x:e,y:f},b.isDrawing){for(var l=b.calcDistanceBetween(b.lastPoint,b.currentPoint),m=b.calcAngleBetween(b.lastPoint,b.currentPoint),n=0;l>n;n+=h)e=b.lastPoint.x+Math.sin(m)*n,f=b.lastPoint.y+Math.cos(m)*n,k=b.getBrushStyle(StyleTypes.RADIAL,[e,f,g,e,f,i]),c.fillStyle=k,c.fillRect(e-i,f-i,j,j);b.lastPoint=b.currentPoint}this.exec("drawing",[a,b])},context:this})};c.prototype={exec:function(a,b){return this.listener.exec(a,b)},set:function(a,b){this.listener.set(a,b)},remove:function(a){this.listener.remove(a)},get:function(a){return this.listener.get(a)},clear:function(){this.listener.clear()}};var d={createPaintBrush:function(a){var b=new c(a);return b}};module.exports=d});
