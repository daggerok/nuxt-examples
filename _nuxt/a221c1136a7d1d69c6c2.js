/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{48:function(t,e,r){"use strict";function n(a,b){for(var t in b)a[t]=b[t];return a}var o={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,o=e.children,f=e.parent,data=e.data;data.routerView=!0;for(var h=f.$createElement,l=r.name,d=f.$route,v=f._routerViewCache||(f._routerViewCache={}),y=0,m=!1;f&&f._routerRoot!==f;){var w=f.$vnode?f.$vnode.data:{};w.routerView&&y++,w.keepAlive&&f._directInactive&&f._inactive&&(m=!0),f=f.$parent}if(data.routerViewDepth=y,m){var x=v[l],k=x&&x.component;return k?(x.configProps&&c(k,data,x.route,x.configProps),h(k,data,o)):h()}var R=d.matched[y],component=R&&R.components[l];if(!R||!component)return v[l]=null,h();v[l]={component:component},data.registerRouteInstance=function(t,e){var r=R.instances[l];(e&&r!==t||!e&&r===t)&&(R.instances[l]=e)},(data.hook||(data.hook={})).prepatch=function(t,e){R.instances[l]=e.componentInstance},data.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==R.instances[l]&&(R.instances[l]=t.componentInstance)};var E=R.props&&R.props[l];return E&&(n(v[l],{route:d,configProps:E}),c(component,data,d,E)),h(component,data,o)}};function c(component,data,t,e){var r=data.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(t,e);if(r){r=data.props=n({},r);var o=data.attrs=data.attrs||{};for(var c in r)component.props&&c in component.props||(o[c]=r[c],delete r[c])}}var f=/[!'()*]/g,h=function(t){return"%"+t.charCodeAt(0).toString(16)},l=/%2C/g,d=function(t){return encodeURIComponent(t).replace(f,h).replace(l,",")},v=decodeURIComponent;var y=function(t){return null==t||"object"==typeof t?t:String(t)};function m(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(param){var t=param.replace(/\+/g," ").split("="),r=v(t.shift()),n=t.length>0?v(t.join("=")):null;void 0===e[r]?e[r]=n:Array.isArray(e[r])?e[r].push(n):e[r]=[e[r],n]})),e):e}function w(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return d(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(d(e)):n.push(d(e)+"="+d(t)))})),n.join("&")}return d(e)+"="+d(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var x=/\/?$/;function k(t,e,r,n){var o=n&&n.options.stringifyQuery,c=e.query||{};try{c=R(c)}catch(t){}var f={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:c,params:e.params||{},fullPath:O(e,o),matched:t?A(t):[]};return r&&(f.redirectedFrom=O(r,o)),Object.freeze(f)}function R(t){if(Array.isArray(t))return t.map(R);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=R(t[r]);return e}return t}var E=k(null,{path:"/"});function A(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function O(t,e){var path=t.path,r=t.query;void 0===r&&(r={});var n=t.hash;return void 0===n&&(n=""),(path||"/")+(e||w)(r)+n}function C(a,b){return b===E?a===b:!!b&&(a.path&&b.path?a.path.replace(x,"")===b.path.replace(x,"")&&a.hash===b.hash&&_(a.query,b.query):!(!a.name||!b.name)&&(a.name===b.name&&a.hash===b.hash&&_(a.query,b.query)&&_(a.params,b.params)))}function _(a,b){if(void 0===a&&(a={}),void 0===b&&(b={}),!a||!b)return a===b;var t=Object.keys(a),e=Object.keys(b);return t.length===e.length&&t.every((function(t){var e=a[t],r=b[t];return null==e||null==r?e===r:"object"==typeof e&&"object"==typeof r?_(e,r):String(e)===String(r)}))}function j(t,base,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return base+t;var n=base.split("/");e&&n[n.length-1]||n.pop();for(var o=t.replace(/^\//,"").split("/"),i=0;i<o.length;i++){var c=o[i];".."===c?n.pop():"."!==c&&n.push(c)}return""!==n[0]&&n.unshift(""),n.join("/")}function S(path){return path.replace(/\/\//g,"/")}var L=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},$=K,P=V,T=function(t,e){return F(V(t,e),e)},U=F,I=J,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function V(t,e){for(var r,n=[],o=0,c=0,path="",f=e&&e.delimiter||"/";null!=(r=M.exec(t));){var h=r[0],l=r[1],d=r.index;if(path+=t.slice(c,d),c=d+h.length,l)path+=l[1];else{var v=t[c],y=r[2],m=r[3],w=r[4],x=r[5],k=r[6],R=r[7];path&&(n.push(path),path="");var E=null!=y&&null!=v&&v!==y,A="+"===k||"*"===k,O="?"===k||"*"===k,C=r[2]||f,pattern=w||x;n.push({name:m||o++,prefix:y||"",delimiter:C,optional:O,repeat:A,partial:E,asterisk:!!R,pattern:pattern?N(pattern):R?".*":"[^"+H(C)+"]+?"})}}return c<t.length&&(path+=t.substr(c)),path&&n.push(path),n}function B(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t,e){for(var r=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(r[i]=new RegExp("^(?:"+t[i].pattern+")$",D(e)));return function(e,n){for(var path="",data=e||{},o=(n||{}).pretty?B:encodeURIComponent,i=0;i<t.length;i++){var c=t[i];if("string"!=typeof c){var f,h=data[c.name];if(null==h){if(c.optional){c.partial&&(path+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(L(h)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var l=0;l<h.length;l++){if(f=o(h[l]),!r[i].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");path+=(0===l?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?encodeURI(h).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):o(h),!r[i].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');path+=c.prefix+f}}else path+=c}return path}}function H(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function N(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function D(t){return t&&t.sensitive?"":"i"}function J(t,e,r){L(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,c="",i=0;i<t.length;i++){var f=t[i];if("string"==typeof f)c+=H(f);else{var h=H(f.prefix),l="(?:"+f.pattern+")";e.push(f),f.repeat&&(l+="(?:"+h+l+")*"),c+=l=f.optional?f.partial?h+"("+l+")?":"(?:"+h+"("+l+"))?":h+"("+l+")"}}var d=H(r.delimiter||"/"),v=c.slice(-d.length)===d;return n||(c=(v?c.slice(0,-d.length):c)+"(?:"+d+"(?=$))?"),c+=o?"$":n&&v?"":"(?="+d+"|$)",z(new RegExp("^"+c,D(r)),e)}function K(path,t,e){return L(t)||(e=t||e,t=[]),e=e||{},path instanceof RegExp?function(path,t){var e=path.source.match(/\((?!\?)/g);if(e)for(var i=0;i<e.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(path,t)}(path,t):L(path)?function(path,t,e){for(var r=[],i=0;i<path.length;i++)r.push(K(path[i],t,e).source);return z(new RegExp("(?:"+r.join("|")+")",D(e)),t)}(path,t,e):function(path,t,e){return J(V(path,e),t,e)}(path,t,e)}$.parse=P,$.compile=T,$.tokensToFunction=U,$.tokensToRegExp=I;var Q=Object.create(null);function X(path,t,e){t=t||{};try{var r=Q[path]||(Q[path]=$.compile(path));return"string"==typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(t){return""}finally{delete t[0]}}function Y(t,e,r,o){var c="string"==typeof t?{path:t}:t;if(c._normalized)return c;if(c.name){var f=(c=n({},t)).params;return f&&"object"==typeof f&&(c.params=n({},f)),c}if(!c.path&&c.params&&e){(c=n({},c))._normalized=!0;var h=n(n({},e.params),c.params);if(e.name)c.name=e.name,c.params=h;else if(e.matched.length){var l=e.matched[e.matched.length-1].path;c.path=X(l,h,e.path)}else 0;return c}var d=function(path){var t="",e="",r=path.indexOf("#");r>=0&&(t=path.slice(r),path=path.slice(0,r));var n=path.indexOf("?");return n>=0&&(e=path.slice(n+1),path=path.slice(0,n)),{path:path,query:e,hash:t}}(c.path||""),v=e&&e.path||"/",path=d.path?j(d.path,v,r||c.append):v,w=function(t,e,r){void 0===e&&(e={});var n,o=r||m;try{n=o(t||"")}catch(t){n={}}for(var c in e){var f=e[c];n[c]=Array.isArray(f)?f.map(y):y(f)}return n}(d.query,c.query,o&&o.options.parseQuery),x=c.hash||d.hash;return x&&"#"!==x.charAt(0)&&(x="#"+x),{_normalized:!0,path:path,query:w,hash:x}}var W,G=function(){},Z={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function(t){var e=this,r=this.$router,o=this.$route,c=r.resolve(this.to,o,this.append),f=c.location,h=c.route,l=c.href,d={},v=r.options.linkActiveClass,y=r.options.linkExactActiveClass,m=null==v?"router-link-active":v,w=null==y?"router-link-exact-active":y,R=null==this.activeClass?m:this.activeClass,E=null==this.exactActiveClass?w:this.exactActiveClass,A=h.redirectedFrom?k(null,Y(h.redirectedFrom),null,r):h;d[E]=C(o,A),d[R]=this.exact?d[E]:function(t,e){return 0===t.path.replace(x,"/").indexOf(e.path.replace(x,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(o,A);var O=d[E]?this.ariaCurrentValue:null,_=function(t){tt(t)&&(e.replace?r.replace(f,G):r.push(f,G))},j={click:tt};Array.isArray(this.event)?this.event.forEach((function(t){j[t]=_})):j[this.event]=_;var data={class:d},S=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:l,route:h,navigate:_,isActive:d[R],isExactActive:d[E]});if(S){if(1===S.length)return S[0];if(S.length>1||!S.length)return 0===S.length?t():t("span",{},S)}if("a"===this.tag)data.on=j,data.attrs={href:l,"aria-current":O};else{var a=function t(e){var r;if(e)for(var i=0;i<e.length;i++){if("a"===(r=e[i]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(a){a.isStatic=!1;var L=a.data=n({},a.data);for(var $ in L.on=L.on||{},L.on){var P=L.on[$];$ in j&&(L.on[$]=Array.isArray(P)?P:[P])}for(var T in j)T in L.on?L.on[T].push(j[T]):L.on[T]=_;var U=a.data.attrs=n({},a.data.attrs);U.href=l,U["aria-current"]=O}else data.on=j}return t(this.tag,data,this.$slots.default)}};function tt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var et="undefined"!=typeof window;function nt(t,e,r,n){var o=e||[],c=r||Object.create(null),f=n||Object.create(null);t.forEach((function(t){!function t(e,r,n,o,c,f){var path=o.path,h=o.name;0;var l=o.pathToRegexpOptions||{},d=function(path,t,e){e||(path=path.replace(/\/$/,""));if("/"===path[0])return path;if(null==t)return path;return S(t.path+"/"+path)}(path,c,l.strict);"boolean"==typeof o.caseSensitive&&(l.sensitive=o.caseSensitive);var v={path:d,regex:ot(d,l),components:o.components||{default:o.component},instances:{},name:h,parent:c,matchAs:f,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach((function(o){var c=f?S(f+"/"+o.path):void 0;t(e,r,n,o,v,c)}));r[v.path]||(e.push(v.path),r[v.path]=v);if(void 0!==o.alias)for(var y=Array.isArray(o.alias)?o.alias:[o.alias],i=0;i<y.length;++i){0;var m={path:y[i],children:o.children};t(e,r,n,m,c,v.path||"/")}h&&(n[h]||(n[h]=v))}(o,c,f,t)}));for(var i=0,h=o.length;i<h;i++)"*"===o[i]&&(o.push(o.splice(i,1)[0]),h--,i--);return{pathList:o,pathMap:c,nameMap:f}}function ot(path,t){return $(path,[],t)}function it(t,e){var r=nt(t),n=r.pathList,o=r.pathMap,c=r.nameMap;function f(t,r,f){var h=Y(t,r,!1,e),d=h.name;if(d){var v=c[d];if(!v)return l(null,h);var y=v.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof h.params&&(h.params={}),r&&"object"==typeof r.params)for(var m in r.params)!(m in h.params)&&y.indexOf(m)>-1&&(h.params[m]=r.params[m]);return h.path=X(v.path,h.params),l(v,h,f)}if(h.path){h.params={};for(var i=0;i<n.length;i++){var path=n[i],w=o[path];if(at(w.regex,h.path,h.params))return l(w,h,f)}}return l(null,h)}function h(t,r){var n=t.redirect,o="function"==typeof n?n(k(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return l(null,r);var h=o,d=h.name,path=h.path,v=r.query,y=r.hash,m=r.params;if(v=h.hasOwnProperty("query")?h.query:v,y=h.hasOwnProperty("hash")?h.hash:y,m=h.hasOwnProperty("params")?h.params:m,d){c[d];return f({_normalized:!0,name:d,query:v,hash:y,params:m},void 0,r)}if(path){var w=function(path,t){return j(path,t.parent?t.parent.path:"/",!0)}(path,t);return f({_normalized:!0,path:X(w,m),query:v,hash:y},void 0,r)}return l(null,r)}function l(t,r,n){return t&&t.redirect?h(t,n||r):t&&t.matchAs?function(t,e,r){var n=f({_normalized:!0,path:X(r,e.params)});if(n){var o=n.matched,c=o[o.length-1];return e.params=n.params,l(c,e)}return l(null,e)}(0,r,t.matchAs):k(t,r,n,e)}return{match:f,addRoutes:function(t){nt(t,n,o,c)}}}function at(t,path,e){var r=path.match(t);if(!r)return!1;if(!e)return!0;for(var i=1,n=r.length;i<n;++i){var o=t.keys[i-1],c="string"==typeof r[i]?decodeURIComponent(r[i]):r[i];o&&(e[o.name||"pathMatch"]=c)}return!0}var ut=et&&window.performance&&window.performance.now?window.performance:Date;function st(){return ut.now().toFixed(3)}var ct=st();function pt(){return ct}function ft(t){return ct=t}var ht=Object.create(null);function lt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=n({},window.history.state);return r.key=pt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",mt),function(){window.removeEventListener("popstate",mt)}}function vt(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var c=function(){var t=pt();if(t)return ht[t]}(),f=o.call(t,e,r,n?c:null);f&&("function"==typeof f.then?f.then((function(t){kt(t,c)})).catch((function(t){0})):kt(f,c))}))}}function yt(){var t=pt();t&&(ht[t]={x:window.pageXOffset,y:window.pageYOffset})}function mt(t){yt(),t.state&&t.state.key&&ft(t.state.key)}function gt(t){return bt(t.x)||bt(t.y)}function wt(t){return{x:bt(t.x)?t.x:window.pageXOffset,y:bt(t.y)?t.y:window.pageYOffset}}function bt(t){return"number"==typeof t}var xt=/^#\d/;function kt(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=xt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var c=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,c={x:bt((r=c).x)?r.x:0,y:bt(r.y)?r.y:0})}else gt(t)&&(e=wt(t))}else n&&gt(t)&&(e=wt(t));e&&window.scrollTo(e.x,e.y)}var Rt,Et=et&&((-1===(Rt=window.navigator.userAgent).indexOf("Android 2.")&&-1===Rt.indexOf("Android 4.0")||-1===Rt.indexOf("Mobile Safari")||-1!==Rt.indexOf("Chrome")||-1!==Rt.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function At(t,e){yt();var r=window.history;try{if(e){var o=n({},r.state);o.key=pt(),r.replaceState(o,"",t)}else r.pushState({key:ft(st())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function Ot(t){At(t,!0)}function Ct(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}var _t={redirected:2,aborted:4,cancelled:8,duplicated:16};function jt(t,e){return Lt(t,e,_t.redirected,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return $t.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function St(t,e){return Lt(t,e,_t.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Lt(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var $t=["params","query","hash"];function Pt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Tt(t,e){return Pt(t)&&t._isRouter&&(null==e||t.type===e)}function qt(t){return function(e,r,n){var o=!1,c=0,f=null;Ut(t,(function(t,e,r,h){if("function"==typeof t&&void 0===t.cid){o=!0,c++;var l,d=Vt((function(e){var o;((o=e).__esModule||Mt&&"Module"===o[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:W.extend(e),r.components[h]=e,--c<=0&&n()})),v=Vt((function(t){var e="Failed to resolve async component "+h+": "+t;f||(f=Pt(t)?t:new Error(e),n(f))}));try{l=t(d,v)}catch(t){v(t)}if(l)if("function"==typeof l.then)l.then(d,v);else{var y=l.component;y&&"function"==typeof y.then&&y.then(d,v)}}})),o||n()}}function Ut(t,e){return It(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function It(t){return Array.prototype.concat.apply([],t)}var Mt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Vt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var Bt=function(t,base){this.router=t,this.base=function(base){if(!base)if(et){var t=document.querySelector("base");base=(base=t&&t.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else base="/";"/"!==base.charAt(0)&&(base="/"+base);return base.replace(/\/$/,"")}(base),this.current=E,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function Ft(t,e,r,n){var o=Ut(t,(function(t,n,o,c){var f=function(t,e){"function"!=typeof t&&(t=W.extend(t));return t.options[e]}(t,e);if(f)return Array.isArray(f)?f.map((function(t){return r(t,n,o,c)})):r(f,n,o,c)}));return It(n?o.reverse():o)}function Ht(t,e){if(e)return function(){return t.apply(e,arguments)}}Bt.prototype.listen=function(t){this.cb=t},Bt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Bt.prototype.onError=function(t){this.errorCbs.push(t)},Bt.prototype.transitionTo=function(t,e,r){var n,o=this;try{n=this.router.match(t,this.current)}catch(t){throw this.errorCbs.forEach((function(e){e(t)})),t}this.confirmTransition(n,(function(){var t=o.current;o.updateRoute(n),e&&e(n),o.ensureURL(),o.router.afterHooks.forEach((function(e){e&&e(n,t)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(n)})))}),(function(t){r&&r(t),t&&!o.ready&&(o.ready=!0,Tt(t,_t.redirected)?o.readyCbs.forEach((function(t){t(n)})):o.readyErrorCbs.forEach((function(e){e(t)})))}))},Bt.prototype.confirmTransition=function(t,e,r){var n,o,c=this,f=this.current,h=function(t){!Tt(t)&&Pt(t)&&(c.errorCbs.length?c.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)},l=t.matched.length-1,d=f.matched.length-1;if(C(t,f)&&l===d&&t.matched[l]===f.matched[d])return this.ensureURL(),h(((o=Lt(n=f,t,_t.duplicated,'Avoided redundant navigation to current location: "'+n.fullPath+'".')).name="NavigationDuplicated",o));var v=function(t,e){var i,r=Math.max(t.length,e.length);for(i=0;i<r&&t[i]===e[i];i++);return{updated:e.slice(0,i),activated:e.slice(i),deactivated:t.slice(i)}}(this.current.matched,t.matched),y=v.updated,m=v.deactivated,w=v.activated,x=[].concat(function(t){return Ft(t,"beforeRouteLeave",Ht,!0)}(m),this.router.beforeHooks,function(t){return Ft(t,"beforeRouteUpdate",Ht)}(y),w.map((function(t){return t.beforeEnter})),qt(w));this.pending=t;var k=function(e,r){if(c.pending!==t)return h(St(f,t));try{e(t,f,(function(e){!1===e?(c.ensureURL(!0),h(function(t,e){return Lt(t,e,_t.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(f,t))):Pt(e)?(c.ensureURL(!0),h(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(h(jt(f,t)),"object"==typeof e&&e.replace?c.replace(e):c.push(e)):r(e)}))}catch(t){h(t)}};Ct(x,k,(function(){var r=[];Ct(function(t,e,r){return Ft(t,"beforeRouteEnter",(function(t,n,o,c){return function(t,e,r,n,o){return function(c,f,h){return t(c,f,(function(t){"function"==typeof t&&n.push((function(){!function t(e,r,n,o){r[n]&&!r[n]._isBeingDestroyed?e(r[n]):o()&&setTimeout((function(){t(e,r,n,o)}),16)}(t,e.instances,r,o)})),h(t)}))}}(t,o,c,e,r)}))}(w,r,(function(){return c.current===t})).concat(c.router.resolveHooks),k,(function(){if(c.pending!==t)return h(St(f,t));c.pending=null,e(t),c.router.app&&c.router.app.$nextTick((function(){r.forEach((function(t){t()}))}))}))}))},Bt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Bt.prototype.setupListeners=function(){},Bt.prototype.teardownListeners=function(){this.listeners.forEach((function(t){t()})),this.listeners=[]};var Nt=function(t){function e(e,base){t.call(this,e,base),this._startLocation=zt(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=Et&&r;n&&this.listeners.push(lt());var o=function(){var r=t.current,o=zt(t.base);t.current===E&&o===t._startLocation||t.transitionTo(o,(function(t){n&&vt(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){At(S(n.base+t.fullPath)),vt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Ot(S(n.base+t.fullPath)),vt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(zt(this.base)!==this.current.fullPath){var e=S(this.base+this.current.fullPath);t?At(e):Ot(e)}},e.prototype.getCurrentLocation=function(){return zt(this.base)},e}(Bt);function zt(base){var path=decodeURI(window.location.pathname);return base&&0===path.toLowerCase().indexOf(base.toLowerCase())&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash}var Dt=function(t){function e(e,base,r){t.call(this,e,base),r&&function(base){var t=zt(base);if(!/^\/#/.test(t))return window.location.replace(S(base+"/#"+t)),!0}(this.base)||Jt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,r=Et&&e;r&&this.listeners.push(lt());var n=function(){var e=t.current;Jt()&&t.transitionTo(Kt(),(function(n){r&&vt(t.router,n,e,!0),Et||Yt(n.fullPath)}))},o=Et?"popstate":"hashchange";window.addEventListener(o,n),this.listeners.push((function(){window.removeEventListener(o,n)}))}},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Xt(t.fullPath),vt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Yt(t.fullPath),vt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Kt()!==e&&(t?Xt(e):Yt(e))},e.prototype.getCurrentLocation=function(){return Kt()},e}(Bt);function Jt(){var path=Kt();return"/"===path.charAt(0)||(Yt("/"+path),!1)}function Kt(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function Qt(path){var t=window.location.href,i=t.indexOf("#");return(i>=0?t.slice(0,i):t)+"#"+path}function Xt(path){Et?At(Qt(path)):window.location.hash=path}function Yt(path){Et?Ot(Qt(path)):window.location.replace(Qt(path))}var Wt=function(t){function e(e,base){t.call(this,e,base),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){e.index=r,e.updateRoute(n)}),(function(t){Tt(t,_t.duplicated)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Bt),Gt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=it(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Et&&!1!==t.fallback,this.fallback&&(e="hash"),et||(e="abstract"),this.mode=e,e){case"history":this.history=new Nt(this,t.base);break;case"hash":this.history=new Dt(this,t.base,this.fallback);break;case"abstract":this.history=new Wt(this,t.base);break;default:0}},Zt={currentRoute:{configurable:!0}};function te(t,e){return t.push(e),function(){var i=t.indexOf(e);i>-1&&t.splice(i,1)}}Gt.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Zt.currentRoute.get=function(){return this.history&&this.history.current},Gt.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardownListeners()})),!this.app){this.app=t;var r=this.history;if(r instanceof Nt||r instanceof Dt){var n=function(t){r.setupListeners(),function(t){var n=r.current,o=e.options.scrollBehavior;Et&&o&&"fullPath"in t&&vt(e,t,n,!1)}(t)};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Gt.prototype.beforeEach=function(t){return te(this.beforeHooks,t)},Gt.prototype.beforeResolve=function(t){return te(this.resolveHooks,t)},Gt.prototype.afterEach=function(t){return te(this.afterHooks,t)},Gt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Gt.prototype.onError=function(t){this.history.onError(t)},Gt.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},Gt.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},Gt.prototype.go=function(t){this.history.go(t)},Gt.prototype.back=function(){this.go(-1)},Gt.prototype.forward=function(){this.go(1)},Gt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Gt.prototype.resolve=function(t,e,r){var n=Y(t,e=e||this.history.current,r,this),o=this.match(n,e),c=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(base,t,e){var path="hash"===e?"#"+t:t;return base?S(base+"/"+path):path}(this.history.base,c,this.mode),normalizedTo:n,resolved:o}},Gt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==E&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Gt.prototype,Zt),Gt.install=function t(e){if(!t.installed||W!==e){t.installed=!0,W=e;var r=function(t){return void 0!==t},n=function(t,e){var i=t.$options._parentVnode;r(i)&&r(i=i.data)&&r(i=i.registerRouteInstance)&&i(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",o),e.component("RouterLink",Z);var c=e.config.optionMergeStrategies;c.beforeRouteEnter=c.beforeRouteLeave=c.beforeRouteUpdate=c.created}},Gt.version="3.4.3",Gt.isNavigationFailure=Tt,Gt.NavigationFailureType=_t,et&&window.Vue&&window.Vue.use(Gt),e.a=Gt}}]);