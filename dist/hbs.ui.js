/*
 RequireJS 2.1.17 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(ba){function G(b){return"[object Function]"===K.call(b)}function H(b){return"[object Array]"===K.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function T(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return fa.call(b,c)}function m(b,c){return t(b,c)&&b[c]}function B(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function U(b,c,d,e){c&&B(c,function(c,g){if(d||!t(b,g))e&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof
RegExp)?(b[g]||(b[g]={}),U(b[g],c,d,e)):b[g]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;v(b.split("."),function(b){c=c[b]});return c}function C(b,c,d,e){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=e;d&&(c.originalError=d);return c}function ga(b){function c(a,k,b){var f,l,c,d,e,g,i,p,k=k&&k.split("/"),h=j.map,n=h&&h["*"];if(a){a=a.split("/");l=a.length-1;j.nodeIdCompat&&
Q.test(a[l])&&(a[l]=a[l].replace(Q,""));"."===a[0].charAt(0)&&k&&(l=k.slice(0,k.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)if(d=l[c],"."===d)l.splice(c,1),c-=1;else if(".."===d&&!(0===c||1===c&&".."===l[2]||".."===l[c-1])&&0<c)l.splice(c-1,2),c-=2;a=a.join("/")}if(b&&h&&(k||n)){l=a.split("/");c=l.length;a:for(;0<c;c-=1){e=l.slice(0,c).join("/");if(k)for(d=k.length;0<d;d-=1)if(b=m(h,k.slice(0,d).join("/")))if(b=m(b,e)){f=b;g=c;break a}!i&&(n&&m(n,e))&&(i=m(n,e),p=c)}!f&&i&&(f=i,g=p);f&&(l.splice(0,
g,f),a=l.join("/"))}return(f=m(j.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName("script"),function(k){if(k.getAttribute("data-requiremodule")===a&&k.getAttribute("data-requirecontext")===i.contextName)return k.parentNode.removeChild(k),!0})}function e(a){var k=m(j.paths,a);if(k&&H(k)&&1<k.length)return k.shift(),i.require.undef(a),i.makeRequire(null,{skipMap:!0})([a]),!0}function n(a){var k,c=a?a.indexOf("!"):-1;-1<c&&(k=a.substring(0,c),a=a.substring(c+1,a.length));return[k,a]}function p(a,
k,b,f){var l,d,e=null,g=k?k.name:null,j=a,p=!0,h="";a||(p=!1,a="_@r"+(K+=1));a=n(a);e=a[0];a=a[1];e&&(e=c(e,g,f),d=m(r,e));a&&(e?h=d&&d.normalize?d.normalize(a,function(a){return c(a,g,f)}):-1===a.indexOf("!")?c(a,g,f):a:(h=c(a,g,f),a=n(h),e=a[0],h=a[1],b=!0,l=i.nameToUrl(h)));b=e&&!d&&!b?"_unnormalized"+(O+=1):"";return{prefix:e,name:h,parentMap:k,unnormalized:!!b,url:l,originalName:j,isDefine:p,id:(e?e+"!"+h:h)+b}}function s(a){var k=a.id,b=m(h,k);b||(b=h[k]=new i.Module(a));return b}function q(a,
k,b){var f=a.id,c=m(h,f);if(t(r,f)&&(!c||c.defineEmitComplete))"defined"===k&&b(r[f]);else if(c=s(a),c.error&&"error"===k)b(c.error);else c.on(k,b)}function w(a,b){var c=a.requireModules,f=!1;if(b)b(a);else if(v(c,function(b){if(b=m(h,b))b.error=a,b.events.error&&(f=!0,b.emit("error",a))}),!f)g.onError(a)}function x(){R.length&&(ha.apply(A,[A.length,0].concat(R)),R=[])}function y(a){delete h[a];delete V[a]}function F(a,b,c){var f=a.map.id;a.error?a.emit("error",a.error):(b[f]=!0,v(a.depMaps,function(f,
d){var e=f.id,g=m(h,e);g&&(!a.depMatched[d]&&!c[e])&&(m(b,e)?(a.defineDep(d,r[e]),a.check()):F(g,b,c))}),c[f]=!0)}function D(){var a,b,c=(a=1E3*j.waitSeconds)&&i.startTime+a<(new Date).getTime(),f=[],l=[],g=!1,h=!0;if(!W){W=!0;B(V,function(a){var i=a.map,j=i.id;if(a.enabled&&(i.isDefine||l.push(a),!a.error))if(!a.inited&&c)e(j)?g=b=!0:(f.push(j),d(j));else if(!a.inited&&(a.fetched&&i.isDefine)&&(g=!0,!i.prefix))return h=!1});if(c&&f.length)return a=C("timeout","Load timeout for modules: "+f,null,
f),a.contextName=i.contextName,w(a);h&&v(l,function(a){F(a,{},{})});if((!c||b)&&g)if((z||ea)&&!X)X=setTimeout(function(){X=0;D()},50);W=!1}}function E(a){t(r,a[0])||s(p(a[0],null,!0)).init(a[1],a[2])}function I(a){var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=i.onScriptError;(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function J(){var a;
for(x();A.length;){a=A.shift();if(null===a[0])return w(C("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));E(a)}}var W,Z,i,L,X,j={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},h={},V={},$={},A=[],r={},S={},aa={},K=1,O=1;L={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?r[a.map.id]=a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?
a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return m(j.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};Z=function(a){this.events=m($,a.id)||{};this.map=a;this.shim=m(j.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Z.prototype={init:function(a,b,c,f){f=f||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=u(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=
c;this.inited=!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
this.map.url;S[a]||(S[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var f=this.exports,l=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(G(l)){if(this.events.error&&this.map.isDefine||g.onError!==ca)try{f=i.execCb(c,l,b,f)}catch(d){a=d}else f=i.execCb(c,l,b,f);this.map.isDefine&&void 0===f&&((b=this.module)?f=b.exports:this.usingExports&&
(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else f=l;this.exports=f;if(this.map.isDefine&&!this.ignore&&(r[c]=f,g.onResourceLoad))g.onResourceLoad(i,this.map,this.depMaps);y(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=
this.map,b=a.id,d=p(a.prefix);this.depMaps.push(d);q(d,"defined",u(this,function(f){var l,d;d=m(aa,this.map.id);var e=this.map.name,P=this.map.parentMap?this.map.parentMap.name:null,n=i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(e=f.normalize(e,function(a){return c(a,P,!0)})||""),f=p(a.prefix+"!"+e,this.map.parentMap),q(f,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),d=m(h,f.id)){this.depMaps.push(f);
if(this.events.error)d.on("error",u(this,function(a){this.emit("error",a)}));d.enable()}}else d?(this.map.url=i.nameToUrl(d),this.load()):(l=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),l.error=u(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];B(h,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),l.fromText=u(this,function(f,c){var d=a.name,e=p(d),P=M;c&&(f=c);P&&(M=!1);s(e);t(j.config,b)&&(j.config[d]=j.config[b]);try{g.exec(f)}catch(h){return w(C("fromtexteval",
"fromText eval for "+b+" failed: "+h,h,[b]))}P&&(M=!0);this.depMaps.push(e);i.completeLoad(d);n([d],l)}),f.load(a.name,n,l,j))}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){V[this.map.id]=this;this.enabling=this.enabled=!0;v(this.depMaps,u(this,function(a,b){var c,f;if("string"===typeof a){a=p(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=m(L,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;q(a,"defined",u(this,function(a){this.defineDep(b,
a);this.check()}));this.errback?q(a,"error",u(this,this.errback)):this.events.error&&q(a,"error",u(this,function(a){this.emit("error",a)}))}c=a.id;f=h[c];!t(L,c)&&(f&&!f.enabled)&&i.enable(a,this)}));B(this.pluginMaps,u(this,function(a){var b=m(h,a.id);b&&!b.enabled&&i.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){v(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:j,contextName:b,
registry:h,defined:r,urlFetched:S,defQueue:A,Module:Z,makeModuleMap:p,nextTick:g.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=j.shim,c={paths:!0,bundles:!0,config:!0,map:!0};B(a,function(a,b){c[b]?(j[b]||(j[b]={}),U(j[b],a,!0,!0)):j[b]=a});a.bundles&&B(a.bundles,function(a,b){v(a,function(a){a!==b&&(aa[a]=b)})});a.shim&&(B(a.shim,function(a,c){H(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);
b[c]=a}),j.shim=b);a.packages&&v(a.packages,function(a){var b,a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(j.paths[b]=a.location);j.pkgs[b]=a.name+"/"+(a.main||"main").replace(ia,"").replace(Q,"")});B(h,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=p(b))});if(a.deps||a.callback)i.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports)}},makeRequire:function(a,e){function j(c,d,m){var n,
q;e.enableBuildCallback&&(d&&G(d))&&(d.__requireJsBuild=!0);if("string"===typeof c){if(G(d))return w(C("requireargs","Invalid require call"),m);if(a&&t(L,c))return L[c](h[a.id]);if(g.get)return g.get(i,c,a,j);n=p(c,a,!1,!0);n=n.id;return!t(r,n)?w(C("notloaded",'Module name "'+n+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[n]}J();i.nextTick(function(){J();q=s(p(null,a));q.skipMap=e.skipMap;q.init(c,d,m,{enabled:!0});D()});return j}e=e||{};U(j,{isBrowser:z,toUrl:function(b){var d,
e=b.lastIndexOf("."),k=b.split("/")[0];if(-1!==e&&(!("."===k||".."===k)||1<e))d=b.substring(e,b.length),b=b.substring(0,e);return i.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return t(r,p(b,a,!1,!0).id)},specified:function(b){b=p(b,a,!1,!0).id;return t(r,b)||t(h,b)}});a||(j.undef=function(b){x();var c=p(b,a,!0),e=m(h,b);d(b);delete r[b];delete S[c.url];delete $[b];T(A,function(a,c){a[0]===b&&A.splice(c,1)});e&&(e.events.defined&&($[b]=e.events),y(b))});return j},enable:function(a){m(h,a.id)&&
s(a).enable()},completeLoad:function(a){var b,c,d=m(j.shim,a)||{},g=d.exports;for(x();A.length;){c=A.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}c=m(h,a);if(!b&&!t(r,a)&&c&&!c.inited){if(j.enforceDefine&&(!g||!da(g)))return e(a)?void 0:w(C("nodefine","No define call for "+a,null,[a]));E([a,d.deps||[],d.exportsFn])}D()},nameToUrl:function(a,b,c){var d,e,h;(d=m(j.pkgs,a))&&(a=d);if(d=m(aa,a))return i.nameToUrl(d,b,c);if(g.jsExtRegExp.test(a))d=a+(b||"");else{d=j.paths;
a=a.split("/");for(e=a.length;0<e;e-=1)if(h=a.slice(0,e).join("/"),h=m(d,h)){H(h)&&(h=h[0]);a.splice(0,e,h);break}d=a.join("/");d+=b||(/^data\:|\?/.test(d)||c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":j.baseUrl)+d}return j.urlArgs?d+((-1===d.indexOf("?")?"?":"&")+j.urlArgs):d},load:function(a,b){g.load(i,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ja.test((a.currentTarget||a.srcElement).readyState))N=null,a=I(a),i.completeLoad(a.id)},
onScriptError:function(a){var b=I(a);if(!e(b.id))return w(C("scripterror","Script error for: "+b.id,a,[b.id]))}};i.require=i.makeRequire();return i}var g,x,y,D,I,E,N,J,s,O,ka=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,la=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,Q=/\.js$/,ia=/^\.\//;x=Object.prototype;var K=x.toString,fa=x.hasOwnProperty,ha=Array.prototype.splice,z=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),ea=!z&&"undefined"!==typeof importScripts,ja=
z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Y="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},q={},R=[],M=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(G(requirejs))return;q=requirejs;requirejs=void 0}"undefined"!==typeof require&&!G(require)&&(q=require,require=void 0);g=requirejs=function(b,c,d,e){var n,p="_";!H(b)&&"string"!==typeof b&&(n=b,H(c)?(b=c,c=d,d=e):b=[]);n&&n.context&&(p=n.context);(e=m(F,p))||(e=F[p]=g.s.newContext(p));
n&&e.configure(n);return e.require(b,c,d)};g.config=function(b){return g(b)};g.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=g);g.version="2.1.17";g.jsExtRegExp=/^\/|:|\?|\.js$/;g.isBrowser=z;x=g.s={contexts:F,newContext:ga};g({});v(["toUrl","undef","defined","specified"],function(b){g[b]=function(){var c=F._;return c.require[b].apply(c,arguments)}});if(z&&(y=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))y=
x.head=D.parentNode;g.onError=ca;g.createNode=function(b){var c=b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};g.load=function(b,c,d){var e=b&&b.config||{};if(z)return e=g.createNode(e,c,d),e.setAttribute("data-requirecontext",b.contextName),e.setAttribute("data-requiremodule",c),e.attachEvent&&!(e.attachEvent.toString&&0>e.attachEvent.toString().indexOf("[native code"))&&
!Y?(M=!0,e.attachEvent("onreadystatechange",b.onScriptLoad)):(e.addEventListener("load",b.onScriptLoad,!1),e.addEventListener("error",b.onScriptError,!1)),e.src=d,J=e,D?y.insertBefore(e,D):y.appendChild(e),J=null,e;if(ea)try{importScripts(d),b.completeLoad(c)}catch(m){b.onError(C("importscripts","importScripts failed for "+c+" at "+d,m,[c]))}};z&&!q.skipDataMain&&T(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(I=b.getAttribute("data-main"))return s=I,q.baseUrl||(E=s.split("/"),
s=E.pop(),O=E.length?E.join("/")+"/":"./",q.baseUrl=O),s=s.replace(Q,""),g.jsExtRegExp.test(s)&&(s=I),q.deps=q.deps?q.deps.concat(s):[s],!0});define=function(b,c,d){var e,g;"string"!==typeof b&&(d=c,c=b,b=null);H(c)||(d=c,c=null);!c&&G(d)&&(c=[],d.length&&(d.toString().replace(ka,"").replace(la,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(M){if(!(e=J))N&&"interactive"===N.readyState||T(document.getElementsByTagName("script"),function(b){if("interactive"===
b.readyState)return N=b}),e=N;e&&(b||(b=e.getAttribute("data-requiremodule")),g=F[e.getAttribute("data-requirecontext")])}(g?g.defQueue:R).push([b,c,d])};define.amd={jQuery:!0};g.exec=function(b){return eval(b)};g(q)}})(this);
/*! t3 v 1.2.0*/
/*!
Copyright 2015 Box, Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
!function(e){var t={};if(t.EventTarget=function(){"use strict";function e(){this._handlers={}}return e.prototype={constructor:e,on:function(e,t){var n,r,o=this._handlers[e];for("undefined"==typeof o&&(o=this._handlers[e]=[]),n=0,r=o.length;r>n;n++)if(o[n]===t)return;o.push(t)},fire:function(e,t){var n,r,o,i={type:e,data:t};if(n=this._handlers[i.type],n instanceof Array)for(n=n.concat(),r=0,o=n.length;o>r;r++)n[r].call(this,i)},off:function(e,t){var n,r,o=this._handlers[e];if(o instanceof Array)for(n=0,r=o.length;r>n;n++)if(o[n]===t){o.splice(n,1);break}}},e}(),t.Context=function(){"use strict";function e(e,t){this.application=e,this.element=t}return e.prototype={broadcast:function(e,t){this.application.broadcast(e,t)},getService:function(e){return this.application.getService(e)},getConfig:function(e){return this.application.getModuleConfig(this.element,e)},getGlobal:function(e){return this.application.getGlobal(e)},getGlobalConfig:function(e){return this.application.getGlobalConfig(e)},reportError:function(e){this.application.reportError(e)},getElement:function(){return this.element}},e}(),t.Application=function(){"use strict";function n(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function r(e,t){return function(){return e.apply(t,arguments)}}function o(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1}function i(){x={},E={},C={},S={},G={},H=!1;for(var e=0;e<B.length;e++)delete j[B[e]],delete t.Context.prototype[B[e]];B=[]}function a(e){for(var t=0,n=A.length;n>t;t++)if(A[t]===e)return!0;return!1}function u(e){if(x.debug)throw e;j.fire("error",{exception:e})}function s(e,t){var n,r;for(n in e)r=e[n],"function"==typeof r&&(e[n]=function(e,n){return function(){var r=t+"."+e+"() - ";try{return n.apply(this,arguments)}catch(o){o.name=r+o.name,o.message=r+o.message,u(o)}}}(n,r))}function c(e){var t=e.getAttribute("data-module");return t?t.split(" ")[0]:""}function f(e){return e&&e.hasAttribute("data-module")}function l(e){return e&&e.hasAttribute("data-type")}function d(e,t){"function"==typeof e[t]&&e[t].apply(e,Array.prototype.slice.call(arguments,2))}function p(e){var t=C[e];return t?a(e)?(u(new ReferenceError("Circular service dependency: "+A.join(" -> ")+" -> "+e)),null):(A.push(e),t.instance||(t.instance=t.creator(j)),A.pop(),t.instance):null}function h(e){var t,n,r,o,i=[];for(n=e.instance.behaviors||[],t=0;t<n.length;t++)"behaviorInstances"in e||(e.behaviorInstances={}),o=e.behaviorInstances,r=S[n[t]],r?(o[n[t]]||(o[n[t]]=r.creator(e.context)),i.push(o[n[t]])):u(new Error('Behavior "'+n[t]+'" not found'));return i}function g(e){for(var t=l(e);!t&&e&&!f(e);)e=e.parentNode,t=l(e);return t?e:null}function v(e,t,n){function r(e){for(var t=g(e.target),r=t?t.getAttribute("data-type"):"",o=0;o<n.length;o++)n[o](e,t,r);return!0}return $(e).on(t,r),r}function y(e){var t,n,o,i,a,u=h(e);for(t=0;t<k.length;t++){for(a=[],o=k[t],i="on"+o,e.instance[i]&&a.push(r(e.instance[i],e.instance)),n=0;n<u.length;n++)u[n][i]&&a.push(r(u[n][i],u[n]));a.length&&(e.eventHandlers[o]=v(e.element,o,a))}}function m(e){for(var t in e.eventHandlers)e.eventHandlers.hasOwnProperty(t)&&$(e.element).off(t,e.eventHandlers[t]);e.eventHandlers={}}function b(e){return G[e.id]}var w="[data-module]",x={},E={},A=[],C={},S={},G={},B=[],H=!1,j=new t.EventTarget,k=["click","mouseover","mouseout","mousedown","mouseup","mouseenter","mouseleave","keydown","keyup","submit","change","contextmenu","dblclick","input","focusin","focusout"];return n(j,{init:function(e){n(x,e||{}),this.startAll(document.documentElement),this.fire("init"),H=!0},destroy:function(){this.stopAll(document.documentElement),i()},isStarted:function(e){var t=b(e);return"object"==typeof t},start:function(e){var n,r,o,i=c(e),a=E[i];if(!a)return void u(new Error('Module type "'+i+'" is not defined.'));if(!this.isStarted(e)){e.id||(e.id="mod-"+i+"-"+a.counter),a.counter++,r=new t.Context(this,e),o=a.creator(r),x.debug||s(o,i),n={moduleName:i,instance:o,context:r,element:e,eventHandlers:{}},y(n),G[e.id]=n,d(n.instance,"init");for(var f,l=h(n),p=0,g=l.length;g>p;p++)f=l[p],d(f,"init")}},stop:function(e){var t=b(e);if(t){m(t);for(var n,r=h(t),o=r.length-1;o>=0;o--)n=r[o],d(n,"destroy");d(t.instance,"destroy"),delete G[e.id]}else if(x.debug)return void u(new Error("Unable to stop module associated with element: "+e.id))},startAll:function(e){for(var t=e.querySelectorAll(w),n=0,r=t.length;r>n;n++)this.start(t[n])},stopAll:function(e){for(var t=e.querySelectorAll(w),n=0,r=t.length;r>n;n++)this.stop(t[n])},addModule:function(e,t){return"undefined"!=typeof E[e]?void u(new Error("Module "+e+" has already been added.")):void(E[e]={creator:t,counter:1})},getModuleConfig:function(e,t){var n,r=b(e);return r?(r.config||(n=e.querySelector('script[type="text/x-config"]'),n&&(r.config=JSON.parse(n.text))),r.config?"undefined"==typeof t?r.config:t in r.config?r.config[t]:null:null):null},addService:function(e,n,r){if("undefined"!=typeof C[e])return void u(new Error("Service "+e+" has already been added."));if(r=r||{},C[e]={creator:n,instance:null},r.exports){var o,i=r.exports.length;for(o=0;i>o;o++){var a=r.exports[o],s=function(t){return function(){var n=p(e);return n[t].apply(n,arguments)}}(a);if(a in this)return void u(new Error(a+" already exists on Application object"));if(this[a]=s,a in t.Context.prototype)return void u(new Error(a+" already exists on Context prototype"));t.Context.prototype[a]=s,B.push(a)}}},getService:p,addBehavior:function(e,t){return"undefined"!=typeof S[e]?void u(new Error("Behavior "+e+" has already been added.")):void(S[e]={creator:t,instance:null})},broadcast:function(e,t){var n,i,a,u,s,c;for(i in G)if(G.hasOwnProperty(i)){for(c=[],a=G[i],-1!==o(a.instance.messages||[],e)&&c.push(r(a.instance.onmessage,a.instance)),s=h(a),n=0;n<s.length;n++)u=s[n],-1!==o(u.messages||[],e)&&c.push(r(u.onmessage,u));for(n=0;n<c.length;n++)c[n](e,t)}this.fire("message",{message:e,messageData:t})},getGlobal:function(t){return t in e?e[t]:null},getGlobalConfig:function(e){return"undefined"==typeof e?x:e in x?x[e]:null},setGlobalConfig:function(e){return H?void u(new Error("Cannot set global configuration after application initialization")):void n(x,e)},reportError:u})}(),"object"==typeof module&&"object"==typeof module.exports)module.exports=t;else{e.Box=e.Box||{};for(var n in t)t.hasOwnProperty(n)&&(e.Box[n]=t[n])}}("undefined"!=typeof window?window:this);
//# sourceMappingURL=t3.min.js.map

var requireui = require.config({
   paths: {
   	  jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
   	  css: 'https://secure.hbs.edu/static/js/css'
   }
})


requireui(['jquery'],function($){
	$(function(){
		HBS.UI.init({debug:true})
	})
})



var HBS = HBS || {
    UI: Box.Application
};
    
HBS.UI.addModule('people-picker', function(context) {

    var require = context.getGlobal('require');
    var $ = context.getGlobal('jQuery');
    
    return {
        init: function() {

            var config = context.getConfig();
            var autocomplete = null;
            if (config && config.autocomplete) autocomplete = eval(config.autocomplete);

            var libs = ['https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.js',
                        'css!https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.css'
            ]

            require(libs, function() {
                $("select", context.element).each(function() {
                    var el = this;


                    $.fn.select2.amd.require(['select2/data/array', 'select2/utils'], function(ArrayData, Utils) {
                        function CustomData($element, options) {
                            CustomData.__super__.constructor.call(this, $element, options);
                        }

                        Utils.Extend(CustomData, ArrayData);

                        CustomData.prototype.query = function(params, callback) {
                            var data = {results:[]};
                            console.info(params);

                            autocomplete(params.term, function(results) {
                                for (var i = 0; i < results.length; i++) {

                                    data.results.push({
                                        id: results[i].id,
                                        text: results[i].text
                                    });
                                }
                                console.info(data)

                                callback(data);
                            })
                        };

                        var options = {};
                        if (autocomplete) options.dataAdapter = CustomData;
                        $(el).select2(options);

                    })

                });
            })
        }
    };

});

