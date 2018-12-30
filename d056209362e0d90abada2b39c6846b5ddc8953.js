window.Modernizr=function(r,d,a){function n(e){h.cssText=e}function i(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var n in e){var r=e[n];if(!o(r,"-")&&h[r]!==a)return"pfx"!=t||r}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+b.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):function(e,t,n){for(var r in e){var o=t[e[r]];if(o!==a)return!1===n?e[r]:i(o,"function")?o.bind(n||t):o}return!1}(o=(e+" "+w.join(r+" ")+r).split(" "),t,n)}var e,s,l,f={},m=d.documentElement,p="modernizr",t=d.createElement(p),h=t.style,v=":)",g=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",b=y.split(" "),w=y.toLowerCase().split(" "),E="http://www.w3.org/2000/svg",x={},C=[],k=C.slice,T=function(e,t,n,r){var o,a,i,c,u=d.createElement("div"),s=d.body,l=s||d.createElement("body");if(parseInt(n,10))for(;n--;)(i=d.createElement("div")).id=r?r[n]:p+(n+1),u.appendChild(i);return o=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),u.id=p,(s?u:l).innerHTML+=o,l.appendChild(u),s||(l.style.background="",l.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(l)),a=t(u,e),s?u.parentNode.removeChild(u):(l.parentNode.removeChild(l),m.style.overflow=c),!!a},S=(l={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},function(e,t){t=t||d.createElement(l[e]||"div");var n=(e="on"+e)in t;return n||(t.setAttribute||(t=d.createElement("div")),t.setAttribute&&t.removeAttribute&&(t.setAttribute(e,""),n=i(t[e],"function"),i(t[e],"undefined")||(t[e]=a),t.removeAttribute(e))),t=null,n}),j={}.hasOwnProperty;for(var P in s=i(j,"undefined")||i(j.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return j.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(r){var o=this;if("function"!=typeof o)throw new TypeError;var a=k.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=o.prototype;var t=new e,n=o.apply(t,a.concat(k.call(arguments)));return Object(n)===n?n:t}return o.apply(r,a.concat(k.call(arguments)))};return i}),x.flexbox=function(){return u("flexWrap")},x.flexboxlegacy=function(){return u("boxDirection")},x.touch=function(){var t;return"ontouchstart"in r||r.DocumentTouch&&d instanceof DocumentTouch?t=!0:T(["@media (",g.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){t=9===e.offsetTop}),t},x.rgba=function(){return n("background-color:rgba(150,255,150,.5)"),o(h.backgroundColor,"rgba")},x.hsla=function(){return n("background-color:hsla(120,40%,100%,.5)"),o(h.backgroundColor,"rgba")||o(h.backgroundColor,"hsla")},x.multiplebgs=function(){return n("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(h.background)},x.backgroundsize=function(){return u("backgroundSize")},x.borderradius=function(){return u("borderRadius")},x.objectfit=function(){return u("objectFit")},x.boxshadow=function(){return u("boxShadow")},x.textshadow=function(){return""===d.createElement("div").style.textShadow},x.opacity=function(){return e="opacity:.55",n(g.join(e+";")+(t||"")),/^0.55$/.test(h.opacity);var e,t},x.cssanimations=function(){return u("animationName")},x.csscolumns=function(){return u("columnCount")},x.cssgradients=function(){var e="background-image:";return n((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+g.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),o(h.backgroundImage,"gradient")},x.cssreflections=function(){return u("boxReflect")},x.csstransforms=function(){return!!u("transform")},x.csstransforms3d=function(){var n=!!u("perspective");return n&&"webkitPerspective"in m.style&&T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,t){n=9===e.offsetLeft&&3===e.offsetHeight}),n},x.csstransitions=function(){return u("transition")},x.generatedcontent=function(){var t;return T(["#",p,"{font:0/0 a}#",p,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=3<=e.offsetHeight}),t},x.video=function(){var e=d.createElement("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return t},x.audio=function(){var e=d.createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t},x.svg=function(){return!!d.createElementNS&&!!d.createElementNS(E,"svg").createSVGRect},x)s(x,P)&&(e=P.toLowerCase(),f[e]=x[P](),C.push((f[e]?"":"no-")+e));return f.addTest=function(e,t){if("object"==typeof e)for(var n in e)s(e,n)&&f.addTest(n,e[n]);else{if(e=e.toLowerCase(),f[e]!==a)return f;t="function"==typeof t?t():t,m.className+=" "+(t?"":"no-")+e,f[e]=t}return f},n(""),t=null,function(e,u){function s(){var e=p.elements;return"string"==typeof e?e.split(" "):e}function l(e){var t=c[e[r]];return t||(t={},i++,e[r]=i,c[i]=t),t}function d(e,t,n){return t||(t=u),m?t.createElement(e):(n||(n=l(t)),!(r=n.cache[e]?n.cache[e].cloneNode():a.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||o.test(e)||r.tagUrn?r:n.frag.appendChild(r));var r}function t(e){e||(e=u);var t,n,r,o,a,i,c=l(e);return p.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=(o="article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}",a=(r=e).createElement("p"),i=r.getElementsByTagName("head")[0]||r.documentElement,a.innerHTML="x<style>"+o+"</style>",!!i.insertBefore(a.lastChild,i.firstChild))),m||(t=e,(n=c).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return p.shivMethods?d(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+s().join().replace(/[\w\-]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(p,n.frag)),e}var f,m,n=e.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,a=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,r="_html5shiv",i=0,c={};!function(){try{var e=u.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,m=1==e.childNodes.length||function(){u.createElement("a");var e=u.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){m=f=!0}}();var p={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==n.shivCSS,supportsUnknownElements:m,shivMethods:!1!==n.shivMethods,type:"default",shivDocument:t,createElement:d,createDocumentFragment:function(e,t){if(e||(e=u),m)return e.createDocumentFragment();for(var n=(t=t||l(e)).frag.cloneNode(),r=0,o=s(),a=o.length;r<a;r++)n.createElement(o[r]);return n}};e.html5=p,t(u)}(this,d),f._version="2.7.1",f._prefixes=g,f._domPrefixes=w,f._cssomPrefixes=b,f.mq=function(e){var t,n=r.matchMedia||r.msMatchMedia;return n?n(e).matches:(T("@media "+e+" { #"+p+" { position: absolute; } }",function(e){t="absolute"==(r.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),t)},f.hasEvent=S,f.testProp=function(e){return c([e])},f.testAllProps=u,f.testStyles=T,f.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+C.join(" "),f}(this,this.document);