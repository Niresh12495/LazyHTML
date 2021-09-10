/**
* lazyhtml v 1.2.2
* LazyHTML is an OpenSource Javascript Library that Supports Lazy Loading of any elements without Modifying Code, LazyHTML can lazy load Ads, Videos, Images, Widgets, Javascript, CSS, Inline-Javascript, Inline-CSS & Any HTML.
* Niresh (niresh12495@gmail.com) 
* Facebook.com/Niresh 
*/
!function(e){var r="currentScript";r in e||Object.defineProperty(e,r,{get:function(){try{throw new Error}catch(r){var t,n,o,u=0,c=/.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(r.stack),i=c&&c[1]||!1,l=c&&c[2]||!1,a=e.location.href.replace(e.location.hash,""),f=e.getElementsByTagName("script");for(i===a&&(t=e.documentElement.outerHTML,n=new RegExp("(?:[^\\n]+?\\n){0,"+(l-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),o=t.replace(n,"$1").trim());u<f.length;u++){if("interactive"===f[u].readyState)return f[u];if(f[u].src===i)return f[u];if(i===a&&f[u].innerHTML&&f[u].innerHTML.trim()===o)return f[u]}return null}}})}(document);;Array.prototype.indexOf||(Array.prototype.indexOf=function(e,r){"use strict";var t;if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return-1;var u=0|r;if(u>=o)return-1;for(t=Math.max(u>=0?u:o-Math.abs(u),0);o>t;t++)if(t in n&&n[t]===e)return t;return-1});;window.matchMedia||(window.matchMedia=function(e){"use strict";var t=e.document,i=t.documentElement,n=[],s=0,r="",l={},a=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,c=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,d=0,o=function(e){var t=-1!==e.indexOf(",")&&e.split(",")||[e],i=t.length-1,n=i,s=null,d=null,o="",m=0,h=!1,p="",u="",f=null,x=0,v=0,g=null,w="",y="",b="",z="",q="",C=!1;if(""===e)return!0;do if(s=t[n-i],h=!1,d=s.match(a),d&&(o=d[0],m=d.index),!d||-1===s.substring(0,m).indexOf("(")&&(m||!d[3]&&o!==d.input))C=!1;else{if(u=s,h="not"===d[1],m||(p=d[2],u=s.substring(o.length)),C=p===r||"all"===p||""===p,f=-1!==u.indexOf(" and ")&&u.split(" and ")||[u],x=f.length-1,v=x,C&&x>=0&&""!==u)do{if(g=f[x].match(c),!g||!l[g[3]]){C=!1;break}if(w=g[2],y=g[5],z=y,b=g[7],q=l[g[3]],b&&(z="px"===b?Number(y):"em"===b||"rem"===b?16*y:g[8]?(y/g[8]).toFixed(2):"dppx"===b?96*y:"dpcm"===b?.3937*y:Number(y)),C="min-"===w&&z?q>=z:"max-"===w&&z?z>=q:z?q===z:!!q,!C)break}while(x--);if(C)break}while(i--);return h?!C:C},m=function(){var t=e.innerWidth||i.clientWidth,n=e.innerHeight||i.clientHeight,s=e.screen.width,r=e.screen.height,a=e.screen.colorDepth,c=e.devicePixelRatio;l.width=t,l.height=n,l["aspect-ratio"]=(t/n).toFixed(2),l["device-width"]=s,l["device-height"]=r,l["device-aspect-ratio"]=(s/r).toFixed(2),l.color=a,l["color-index"]=Math.pow(2,a),l.orientation=n>=t?"portrait":"landscape",l.resolution=c&&96*c||e.screen.deviceXDPI||96,l["device-pixel-ratio"]=c||1},h=function(){clearTimeout(d),d=setTimeout(function(){var t=null,i=s-1,r=i,l=!1;if(i>=0){m();do if(t=n[r-i],t&&(l=o(t.mql.media),(l&&!t.mql.matches||!l&&t.mql.matches)&&(t.mql.matches=l,t.listeners)))for(var a=0,c=t.listeners.length;c>a;a++)t.listeners[a]&&t.listeners[a].call(e,t.mql);while(i--)}},10)},p=function(){var i=t.getElementsByTagName("head")[0],n=t.createElement("style"),s=null,l=["screen","print","speech","projection","handheld","tv","braille","embossed","tty"],a=0,c=l.length,d="#mediamatchjs { position: relative; z-index: 0; }",o="",p=e.addEventListener||(o="on")&&e.attachEvent;for(n.type="text/css",n.id="mediamatchjs",i.appendChild(n),s=e.getComputedStyle&&e.getComputedStyle(n)||n.currentStyle;c>a;a++)d+="@media "+l[a]+" { #mediamatchjs { position: relative; z-index: "+a+" } }";n.styleSheet?n.styleSheet.cssText=d:n.textContent=d,r=l[1*s.zIndex||0],i.removeChild(n),m(),p(o+"resize",h,!1),p(o+"orientationchange",h,!1)};return p(),function(e){var t=s,i={matches:!1,media:e,addListener:function(e){n[t].listeners||(n[t].listeners=[]),e&&n[t].listeners.push(e)},removeListener:function(e){var i=n[t],s=0,r=0;if(i)for(r=i.listeners.length;r>s;s++)i.listeners[s]===e&&i.listeners.splice(s,1)}};return""===e?(i.matches=!0,i):(i.matches=o(e),s=n.push({mql:i,listeners:null}),i)}}(window));;!function(){var e,t=function(t,r){var o,u=document.all,n=u.length,l=[];for(e.addRule(t,"foo:bar"),o=0;o<n&&!("bar"===u[o].currentStyle.foo&&(l.push(u[o]),l.length>r));o+=1);return e.removeRule(0),l};document.querySelectorAll||document.querySelector||(e=document.createStyleSheet(),document.querySelectorAll=document.body.querySelectorAll=function(e){return t(e,1/0)},document.querySelector=document.body.querySelector=function(e){return t(e,1)[0]||null})}();;!function(e,t){"undefined"!=typeof module?module.exports=t():"function"==typeof define&&"object"==typeof define.amd?define(t):this.domreadylazyhtml=t()}(0,function(){var e,t=[],o="object"==typeof document&&document,n=o&&o.documentElement.doScroll,d=o&&(n?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return!d&&o&&o.addEventListener("DOMContentLoaded",e=function(){for(o.removeEventListener("DOMContentLoaded",e),d=1;e=t.shift();)e()}),function(e){d?setTimeout(e,0):t.push(e)}});;/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@link https://krux.github.io/postscribe}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["postscribe"]=e():t["postscribe"]=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={"exports":{},"id":n,"loaded":!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=r(1),i=n(o);t.exports=i["default"]},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}function i(){}function a(){var t=m.shift();if(t){var e=h.last(t);e.afterDequeue(),t.stream=s.apply(void 0,t),e.afterStreamStart()}}function s(t,e,r){function n(t){t=r.beforeWrite(t),g.write(t),r.afterWrite(t)}g=new p["default"](t,r),g.id=y++,g.name=r.name||g.id,u.streams[g.name]=g;var o=t.ownerDocument,s={"close":o.close,"open":o.open,"write":o.write,"writeln":o.writeln};c(o,{"close":i,"open":i,"write":function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return n(e.join(""))},"writeln":function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return n(e.join("")+"\n")}});var l=g.win.onerror||i;return g.win.onerror=function(t,e,n){r.error({"msg":t+" - "+e+": "+n}),l.apply(g.win,[t,e,n])},g.write(e,function(){c(o,s),g.win.onerror=l,r.done(),g=null,a()}),g}function u(t,e,r){if(h.isFunction(r))r={"done":r};else if("clear"===r)return m=[],g=null,void(y=0);r=h.defaults(r,d),t=/^#/.test(t)?window.document.getElementById(t.substr(1)):t.jquery?t[0]:t;var n=[t,e,r];return t.postscribe={"cancel":function(){n.stream?n.stream.abort():n[1]=i}},r.beforeEnqueue(n),m.push(n),g||a(),t.postscribe}e.__esModule=!0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e["default"]=u;var l=r(2),p=o(l),f=r(4),h=n(f),d={"afterAsync":i,"afterDequeue":i,"afterStreamStart":i,"afterWrite":i,"autoFix":!0,"beforeEnqueue":i,"beforeWriteToken":function(t){return t},"beforeWrite":function(t){return t},"done":i,"error":function(t){throw new Error(t.msg)},"releaseAsync":!1},y=0,m=[],g=null;c(u,{"streams":{},"queue":m,"WriteStream":p["default"]})},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){var r=d+e,n=t.getAttribute(r);return f.existy(n)?String(n):n}function s(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=d+e;f.existy(r)&&""!==r?t.setAttribute(n,r):t.removeAttribute(n)}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c=r(3),l=o(c),p=r(4),f=n(p),h=!1,d="data-ps-",y="ps-style",m="ps-script",g=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.root=e,this.options=r,this.doc=e.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new l["default"]("",{"autoFix":r.autoFix}),this.actuals=[e],this.proxyHistory="",this.proxyRoot=this.doc.createElement(e.nodeName),this.scriptStack=[],this.writeQueue=[],s(this.proxyRoot,"proxyof",0)}return t.prototype.write=function(){var t;for((t=this.writeQueue).push.apply(t,arguments);!this.deferredRemote&&this.writeQueue.length;){var e=this.writeQueue.shift();f.isFunction(e)?this._callFunction(e):this._writeImpl(e)}},t.prototype._callFunction=function(t){var e={"type":"function","value":t.name||t.toString()};this._onScriptStart(e),t.call(this.win,this.doc),this._onScriptDone(e)},t.prototype._writeImpl=function(t){this.parser.append(t);for(var e=void 0,r=void 0,n=void 0,o=[];(e=this.parser.readToken())&&!(r=f.isScript(e))&&!(n=f.isStyle(e));)e=this.options.beforeWriteToken(e),e&&o.push(e);o.length>0&&this._writeStaticTokens(o),r&&this._handleScriptToken(e),n&&this._handleStyleToken(e)},t.prototype._writeStaticTokens=function(t){var e=this._buildChunk(t);return e.actual?(e.html=this.proxyHistory+e.actual,this.proxyHistory+=e.proxy,this.proxyRoot.innerHTML=e.html,h&&(e.proxyInnerHTML=this.proxyRoot.innerHTML),this._walkChunk(),h&&(e.actualInnerHTML=this.root.innerHTML),e):null},t.prototype._buildChunk=function(t){for(var e=this.actuals.length,r=[],n=[],o=[],i=t.length,a=0;a<i;a++){var s=t[a],u=s.toString();if(r.push(u),s.attrs){if(!/^noscript$/i.test(s.tagName)){var c=e++;n.push(u.replace(/(\/?>)/," "+d+"id="+c+" $1")),s.attrs.id!==m&&s.attrs.id!==y&&o.push("atomicTag"===s.type?"":"<"+s.tagName+" "+d+"proxyof="+c+(s.unary?" />":">"))}}else n.push(u),o.push("endTag"===s.type?u:"")}return{"tokens":t,"raw":r.join(""),"actual":n.join(""),"proxy":o.join("")}},t.prototype._walkChunk=function(){for(var t=void 0,e=[this.proxyRoot];f.existy(t=e.shift());){var r=1===t.nodeType,n=r&&a(t,"proxyof");if(!n){r&&(this.actuals[a(t,"id")]=t,s(t,"id"));var o=t.parentNode&&a(t.parentNode,"proxyof");o&&this.actuals[o].appendChild(t)}e.unshift.apply(e,f.toArray(t.childNodes))}},t.prototype._handleScriptToken=function(t){var e=this,r=this.parser.clear();r&&this.writeQueue.unshift(r),t.src=t.attrs.src||t.attrs.SRC,t=this.options.beforeWriteToken(t),t&&(t.src&&this.scriptStack.length?this.deferredRemote=t:this._onScriptStart(t),this._writeScriptToken(t,function(){e._onScriptDone(t)}))},t.prototype._handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",t=this.options.beforeWriteToken(t),t&&this._writeStyleToken(t),e&&this.write()},t.prototype._writeStyleToken=function(t){var e=this._buildStyle(t);this._insertCursor(e,y),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},t.prototype._buildStyle=function(t){var e=this.doc.createElement(t.tagName);return e.setAttribute("type",t.type),f.eachKey(t.attrs,function(t,r){e.setAttribute(t,r)}),e},t.prototype._insertCursor=function(t,e){this._writeImpl('<span id="'+e+'"/>');var r=this.doc.getElementById(e);r&&r.parentNode.replaceChild(t,r)},t.prototype._onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},t.prototype._onScriptDone=function(t){return t!==this.scriptStack[0]?void this.options.error({"msg":"Bad script nesting or script finished twice"}):(this.scriptStack.shift(),this.write.apply(this,t.outerWrites),void(!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)))},t.prototype._writeScriptToken=function(t,e){var r=this._buildScript(t),n=this._shouldRelease(r),o=this.options.afterAsync;t.src&&(r.src=t.src,this._scriptLoadHandler(r,n?o:function(){e(),o()}));try{this._insertCursor(r,m),r.src&&!n||e()}catch(t){this.options.error(t),e()}},t.prototype._buildScript=function(t){var e=this.doc.createElement(t.tagName);return f.eachKey(t.attrs,function(t,r){e.setAttribute(t,r)}),t.content&&(e.text=t.content),e},t.prototype._scriptLoadHandler=function(t,e){function r(){t=t.onload=t.onreadystatechange=t.onerror=null}function n(){r(),null!=e&&e(),e=null}function o(t){r(),a(t),null!=e&&e(),e=null}function i(t,e){var r=t["on"+e];null!=r&&(t["_on"+e]=r)}var a=this.options.error;i(t,"load"),i(t,"error"),u(t,{"onload":function(){if(t._onload)try{t._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){o({"msg":"onload handler failed "+e+" @ "+t.src})}n()},"onerror":function(){if(t._onerror)try{t._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){return void o({"msg":"onerror handler failed "+e+" @ "+t.src})}o({"msg":"remote script failed "+t.src})},"onreadystatechange":function(){/^(loaded|complete)$/.test(t.readyState)&&n()}})},t.prototype._shouldRelease=function(t){var e=/^script$/i.test(t.nodeName);return!e||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},t}();e["default"]=g},function(t,e,r){!function(e,r){t.exports=r()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={"exports":{},"id":n,"loaded":!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=r(1),i=n(o);t.exports=i["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0;var a=r(2),s=o(a),u=r(3),c=o(u),l=r(6),p=n(l),f=r(5),h={"comment":/^<!--/,"endTag":/^<\//,"atomicTag":/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,"startTag":/^</,"chars":/^[^<]/},d=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.stream=r;var o=!1,a={};for(var u in s)s.hasOwnProperty(u)&&(n.autoFix&&(a[u+"Fix"]=!0),o=o||a[u+"Fix"]);o?(this._readToken=(0,p["default"])(this,a,function(){return e._readTokenImpl()}),this._peekToken=(0,p["default"])(this,a,function(){return e._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}return t.prototype.append=function(t){this.stream+=t},t.prototype.prepend=function(t){this.stream=t+this.stream},t.prototype._readTokenImpl=function(){var t=this._peekTokenImpl();if(t)return this.stream=this.stream.slice(t.length),t},t.prototype._peekTokenImpl=function(){for(var t in h)if(h.hasOwnProperty(t)&&h[t].test(this.stream)){var e=c[t](this.stream);if(e)return"startTag"===e.type&&/script|style/i.test(e.tagName)?null:(e.text=this.stream.substr(0,e.length),e)}},t.prototype.peekToken=function(){return this._peekToken()},t.prototype.readToken=function(){return this._readToken()},t.prototype.readTokens=function(t){for(var e=void 0;e=this.readToken();)if(t[e.type]&&t[e.type](e)===!1)return},t.prototype.clear=function(){var t=this.stream;return this.stream="",t},t.prototype.rest=function(){return this.stream},t}();e["default"]=d,d.tokenToString=function(t){return t.toString()},d.escapeAttributes=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=(0,f.escapeQuotes)(t[r],null));return e},d.supports=s;for(var y in s)s.hasOwnProperty(y)&&(d.browserHasFlaw=d.browserHasFlaw||!s[y]&&y)},function(t,e){"use strict";e.__esModule=!0;var r=!1,n=!1,o=window.document.createElement("div");try{var i="<P><I></P></I>";o.innerHTML=i,e.tagSoup=r=o.innerHTML!==i}catch(t){e.tagSoup=r=!1}try{o.innerHTML="<P><i><P></P></i></P>",e.selfClose=n=2===o.childNodes.length}catch(t){e.selfClose=n=!1}o=null,e.tagSoup=r,e.selfClose=n},function(t,e,r){"use strict";function n(t){var e=t.indexOf("-->");if(e>=0)return new c.CommentToken(t.substr(4,e-1),e+3)}function o(t){var e=t.indexOf("<");return new c.CharsToken(e>=0?e:t.length)}function i(t){var e=t.indexOf(">");if(e!==-1){var r=t.match(l.startTag);if(r){var n=function(){var t={},e={},n=r[2];return r[2].replace(l.attr,function(r,o){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(t[arguments[5]]="",e[arguments[5]]=!0):t[o]=arguments[2]||arguments[3]||arguments[4]||l.fillAttr.test(o)&&o||"":t[o]="",n=n.replace(r,"")}),{"v":new c.StartTagToken(r[1],r[0].length,t,e,(!!r[3]),n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))}}();if("object"===("undefined"==typeof n?"undefined":u(n)))return n.v}}}function a(t){var e=i(t);if(e){var r=t.slice(e.length);if(r.match(new RegExp("</\\s*"+e.tagName+"\\s*>","i"))){var n=r.match(new RegExp("([\\s\\S]*?)</\\s*"+e.tagName+"\\s*>","i"));if(n)return new c.AtomicTagToken(e.tagName,n[0].length+e.length,e.attrs,e.booleanAttrs,n[1])}}}function s(t){var e=t.match(l.endTag);if(e)return new c.EndTagToken(e[1],e[0].length)}e.__esModule=!0;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.comment=n,e.chars=o,e.startTag=i,e.atomicTag=a,e.endTag=s;var c=r(4),l={"startTag":/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,"endTag":/^<\/([\-A-Za-z0-9_]+)[^>]*>/,"attr":/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,"fillAttr":/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i}},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0,e.EndTagToken=e.AtomicTagToken=e.StartTagToken=e.TagToken=e.CharsToken=e.CommentToken=e.Token=void 0;var o=r(5),i=(e.Token=function t(e,r){n(this,t),this.type=e,this.length=r,this.text=""},e.CommentToken=function(){function t(e,r){n(this,t),this.type="comment",this.length=r||(e?e.length:0),this.text="",this.content=e}return t.prototype.toString=function(){return"<!--"+this.content},t}(),e.CharsToken=function(){function t(e){n(this,t),this.type="chars",this.length=e,this.text=""}return t.prototype.toString=function(){return this.text},t}(),e.TagToken=function(){function t(e,r,o,i,a){n(this,t),this.type=e,this.length=o,this.text="",this.tagName=r,this.attrs=i,this.booleanAttrs=a,this.unary=!1,this.html5Unary=!1}return t.formatTag=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r="<"+t.tagName;for(var n in t.attrs)if(t.attrs.hasOwnProperty(n)){r+=" "+n;var i=t.attrs[n];"undefined"!=typeof t.booleanAttrs&&"undefined"!=typeof t.booleanAttrs[n]||(r+='="'+(0,o.escapeQuotes)(i)+'"')}return t.rest&&(r+=" "+t.rest),r+=t.unary&&!t.html5Unary?"/>":">",void 0!==e&&null!==e&&(r+=e+"</"+t.tagName+">"),r},t}());e.StartTagToken=function(){function t(e,r,o,i,a,s){n(this,t),this.type="startTag",this.length=r,this.text="",this.tagName=e,this.attrs=o,this.booleanAttrs=i,this.html5Unary=!1,this.unary=a,this.rest=s}return t.prototype.toString=function(){return i.formatTag(this)},t}(),e.AtomicTagToken=function(){function t(e,r,o,i,a){n(this,t),this.type="atomicTag",this.length=r,this.text="",this.tagName=e,this.attrs=o,this.booleanAttrs=i,this.unary=!1,this.html5Unary=!1,this.content=a}return t.prototype.toString=function(){return i.formatTag(this,this.content)},t}(),e.EndTagToken=function(){function t(e,r){n(this,t),this.type="endTag",this.length=r,this.text="",this.tagName=e}return t.prototype.toString=function(){return"</"+this.tagName+">"},t}()},function(t,e){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t?t.replace(/([^"]*)"/g,function(t,e){return/\\/.test(e)?e+'"':e+'\\"'}):e}e.__esModule=!0,e.escapeQuotes=r},function(t,e){"use strict";function r(t){return t&&"startTag"===t.type&&(t.unary=s.test(t.tagName)||t.unary,t.html5Unary=!/\/>$/.test(t.text)),t}function n(t,e){var n=t.stream,o=r(e());return t.stream=n,o}function o(t,e){var r=e.pop();t.prepend("</"+r.tagName+">")}function i(){var t=[];return t.last=function(){return this[this.length-1]},t.lastTagNameEq=function(t){var e=this.last();return e&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},t.containsTagName=function(t){for(var e,r=0;e=this[r];r++)if(e.tagName===t)return!0;return!1},t}function a(t,e,a){function s(){var e=n(t,a);e&&l[e.type]&&l[e.type](e)}var c=i(),l={"startTag":function(r){var n=r.tagName;"TR"===n.toUpperCase()&&c.lastTagNameEq("TABLE")?(t.prepend("<TBODY>"),s()):e.selfCloseFix&&u.test(n)&&c.containsTagName(n)?c.lastTagNameEq(n)?o(t,c):(t.prepend("</"+r.tagName+">"),s()):r.unary||c.push(r)},"endTag":function(r){var n=c.last();n?e.tagSoupFix&&!c.lastTagNameEq(r.tagName)?o(t,c):c.pop():e.tagSoupFix&&(a(),s())}};return function(){return s(),r(a())}}e.__esModule=!0,e["default"]=a;var s=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i}])})},function(t,e){"use strict";function r(t){return void 0!==t&&null!==t}function n(t){return"function"==typeof t}function o(t,e,r){var n=void 0,o=t&&t.length||0;for(n=0;n<o;n++)e.call(r,t[n],n)}function i(t,e,r){for(var n in t)t.hasOwnProperty(n)&&e.call(r,n,t[n])}function a(t,e){return t=t||{},i(e,function(e,n){r(t[e])||(t[e]=n)}),t}function s(t){try{return Array.prototype.slice.call(t)}catch(r){var e=function(){var e=[];return o(t,function(t){e.push(t)}),{"v":e}}();if("object"===("undefined"==typeof e?"undefined":f(e)))return e.v}}function u(t){return t[t.length-1]}function c(t,e){return!(!t||"startTag"!==t.type&&"atomicTag"!==t.type||!("tagName"in t))&&!!~t.tagName.toLowerCase().indexOf(e)}function l(t){return c(t,"script")}function p(t){return c(t,"style")}e.__esModule=!0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.existy=r,e.isFunction=n,e.each=o,e.eachKey=i,e.defaults=a,e.toArray=s,e.last=u,e.isTag=c,e.isScript=l,e.isStyle=p}])});;LazyHTML = (function() {
	'use strict';
console.log('Powered by LazyHTML: https://github.com/Niresh12495/LazyHTML ```Lazy Load Ads, Images, Widgets, CSS, JS and any HTML```');	
	var debug = false;
	if(document.currentScript.getAttribute('debug') !== null) {
		var debug = true;
	} 
	var config = {
		containerElement: 'div',
		containerClass: 'lazyhtml'
	};
	var startTime,
		timeToComplete;
	var counter = counter || 1;
	/**
	 * Utility functions
	 */
	''.trim || (String.prototype.trim = function() {
		return this.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
	});

	function log() {
		if(debug === true && window.console) {
			// Only run on the first time through - reset this function to the appropriate console.log helper
			if(Function.prototype.bind) {
				log = Function.prototype.bind.call(console.log, console);
			} else {
				log = function() {
					Function.prototype.apply.call(console.log, console, arguments);
				};
			}
			log.apply(this, arguments);
		}
	}
	// Debounce source: https://github.com/rhysbrettbowen/debounce
	/**
	 * @license
	 * 
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2013 Rhys Brett-Bowen
	 */
	var debounce = function(func, wait) {
		// we need to save these in the closure
		var timeout, args, context, timestamp;
		return function() {
			// save details of latest call
			context = this;
			args = [].slice.call(arguments, 0);
			timestamp = new Date();
			// this is where the magic happens
			var later = function() {
				// how long ago was the last call
				var last = (new Date()) - timestamp;
				// if the latest call was less that the wait period ago
				// then we reset the timeout to wait for the difference
				if(last < wait) {
					timeout = setTimeout(later, wait - last);
					// or if not we can null out the timer and run the latest
				} else {
					timeout = null;
					func.apply(context, args);
				}
			};
			// we only need to set the timer now if one isn't already running
			if(!timeout) {
				timeout = setTimeout(later, wait);
			}
		}
	};

	function addEvent(evnt, elem, func) {
		if(elem.addEventListener) // W3C DOM
			elem.addEventListener(evnt, func, false);
		else if(elem.attachEvent) { // IE DOM
			elem.attachEvent("on" + evnt, func);
		} else { // No much to do
			elem["on" + evnt] = func;
		}
	}
	/// Inter
	var el,
		adScripts,
		lazyAdEl,
		lazyAdElType,
		elWidth,
		elHeight,
		reqAdWidth,
		reqAdHeight,
		mq,
		sizeReqFulfilled,
		isLoaded;

	function lazyhtmlloader(target, onvisible, rootmarginvariable) {
		// log(onvisible);
		if(onvisible === true) {
			var rootMarginValue = "0%";
	//		log("Onvisible Margin True");
		} else if(typeof rootmarginvariable === 'undefined' || rootmarginvariable === null) {
			var rootMarginValue = "100%"; // Default Value
		//	log("Root Margin Value Undefined, Using Default Value");
			var isMobile = /Mobile/i.test(navigator.userAgent) || false;
		//	log("Is Mobile " + isMobile);
			if(isMobile) {
				var rootMarginValue = "175%";
			} else {
				var rootMarginValue = "125%";
			}
		} else {
			var rootMarginValue = rootmarginvariable + "%";
		}
		var thresholdvalue = rootMarginValue;
		rootMarginValue = '0%' + ' ' + '0%' + ' ' + rootMarginValue + ' ' + '0%';
		var io = new IntersectionObserver(function(entries, observer) {
			entries.forEach(function(entry) {
				// reset timer
				startTime = new Date().getTime();
				if(entry.isIntersecting) {
					var element = entry.target;
					mq = element.getAttribute('data-matchmedia') || false;
					reqAdWidth = parseInt(element.getAttribute('data-adwidth'), 0) || false;
					reqAdHeight = parseInt(element.getAttribute('data-adheight'), 0) || false;
					adScripts = findAdScripts(element);
					for(var i = 0; i < adScripts.length; i++) {
						lazyAdEl = adScripts[i];
						isLoaded = (element.getAttribute('data-lazyhtml-loaded') === "true");
						if(reqAdWidth || reqAdHeight) {
							elWidth = element.offsetWidth;
							elHeight = element.offsetHeight;
							sizeReqFulfilled = true;
							if(reqAdWidth && (reqAdWidth > elWidth)) sizeReqFulfilled = false;
							if(reqAdHeight && (reqAdHeight > elHeight)) sizeReqFulfilled = false;
							if(sizeReqFulfilled === false) {
								// log('Lazy-loaded container dimensions fulfilment not met.', reqAdWidth, reqAdHeight, elWidth, elHeight, element, lazyAdEl);
								if(isLoaded) {
									unloadAds(element);
								}
								break;
							}
						}
						if(mq !== false && matchMedia(mq).matches === false) {
							// log('Lazy-loaded Ad media-query fulfilment not met.', element, lazyAdEl);
							if(isLoaded) {
								unloadAds(element);
							}
							break;
						}
						if(!isLoaded) {
							log('  ')
							log('*** Preparing to Lazy Load HTML Element with Intersection Observer ***');
							log('Threshold Value is ' + thresholdvalue);
							adReplace(element, lazyAdEl.innerHTML, counter);
							// stop the clock…
							timeToComplete = (new Date().getTime() - startTime);
							timeToComplete = '~' + timeToComplete + 'ms';
							log('Lazy-loaded count: ', counter, timeToComplete);
							counter++;
							log('*** Lazy Loaded HTML Element with Intersection Observer ***');
							log('  ')
						}
						return counter;
					}
					observer.disconnect();
				}
			});
		}, {
			//  root: null,
			rootMargin: rootMarginValue,
			threshold: 0
		});
		// Delay works when trackVisibility is true, Delay needs to be at-least 100,       delay: 100
		//      trackVisibility: true,
		//  delay: 100
		io.observe(target);
	};

	function instantload(target) {
		// reset timer
		startTime = new Date().getTime();
		mq = target.getAttribute('data-matchmedia') || false;
		reqAdWidth = parseInt(target.getAttribute('data-adwidth'), 0) || false;
		reqAdHeight = parseInt(target.getAttribute('data-adheight'), 0) || false;
		adScripts = findAdScripts(target);
		for(var i = 0; i < adScripts.length; i++) {
			lazyAdEl = adScripts[i];
			isLoaded = (target.getAttribute('data-lazyhtml-loaded') === "true");
			if(reqAdWidth || reqAdHeight) {
				elWidth = target.offsetWidth;
				elHeight = target.offsetHeight;
				sizeReqFulfilled = true;
				if(reqAdWidth && (reqAdWidth > elWidth)) sizeReqFulfilled = false;
				if(reqAdHeight && (reqAdHeight > elHeight)) sizeReqFulfilled = false;
				if(sizeReqFulfilled === false) {
					// log('Lazy-loaded container dimensions fulfilment not met.', reqAdWidth, reqAdHeight, elWidth, elHeight, target, lazyAdEl);
					if(isLoaded) {
						unloadAds(target);
					}
					break;
				}
			}
			if(mq !== false && matchMedia(mq).matches === false) {
				// log('Lazy-loaded Ad media-query fulfilment not met.', target, lazyAdEl);
				if(isLoaded) {
					unloadAds(target);
				}
				break;
			}
			if(!isLoaded) {
				log(' ');
				log('*** Preparing to Eager Load HTML Element ***');
				adReplace(target, lazyAdEl.innerHTML, counter);
				// stop the clock…
				timeToComplete = (new Date().getTime() - startTime);
				timeToComplete = '~' + timeToComplete + 'ms';
				log('Lazy-loaded count: ', counter, timeToComplete);
				counter++;
				log('*** Eager Loaded HTML Element ***');
				log(' ');
			}
			return counter;
		}
		// finished
	}
	// Internals
	function find(tagName, className, context) {
		var results = [],
			selector, node, i, isLazyAd, classListSupported, querySelectorSupported,
			context = context || document;
		classListSupported = 'classList' in document.createElement("_"),
			querySelectorSupported = 'querySelectorAll' in document;
		if(querySelectorSupported) {
			selector = tagName;
			selector += className ? '.' + className : '';
			results = context.querySelectorAll(selector);
		} else {
			q = context.getElementsByTagName(tagName);
			for(i = 0; i < q.length; i++) {
				node = q[i];
				if(className === false) {
					results.push(node);
				} else {
					if(classListSupported) {
						if(node.classList.contains(className)) {
							results.push(node);
						}
					} else {
						if(node.className && node.className.split(/\s/).indexOf(className) !== -1) {
							results.push(node);
						}
					}
				}
			}
		}
		return results;
	};

	function findAdContainers(root) {
		var containers = find(config.containerElement, config.containerClass),
			node,
			isLazyAd = false,
			results = [];
		for(var i = 0; i < containers.length; i++) {
			node = containers[i];
			isLazyAd = (node.getAttribute('data-lazyhtml') !== null);
			if(isLazyAd === true) {
				results.push(node);
			}
		}
		return results;
	};

	function findAdScripts(root) {
		var ads = find('script', false, root),
			node,
			type,
			results = [];
		for(var i = 0; i < ads.length; i++) {
			node = ads[i];
			type = node.getAttribute('type');
			if(type && type === 'text/lazyhtml') {
				results.push(node);
			}
		}
		return results;
	};

	function stripCommentBlock(str) {
		// trim whitespace
		str = str.replace(/^\s+|\s+$/g, '');
		return str.replace('<!--', '').replace('-->', '').trim();
	};

	function adReplace(el, text, counter) {
		var node, target;
		log('Injecting Element', el);
		var logelement = el;
		text = stripCommentBlock(text);
		setTimeout(function() {
			postscribe(el, text, {
				releaseAsync: true,
				error: function() {
					console.info('Some error occurred in rendering LazyHTML Block ' + counter +' : ', el);
				}
			});
		}, 0);
		// set the loaded flag
		el.setAttribute('data-lazyhtml-loaded', true);
	};

	function processAll(adContainers) {
		var supportsIntersectionObserver = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype && "isIntersecting" in window.IntersectionObserverEntry.prototype;
		for(var x = 0; x < adContainers.length; x++) {
			el = adContainers[x];
			if((!supportsIntersectionObserver)) {
				// No Intersection observer
				instantload(el);
	//			   log("No Intersection Observer");
			} else if(el.getAttribute('eager') !== null) {
				instantload(el);
				// log("Instant Loaded");
			}
			// Intersection Observer Available
			else if(el.getAttribute('onvisible') !== null) {
				lazyhtmlloader(el, true);
		//		log("Observer available, But Onvisible");
			} else if(el.getAttribute('threshold') !== null) {
				var thresholdvariable = el.getAttribute('threshold');
				if(!isNaN(thresholdvariable)) {
					lazyhtmlloader(el, false, el.getAttribute('threshold'));
		//			log("Observer available, Using threshold Value " + thresholdvariable);
				} else {
					lazyhtmlloader(el, false);
		//			log(thresholdvariable + ' Is not an Integer');
				}
			} else {
				lazyhtmlloader(el, false);
			//	log("Observer available, Using Default Values");
			}
		}
	};

	function unloadAds(el) {
		log('Unloading Ad:', el);
		var childNodes = el.getElementsByTagName('*');
		while(childNodes) {
			var child = childNodes[childNodes.length - 1];
			if(child.nodeName.toLowerCase() === 'script' && child.type === 'text/lazyhtml') {
				// dont want to remove the lazy-loaded script
				break;
			} else {
				child.parentNode.removeChild(child);
			}
		}
		el.setAttribute('data-lazyhtml-loaded', "false");
	}

	function init() {
		var adContainers, counter = counter || 0;
		// find all lazyads
		adContainers = findAdContainers();
		// process/replace/unload
		if(adContainers && adContainers.length > 0) {
			counter = processAll(adContainers);
		}
	};
	// dependency on ready.js
	domreadylazyhtml(function() {
		init();
		// watch the windows resize event
		addEvent('resize', window, debounce(function(e) {
			init();
		}, 250));
		var oldXHR = window.XMLHttpRequest;

		function newXHR() {
			var realXHR = new oldXHR();
			realXHR.addEventListener("readystatechange", function() {
				if(realXHR.readyState == 4 && realXHR.status == 200) {
					setTimeout(function() {
						init();
					}, 100);
				}
			}, false);
			return realXHR;
		}
		window.XMLHttpRequest = newXHR;
	});
})();