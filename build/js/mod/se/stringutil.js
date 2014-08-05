/*! Copyright (c) SESHENGHUO.COM - Author: LIJUN - Email: zwlijun@gmail.com */
define(function(require,exports,module){module.exports={replaceAll:function(a,b,c){var d=new RegExp(b,"gm"),e=a.replace(d,c);return d=null,e},replaceFirst:function(a,b,c){var d=new RegExp("("+b+")","gm").exec(a),e=a;return null!==d&&(e=a.substring(0,d.index).concat(c).concat(a.substring(d.index+d[1].length))),d=null,e},startsWith:function(a,b,c){return c="number"==typeof c?c:0,a.length>=b.length+c?a.substr(c,b.length)==b:!1},endsWith:function(a,b){return a.length>=b.length?a.substr(a.length-b.length,b.length)==b:!1},trim:function(a){var b=/^([\s ]+)|([\s ]+)$/gim,c=a.replace(b,"");return b=null,c},trimLeft:function(a){var b=/^[\s ]+/gim,c=a.replace(b,"");return b=null,c},trimRight:function(a){var b=/[\s ]+$/gim,c=a.replace(b,"");return b=null,c},length:function(a){return a.replace(/[^\u0000-\u00FF]/gim,"**").length},fillBefore:function(a,b,c){var d=a.length,e=c-d+1,f=a;if(e>0){var g=new Array(e);f=g.join(b)+f,g=null}return f},fillAfter:function(a,b,c){var d=a.length,e=c-d+1,f=a;if(e>0){var g=new Array(e);f+=g.join(b),g=null}return f},toCurrency:function(a,b){b=b||2;var c=a.split("."),d=c[0]||"",e=(c[1]||"").substr(0,b),f=this.startsWith(a,"-")||this.startsWith(a,"+")?d.substr(0,1):"",g=0,h=[],i="",j=3,k=1,l=0,m=0,n=0;d=f?d.substr(1):d,g=d.length,l=Math.ceil(g/j);do m=g-j*k,n=Math.max(g-j*k,0),i=d.substr(n,0>m?j+m:j),h.unshift(i),k++;while(l>=k);return f+h.join(",")+"."+this.fillAfter(e||"00",b)},string2hex:function(a){for(var b=a.length,c="",d=0,e=0;b>e;e++)d=a.charCodeAt(e),c+=127>d?"00"+d.toString(16):d.toString(16);return c},hex2string:function(a){for(var b=a.length,c="",d=0,e=0;b>e;e+=4)d=parseInt(a.substr(e,4),16),c+=String.fromCharCode(d);return c}}});