(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function n(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=na(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var ra={a:!0},sa={};try{sa.__proto__=ra;qa=sa.a;break a}catch(a){}qa=!1}pa=qa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ta=pa;
function t(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(ta)ta(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
function va(){this.B=!1;this.m=null;this.j=void 0;this.i=1;this.o=this.s=0;this.v=this.l=null}
function wa(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
va.prototype.N=function(a){this.j=a};
function xa(a,b){a.l={Qb:b,Wb:!0};a.i=a.s||a.o}
va.prototype.return=function(a){this.l={return:a};this.i=this.o};
function u(a,b,c){a.i=c;return{value:b}}
va.prototype.u=function(a){this.i=a};
function ya(a,b,c){a.s=b;void 0!=c&&(a.o=c)}
function za(a,b){a.i=b;a.s=0}
function Aa(a){a.s=0;var b=a.l.Qb;a.l=null;return b}
function Ba(a){a.v=[a.l];a.s=0;a.o=0}
function Ca(a){var b=a.v.splice(0)[0];(b=a.l=a.l||b)?b.Wb?a.i=a.s||a.o:void 0!=b.u&&a.o<b.u?(a.i=b.u,a.l=null):a.i=a.o:a.i=0}
function Da(a){this.i=new va;this.j=a}
function Ea(a,b){wa(a.i);var c=a.i.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.B=!1,e;var f=e.value}catch(g){return a.i.m=null,xa(a.i,g),Ga(a)}a.i.m=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.B=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,xa(a.i,c)}a.i.B=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Wb)throw b.Qb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m.next,b,a.i.N):(a.i.N(b),b=Ga(a));return b};
this.throw=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m["throw"],b,a.i.N):(xa(a.i,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Da(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return oa});
n("Reflect.setPrototypeOf",function(a){return a?a:ta?function(b,c){try{return ta(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.B=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.o()})}this.i.push(g)};
var e=ea.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.o=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.m(m)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.o)}};
b.prototype.K=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.s(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.T(h,g):this.s(g)};
b.prototype.o=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.P();this.v()};
b.prototype.P=function(){var g=this;e(function(){if(g.G()){var h=ea.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.G=function(){if(this.B)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.v=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.R=function(g){var h=this.m();g.Ua(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(x,v){return"function"==typeof x?function(A){try{m(x(A))}catch(E){q(E)}}:v}
var m,q,r=new b(function(x,v){m=x;q=v});
this.Ua(k(g,m),k(h,q));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ua=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Ua(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function r(A){return function(E){x[A]=E;v--;0==v&&m(x)}}
var x=[],v=0;do x.push(void 0),v++,d(k.value).Ua(r(x.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ia(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ia(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return fa(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ia(h.data_,m))for(h=0;h<q.length;h++){var r=q[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:m,list:q,index:h,entry:r}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.setPrototypeOf",function(a){return a||ta});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||ea});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push(b[d]);return c}});
var Ma=Ma||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){a.sb=void 0;a.getInstance=function(){return a.sb?a.sb:a.sb=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.tq=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},jb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function mb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function nb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ob(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function pb(a){var b=qb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function rb(a){for(var b in a)return!1;return!0}
function sb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function tb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function ub(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function vb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function wb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=wb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.l=a===Cb&&b||""}
Bb.prototype.j=!0;Bb.prototype.i=function(){return this.l};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.l=Eb===Eb?a:"";this.j=!0}
Fb.prototype.toString=function(){return this.l.toString()};
Fb.prototype.i=function(){return this.l.toString()};function Ib(a,b){this.l=b===Jb?a:""}
Ib.prototype.toString=function(){return this.l+""};
Ib.prototype.j=!0;Ib.prototype.i=function(){return this.l.toString()};
function Kb(a){if(a instanceof Ib&&a.constructor===Ib)return a.l;Oa(a);return"type_error:TrustedResourceUrl"}
var Jb={};function Lb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Ib(a,Jb)}
;var Mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Nb(a,b){return a<b?-1:a>b?1:0}
;function Ob(a,b){this.l=b===Pb?a:""}
Ob.prototype.toString=function(){return this.l.toString()};
Ob.prototype.j=!0;Ob.prototype.i=function(){return this.l.toString()};
function Qb(a){if(a instanceof Ob&&a.constructor===Ob)return a.l;Oa(a);return"type_error:SafeUrl"}
var Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Pb={},Sb=new Ob("about:invalid#zClosurez",Pb);function Tb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Tb().indexOf(a)}
;function Ub(){return C("Trident")||C("MSIE")}
function Vb(){return C("Firefox")||C("FxiOS")}
function Wb(){return C("Safari")&&!(Xb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Vb()||C("Silk")||C("Android"))}
function Xb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Yb(){return C("Android")&&!(Xb()||Vb()||C("Opera")||C("Silk"))}
function Zb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function bc(a){var b=Tb();if("Internet Explorer"===a){if(Ub())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=Zb(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Xb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Vb()||"Safari"===a&&Wb()||"Android Browser"===a&&Yb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function cc(a){a=bc(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var dc={};function ec(a){this.l=dc===dc?a:"";this.j=!0}
ec.prototype.i=function(){return this.l.toString()};
ec.prototype.toString=function(){return this.l.toString()};function fc(a,b){b instanceof Ob||b instanceof Ob||(b="object"==typeof b&&b.j?b.i():String(b),Rb.test(b)||(b="about:invalid#zClosurez"),b=new Ob(b,Pb));a.href=Qb(b)}
function gc(a,b){a.rel="stylesheet";a.href=Kb(b).toString();(b=hc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function ic(){return hc("script[nonce]")}
var jc=/^[\w+/_-]+[=]{0,2}$/;function hc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&jc.test(a)?a:"":""}
;function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)rc(a[b],a[b+1],c);return c.join("&")}
function tc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function uc(a,b){var c=2==arguments.length?sc(arguments[1],0):sc(arguments,1);return qc(a,c)}
function vc(a,b){b=tc(b);return qc(a,b)}
function wc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return qc(a,b+c)}
function Ac(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Bc=/#|$/,Cc=/[?&]($|#)/;function Dc(a,b){for(var c=a.search(Bc),d=0,e,f=[];0<=(e=Ac(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Cc,"$1")}
;var Ec={};function Fc(a){if(a!==Ec)throw Error("requires a valid immutable API token");}
;function Gc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Hc(){var a=Tb();if(C("Windows")){var b=/Windows (?:NT|Phone) ([0-9.]+)/;b.exec(a)}else Gc()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):-1!=Tb().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b.exec(a)):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b.exec(a)):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b.exec(a))}
;function Ic(a){Ic[" "](a);return a}
Ic[" "]=function(){};
function Jc(a){var b=Kc;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}
;var Lc=C("Opera"),Mc=Ub(),Nc=C("Edge"),Oc=C("Gecko")&&!(-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Pc=-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"),Qc=C("Android");function Rc(){var a=y.document;return a?a.documentMode:void 0}
var Sc;a:{var Tc="",Uc=function(){var a=Tb();if(Oc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Nc)return/Edge\/([\d\.]+)/.exec(a);if(Mc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Pc)return/WebKit\/(\S+)/.exec(a);if(Lc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Uc&&(Tc=Uc?Uc[1]:"");if(Mc){var Vc=Rc();if(null!=Vc&&Vc>parseFloat(Tc)){Sc=String(Vc);break a}}Sc=Tc}var Wc=Sc,Kc={};
function Xc(){return Jc(function(){for(var a=0,b=Mb(String(Wc)).split("."),c=Mb("9").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Nb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Nb(0==f[2].length,0==g[2].length)||Nb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}return 0<=a})}
var Yc;if(y.document&&Mc){var Zc=Rc();Yc=Zc?Zc:parseInt(Wc,10)||void 0}else Yc=void 0;var $c=Yc;var ad=Gc()||C("iPod"),bd=C("iPad");Yb();Xb();var cd=Wb()&&!(Gc()||C("iPad")||C("iPod"));var dd={},ed=null;
function fd(a,b){Pa(a);void 0===b&&(b=0);if(!ed){ed={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));dd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===ed[h]&&(ed[h]=g)}}}b=dd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var gd="undefined"!==typeof Uint8Array,hd={};var id;function jd(){if(hd!==hd)throw Error("illegal external caller");}
function kd(a){jd();this.ja=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
kd.prototype.isEmpty=function(){return null==this.ja};var ld="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function md(a,b){Object.isFrozen(a)||(ld?a[ld]|=b:void 0!==a.ta?a.ta|=b:Object.defineProperties(a,{ta:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function nd(a){var b;ld?b=a[ld]:b=a.ta;return null==b?0:b}
function od(a){return Array.isArray(a)?!!(nd(a)&1):!1}
function pd(a){md(a,1);return a}
function qd(a){return Array.isArray(a)?!!(nd(a)&2):!1}
function rd(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");md(a,2)}
function sd(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?md(a,8):Object.isFrozen(a)||(ld?a[ld]&=-9:void 0!==a.ta&&(a.ta&=-9))}
;function zd(a){return qd(a.C)}
function Ad(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Bd,Cd=Object.freeze(pd([]));function Dd(a){if(zd(a))throw Error("Cannot mutate an immutable Message");}
var Ed="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Fd(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Gd(a){return a.displayName||a.name||"unknown type name"}
function Hd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Gd(b)+" but got "+(a&&Gd(a.constructor)));return a}
function Id(a,b){var c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function Jd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(gd&&null!=a&&a instanceof Uint8Array)return fd(a);if(a instanceof kd){var b=a.ja;null!=b&&"string"!==typeof b&&(gd&&b instanceof Uint8Array?b=fd(b):(Oa(b),b=null));return null==b?"":a.ja=b}}}return a}
;function Kd(a,b){b=void 0===b?Ld:b;return Md(a,b)}
function Nd(a,b){if(null!=a){if(Array.isArray(a))a=Md(a,b);else if(Ad(a)){var c={},d;for(d in a)c[d]=Nd(a[d],b);a=c}else a=b(a);return a}}
function Md(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Nd(c[d],b);od(a)&&pd(c);return c}
function Od(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Jd(a);return Array.isArray(a)?Kd(a,Od):a}
function Ld(a){if("object"===typeof a){if(gd&&null!=a&&a instanceof Uint8Array)return new Uint8Array(a);if(Array.isArray(a.C)&&a.constructor!==Object)return a.clone()}return a}
;function Pd(a){return a.j||(a.j=a.C[a.l+a.la]={})}
function Qd(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.C[b+a.la]}
function D(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Dd(a);if(b>=a.l||d)return Pd(a)[b]=c,a;void 0!==a.j&&a.l>=a.C.length?(d=a.C.length-1,e=b+a.la,e>=d?(a.C[d]=void 0,a.C[e]=c,a.C.push(a.j)):a.C[e]=c):a.C[b+a.la]=c;void 0!==a.j&&b in a.j&&delete a.j[b];return a}
function Rd(a,b,c,d){c=void 0===c?!0:c;var e=Qd(a,b,d);Array.isArray(e)||(e=Cd);if(zd(a))c&&(rd(e),Object.freeze(e));else if(e===Cd||qd(e))e=pd(e.slice()),D(a,b,e,d);return e}
function Sd(a,b,c){a=Qd(a,b);return null==a?c:a}
function Td(a,b,c){null==c?c=Cd:pd(c);return D(a,b,c)}
function Ud(a,b,c,d){Dd(a);(c=Vd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),D(a,c));return D(a,b,d)}
function Vd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Qd(a,e)&&(0!==c&&D(a,c,void 0,!1,!0),c=e)}return c}
function Wd(a,b,c,d){d=void 0===d?!1:d;var e=d;a.i||(a.i={});var f=a.i[c];if(f)b=f;else if(b=Id(Qd(a,c,e),b))a.i[c]=b,zd(a)&&rd(b.C);if(null==b)return b;zd(b)&&!zd(a)&&(b=b.Bb(),D(a,c,b.C,d),a.i[c]=b);return b}
function Xd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=zd(a),g=a.i[c];d=Rd(a,c,!0,d);var h=f||qd(d);if(!g){g=[];f=f||h;for(var k=0;k<d.length;k++){var m=d[k];f=f||qd(m);m=Id(m,b);void 0!==m&&(g.push(m),h&&rd(m.C))}a.i[c]=g;sd(d,!f)}b=h||e;e=qd(g);b&&!e&&(Object.isFrozen(g)&&(a.i[c]=g=g.slice()),rd(g),Object.freeze(g));!b&&e&&(a.i[c]=g=g.slice());return g}
function Yd(a,b,c,d){d=void 0===d?!1:d;var e=zd(a);b=Xd(a,b,c,d,e);a=Rd(a,c,d);if(!(c=e)&&(c=a)){if(!Array.isArray(a))throw Error("cannot check mutability state of non-array");c=!(nd(a)&8)}if(c){for(c=0;c<b.length;c++)(d=b[c])&&zd(d)&&!e&&(b[c]=b[c].Bb(),a[c]=b[c].C);sd(a,!0)}return b}
function G(a,b,c,d){Dd(a);a.i||(a.i={});null==d?b=d=void 0:b=Hd(d,b).C;a.i[c]=d;return D(a,c,b)}
function Zd(a,b,c,d,e){Dd(a);a.i||(a.i={});null!=e?b=Hd(e,b).C:b=e=void 0;a.i[c]=e;Ud(a,c,d,b)}
function $d(a,b,c,d){Dd(a);if(null!=d){var e=pd([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Hd(d[g],b).C,f=f||qd(e[g]);a.i||(a.i={});a.i[c]=d;sd(e,!f)}else a.i&&(a.i[c]=void 0),e=Cd;return D(a,c,e)}
function ae(a,b,c,d){Dd(a);var e=Xd(a,c,b,void 0,!1);c=null!=d?Hd(d,c):new c;a=Rd(a,b);e.push(c);a.push(c.C);Fc(Ec);zd(c)&&sd(a,!1)}
;function be(a,b,c){a||(a=ce);ce=null;var d=this.constructor.i||0,e=0<d,f=this.constructor.j;a||(a=f?[f]:[]);e&&0<a.length&&Ad(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.la=(f?0:-1)-d;this.i=void 0;this.C=a;a:{d=this.C.length;a=d-1;if(d&&(d=this.C[a],Ad(d))){this.j=d;b=Object.keys(d);0<b.length&&jb(b,isNaN)?this.l=Number.MAX_VALUE:this.l=a-this.la;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.la),this.j=void 0):this.l=Number.MAX_VALUE}if(!e&&this.j&&"g"in this.j)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(c)for(e=0;e<c.length;e++)b=c[e],b<this.l?(b+=this.la,(a=this.C[b])?Array.isArray(a)&&pd(a):this.C[b]=Cd):(a=Pd(this),(d=a[b])?Array.isArray(d)&&pd(d):a[b]=Cd)}
be.prototype.toJSON=function(){var a=this.C;return Bd?a:Kd(a,Od)};
function de(a){Bd=!0;try{return JSON.stringify(a.toJSON(),ee)}finally{Bd=!1}}
be.prototype.clone=function(){var a=Kd(this.C);ce=a;a=new this.constructor(a);ce=null;fe(a,this);return a};
be.prototype.isMutable=function(a){Fc(a);return!zd(this)};
be.prototype.toString=function(){return this.C.toString()};
function ee(a,b){return Jd(b)}
function fe(a,b){b.Ha&&(a.Ha=b.Ha.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Yd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)fe(f[g],e[g])}else(f=Wd(a,e.constructor,g,f))&&fe(f,e)}}}}
var ce;function ge(){be.apply(this,arguments)}
t(ge,be);ge.prototype.Bb=function(){return this};
if(Ed){var he={};Object.defineProperties(ge,(he[Symbol.hasInstance]=Fd(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),he))};function ie(a){var b=this.i,c=this.j;return this.isRepeated?Yd(a,b,c,!0):Wd(a,b,c,!0)}
;function je(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.kb?pd(a.slice()):a,$d(b,0<e.length?e[0].constructor:void 0,c,e)):G(b,a.constructor,c,a):(gd&&d instanceof Uint8Array?e=d.length?new kd(new Uint8Array(d)):id||(id=new kd(null)):(Array.isArray(d)&&(e?rd(d):od(d)&&f.kb&&(d=d.slice())),e=d),D(b,c,e))}
;function I(){ge.apply(this,arguments)}
t(I,ge);I.prototype.Bb=function(){if(zd(this)){var a={kb:!0};var b=zd(this);if(b&&!a.kb)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.Ha&&(c.Ha=this.Ha.slice());for(var d=this.C,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&Ad(f))for(var g in f){var h=+g;Number.isNaN(h)?Pd(c)[g]=f[g]:je(this,c,h,f[g],b,a)}else je(this,c,e-this.la,f,b,a)}a=c}else a=this;return a};
if(Ed){var ke={};Object.defineProperties(I,(ke[Symbol.hasInstance]=Fd(Object[Symbol.hasInstance]),ke))};function le(a){this.Kb=a}
;function me(a,b,c){this.j=a;this.m=b;this.i=c||[];this.ya=new Map}
l=me.prototype;l.vc=function(a){var b=Ja.apply(1,arguments),c=this.nb(b);c?c.push(new le(a)):this.jc(a,b)};
l.jc=function(a){this.ya.set(this.Rb(Ja.apply(1,arguments)),[new le(a)])};
l.nb=function(){var a=this.Rb(Ja.apply(0,arguments));return this.ya.has(a)?this.ya.get(a):void 0};
l.Ic=function(){var a=this.nb(Ja.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.ya.clear()};
l.Rb=function(){var a=Ja.apply(0,arguments);return a?a.join(","):"key"};function ne(a,b){me.call(this,a,3,b)}
t(ne,me);ne.prototype.l=function(a){var b=Ja.apply(1,arguments),c=0,d=this.Ic(b);d&&(c=d.Kb);this.jc(c+a,b)};function oe(a,b){me.call(this,a,2,b)}
t(oe,me);oe.prototype.l=function(a){this.vc(a,Ja.apply(1,arguments))};function pe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function qe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?qe.apply(null,d):pe(d)}}
;function J(){this.N=this.N;this.B=this.B}
J.prototype.N=!1;J.prototype.i=function(){return this.N};
J.prototype.dispose=function(){this.N||(this.N=!0,this.D())};
function re(a,b){se(a,Ya(pe,b))}
function se(a,b){a.N?b():(a.B||(a.B=[]),a.B.push(b))}
J.prototype.D=function(){if(this.B)for(;this.B.length;)this.B.shift()()};function te(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
te.prototype.stopPropagation=function(){this.l=!0};
te.prototype.preventDefault=function(){this.defaultPrevented=!0};function ue(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ve(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,we[c])c=we[c];else{c=String(c);if(!we[c]){var f=/function\s+([^\(]+)/m.exec(c);we[c]=f?f[1]:"[Anonymous]"}c=we[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ve(a,b){b||(b={});b[xe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[xe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ve(a,b));return c}
function xe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var we={};var ye=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function ze(a,b){te.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Za(ze,te);var Ae={2:"touch",3:"pen",4:"mouse"};
ze.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(Oc){a:{try{Ic(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ae[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&ze.Y.preventDefault.call(this)};
ze.prototype.stopPropagation=function(){ze.Y.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
ze.prototype.preventDefault=function(){ze.Y.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var Be="closure_listenable_"+(1E6*Math.random()|0);var Ce=0;function Ie(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ya=e;this.key=++Ce;this.Ja=this.Ta=!1}
function Je(a){a.Ja=!0;a.listener=null;a.proxy=null;a.src=null;a.Ya=null}
;function Ke(a){this.src=a;this.listeners={};this.i=0}
Ke.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Le(a,b,d,e);-1<g?(b=a[g],c||(b.Ta=!1)):(b=new Ie(b,this.src,f,!!d,e),b.Ta=c,a.push(b));return b};
Ke.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Le(e,b,c,d);return-1<b?(Je(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Me(a,b){var c=b.type;c in a.listeners&&mb(a.listeners[c],b)&&(Je(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Le(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ja&&f.listener==b&&f.capture==!!c&&f.Ya==d)return e}return-1}
;var Ne="closure_lm_"+(1E6*Math.random()|0),Oe={},Pe=0;function Qe(a,b,c,d,e){if(d&&d.once)Re(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else c=Se(c),a&&a[Be]?a.aa(b,c,Qa(d)?!!d.capture:!!d,e):Te(a,b,c,!1,d,e)}
function Te(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ue(a);h||(a[Ne]=h=new Ke(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ve();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ye||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(We(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Pe++}}
function Ve(){function a(c){return b.call(a.src,a.listener,c)}
var b=Xe;return a}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else c=Se(c),a&&a[Be]?a.m.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Te(a,b,c,!0,d,e)}
function Ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ye(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Se(c),a&&a[Be])?a.m.remove(String(b),c,d,e):a&&(a=Ue(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Le(b,c,d,e)),(c=-1<a?b[a]:null)&&Ze(c))}
function Ze(a){if("number"!==typeof a&&a&&!a.Ja){var b=a.src;if(b&&b[Be])Me(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(We(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Pe--;(c=Ue(b))?(Me(c,a),0==c.i&&(c.src=null,b[Ne]=null)):Je(a)}}}
function We(a){return a in Oe?Oe[a]:Oe[a]="on"+a}
function Xe(a,b){if(a.Ja)a=!0;else{b=new ze(b,this);var c=a.listener,d=a.Ya||a.src;a.Ta&&Ze(a);a=c.call(d,b)}return a}
function Ue(a){a=a[Ne];return a instanceof Ke?a:null}
var $e="__closure_events_fn_"+(1E9*Math.random()>>>0);function Se(a){if("function"===typeof a)return a;a[$e]||(a[$e]=function(b){return a.handleEvent(b)});
return a[$e]}
;function af(){J.call(this);this.m=new Ke(this);this.sc=this;this.ka=null}
Za(af,J);af.prototype[Be]=!0;af.prototype.addEventListener=function(a,b,c,d){Qe(this,a,b,c,d)};
af.prototype.removeEventListener=function(a,b,c,d){Ye(this,a,b,c,d)};
function bf(a,b){var c=a.ka;if(c){var d=[];for(var e=1;c;c=c.ka)d.push(c),++e}a=a.sc;c=b.type||b;"string"===typeof b?b=new te(b,a):b instanceof te?b.target=b.target||a:(e=b,b=new te(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=cf(g,c,!0,b)&&e}b.l||(g=b.i=a,e=cf(g,c,!0,b)&&e,b.l||(e=cf(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=cf(g,c,!1,b)&&e}
af.prototype.D=function(){af.Y.D.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Je(d[e]);delete a.listeners[c];a.i--}}this.ka=null};
af.prototype.aa=function(a,b,c,d){return this.m.add(String(a),b,!1,c,d)};
function cf(a,b,c,d){b=a.m.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ja&&g.capture==c){var h=g.listener,k=g.Ya||g.src;g.Ta&&Me(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function df(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
df.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function ef(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function ff(a,b){return a+Math.random()*(b-a)}
;function gf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=gf.prototype;l.clone=function(){return new gf(this.x,this.y)};
l.equals=function(a){return a instanceof gf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function hf(a,b){this.width=a;this.height=b}
l=hf.prototype;l.clone=function(){return new hf(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function jf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function kf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function lf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var mf;function nf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=kf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Jb;c.Jb=null;e()}};
return function(e){d.next={Jb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function of(a){y.setTimeout(function(){throw a;},0)}
;function pf(){this.j=this.i=null}
pf.prototype.add=function(a,b){var c=qf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
pf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var qf=new df(function(){return new rf},function(a){return a.reset()});
function rf(){this.next=this.scope=this.i=null}
rf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
rf.prototype.reset=function(){this.next=this.scope=this.i=null};var sf,tf=!1,uf=new pf;function vf(a,b){sf||wf();tf||(sf(),tf=!0);uf.add(a,b)}
function wf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);sf=function(){a.then(xf)}}else sf=function(){var b=xf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(mf||(mf=nf()),mf(b)):y.setImmediate(b)}}
function xf(){for(var a;a=uf.remove();){try{a.i.call(a.scope)}catch(b){of(b)}ef(qf,a)}tf=!1}
;function yf(a){this.i=0;this.B=void 0;this.m=this.j=this.l=null;this.o=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){zf(b,2,c)},function(c){zf(b,3,c)})}catch(c){zf(this,3,c)}}
function Af(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Af.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Bf=new df(function(){return new Af},function(a){a.reset()});
function Cf(a,b,c){var d=Bf.get();d.j=a;d.onRejected=b;d.context=c;return d}
function Df(a){return new yf(function(b,c){c(a)})}
yf.prototype.then=function(a,b,c){return Ef(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
yf.prototype.$goog_Thenable=!0;l=yf.prototype;l.gb=function(a,b){return Ef(this,null,a,b)};
l.catch=yf.prototype.gb;l.cancel=function(a){if(0==this.i){var b=new Ff(a);vf(function(){Gf(this,b)},this)}};
function Gf(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?Gf(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Hf(c),If(c,e,3,b)))}a.l=null}else zf(a,3,b)}
function Jf(a,b){a.j||2!=a.i&&3!=a.i||Kf(a);a.m?a.m.next=b:a.j=b;a.m=b}
function Ef(a,b,c,d){var e=Cf(null,null,null);e.i=new yf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ff?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;Jf(a,e);return e.i}
l.qd=function(a){this.i=0;zf(this,2,a)};
l.rd=function(a){this.i=0;zf(this,3,a)};
function zf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.qd,f=a.rd;if(d instanceof yf){Jf(d,Cf(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){Lf(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.B=c,a.i=b,a.l=null,Kf(a),3!=b||c instanceof Ff||Mf(a,c))}}
function Lf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Kf(a){a.s||(a.s=!0,vf(a.Gc,a))}
function Hf(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
l.Gc=function(){for(var a;a=Hf(this);)If(this,a,this.i,this.B);this.s=!1};
function If(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.o;a=a.l)a.o=!1;if(b.i)b.i.l=null,Nf(b,c,d);else try{b.l?b.j.call(b.context):Nf(b,c,d)}catch(e){Of.call(null,e)}ef(Bf,b)}
function Nf(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Mf(a,b){a.o=!0;vf(function(){a.o&&Of.call(null,b)})}
var Of=of;function Ff(a){ab.call(this,a)}
Za(Ff,ab);Ff.prototype.name="cancel";function Pf(a,b){af.call(this);this.l=a||1;this.j=b||y;this.o=Wa(this.od,this);this.s=Date.now()}
Za(Pf,af);l=Pf.prototype;l.enabled=!1;l.ca=null;function Qf(a,b){a.l=b;a.ca&&a.enabled?(a.stop(),a.start()):a.ca&&a.stop()}
l.od=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.l?this.ca=this.j.setTimeout(this.o,this.l-a):(this.ca&&(this.j.clearTimeout(this.ca),this.ca=null),bf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.ca||(this.ca=this.j.setTimeout(this.o,this.l),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.ca&&(this.j.clearTimeout(this.ca),this.ca=null)};
l.D=function(){Pf.Y.D.call(this);this.stop();delete this.j};
function Rf(a,b,c){if("function"===typeof a)c&&(a=Wa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Wa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Sf(a){this.B=a;this.i=new Map;this.s=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.j=new Pf(this.flushInterval);this.j.aa("tick",this.ib,!1,this);this.o=!1}
l=Sf.prototype;l.hc=function(a){this.o=a;this.m=1};
function Tf(a){a.j.enabled||a.j.start();a.l++;a.l>=a.m&&a.ib()}
l.ib=function(){var a=this.i.values();a=[].concat(ha(a)).filter(function(b){return b.ya.size});
a.length&&this.B.flush(a,this.o);Uf(a);this.l=0;this.j.enabled&&this.j.stop()};
l.wc=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new ne(a,b))};
l.Hb=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new oe(a,b))};
function Vf(a,b){return a.s.has(b)?void 0:a.i.get(b)}
l.Cb=function(a){this.pc.apply(this,[a,1].concat(ha(Ja.apply(1,arguments))))};
l.pc=function(a,b){var c=Ja.apply(2,arguments),d=Vf(this,a);d&&d instanceof ne&&(d.l(b,c),Tf(this))};
l.hb=function(a,b){var c=Ja.apply(2,arguments),d=Vf(this,a);d&&d instanceof oe&&(d.l(b,c),Tf(this))};
function Uf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Wf(a){this.i=a;this.i.Hb("/client_streamz/bg/fil",{mb:3,lb:"rk"})}
function Xf(a){this.i=a;this.i.wc("/client_streamz/bg/fsc",{mb:3,lb:"rk"})}
function Yf(a){this.i=a;this.i.Hb("/client_streamz/bg/fsl",{mb:3,lb:"rk"})}
;function Zf(a){I.call(this,a,-1,$f)}
t(Zf,I);function ag(a){I.call(this,a,-1,bg)}
t(ag,I);function cg(a){I.call(this,a)}
t(cg,I);function dg(a){I.call(this,a)}
t(dg,I);var $f=[3,6,4],bg=[1],eg=[1,2,3],fg=[1,2,3];function gg(a){I.call(this,a,-1,hg)}
t(gg,I);var hg=[1];function ig(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function jg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(r){for(var x=g,v=0;64>v;v+=4)x[v/4]=r[v]<<24|r[v+1]<<16|r[v+2]<<8|r[v+3];for(v=16;80>v;v++)r=x[v-3]^x[v-8]^x[v-14]^x[v-16],x[v]=(r<<1|r>>>31)&4294967295;r=e[0];var A=e[1],E=e[2],F=e[3],N=e[4];for(v=0;80>v;v++){if(40>v)if(20>v){var O=F^A&(E^F);var R=1518500249}else O=A^E^F,R=1859775393;else 60>v?(O=A&E|F&(A|E),R=2400959708):(O=A^E^F,R=3395469782);O=((r<<5|r>>>27)&4294967295)+O+N+R+x[v]&4294967295;N=F;F=E;E=(A<<30|A>>>2)&4294967295;A=r;r=O}e[0]=e[0]+r&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+E&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+N&4294967295}
function c(r,x){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var v=[],A=0,E=r.length;A<E;++A)v.push(r.charCodeAt(A));r=v}x||(x=r.length);v=0;if(0==m)for(;v+64<x;)b(r.slice(v,v+64)),v+=64,q+=64;for(;v<x;)if(f[m++]=r[v++],q++,64==m)for(m=0,b(f);v+64<x;)b(r.slice(v,v+64)),v+=64,q+=64}
function d(){var r=[],x=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var v=63;56<=v;v--)f[v]=x&255,x>>>=8;b(f);for(v=x=0;5>v;v++)for(var A=24;0<=A;A-=8)r[x++]=e[v]>>A&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Cc:function(){for(var r=d(),x="",v=0;v<r.length;v++)x+="0123456789ABCDEF".charAt(Math.floor(r[v]/16))+"0123456789ABCDEF".charAt(r[v]%16);return x}}}
;function kg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,lg(ig(d),a,c||null)].join(" "):null}
function lg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),mg(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=mg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function mg(a){var b=jg();b.update(a);return b.Cc().toLowerCase()}
;var ng={};function og(a){this.i=a||{cookie:""}}
l=og.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ab:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Jq;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ab}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Mb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ab:0,path:b,domain:c});return d};
l.qb=function(){return pg(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=pg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function pg(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var qg=new og("undefined"==typeof document?null:document);function rg(a){return!!ng.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function sg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;rg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new og(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");rg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function tg(a,b,c,d){(a=y[a])||(a=(new og(document)).get(b));return a?kg(a,c,d):null}
function ug(a,b){b=void 0===b?!1:b;var c=ig(String(y.location.href)),d=[];if(sg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new og(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?kg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&rg(b)&&((b=tg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=tg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function vg(a){I.call(this,a,-1,wg)}
t(vg,I);var wg=[2];function xg(a){this.i=this.j=this.l=a}
xg.prototype.reset=function(){this.i=this.j=this.l};
xg.prototype.getValue=function(){return this.j};function yg(a){var b=[];zg(new Ag,a,b);return b.join("")}
function Ag(){}
function zg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),zg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Bg(d,c),c.push(":"),zg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Bg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Cg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Dg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Bg(a,b){b.push('"',a.replace(Dg,function(c){var d=Cg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Cg[c]=d);return d}),'"')}
;function Eg(){}
Eg.prototype.i=null;Eg.prototype.getOptions=function(){var a;(a=this.i)||(a={},Fg(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var Gg;function Hg(){}
Za(Hg,Eg);function Ig(a){return(a=Fg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Fg(a){if(!a.j&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.j=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.j}
Gg=new Hg;function Jg(a){af.call(this);this.headers=new Map;this.K=a||null;this.j=!1;this.J=this.A=null;this.o=this.T="";this.l=this.R=this.v=this.P=!1;this.s=0;this.G=null;this.da="";this.W=this.X=!1}
Za(Jg,af);var Kg=/^https?$/i,Lg=["POST","PUT"],Mg=[];function Ng(a,b,c,d,e,f,g){var h=new Jg;Mg.push(h);b&&h.aa("complete",b);h.m.add("ready",h.Ac,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.X=g);h.send(a,c,d,e)}
l=Jg.prototype;l.Ac=function(){this.dispose();mb(Mg,this)};
l.send=function(a,b,c,d){if(this.A)throw Error("[goog.net.XhrIo] Object is active with another request="+this.T+"; newUri="+a);b=b?b.toUpperCase():"GET";this.T=a;this.o="";this.P=!1;this.j=!0;this.A=this.K?Ig(this.K):Ig(Gg);this.J=this.K?this.K.getOptions():Gg.getOptions();this.A.onreadystatechange=Wa(this.Yb,this);try{this.getStatus(),this.R=!0,this.A.open(b,String(a),!0),this.R=!1}catch(g){this.getStatus();Og(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=eb(Lg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.A.setRequestHeader(d,c);this.da&&(this.A.responseType=this.da);"withCredentials"in this.A&&this.A.withCredentials!==this.X&&(this.A.withCredentials=this.X);try{Pg(this),0<this.s&&(this.W=Sg(this.A),this.getStatus(),this.W?(this.A.timeout=this.s,this.A.ontimeout=Wa(this.lc,this)):
this.G=Rf(this.lc,this.s,this)),this.getStatus(),this.v=!0,this.A.send(a),this.v=!1}catch(g){this.getStatus(),Og(this,g)}};
function Sg(a){return Mc&&Xc()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.lc=function(){"undefined"!=typeof Ma&&this.A&&(this.o="Timed out after "+this.s+"ms, aborting",this.getStatus(),bf(this,"timeout"),this.abort(8))};
function Og(a,b){a.j=!1;a.A&&(a.l=!0,a.A.abort(),a.l=!1);a.o=b;Tg(a);Ug(a)}
function Tg(a){a.P||(a.P=!0,bf(a,"complete"),bf(a,"error"))}
l.abort=function(){this.A&&this.j&&(this.getStatus(),this.j=!1,this.l=!0,this.A.abort(),this.l=!1,bf(this,"complete"),bf(this,"abort"),Ug(this))};
l.D=function(){this.A&&(this.j&&(this.j=!1,this.l=!0,this.A.abort(),this.l=!1),Ug(this,!0));Jg.Y.D.call(this)};
l.Yb=function(){this.i()||(this.R||this.v||this.l?Vg(this):this.Rc())};
l.Rc=function(){Vg(this)};
function Vg(a){if(a.j&&"undefined"!=typeof Ma)if(a.J[1]&&4==Wg(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==Wg(a))Rf(a.Yb,0,a);else if(bf(a,"readystatechange"),a.isComplete()){a.getStatus();a.j=!1;try{if(Xg(a))bf(a,"complete"),bf(a,"success");else{try{var b=2<Wg(a)?a.A.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Tg(a)}}finally{Ug(a)}}}
function Ug(a,b){if(a.A){Pg(a);var c=a.A,d=a.J[0]?function(){}:null;
a.A=null;a.J=null;b||bf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Pg(a){a.A&&a.W&&(a.A.ontimeout=null);a.G&&(y.clearTimeout(a.G),a.G=null)}
l.isActive=function(){return!!this.A};
l.isComplete=function(){return 4==Wg(this)};
function Xg(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=nc(1,String(a.T)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Kg.test(a?a.toLowerCase():"");c=b}return c}
function Wg(a){return a.A?a.A.readyState:0}
l.getStatus=function(){try{return 2<Wg(this)?this.A.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.o?this.o:String(this.o)};function Yg(a){I.call(this,a)}
t(Yg,I);function Zg(a){I.call(this,a,-1,$g)}
t(Zg,I);var $g=[1];var ah=["platform","platformVersion","architecture","model","uaFullVersion"];new Zg;function bh(a){I.call(this,a)}
t(bh,I);function ch(a){I.call(this,a,31,dh)}
t(ch,I);var dh=[3,20,27];function eh(a){I.call(this,a,17,fh)}
t(eh,I);var fh=[3,5];function gh(a){I.call(this,a,6,hh)}
t(gh,I);var hh=[5];function ih(a){I.call(this,a)}
t(ih,I);var jh;jh=new function(a,b,c){this.j=a;this.fieldName=b;this.i=c;this.isRepeated=0;this.l=ie}(175237375,{Aq:0},ih);function kh(a,b,c,d,e,f,g,h,k,m,q){af.call(this);var r=this;this.P="";this.l=[];this.Fb="";this.Gb=this.ra=-1;this.Qa=!1;this.J=this.o=null;this.G=0;this.tc=1;this.timeoutMillis=0;this.da=!1;af.call(this);this.Eb=b||function(){};
this.v=new lh(a,f);this.qc=d;this.Pa=q;this.uc=Ya(ff,0,1);this.T=e||null;this.K=c||null;this.W=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Ea=f||!1;!this.Ea&&(65<=cc("Chromium")||45<=cc("Firefox")||12<=cc("Safari")||(Gc()||C("iPad")||C("iPod"))&&Hc());a=D(new bh,1,1);mh(this.v,a);this.s=new xg(1E4);this.j=new Pf(this.s.getValue());re(this,this.j);m=nh(this,m);Qe(this.j,"tick",m,!1,this);this.R=new Pf(6E5);re(this,this.R);Qe(this.R,"tick",m,!1,this);this.W||this.R.start();
this.Ea||(Qe(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.X()}),Qe(document,"pagehide",this.X,!1,this))}
t(kh,af);function nh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
kh.prototype.D=function(){this.X();af.prototype.D.call(this)};
function oh(a){a.T||(a.T=.01>a.uc()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.T}
function ph(a,b){a.s=new xg(1>b?1:b);Qf(a.j,a.s.getValue())}
kh.prototype.log=function(a){a=a.clone();var b=this.tc++;D(a,21,b);this.P&&D(a,26,this.P);if(!Qd(a,1)){b=a;var c=Date.now().toString();D(b,1,c)}null!=Qd(a,15)||D(a,15,60*(new Date).getTimezoneOffset());this.o&&(b=this.o.clone(),G(a,vg,16,b));for(;1E3<=this.l.length;)this.l.shift(),++this.G;this.l.push(a);bf(this,new qh(a));this.W||this.j.enabled||this.j.start()};
kh.prototype.flush=function(a,b){var c=this;if(0===this.l.length)a&&a();else if(this.da)rh(this);else{var d=Date.now();if(this.Gb>d&&this.ra<d)b&&b("throttled");else{var e=sh(this.v,this.l,this.G);d={};var f=this.Eb();f&&(d.Authorization=f);var g=oh(this);this.K&&(d["X-Goog-AuthUser"]=this.K,g=wc(g,"authuser",this.K));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=wc(g,"pageId",this.pageId));if(f&&this.Fb===f)b&&b("stale-auth-token");else{this.l=[];this.j.enabled&&this.j.stop();this.G=0;var h=de(e),
k;this.J&&this.J.isSupported(h.length)&&(k=this.J.compress(h));var m={url:g,body:h,yc:1,yb:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(v){c.s.reset();Qf(c.j,c.s.getValue());if(v){var A=null;try{var E=JSON.parse(v.replace(")]}'\n",""));A=new gh(E)}catch(F){}A&&(v=Number(Sd(A,1,"-1")),0<v&&(c.ra=Date.now(),c.Gb=c.ra+v),A=jh.l(A))&&(A=Sd(A,1,-1),-1!=A&&(c.Qa||ph(c,A)))}a&&a()},r=function(v,A){var E=Yd(e,ch,3),F=c.s;
F.i=Math.min(3E5,2*F.i);F.j=Math.min(3E5,F.i+Math.round(.2*(Math.random()-.5)*F.i));Qf(c.j,c.s.getValue());401===v&&f&&(c.Fb=f);void 0===A&&(A=500<=v&&600>v||401===v||0===v);A&&(c.l=E.concat(c.l),c.W||c.j.enabled||c.j.start());b&&b("net-send-failed",v)},x=function(){c.Pa?c.Pa.send(m,q,r):c.qc(m,q,r)};
k?k.then(function(v){m.yb["Content-Encoding"]="gzip";m.yb["Content-Type"]="application/binary";m.body=v;m.yc=2;x()},function(){x()}):x()}}}};
kh.prototype.X=function(){this.flush()};
function rh(a){th(a,function(b,c){b=wc(b,"format","json");b=window.navigator.sendBeacon(b,de(c));a.da&&!b&&(a.da=!1);return b})}
function th(a,b){if(0!==a.l.length){var c=Dc(oh(a),"format");c=uc(c,"auth",a.Eb(),"authuser",a.K||"0");for(var d=0;10>d&&a.l.length;++d){var e=a.l.slice(0,32),f=sh(a.v,e,a.G);if(!b(c,f))break;a.G=0;a.l=a.l.slice(e.length)}a.j.enabled&&a.j.stop()}}
function qh(){te.call(this,"event-logged",void 0)}
t(qh,te);function lh(a,b){this.j=b=void 0===b?!1:b;this.uach=this.locale=null;this.i=new eh;D(this.i,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));mh(this,new bh)}
function mh(a,b){G(a.i,bh,1,b);Qd(b,1)||D(b,1,1);a.j||(b=uh(a),Qd(b,5)||D(b,5,a.locale));a.uach&&(b=uh(a),Wd(b,Zg,9)||G(b,Zg,9,a.uach))}
function vh(a,b){var c=void 0===c?ah:c;b(window,c).then(function(d){a.uach=d;d=uh(a);G(d,Zg,9,a.uach);return!0}).catch(function(){return!1})}
function uh(a){a=Wd(a.i,bh,1);var b=Wd(a,Yg,11);b||(b=new Yg,G(a,Yg,11,b));return b}
function sh(a,b,c){c=void 0===c?0:c;a=a.i.clone();var d=Date.now().toString();a=D(a,4,d);b=$d(a,ch,3,b);c&&D(b,14,c);return b}
;function wh(a,b,c){Ng(a.url,function(d){d=d.target;if(Xg(d)){try{var e=d.A?d.A.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.yb,a.timeoutMillis,a.withCredentials)}
;function xh(){this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.s=wh;this.i=""}
;function yh(){var a=void 0===a?"":a;var b=void 0===b?!1:b;var c=void 0===c?"":c;var d=new xh;d.i="";""!=a&&(d.l=a);b&&(d.m=!0);c&&(d.j=c);a=new kh(1828,d.J?d.J:ug,"0",d.s,d.l,d.m,!1,d.R,void 0,void 0,d.B?d.B:void 0);d.v&&mh(a.v,d.v);d.j&&(b=d.j,c=uh(a.v),D(c,7,b));d.o&&(a.J=d.o);d.i&&(a.P=d.i);d.N&&((b=d.N)?(a.o||(a.o=new vg),b=de(b),D(a.o,4,b)):a.o&&D(a.o,4,void 0,!1));d.K&&(b=d.K,a.o||(a.o=new vg),Td(a.o,2,b));d.G&&(b=d.G,a.Qa=!0,ph(a,b));d.P&&vh(a.v,d.P);this.i=a}
yh.prototype.flush=function(a){var b=a||[];if(b.length){a=new gg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new Zf;g=D(g,1,f.j);for(var h=f,k=[],m=0;m<h.i.length;m++)k.push(h.i[m].lb);g=Td(g,3,k);h=[];k=[];m=p(f.ya.keys());for(var q=m.next();!q.done;q=m.next())k.push(q.value.split(","));for(m=0;m<k.length;m++){q=k[m];var r=f.m;for(var x=f.nb(q)||[],v=[],A=0;A<x.length;A++){var E=x[A];E=E&&E.Kb;var F=new dg;switch(r){case 3:Ud(F,1,fg,Number(E));break;case 2:Ud(F,2,fg,Number(E))}v.push(F)}r=
v;for(x=0;x<r.length;x++){v=r[x];A=new ag;v=G(A,dg,2,v);A=q;E=[];F=f;for(var N=[],O=0;O<F.i.length;O++)N.push(F.i[O].mb);F=N;for(N=0;N<F.length;N++){O=F[N];var R=A[N],U=new cg;switch(O){case 3:Ud(U,1,eg,String(R));break;case 2:Ud(U,2,eg,Number(R));break;case 1:Ud(U,3,eg,"true"==R)}E.push(U)}$d(v,cg,1,E);h.push(v)}}$d(g,ag,4,h);c.push(g);e.clear()}$d(a,Zf,1,c);b=this.i;a instanceof ch?b.log(a):(c=new ch,a=de(a),a=D(c,8,a),b.log(a));this.i.flush()}};function zh(){this.o=Ah();this.s=new yh;this.i=new Sf(this.s);this.m=new Wf(this.i);this.j=new Xf(this.i);this.l=new Yf(this.i);this.Ba=window.document.location.hostname}
function Ah(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Bh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ch(a){var b=this;this.Wa=!1;if(a.Hq){var c;this.sa=null!=(c=a.sa)?c:new zh}c=a.program;a=a.globalName;var d=new Bh;this.j=d.promise;this.md=p((0,y[a].a)(c,function(e,f){Promise.resolve().then(function(){var g;if(null!=(g=b.sa)){var h=Ah()-g.o;g.m.i.hb("/client_streamz/bg/fil",h,g.Ba)}d.resolve({xc:e,jd:f})})},!0)).next().value;
this.hd=d.promise.then(function(){})}
Ch.prototype.snapshot=function(a){var b=this;if(this.Wa)throw Error("Already disposed");var c=Ah(),d;null!=(d=this.sa)&&d.j.i.Cb("/client_streamz/bg/fsc",d.Ba);return this.j.then(function(e){var f=e.xc;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.sa)){var m=Ah()-c;k.l.i.hb("/client_streamz/bg/fsl",m,k.Ba)}g(h)},[a.Mb,
a.kd])})})};
Ch.prototype.dispose=function(){var a;null!=(a=this.sa)&&a.i.ib();this.Wa=!0;this.j.then(function(b){(b=b.jd)&&b()})};
Ch.prototype.i=function(){return this.Wa};var Dh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Eh;try{new URL("s://g"),Eh=!0}catch(a){Eh=!1}var Fh=Eh;function Gh(a,b){a.src=Kb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Hh(a){var b=Ih;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Jh(){var a=[];Hh(function(b){a.push(b)});
return a}
var Ih={Fd:"allow-forms",Gd:"allow-modals",Hd:"allow-orientation-lock",Id:"allow-pointer-lock",Jd:"allow-popups",Kd:"allow-popups-to-escape-sandbox",Ld:"allow-presentation",Md:"allow-same-origin",Nd:"allow-scripts",Od:"allow-top-navigation",Pd:"allow-top-navigation-by-user-activation"},Kh=db(function(){return Jh()});
function Lh(){var a=Mh(),b={};fb(Kh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Mh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Nh(a){this.isValid=a}
function Oh(a){return new Nh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ph=[Oh("data"),Oh("http"),Oh("https"),Oh("mailto"),Oh("ftp"),new Nh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Qh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Rh=(new Date).getTime();var Sh="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ha(Sh);function Th(a){af.call(this);var b=this;this.v=this.l=0;this.Z=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
fa:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return w(function(e){return u(e,Uh(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.v||Vh(this)}
t(Th,af);function Wh(){var a=Xh;Th.i||(Th.i=new Th(a));return Th.i}
Th.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Z.fa(this.v);delete Th.i};
Th.prototype.L=function(){return this.j};
function Vh(a){a.v=a.Z.S(function(){var b;return w(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):u(c,Uh(a),3):u(c,Uh(a),3);Vh(a);c.i=0})},3E4)}
function Uh(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.l=a.Z.S(function(){d.abort()},b||2E4)),u(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.s=void 0;a.l&&(a.Z.fa(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?bf(a,"networkstatus-online"):bf(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Aa(h),g=!1,h.u(3)}})})}
;var Yh={Th:"EMBEDDED_PLAYER_MODE_UNKNOWN",Qh:"EMBEDDED_PLAYER_MODE_DEFAULT",Sh:"EMBEDDED_PLAYER_MODE_PFP",Rh:"EMBEDDED_PLAYER_MODE_PFL"},Zh={Zp:"WEB_DISPLAY_MODE_UNKNOWN",Vp:"WEB_DISPLAY_MODE_BROWSER",Xp:"WEB_DISPLAY_MODE_MINIMAL_UI",Yp:"WEB_DISPLAY_MODE_STANDALONE",Wp:"WEB_DISPLAY_MODE_FULLSCREEN"};function $h(){this.data_=[];this.i=-1}
$h.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
$h.prototype.get=function(a){return!!this.data_[a]};
function ai(a){-1===a.i&&(a.i=ib(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function bi(a,b){this.i=a[y.Symbol.iterator]();this.j=b}
bi.prototype[Symbol.iterator]=function(){return this};
bi.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function ci(a,b){return new bi(a,b)}
;function di(){this.blockSize=-1}
;function ei(){this.blockSize=-1;this.blockSize=64;this.i=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Za(ei,di);ei.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function fi(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
ei.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)fi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){fi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){fi(this,e);f=0;break}}this.j=f;this.m+=b}};
ei.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;fi(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function gi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function hi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ii(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:gi(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function ji(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ii(a,"inverted-hdpi")&&hi(a,Array.prototype.filter.call(a.classList?a.classList:gi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function ki(){}
ki.prototype.next=function(){return li};
var li={done:!0,value:void 0};function mi(a){return{value:a,done:!1}}
ki.prototype.ea=function(){return this};function ni(a){if(a instanceof oi||a instanceof pi||a instanceof qi)return a;if("function"==typeof a.next)return new oi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new oi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ea)return new oi(function(){return a.ea()});
throw Error("Not an iterator or iterable.");}
function oi(a){this.j=a}
oi.prototype.ea=function(){return new pi(this.j())};
oi.prototype[Symbol.iterator]=function(){return new qi(this.j())};
oi.prototype.i=function(){return new qi(this.j())};
function pi(a){this.j=a}
t(pi,ki);pi.prototype.next=function(){return this.j.next()};
pi.prototype[Symbol.iterator]=function(){return new qi(this.j)};
pi.prototype.i=function(){return new qi(this.j)};
function qi(a){oi.call(this,function(){return a});
this.l=a}
t(qi,oi);qi.prototype.next=function(){return this.l.next()};function ri(a,b){this.j={};this.i=[];this.oa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ri)for(c=a.qb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=ri.prototype;l.qb=function(){si(this);return this.i.concat()};
l.has=function(a){return ti(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ui;si(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ui(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.oa=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return ti(this.j,a)?(delete this.j[a],--this.size,this.oa++,this.i.length>2*this.size&&si(this),!0):!1};
function si(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];ti(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],ti(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return ti(this.j,a)?this.j[a]:b};
l.set=function(a,b){ti(this.j,a)||(this.size+=1,this.i.push(a),this.oa++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.qb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new ri(this)};
l.keys=function(){return ni(this.ea(!0)).i()};
l.values=function(){return ni(this.ea(!1)).i()};
l.entries=function(){var a=this;return ci(this.keys(),function(b){return[b,a.get(b)]})};
l.ea=function(a){si(this);var b=0,c=this.oa,d=this,e=new ki;e.next=function(){if(c!=d.oa)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return li;var f=d.i[b++];return mi(a?f:d.j[f])};
return e};
function ti(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.s=1;this.m=[];this.o=0;this.j=[];this.l={};this.v=!!a}
Za(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.s=e+3;d.push(e);return e};
function vi(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Da(b)}}
l.Da=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.o?(this.m.push(a),this.j[a+1]=function(){}):(c&&mb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.qa=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];wi(this.j[g+1],this.j[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.Da(c)}}return 0!=e}return!1};
function wi(a,b,c){vf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Da,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.D=function(){K.Y.D.call(this);this.clear();this.m.length=0};function xi(a){this.i=a}
xi.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,yg(b))};
xi.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
xi.prototype.remove=function(a){this.i.remove(a)};function yi(a){this.i=a}
Za(yi,xi);function zi(a){this.data=a}
function Ai(a){return void 0===a||a instanceof zi?a:new zi(a)}
yi.prototype.set=function(a,b){yi.Y.set.call(this,a,Ai(b))};
yi.prototype.j=function(a){a=yi.Y.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
yi.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Bi(a){this.i=a}
Za(Bi,yi);Bi.prototype.set=function(a,b,c){if(b=Ai(b)){if(c){if(c<Date.now()){Bi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Bi.Y.set.call(this,a,b)};
Bi.prototype.j=function(a){var b=Bi.Y.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Bi.prototype.remove.call(this,a);else return b}};function Ci(){}
;function Di(){}
Za(Di,Ci);Di.prototype[Symbol.iterator]=function(){return ni(this.ea(!0)).i()};
Di.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ei(a){this.i=a}
Za(Ei,Di);l=Ei.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.ea=function(a){var b=0,c=this.i,d=new ki;d.next=function(){if(b>=c.length)return li;var e=c.key(b++);if(a)return mi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return mi(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function Fi(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Za(Fi,Ei);function Gi(a,b){this.j=a;this.i=null;var c;if(c=Mc)c=!(9<=Number($c));if(c){Hi||(Hi=new ri);this.i=Hi.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Hi.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Za(Gi,Di);var Ii={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Hi=null;function Ji(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ii[b]})}
l=Gi.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(Ji(a),b);Ki(this)};
l.get=function(a){a=this.i.getAttribute(Ji(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(Ji(a));Ki(this)};
l.ea=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new ki;d.next=function(){if(b>=c.length)return li;var e=c[b++];if(a)return mi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return mi(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ki(this)};
function Ki(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Li(a,b){this.j=a;this.i=b+"::"}
Za(Li,Di);Li.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Li.prototype.get=function(a){return this.j.get(this.i+a)};
Li.prototype.remove=function(a){this.j.remove(this.i+a)};
Li.prototype.ea=function(a){var b=this.j[Symbol.iterator](),c=this,d=new ki;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return mi(a?e.slice(c.i.length):c.j.get(e))};
return d};function Mi(a){I.call(this,a)}
t(Mi,I);function Ni(a){I.call(this,a)}
t(Ni,I);Ni.prototype.getKey=function(){return Qd(this,1)};
Ni.prototype.getValue=function(){return Qd(this,2===Vd(this,Oi)?2:-1)};
Ni.prototype.setValue=function(a){return Ud(this,2,Oi,a)};
var Oi=[2,3,4,5,6];function Pi(a){I.call(this,a)}
t(Pi,I);function Qi(a){I.call(this,a)}
t(Qi,I);function Ri(a){I.call(this,a,-1,Si)}
t(Ri,I);var Si=[2];function Ti(a){I.call(this,a,-1,Ui)}
t(Ti,I);Ti.prototype.getPlayerType=function(){return Qd(this,36)};
Ti.prototype.setHomeGroupInfo=function(a){return G(this,Ri,81,a)};
var Ui=[9,66,24,32,86,100,101];function Vi(a){I.call(this,a,-1,Wi)}
t(Vi,I);var Wi=[15,26,28];function Xi(a){I.call(this,a)}
t(Xi,I);Xi.prototype.setToken=function(a){return D(this,2,a)};function Yi(a){I.call(this,a,-1,Zi)}
t(Yi,I);Yi.prototype.setSafetyMode=function(a){return D(this,5,a)};
var Zi=[12];function $i(a){I.call(this,a,-1,aj)}
t($i,I);$i.prototype.s=function(a){G(this,Ti,1,a)};
var aj=[12];function bj(a){this.name=a}
;var cj=new bj("continuationCommand");var dj=new bj("webCommandMetadata");var ej=new bj("signalServiceEndpoint");var fj=new bj("feedbackEndpoint");function gj(a){I.call(this,a,-1,hj)}
t(gj,I);function ij(a){I.call(this,a)}
t(ij,I);ij.prototype.getKey=function(){return Sd(this,1,"")};
ij.prototype.getValue=function(){return Sd(this,2,"")};
ij.prototype.setValue=function(a){return D(this,2,a)};
var hj=[4,5];function jj(a){I.call(this,a)}
t(jj,I);function kj(a){I.call(this,a)}
t(kj,I);var lj=[2,3,4];function mj(a){I.call(this,a)}
t(mj,I);mj.prototype.getMessage=function(){return Sd(this,1,"")};function nj(a){I.call(this,a)}
t(nj,I);function oj(a){I.call(this,a)}
t(oj,I);function pj(a){I.call(this,a,-1,qj)}
t(pj,I);var qj=[10,17];function rj(a){I.call(this,a)}
t(rj,I);function sj(a){I.call(this,a)}
t(sj,I);sj.prototype.V=function(a){D(this,1,a)};function tj(a){I.call(this,a)}
t(tj,I);function uj(a){I.call(this,a)}
t(uj,I);function vj(a){I.call(this,a)}
t(vj,I);function wj(a){I.call(this,a,-1,xj)}
t(wj,I);wj.prototype.getVideoData=function(){return Wd(this,vj,15)};
var xj=[4];function yj(a){I.call(this,a)}
t(yj,I);function zj(a,b){G(a,tj,1,b)}
yj.prototype.V=function(a){D(this,2,a)};
function Aj(a){I.call(this,a)}
t(Aj,I);function Bj(a,b){G(a,tj,1,b)}
;function Cj(a){I.call(this,a,-1,Dj)}
t(Cj,I);Cj.prototype.V=function(a){D(this,1,a)};
function Ej(a,b){G(a,tj,2,b)}
var Dj=[3];function Fj(a){I.call(this,a)}
t(Fj,I);Fj.prototype.V=function(a){D(this,1,a)};function Gj(a){I.call(this,a)}
t(Gj,I);Gj.prototype.V=function(a){D(this,1,a)};function Hj(a){I.call(this,a)}
t(Hj,I);Hj.prototype.V=function(a){D(this,1,a)};function Ij(a){I.call(this,a)}
t(Ij,I);Ij.prototype.V=function(a){D(this,1,a)};function Jj(a){I.call(this,a)}
t(Jj,I);function Kj(a){I.call(this,a)}
t(Kj,I);function Lj(a){I.call(this,a,-1,Mj)}
t(Lj,I);Lj.prototype.getPlayerType=function(){return Sd(this,7,0)};
Lj.prototype.setVideoId=function(a){return D(this,19,a)};
function Nj(a,b){ae(a,68,Oj,b)}
function Oj(a){I.call(this,a)}
t(Oj,I);Oj.prototype.getId=function(){return Sd(this,2,"")};
var Mj=[83,68];function Pj(a){I.call(this,a)}
t(Pj,I);function Qj(a){I.call(this,a)}
t(Qj,I);function Rj(a){I.call(this,a)}
t(Rj,I);function Sj(a){I.call(this,a,440)}
t(Sj,I);
var mk=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439];var nk={Ui:0,Fi:1,Li:2,Mi:4,Ri:8,Ni:16,Oi:32,Ti:64,Si:128,Hi:256,Ji:512,Qi:1024,Ii:2048,Ki:4096,Gi:8192,Pi:16384};function ok(a){I.call(this,a)}
t(ok,I);function pk(a){I.call(this,a)}
t(pk,I);pk.prototype.setVideoId=function(a){return Ud(this,1,qk,a)};
pk.prototype.getPlaylistId=function(){return Qd(this,2===Vd(this,qk)?2:-1)};
var qk=[1,2];function rk(a){I.call(this,a,-1,sk)}
t(rk,I);var sk=[3];var tk=new bj("webPlayerShareEntityServiceEndpoint");var uk=new bj("playlistEditEndpoint");var vk=new bj("modifyChannelNotificationPreferenceEndpoint");var wk=new bj("unsubscribeEndpoint");var xk=new bj("subscribeEndpoint");function yk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var zk=y.window,Ak,Bk,Ck=(null==zk?void 0:null==(Ak=zk.yt)?void 0:Ak.config_)||(null==zk?void 0:null==(Bk=zk.ytcfg)?void 0:Bk.data_)||{};z("yt.config_",Ck);function Dk(){yk(Ck,arguments)}
function L(a,b){return a in Ck?Ck[a]:b}
function Ek(){var a=Ck.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Fk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Gk(a,b){a=Fk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Hk(){return L("EXPERIMENTS_TOKEN","")}
function Fk(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function Ik(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Jk=[];function Kk(a){Jk.forEach(function(b){return b(a)})}
function Lk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Mk(b)}}:a}
function Mk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Dk("ERRORS",e));Kk(a)}
function Nk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Dk("ERRORS",e))}
;function Ok(){var a=Pk;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Qk(a){z("yt.ads.biscotti.lastId_",a)}
;var Rk=/^[\w.]*$/,Sk={q:!0,search_query:!0};function Tk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Uk(f[0]||""),h=Uk(f[1]||"");g in c?Array.isArray(c[g])?nb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,m=f[0],q=String(Tk);k.args=[{key:m,value:f[1],query:a,method:Vk==q?"unchanged":q}];Sk.hasOwnProperty(m)||Nk(k)}}return c}
var Vk=String(Tk);function Wk(a){var b=[];ob(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Xk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Tk(a,"&")}
function Yk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Xk(1<a.length?a[1]:a[0])):{}}
function Zk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Xk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return vc(a,e)+d}
function $k(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)==d&&(Number(nc(4,b))||null)==(Number(nc(4,a))||null):!0;return a}
function Uk(a){return a&&a.match(Rk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function al(a){var b=bl;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Rh;e.flash="0";a:{try{var f=b.i.top.location.href}catch(la){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Dh:g;try{var h=g.history.length}catch(la){h=0}e.u_his=h;var k;e.u_h=null==(k=Dh.screen)?void 0:k.height;var m;e.u_w=null==(m=Dh.screen)?void 0:m.width;var q;e.u_ah=null==(q=Dh.screen)?void 0:q.availHeight;var r;e.u_aw=
null==(r=Dh.screen)?void 0:r.availWidth;var x;e.u_cd=null==(x=Dh.screen)?void 0:x.colorDepth}catch(la){}h=b.i;try{var v=h.screenX;var A=h.screenY}catch(la){}try{var E=h.outerWidth;var F=h.outerHeight}catch(la){}try{var N=h.innerWidth;var O=h.innerHeight}catch(la){}try{var R=h.screenLeft;var U=h.screenTop}catch(la){}try{N=h.innerWidth,O=h.innerHeight}catch(la){}try{var ca=h.screen.availWidth;var lb=h.screen.availTop}catch(la){}v=[R,U,v,A,ca,lb,E,F,N,O];try{var Xa=(b.i.top||window).document,ja="CSS1Compat"==
Xa.compatMode?Xa.documentElement:Xa.body;var H=(new hf(ja.clientWidth,ja.clientHeight)).round()}catch(la){H=new hf(-12245933,-12245933)}Xa=H;H={};var ka=void 0===ka?y:ka;ja=new $h;ka.SVGElement&&ka.document.createElementNS&&ja.set(0);A=Lh();A["allow-top-navigation-by-user-activation"]&&ja.set(1);A["allow-popups-to-escape-sandbox"]&&ja.set(2);ka.crypto&&ka.crypto.subtle&&ja.set(3);ka.TextDecoder&&ka.TextEncoder&&ja.set(4);ka=ai(ja);H.bc=ka;H.bih=Xa.height;H.biw=Xa.width;H.brdim=v.join();b=b.j;b=(H.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,H.wgl=!!Dh.WebGLRenderingContext,H);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var bl=new function(){var a=window.document;this.i=window;this.j=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Wk(al(a))});Date.now();var cl="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function dl(){if(!cl)return null;var a=cl();return"open"in a?a:null}
function el(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function fl(a,b){"function"===typeof a&&(a=Lk(a));return window.setTimeout(a,b)}
function gl(a){window.clearTimeout(a)}
;var hl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},il="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ha(Sh)),jl=!1;
function kl(a,b){b=void 0===b?{}:b;var c=$k(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in hl){var f=L(hl[e]);"X-Goog-Visitor-Id"!==e||f||(f=L("VISITOR_DATA"));!f||!c&&oc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||
!oc(a))b["X-YouTube-Ad-Signals"]=Wk(al());return b}
function ll(a){var b=window.location.search,c=oc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!$k(a)||(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Xk(b),f={};fb(il,function(g){e[g]&&(f[g]=e[g])});
return Zk(a,f||{},!1)}
function ml(a,b){var c=b.format||"JSON";a=nl(a,b);var d=ol(a,b),e=!1,f=pl(a,function(k){if(!e){e=!0;h&&gl(h);var m=el(k),q=null,r=400<=k.status&&500>k.status,x=500<=k.status&&600>k.status;if(m||r||x)q=ql(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};r=b.context||y;m?b.onSuccess&&b.onSuccess.call(r,k,q):b.onError&&b.onError.call(r,k,q);b.onFinish&&b.onFinish.call(r,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=fl(function(){e||(e=!0,f.abort(),gl(h),g.call(b.context||y,f))},d)}return f}
function nl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Zk(a,b||{},!0);return a}
function ol(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Xk(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):tc(e));f=e||f&&!rb(f);!jl&&f&&"POST"!=b.method&&(jl=
!0,Mk(Error("AJAX request with postData should use POST")));return e}
function ql(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Nk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?rl(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=sl(g)})}d&&tl(e);
return e}
function tl(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new ec(d)}else tl(a[b])}}
function rl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function sl(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function pl(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Lk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=dl();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=ll(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=kl(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function ul(a){var b=this;this.j=void 0;this.i=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.j=c});
a.addEventListener("appinstalled",function(){b.i=!0},{once:!0})}
function vl(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function wl(a,b,c,d,e){qg.set(""+a,b,{ab:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function xl(){if(!qg.isEnabled())return!1;if(!qg.isEmpty())return!0;qg.set("TESTCOOKIESENABLED","1",{ab:60});if("1"!==qg.get("TESTCOOKIESENABLED"))return!1;qg.remove("TESTCOOKIESENABLED");return!0}
;var yl=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",yl);function zl(){this.i=L("ALT_PREF_COOKIE_NAME","PREF");this.j=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=qg.get(""+this.i,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(yl[d]=c.toString())}}}
zl.prototype.get=function(a,b){Al(a);Bl(a);a=void 0!==yl[a]?yl[a].toString():null;return null!=a?a:b?b:""};
zl.prototype.set=function(a,b){Al(a);Bl(a);if(null==b)throw Error("ExpectedNotNull");yl[a]=b.toString()};
function Cl(a){return!!((Dl("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
zl.prototype.remove=function(a){Al(a);Bl(a);delete yl[a]};
zl.prototype.clear=function(){for(var a in yl)delete yl[a]};
function Bl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Al(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Dl(a){a=void 0!==yl[a]?yl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Na(zl);var El={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Fl={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Gl={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Hl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Il(){var a=y.navigator;return a?a.connection:void 0}
function Jl(){var a=Il();if(a){var b=El[a.type||"unknown"]||"CONN_UNKNOWN";a=El[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Kl(){var a=Il();if(null!=a&&a.effectiveType)return Hl.hasOwnProperty(a.effectiveType)?Hl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Ll(){return"INNERTUBE_API_KEY"in Ck&&"INNERTUBE_API_VERSION"in Ck}
function Ml(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),rb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Tb:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Kc:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),Vb:L("INNERTUBE_CONTEXT_HL"),Ub:L("INNERTUBE_CONTEXT_GL"),Lc:L("INNERTUBE_HOST_OVERRIDE")||"",Nc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Mc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Nl(a){var b={client:{hl:a.Vb,gl:a.Ub,clientName:a.Tb,clientVersion:a.innertubeContextClientVersion,configInfo:a.rb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Hk();""!==c&&(b.client.experimentsToken=c);c=Ik();0<c.length&&(b.request={internalExperimentFlags:c});Ol(a,void 0,b);Pl(void 0,b);Ql(a,void 0,b);Rl(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(Xk(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Sl(a){var b=new $i,c=new Ti;D(c,1,a.Vb);D(c,2,a.Ub);D(c,16,a.Kc);D(c,17,a.innertubeContextClientVersion);if(a.rb){var d=a.rb,e=new Pi;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);G(c,Pi,62,e)}(d=y.devicePixelRatio)&&1!=d&&D(c,65,d);d=Hk();""!==d&&D(c,54,d);d=Ik();if(0<d.length){e=new Vi;for(var f=0;f<d.length;f++){var g=new Ni;D(g,1,d[f].key);g.setValue(d[f].value);ae(e,15,Ni,
g)}G(b,Vi,5,e)}Ol(a,c);Pl(c);Ql(a,c);Rl(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Yi,D(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(Xk(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);b.s(c);return b}
function Ol(a,b,c){a=a.Tb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Wd(b,Qi,96)||new Qi;var d=vl();d=Object.keys(Zh).indexOf(d);d=-1===d?null:d;null!==d&&D(c,3,d);G(b,Qi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=vl())}
function Pl(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Ql(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Wd(b,Pi,62))?d:new Pi;D(c,6,a.appInstallData);G(b,Pi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Rl(a,b){var c=Jl();c&&(a?D(a,61,Fl[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=Kl())&&(a?D(a,94,Gl[c]):b&&(b.client.effectiveConnectionType=c))}
function Tl(a,b,c){c=void 0===c?{}:c;var d={};L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.sq||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().rq:b=ug([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function Ul(a){a=Object.assign({},a);delete a.Authorization;var b=ug();if(b){var c=new ei;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=fd(c.digest(),3)}return a}
;function Vl(a){var b=new Fi;(b=b.isAvailable()?a?new Li(b,a):b:null)||(a=new Gi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Bi(a):null;this.j=document.domain||window.location.hostname}
Vl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(yg(b))}catch(f){return}else e=escape(b);wl(a,e,c,this.j)};
Vl.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=qg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Vl.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;qg.remove(""+a,"/",void 0===b?"youtube.com":b)};var Wl=window,P=Wl.ytcsi&&Wl.ytcsi.now?Wl.ytcsi.now:Wl.performance&&Wl.performance.timing&&Wl.performance.now&&Wl.performance.timing.navigationStart?function(){return Wl.performance.timing.navigationStart+Wl.performance.now()}:function(){return(new Date).getTime()};var Xl;function Yl(){Xl||(Xl=new Vl("yt.innertube"));return Xl}
function Zl(a,b,c,d){if(d)return null;d=Yl().get("nextId",!0)||1;var e=Yl().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ul(c),requestTime:Math.round(P())};Yl().set("nextId",d+1,86400,!0);Yl().set("requests",e,86400,!0);return d}
function $l(a){var b=Yl().get("requests",!0)||{};delete b[a];Yl().set("requests",b,86400,!0)}
function am(a){var b=Yl().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Ul(Tl(!1));ub(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),bm(a,d.method,e,{}));delete b[c]}}Yl().set("requests",b,86400,!0)}}
;function cm(){}
cm.prototype.S=function(a,b){return dm(a,1,b)};
function em(a,b){dm(a,2,b)}
function fm(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function gm(){cm.apply(this,arguments)}
t(gm,cm);function hm(){gm.i||(gm.i=new gm);return gm.i}
function dm(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):fl(a,c||0)}
gm.prototype.fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):gl(a)}};
gm.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
gm.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};var Xh=hm();var im=ad||bd;function jm(a){var b=Tb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var km=function(){var a;return function(){a||(a=new Vl("ytidb"));return a}}();
function lm(){var a;return null==(a=km())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var mm=[],nm,om=!1;function pm(){var a={};for(nm=new qm(void 0===a.handleError?rm:a.handleError,void 0===a.logEvent?sm:a.logEvent);0<mm.length;)switch(a=mm.shift(),a.type){case "ERROR":nm.handleError(a.payload);break;case "EVENT":nm.logEvent(a.eventType,a.payload)}}
function tm(a){om||(nm?nm.handleError(a):(mm.push({type:"ERROR",payload:a}),10<mm.length&&mm.shift()))}
function um(a,b){om||(nm?nm.logEvent(a,b):(mm.push({type:"EVENT",eventType:a,payload:b}),10<mm.length&&mm.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ha(b))}
t(Q,Error);function vm(){try{return wm(),!0}catch(a){return!1}}
function wm(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function xm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function ym(a){return a.substr(0,a.indexOf(":"))||a}
;var zm={},Am=(zm.AUTH_INVALID="No user identifier specified.",zm.EXPLICIT_ABORT="Transaction was explicitly aborted.",zm.IDB_NOT_SUPPORTED="IndexedDB is not supported.",zm.MISSING_INDEX="Index not created.",zm.MISSING_OBJECT_STORES="Object stores not created.",zm.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",zm.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",zm.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
zm.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",zm.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",zm.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",zm.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",zm),Bm={},Cm=(Bm.AUTH_INVALID="ERROR",Bm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Bm.EXPLICIT_ABORT="IGNORED",Bm.IDB_NOT_SUPPORTED="ERROR",Bm.MISSING_INDEX=
"WARNING",Bm.MISSING_OBJECT_STORES="ERROR",Bm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Bm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Bm.QUOTA_EXCEEDED="WARNING",Bm.QUOTA_MAYBE_EXCEEDED="WARNING",Bm.UNKNOWN_ABORT="WARNING",Bm.INCOMPATIBLE_DB_VERSION="WARNING",Bm),Dm={},Em=(Dm.AUTH_INVALID=!1,Dm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Dm.EXPLICIT_ABORT=!1,Dm.IDB_NOT_SUPPORTED=!1,Dm.MISSING_INDEX=!1,Dm.MISSING_OBJECT_STORES=!1,Dm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Dm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Dm.QUOTA_EXCEEDED=!1,Dm.QUOTA_MAYBE_EXCEEDED=!0,Dm.UNKNOWN_ABORT=!0,Dm.INCOMPATIBLE_DB_VERSION=!1,Dm);function Fm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Am[a]:c;d=void 0===d?Cm[a]:d;e=void 0===e?Em[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,Fm.prototype)}
t(Fm,Q);function Gm(a,b){Fm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Am.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Gm.prototype)}
t(Gm,Fm);function Hm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Hm.prototype)}
t(Hm,Error);var Im=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Jm(a,b,c,d){b=ym(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Fm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Fm("QUOTA_EXCEEDED",a);if(cd&&"UnknownError"===e.name)return new Fm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Hm)return new Fm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Im.some(function(f){return e.message.includes(f)}))return new Fm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Fm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Zb:e.name})];e.level="WARNING";return e}
function Km(a,b,c){var d=lm();return new Fm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Lm(a){if(!a)throw Error();throw a;}
function Mm(a){return a}
function Nm(a){this.i=a}
function Om(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
Om.all=function(a){return new Om(new Nm(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={xa:0};f.xa<a.length;f={xa:f.xa},++f.xa)Om.resolve(a[f.xa]).then(function(g){return function(h){d[g.xa]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Om.resolve=function(a){return new Om(new Nm(function(b,c){a instanceof Om?a.then(b,c):b(a)}))};
Om.reject=function(a){return new Om(new Nm(function(b,c){c(a)}))};
Om.prototype.then=function(a,b){var c=this,d=null!=a?a:Mm,e=null!=b?b:Lm;return new Om(new Nm(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Pm(c,c,d,f,g)}),c.onRejected.push(function(){Qm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Pm(c,c,d,f,g):"REJECTED"===c.state.status&&Qm(c,c,e,f,g)}))};
Om.prototype.catch=function(a){return this.then(void 0,a)};
function Pm(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Om?Rm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Om?Rm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Om?Rm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Sm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Tm(a){return new Promise(function(b,c){Sm(a,b,c)})}
function Um(a){return new Om(new Nm(function(b,c){Sm(a,b,c)}))}
;function Vm(a,b){return new Om(new Nm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Wm(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Wm.prototype;l.add=function(a,b,c){return Xm(this,[a],{mode:"readwrite",U:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Xm(this,[a],{mode:"readwrite",U:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Xm(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).count(b)})};
function Ym(a,b,c){a=a.i.createObjectStore(b,c);return new Zm(a)}
l.delete=function(a,b){return Xm(this,[a],{mode:"readwrite",U:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Xm(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).get(b)})};
function $m(a,b){return Xm(a,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(c){c=c.objectStore("LogsRequestsStore");return Um(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Xm(a,b,c,d){var e,f,g,h,k,m,q,r,x,v,A,E;return w(function(F){switch(F.i){case 1:var N={mode:"readonly",U:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?N.mode=c:Object.assign(N,c);e=N;a.transactionCount++;f=e.U?3:1;g=0;case 2:if(h){F.u(3);break}g++;k=Math.round(P());ya(F,4);m=a.i.transaction(b,e.mode);N=new an(m);N=bn(N,d);return u(F,N,6);case 6:return q=F.j,r=Math.round(P()),cn(a,k,r,g,void 0,b.join(),e),F.return(q);case 4:x=Aa(F);v=Math.round(P());A=Jm(x,a.i.name,b.join(),a.i.version);
if((E=A instanceof Fm&&!A.i)||g>=f)cn(a,k,v,g,A,b.join(),e),h=A;F.u(2);break;case 3:return F.return(Promise.reject(h))}})}
function cn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Fm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&um("QUOTA_EXCEEDED",{dbName:ym(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Fm&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),um("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),dn(a,!1,d,f,b,g.tag),tm(e)):dn(a,!0,d,f,b,g.tag)}
function dn(a,b,c,d,e,f){um("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function Zm(a){this.i=a}
l=Zm.prototype;l.add=function(a,b){return Um(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return Um(this.i.clear()).then(function(){})};
l.count=function(a){return Um(this.i.count(a))};
function en(a,b){return fn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?en(this,a):Um(this.i.delete(a))};
l.get=function(a){return Um(this.i.get(a))};
l.index=function(a){try{return new gn(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Hm(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function fn(a,b,c){a=a.i.openCursor(b.query,b.direction);return hn(a).then(function(d){return Vm(d,c)})}
function an(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=Fm;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function bn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
an.prototype.abort=function(){this.i.abort();this.j=!0;throw new Fm("EXPLICIT_ABORT");};
an.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Zm(a),this.l.set(a,b));return b};
function gn(a){this.i=a}
l=gn.prototype;l.count=function(a){return Um(this.i.count(a))};
l.delete=function(a){return jn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Um(this.i.get(a))};
l.getKey=function(a){return Um(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function jn(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return hn(a).then(function(d){return Vm(d,c)})}
function kn(a,b){this.request=a;this.cursor=b}
function hn(a){return Um(a).then(function(b){return b?new kn(a,b):null})}
l=kn.prototype;l.advance=function(a){this.cursor.advance(a);return hn(this.request)};
l.continue=function(a){this.cursor.continue(a);return hn(this.request)};
l.delete=function(){return Um(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Um(this.cursor.update(a))};function ln(a,b,c){return new Promise(function(d,e){function f(){x||(x=new Wm(g.result,{closed:r}));return x}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.nd,q=c.upgrade,r=c.closed,x;g.addEventListener("upgradeneeded",function(v){try{if(null===v.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");v.dataLoss&&"none"!==v.dataLoss&&um("IDB_DATA_CORRUPTED",{reason:v.dataLossMessage||"unknown reason",dbName:ym(a)});var A=f(),E=new an(g.transaction);
q&&q(A,function(F){return v.oldVersion<F&&v.newVersion>=F},E);
E.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var v=g.result;k&&v.addEventListener("versionchange",function(){k(f())});
v.addEventListener("close",function(){um("IDB_UNEXPECTEDLY_CLOSED",{dbName:ym(a),dbVersion:v.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function mn(a,b,c){c=void 0===c?{}:c;return ln(a,b,c)}
function nn(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.i)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),u(g,Tm(c),4);
if(2!=g.i)return za(g,0);f=Aa(g);throw Jm(f,a,"",-1);})}
;function on(a){return new Promise(function(b){em(function(){b()},a)})}
function pn(a,b){this.name=a;this.options=b;this.m=!0;this.s=this.o=0;this.j=500}
pn.prototype.l=function(a,b,c){c=void 0===c?{}:c;return mn(a,b,c)};
pn.prototype.delete=function(a){a=void 0===a?{}:a;return nn(this.name,a)};
function qn(a,b){return new Fm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function rn(a,b){if(!b)throw Km("openWithToken",ym(a.name));return sn(a)}
function sn(a){function b(){var f,g,h,k,m,q,r,x,v,A;return w(function(E){switch(E.i){case 1:return g=null!=(f=Error().stack)?f:"",ya(E,2),u(E,a.l(a.name,a.options.version,d),4);case 4:h=E.j;for(var F=a.options,N=[],O=p(Object.keys(F.Ia)),R=O.next();!R.done;R=O.next()){R=R.value;var U=F.Ia[R],ca=void 0===U.Vc?Number.MAX_VALUE:U.Vc;!(h.i.version>=U.jb)||h.i.version>=ca||h.i.objectStoreNames.contains(R)||N.push(R)}k=N;if(0===k.length){E.u(5);break}m=Object.keys(a.options.Ia);q=h.objectStoreNames();if(a.s<
Gk("ytidb_reopen_db_retries",0))return a.s++,h.close(),tm(new Fm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());if(!(a.o<Gk("ytidb_remake_db_retries",1))){E.u(6);break}a.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){E.u(7);break}return u(E,on(a.j),8);case 8:a.j*=2;case 7:return u(E,a.delete(),9);case 9:return tm(new Fm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());
case 6:throw new Gm(q,m);case 5:return E.return(h);case 2:r=Aa(E);if(r instanceof DOMException?"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){E.u(10);break}return u(E,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:x=E.j;v=x.i.version;if(void 0!==a.options.version&&v>a.options.version+1)throw x.close(),
a.m=!1,qn(a,v);return E.return(x);case 10:throw c(),r instanceof Error&&!M("ytidb_async_stack_killswitch")&&(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),Jm(r,a.name,"",null!=(A=a.options.version)?A:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw qn(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,nd:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var tn=new pn("YtIdbMeta",{Ia:{databases:{jb:1}},upgrade:function(a,b){b(1)&&Ym(a,"databases",{keyPath:"actualName"})}});
function un(a,b){var c;return w(function(d){if(1==d.i)return u(d,rn(tn,b),2);c=d.j;return d.return(Xm(c,["databases"],{U:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Um(f.i.put(a,void 0)).then(function(){})})}))})}
function vn(a,b){var c;return w(function(d){if(1==d.i)return a?u(d,rn(tn,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function wn(a,b){var c,d;return w(function(e){return 1==e.i?(c=[],u(e,rn(tn,b),2)):3!=e.i?(d=e.j,u(e,Xm(d,["databases"],{U:!0,mode:"readonly"},function(f){c.length=0;return fn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function xn(a){return wn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function yn(a,b,c){return wn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function zn(a){var b,c;return w(function(d){if(1==d.i)return b=wm("YtIdbMeta hasAnyMeta other"),u(d,wn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var An,Bn=new function(){}(new function(){});
function Cn(){var a,b,c,d;return w(function(e){switch(e.i){case 1:a=lm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=im)f=/WebKit\/([0-9]+)/.exec(Tb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Tb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Nc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return u(e,un(d,Bn),4);case 4:return u(e,vn("yt-idb-test-do-not-use",Bn),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Dn(){if(void 0!==An)return An;om=!0;return An=Cn().then(function(a){om=!1;var b;if(null!=(b=km())&&b.i){var c;b={hasSucceededOnce:(null==(c=lm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=km())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function En(){return B("ytglobal.idbToken_")||void 0}
function Fn(){var a=En();return a?Promise.resolve(a):Dn().then(function(b){(b=b?Bn:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var Gn=0;function Hn(a,b){Gn||(Gn=Xh.S(function(){var c,d,e,f,g;return w(function(h){switch(h.i){case 1:return u(h,Fn(),2);case 2:c=h.j;if(!c)return h.return();d=!0;ya(h,3);return u(h,yn(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return u(h,nn(f.actualName),7);case 7:return u(h,vn(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),tm(g),d=!1;case 4:Xh.fa(Gn),Gn=0,d&&Hn(a,b),h.i=0}})}))}
function In(){var a;return w(function(b){return 1==b.i?u(b,Fn(),2):(a=b.j)?b.return(zn(a)):b.return(!1)})}
new Bh;function Jn(a){if(!vm())throw a=new Fm("AUTH_INVALID",{dbName:a}),tm(a),a;var b=wm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Kn(a,b,c,d){var e,f,g,h,k,m;return w(function(q){switch(q.i){case 1:return f=null!=(e=Error().stack)?e:"",u(q,Fn(),2);case 2:g=q.j;if(!g)throw h=Km("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),tm(h),h;xm(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Jn(a);ya(q,3);return u(q,un(k,g),5);case 5:return u(q,mn(k.actualName,b,d),6);case 6:return q.return(q.j);case 3:return m=Aa(q),ya(q,7),u(q,vn(k.actualName,g),9);case 9:za(q,
8);break;case 7:Aa(q);case 8:throw m;}})}
function Ln(a,b,c){c=void 0===c?{}:c;return Kn(a,b,!1,c)}
function Mn(a,b,c){c=void 0===c?{}:c;return Kn(a,b,!0,c)}
function Nn(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.i)return u(e,Fn(),2);if(3!=e.i){c=e.j;if(!c)return e.return();xm(a);d=Jn(a);return u(e,nn(d.actualName,b),3)}return u(e,vn(d.actualName,c),0)})}
function On(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.i?u(e,nn(d.actualName,b),2):u(e,vn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Pn(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.i)return u(d,Fn(),2);if(3!=d.i){b=d.j;if(!b)return d.return();xm("LogsDatabaseV2");return u(d,xn(b),3)}c=d.j;return u(d,On(c,a,b),0)})}
function Qn(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.i)return u(d,Fn(),2);if(3!=d.i){c=d.j;if(!c)return d.return();xm(a);return u(d,nn(a,b),3)}return u(d,vn(a,c),0)})}
;function Rn(a){this.Sa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.Aa=function(){};
this.now=Date.now;this.Ga=!1;var b;this.kc=null!=(b=a.kc)?b:100;var c;this.fc=null!=(c=a.fc)?c:1;var d;this.dc=null!=(d=a.dc)?d:2592E6;var e;this.ac=null!=(e=a.ac)?e:12E4;var f;this.ec=null!=(f=a.ec)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.Xa=!!a.Xa;var h;this.Va=null!=(h=a.Va)?h:.1;var k;this.cb=null!=(k=a.cb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Aa&&(this.Aa=a.Aa);a.Ga&&(this.Ga=a.Ga);a.Sa&&(this.Sa=a.Sa);this.I=a.I;this.Z=a.Z;this.O=a.O;this.M=a.M;this.ia=a.ia;this.wb=
a.wb;this.vb=a.vb;Sn(this)&&(!this.I||this.I("networkless_logging"))&&Tn(this)}
function Tn(a){Sn(a)&&!a.Ga&&(a.i=!0,a.Xa&&Math.random()<=a.Va&&a.O.zc(a.H),Un(a),a.M.L()&&a.Ma(),a.M.aa(a.wb,a.Ma.bind(a)),a.M.aa(a.vb,a.Ib.bind(a)))}
l=Rn.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Sn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.H).then(function(e){d.id=e;c.M.L()&&Vn(c,d)}).catch(function(e){Vn(c,d);
Wn(c,e)})}else this.ia(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Sn(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.I&&this.I("nwl_skip_retry")&&(e.skipRetry=c);if(this.M.L()||this.I&&this.I("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.i)return u(k,d.O.set(e,d.H).catch(function(m){Wn(d,m)}),2);
f(g,h);k.i=0})}}this.ia(a,b,e.skipRetry)}else this.O.set(e,this.H).catch(function(g){d.ia(a,b,e.skipRetry);
Wn(d,g)})}else this.ia(a,b,this.I&&this.I("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Sn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.za(d.id,c.H):e=!0;c.M.ha&&c.I&&c.I("vss_network_hint")&&c.M.ha(!0);f(g,h)};
this.ia(d.url,d.options);this.O.set(d,this.H).then(function(g){d.id=g;e&&c.O.za(d.id,c.H)}).catch(function(g){Wn(c,g)})}else this.ia(a,b)};
l.Ma=function(){var a=this;if(!Sn(this))throw Km("throttleSend");this.j||(this.j=this.Z.S(function(){var b;return w(function(c){if(1==c.i)return u(c,a.O.Sb("NEW",a.H),2);if(3!=c.i)return b=c.j,b?u(c,Vn(a,b),3):(a.Ib(),c.return());a.j&&(a.j=0,a.Ma());c.i=0})},this.kc))};
l.Ib=function(){this.Z.fa(this.j);this.j=0};
function Vn(a,b){var c,d;return w(function(e){switch(e.i){case 1:if(!Sn(a))throw c=Km("immediateSend"),c;if(void 0===b.id){e.u(2);break}return u(e,a.O.Pc(b.id,a.H),3);case 3:(d=e.j)?b=d:a.Aa(Error("The request cannot be found in the database."));case 2:if(Xn(a,b,a.dc)){e.u(4);break}a.Aa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return u(e,a.O.za(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=Yn(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return u(e,a.O.za(b.id,a.H),8);case 8:a.ia(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Yn(a,b){if(!Sn(a))throw Km("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:g=Zn(f);if(!(a.I&&a.I("nwl_consider_error_code")&&g||a.I&&!a.I("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.cb)){m.u(2);break}if(!a.M.Ka){m.u(3);break}return u(m,a.M.Ka(),3);case 3:if(a.M.L()){m.u(2);break}c(e,f);if(!a.I||!a.I("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return u(m,a.O.zb(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.I&&a.I("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.cb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.fc?u(m,a.O.zb(b.id,a.H),12):u(m,a.O.za(b.id,a.H),8);case 12:a.Z.S(function(){a.M.L()&&a.Ma()},a.ec);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):u(h,a.O.za(b.id,a.H),2);a.M.ha&&a.I&&a.I("vss_network_hint")&&a.M.ha(!0);d(e,f);h.i=0})};
return b}
function Xn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Un(a){if(!Sn(a))throw Km("retryQueuedRequests");a.O.Sb("QUEUED",a.H).then(function(b){b&&!Xn(a,b,a.ac)?a.Z.S(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):u(c,a.O.zb(b.id,a.H),2);Un(a);c.i=0})}):a.M.L()&&a.Ma()})}
function Wn(a,b){a.oc&&!a.M.L()?a.oc(b):a.handleError(b)}
function Sn(a){return!!a.H||a.Sa}
function Zn(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function $n(a,b){this.version=a;this.args=b}
;function ao(a,b){this.topic=a;this.i=b}
ao.prototype.toString=function(){return this.topic};var bo=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Da;K.prototype.publish=K.prototype.qa;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",bo);var co=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",co);var eo=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",eo);var fo=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",fo);
z("ytPubsub2Pubsub2SkipSubKey",null);function go(a,b){var c=ho();c&&c.publish.call(c,a.toString(),a,b)}
function io(a){var b=jo,c=ho();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(co[d])try{if(f&&b instanceof ao&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.oa){var m=new h;h.oa=m.version}var q=h.oa}catch(F){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var r=q.construct;
var x=k.args,v=x.length;if(0<v){var A=Array(v);for(k=0;k<v;k++)A[k]=x[k];var E=A}else E=[];f=r.call(q,h,E)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){Mk(F)}},fo[b.toString()]?B("yt.scheduler.instance")?Xh.S(g):fl(g,0):g())});
co[d]=!0;eo[b.toString()]||(eo[b.toString()]=[]);eo[b.toString()].push(d);return d}
function ko(){var a=lo,b=io(function(c){a.apply(void 0,arguments);mo(b)});
return b}
function mo(a){var b=ho();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete co[c]}))}
function ho(){return B("ytPubsub2Pubsub2Instance")}
;function no(a,b){pn.call(this,a,b);this.options=b;xm(a)}
t(no,pn);function oo(a,b){var c;return function(){c||(c=new no(a,b));return c}}
no.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ab?Mn:Ln)(a,b,Object.assign({},c))};
no.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ab?Qn:Nn)(this.name,a)};
function po(a,b){return oo(a,b)}
;var qo;
function ro(){if(qo)return qo();var a={};qo=po("LogsDatabaseV2",{Ia:(a.LogsRequestsStore={jb:2},a),Ab:!1,upgrade:function(b,c,d){c(2)&&Ym(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return qo()}
;function so(a){return rn(ro(),a)}
function to(a,b){var c,d,e,f;return w(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},u(g,so(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),u(g,$m(d,e),3);f=g.j;c.pd=P();uo(c);return g.return(f)})}
function vo(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},u(m,so(b),2);if(3!=m.i)return d=m.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,u(m,Xm(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(q){return jn(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===a&&(k.status="QUEUED",
r.update(k)))})}),3);
c.pd=P();uo(c);return m.return(k)})}
function wo(a,b){var c;return w(function(d){if(1==d.i)return u(d,so(b),2);c=d.j;return d.return(Xm(c,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Um(f.i.put(g,void 0)).then(function(){return g})})}))})}
function xo(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.i)return u(e,so(b),2);d=e.j;return e.return(Xm(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Um(g.i.put(h,void 0)).then(function(){return h})):Om.resolve(void 0)})}))})}
function yo(a,b){var c;return w(function(d){if(1==d.i)return u(d,so(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function zo(a){var b,c;return w(function(d){if(1==d.i)return u(d,so(a),2);b=d.j;c=P()-2592E6;return u(d,Xm(b,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){return fn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ao(){return w(function(a){return u(a,Pn(),0)})}
function uo(a){M("nwl_csi_killswitch")||.01>=Math.random()&&go("nwl_transaction_latency_payload",a)}
;var Bo={},Co=po("ServiceWorkerLogsDatabase",{Ia:(Bo.SWHealthLog={jb:1},Bo),Ab:!0,upgrade:function(a,b){b(1)&&Ym(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Do(a){return rn(Co(),a)}
function Eo(a){var b,c;return w(function(d){if(1==d.i)return u(d,Do(a),2);b=d.j;c=P()-2592E6;return u(d,Xm(b,["SWHealthLog"],{mode:"readwrite",U:!0},function(e){return fn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Fo(a){var b;return w(function(c){if(1==c.i)return u(c,Do(a),2);b=c.j;return u(c,b.clear("SWHealthLog"),0)})}
;var Go={},Ho=0;
function Io(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)pl(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))pl(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new bb({url:a});if(d.l&&d.j||d.m){var e=mc(nc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(Bc),h=Ac(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var q=!f;break b}}catch(x){}q=!1}if(q){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var r=!0;break b}}catch(x){}r=!1}b=r?!0:!1}else b=!1;b||Jo(a)}}
function Jo(a){var b=new Image,c=""+Ho++;Go[c]=b;b.onload=b.onerror=function(){delete Go[c]};
b.src=a}
;function Ko(){this.i=new Map;this.j=!1}
function Lo(){if(!Ko.i){var a=B("yt.networkRequestMonitor.instance")||new Ko;z("yt.networkRequestMonitor.instance",a);Ko.i=a}return Ko.i}
Ko.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Ko.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
Ko.prototype.removeParams=function(a){return a.split("?")[0]};
Ko.prototype.removeParams=Ko.prototype.removeParams;Ko.prototype.isEndpointCFR=Ko.prototype.isEndpointCFR;Ko.prototype.requestComplete=Ko.prototype.requestComplete;Ko.getInstance=Lo;var Mo;function No(){Mo||(Mo=new Vl("yt.offline"));return Mo}
function Oo(a){if(M("offline_error_handling")){var b=No().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);No().set("errors",b,2592E3,!0)}}
;function Po(){af.call(this);var a=this;this.l=!1;this.j=Wh();this.j.aa("networkstatus-online",function(){if(a.l&&M("offline_error_handling")){var b=No().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Q(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Mk(d)}No().set("errors",{},2592E3,!0)}}})}
t(Po,af);function Qo(){if(!Po.i){var a=B("yt.networkStatusManager.instance")||new Po;z("yt.networkStatusManager.instance",a);Po.i=a}return Po.i}
l=Po.prototype;l.L=function(){return this.j.L()};
l.ha=function(a){this.j.j=a};
l.Jc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Dc=function(){this.l=!0};
l.aa=function(a,b){return this.j.aa(a,b)};
l.Ka=function(a){a=Uh(this.j,a);a.then(function(b){M("use_cfr_monitor")&&Lo().requestComplete("generate_204",b)});
return a};
Po.prototype.sendNetworkCheckRequest=Po.prototype.Ka;Po.prototype.listen=Po.prototype.aa;Po.prototype.enableErrorFlushing=Po.prototype.Dc;Po.prototype.getWindowStatus=Po.prototype.Jc;Po.prototype.networkStatusHint=Po.prototype.ha;Po.prototype.isNetworkAvailable=Po.prototype.L;Po.getInstance=Qo;function Ro(a){a=void 0===a?{}:a;af.call(this);var b=this;this.j=this.s=0;this.l=Qo();var c=B("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.fb?(this.fb=a.fb,c("networkstatus-online",function(){So(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){So(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){bf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){bf(b,"publicytnetworkstatus-offline")})))}
t(Ro,af);Ro.prototype.L=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
Ro.prototype.ha=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
Ro.prototype.Ka=function(a){var b=this,c;return w(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return M("skip_network_check_if_cfr")&&Lo().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ha((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.L())})):c?d.return(c(a)):d.return(!0)})};
function So(a,b){a.fb?a.j?(Xh.fa(a.s),a.s=Xh.S(function(){a.o!==b&&(bf(a,b),a.o=b,a.j=P())},a.fb-(P()-a.j))):(bf(a,b),a.o=b,a.j=P()):bf(a,b)}
;var To;function Uo(){Rn.call(this,{O:{zc:zo,za:yo,Sb:vo,Pc:wo,zb:xo,set:to},M:Vo(),handleError:Mk,Aa:Nk,ia:Wo,now:P,oc:Oo,Z:hm(),wb:"publicytnetworkstatus-online",vb:"publicytnetworkstatus-offline",Xa:!0,Va:.1,cb:Gk("potential_esf_error_limit",10),I:M,Ga:!(vm()&&Xo())});this.l=new Bh;M("networkless_immediately_drop_all_requests")&&Ao();Qn("LogsDatabaseV2")}
t(Uo,Rn);function Yo(){var a=B("yt.networklessRequestController.instance");a||(a=new Uo,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&Fn().then(function(b){a.H=b;Tn(a);a.l.resolve();a.Xa&&Math.random()<=a.Va&&a.H&&Eo(a.H);M("networkless_immediately_drop_sw_health_store")&&Zo(a)}));
return a}
Uo.prototype.writeThenSend=function(a,b){b||(b={});vm()||(this.i=!1);Rn.prototype.writeThenSend.call(this,a,b)};
Uo.prototype.sendThenWrite=function(a,b,c){b||(b={});vm()||(this.i=!1);Rn.prototype.sendThenWrite.call(this,a,b,c)};
Uo.prototype.sendAndWrite=function(a,b){b||(b={});vm()||(this.i=!1);Rn.prototype.sendAndWrite.call(this,a,b)};
Uo.prototype.awaitInitialization=function(){return this.l.promise};
function Zo(a){var b;w(function(c){if(!a.H)throw b=Km("clearSWHealthLogsDb"),b;return c.return(Fo(a.H).catch(function(d){a.handleError(d)}))})}
function Wo(a,b,c){M("use_cfr_monitor")&&$o(a,b);if(M("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P())}c&&0===Object.keys(b).length?Io(a):ml(a,b)}
function Vo(){To||(To=new Ro({Oc:!0,Ec:!0}));return To}
function $o(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Lo().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Lo().requestComplete(a,!0);d(e,f)}}
function Xo(){return"www.youtube-nocookie.com"!==oc(document.location.toString())}
;var ap=!1,bp=0,cp=0,dp,ep=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:ap,potentialEsfErrorCounter:cp};z("ytNetworklessLoggingInitializationOptions",ep);
function fp(){var a;w(function(b){switch(b.i){case 1:return u(b,Fn(),2);case 2:a=b.j;if(!a||!vm()&&!M("nwl_init_require_datasync_id_killswitch")||!Xo()){b.u(0);break}ap=!0;ep.isNwlInitialized=ap;if(!M("use_new_nwl_initialization")){b.u(4);break}return u(b,Yo().awaitInitialization(),5);case 5:return b.return();case 4:return u(b,Qn("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return u(b,zo(a),8);case 8:return u(b,Eo(a),7);case 7:gp();hp().L()&&ip();hp().aa("publicytnetworkstatus-online",
ip);hp().aa("publicytnetworkstatus-offline",jp);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return u(b,kp(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return u(b,Ao(),0);b.u(0)}})}
function lp(a,b){function c(d){var e=hp().L();if(!mp()||!d||e&&M("vss_networkless_bypass_write"))np(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};to(f,d).then(function(g){f.id=g;hp().L()&&op(f)}).catch(function(g){op(f);
hp().L()?Mk(g):Oo(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Fn().then(function(d){c(d)}):c(En())}
function Bp(a,b){function c(d){if(mp()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&Lo().requestComplete(e.url,!0);void 0!==e.id?yo(e.id,d):f=!0;M("vss_network_hint")&&hp().ha(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){Lo().requestComplete(e.url,!1);h(k,m)}}np(e.url,e.options);
to(e,d).then(function(k){e.id=k;f&&yo(e.id,d)}).catch(function(k){hp().L()?Mk(k):Oo(k)})}else np(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Fn().then(function(d){c(d)}):c(En())}
function ip(){var a=En();if(!a)throw Km("throttleSend");bp||(bp=Xh.S(function(){var b;return w(function(c){if(1==c.i)return u(c,vo("NEW",a),2);if(3!=c.i)return b=c.j,b?u(c,op(b),3):(jp(),c.return());bp&&(bp=0,ip());c.i=0})},100))}
function jp(){Xh.fa(bp);bp=0}
function op(a){var b,c,d;return w(function(e){switch(e.i){case 1:b=En();if(!b)throw c=Km("immediateSend"),c;if(void 0===a.id){e.u(2);break}return u(e,wo(a.id,b),3);case 3:(d=e.j)?a=d:Nk(Error("The request cannot be found in the database."));case 2:if($p(a,2592E6)){e.u(4);break}Nk(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return u(e,yo(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=aq(a));var f=a;if(M("use_request_time_ms_header")){var g;
if(null==f?0:null==(g=f.options)?0:g.headers)f.options.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P()))}else{var h,k;if(null==f?0:null==(h=f.options)?0:null==(k=h.postParams)?0:k.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P())}a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return u(e,yo(a.id,b),8);case 8:np(a.url,a.options,!!a.skipRetry),e.i=0}})}
function aq(a){var b=En();if(!b)throw Km("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&Lo().requestComplete(a.url,!1);g=Zn(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&bq()<=Gk("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||Lo().isEndpointCFR(a.url))){m.u(3);break}return u(m,hp().Ka(),3);case 3:if(hp().L()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return u(m,xo(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&bq()>Gk("potential_esf_error_limit",10))return m.return();B("ytNetworklessLoggingInitializationOptions")&&ep.potentialEsfErrorCounter++;cp++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?u(m,xo(a.id,b),12):u(m,yo(a.id,b),8);case 12:Xh.S(function(){hp().L()&&ip()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return M("use_cfr_monitor")&&Lo().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):u(h,yo(a.id,b),2);M("vss_network_hint")&&hp().ha(!0);d(e,f);h.i=0})};
return a}
function $p(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function gp(){var a=En();if(!a)throw Km("retryQueuedRequests");vo("QUEUED",a).then(function(b){b&&!$p(b,12E4)?Xh.S(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):u(c,xo(b.id,a),2);gp();c.i=0})}):hp().L()&&ip()})}
function kp(){var a,b;return w(function(c){a=En();if(!a)throw b=Km("clearSWHealthLogsDb"),b;return c.return(Fo(a).catch(function(d){Mk(d)}))})}
function hp(){if(M("use_new_nwl"))return Vo();dp||(dp=new Ro({Oc:!0,Ec:!0}));return dp}
function np(a,b,c){c&&0===Object.keys(b).length?Io(a):ml(a,b)}
function mp(){return B("ytNetworklessLoggingInitializationOptions")?ep.isNwlInitialized:ap}
function bq(){return B("ytNetworklessLoggingInitializationOptions")?ep.potentialEsfErrorCounter:cp}
;function cq(a){var b=this;this.config_=null;a?this.config_=a:Ll()&&(this.config_=Ml());dm(function(){am(b)},0,5E3)}
cq.prototype.isReady=function(){!this.config_&&Ll()&&(this.config_=Ml());return!!this.config_};
function bm(a,b,c,d){function e(A){A=void 0===A?!1:A;var E;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(E=Zl(b,c,m,k)),E)){var F=g.onSuccess,N=g.onFetchSuccess;g.onSuccess=function(O,R){$l(E);F(O,R)};
c.onFetchSuccess=function(O,R){$l(E);N(O,R)}}try{A&&d.retry&&!d.Xb.bypassNetworkless?(g.method="POST",d.Xb.writeThenSend?M("use_new_nwl_wts")?Yo().writeThenSend(v,g):lp(v,g):M("use_new_nwl_saw")?Yo().sendAndWrite(v,g):Bp(v,g)):(g.method="POST",g.postParams||(g.postParams={}),ml(v,g))}catch(O){if("InvalidAccessError"==O.name)E&&($l(E),E=0),Nk(Error("An extension is blocking network request."));
else throw O;}E&&dm(function(){am(a)},0,5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Nk(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Mk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,E){if(d.onSuccess)d.onSuccess(E)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,E){if(d.onError)d.onError(E)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Lc)&&(h=f);var k=a.config_.Nc||!1,m=Tl(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},x=a.config_.Mc&&f;x=x&&f.startsWith("Bearer");x||(r.key=a.config_.innertubeApiKey);var v=Zk(""+h+q,r||{},!0);M("use_new_nwl")&&Yo().i||!M("use_new_nwl")&&
mp()?Dn().then(function(A){e(A)}):e(!1)}
;var dq=0,eq=Pc?"webkit":Oc?"moz":Mc?"ms":Lc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++dq});var fq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function gq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in fq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function hq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
gq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
gq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
gq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var qb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",qb);var iq=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",iq);
function jq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return pb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&ub(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var kq=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function lq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=jq(a,b,c,d);if(e)return e;e=++iq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new gq(h);if(!lf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new gq(h);
h.currentTarget=a;return c.call(a,h)};
g=Lk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),kq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);qb[e]=[a,b,c,g,d];return e}
function mq(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in qb){var c=qb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?kq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete qb[b]}}))}
;var nq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function oq(a){this.G=a;this.j=null;this.o=0;this.v=null;this.s=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.m=0;this.K=lq(window,"mousemove",Wa(this.P,this));a=Wa(this.J,this);"function"===typeof a&&(a=Lk(a));this.R=window.setInterval(a,25)}
Za(oq,J);oq.prototype.P=function(a){void 0===a.i&&hq(a);var b=a.i;void 0===a.j&&hq(a);this.j=new gf(b,a.j)};
oq.prototype.J=function(){if(this.j){var a=nq();if(0!=this.o){var b=this.v,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.l[this.m]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.G();this.s=d}this.o=a;this.v=this.j;this.m=(this.m+1)%4}};
oq.prototype.D=function(){window.clearInterval(this.R);mq(this.K)};var pq={};
function qq(a){var b=void 0===a?{}:a;a=void 0===b.Tc?!1:b.Tc;b=void 0===b.Fc?!0:b.Fc;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&rq();lq(document,"keydown",rq);lq(document,"keyup",rq);lq(document,"mousedown",rq);lq(document,"mouseup",rq);a?lq(window,"touchmove",function(){sq("touchmove",200)},{passive:!0}):(lq(window,"resize",function(){sq("resize",200)}),b&&lq(window,"scroll",function(){sq("scroll",200)}));
new oq(function(){sq("mouse",100)});
lq(document,"touchstart",rq,{passive:!0});lq(document,"touchend",rq,{passive:!0})}}
function sq(a,b){pq[a]||(pq[a]=!0,Xh.S(function(){rq();pq[a]=!1},b))}
function rq(){null==B("_lact",window)&&qq();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function tq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var uq=y.ytPubsubPubsubInstance||new K,vq=y.ytPubsubPubsubSubscribedKeys||{},wq=y.ytPubsubPubsubTopicToKeys||{},xq=y.ytPubsubPubsubIsSynchronous||{};function yq(a,b){var c=zq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){vq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{xq[a]?f():fl(f,0)}catch(g){Mk(g)}},void 0);
vq[d]=!0;wq[a]||(wq[a]=[]);wq[a].push(d);return d}return 0}
function Aq(a){var b=zq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete vq[c]}))}
function Bq(a,b){var c=zq();c&&c.publish.apply(c,arguments)}
function Cq(a){var b=zq();if(b)if(b.clear(a),a)Dq(a);else for(var c in wq)Dq(c)}
function zq(){return y.ytPubsubPubsubInstance}
function Dq(a){wq[a]&&(a=wq[a],fb(a,function(b){vq[b]&&delete vq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Da;K.prototype.publish=K.prototype.qa;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",uq);z("ytPubsubPubsubTopicToKeys",wq);z("ytPubsubPubsubIsSynchronous",xq);z("ytPubsubPubsubSubscribedKeys",vq);function Eq(a){this.policy=a;this.store=[];this.i={}}
Eq.prototype.storePayload=function(a,b){this.store.push({payload:b,keys:a});b=[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/");this.i[b]?this.i[b]++:this.i[b]=1;this.i[b]>=this.policy.maxBatchSize&&(this.policy.onBatchSizeExceeded(a),this.i[b]=0);return b};
Eq.prototype.extractMatchingEntries=function(a){for(var b=[],c=[],d=p(this.store),e=d.next();!e.done;e=d.next()){e=e.value;a:{var f=a;var g=Object.keys(f);g=p(g);for(var h=g.next();!h.done;h=g.next())if(h=h.value,e.keys[h]!==f[h]){f=!1;break a}f=!0}f?b.push(e.payload):c.push(e)}this.store=c;c=0;a=Fq(this,a);a=p(a);for(d=a.next();!d.done;d=a.next())d=d.value,c+=this.i[d],this.i[d]=0;c!==b.length&&Nk(new Q("Transport IMS extracted entries count != keyCounter sum",b.length,c));return b};
Eq.prototype.getSequenceCount=function(a){var b=Fq(this,a);a=0;b=p(b);for(var c=b.next();!c.done;c=b.next())a+=this.i[c.value];return a};
function Fq(a,b){var c=Object.keys(b),d="THIS_KEY_FIELD_NOT_FILLED",e="THIS_KEY_FIELD_NOT_FILLED",f="THIS_KEY_FIELD_NOT_FILLED";c=p(c);for(var g=c.next();!g.done;g=c.next())g=g.value,"auth"===g?d=Gq(b.auth):"isJspb"===g?e=JSON.stringify(b.isJspb):"cttAuthInfo"===g&&(f=Gq(b.cttAuthInfo));b=[];d=[d,e,f];a=p(Object.keys(a.i));for(e=a.next();!e.done;e=a.next()){e=e.value;f=e.split("/");c=!0;for(g=0;g<d.length;g++)if("THIS_KEY_FIELD_NOT_FILLED"!==d[g]&&d[g]!==f[g]){c=!1;break}c&&b.push(e)}return b}
Eq.prototype.getSequenceCount=Eq.prototype.getSequenceCount;Eq.prototype.extractMatchingEntries=Eq.prototype.extractMatchingEntries;Eq.prototype.storePayload=Eq.prototype.storePayload;function Gq(a){return void 0===a?"undefined":a}
;var Hq=Gk("initial_gel_batch_timeout",2E3),Iq=Math.pow(2,16)-1,Jq=void 0;function Kq(){this.l=this.i=this.j=0}
var Lq=new Kq,Mq=new Kq,Nq=!0,Oq=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Oq);var Pq=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",Pq);var Qq=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Qq);var Rq=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Rq);var Sq={};
function Tq(){var a=B("yt.logging.ims");a||(a=new Eq({maxBatchSize:Gk("tvhtml5_logging_max_batch")||Gk("web_logging_max_batch")||100,onBatchSizeExceeded:function(b){Uq({writeThenSend:!0},void 0,b.isJspb)}}),z("yt.logging.ims",a));
return a}
function Vq(a,b){if("log_event"===a.endpoint){Wq(a);var c=Xq(a);if(M("use_new_in_memory_storage")){Sq[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Tq().storePayload(d,a.payload);Yq(b,[],c,!1,d)}else d=Oq.get(c)||[],Oq.set(c,d),d.push(a.payload),Yq(b,d,c)}}
function Zq(a,b){if("log_event"===a.endpoint){Wq(void 0,a);var c=Xq(a,!0);if(M("use_new_in_memory_storage")){Sq[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Tq().storePayload(d,a.payload.toJSON());Yq(b,[],c,!0,d)}else d=Pq.get(c)||[],Pq.set(c,d),a=a.payload.toJSON(),d.push(a),Yq(b,d,c,!0)}}
function Yq(a,b,c,d,e){d=void 0===d?!1:d;a&&(Jq=new a);a=Gk("tvhtml5_logging_max_batch")||Gk("web_logging_max_batch")||100;var f=P(),g=d?Mq.l:Lq.l;b=b.length;e&&(b=Tq().getSequenceCount(e));b>=a?Uq({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=f-g&&($q(d),d?Mq.l=f:Lq.l=f)}
function ar(a,b){if("log_event"===a.endpoint){Wq(a);var c=Xq(a),d=new Map;d.set(c,[a.payload]);b&&(Jq=new b);return new yf(function(e,f){Jq&&Jq.isReady()?br(d,Jq,e,f,{bypassNetworkless:!0},!0):e()})}}
function cr(a,b){if("log_event"===a.endpoint){Wq(void 0,a);var c=Xq(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Jq=new b);return new yf(function(e){Jq&&Jq.isReady()?dr(d,Jq,e,{bypassNetworkless:!0},!0):e()})}}
function Xq(a,b){var c="";if(a.Fa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new pk;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Ud(d,2,qk,c.playlistId);Rq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Qq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Uq(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new yf(function(d,e){c?(gl(Mq.j),gl(Mq.i),Mq.i=0):(gl(Lq.j),gl(Lq.i),Lq.i=0);if(Jq&&Jq.isReady())if(M("use_new_in_memory_storage")){var f=a,g=c,h=Jq;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=Tq().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),dr(k,h,d,f)):(k=Tq().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),m.set(b,k),br(m,h,d,e,f));else if(g){e=p(Object.keys(Sq));for(g=e.next();!g.done;g=
e.next())m=g.value,g=Tq().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),Sq[m]=!1;dr(k,h,d,f)}else{k=p(Object.keys(Sq));for(g=k.next();!g.done;g=k.next()){g=g.value;var q=Tq().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0!==q.length&&m.set(g,q)}br(m,h,d,e,f)}}else f=a,k=c,h=Jq,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Pq.get(b)||[],e.set(b,k),dr(e,h,d,f),Pq.delete(b)):(k=new Map,m=Oq.get(b)||[],k.set(b,m),br(k,h,d,e,f),Oq.delete(b)):k?(dr(Pq,h,d,
f),Pq.clear()):(br(Oq,h,d,e,f),Oq.clear());else $q(c),d()})}
function $q(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Lq.i||a&&!Mq.i)){var b=fl(function(){Uq({writeThenSend:!0},void 0,a)},6E4);
a?Mq.i=b:Lq.i=b}gl(a?Mq.j:Lq.j);b=L("LOGGING_BATCH_TIMEOUT",Gk("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Nq&&(b=Hq);b=fl(function(){Uq({writeThenSend:!0},void 0,a)},b);
a?Mq.j=b:Lq.j=b}
function br(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(P()),h=a.size;a=p(a);for(var k=a.next();!k.done;k=a.next()){var m=p(k.value);k=m.next().value;var q=m.next().value;m=k;k=wb({context:Nl(b.config_||Ml())});if(!Pa(q)&&!M("throw_err_when_logevent_malformed_killswitch")){d();break}k.events=q;(q=Qq[m])&&er(k,m,q);delete Qq[m];m="visitorOnlyApprovedKey"===m;fr(k,g,m);gr(e);q=function(){h--;h||c()};
var r=function(){h--;h||c()};
try{bm(b,"log_event",k,hr(e,m,q,r,f)),Nq=!1}catch(x){Mk(x),d()}}}
function dr(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(P()),g=a.size,h=new Map([].concat(ha(a)));h=p(h);for(var k=h.next();!k.done;k=h.next()){var m=p(k.value).next().value,q=a.get(m);k=new rk;var r=Sl(b.config_||Ml());G(k,$i,1,r);q=q?ir(q):[];q=p(q);for(r=q.next();!r.done;r=q.next())ae(k,3,Sj,r.value);(q=Rq[m])&&jr(k,m,q);delete Rq[m];m="visitorOnlyApprovedKey"===m;kr(k,f,m);gr(d);k=de(k);m=hr(d,m,function(){g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;bm(b,"log_event","",m);Nq=!1}}
function gr(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function hr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,Xb:a,Fa:b,uq:!!e,headers:{},postBodyFormat:"",postBody:""};M("use_request_time_ms_header")&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));return a}
function fr(a,b,c){M("use_request_time_ms_header")||(a.requestTimeMs=String(b));M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=lr(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function kr(a,b,c){M("use_request_time_ms_header")||D(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=lr();var d=new ok;D(d,1,b);D(d,2,c);G(a,ok,5,d)}}
function lr(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Iq/2));a++;a>Iq&&(a=1);Dk("BATCH_CLIENT_COUNTER",a);return a}
function er(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function jr(a,b,c){if(Qd(c,1===Vd(c,qk)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,pk,4,c);a=Wd(a,$i,1)||new $i;c=Wd(a,Yi,3)||new Yi;var e=new Xi;e.setToken(b);D(e,1,d);ae(c,12,Xi,e);G(a,Yi,3,c)}
function ir(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Sj(a[c]))}catch(d){Mk(new Q("Transport failed to deserialize "+String(a[c])))}return b}
function Wq(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);z("yt.logging.transport.scrapedPayloadsForTesting",c)}}
;var mr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",mr);function nr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=tq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.ba&&(a=e.context,b=d.ba,b={index:or(b),groupKey:b},a.sequence=b,d.Pb&&delete mr[d.ba]);(d.hc?ar:Vq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,Fa:d.Fa},c)}
function pr(a){Uq(void 0,void 0,void 0===a?!1:a)}
function or(a){mr[a]=a in mr?mr[a]+1:0;return mr[a]}
;var qr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",qr);function rr(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=tq();d=new Rj;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.ba){e=c.ba;var f=or(e),g=new Qj;D(g,2,f);D(g,1,e);G(d,Qj,3,g);c.Pb&&delete qr[c.ba]}G(a,Rj,33,d);(c.hc?cr:Zq)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,Fa:c.Fa},b)}
;function sr(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);rr(a,c?null:cq,b)}
;function tr(a,b){var c=new Sj;Zd(c,Hj,72,mk,a);sr(c,b)}
function ur(a,b,c){var d=new Sj;Zd(d,Gj,73,mk,a);c?rr(d,c,b):sr(d,b)}
function vr(a,b,c){var d=new Sj;Zd(d,Fj,78,mk,a);c?rr(d,c,b):sr(d,b)}
function wr(a,b,c){var d=new Sj;Zd(d,Ij,208,mk,a);c?rr(d,c,b):sr(d,b)}
function xr(a,b,c){var d=new Sj;Zd(d,yj,156,mk,a);c?rr(d,c,b):sr(d,b)}
function yr(a,b,c){var d=new Sj;Zd(d,Cj,215,mk,a);c?rr(d,c,b):sr(d,b)}
function zr(a,b,c){var d=new Sj;Zd(d,uj,111,mk,a);c?rr(d,c,b):sr(d,b)}
;function sm(a,b,c){c=void 0===c?{}:c;if(M("migrate_events_to_ts")){c=void 0===c?{}:c;var d=cq;L("ytLoggingEventsDefaultDisabled",!1)&&cq===cq&&(d=null);nr(a,b,d,c)}else d=cq,L("ytLoggingEventsDefaultDisabled",!1)&&cq==cq&&(d=null),nr(a,b,d,c)}
;var Ar=[{ub:function(a){return"Cannot read property '"+a.key+"'"},
bb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ub:function(a){return"Cannot call '"+a.key+"'"},
bb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{ub:function(a){return a.key+" is not defined"},
bb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Cr={na:[],ma:[{callback:Br,weight:500}]};function Br(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Dr(){this.ma=[];this.na=[]}
var Er;function Fr(){if(!Er){var a=Er=new Dr;a.na.length=0;a.ma.length=0;Cr.na&&a.na.push.apply(a.na,Cr.na);Cr.ma&&a.ma.push.apply(a.ma,Cr.ma)}return Er}
;var Gr=new K;function Hr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ir(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ir(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ir(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ir(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Jr(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Kr(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Hr(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Kr(e+".ve",f,g,h):0;d+=g;d+=Kr(e,a[e],b,c);if(500<d)break}}else c[b]=Lr(a),d+=c[b].length;else c[b]=Lr(a),d+=c[b].length;return d}
function Kr(a,b,c,d){c+="."+a;a=Lr(b);d[c]=a;return c.length+a.length}
function Lr(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Mr=new Set,Nr=0,Or=0,Pr=0,Qr=[],Rr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function rm(a){Sr(a)}
function Tr(a){Sr(a,"WARNING")}
function Sr(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Nr)){var m=Qr,q=ue(a),r=q.message||"Unknown Error",x=q.name||"UnknownError",v=q.stack||a.j||"Not available";if(v.startsWith(x+": "+r)){var A=v.split("\n");A.shift();v=A.join("\n")}var E=q.lineNumber||"Not available",F=q.fileName||"Not available",N=v,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var R=0;R<a.args.length&&!(O=Jr(a.args[R],"params."+R,g,O),500<=O);R++);else if(a.hasOwnProperty("params")&&
a.params){var U=a.params;if("object"===typeof a.params)for(var ca in U){if(U[ca]){var lb="params."+ca,Xa=Lr(U[ca]);g[lb]=Xa;O+=lb.length+Xa.length;if(500<O)break}}else g.params=Lr(U)}if(m.length)for(var ja=0;ja<m.length&&!(O=Jr(m[ja],"params.context."+ja,g,O),500<=O);ja++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var H={message:r,name:x,lineNumber:E,fileName:F,stack:N,params:g,sampleWeight:1},ka=Number(a.columnNumber);isNaN(ka)||(H.lineNumber=H.lineNumber+
":"+ka);if("IGNORED"===a.level)var la=0;else a:{for(var De=Fr(),Ee=p(De.na),td=Ee.next();!td.done;td=Ee.next()){var ud=td.value;if(H.message&&H.message.match(ud.Dq)){la=ud.weight;break a}}for(var vd=p(De.ma),ua=vd.next();!ua.done;ua=vd.next()){var pp=ua.value;if(pp.callback(H)){la=pp.weight;break a}}la=1}H.sampleWeight=la;for(var qp=p(Ar),Tj=qp.next();!Tj.done;Tj=qp.next()){var Uj=Tj.value;if(Uj.bb[H.name])for(var rp=p(Uj.bb[H.name]),Vj=rp.next();!Vj.done;Vj=rp.next()){var sp=Vj.value,Qg=H.message.match(sp.regexp);
if(Qg){H.params["params.error.original"]=Qg[0];for(var Wj=sp.groups,tp={},wd=0;wd<Wj.length;wd++)tp[Wj[wd]]=Qg[wd+1],H.params["params.error."+Wj[wd]]=Qg[wd+1];H.message=Uj.ub(tp);break}}}H.params||(H.params={});var up=Fr();H.params["params.errorServiceSignature"]="msg="+up.na.length+"&cb="+up.ma.length;H.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(H.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(H.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(H);if(0!==H.sampleWeight&&!Mr.has(H.message)){if("ERROR"===h){Gr.qa("handleError",H);if(M("record_app_crashed_web")&&0===Pr&&1===H.sampleWeight)if(Pr++,M("errors_via_jspb")){var Xj=new rj;D(Xj,1,1);if(!M("report_client_error_with_app_crash_ks")){var vp=new mj;D(vp,1,H.message);var wp=new nj;G(wp,mj,3,vp);var xp=new oj;G(xp,nj,5,wp);var yp=new pj;G(yp,oj,9,xp);G(Xj,pj,4,yp)}var zp=new Sj;Zd(zp,rj,20,
mk,Xj);sr(zp)}else{var Ap={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Ap.systemHealth={crashData:{clientError:{logMessage:{message:H.message}}}});sm("appCrashed",Ap)}Or++}else"WARNING"===h&&Gr.qa("handleWarning",H);if(M("kevlar_gel_error_routing"))a:{var Fe=h;if(M("errors_via_jspb")){if(Ur())var Cp=void 0;else{var xd=new jj;D(xd,1,H.stack);H.fileName&&D(xd,4,H.fileName);var Gb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Gb.length&&(1!==
Gb.length||isNaN(Number(Gb[0]))?2!==Gb.length||isNaN(Number(Gb[0]))||isNaN(Number(Gb[1]))||(D(xd,2,Number(Gb[0])),D(xd,3,Number(Gb[1]))):D(xd,2,Number(Gb[0])));var xc=new mj;D(xc,1,H.message);D(xc,3,H.name);D(xc,6,H.sampleWeight);"ERROR"===Fe?D(xc,2,2):"WARNING"===Fe?D(xc,2,1):D(xc,2,0);var Yj=new kj;D(Yj,1,!0);Zd(Yj,jj,3,lj,xd);var $b=new gj;D($b,3,window.location.href);for(var Dp=L("FEXP_EXPERIMENTS",[]),Zj=0;Zj<Dp.length;Zj++){var Kv=Dp[Zj];Dd($b);Rd($b,5).push(Kv)}var ak=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!Ek()&&ak)for(var Ep=p(Object.keys(ak)),yc=Ep.next();!yc.done;yc=Ep.next()){var Fp=yc.value,bk=new ij;D(bk,1,Fp);bk.setValue(String(ak[Fp]));ae($b,4,ij,bk)}var ck=H.params;if(ck){var Gp=p(Object.keys(ck));for(yc=Gp.next();!yc.done;yc=Gp.next()){var Hp=yc.value,dk=new ij;D(dk,1,"client."+Hp);dk.setValue(String(ck[Hp]));ae($b,4,ij,dk)}}var Ip=L("SERVER_NAME"),Jp=L("SERVER_VERSION");if(Ip&&Jp){var ek=new ij;D(ek,1,"server.name");ek.setValue(Ip);ae($b,4,ij,ek);var fk=new ij;D(fk,1,"server.version");
fk.setValue(Jp);ae($b,4,ij,fk)}var Rg=new nj;G(Rg,gj,1,$b);G(Rg,kj,2,Yj);G(Rg,mj,3,xc);Cp=Rg}var Kp=Cp;if(!Kp)break a;var Lp=new Sj;Zd(Lp,nj,163,mk,Kp);sr(Lp)}else{if(Ur())var Mp=void 0;else{var Ge={stackTrace:H.stack};H.fileName&&(Ge.filename=H.fileName);var Hb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Hb.length&&(1!==Hb.length||isNaN(Number(Hb[0]))?2!==Hb.length||isNaN(Number(Hb[0]))||isNaN(Number(Hb[1]))||(Ge.lineNumber=Number(Hb[0]),Ge.columnNumber=Number(Hb[1])):Ge.lineNumber=
Number(Hb[0]));var gk={level:"ERROR_LEVEL_UNKNOWN",message:H.message,errorClassName:H.name,sampleWeight:H.sampleWeight};"ERROR"===Fe?gk.level="ERROR_LEVEL_ERROR":"WARNING"===Fe&&(gk.level="ERROR_LEVEL_WARNNING");var Lv={isObfuscated:!0,browserStackInfo:Ge},yd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(yd.experimentIds=L("FEXP_EXPERIMENTS"));var hk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Ek()&&hk)for(var Np=p(Object.keys(hk)),zc=Np.next();!zc.done;zc=Np.next()){var Op=
zc.value;yd.kvPairs.push({key:Op,value:String(hk[Op])})}var ik=H.params;if(ik){var Pp=p(Object.keys(ik));for(zc=Pp.next();!zc.done;zc=Pp.next()){var Qp=zc.value;yd.kvPairs.push({key:"client."+Qp,value:String(ik[Qp])})}}var Rp=L("SERVER_NAME"),Sp=L("SERVER_VERSION");Rp&&Sp&&(yd.kvPairs.push({key:"server.name",value:Rp}),yd.kvPairs.push({key:"server.version",value:Sp}));Mp={errorMetadata:yd,stackTrace:Lv,logMessage:gk}}var Tp=Mp;if(!Tp)break a;sm("clientError",Tp)}if("ERROR"===Fe||M("errors_flush_gel_always_killswitch"))b:if(M("migrate_events_to_ts"))c:{if(M("web_fp_via_jspb")&&
(pr(!0),!M("web_fp_via_jspb_and_json")))break c;pr()}else{if(M("web_fp_via_jspb")&&(pr(!0),!M("web_fp_via_jspb_and_json")))break b;pr()}}if(!M("suppress_error_204_logging")){var He=H.params||{},ac={urlParams:{a:"logerror",t:"jserror",type:H.name,msg:H.message.substr(0,250),line:H.lineNumber,level:h,"client.name":He.name},postParams:{url:L("PAGE_NAME",window.location.href),file:H.fileName},method:"POST"};He.version&&(ac["client.version"]=He.version);if(ac.postParams){H.stack&&(ac.postParams.stack=
H.stack);for(var Up=p(Object.keys(He)),jk=Up.next();!jk.done;jk=Up.next()){var Vp=jk.value;ac.postParams["client."+Vp]=He[Vp]}var kk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(kk)for(var Wp=p(Object.keys(kk)),lk=Wp.next();!lk.done;lk=Wp.next()){var Xp=lk.value;ac.postParams[Xp]=kk[Xp]}var Yp=L("SERVER_NAME"),Zp=L("SERVER_VERSION");Yp&&Zp&&(ac.postParams["server.name"]=Yp,ac.postParams["server.version"]=Zp)}ml(L("ECATCHER_REPORT_HOST","")+"/error_204",ac)}try{Mr.add(H.message)}catch(kx){}Nr++}}}}
function Ur(){for(var a=p(Rr),b=a.next();!b.done;b=a.next())if(jm(b.value.toLowerCase()))return!0;return!1}
function Vr(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ha(b))}
;function Wr(){this.register=new Map}
function Xr(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Gq("ABORTED")}
Wr.prototype.clear=function(){Xr(this);this.register.clear()};
var Yr=new Wr;var Zr=Date.now().toString();
function $r(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Zr)for(a=1,b=0;b<Zr.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Zr.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var as=y.ytLoggingDocDocumentNonce_;as||(as=$r(),z("ytLoggingDocDocumentNonce_",as));var bs=as;var cs={Fh:0,je:1,te:2,zl:3,Hh:4,Mp:5,om:6,Vn:7,rn:8,Jn:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function ds(a){this.i=a}
function es(a){return new ds({trackingParams:a})}
ds.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
ds.prototype.getAsJspb=function(){var a=new tj;if(void 0!==this.i.trackingParams){var b=this.i.trackingParams;null!=b&&b instanceof kd&&jd();D(a,1,b)}else void 0!==this.i.veType&&D(a,2,this.i.veType),void 0!==this.i.veCounter&&D(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&D(a,3,this.i.elementIndex);void 0!==this.i.dataElement&&(b=this.i.dataElement.getAsJspb(),G(a,tj,7,b));void 0!==this.i.youtubeData&&G(a,Mi,8,this.i.jspbYoutubeData);return a};
ds.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
ds.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function fs(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function gs(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function hs(a){return L(gs(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",hs);function is(a){return(a=hs(void 0===a?0:a))?new ds({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function js(){var a=L("csn-to-ctt-auth-info");a||(a={},Dk("csn-to-ctt-auth-info",a));return a}
function ks(a){a=L(fs(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",ks);function ls(a,b,c){var d=js();(c=ks(c))&&delete d[c];b&&(d[a]=b)}
function ms(a){return js()[a]}
z("yt_logging_screen.getCttAuthInfo",ms);
function ns(a,b,c,d){c=void 0===c?0:c;if(a!==L(fs(c))||b!==L(gs(c)))if(ls(a,d,c),Dk(fs(c),a),Dk(gs(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new uj;D(e,1,bs);D(e,2,a);M("use_default_heartbeat_client")?zr(e):zr(e,void 0,cq)}else e={clientDocumentNonce:bs,clientScreenNonce:a},M("use_default_heartbeat_client")?sm("foregroundHeartbeatScreenAssociated",e):nr("foregroundHeartbeatScreenAssociated",e,cq)},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
z("yt_logging_screen.setCurrentScreen",ns);var os=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",os);function ps(a){yk(os,arguments)}
;var qs={ie:3611,td:27686,ud:85013,vd:23462,xd:157557,yd:42016,zd:62407,Ad:26926,wd:43781,Bd:51236,Cd:79148,Dd:50160,Ed:77504,Qd:153587,Rd:87907,Sd:18630,Td:54445,Ud:80935,Vd:152172,Wd:105675,Xd:150723,Yd:37521,Zd:147285,ae:47786,be:98349,ce:123695,de:6827,ee:29434,ge:7282,he:124448,le:32276,ke:76278,me:147868,ne:147869,oe:93911,pe:106531,qe:27259,re:27262,se:27263,ue:21759,we:27107,xe:62936,ye:49568,ze:38408,Ae:80637,Be:68727,Ce:68728,De:80353,Ee:80356,Fe:74610,Ge:45707,He:83962,Ie:83970,Je:46713,
Ke:89711,Le:74612,Me:155792,Ne:93265,Oe:74611,Pe:131380,Re:128979,Se:139311,Te:128978,Qe:131391,Ue:105350,We:139312,Xe:134800,Ve:131392,Ze:113533,af:93252,bf:99357,df:94521,ef:114252,ff:113532,gf:94522,cf:94583,hf:88E3,jf:139580,kf:93253,lf:93254,mf:94387,nf:94388,pf:93255,qf:97424,Ye:72502,rf:110111,sf:76019,uf:117092,vf:117093,tf:89431,wf:110466,xf:77240,yf:60508,zf:148123,Af:148124,Bf:137401,Cf:137402,Df:137046,Ef:73393,Ff:113534,Gf:92098,Hf:131381,If:84517,Jf:83759,Kf:80357,Lf:86113,Mf:72598,
Nf:72733,Of:107349,Pf:124275,Qf:118203,Rf:133275,Sf:152569,Tf:156651,Uf:133274,Vf:133272,Wf:133273,Xf:133276,Yf:144507,Zf:143247,ag:156652,cg:143248,dg:143249,eg:143250,fg:143251,gg:156653,hg:144401,jg:117431,ig:133797,kg:153964,lg:128572,mg:133405,ng:117429,og:117430,pg:117432,qg:120080,rg:117259,sg:156655,tg:156654,ug:121692,vg:145656,wg:156656,xg:145655,yg:145653,zg:145654,Ag:145657,Bg:132972,Cg:133051,Dg:133658,Eg:132971,Fg:97615,Hg:143359,Gg:143356,Jg:143361,Ig:143358,Lg:143360,Kg:143357,Mg:142303,
Ng:143353,Og:143354,Pg:144479,Qg:143355,Rg:31402,Tg:133624,Ug:146477,Vg:133623,Wg:133622,Sg:133621,Xg:84774,Yg:95117,Zg:150497,ah:98930,bh:98931,dh:98932,eh:43347,fh:129889,gh:149123,hh:45474,ih:100352,jh:84758,kh:98443,lh:117985,mh:74613,nh:155911,oh:74614,ph:64502,qh:136032,rh:74615,sh:74616,th:122224,uh:74617,vh:77820,wh:74618,xh:93278,yh:93274,zh:93275,Ah:93276,Bh:22110,Ch:29433,Dh:133798,Eh:132295,Gh:120541,Ih:82047,Jh:113550,Kh:75836,Lh:75837,Mh:42352,Nh:84512,Oh:76065,Ph:75989,Uh:16623,Vh:32594,
Wh:27240,Xh:32633,Yh:74858,Zh:156999,bi:3945,ai:16989,ci:45520,di:25488,fi:25492,gi:25494,hi:55760,ii:14057,ji:18451,ki:57204,li:57203,mi:17897,ni:57205,oi:18198,ri:17898,si:17909,ti:43980,vi:46220,wi:11721,xi:147994,yi:49954,zi:96369,Ai:3854,Bi:151633,Ci:56251,Di:25624,Ei:152036,Vi:16906,Wi:99999,Xi:68172,Yi:27068,Zi:47973,aj:72773,bj:26970,cj:26971,dj:96805,ej:17752,fj:73233,gj:109512,hj:22256,ij:14115,jj:22696,kj:89278,lj:89277,mj:109513,nj:43278,oj:43459,pj:43464,qj:89279,rj:43717,sj:55764,tj:22255,
uj:147912,vj:89281,wj:40963,xj:43277,yj:43442,zj:91824,Aj:120137,Bj:96367,Cj:36850,Dj:72694,Ej:37414,Fj:36851,Hj:124863,Gj:121343,Ij:73491,Jj:54473,Kj:43375,Lj:46674,Mj:143815,Nj:139095,Oj:144402,Pj:149968,Qj:149969,Rj:32473,Sj:72901,Tj:72906,Uj:50947,Vj:50612,Wj:50613,Xj:50942,Yj:84938,Zj:84943,ak:84939,bk:84941,ck:84944,dk:84940,ek:84942,fk:35585,gk:51926,hk:79983,ik:63238,jk:18921,kk:63241,lk:57893,mk:41182,nk:135732,pk:33424,qk:22207,rk:42993,sk:36229,tk:22206,uk:22205,vk:18993,wk:19001,xk:18990,
yk:18991,zk:18997,Ak:18725,Bk:19003,Ck:36874,Dk:44763,Ek:33427,Fk:67793,Gk:22182,Hk:37091,Ik:34650,Jk:50617,Kk:47261,Lk:22287,Mk:25144,Nk:97917,Ok:62397,Pk:150871,Qk:150874,Rk:125598,Sk:137935,Tk:36961,Uk:108035,Vk:27426,Wk:27857,Xk:27846,Yk:27854,Zk:69692,al:61411,bl:39299,dl:38696,fl:62520,il:36382,jl:108701,kl:50663,ll:36387,ml:14908,nl:37533,ol:105443,pl:61635,ql:62274,rl:133818,sl:65702,ul:65703,vl:65701,wl:76256,xl:37671,yl:49953,Al:36216,Bl:28237,Cl:39553,Dl:29222,El:26107,Fl:38050,Gl:26108,
Il:120745,Hl:26109,Jl:26110,Kl:66881,Ll:28236,Ml:14586,Nl:57929,Ol:74723,Pl:44098,Ql:44099,Tl:23528,Ul:61699,Rl:134104,Sl:134103,Vl:59149,Wl:101951,Xl:97346,Yl:118051,Zl:95102,am:64882,bm:119505,cm:63595,dm:63349,em:95101,fm:75240,gm:27039,hm:68823,im:21537,jm:83464,km:75707,lm:83113,mm:101952,nm:101953,pm:79610,qm:125755,rm:24402,sm:24400,tm:32925,vm:57173,um:156421,wm:122502,xm:145268,ym:138480,zm:64423,Am:64424,Bm:33986,Cm:100828,Dm:129089,Em:21409,Im:135155,Jm:135156,Km:135157,Lm:135158,Mm:135159,
Nm:135160,Om:135161,Pm:135162,Qm:135163,Rm:135164,Sm:135165,Tm:135166,Fm:11070,Gm:11074,Hm:17880,Um:14001,Wm:30709,Xm:30707,Ym:30711,Zm:30710,an:30708,Vm:26984,bn:146143,cn:63648,dn:63649,en:51879,fn:111059,gn:5754,hn:20445,jn:151308,kn:151152,mn:130975,ln:130976,nn:110386,pn:113746,qn:66557,sn:17310,tn:28631,un:21589,vn:154946,wn:68012,xn:60480,yn:138664,zn:141121,An:31571,Bn:141978,Cn:150105,Dn:150106,En:150107,Fn:150108,Gn:76980,Hn:41577,In:45469,Kn:38669,Ln:13768,Mn:13777,Nn:141842,On:62985,Pn:4724,
Qn:59369,Rn:43927,Sn:43928,Tn:12924,Un:100355,Xn:56219,Yn:27669,Zn:10337,Wn:47896,ao:122629,co:139723,bo:139722,eo:121258,fo:107598,ho:127991,jo:96639,ko:107536,lo:130169,mo:96661,no:145188,oo:96658,po:116646,qo:121122,ro:96660,so:127738,to:127083,uo:147842,vo:104443,wo:96659,xo:147595,yo:106442,zo:134840,Ao:63667,Bo:63668,Co:63669,Do:130686,Eo:147036,Fo:78314,Go:147799,Ho:148649,Io:55761,Jo:127098,Ko:134841,Lo:96368,Mo:67374,No:48992,Oo:146176,Po:49956,Qo:31961,Ro:26388,So:23811,To:5E4,Uo:126250,
Vo:96370,Wo:47355,Xo:47356,Yo:37935,Zo:45521,ap:21760,bp:83769,cp:49977,ep:49974,fp:93497,gp:93498,hp:34325,ip:140759,jp:115803,kp:123707,lp:100081,mp:35309,np:68314,qp:25602,rp:100339,sp:143516,tp:59018,up:18248,vp:50625,wp:9729,xp:37168,yp:37169,zp:21667,Ap:16749,Bp:18635,Cp:39305,Dp:18046,Ep:53969,Fp:8213,Gp:93926,Hp:102852,Ip:110099,Jp:22678,Kp:69076,Lp:137575,Np:139224,Op:100856,Pp:154430,Qp:17736,Rp:3832,Sp:147111,Tp:55759,Up:64031,aq:93044,bq:93045,cq:34388,fq:17657,gq:17655,hq:39579,iq:39578,
jq:77448,kq:8196,lq:11357,mq:69877,nq:8197,oq:156512,pq:156509,qq:82039};function rs(){var a=vb(ss),b;return(new yf(function(c,d){a.onSuccess=function(e){el(e)?c(new ts(e)):d(new us("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new us("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new us("Request timed out","net.timeout",e))};
b=ml("//googleads.g.doubleclick.net/pagead/id",a)})).gb(function(c){c instanceof Ff&&b.abort();
return Df(c)})}
function us(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
t(us,ab);function ts(a){this.xhr=a}
;function vs(){this.i=0;this.ja=null}
vs.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.ja))&&"function"===typeof a.then?a:ws(a):2===this.i&&b?(a=b.call(c,this.ja))&&"function"===typeof a.then?a:xs(a):this};
vs.prototype.getValue=function(){return this.ja};
vs.prototype.$goog_Thenable=!0;function xs(a){var b=new vs;a=void 0===a?null:a;b.i=2;b.ja=void 0===a?null:a;return b}
function ws(a){var b=new vs;a=void 0===a?null:a;b.i=1;b.ja=void 0===a?null:a;return b}
;function ys(a,b){if(a)return a[b.name]}
;function zs(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:$k(a)?"same-origin":"cors",credentials:$k(a)?"same-origin":"include"};b={};for(var d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function As(){return sg()||im&&jm("applewebkit")&&!jm("version")&&(!jm("safari")||jm("gsa/"))||Qc&&jm("version/")?!0:L("EOM_VISITOR_DATA")?!1:!0}
;function Bs(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in Yh)if(Yh[c]==b.embeddedPlayerMode){b=Yh[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Cs(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ds;this.isTimeout=a instanceof us&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ff}
t(Cs,ab);Cs.prototype.name="BiscottiError";function Ds(){ab.call(this,"Biscotti ID is missing from server")}
t(Ds,ab);Ds.prototype.name="BiscottiMissingError";var ss={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Es=null;function Fs(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!As())return Error("User has not consented - not fetching biscotti id.");var a=L("PLAYER_VARS",{});if("1"==tb(a))return Error("Biscotti ID is not available in private embed mode");if(Bs(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Pk(){var a=Fs();if(void 0!==a)return Df(a);Es||(Es=rs().then(Gs).gb(function(b){return Hs(2,b)}));
return Es}
function Gs(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ds;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ds;a=a.id;Qk(a);Es=ws(a);Is(18E5,2);return a}
function Hs(a,b){b=new Cs(b);Qk("");Es=xs(b);0<a&&Is(12E4,a-1);throw b;}
function Is(a,b){fl(function(){rs().then(Gs,function(c){return Hs(b,c)}).gb(cb)},a)}
function Js(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Pk()}catch(b){return Df(b)}}
;function Ks(a){if("1"!=tb(L("PLAYER_VARS",{}))){a&&Ok();try{Js().then(function(){},function(){}),fl(Ks,18E5)}catch(b){Mk(b)}}}
;function Ls(){this.ld=!0}
function Ms(a){var b={},c=ug([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Ck||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Ck&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var Ns=Symbol("injectionDeps");function Os(a){this.name=a}
Os.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ps(){this.key=Qs}
function Rs(){this.providers=new Map;this.i=new Map}
Rs.prototype.resolve=function(a){return a instanceof Ps?Ss(this,a.key,[],!0):Ss(this,a,[])};
function Ss(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.nc)var e=d.nc;else if(d.sd)e=d[Ns]?Ts(a,d[Ns],c):[],e=d.sd.apply(d,ha(e));else if(d.mc){e=d.mc;var f=e[Ns]?Ts(a,e[Ns],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ha(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Mq||a.i.set(b,e);
return e}
function Ts(a,b,c){return b?b.map(function(d){return d instanceof Ps?Ss(a,d.key,c,!0):Ss(a,d,c)}):[]}
;var Us;function Vs(){Us||(Us=new Rs);return Us}
;var Ws={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Xs=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ys(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=Yk(a).theme;return Xs.get(b)||null}catch(c){}return null}
;function Zs(){this.i={};if(this.j=xl()){var a=qg.get("CONSISTENCY",void 0);a&&$s(this,{encryptedTokenJarContents:a})}}
Zs.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ga.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];$s(this,a)}};
function $s(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&wl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var at=window.location.hostname.split(".").slice(-2).join(".");function bt(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.i=ct(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var dt;bt.getInstance=function(){dt=B("yt.clientLocationService.instance");dt||(dt=new bt,z("yt.clientLocationService.instance",dt));return dt};
bt.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
bt.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.i=ct(this))&&this.i.set("yt-location-playability-token",a,15552E3):wl("YT_CL",JSON.stringify({loctok:a}),15552E3,at,!0))};
function ct(a){return void 0===a.i?new Vl("yt-client-location"):a.i}
bt.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===L("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
bt.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function et(a,b){var c,d=null==(c=ys(a,ej))?void 0:c.signal;if(d&&b.La&&(c=b.La[d]))return c();var e;if((c=null==(e=ys(a,cj))?void 0:e.request)&&b.Bc&&(e=b.Bc[c]))return e();for(var f in a)if(b.Lb[f]&&(a=b.Lb[f]))return a()}
;function ft(a){return function(){return new a}}
;var gt={},ht=(gt.WEB_UNPLUGGED="^unplugged/",gt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",gt.WEB_UNPLUGGED_OPS="^unplugged/",gt.WEB_UNPLUGGED_PUBLIC="^unplugged/",gt.WEB_CREATOR="^creator/",gt.WEB_KIDS="^kids/",gt.WEB_EXPERIMENTS="^experiments/",gt.WEB_MUSIC="^music/",gt.WEB_REMIX="^music/",gt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",gt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",gt);
function jt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=ht[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(ht).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function kt(){}
kt.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Ws:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=wb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;zl.getInstance();var m="USER_INTERFACE_THEME_LIGHT";Cl(165)?m="USER_INTERFACE_THEME_DARK":Cl(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Ys()||m;h.userInterfaceTheme=k;if(!f){if(k=
Jl())h.connectionType=k;M("web_log_effective_connection_type")&&(k=Kl())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var r;q=null==(r=y.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}r=Yk(y.location.href);!M("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
ul.i&&(r=ul.i,h.mainAppWebInfo.pwaInstallabilityStatus=!r.i&&r.j?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=vl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(r=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:r}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var x=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(lb){}x=void 0}x&&(h.timeZone=x)}(x=Hk())?h.experimentsToken=x:delete h.experimentsToken;x=Ik();Zs.i||(Zs.i=new Zs);h=Zs.i.i;r=[];q=0;for(var v in h)r[q++]=h[v];g.request=Object.assign({},g.request,{internalExperimentFlags:x,consistencyTokenJars:r});!M("web_prequest_context_killswitch")&&(v=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=v);x=zl.getInstance();v=Cl(58);x=x.get("gsml","");g.user=Object.assign({},g.user);v&&(g.user.enableSafetyMode=v);x&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=ks())&&(g.clientScreenNonce=f):!f&&(f=ks())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&bt.getInstance().setLocationOnInnerTubeContext(g);try{var A=al(),E=A.bid;delete A.bid;
g.adSignalsInfo={params:[],bid:E};var F=p(Object.entries(A));for(var N=F.next();!N.done;N=F.next()){var O=p(N.value),R=O.next().value,U=O.next().value;A=R;E=U;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+E})}}catch(lb){Sr(lb)}F=g}else Sr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(N=this.i(a)){this.j(F,N,b);var ca;b="/youtubei/v1/"+jt(this.l());(N=null==(ca=ys(a.commandMetadata,dj))?void 0:ca.apiUrl)&&(b=N);ca=b;(b=L("INNERTUBE_HOST_OVERRIDE"))&&
(ca=String(b)+String(pc(ca)));b={};b.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(b.prettyPrint="false");ca=Zk(ca,b||{},!1);a=M("kevlar_response_command_processor_page")?Object.assign({},{command:a},void 0):Object.assign({},void 0);a={input:ca,va:zs(ca),ga:F,config:a};a.config.Ra?a.config.Ra.identity=c:a.config.Ra={identity:c};return a}Sr(new Q("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(kt.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});function lt(){}
t(lt,kt);lt.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",va:zs("/getDatasyncIdsEndpoint","GET"),ga:{}}};
lt.prototype.l=function(){return[]};
lt.prototype.i=function(){};
lt.prototype.j=function(){};var mt={},nt=(mt.GET_DATASYNC_IDS=ft(lt),mt);function ot(a){var b=Ja.apply(1,arguments);if(!pt(a)||b.some(function(d){return!pt(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())qt(a,c.value);return a}
function qt(a,b){for(var c in b)if(pt(b[c])){if(c in a&&!pt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});qt(a[c],b[c])}else if(rt(b[c])){if(c in a&&!rt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);st(a[c],b[c])}else a[c]=b[c];return a}
function st(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,pt(c)?a.push(qt({},c)):rt(c)?a.push(st([],c)):a.push(c);return a}
function pt(a){return"object"===typeof a&&!Array.isArray(a)}
function rt(a){return"object"===typeof a&&Array.isArray(a)}
;function tt(a,b){$n.call(this,1,arguments);this.timer=b}
t(tt,$n);var ut=new ao("aft-recorded",tt);var vt=window;function wt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=vt.performance||vt.mozPerformance||vt.msPerformance||vt.webkitPerformance||new wt;var xt=!1,zt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||cb,S);function At(a){var b=Bt(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Ct(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Dt(e.requestStart),e.responseEnd=Dt(e.responseEnd),e.redirectStart=Dt(e.redirectStart),e.redirectEnd=Dt(e.redirectEnd),e.domainLookupEnd=Dt(e.domainLookupEnd),e.connectStart=Dt(e.connectStart),e.connectEnd=
Dt(e.connectEnd),e.responseStart=Dt(e.responseStart),e.secureConnectionStart=Dt(e.secureConnectionStart),e.domainLookupStart=Dt(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function Et(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function Dt(a){return Math.round(Et()+a)}
function Ft(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function Gt(a){a=Ft(a);a.info||(a.info={});return a.info}
function Bt(a){a=Ft(a);a.tick||(a.tick={});return a.tick}
function Ht(a){a=Ft(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function It(a){a=Ht(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Jt(a){a=Ht(a);a.jspbInfos||(a.jspbInfos=[]);return a.jspbInfos}
function Kt(a){var b=Ft(a).nonce;b||(b=$r(),Ft(a).nonce=b);return b}
function Lt(a){var b=Bt(a||""),c=At(a);c&&!xt&&(go(ut,new tt(Math.round(c-b._start),a)),xt=!0)}
function Mt(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Mt(a[d],b[d]))return!1;return!0}
;function Nt(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return Dt(a.startTime)}a=S.timing;
return a.Qc?Math.max(0,a.Qc):0}
;function Ot(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function Pt(a){a=a||"";var b=B("ytcsi.reference");b||(Ot(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Ot(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},Qt=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",
T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home=
"LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]=
"LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",
T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",
T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),V={},Rt=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",
V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",
V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt=
"playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",
V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),
St="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Tt={},Ut=(Tt.ccs="CANARY_STATE_",Tt.mver="MEASUREMENT_VERSION_",Tt.pis="PLAYER_INITIALIZED_STATE_",Tt.yt_pt="LATENCY_PLAYER_",Tt.pa="LATENCY_ACTION_",Tt.ctop="TOP_ENTITY_TYPE_",
Tt.yt_vst="VIDEO_STREAM_TYPE_",Tt),Vt="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");function Wt(a){return Qt[a]||"LATENCY_ACTION_UNKNOWN"}
function Xt(a,b,c){c=Ht(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Rt){c=Rt[a];0<=eb(St,c)&&(b=!!b);a in Ut&&"string"===typeof b&&(b=Ut[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return ot({},d)}0<=eb(Vt,a)||Tr(new Q("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,
LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,
LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,
LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,
LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,
LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,
LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,
LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,
LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,
LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,
LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,
LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,
LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,
LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";
W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";W[W.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";
W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";
W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";
W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";
W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";
W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";
W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";
W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";
W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";
W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";
W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";
W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";
W[W.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";W[W.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";
W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";
W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";
W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";
W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";
W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";
W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Yt={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Yt[Yt.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Yt[Yt.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Yt[Yt.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Zt={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Zt[Zt.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Zt[Zt.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Zt[Zt.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Zt[Zt.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Zt[Zt.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Zt[Zt.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Zt[Zt.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Zt[Zt.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var $t={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};$t[$t.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";$t[$t.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";$t[$t.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";$t[$t.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var au={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
au[au.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";au[au.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var bu={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};bu[bu.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";bu[bu.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";bu[bu.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
bu[bu.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";bu[bu.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";bu[bu.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var cu={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};cu[cu.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";cu[cu.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";cu[cu.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";cu[cu.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var du={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};du[du.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";du[du.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";du[du.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var eu={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};eu[eu.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
eu[eu.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";eu[eu.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var fu="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var gu=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",gu);function hu(){this.i=0}
function iu(){hu.i||(hu.i=new hu);return hu.i}
hu.prototype.tick=function(a,b,c,d){ju(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Pj,D(d,1,a),D(d,2,b),a=new Sj,Zd(a,Pj,5,mk,d),sr(a,c)):sm("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
hu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");ju(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,sm("latencyActionInfo",a,{cttAuthInfo:c}))};
hu.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));ju(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new Sj,Zd(c,Lj,7,mk,a),sr(c,b))};
hu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");ju(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,sm("latencyActionSpan",a,{cttAuthInfo:c}))};
function ju(a,b){gu[b]=gu[b]||{count:0};var c=gu[b];c.count++;c.time=P();a.i||(a.i=dm(function(){var d=P(),e;for(e in gu)gu[e]&&6E4<d-gu[e].time&&delete gu[e];a&&(a.i=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Tr(c)),!0):!1}
;function ku(){var a=["ol"];Pt("").info.actionType="embed";a&&Dk("TIMING_AFT_KEYS",a);Dk("TIMING_ACTION","embed");if(M("web_csi_via_jspb")){a=L("TIMING_INFO",{});var b=new Lj;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetGuide_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetHome_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);
break;case "GetPlayer_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetSearch_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetSettings_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetTrending_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetWatchNext_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}lu(b);b=new Lj;b=D(b,25,!0);b=D(b,1,W[Wt(L("TIMING_ACTION"))]);(a=L("PREVIOUS_ACTION"))&&
D(b,13,W[Wt(a)]);(a=L("CLIENT_PROTOCOL"))&&D(b,33,a);(a=L("CLIENT_TRANSPORT"))&&D(b,34,a);(a=ks())&&"UNDEFINED_CSN"!==a&&D(b,4,a);a=mu();1!==a&&-1!==a||D(b,6,!0);a=Gt();a:{d=Jt();c=[];for(e=0;e<d.length;e++){var f=c,g=f.push;var h=d[e];var k=Lj;if(null==h||""==h)k=new k;else{h=JSON.parse(h);if(!Array.isArray(h))throw Error("Expected to deserialize an Array but got "+Oa(h)+": "+h);ce=h;k=new k(h);ce=null}g.call(f,k)}for(d=0;d<c.length;d++)if("cold"===Sd(c[d],3,""))break a}D(b,3,"cold");nu(a);a=ou();
if(0<a.length)for(a=p(a),c=a.next();!c.done;c=a.next())c=c.value,d=new Kj,D(d,1,c),ae(b,83,Kj,d);lu(b)}else{a=L("TIMING_INFO",{});for(b in a)a.hasOwnProperty(b)&&pu(b,a[b]);b={isNavigation:!0,actionType:Wt(L("TIMING_ACTION"))};if(a=L("PREVIOUS_ACTION"))b.previousAction=Wt(a);if(a=L("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=L("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=ks())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=mu();if(1===a||-1===a)b.isVisible=!0;a=Gt();b.loadType="cold";nu(a);a=ou();if(0<
a.length)for(b.resourceInfo=[],a=p(a),c=a.next();!c.done;c=a.next())b.resourceInfo.push({resourceCache:c.value});qu(b)}b=Gt();a=It();if("cold"===b.yt_lt||"cold"===a.loadType){c=Bt();d=Ht();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var m in c)m in d||Z(m,c[m]);m={};c=!1;d=p(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,(e=Xt(e,b[e]))&&!Mt(It(),e)&&(ot(a,e),ot(m,e),c=!0);c&&qu(m)}z("ytglobal.timingready_",!0);m=L("TIMING_ACTION");B("ytglobal.timingready_")&&m&&"_start"in Bt()&&At()&&Lt()}
function pu(a,b,c,d){null!==b&&(Gt(c)[a]=b,(a=Xt(a,b,c))&&qu(a,c,d))}
function qu(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Pt(b||""),ot(c.info,a),ot(It(b),a),c=Kt(b),b=Ft(b).cttAuthInfo,iu().info(a,c,b);else{c=new Lj;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":D(c,1,W[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,
5,Yt[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,Zt[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);
break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,W[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,$t[a[e]]);break;case "isNavigation":D(c,25,a[e]);break;case "viewportHeight":D(c,29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,
84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;
case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,au[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "videoOutputFrames":D(c,93,a[e]);break;case "isResume":D(c,104,a[e]);break;case "adPrebufferedTimeSecs":D(c,39,a[e]);break;case "isLivestream":D(c,47,a[e]);break;case "liveStreamMode":D(c,91,
bu[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,a[e]);break;case "videoStreamType":D(c,53,cu[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,du[a[e]]);break;case "playerRotationType":D(c,101,eu[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,57,a[e]);break;case "getSearchRequestId":D(c,60,a[e]);break;
case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:fu.includes(f)&&Mk(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Mk(Error("Codegen laipb translator failed to set "+f))}}lu(c,b)}}
function lu(a,b){Jt(b).push(de(a));Pt(b||"").jspbInfo.push(a);var c=Kt(b);b=Ft(b).cttAuthInfo;iu().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=Pt(c||"");d.tick[a]=b||P();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Ht(c);d.gelTicks&&(d.gelTicks[a]=!0);d=Bt(c);e=b||P();d[a]=e;e=Kt(c);var f=Ft(c).cttAuthInfo;if("_start"===a){var g=iu();ju(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new Jj,D(f,1,e),e=new Sj,Zd(e,Jj,6,mk,f),sr(e,
b)):sm("latencyActionBaselined",{clientActionNonce:e},b))}else iu().tick(a,e,b,f);Lt(c);return d[a]}
function ru(){var a=Kt();requestAnimationFrame(function(){setTimeout(function(){a===Kt()&&Z("ol",void 0,void 0)},0)})}
function mu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=eq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function nu(a){var b=Ct(),c=Et(),d=L("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!M("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Z("srt",b.responseStart),1!==a.prerender&&Z("_start",c,void 0));a=Nt();0<a&&Z("fpt",a);a=Ct();a.isPerformanceNavigationTiming&&qu({performanceNavigationTiming:!0});Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<
a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=Et()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));S&&"getEntriesByType"in S&&su()}
function tu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);ic()&&a.setAttribute("nonce",ic());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=Et(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function ou(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in zt)if(zt.hasOwnProperty(b)){var c=zt[b];tu(b,c)&&a.push(c)}return a}
function su(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Dt(b.startTime)),Z("wffe",Dt(b.responseEnd)))}
var uu=window;uu.ytcsi&&(uu.ytcsi.info=pu,uu.ytcsi.tick=Z);var vu="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),wu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function xu(a,b,c,d){this.o=a;this.M=b;this.m=c;this.l=d;this.j=void 0;this.i=new Map;a.La||(a.La={});a.La=Object.assign({},nt,a.La)}
function yu(a,b,c,d){if(void 0!==xu.i){if(d=xu.i,a=[a!==d.o,b!==d.M,c!==d.m,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else xu.i=new xu(a,b,c,d)}
function zu(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Ws:c;var d=et(b,a.o);if(!d)return Df(new Q("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new yf(function(f){var g,h,k;return w(function(m){if(1==m.i){h="cors"===(null==(g=e.va)?void 0:g.mode)?"cors":void 0;if(a.m.ld){var q=e.config,r;q=null==q?void 0:null==(r=q.Ra)?void 0:r.sessionIndex;r=Ms({sessionIndex:q});k=Object.assign({},Au(h),r);return m.u(2)}return u(m,Bu(e.config,
h),3)}2!=m.i&&(k=m.j);f(Cu(a,e,k));m.i=0})}):Df(new Q("Error: Failed to build request for command.",b))}
function Cu(a,b,c){var d,e,f,g,h,k,m,q,r,x,v,A,E,F,N,O,R,U,ca,lb,Xa,ja,H,ka,la,De,Ee,td,ud,vd;return w(function(ua){switch(ua.i){case 1:ua.u(2);break;case 3:if((d=ua.j)&&!d.isExpired())return ua.return(Promise.resolve(d.i()));case 2:if(null==(e=b)?0:null==(f=e.ga)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())k=h.value,k.Fq(b.ga.context);if(null==(m=a.j)?0:m.Lq(b.input,b.ga))return ua.return(a.j.Cq(b.input,b.ga));(x=null==(r=b.config)?void 0:r.Ba)&&a.i.has(x)&&M("web_memoize_inflight_requests")?
q=a.i.get(x):(v=JSON.stringify(b.ga),F=null!=(E=null==(A=b.va)?void 0:A.headers)?E:{},b.va=Object.assign({},b.va,{headers:Object.assign({},F,c)}),N=Object.assign({},b.va),"POST"===b.va.method&&(N=Object.assign({},N,{body:v})),(null==(O=b.config)?0:O.Wc)&&Z(b.config.Wc),R=function(){return a.M.fetch(b.input,N,b.config)},q=R(),x&&a.i.set(x,q));
return u(ua,q,4);case 4:U=ua.j;if(M("web_one_platform_error_handling")&&(null==(ca=U)?0:null==(lb=ca.error)?0:lb.details))for(Xa=U.error.details,ja=p(Xa),H=ja.next();!H.done;H=ja.next())ka=H.value,(la=ka["@type"])&&-1<wu.indexOf(la)&&(delete ka["@type"],U=ka);x&&a.i.has(x)&&a.i.delete(x);(null==(De=b.config)?0:De.Xc)&&Z(b.config.Xc);if(U||null==(Ee=a.j)||!Ee.wq(b.input,b.ga)){ua.u(5);break}return u(ua,a.j.Bq(b.input,b.ga),6);case 6:U=ua.j;case 5:if(U&&(null==(td=U.Kq)||!td.Nq)&&a.l)for(ud=p(vu),h=
ud.next();!h.done;h=ud.next())vd=h.value,a.l[vd]&&a.l[vd].handleResponse(U,b);return ua.return(U)}})}
function Bu(a,b){var c,d,e,f;return w(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Ra)?void 0:d.sessionIndex;var h=Ms({sessionIndex:e});if(!(h instanceof yf)){var k=new yf(cb);zf(k,2,h);h=k}return u(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},Au(b),f)))})}
function Au(a){var b={"Content-Type":"application/json"};L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=
a),(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Du=new Os("INNERTUBE_TRANSPORT_TOKEN");var Eu=["share/get_web_player_share_panel"],Fu=["feedback"],Gu=["notification/modify_channel_preference"],Hu=["browse/edit_playlist"],Iu=["subscription/subscribe"],Ju=["subscription/unsubscribe"];function Ku(){}
t(Ku,kt);Ku.prototype.l=function(){return Iu};
Ku.prototype.i=function(a){return ys(a,xk)||void 0};
Ku.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Ku.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Lu(){}
t(Lu,kt);Lu.prototype.l=function(){return Ju};
Lu.prototype.i=function(a){return ys(a,wk)||void 0};
Lu.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Lu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Mu(){}
t(Mu,kt);Mu.prototype.l=function(){return Fu};
Mu.prototype.i=function(a){return ys(a,fj)||void 0};
Mu.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Mu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Nu(){}
t(Nu,kt);Nu.prototype.l=function(){return Gu};
Nu.prototype.i=function(a){return ys(a,vk)||void 0};
Nu.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Ou(){}
t(Ou,kt);Ou.prototype.l=function(){return Hu};
Ou.prototype.i=function(a){return ys(a,uk)||void 0};
Ou.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Pu(){}
t(Pu,kt);Pu.prototype.l=function(){return Eu};
Pu.prototype.i=function(a){return ys(a,tk)};
Pu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Qs=new Os("NETWORK_SLI_TOKEN");function Qu(a){this.i=a}
Qu.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.i&&(d=mc(nc(5,Dc(a,"key")))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Tr(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Tr(g)}))})};
Qu.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){Tr(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Qu[Ns]=[new Ps];var Ru=new Os("NETWORK_MANAGER_TOKEN");var Su;function Tu(a){$n.call(this,1,arguments);this.csn=a}
t(Tu,$n);var jo=new ao("screen-created",Tu),Uu=[],Wu=Vu,Xu=0;function Yu(a,b,c,d,e,f,g){function h(){Tr(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=Wu();f=new ds({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,ba:k};if(M("il_via_jspb")){var m=new yj;m.V(k);zj(m,f.getAsJspb());c&&c.visualElement?(f=new Aj,c.clientScreenNonce&&D(f,2,c.clientScreenNonce),Bj(f,c.visualElement.getAsJspb()),g&&D(f,4,nk[g]),G(m,Aj,5,f)):c&&h();d&&D(m,3,d);xr(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=
g)):c&&h(),d&&(f.cloneCsn=d),a?nr("screenCreated",f,a,e):sm("screenCreated",f,e);go(jo,new Tu(k));return k}
function Zu(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:ms(b),
ba:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(rb(g)||!g.trackingParams&&!g.veType)&&Tr(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new Cj;h.V(b);Ej(h,c.getAsJspb());hb(e,function(k){k=k.getAsJspb();ae(h,3,tj,k)});
"UNDEFINED_CSN"==b?$u("visualElementAttached",h,f):yr(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:hb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?$u("visualElementAttached",c,f):a?nr("visualElementAttached",c,a,f):sm("visualElementAttached",c,f)}
function Vu(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return fd(b,3)}
function $u(a,b,c){Uu.push({payloadName:a,payload:b,options:c});Xu||(Xu=ko())}
function lo(a){if(Uu){for(var b=p(Uu),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.payload.V(a.csn),c.payloadName){case "screenCreated":xr(c.payload,c.options);break;case "visualElementAttached":yr(c.payload,c.options);break;case "visualElementShown":tr(c.payload,c.options);break;case "visualElementHidden":ur(c.payload,c.options);break;case "visualElementGestured":vr(c.payload,c.options);break;case "visualElementStateChanged":wr(c.payload,c.options);break;default:Tr(new Q("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,nr(c.payloadName,c.payload,null,c.options);Uu.length=0}Xu=0}
;function av(){this.j=new Set;this.i=new Set;this.l=new Map}
av.prototype.s=function(){};
av.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
Na(av);function bv(){this.o=[];this.N=[];this.i=[];this.m=[];this.B=[];this.j=new Set;this.v=new Map}
bv.prototype.s=function(a){this.client=a};
function cv(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=ks(c),f=is(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Zu(a.client,e,f,[es(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Zu(a.client,e,f,[es(d.playerResponse.trackingParams)])}})}
function dv(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.o.push([b,c]);else{var e=ks(d);c=c||is(d);e&&c&&Zu(a.client,e,c,[b])}}
bv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=ks(void 0===c?0:c)){a=this.client;var e=es(d);d={cttAuthInfo:ms(c),ba:c};if(M("il_via_jspb")){var f=new Fj;f.V(c);e=e.getAsJspb();G(f,tj,2,e);D(f,4,nk.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK);b&&G(f,wj,3);"UNDEFINED_CSN"==c?$u("visualElementGestured",f,d):vr(f,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(f.clientData=b),"UNDEFINED_CSN"==c?
$u("visualElementGestured",f,d):a?nr("visualElementGestured",f,a,d):sm("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function ev(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){fv(a,b,c);var f=is(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,dv(a,h[0],h[1]||f,c.layer);f=p(a.N);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=ks(g);var m=k[0]||is(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:ms(h),ba:h};M("il_via_jspb")?(q=new Ij,q.V(h),m=m.getAsJspb(),G(q,tj,2,m),"UNDEFINED_CSN"==h?$u("visualElementStateChanged",q,k):wr(q,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:q},"UNDEFINED_CSN"==h?$u("visualElementStateChanged",m,k):g?nr("visualElementStateChanged",m,g,k):sm("visualElementStateChanged",m,k))}}}};
ks(c.layer)||a.l();if(c.Ob)for(var d=p(c.Ob),e=d.next();!e.done;e=d.next())cv(a,e.value,c.layer);else Sr(Error("Delayed screen needs a data promise."))}
function fv(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Sc?c.Sc:c.layer;var e=ks(d);d=is(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Yu(a.client,b,f,c.Nb,c.cttAuthInfo,g,c.zq)}catch(m){Vr(m,{Iq:b,rootVe:d,parentVisualElement:void 0,xq:e,Eq:f,Nb:c.Nb});Sr(m);return}ns(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(cs));for(f=b.next();!f.done;f=b.next())if(ks(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:ms(e),ba:e,Pb:g},M("il_via_jspb")?(h=new Gj,h.V(e),d=d.getAsJspb(),G(h,tj,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"==e?$u("visualElementHidden",h,f):ur(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?$u("visualElementHidden",d,f):b?nr("visualElementHidden",d,b,f):sm("visualElementHidden",
d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");qu({clientScreenNonce:k});av.getInstance().clear();d=is(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:ms(e),ba:e},M("il_via_jspb")?(b=new Hj,b.V(e),f=d.getAsJspb(),G(b,tj,2,f),D(b,4,1),"UNDEFINED_CSN"==e?$u("visualElementShown",b,k):tr(b,k)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==e?$u("visualElementShown",b,k):sm("visualElementShown",
b,k)));a.j.delete(c.layer||0);a.l=void 0;e=p(a.v);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&dv(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Sr(m)}}for(c=a.m.length=0;c<a.B.length;c++){e=a.B[c];try{e()}catch(m){Sr(m)}}}
;function gv(){var a,b;return w(function(c){if(1==c.i)return a=Vs().resolve(Du),a?u(c,zu(a),2):(Tr(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(Tr(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.yq);Tr(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var hv=y.caches,iv;function jv(a){var b=a.indexOf(":");return-1===b?{Zb:a}:{Zb:a.substring(0,b),datasyncId:a.substring(b+1)}}
function kv(){return w(function(a){if(void 0!==iv)return a.return(iv);iv=new Promise(function(b){var c;return w(function(d){switch(d.i){case 1:return ya(d,2),u(d,hv.open("test-only"),4);case 4:return u(d,hv.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return(iv)})}
function lv(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.i)return u(k,kv(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return u(k,hv.keys(),3)}c=k.j;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=jv(f),h=g.datasyncId,!h||a.includes(h)||b.push(hv.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function mv(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.i)return u(h,kv(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=wm("cache contains other");return u(h,hv.keys(),3)}b=h.j;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=jv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function nv(){try{return!!self.localStorage}catch(a){return!1}}
;function ov(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function pv(a){if(nv()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=ov(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function qv(){if(!nv())return!1;var a=wm(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=ov(c.value),void 0!==c&&c!==a)return!0;return!1}
;function rv(){gv().then(function(a){a&&(Hn(a),lv(a),pv(a))})}
function sv(){var a=new Ro;Xh.S(function(){var b,c,d,e;return w(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=wm("clear");if(b.startsWith("V")){var g=[b];Hn(g);lv(g);pv(g);return f.return()}c=qv();return u(f,mv(),3);case 3:return d=f.j,u(f,In(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.L()?rv():a.m.add("publicytnetworkstatus-online",rv,!0,void 0,void 0),f.i=0}})})}
;function tv(a){a&&(a.dataset?a.dataset[uv("loaded")]="true":a.setAttribute("data-loaded","true"))}
function vv(a,b){return a?a.dataset?a.dataset[uv(b)]:a.getAttribute("data-"+b):null}
var wv={};function uv(a){return wv[a]||(wv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var xv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,yv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function zv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(xv,""),c=c.replace(yv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Av(a,b,c)}
function Av(a,b,c){c=void 0===c?null:c;var d=Bv(a),e=document.getElementById(d),f=e&&vv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=yq(d,b),b=""+Ra(b),Cv[b]=f),g||(e=Dv(a,d,function(){vv(e,"loaded")||(tv(e),Bq(d),fl(Ya(Cq,d),0))},c)))}
function Dv(a,b,c,d){d=void 0===d?null:d;var e=kf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gh(e,Lb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Ev(a){a=Bv(a);var b=document.getElementById(a);b&&(Cq(a),b.parentNode.removeChild(b))}
function Fv(a,b){a&&b&&(a=""+Ra(b),(a=Cv[a])&&Aq(a))}
function Bv(a){var b=document.createElement("a");fc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var Cv={};var Gv=[],Hv=!1;function Iv(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&As()){var a=L("PLAYER_VARS",{});if("1"!=tb(a)&&!Bs(a)){var b=function(){Hv=!0;"google_ad_status"in window?Dk("DCLKSTAT",1):Dk("DCLKSTAT",2)};
try{zv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Gv.push(Xh.S(function(){if(!(Hv||"google_ad_status"in window)){try{Fv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Hv=!0;Dk("DCLKSTAT",3)}},5E3))}}}
function Jv(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function Mv(){this.state=1;this.i=null}
Mv.prototype.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Db("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=Ab())?f.createScript(e):e,e=(new Fb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Db("From proto message. b/166824318"),d=Lb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());
Nv(this,e,d,a.program,b,c)}else Tr(Error("Cannot initialize botguard without program"))};
function Nv(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,zv(c,function(){window[g]?Ov(a,d,g,e):(a.state=3,Ev(c),Tr(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=kf("SCRIPT"),f.textContent=b,f.nonce=ic(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Ov(a,d,g,e):(a.state=4,Tr(new Q("Unable to load Botguard from JS")))):Tr(new Q("Unable to load VM; no url or JS provided"))}
Mv.prototype.isInitialized=function(){return!!this.i};
function Ov(a,b,c,d){a.state=5;try{var e=new Ch({program:b,globalName:c});e.hd.then(function(){a.state=6;d&&d(b)});
Pv(a,e)}catch(f){a.state=7,f instanceof Error&&Tr(f)}}
Mv.prototype.invoke=function(a){a=void 0===a?{}:a;var b=this.i;if(b){var c={Mb:a};if(b.Wa)throw Error("Already disposed");a=Ah();var d;null!=(d=b.sa)&&d.j.i.Cb("/client_streamz/bg/fsc",d.Ba);d=b.md([c.Mb,c.kd]);null!=(b=b.sa)&&(a=Ah()-a,b.l.i.hb("/client_streamz/bg/fsl",a,b.Ba));b=d}else b=null;return b};
Mv.prototype.dispose=function(){Pv(this,null);this.state=8};
function Pv(a,b){pe(a.i);a.i=b}
;var Qv=new Mv;function Rv(){return Qv.isInitialized()}
function Sv(a){a=void 0===a?{}:a;return Qv.invoke(a)}
;function Tv(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?hm():d;this.m=c;this.l=d;this.j=new Bh;this.i=a;a={};c=p(this.i.entries());for(d=c.next();!d.done;a={Ca:a.Ca,Na:a.Na},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Na=d;a.Ca=e;d=function(f){return function(){f.Ca.tb();b.i[f.Na].eb=!0;b.i.every(function(g){return!0===g.eb})&&b.j.resolve()}}(a);
e=dm(d,Uv(this,a.Ca));this.i[a.Na]=Object.assign({},a.Ca,{tb:d,Za:e})}}
function Vv(a){var b=Array.from(a.i.keys()).sort(function(d,e){return Uv(a,a.i[e])-Uv(a,a.i[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.Za||c.eb||(a.l.fa(c.Za),dm(c.tb,10))}
Tv.prototype.cancel=function(){for(var a=p(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Za||b.eb||this.l.fa(b.Za),b.eb=!0;this.j.resolve()};
function Uv(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function Wv(a){this.state=a;this.plugins=[];this.s=void 0}
Wv.prototype.install=function(){this.plugins.push.apply(this.plugins,ha(Ja.apply(0,arguments)))};
Wv.prototype.transition=function(a,b){var c=this,d=this.B.find(function(f){return f.from===c.state&&f.F===a});
if(d){this.l&&(Vv(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Xv(this,e,this.s),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Xv(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
hm();var g={};e=p(e);for(var h=e.next();!h.done;g={Oa:g.Oa},h=e.next())g.Oa=h.value,fm(function(k){return function(){k.Oa.callback.apply(k.Oa,ha(d))}}(g));
f=f.map(function(k){var m;return{tb:function(){k.callback.apply(k,ha(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new Tv(f))}}
ea.Object.defineProperties(Wv.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Yv(a){Wv.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.i=new Map;this.B=[{from:"document_active",F:"document_disposed_preventable",action:this.N},{from:"document_active",F:"document_disposed",action:this.m},{from:"document_disposed_preventable",F:"document_disposed",action:this.m},{from:"document_disposed_preventable",F:"flush_logs",action:this.o},{from:"document_disposed_preventable",F:"document_active",action:this.j},{from:"document_disposed",F:"flush_logs",action:this.o},
{from:"document_disposed",F:"document_active",action:this.j},{from:"document_disposed",F:"document_disposed",action:function(){}},
{from:"flush_logs",F:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
t(Yv,Wv);Yv.prototype.N=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Yv.prototype.m=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
Yv.prototype.o=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Yv.prototype.j=function(){this.i=new Map};function Zv(a){Wv.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.B=[{from:"document_visibility_unknown",F:"document_visible",action:this.j},{from:"document_visibility_unknown",F:"document_hidden",action:this.i},{from:"document_visibility_unknown",F:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",F:"document_backgrounded",action:this.m},{from:"document_visible",F:"document_hidden",action:this.i},{from:"document_visible",F:"document_foregrounded",action:this.o},
{from:"document_visible",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_hidden",action:this.i},{from:"document_foregrounded",F:"document_foregrounded",action:this.o},{from:"document_hidden",F:"document_visible",action:this.j},{from:"document_hidden",F:"document_backgrounded",action:this.m},{from:"document_hidden",F:"document_hidden",action:this.i},{from:"document_backgrounded",F:"document_hidden",action:this.i},
{from:"document_backgrounded",F:"document_backgrounded",action:this.m},{from:"document_backgrounded",F:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
t(Zv,Wv);Zv.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Zv.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Zv.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Zv.prototype.o=function(a,b){a(null==b?void 0:b.event)};function $v(){this.i=new Yv;this.j=new Zv}
$v.prototype.install=function(){var a=Ja.apply(0,arguments);this.i.install.apply(this.i,ha(a));this.j.install.apply(this.j,ha(a))};function aw(){$v.call(this);var a={};this.install((a.document_disposed={callback:this.l},a));a={};this.install((a.flush_logs={callback:this.m},a))}
var bw;t(aw,$v);aw.prototype.m=function(){if(M("web_fp_via_jspb")){var a=new sj,b=ks();b&&a.V(b);b=new Sj;Zd(b,sj,380,mk,a);sr(b);M("web_fp_via_jspb_and_json")&&sm("finalPayload",{csn:ks()})}else sm("finalPayload",{csn:ks()})};
aw.prototype.l=function(){Xr(Yr)};function cw(){}
cw.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new cw,z("ytglobal.storage_",a));return a};
cw.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(dw()):d.return()})};
function dw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",cw);function qm(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=Gk("ytidb_transaction_ended_event_rate_limit",.02)}
qm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":ew(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function ew(a,b){cw.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:fw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:fw(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function fw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function gw(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.channel="widget";this.G=!!a;this.v=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.G&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.s||0<=eb(d.s,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.s=this.j=this.o=null;window.addEventListener("message",this.v)}
t(gw,J);gw.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Nk(d)}}};
gw.prototype.D=function(){window.removeEventListener("message",this.v);J.prototype.D.call(this)};function hw(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new gw(!!L("WIDGET_ID_ENFORCE")),b=this.Uc.bind(this);a.o=b;a.s=null;this.i.channel="widget";if(a=L("WIDGET_ID"))this.i.sessionId=a}
l=hw.prototype;l.Uc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,iw(this,a)),this.l[a]=!0)):this.Db(a,b,c)};
l.Db=function(){};
function iw(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Hc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.pb());this.sendMessage("onReady");fb(this.j,this.ic,this);this.j=[]};
l.pb=function(){return null};
function jw(a,b){a.sendMessage("infoDelivery",b)}
l.ic=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.ic({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};var kw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function lw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function mw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=p(kw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function nw(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function ow(a){hw.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.ed.bind(this));this.addEventListener("onVolumeChange",this.fd.bind(this));this.addEventListener("onApiChange",this.Yc.bind(this));this.addEventListener("onPlaybackQualityChange",this.bd.bind(this));this.addEventListener("onPlaybackRateChange",this.cd.bind(this));this.addEventListener("onStateChange",this.dd.bind(this));this.addEventListener("onWebglSettingsChanged",
this.gd.bind(this))}
t(ow,hw);l=ow.prototype;
l.Db=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&lw(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=mw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=mw(e);break;case "loadPlaylist":case "cuePlaylist":e=nw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);lw(a)&&jw(this,this.pb())}};
l.onReady=function(){var a=this.Hc.bind(this);this.i.j=a;a=this.api.getVideoData();!1===a.isPlayable&&this.sendMessage("onError",a.errorCode)};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.pb=function(){if(!this.api)return null;var a=this.api.getApiInterface();mb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.dd=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());jw(this,a)};
l.bd=function(a){jw(this,{playbackQuality:a})};
l.cd=function(a){jw(this,{playbackRate:a})};
l.Yc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.fd=function(){jw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.ed=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());jw(this,a)};
l.gd=function(){var a={sphericalProperties:this.api.getSphericalProperties()};jw(this,a)};
l.dispose=function(){hw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function pw(a){J.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.cc,this)}
t(pw,J);l=pw.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.wa("RECEIVING"))};
l.wa=function(a,b){this.started&&!this.i()&&this.connection.wa(a,b)};
l.cc=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=qw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=rw(a,c))&&this.wa(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.Zc.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.Zc=function(a,b){this.started&&!this.i()&&this.connection.wa(a,this.ob(a,b))};
l.ob=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.D=function(){var a=this.connection;a.i()||vi(a.j,"command",this.cc,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);J.prototype.D.call(this)};function sw(a,b){pw.call(this,b);this.api=a;this.start()}
t(sw,pw);sw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
sw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function qw(a,b){switch(a){case "loadVideoById":return a=mw(b),[a];case "cueVideoById":return a=mw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=nw(b),[a];case "cuePlaylist":return a=nw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function rw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
sw.prototype.ob=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return pw.prototype.ob.call(this,a,b)};
sw.prototype.D=function(){pw.prototype.D.call(this);delete this.api};function tw(a){a=void 0===a?!1:a;J.call(this);this.j=new K(a);re(this,this.j)}
Za(tw,J);tw.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
tw.prototype.m=function(a,b){this.i()||this.j.qa.apply(this.j,arguments)};function uw(a,b,c){tw.call(this);this.l=a;this.destination=b;this.id=c}
t(uw,tw);uw.prototype.wa=function(a,b){this.i()||this.l.wa(this.destination,this.id,a,b)};
uw.prototype.D=function(){this.destination=this.l=null;tw.prototype.D.call(this)};function vw(a,b,c){J.call(this);this.destination=a;this.origin=c;this.j=lq(window,"message",this.l.bind(this));this.connection=new uw(this,a,b);re(this,this.connection)}
t(vw,J);vw.prototype.wa=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(JSON.stringify(a),this.origin))};
vw.prototype.l=function(a){if(!this.i()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.i()||c.m("command",b.command,b.data,a.origin)}}}};
vw.prototype.D=function(){mq(this.j);this.destination=null;J.prototype.D.call(this)};function ww(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||vb(b);this.assets=a.assets||{};this.attrs=a.attrs||vb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ww.prototype.clone=function(){var a=new ww,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=vb(c):a[b]=c}return a};var xw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function yw(a){a=a||"";if(window.spf){var b=a.match(xw);spf.style.load(a,b?b[1]:"",void 0)}else zw(a)}
function zw(a){var b=Aw(a),c=document.getElementById(b),d=c&&vv(c,"loaded");d||c&&!d||(c=Bw(a,b,function(){vv(c,"loaded")||(tv(c),Bq(b),fl(Ya(Cq,b),0))}))}
function Bw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Lb(a);gc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Aw(a){var b=kf("A");Db("This URL is never added to the DOM");fc(b,new Ob(a,Pb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function Cw(){J.call(this);this.j=[]}
t(Cw,J);Cw.prototype.D=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.D.call(this)};function Dw(){Cw.apply(this,arguments)}
t(Dw,Cw);function Ew(a,b,c,d){J.call(this);var e=this;this.v=b;this.webPlayerContextConfig=d;this.da=!1;this.api={};this.W=this.s=null;this.K=new K;this.j={};this.R=this.X=this.elementId=this.ra=this.config=null;this.P=!1;this.m=this.G=null;this.ka={};this.Pa=["onReady"];this.lastError=null;this.Ea=NaN;this.J={};this.Qa=new Dw(this);this.T=0;this.l=this.o=a;re(this,this.K);Fw(this);Gw(this);re(this,this.Qa);c?this.T=fl(function(){e.loadNewVideoConfig(c)},0):d&&(Hw(this),Iw(this))}
t(Ew,J);l=Ew.prototype;l.getId=function(){return this.v};
l.loadNewVideoConfig=function(a){if(!this.i()){this.T&&(gl(this.T),this.T=0);var b=a||{};b instanceof ww||(b=new ww(b));this.config=b;this.setConfig(a);Iw(this);this.isReady()&&Jw(this)}};
function Hw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.ra=a;this.config=Kw(a);Hw(this);if(!this.X){var b;this.X=Lw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=Qh(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=Qh(Number(a)||a))};
function Jw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Mw(a){var b=!0,c=Nw(a);c&&a.config&&(a=Ow(a),b=vv(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Iw(a){if(!a.i()&&!a.P){var b=Mw(a);if(b&&"html5"===(Nw(a)?"html5":null))a.R="html5",a.isReady()||Pw(a);else if(Qw(a),a.R="html5",b&&a.m&&a.o)a.o.appendChild(a.m),Pw(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Rw(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Kw(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);Pw(a)};
a.P=!0;b?a.G():(zv(Ow(a),a.G),(b=Sw(a))&&yw(b),Tw(a)&&!c&&z("yt.player.Application.create",null))}}}
function Nw(a){var b=jf(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function Pw(a){if(!a.i()){var b=Nw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.P=!1;if(!Rw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Uw(a)}else a.Ea=fl(function(){Pw(a)},50)}}
function Uw(a){Fw(a);a.da=!0;var b=Nw(a);if(b){a.s=Vw(a,b,"addEventListener");a.W=Vw(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Vw(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.s&&a.s(g,a.j[g]);Jw(a);a.X&&a.X(a.api);a.K.qa("onReady",a.api)}
function Vw(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Tr(f))}}}
function Fw(a){a.da=!1;if(a.W)for(var b in a.j)a.j.hasOwnProperty(b)&&a.W(b,a.j[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&gl(Number(c));a.J={};a.s=null;a.W=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ra};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.da};
function Gw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Bq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Bq("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=Lw(this,b);d&&(0<=eb(this.Pa,a)||this.j[a]||(b=Ww(this,a),this.s&&this.s(a,b)),this.K.subscribe(a,d),"onReady"===a&&this.isReady()&&fl(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=Lw(this,b))&&vi(this.K,a,b)};
function Lw(a,b){var c=b;if("string"===typeof b){if(a.ka[b])return a.ka[b];c=function(){var d=Ja.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){Sr(f)}};
a.ka[b]=c}return c?c:null}
function Ww(a,b){var c="ytPlayer"+b+a.v;a.j[b]=c;y[c]=function(d){var e=fl(function(){if(!a.i()){try{a.K.qa(b,null!=d?d:void 0)}catch(h){Tr(new Q("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.J,g=String(e);g in f&&delete f[g]}},0);
sb(a.J,String(e))};
return c}
l.getPlayerType=function(){return this.R||(Nw(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Qw(a){a.cancel();Fw(a);a.R=null;a.config&&(a.config.loaded=!1);var b=Nw(a);b&&(Mw(a)||!Tw(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.G&&Fv(Ow(this),this.G);gl(this.Ea);this.P=!1};
l.D=function(){Qw(this);if(this.m&&this.config&&this.m.destroy)try{this.m.destroy()}catch(b){Sr(b)}this.ka=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(y[this.j[a]]=null);this.ra=this.config=this.api=null;delete this.o;delete this.l;J.prototype.D.call(this)};
function Tw(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Ow(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Sw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Rw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Tk(c||"","&")[b]}
function Kw(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?vb(e):e}return b}
;var Xw={},Yw="player_uid_"+(1E9*Math.random()>>>0);function Zw(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?jf(d):d;var e=Yw+"_"+Ra(d),f=Xw[e];if(f&&c)return $w(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Ew(d,e,a,b);Xw[e]=f;Bq("player-added",f.api);se(f,function(){delete Xw[f.getId()]});
return f.api}
function $w(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var ax=null,bx=null,cx=null;function dx(){ex()}
function fx(){ex()}
function ex(){var a=ax.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function gx(a,b,c){a="ST-"+kc(a).toString(36);b=b?tc(b):"";c=c||5;As()&&wl(a,b,c)}
;function hx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=oc(window.location.href);g&&f.push(g);g=oc(d);if(0<=eb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),fc(f,d),d=f.href),d&&(d=pc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:ks()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
gx(d,b,h)}else gx(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=vc(a,k)+m;var r=void 0===r?Ph:r;a:{r=void 0===r?Ph:r;for(k=0;k<r.length;++k)if(m=r[k],m instanceof Nh&&m.isValid(a)){r=new Ob(a,Pb);break a}r=void 0}r=r||Sb;if(r instanceof Ob)var x=Qb(r);else{a:if(Fh){try{x=new URL(r)}catch(v){x="https:";break a}x=x.protocol}else b:{x=document.createElement("a");try{x.href=r}catch(v){x=void 0;
break b}x=-1!==[":",""].indexOf(x.protocol)?"https:":x.protocol}x="javascript:"===x?"about:invalid":r}c.href=x}return!0}
;z("yt.setConfig",Dk);z("yt.config.set",Dk);z("yt.setMsg",ps);z("yt.msgs.set",ps);z("yt.logging.errors.log",Sr);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}Ks(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=Yk(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));ku();if((c=L("WEB_PLAYER_CONTEXT_CONFIGS"))&&
"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Yk(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}ax=Zw(a,c,!1)}else ax=Zw(a);ax.addEventListener("onVideoDataChange",dx);ax.addEventListener("onReady",fx);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?cx=new ow(ax):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(bx=new vw(window.parent,
a,b),cx=new sw(ax,bx.connection));Iv();M("ytidb_create_logger_embed_killswitch")||pm();a={};bw||(bw=new aw);bw.install((a.flush_logs={callback:function(){Uq()}},a));
M("embeds_web_enable_new_nwl")?Yo():fp();M("ytidb_clear_embedded_player")&&Xh.S(function(){var e;if(!Su){var f=Vs(),g={xb:Ru,mc:Qu};f.providers.set(g.xb,g);g={Lb:{feedbackEndpoint:ft(Mu),modifyChannelNotificationPreferenceEndpoint:ft(Nu),playlistEditEndpoint:ft(Ou),subscribeEndpoint:ft(Ku),unsubscribeEndpoint:ft(Lu),webPlayerShareEntityServiceEndpoint:ft(Pu)}};var h=M("web_enable_client_location_service")?bt.getInstance():void 0,k={};h&&(k.client_location=h);if(void 0===m){Ls.i||(Ls.i=new Ls);var m=
Ls.i}void 0===e&&(e=f.resolve(Ru));yu(g,e,m,k);m={xb:Du,nc:xu.i};f.providers.set(m.xb,m);Su=f.resolve(Du)}sv()})});
var ix=Lk(function(){ru();var a=zl.getInstance(),b=Cl(119),c=1<window.devicePixelRatio;if(document.body&&ii(document.body,"exp-invert-logo"))if(c&&!ii(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ii(d,"inverted-hdpi")){var e=gi(d);hi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ii(document.body,"inverted-hdpi")&&ji();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Dl(b)||0;d=c?d|67108864:d&-67108865;0==d?delete yl[b]:(c=d.toString(16),
yl[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in yl)d.push(f+"="+encodeURIComponent(String(yl[f])));wl(b,d.join("&"),63072E3,a.j,c)}bv.i||(bv.i=new bv);a=bv.i;f=16623;var g=void 0===g?{}:g;Object.values(qs).includes(f)||(Tr(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.o=[];a.N=[];g.Ob?ev(a,f,g):fv(a,f,g)}),jx=Lk(function(){ax&&ax.sendAbandonmentPing&&ax.sendAbandonmentPing();
L("PL_ATT")&&Qv.dispose();for(var a=Xh,b=0,c=Gv.length;b<c;b++)a.fa(Gv[b]);Gv.length=0;Ev("//static.doubleclick.net/instream/ad_status.js");Hv=!1;Dk("DCLKSTAT",0);qe(cx,bx);ax&&(ax.removeEventListener("onVideoDataChange",dx),ax.destroy())});
window.addEventListener?(window.addEventListener("load",ix),window.addEventListener("pagehide",jx)):window.attachEvent&&(window.attachEvent("onload",ix),window.attachEvent("onunload",jx));z("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Rv);z("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Sv);z("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Jv);z("yt.player.exports.navigate",B("yt.player.exports.navigate")||hx);
z("yt.util.activity.init",B("yt.util.activity.init")||qq);z("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||tq);z("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||rq);}).call(this);
