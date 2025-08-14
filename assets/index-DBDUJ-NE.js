(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function cS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Qf={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function uS(){if(hg)return Lo;hg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var dg;function fS(){return dg||(dg=1,Qf.exports=uS()),Qf.exports}var Lt=fS(),Jf={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function hS(){if(pg)return le;pg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function y(L,$,vt){this.props=L,this.context=$,this.refs=R,this.updater=vt||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function v(){}v.prototype=y.prototype;function O(L,$,vt){this.props=L,this.context=$,this.refs=R,this.updater=vt||M}var U=O.prototype=new v;U.constructor=O,b(U,y.prototype),U.isPureReactComponent=!0;var w=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function F(L,$,vt,St,wt,nt){return vt=nt.ref,{$$typeof:s,type:L,key:$,ref:vt!==void 0?vt:null,props:nt}}function k(L,$){return F(L.type,$,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function D(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(vt){return $[vt]})}var I=/\/+/g;function st(L,$){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):$.toString(36)}function lt(){}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(lt,lt):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ht(L,$,vt,St,wt){var nt=typeof L;(nt==="undefined"||nt==="boolean")&&(L=null);var dt=!1;if(L===null)dt=!0;else switch(nt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(L.$$typeof){case s:case t:dt=!0;break;case g:return dt=L._init,ht(dt(L._payload),$,vt,St,wt)}}if(dt)return wt=wt(L),dt=St===""?"."+st(L,0):St,w(wt)?(vt="",dt!=null&&(vt=dt.replace(I,"$&/")+"/"),ht(wt,$,vt,"",function(Yt){return Yt})):wt!=null&&(C(wt)&&(wt=k(wt,vt+(wt.key==null||L&&L.key===wt.key?"":(""+wt.key).replace(I,"$&/")+"/")+dt)),$.push(wt)),1;dt=0;var yt=St===""?".":St+":";if(w(L))for(var Pt=0;Pt<L.length;Pt++)St=L[Pt],nt=yt+st(St,Pt),dt+=ht(St,$,vt,nt,wt);else if(Pt=x(L),typeof Pt=="function")for(L=Pt.call(L),Pt=0;!(St=L.next()).done;)St=St.value,nt=yt+st(St,Pt++),dt+=ht(St,$,vt,nt,wt);else if(nt==="object"){if(typeof L.then=="function")return ht(ft(L),$,vt,St,wt);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return dt}function B(L,$,vt){if(L==null)return L;var St=[],wt=0;return ht(L,St,"","",function(nt){return $.call(vt,nt,wt++)}),St}function K(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(vt){(L._status===0||L._status===-1)&&(L._status=1,L._result=vt)},function(vt){(L._status===0||L._status===-1)&&(L._status=2,L._result=vt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return le.Children={map:B,forEach:function(L,$,vt){B(L,function(){$.apply(this,arguments)},vt)},count:function(L){var $=0;return B(L,function(){$++}),$},toArray:function(L){return B(L,function($){return $})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},le.Component=y,le.Fragment=i,le.Profiler=l,le.PureComponent=O,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,le.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cloneElement=function(L,$,vt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var St=b({},L.props),wt=L.key,nt=void 0;if($!=null)for(dt in $.ref!==void 0&&(nt=void 0),$.key!==void 0&&(wt=""+$.key),$)!H.call($,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&$.ref===void 0||(St[dt]=$[dt]);var dt=arguments.length-2;if(dt===1)St.children=vt;else if(1<dt){for(var yt=Array(dt),Pt=0;Pt<dt;Pt++)yt[Pt]=arguments[Pt+2];St.children=yt}return F(L.type,wt,void 0,void 0,nt,St)},le.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},le.createElement=function(L,$,vt){var St,wt={},nt=null;if($!=null)for(St in $.key!==void 0&&(nt=""+$.key),$)H.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(wt[St]=$[St]);var dt=arguments.length-2;if(dt===1)wt.children=vt;else if(1<dt){for(var yt=Array(dt),Pt=0;Pt<dt;Pt++)yt[Pt]=arguments[Pt+2];wt.children=yt}if(L&&L.defaultProps)for(St in dt=L.defaultProps,dt)wt[St]===void 0&&(wt[St]=dt[St]);return F(L,nt,void 0,void 0,null,wt)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:d,render:L}},le.isValidElement=C,le.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:K}},le.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},le.startTransition=function(L){var $=z.T,vt={};z.T=vt;try{var St=L(),wt=z.S;wt!==null&&wt(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(xt,Y)}catch(nt){Y(nt)}finally{z.T=$}},le.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},le.use=function(L){return z.H.use(L)},le.useActionState=function(L,$,vt){return z.H.useActionState(L,$,vt)},le.useCallback=function(L,$){return z.H.useCallback(L,$)},le.useContext=function(L){return z.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,$){return z.H.useDeferredValue(L,$)},le.useEffect=function(L,$,vt){var St=z.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(L,$)},le.useId=function(){return z.H.useId()},le.useImperativeHandle=function(L,$,vt){return z.H.useImperativeHandle(L,$,vt)},le.useInsertionEffect=function(L,$){return z.H.useInsertionEffect(L,$)},le.useLayoutEffect=function(L,$){return z.H.useLayoutEffect(L,$)},le.useMemo=function(L,$){return z.H.useMemo(L,$)},le.useOptimistic=function(L,$){return z.H.useOptimistic(L,$)},le.useReducer=function(L,$,vt){return z.H.useReducer(L,$,vt)},le.useRef=function(L){return z.H.useRef(L)},le.useState=function(L){return z.H.useState(L)},le.useSyncExternalStore=function(L,$,vt){return z.H.useSyncExternalStore(L,$,vt)},le.useTransition=function(){return z.H.useTransition()},le.version="19.1.1",le}var mg;function bd(){return mg||(mg=1,Jf.exports=hS()),Jf.exports}var yi=bd();const br=cS(yi);var $f={exports:{}},No={},th={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function dS(){return gg||(gg=1,function(s){function t(B,K){var Y=B.length;B.push(K);t:for(;0<Y;){var xt=Y-1>>>1,L=B[xt];if(0<l(L,K))B[xt]=K,B[Y]=L,Y=xt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Y=B.pop();if(Y!==K){B[0]=Y;t:for(var xt=0,L=B.length,$=L>>>1;xt<$;){var vt=2*(xt+1)-1,St=B[vt],wt=vt+1,nt=B[wt];if(0>l(St,Y))wt<L&&0>l(nt,St)?(B[xt]=nt,B[wt]=Y,xt=wt):(B[xt]=St,B[vt]=Y,xt=vt);else if(wt<L&&0>l(nt,Y))B[xt]=nt,B[wt]=Y,xt=wt;else break t}}return K}function l(B,K){var Y=B.sortIndex-K.sortIndex;return Y!==0?Y:B.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,x=3,M=!1,b=!1,R=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=B)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function z(B){if(R=!1,w(B),!b)if(i(m)!==null)b=!0,H||(H=!0,st());else{var K=i(p);K!==null&&ht(z,K.startTime-B)}}var H=!1,F=-1,k=5,C=-1;function D(){return y?!0:!(s.unstable_now()-C<k)}function I(){if(y=!1,H){var B=s.unstable_now();C=B;var K=!0;try{t:{b=!1,R&&(R=!1,O(F),F=-1),M=!0;var Y=x;try{e:{for(w(B),_=i(m);_!==null&&!(_.expirationTime>B&&D());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,x=_.priorityLevel;var L=xt(_.expirationTime<=B);if(B=s.unstable_now(),typeof L=="function"){_.callback=L,w(B),K=!0;break e}_===i(m)&&r(m),w(B)}else r(m);_=i(m)}if(_!==null)K=!0;else{var $=i(p);$!==null&&ht(z,$.startTime-B),K=!1}}break t}finally{_=null,x=Y,M=!1}K=void 0}}finally{K?st():H=!1}}}var st;if(typeof U=="function")st=function(){U(I)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ft=lt.port2;lt.port1.onmessage=I,st=function(){ft.postMessage(null)}}else st=function(){v(I,0)};function ht(B,K){F=v(function(){B(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return B()}finally{x=Y}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=x;x=B;try{return K()}finally{x=Y}},s.unstable_scheduleCallback=function(B,K,Y){var xt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,B){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,B={id:g++,callback:K,priorityLevel:B,startTime:Y,expirationTime:L,sortIndex:-1},Y>xt?(B.sortIndex=Y,t(p,B),i(m)===null&&B===i(p)&&(R?(O(F),F=-1):R=!0,ht(z,Y-xt))):(B.sortIndex=L,t(m,B),b||M||(b=!0,H||(H=!0,st()))),B},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(B){var K=x;return function(){var Y=x;x=K;try{return B.apply(this,arguments)}finally{x=Y}}}}(eh)),eh}var _g;function pS(){return _g||(_g=1,th.exports=dS()),th.exports}var nh={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function mS(){if(vg)return Cn;vg=1;var s=bd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Cn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.1.1",Cn}var xg;function gS(){if(xg)return nh.exports;xg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),nh.exports=mS(),nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function _S(){if(Sg)return No;Sg=1;var s=pS(),t=bd(),i=gS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,o=f;break}if(T===o){S=!0,o=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=u;break}if(T===o){S=!0,o=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var ht=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xt=[],L=-1;function $(e){return{current:e}}function vt(e){0>L||(e.current=xt[L],xt[L]=null,L--)}function St(e,n){L++,xt[L]=e.current,e.current=n}var wt=$(null),nt=$(null),dt=$(null),yt=$(null);function Pt(e,n){switch(St(dt,n),St(nt,e),St(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?H0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=H0(n),e=G0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(wt),St(wt,e)}function Yt(){vt(wt),vt(nt),vt(dt)}function ie(e){e.memoizedState!==null&&St(yt,e);var n=wt.current,a=G0(n,e.type);n!==a&&(St(nt,e),St(wt,a))}function He(e){nt.current===e&&(vt(wt),vt(nt)),yt.current===e&&(vt(yt),Ro._currentValue=Y)}var me=Object.prototype.hasOwnProperty,G=s.unstable_scheduleCallback,Re=s.unstable_cancelCallback,Qt=s.unstable_shouldYield,Se=s.unstable_requestPaint,Ft=s.unstable_now,Ge=s.unstable_getCurrentPriorityLevel,Ht=s.unstable_ImmediatePriority,se=s.unstable_UserBlockingPriority,Ye=s.unstable_NormalPriority,je=s.unstable_LowPriority,N=s.unstable_IdlePriority,E=s.log,tt=s.unstable_setDisableYieldValue,ct=null,_t=null;function ot(e){if(typeof E=="function"&&tt(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(ct,e)}catch{}}var zt=Math.clz32?Math.clz32:qt,At=Math.log,Xt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(At(e)/Xt|0)|0}var Mt=256,Nt=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Zt(o):(S&=T,S!==0?u=Zt(S):a||(a=T&~e,a!==0&&(u=Zt(a))))):(T=o&~f,T!==0?u=Zt(T):S!==0?u=Zt(S):a||(a=o&~e,a!==0&&(u=Zt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function bt(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function Rt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-zt(a),mt=1<<ut;T[ut]=0,P[ut]=-1;var et=J[ut];if(et!==null)for(J[ut]=null,ut=0;ut<et.length;ut++){var it=et[ut];it!==null&&(it.lane&=-536870913)}a&=~mt}o!==0&&gt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function gt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Vt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ye(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:sg(e.type))}function di(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var ln=Math.random().toString(36).slice(2),cn="__reactFiber$"+ln,Ke="__reactProps$"+ln,wi="__reactContainer$"+ln,Cr="__reactEvents$"+ln,Zo="__reactListeners$"+ln,Dr="__reactHandles$"+ln,Is="__reactResources$"+ln,Ci="__reactMarker$"+ln;function Ur(e){delete e[cn],delete e[Ke],delete e[Cr],delete e[Zo],delete e[Dr]}function Hi(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[wi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=W0(e);e!==null;){if(a=e[cn])return a;e=W0(e)}return n}e=a,a=e.parentNode}return null}function pa(e){if(e=e[cn]||e[wi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ka(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ma(e){var n=e[Is];return n||(n=e[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[Ci]=!0}var Ko=new Set,Qo={};function A(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(Qo[e]=n,e=0;e<n.length;e++)Ko.add(n[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},j={};function Tt(e){return me.call(j,e)?!0:me.call(rt,e)?!1:at.test(e)?j[e]=!0:(rt[e]=!0,!1)}function Ut(e,n,a){if(Tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function It(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Jt,te;function Wt(e){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+te}var ue=!1;function Me(e,n){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(it){var et=it}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(it){et=it}e.call(mt.prototype)}}else{try{throw Error()}catch(it){et=it}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var P=S.split(`
`),J=T.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===J.length)for(o=P.length-1,u=J.length-1;1<=o&&0<=u&&P[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==J[u]){var ut=`
`+P[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function We(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Me(e.type,!1);case 11:return Me(e.type.render,!1);case 1:return Me(e.type,!0);case 31:return Wt("Activity");default:return""}}function Le(e){try{var n="";do n+=We(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xe(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=Xe(e))}function An(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function pn(e){return e.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ie(e,n,a,o,u,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,S,fe(n)):a!=null?Rn(e,S,fe(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+fe(T):e.removeAttribute("name")}function Nn(e,n,a,o,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Rn(e,n,a){n==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qe(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function xn(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function Lr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ht(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function In(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var sv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||sv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Gd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Hd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Hd(e,f,n[f])}function Zc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ov=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(e){return lv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Kc=null;function Qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nr=null,Or=null;function Vd(e){var n=pa(e);if(n&&(e=n.stateNode)){var a=e[Ke]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ie(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Ke]||null;if(!u)throw Error(r(90));Ie(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&An(o)}break t;case"textarea":xn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(e,!!a.multiple,n,!1)}}}var Jc=!1;function kd(e,n,a){if(Jc)return e(n,a);Jc=!0;try{var o=e(n);return o}finally{if(Jc=!1,(Nr!==null||Or!==null)&&(Bl(),Nr&&(n=Nr,e=Or,Or=Nr=null,Vd(n),e)))for(n=0;n<e.length;n++)Vd(e[n])}}function Fs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Ke]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(Gi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{$c=!1}var ga=null,tu=null,$o=null;function Xd(){if($o)return $o;var e,n=tu,a=n.length,o,u="value"in ga?ga.value:ga.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return $o=u.slice(e,1<o?1-o:void 0)}function tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Wd(){return!1}function Fn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:Wd,this.isPropagationStopped=Wd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Fn(Qa),Gs=g({},Qa,{view:0,detail:0}),cv=Fn(Gs),eu,nu,Vs,il=g({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(eu=e.screenX-Vs.screenX,nu=e.screenY-Vs.screenY):nu=eu=0,Vs=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:nu}}),qd=Fn(il),uv=g({},il,{dataTransfer:0}),fv=Fn(uv),hv=g({},Gs,{relatedTarget:0}),iu=Fn(hv),dv=g({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),pv=Fn(dv),mv=g({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gv=Fn(mv),_v=g({},Qa,{data:0}),Yd=Fn(_v),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sv[e])?!!n[e]:!1}function au(){return yv}var Mv=g({},Gs,{key:function(e){if(e.key){var n=vv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ev=Fn(Mv),Tv=g({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Fn(Tv),bv=g({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),Av=Fn(bv),Rv=g({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),wv=Fn(Rv),Cv=g({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dv=Fn(Cv),Uv=g({},Qa,{newState:0,oldState:0}),Lv=Fn(Uv),Nv=[9,13,27,32],ru=Gi&&"CompositionEvent"in window,ks=null;Gi&&"documentMode"in document&&(ks=document.documentMode);var Ov=Gi&&"TextEvent"in window&&!ks,Zd=Gi&&(!ru||ks&&8<ks&&11>=ks),Kd=" ",Qd=!1;function Jd(e,n){switch(e){case"keyup":return Nv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function Pv(e,n){switch(e){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(Qd=!0,Kd);case"textInput":return e=n.data,e===Kd&&Qd?null:e;default:return null}}function zv(e,n){if(Pr)return e==="compositionend"||!ru&&Jd(e,n)?(e=Xd(),$o=tu=ga=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zd&&n.locale!=="ko"?null:n.data;default:return null}}var Bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bv[e.type]:n==="textarea"}function ep(e,n,a,o){Nr?Or?Or.push(o):Or=[o]:Nr=o,n=kl(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Xs=null,Ws=null;function Iv(e){P0(e,0)}function al(e){var n=Ka(e);if(An(n))return e}function np(e,n){if(e==="change")return n}var ip=!1;if(Gi){var su;if(Gi){var ou="oninput"in document;if(!ou){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),ou=typeof ap.oninput=="function"}su=ou}else su=!1;ip=su&&(!document.documentMode||9<document.documentMode)}function rp(){Xs&&(Xs.detachEvent("onpropertychange",sp),Ws=Xs=null)}function sp(e){if(e.propertyName==="value"&&al(Ws)){var n=[];ep(n,Ws,e,Qc(e)),kd(Iv,n)}}function Fv(e,n,a){e==="focusin"?(rp(),Xs=n,Ws=a,Xs.attachEvent("onpropertychange",sp)):e==="focusout"&&rp()}function Hv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Ws)}function Gv(e,n){if(e==="click")return al(n)}function Vv(e,n){if(e==="input"||e==="change")return al(n)}function kv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:kv;function qs(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!me.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lp(e,n){var a=op(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=op(a)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pi(e.document)}return n}function lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Xv=Gi&&"documentMode"in document&&11>=document.documentMode,zr=null,cu=null,Ys=null,uu=!1;function fp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uu||zr==null||zr!==pi(o)||(o=zr,"selectionStart"in o&&lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ys&&qs(Ys,o)||(Ys=o,o=kl(cu,"onSelect"),0<o.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=zr)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Br={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},fu={},hp={};Gi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function $a(e){if(fu[e])return fu[e];if(!Br[e])return e;var n=Br[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return fu[e]=n[a];return e}var dp=$a("animationend"),pp=$a("animationiteration"),mp=$a("animationstart"),Wv=$a("transitionrun"),qv=$a("transitionstart"),Yv=$a("transitioncancel"),gp=$a("transitionend"),_p=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function mi(e,n){_p.set(e,n),A(n,[e])}var vp=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Le(n)},vp.set(e,n),n)}return{value:e,source:n,stack:Le(n)}}var ii=[],Ir=0,du=0;function rl(){for(var e=Ir,n=du=Ir=0;n<e;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&xp(a,u,f)}}function sl(e,n,a,o){ii[Ir++]=e,ii[Ir++]=n,ii[Ir++]=a,ii[Ir++]=o,du|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pu(e,n,a,o){return sl(e,n,a,o),ol(e)}function Fr(e,n){return sl(e,null,null,n),ol(e)}function xp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<xo)throw xo=0,yf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Hr={};function jv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new jv(e,n,a,o)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")mu(e)&&(S=1);else if(typeof e=="string")S=Kx(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Yn(31,a,n,u),e.elementType=C,e.lanes=f,e;case b:return tr(a.children,u,f,n);case R:S=8,u|=24;break;case y:return e=Yn(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case z:return e=Yn(13,a,n,u),e.elementType=z,e.lanes=f,e;case H:return e=Yn(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case U:S=10;break t;case O:S=9;break t;case w:S=11;break t;case F:S=14;break t;case k:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Yn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function tr(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function gu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function _u(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Gr=[],Vr=0,cl=null,ul=0,ai=[],ri=0,er=null,ki=1,Xi="";function nr(e,n){Gr[Vr++]=ul,Gr[Vr++]=cl,cl=e,ul=n}function yp(e,n,a){ai[ri++]=ki,ai[ri++]=Xi,ai[ri++]=er,er=e;var o=ki;e=Xi;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,ki=1<<32-zt(n)+u|a<<u|o,Xi=f+e}else ki=1<<f|a<<u|o,Xi=e}function vu(e){e.return!==null&&(nr(e,1),yp(e,1,0))}function xu(e){for(;e===cl;)cl=Gr[--Vr],Gr[Vr]=null,ul=Gr[--Vr],Gr[Vr]=null;for(;e===er;)er=ai[--ri],ai[ri]=null,Xi=ai[--ri],ai[ri]=null,ki=ai[--ri],ai[ri]=null}var On=null,Je=null,Ae=!1,ir=null,Di=!1,Su=Error(r(519));function ar(e){var n=Error(r(418,""));throw Ks(ni(n,e)),Su}function Mp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[Ke]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)ve(yo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ge(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Lr(n,o.value,o.defaultValue,o.children),ge(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||F0(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Xl),n=!0):n=!1,n||ar(e)}function Ep(e){for(On=e.return;On;)switch(On.tag){case 5:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:On=On.return}}function js(e){if(e!==On)return!1;if(!Ae)return Ep(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bf(e.type,e.memoizedProps)),a=!a),a&&Je&&ar(e),Ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Je=_i(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Je=null}}else n===27?(n=Je,La(e.type)?(e=Gf,Gf=null,Je=e):Je=n):Je=On?_i(e.stateNode.nextSibling):null;return!0}function Zs(){Je=On=null,Ae=!1}function Tp(){var e=ir;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),ir=null),e}function Ks(e){ir===null?ir=[e]:ir.push(e)}var yu=$(null),rr=null,Wi=null;function _a(e,n,a){St(yu,n._currentValue),n._currentValue=a}function qi(e){e._currentValue=yu.current,vt(yu)}function Mu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Eu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Mu(f.return,a,e),o||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Mu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Qs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;qn(u.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(u===yt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}u=u.return}e!==null&&Eu(n,e,a,o),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){rr=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return bp(rr,e)}function hl(e,n){return rr===null&&sr(e),bp(e,n)}function bp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(r(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var Zv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Kv=s.unstable_scheduleCallback,Qv=s.unstable_NormalPriority,un={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new Zv,data:new Map,refCount:0}}function Js(e){e.refCount--,e.refCount===0&&Kv(Qv,function(){e.controller.abort()})}var $s=null,bu=0,kr=0,Xr=null;function Jv(e,n){if($s===null){var a=$s=[];bu=0,kr=wf(),Xr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return bu++,n.then(Ap,Ap),n}function Ap(){if(--bu===0&&$s!==null){Xr!==null&&(Xr.status="fulfilled");var e=$s;$s=null,kr=0,Xr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function $v(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Rp=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jv(e,n),Rp!==null&&Rp(e,n)};var or=$(null);function Au(){var e=or.current;return e!==null?e:Ve.pooledCache}function dl(e,n){n===null?St(or,or.current):St(or,n.pool)}function wp(){var e=Au();return e===null?null:{parent:un._currentValue,pool:e}}var to=Error(r(460)),Cp=Error(r(474)),pl=Error(r(542)),Ru={then:function(){}};function Dp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ml(){}function Up(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ml,ml),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e;default:if(typeof n.status=="string")n.then(ml,ml);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e}throw eo=n,to}}var eo=null;function Lp(){if(eo===null)throw Error(r(459));var e=eo;return eo=null,e}function Np(e){if(e===to||e===pl)throw Error(r(483))}var va=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ol(e),xp(e,null,a),n}return sl(e,o,n,a),ol(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vt(e,a)}}function Du(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Uu=!1;function io(){if(Uu){var e=Xr;if(e!==null)throw e}}function ao(e,n,a,o){Uu=!1;var u=e.updateQueue;va=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,J=P.next;P.next=null,S===null?f=J:S.next=J,S=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==S&&(T===null?ut.firstBaseUpdate=J:T.next=J,ut.lastBaseUpdate=P))}if(f!==null){var mt=u.baseState;S=0,ut=J=P=null,T=f;do{var et=T.lane&-536870913,it=et!==T.lane;if(it?(xe&et)===et:(o&et)===et){et!==0&&et===kr&&(Uu=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=e,$t=T;et=n;var Pe=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){mt=ne.call(Pe,mt,et);break t}mt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,et=typeof ne=="function"?ne.call(Pe,mt,et):ne,et==null)break t;mt=g({},mt,et);break t;case 2:va=!0}}et=T.callback,et!==null&&(e.flags|=64,it&&(e.flags|=8192),it=u.callbacks,it===null?u.callbacks=[et]:it.push(et))}else it={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(J=ut=it,P=mt):ut=ut.next=it,S|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;it=T,T=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ut===null&&(P=mt),u.baseState=P,u.firstBaseUpdate=J,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),wa|=S,e.lanes=S,e.memoizedState=mt}}function Op(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Op(a[e],n)}var Wr=$(null),gl=$(0);function zp(e,n){e=$i,St(gl,e),St(Wr,n),$i=e|n.baseLanes}function Lu(){St(gl,$i),St(Wr,Wr.current)}function Nu(){$i=gl.current,vt(Wr),vt(gl)}var ya=0,de=null,Ne=null,an=null,_l=!1,qr=!1,lr=!1,vl=0,ro=0,Yr=null,tx=0;function tn(){throw Error(r(321))}function Ou(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Pu(e,n,a,o,u,f){return ya=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?xm:Sm,lr=!1,f=a(o,u),lr=!1,qr&&(f=Ip(n,a,o,u)),Bp(e),f}function Bp(e){B.H=Tl;var n=Ne!==null&&Ne.next!==null;if(ya=0,an=Ne=de=null,_l=!1,ro=0,Yr=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&fl(e)&&(mn=!0))}function Ip(e,n,a,o){de=e;var u=0;do{if(qr&&(Yr=null),ro=0,qr=!1,25<=u)throw Error(r(301));if(u+=1,an=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=ox,f=n(a,o)}while(qr);return f}function ex(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(de.flags|=1024),n}function zu(){var e=vl!==0;return vl=0,e}function Bu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Iu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}ya=0,an=Ne=de=null,qr=!1,ro=vl=0,Yr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?de.memoizedState=an=e:an=an.next=e,an}function rn(){if(Ne===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=an===null?de.memoizedState:an.next;if(n!==null)an=n,Ne=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},an===null?de.memoizedState=an=e:an=an.next=e}return an}function Fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ro;return ro+=1,Yr===null&&(Yr=[]),e=Up(Yr,e,n),n=de,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?xm:Sm),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===U)return wn(e)}throw Error(r(438,String(e)))}function Hu(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Yi(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=rn();return Gu(n,Ne,e)}function Gu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=S=null,P=null,J=n,ut=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(xe&mt)===mt:(ya&mt)===mt){var et=J.revertLane;if(et===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===kr&&(ut=!0);else if((ya&et)===et){J=J.next,et===kr&&(ut=!0);continue}else mt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=mt,S=f):P=P.next=mt,de.lanes|=et,wa|=et;mt=J.action,lr&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else et={lane:mt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=et,S=f):P=P.next=et,de.lanes|=mt,wa|=mt;J=J.next}while(J!==null&&J!==n);if(P===null?S=f:P.next=T,!qn(f,e.memoizedState)&&(mn=!0,ut&&(a=Xr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=P,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Vu(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);qn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Fp(e,n,a){var o=de,u=rn(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!qn((Ne||u).memoizedState,a);S&&(u.memoizedState=a,mn=!0),u=u.queue;var T=Vp.bind(null,o,u,e);if(oo(2048,8,T,[e]),u.getSnapshot!==n||S||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,jr(9,yl(),Gp.bind(null,o,u,a,n),null),Ve===null)throw Error(r(349));f||(ya&124)!==0||Hp(o,n,a)}return a}function Hp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Fu(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Gp(e,n,a,o){n.value=a,n.getSnapshot=o,kp(n)&&Xp(e)}function Vp(e,n,a){return a(function(){kp(n)&&Xp(e)})}function kp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Xp(e){var n=Fr(e,2);n!==null&&Jn(n,e,2)}function ku(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),lr){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},n}function Wp(e,n,a,o){return e.baseState=a,Gu(e,Ne,typeof o=="function"?o:Yi)}function nx(e,n,a,o,u){if(El(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function qp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var T=a(u,o),P=B.S;P!==null&&P(S,T),Yp(e,n,T)}catch(J){Xu(e,n,J)}finally{B.T=f}}else try{f=a(u,o),Yp(e,n,f)}catch(J){Xu(e,n,J)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){jp(e,n,o)},function(o){return Xu(e,n,o)}):jp(e,n,a)}function jp(e,n,a){n.status="fulfilled",n.value=a,Zp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,qp(e,a)))}function Xu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Zp(n),n=n.next;while(n!==o)}e.action=null}function Zp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Kp(e,n){return n}function Qp(e,n){if(Ae){var a=Ve.formState;if(a!==null){t:{var o=de;if(Ae){if(Je){e:{for(var u=Je,f=Di;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Je=_i(u.nextSibling),o=u.data==="F!";break t}}ar(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:n},a.queue=o,a=gm.bind(null,de,o),o.dispatch=a,o=ku(!1),f=Zu.bind(null,de,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=nx.bind(null,de,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Jp(e){var n=rn();return $p(n,Ne,e)}function $p(e,n,a){if(n=Gu(e,n,Kp)[0],e=Sl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=so(n)}catch(S){throw S===to?pl:S}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,jr(9,yl(),ix.bind(null,u,a),null)),[o,f,e]}function ix(e,n){e.action=n}function tm(e){var n=rn(),a=Ne;if(a!==null)return $p(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function jr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=Fu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function yl(){return{destroy:void 0,resource:void 0}}function em(){return rn().memoizedState}function Ml(e,n,a,o){var u=Hn();o=o===void 0?null:o,de.flags|=e,u.memoizedState=jr(1|n,yl(),a,o)}function oo(e,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ne!==null&&o!==null&&Ou(o,Ne.memoizedState.deps)?u.memoizedState=jr(n,f,a,o):(de.flags|=e,u.memoizedState=jr(1|n,f,a,o))}function nm(e,n){Ml(8390656,8,e,n)}function im(e,n){oo(2048,8,e,n)}function am(e,n){return oo(4,2,e,n)}function rm(e,n){return oo(4,4,e,n)}function sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function om(e,n,a){a=a!=null?a.concat([e]):null,oo(4,4,sm.bind(null,n,e),a)}function Wu(){}function lm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ou(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function cm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ou(n,o[1]))return o[0];if(o=e(),lr){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,n],o}function qu(e,n,a){return a===void 0||(ya&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=h0(),de.lanes|=e,wa|=e,a)}function um(e,n,a,o){return qn(a,n)?a:Wr.current!==null?(e=qu(e,a,o),qn(e,n)||(mn=!0),e):(ya&42)===0?(mn=!0,e.memoizedState=a):(e=h0(),de.lanes|=e,wa|=e,n)}function fm(e,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var S=B.T,T={};B.T=T,Zu(e,!1,n,a);try{var P=u(),J=B.S;if(J!==null&&J(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=$v(P,o);lo(e,n,ut,Qn(e))}else lo(e,n,o,Qn(e))}catch(mt){lo(e,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{K.p=f,B.T=S}}function ax(){}function Yu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=hm(e).queue;fm(e,u,n,Y,a===null?ax:function(){return dm(e),a(o)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function dm(e){var n=hm(e).next.queue;lo(e,n,{},Qn())}function ju(){return wn(Ro)}function pm(){return rn().memoizedState}function mm(){return rn().memoizedState}function rx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=xa(a);var o=Sa(n,e,a);o!==null&&(Jn(o,n,a),no(o,n,a)),n={cache:Tu()},e.payload=n;return}n=n.return}}function sx(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},El(e)?_m(n,a):(a=pu(e,n,a,o),a!==null&&(Jn(a,e,o),vm(a,n,o)))}function gm(e,n,a){var o=Qn();lo(e,n,a,o)}function lo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(e))_m(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,qn(T,S))return sl(e,n,u,0),Ve===null&&rl(),!1}catch{}finally{}if(a=pu(e,n,u,o),a!==null)return Jn(a,e,o),vm(a,n,o),!0}return!1}function Zu(e,n,a,o){if(o={lane:2,revertLane:wf(),action:o,hasEagerState:!1,eagerState:null,next:null},El(e)){if(n)throw Error(r(479))}else n=pu(e,a,o,2),n!==null&&Jn(n,e,2)}function El(e){var n=e.alternate;return e===de||n!==null&&n===de}function _m(e,n){qr=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vt(e,a)}}var Tl={readContext:wn,use:xl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},xm={readContext:wn,use:xl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(lr){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(lr){ot(!0);try{a(n)}finally{ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=sx.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=ku(e);var n=e.queue,a=gm.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(e,n){var a=Hn();return qu(a,e,n)},useTransition:function(){var e=ku(!1);return e=fm.bind(null,de,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,u=Hn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(xe&124)!==0||Hp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,nm(Vp.bind(null,o,f,e),[e]),o.flags|=2048,jr(9,yl(),Gp.bind(null,o,f,a,n),null),a},useId:function(){var e=Hn(),n=Ve.identifierPrefix;if(Ae){var a=Xi,o=ki;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=tx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:ju,useFormState:Qp,useActionState:Qp,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zu.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:Hu,useCacheRefresh:function(){return Hn().memoizedState=rx.bind(null,de)}},Sm={readContext:wn,use:xl,useCallback:lm,useContext:wn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:cm,useReducer:Sl,useRef:em,useState:function(){return Sl(Yi)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=rn();return um(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Sl(Yi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:ju,useFormState:Jp,useActionState:Jp,useOptimistic:function(e,n){var a=rn();return Wp(a,Ne,e,n)},useMemoCache:Hu,useCacheRefresh:mm},ox={readContext:wn,use:xl,useCallback:lm,useContext:wn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:cm,useReducer:Vu,useRef:em,useState:function(){return Vu(Yi)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=rn();return Ne===null?qu(a,e,n):um(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Vu(Yi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:ju,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=rn();return Ne!==null?Wp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:mm},Zr=null,co=0;function bl(e){var n=co;return co+=1,Zr===null&&(Zr=[]),Up(Zr,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ym(e){var n=e._init;return n(e._payload)}function Mm(e){function n(q,V){if(e){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function o(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function u(q,V){return q=Vi(q,V),q.index=0,q.sibling=null,q}function f(q,V,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=67108866,V):Q):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function S(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,V,Q,pt){return V===null||V.tag!==6?(V=gu(Q,q.mode,pt),V.return=q,V):(V=u(V,Q),V.return=q,V)}function P(q,V,Q,pt){var Gt=Q.type;return Gt===b?ut(q,V,Q.props.children,pt,Q.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===k&&ym(Gt)===V.type)?(V=u(V,Q.props),uo(V,Q),V.return=q,V):(V=ll(Q.type,Q.key,Q.props,null,q.mode,pt),uo(V,Q),V.return=q,V)}function J(q,V,Q,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=_u(Q,q.mode,pt),V.return=q,V):(V=u(V,Q.children||[]),V.return=q,V)}function ut(q,V,Q,pt,Gt){return V===null||V.tag!==7?(V=tr(Q,q.mode,pt,Gt),V.return=q,V):(V=u(V,Q),V.return=q,V)}function mt(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=gu(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return Q=ll(V.type,V.key,V.props,null,q.mode,Q),uo(Q,V),Q.return=q,Q;case M:return V=_u(V,q.mode,Q),V.return=q,V;case k:var pt=V._init;return V=pt(V._payload),mt(q,V,Q)}if(ht(V)||st(V))return V=tr(V,q.mode,Q,null),V.return=q,V;if(typeof V.then=="function")return mt(q,bl(V),Q);if(V.$$typeof===U)return mt(q,hl(q,V),Q);Al(q,V)}return null}function et(q,V,Q,pt){var Gt=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Gt!==null?null:T(q,V,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Gt?P(q,V,Q,pt):null;case M:return Q.key===Gt?J(q,V,Q,pt):null;case k:return Gt=Q._init,Q=Gt(Q._payload),et(q,V,Q,pt)}if(ht(Q)||st(Q))return Gt!==null?null:ut(q,V,Q,pt,null);if(typeof Q.then=="function")return et(q,V,bl(Q),pt);if(Q.$$typeof===U)return et(q,V,hl(q,Q),pt);Al(q,Q)}return null}function it(q,V,Q,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(Q)||null,T(V,q,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return q=q.get(pt.key===null?Q:pt.key)||null,P(V,q,pt,Gt);case M:return q=q.get(pt.key===null?Q:pt.key)||null,J(V,q,pt,Gt);case k:var pe=pt._init;return pt=pe(pt._payload),it(q,V,Q,pt,Gt)}if(ht(pt)||st(pt))return q=q.get(Q)||null,ut(V,q,pt,Gt,null);if(typeof pt.then=="function")return it(q,V,Q,bl(pt),Gt);if(pt.$$typeof===U)return it(q,V,Q,hl(V,pt),Gt);Al(V,pt)}return null}function ne(q,V,Q,pt){for(var Gt=null,pe=null,jt=V,ee=V=0,_n=null;jt!==null&&ee<Q.length;ee++){jt.index>ee?(_n=jt,jt=null):_n=jt.sibling;var Ee=et(q,jt,Q[ee],pt);if(Ee===null){jt===null&&(jt=_n);break}e&&jt&&Ee.alternate===null&&n(q,jt),V=f(Ee,V,ee),pe===null?Gt=Ee:pe.sibling=Ee,pe=Ee,jt=_n}if(ee===Q.length)return a(q,jt),Ae&&nr(q,ee),Gt;if(jt===null){for(;ee<Q.length;ee++)jt=mt(q,Q[ee],pt),jt!==null&&(V=f(jt,V,ee),pe===null?Gt=jt:pe.sibling=jt,pe=jt);return Ae&&nr(q,ee),Gt}for(jt=o(jt);ee<Q.length;ee++)_n=it(jt,q,ee,Q[ee],pt),_n!==null&&(e&&_n.alternate!==null&&jt.delete(_n.key===null?ee:_n.key),V=f(_n,V,ee),pe===null?Gt=_n:pe.sibling=_n,pe=_n);return e&&jt.forEach(function(Ba){return n(q,Ba)}),Ae&&nr(q,ee),Gt}function $t(q,V,Q,pt){if(Q==null)throw Error(r(151));for(var Gt=null,pe=null,jt=V,ee=V=0,_n=null,Ee=Q.next();jt!==null&&!Ee.done;ee++,Ee=Q.next()){jt.index>ee?(_n=jt,jt=null):_n=jt.sibling;var Ba=et(q,jt,Ee.value,pt);if(Ba===null){jt===null&&(jt=_n);break}e&&jt&&Ba.alternate===null&&n(q,jt),V=f(Ba,V,ee),pe===null?Gt=Ba:pe.sibling=Ba,pe=Ba,jt=_n}if(Ee.done)return a(q,jt),Ae&&nr(q,ee),Gt;if(jt===null){for(;!Ee.done;ee++,Ee=Q.next())Ee=mt(q,Ee.value,pt),Ee!==null&&(V=f(Ee,V,ee),pe===null?Gt=Ee:pe.sibling=Ee,pe=Ee);return Ae&&nr(q,ee),Gt}for(jt=o(jt);!Ee.done;ee++,Ee=Q.next())Ee=it(jt,q,ee,Ee.value,pt),Ee!==null&&(e&&Ee.alternate!==null&&jt.delete(Ee.key===null?ee:Ee.key),V=f(Ee,V,ee),pe===null?Gt=Ee:pe.sibling=Ee,pe=Ee);return e&&jt.forEach(function(lS){return n(q,lS)}),Ae&&nr(q,ee),Gt}function Pe(q,V,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Gt=Q.key;V!==null;){if(V.key===Gt){if(Gt=Q.type,Gt===b){if(V.tag===7){a(q,V.sibling),pt=u(V,Q.props.children),pt.return=q,q=pt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===k&&ym(Gt)===V.type){a(q,V.sibling),pt=u(V,Q.props),uo(pt,Q),pt.return=q,q=pt;break t}a(q,V);break}else n(q,V);V=V.sibling}Q.type===b?(pt=tr(Q.props.children,q.mode,pt,Q.key),pt.return=q,q=pt):(pt=ll(Q.type,Q.key,Q.props,null,q.mode,pt),uo(pt,Q),pt.return=q,q=pt)}return S(q);case M:t:{for(Gt=Q.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(q,V.sibling),pt=u(V,Q.children||[]),pt.return=q,q=pt;break t}else{a(q,V);break}else n(q,V);V=V.sibling}pt=_u(Q,q.mode,pt),pt.return=q,q=pt}return S(q);case k:return Gt=Q._init,Q=Gt(Q._payload),Pe(q,V,Q,pt)}if(ht(Q))return ne(q,V,Q,pt);if(st(Q)){if(Gt=st(Q),typeof Gt!="function")throw Error(r(150));return Q=Gt.call(Q),$t(q,V,Q,pt)}if(typeof Q.then=="function")return Pe(q,V,bl(Q),pt);if(Q.$$typeof===U)return Pe(q,V,hl(q,Q),pt);Al(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(q,V.sibling),pt=u(V,Q),pt.return=q,q=pt):(a(q,V),pt=gu(Q,q.mode,pt),pt.return=q,q=pt),S(q)):a(q,V)}return function(q,V,Q,pt){try{co=0;var Gt=Pe(q,V,Q,pt);return Zr=null,Gt}catch(jt){if(jt===to||jt===pl)throw jt;var pe=Yn(29,jt,null,q.mode);return pe.lanes=pt,pe.return=q,pe}finally{}}}var Kr=Mm(!0),Em=Mm(!1),si=$(null),Ui=null;function Ma(e){var n=e.alternate;St(fn,fn.current&1),St(si,e),Ui===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(Ui=e)}function Tm(e){if(e.tag===22){if(St(fn,fn.current),St(si,e),Ui===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ui=e)}}else Ea()}function Ea(){St(fn,fn.current),St(si,si.current)}function ji(e){vt(si),Ui===e&&(Ui=null),vt(fn)}var fn=$(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Hf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Ku(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=xa(o);u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(Jn(n,e,o),no(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(Jn(n,e,o),no(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=Sa(e,o,a),n!==null&&(Jn(n,e,a),no(n,e,a))}};function bm(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!qs(a,o)||!qs(u,f):!0}function Am(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Qu.enqueueReplaceState(n,n.state,null)}function cr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Rm(e){wl(e)}function wm(e){console.error(e)}function Cm(e){wl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Dm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ju(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function Um(e){return e=xa(e),e.tag=3,e}function Lm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Dm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Dm(n,a,o),typeof u!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function lx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ui===null?Ef():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ru?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),bf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ru?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),bf(e,o,u)),!1}throw Error(r(435,a.tag))}return bf(e,o,u),Ef(),!1}if(Ae)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Su&&(e=Error(r(422),{cause:o}),Ks(ni(e,a)))):(o!==Su&&(n=Error(r(423),{cause:o}),Ks(ni(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ni(o,a),u=Ju(e.stateNode,o,u),Du(e,u),$e!==4&&($e=2)),!1;var f=Error(r(520),{cause:o});if(f=ni(f,a),vo===null?vo=[f]:vo.push(f),$e!==4&&($e=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ju(a.stateNode,o,e),Du(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Um(u),Lm(u,e,a,o),Du(a,u),!1}a=a.return}while(a!==null);return!1}var Nm=Error(r(461)),mn=!1;function Sn(e,n,a,o){n.child=e===null?Em(n,null,a,o):Kr(n,e.child,a,o)}function Om(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return sr(n),o=Pu(e,n,a,S,f,u),T=zu(),e!==null&&!mn?(Bu(e,n,u),Zi(e,n,u)):(Ae&&T&&vu(n),n.flags|=1,Sn(e,n,o,u),n.child)}function Pm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!mu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,zm(e,n,f,o,u)):(e=ll(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!of(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:qs,a(S,o)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=Vi(f,o),e.ref=n.ref,e.return=n,n.child=e}function zm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(qs(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,of(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return $u(e,n,a,o,u)}function Bm(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Im(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dl(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Lu(),Tm(n);else return n.lanes=n.childLanes=536870912,Im(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(dl(n,f.cachePool),zp(n,f),Ea(),n.memoizedState=null):(e!==null&&dl(n,null),Lu(),Ea());return Sn(e,n,u,a),n.child}function Im(e,n,a,o){var u=Au();return u=u===null?null:{parent:un._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&dl(n,null),Lu(),Tm(n),e!==null&&Qs(e,n,o,!0),null}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function $u(e,n,a,o,u){return sr(n),a=Pu(e,n,a,o,void 0,u),o=zu(),e!==null&&!mn?(Bu(e,n,u),Zi(e,n,u)):(Ae&&o&&vu(n),n.flags|=1,Sn(e,n,a,u),n.child)}function Fm(e,n,a,o,u,f){return sr(n),n.updateQueue=null,a=Ip(n,o,a,u),Bp(e),o=zu(),e!==null&&!mn?(Bu(e,n,f),Zi(e,n,f)):(Ae&&o&&vu(n),n.flags|=1,Sn(e,n,a,f),n.child)}function Hm(e,n,a,o,u){if(sr(n),n.stateNode===null){var f=Hr,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):Hr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ku(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Qu.enqueueReplaceState(f,f.state,null),ao(n,o,f,u),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,P=cr(a,T);f.props=P;var J=f.context,ut=a.contextType;S=Hr,typeof ut=="object"&&ut!==null&&(S=wn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==S)&&Am(n,f,o,S),va=!1;var et=n.memoizedState;f.state=et,ao(n,o,f,u),io(),J=n.memoizedState,T||et!==J||va?(typeof mt=="function"&&(Ku(n,a,mt,o),J=n.memoizedState),(P=va||bm(n,a,P,o,et,J,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=S,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Cu(e,n),S=n.memoizedProps,ut=cr(a,S),f.props=ut,mt=n.pendingProps,et=f.context,J=a.contextType,P=Hr,typeof J=="object"&&J!==null&&(P=wn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||et!==P)&&Am(n,f,o,P),va=!1,et=n.memoizedState,f.state=et,ao(n,o,f,u),io();var it=n.memoizedState;S!==mt||et!==it||va||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof T=="function"&&(Ku(n,a,T,o),it=n.memoizedState),(ut=va||bm(n,a,ut,o,et,it,P)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,it,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,it,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=P,o=ut):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Dl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Kr(n,e.child,null,u),n.child=Kr(n,null,a,u)):Sn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Zi(e,n,u),e}function Gm(e,n,a,o){return Zs(),n.flags|=256,Sn(e,n,a,o),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:wp()}}function nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function Vm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Ma(n):Ea(),Ae){var T=Je,P;if(P=T){t:{for(P=T,T=Di;P.nodeType!==8;){if(!T){T=null;break t}if(P=_i(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:er!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},P=Yn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,On=n,Je=null,P=!0):P=!1}P||ar(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Hf(T)?n.lanes=32:n.lanes=536870912,null;ji(n)}return T=o.children,o=o.fallback,u?(Ea(),u=n.mode,T=Ul({mode:"hidden",children:T},u),o=tr(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=ef(a),u.childLanes=nf(e,S,a),n.memoizedState=tf,o):(Ma(n),af(n,T))}if(P=e.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=rf(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),u=o.fallback,T=n.mode,o=Ul({mode:"visible",children:o.children},T),u=tr(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Kr(n,e.child,null,a),o=n.child,o.memoizedState=ef(a),o.childLanes=nf(e,S,a),n.memoizedState=tf,n=u);else if(Ma(n),Hf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var J=S.dgst;S=J,o=Error(r(419)),o.stack="",o.digest=S,Ks({value:o,source:null,stack:null}),n=rf(e,n,a)}else if(mn||Qs(e,n,a,!1),S=(a&e.childLanes)!==0,mn||S){if(S=Ve,S!==null&&(o=a&-a,o=(o&42)!==0?1:ae(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Fr(e,o),Jn(S,e,o),Nm;T.data==="$?"||Ef(),n=rf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Je=_i(T.nextSibling),On=n,Ae=!0,ir=null,Di=!1,e!==null&&(ai[ri++]=ki,ai[ri++]=Xi,ai[ri++]=er,ki=e.id,Xi=e.overflow,er=n),n=af(n,o.children),n.flags|=4096);return n}return u?(Ea(),u=o.fallback,T=n.mode,P=e.child,J=P.sibling,o=Vi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,J!==null?u=Vi(J,u):(u=tr(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=ef(a):(P=T.cachePool,P!==null?(J=un._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=wp(),T={baseLanes:T.baseLanes|a,cachePool:P}),u.memoizedState=T,u.childLanes=nf(e,S,a),n.memoizedState=tf,o):(Ma(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function af(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function rf(e,n,a){return Kr(n,e.child,null,a),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function km(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Mu(e.return,n,a)}function sf(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function Xm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Sn(e,n,o.children,a),o=fn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&km(e,a,n);else if(e.tag===19)km(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(fn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),sf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Rl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}sf(n,!0,a,null,f);break;case"together":sf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function cx(e,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),_a(n,un,e.memoizedState.cache),Zs();break;case 27:case 5:ie(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vm(e,n,a):(Ma(n),e=Zi(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Xm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(fn,fn.current),o)break;return null;case 22:case 23:return n.lanes=0,Bm(e,n,a);case 24:_a(n,un,e.memoizedState.cache)}return Zi(e,n,a)}function Wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!of(e,a)&&(n.flags&128)===0)return mn=!1,cx(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ae&&(n.flags&1048576)!==0&&yp(n,ul,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")mu(o)?(e=cr(o,e),n.tag=1,n=Hm(null,n,o,e,a)):(n.tag=0,n=$u(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=Om(null,n,o,e,a);break t}else if(u===F){n.tag=14,n=Pm(null,n,o,e,a);break t}}throw n=ft(o)||o,Error(r(306,n,""))}}return n;case 0:return $u(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=cr(o,n.pendingProps),Hm(e,n,o,u,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Cu(e,n),ao(n,o,null,a);var S=n.memoizedState;if(o=S.cache,_a(n,un,o),o!==f.cache&&Eu(n,[un],a,!0),io(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Gm(e,n,o,a);break t}else if(o!==u){u=ni(Error(r(424)),n),Ks(u),n=Gm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=_i(e.firstChild),On=n,Ae=!0,ir=null,Di=!0,a=Em(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zs(),o===u){n=Zi(e,n,a);break t}Sn(e,n,o,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=Z0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Wl(dt.current).createElement(a),o[cn]=n,o[Ke]=e,Mn(o,a,e),nn(o),n.stateNode=o):n.memoizedState=Z0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&Ae&&(o=n.stateNode=q0(n.type,n.pendingProps,dt.current),On=n,Di=!0,u=Je,La(n.type)?(Gf=u,Je=_i(o.firstChild)):Je=u),Sn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=Je)&&(o=Bx(o,n.type,n.pendingProps,Di),o!==null?(n.stateNode=o,On=n,Je=_i(o.firstChild),Di=!1,u=!0):u=!1),u||ar(n)),ie(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Bf(u,f)?o=null:S!==null&&Bf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Pu(e,n,ex,null,null,a),Ro._currentValue=u),Dl(e,n),Sn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Je)&&(a=Ix(a,n.pendingProps,Di),a!==null?(n.stateNode=a,On=n,Je=null,e=!0):e=!1),e||ar(n)),null;case 13:return Vm(e,n,a);case 4:return Pt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Kr(n,null,o,a):Sn(e,n,o,a),n.child;case 11:return Om(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),Sn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,sr(n),u=wn(u),o=o(u),n.flags|=1,Sn(e,n,o,a),n.child;case 14:return Pm(e,n,n.type,n.pendingProps,a);case 15:return zm(e,n,n.type,n.pendingProps,a);case 19:return Xm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ul(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Vi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Bm(e,n,a);case 24:return sr(n),o=wn(un),e===null?(u=Au(),u===null&&(u=Ve,f=Tu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},wu(n),_a(n,un,u)):((e.lanes&a)!==0&&(Cu(e,n),ao(n,null,null,a),io()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,un,o)):(o=f.cache,_a(n,un,o),o!==u.cache&&Eu(n,[un],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ki(e){e.flags|=4}function qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tg(n)){if(n=si.current,n!==null&&((xe&4194048)===xe?Ui!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==Ui))throw eo=Ru,Cp;e.flags|=8192}}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bt():536870912,e.lanes|=n,ts|=n)}function fo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ux(e,n,a){var o=n.pendingProps;switch(xu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(un),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(js(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tp())),Ze(n),null;case 26:return a=n.memoizedState,e===null?(Ki(n),a!==null?(Ze(n),qm(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ki(n),Ze(n),qm(n,a)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ki(n),Ze(n),n.flags&=-16777217),null;case 27:He(n),a=dt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=wt.current,js(n)?Mp(n):(e=q0(u,o,a),n.stateNode=e,Ki(n))}return Ze(n),null;case 5:if(He(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(e=wt.current,js(n))Mp(n);else{switch(u=Wl(dt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[cn]=n,e[Ke]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Mn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=dt.current,js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=On,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||F0(e.nodeValue,a)),e||ar(n)}else e=Wl(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else Zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),Ze(n),null;case 4:return Yt(),e===null&&Lf(n.stateNode.containerInfo),Ze(n),null;case 10:return qi(n.type),Ze(n),null;case 19:if(vt(fn),u=n.memoizedState,u===null)return Ze(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)fo(u,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rl(e),f!==null){for(n.flags|=128,fo(u,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return St(fn,fn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ft()>Pl&&(n.flags|=128,o=!0,fo(u,!1),n.lanes=4194304)}else{if(!o)if(e=Rl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),fo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ae)return Ze(n),null}else 2*Ft()-u.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,o=!0,fo(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ft(),n.sibling=null,e=fn.current,St(fn,o?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return ji(n),Nu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(or),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function fx(e,n){switch(xu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(un),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Zs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(fn),null;case 4:return Yt(),null;case 10:return qi(n.type),null;case 22:case 23:return ji(n),Nu(),e!==null&&vt(or),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return qi(un),null;case 25:return null;default:return null}}function Ym(e,n){switch(xu(n),n.tag){case 3:qi(un),Yt();break;case 26:case 27:case 5:He(n);break;case 4:Yt();break;case 13:ji(n);break;case 19:vt(fn);break;case 10:qi(n.type);break;case 22:case 23:ji(n),Nu(),e!==null&&vt(or);break;case 24:qi(un)}}function ho(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(T){Fe(n,n.return,T)}}function Ta(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var P=a,J=T;try{J()}catch(ut){Fe(u,P,ut)}}}o=o.next}while(o!==f)}}catch(ut){Fe(n,n.return,ut)}}function jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pp(n,a)}catch(o){Fe(e,e.return,o)}}}function Zm(e,n,a){a.props=cr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Li(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Km(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function lf(e,n,a){try{var o=e.stateNode;Lx(o,e.type,a,n),o[Ke]=n}catch(u){Fe(e,e.return,u)}}function Qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xl));else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(uf(e,n,a),e=e.sibling;e!==null;)uf(e,n,a),e=e.sibling}function Nl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,n,a),e=e.sibling;e!==null;)Nl(e,n,a),e=e.sibling}function Jm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,o,a),n[cn]=e,n[Ke]=a}catch(f){Fe(e,e.return,f)}}var Qi=!1,en=!1,ff=!1,$m=typeof WeakSet=="function"?WeakSet:Set,gn=null;function hx(e,n){if(e=e.containerInfo,Pf=Ql,e=up(e),lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,P=-1,J=0,ut=0,mt=e,et=null;e:for(;;){for(var it;mt!==a||u!==0&&mt.nodeType!==3||(T=S+u),mt!==f||o!==0&&mt.nodeType!==3||(P=S+o),mt.nodeType===3&&(S+=mt.nodeValue.length),(it=mt.firstChild)!==null;)et=mt,mt=it;for(;;){if(mt===e)break e;if(et===a&&++J===u&&(T=S),et===f&&++ut===o&&(P=S),(it=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=it}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:e,selectionRange:a},Ql=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ne=cr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ne,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Fe(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ff(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function t0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),o&4&&ho(5,a);break;case 1:if(ba(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Fe(a,a.return,S)}else{var u=cr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(a,a.return,S)}}o&64&&jm(a),o&512&&po(a,a.return);break;case 3:if(ba(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(e,n)}catch(S){Fe(a,a.return,S)}}break;case 27:n===null&&o&4&&Jm(a);case 26:case 5:ba(e,a),n===null&&o&4&&Km(a),o&512&&po(a,a.return);break;case 12:ba(e,a);break;case 13:ba(e,a),o&4&&i0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yx.bind(null,a),Fx(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||en,u=Qi;var f=en;Qi=o,(en=n)&&!f?Aa(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),Qi=u,en=f}break;case 30:break;default:ba(e,a)}}function e0(e){var n=e.alternate;n!==null&&(e.alternate=null,e0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ur(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Gn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)n0(e,n,a),a=a.sibling}function n0(e,n,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:en||Li(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Li(a,n);var o=qe,u=Gn;La(a.type)&&(qe=a.stateNode,Gn=!1),Ji(e,n,a),Eo(a.stateNode),qe=o,Gn=u;break;case 5:en||Li(a,n);case 6:if(o=qe,u=Gn,qe=null,Ji(e,n,a),qe=o,Gn=u,qe!==null)if(Gn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:qe!==null&&(Gn?(e=qe,X0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Uo(e)):X0(qe,a.stateNode));break;case 4:o=qe,u=Gn,qe=a.stateNode.containerInfo,Gn=!0,Ji(e,n,a),qe=o,Gn=u;break;case 0:case 11:case 14:case 15:en||Ta(2,a,n),en||Ta(4,a,n),Ji(e,n,a);break;case 1:en||(Li(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Zm(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,Ji(e,n,a),en=o;break;default:Ji(e,n,a)}}function i0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Uo(e)}catch(a){Fe(n,n.return,a)}}function dx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new $m),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new $m),n;default:throw Error(r(435,e.tag))}}function hf(e,n){var a=dx(e);n.forEach(function(o){var u=Mx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(La(T.type)){qe=T.stateNode,Gn=!1;break t}break;case 5:qe=T.stateNode,Gn=!1;break t;case 3:case 4:qe=T.stateNode.containerInfo,Gn=!0;break t}T=T.return}if(qe===null)throw Error(r(160));n0(f,S,u),qe=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)a0(n,e),n=n.sibling}var gi=null;function a0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Ta(3,e,e.return),ho(3,e),Ta(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(en||a===null||Li(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gi;if(jn(n,e),Zn(e),o&512&&(en||a===null||Li(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ci]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Mn(f,o,a),f[cn]=e,nn(f),o=f;break t;case"link":var S=J0("link","href",u).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=u.createElement(o),Mn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=J0("meta","content",u).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=u.createElement(o),Mn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[cn]=e,nn(f),o=f}e.stateNode=o}else $0(u,e.type,e.stateNode);else e.stateNode=Q0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?$0(u,e.type,e.stateNode):Q0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(en||a===null||Li(a,a.return)),a!==null&&o&4&&lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(en||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{In(u,"")}catch(it){Fe(e,e.return,it)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,lf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(ff=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){Fe(e,e.return,it)}}break;case 3:if(jl=null,u=gi,gi=ql(n.containerInfo),jn(n,e),gi=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Uo(n.containerInfo)}catch(it){Fe(e,e.return,it)}ff&&(ff=!1,r0(e));break;case 4:o=gi,gi=ql(e.stateNode.containerInfo),jn(n,e),Zn(e),gi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vf=Ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hf(e,o)));break;case 22:u=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Qi,ut=en;if(Qi=J||u,en=ut||P,jn(n,e),en=ut,Qi=J,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||Qi||en||ur(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=P.stateNode;var mt=P.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){Fe(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(it){Fe(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,hf(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hf(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Qm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=cf(e);Nl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(In(S,""),a.flags&=-33);var T=cf(e);Nl(e,T,S);break;case 3:case 4:var P=a.stateNode.containerInfo,J=cf(e);uf(e,J,P);break;default:throw Error(r(161))}}catch(ut){Fe(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function r0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;r0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ba(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)t0(e,n.alternate,n),n=n.sibling}function ur(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),ur(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Zm(n,n.return,a),ur(n);break;case 27:Eo(n.stateNode);case 26:case 5:Li(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}e=e.sibling}}function Aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Aa(u,f,a),ho(4,f);break;case 1:if(Aa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Fe(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)Op(P[u],T)}catch(J){Fe(o,o.return,J)}}a&&S&64&&jm(f),po(f,f.return);break;case 27:Jm(f);case 26:case 5:Aa(u,f,a),a&&o===null&&S&4&&Km(f),po(f,f.return);break;case 12:Aa(u,f,a);break;case 13:Aa(u,f,a),a&&S&4&&i0(u,f);break;case 22:f.memoizedState===null&&Aa(u,f,a),po(f,f.return);break;case 30:break;default:Aa(u,f,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Js(a))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e))}function Ni(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)s0(e,n,a,o),n=n.sibling}function s0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(e,n,a,o),u&2048&&ho(9,n);break;case 1:Ni(e,n,a,o);break;case 3:Ni(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e)));break;case 12:if(u&2048){Ni(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Fe(n,n.return,P)}}else Ni(e,n,a,o);break;case 13:Ni(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ni(e,n,a,o):mo(e,n):f._visibility&2?Ni(e,n,a,o):(f._visibility|=2,Qr(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&df(S,n);break;case 24:Ni(e,n,a,o),u&2048&&pf(n.alternate,n);break;default:Ni(e,n,a,o)}}function Qr(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,P=o,J=S.flags;switch(S.tag){case 0:case 11:case 15:Qr(f,S,T,P,u),ho(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?Qr(f,S,T,P,u):mo(f,S):(ut._visibility|=2,Qr(f,S,T,P,u)),u&&J&2048&&df(S.alternate,S);break;case 24:Qr(f,S,T,P,u),u&&J&2048&&pf(S.alternate,S);break;default:Qr(f,S,T,P,u)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:mo(a,o),u&2048&&df(o.alternate,o);break;case 24:mo(a,o),u&2048&&pf(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var go=8192;function Jr(e){if(e.subtreeFlags&go)for(e=e.child;e!==null;)o0(e),e=e.sibling}function o0(e){switch(e.tag){case 26:Jr(e),e.flags&go&&e.memoizedState!==null&&Jx(gi,e.memoizedState,e.memoizedProps);break;case 5:Jr(e);break;case 3:case 4:var n=gi;gi=ql(e.stateNode.containerInfo),Jr(e),gi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=go,go=16777216,Jr(e),go=n):Jr(e));break;default:Jr(e)}}function l0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,u0(o,e)}l0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)c0(e),e=e.sibling}function c0(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):_o(e);break;default:_o(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,u0(o,e)}l0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function u0(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Js(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,f=o.return;if(e0(o),o===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var px={getCacheForType:function(e){var n=wn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},mx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ve=null,_e=null,xe=0,De=0,Kn=null,Ra=!1,$r=!1,mf=!1,$i=0,$e=0,wa=0,fr=0,gf=0,oi=0,ts=0,vo=null,Vn=null,_f=!1,vf=0,Pl=1/0,zl=null,Ca=null,yn=0,Da=null,es=null,ns=0,xf=0,Sf=null,f0=null,xo=0,yf=null;function Qn(){if((Ce&2)!==0&&xe!==0)return xe&-xe;if(B.T!==null){var e=kr;return e!==0?e:wf()}return ye()}function h0(){oi===0&&(oi=(xe&536870912)===0||Ae?X():536870912);var e=si.current;return e!==null&&(e.flags|=32),oi}function Jn(e,n,a){(e===Ve&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(is(e,0),Ua(e,xe,oi,!1)),Bt(e,a),((Ce&2)===0||e!==Ve)&&(e===Ve&&((Ce&2)===0&&(fr|=a),$e===4&&Ua(e,xe,oi,!1)),Oi(e))}function d0(e,n,a){if((Ce&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=o?vx(e,n):Tf(e,n,!0),f=o;do{if(u===0){$r&&!o&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!gx(a)){u=Tf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;u=vo;var P=T.current.memoizedState.isDehydrated;if(P&&(is(T,S).flags|=256),S=Tf(T,S,!1),S!==2){if(mf&&!P){T.errorRecoveryDisabledLanes|=f,fr|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){is(e,0),Ua(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(o,n,oi,!Ra);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=vf+300-Ft(),10<u)){if(Ua(o,n,oi,!Ra),kt(o,0,!0)!==0)break t;o.timeoutHandle=V0(p0.bind(null,o,a,Vn,zl,_f,n,oi,fr,ts,Ra,f,2,-0,0),u);break t}p0(o,a,Vn,zl,_f,n,oi,fr,ts,Ra,f,0,-0,0)}}break}while(!0);Oi(e)}function p0(e,n,a,o,u,f,S,T,P,J,ut,mt,et,it){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(Ao={stylesheets:null,count:0,unsuspend:Qx},o0(n),mt=$x(),mt!==null)){e.cancelPendingCommit=mt(y0.bind(null,e,n,f,a,o,u,S,T,P,ut,1,et,it)),Ua(e,f,S,!J);return}y0(e,n,f,a,o,u,S,T,P)}function gx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,o){n&=~gf,n&=~fr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&gt(e,a,n)}function Bl(){return(Ce&6)===0?(So(0),!1):!0}function Mf(){if(_e!==null){if(De===0)var e=_e.return;else e=_e,Wi=rr=null,Iu(e),Zr=null,co=0,e=_e;for(;e!==null;)Ym(e.alternate,e),e=e.return;_e=null}}function is(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ox(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Mf(),Ve=e,_e=a=Vi(e.current,null),xe=n,De=0,Kn=null,Ra=!1,$r=Ct(e,n),mf=!1,ts=oi=gf=fr=wa=$e=0,Vn=vo=null,_f=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),f=1<<u;n|=e[u],o&=~f}return $i=n,rl(),a}function m0(e,n){de=null,B.H=Tl,n===to||n===pl?(n=Lp(),De=3):n===Cp?(n=Lp(),De=4):De=n===Nm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,_e===null&&($e=1,Cl(e,ni(n,e.current)))}function g0(){var e=B.H;return B.H=Tl,e===null?Tl:e}function _0(){var e=B.A;return B.A=px,e}function Ef(){$e=4,Ra||(xe&4194048)!==xe&&si.current!==null||($r=!0),(wa&134217727)===0&&(fr&134217727)===0||Ve===null||Ua(Ve,xe,oi,!1)}function Tf(e,n,a){var o=Ce;Ce|=2;var u=g0(),f=_0();(Ve!==e||xe!==n)&&(zl=null,is(e,n)),n=!1;var S=$e;t:do try{if(De!==0&&_e!==null){var T=_e,P=Kn;switch(De){case 8:Mf(),S=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var J=De;if(De=0,Kn=null,as(e,T,P,J),a&&$r){S=0;break t}break;default:J=De,De=0,Kn=null,as(e,T,P,J)}}_x(),S=$e;break}catch(ut){m0(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Wi=rr=null,Ce=o,B.H=u,B.A=f,_e===null&&(Ve=null,xe=0,rl()),S}function _x(){for(;_e!==null;)v0(_e)}function vx(e,n){var a=Ce;Ce|=2;var o=g0(),u=_0();Ve!==e||xe!==n?(zl=null,Pl=Ft()+500,is(e,n)):$r=Ct(e,n);t:do try{if(De!==0&&_e!==null){n=_e;var f=Kn;e:switch(De){case 1:De=0,Kn=null,as(e,n,f,1);break;case 2:case 9:if(Dp(f)){De=0,Kn=null,x0(n);break}n=function(){De!==2&&De!==9||Ve!==e||(De=7),Oi(e)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:Dp(f)?(De=0,Kn=null,x0(n)):(De=0,Kn=null,as(e,n,f,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var T=_e;if(!S||tg(S)){De=0,Kn=null;var P=T.sibling;if(P!==null)_e=P;else{var J=T.return;J!==null?(_e=J,Il(J)):_e=null}break e}}De=0,Kn=null,as(e,n,f,5);break;case 6:De=0,Kn=null,as(e,n,f,6);break;case 8:Mf(),$e=6;break t;default:throw Error(r(462))}}xx();break}catch(ut){m0(e,ut)}while(!0);return Wi=rr=null,B.H=o,B.A=u,Ce=a,_e!==null?0:(Ve=null,xe=0,rl(),$e)}function xx(){for(;_e!==null&&!Qt();)v0(_e)}function v0(e){var n=Wm(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Il(e):_e=n}function x0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Iu(n);default:Ym(a,n),n=_e=Sp(n,$i),n=Wm(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Il(e):_e=n}function as(e,n,a,o){Wi=rr=null,Iu(n),Zr=null,co=0;var u=n.return;try{if(lx(e,u,n,a,xe)){$e=1,Cl(e,ni(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;$e=1,Cl(e,ni(a,e.current)),_e=null;return}n.flags&32768?(Ae||o===1?e=!0:$r||(xe&536870912)!==0?e=!1:(Ra=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),S0(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){S0(n,Ra);return}e=n.return;var a=ux(n.alternate,n,$i);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);$e===0&&($e=5)}function S0(e,n){do{var a=fx(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);$e=6,_e=null}function y0(e,n,a,o,u,f,S,T,P){e.cancelPendingCommit=null;do Fl();while(yn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=du,Et(e,a,f,S,T,P),e===Ve&&(_e=Ve=null,xe=0),es=n,Da=e,ns=a,xf=f,Sf=u,f0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ex(Ye,function(){return A0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=K.p,K.p=2,S=Ce,Ce|=4;try{hx(e,n,a)}finally{Ce=S,K.p=u,B.T=o}}yn=1,M0(),E0(),T0()}}function M0(){if(yn===1){yn=0;var e=Da,n=es,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Ce;Ce|=4;try{a0(n,e);var f=zf,S=up(e.containerInfo),T=f.focusedElem,P=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&cp(T.ownerDocument.documentElement,T)){if(P!==null&&lu(T)){var J=P.start,ut=P.end;if(ut===void 0&&(ut=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ut,T.value.length);else{var mt=T.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var it=et.getSelection(),ne=T.textContent.length,$t=Math.min(P.start,ne),Pe=P.end===void 0?$t:Math.min(P.end,ne);!it.extend&&$t>Pe&&(S=Pe,Pe=$t,$t=S);var q=lp(T,$t),V=lp(T,Pe);if(q&&V&&(it.rangeCount!==1||it.anchorNode!==q.node||it.anchorOffset!==q.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var Q=mt.createRange();Q.setStart(q.node,q.offset),it.removeAllRanges(),$t>Pe?(it.addRange(Q),it.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),it.addRange(Q))}}}}for(mt=[],it=T;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Ql=!!Pf,zf=Pf=null}finally{Ce=u,K.p=o,B.T=a}}e.current=n,yn=2}}function E0(){if(yn===2){yn=0;var e=Da,n=es,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Ce;Ce|=4;try{t0(e,n.alternate,n)}finally{Ce=u,K.p=o,B.T=a}}yn=3}}function T0(){if(yn===4||yn===3){yn=0,Se();var e=Da,n=es,a=ns,o=f0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,es=Da=null,b0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ca=null),we(a),n=n.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=K.p,K.p=2,B.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var T=o[S];f(T.value,{componentStack:T.stack})}}finally{B.T=n,K.p=u}}(ns&3)!==0&&Fl(),Oi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===yf?xo++:(xo=0,yf=e):xo=0,So(0)}}function b0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Js(n)))}function Fl(e){return M0(),E0(),T0(),A0()}function A0(){if(yn!==5)return!1;var e=Da,n=xf;xf=0;var a=we(ns),o=B.T,u=K.p;try{K.p=32>a?32:a,B.T=null,a=Sf,Sf=null;var f=Da,S=ns;if(yn=0,es=Da=null,ns=0,(Ce&6)!==0)throw Error(r(331));var T=Ce;if(Ce|=4,c0(f.current),s0(f,f.current,S,a),Ce=T,So(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{K.p=u,B.T=o,b0(e,n)}}function R0(e,n,a){n=ni(a,n),n=Ju(e.stateNode,n,2),e=Sa(e,n,2),e!==null&&(Bt(e,2),Oi(e))}function Fe(e,n,a){if(e.tag===3)R0(e,e,a);else for(;n!==null;){if(n.tag===3){R0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){e=ni(a,e),a=Um(2),o=Sa(n,a,2),o!==null&&(Lm(a,o,n,e),Bt(o,2),Oi(o));break}}n=n.return}}function bf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new mx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(mf=!0,u.add(a),e=Sx.bind(null,e,n,a),n.then(e,e))}function Sx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(xe&a)===a&&($e===4||$e===3&&(xe&62914560)===xe&&300>Ft()-vf?(Ce&2)===0&&is(e,0):gf|=a,ts===xe&&(ts=0)),Oi(e)}function w0(e,n){n===0&&(n=bt()),e=Fr(e,n),e!==null&&(Bt(e,n),Oi(e))}function yx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),w0(e,a)}function Mx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),w0(e,a)}function Ex(e,n){return G(e,n)}var Hl=null,rs=null,Af=!1,Gl=!1,Rf=!1,hr=0;function Oi(e){e!==rs&&e.next===null&&(rs===null?Hl=rs=e:rs=rs.next=e),Gl=!0,Af||(Af=!0,bx())}function So(e,n){if(!Rf&&Gl){Rf=!0;do for(var a=!1,o=Hl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,L0(o,f))}else f=xe,f=kt(o,o===Ve?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,L0(o,f));o=o.next}while(a);Rf=!1}}function Tx(){C0()}function C0(){Gl=Af=!1;var e=0;hr!==0&&(Nx()&&(e=hr),hr=0);for(var n=Ft(),a=null,o=Hl;o!==null;){var u=o.next,f=D0(o,n);f===0?(o.next=null,a===null?Hl=u:a.next=u,u===null&&(rs=a)):(a=o,(e!==0||(f&3)!==0)&&(Gl=!0)),o=u}So(e)}function D0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-zt(f),T=1<<S,P=u[S];P===-1?((T&a)===0||(T&o)!==0)&&(u[S]=re(T,n)):P<=n&&(e.expiredLanes|=T),f&=~T}if(n=Ve,a=xe,a=kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(De===2||De===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Re(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Re(o),we(a)){case 2:case 8:a=se;break;case 32:a=Ye;break;case 268435456:a=N;break;default:a=Ye}return o=U0.bind(null,e),a=G(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Re(o),e.callbackPriority=2,e.callbackNode=null,2}function U0(e,n){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var o=xe;return o=kt(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(d0(e,o,n),D0(e,Ft()),e.callbackNode!=null&&e.callbackNode===a?U0.bind(null,e):null)}function L0(e,n){if(Fl())return null;d0(e,n,!0)}function bx(){Px(function(){(Ce&6)!==0?G(Ht,Tx):C0()})}function wf(){return hr===0&&(hr=X()),hr}function N0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jo(""+e)}function O0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ax(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=N0((u[Ke]||null).action),S=o.submitter;S&&(n=(n=S[Ke]||null)?N0(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new nl("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(hr!==0){var P=S?O0(u,S):new FormData(u);Yu(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=S?O0(u,S):new FormData(u),Yu(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var Cf=0;Cf<hu.length;Cf++){var Df=hu[Cf],Rx=Df.toLowerCase(),wx=Df[0].toUpperCase()+Df.slice(1);mi(Rx,"on"+wx)}mi(dp,"onAnimationEnd"),mi(pp,"onAnimationIteration"),mi(mp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Wv,"onTransitionRun"),mi(qv,"onTransitionStart"),mi(Yv,"onTransitionCancel"),mi(gp,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function P0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],P=T.instance,J=T.currentTarget;if(T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ut){wl(ut)}u.currentTarget=null,f=P}else for(S=0;S<o.length;S++){if(T=o[S],P=T.instance,J=T.currentTarget,T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ut){wl(ut)}u.currentTarget=null,f=P}}}}function ve(e,n){var a=n[Cr];a===void 0&&(a=n[Cr]=new Set);var o=e+"__bubble";a.has(o)||(z0(n,e,2,!1),a.add(o))}function Uf(e,n,a){var o=0;n&&(o|=4),z0(a,e,o,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[Vl]){e[Vl]=!0,Ko.forEach(function(a){a!=="selectionchange"&&(Cx.has(a)||Uf(a,!1,e),Uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,Uf("selectionchange",!1,n))}}function z0(e,n,a,o){switch(sg(n)){case 2:var u=nS;break;case 8:u=iS;break;default:u=qf}a=u.bind(null,n,a,e),u=void 0,!$c||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Nf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=o.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Hi(T),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){o=f=S;continue t}T=T.parentNode}}o=o.return}kd(function(){var J=f,ut=Qc(a),mt=[];t:{var et=_p.get(e);if(et!==void 0){var it=nl,ne=e;switch(e){case"keypress":if(tl(a)===0)break t;case"keydown":case"keyup":it=Ev;break;case"focusin":ne="focus",it=iu;break;case"focusout":ne="blur",it=iu;break;case"beforeblur":case"afterblur":it=iu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Av;break;case dp:case pp:case mp:it=pv;break;case gp:it=wv;break;case"scroll":case"scrollend":it=cv;break;case"wheel":it=Dv;break;case"copy":case"cut":case"paste":it=gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=jd;break;case"toggle":case"beforetoggle":it=Lv}var $t=(n&4)!==0,Pe=!$t&&(e==="scroll"||e==="scrollend"),q=$t?et!==null?et+"Capture":null:et;$t=[];for(var V=J,Q;V!==null;){var pt=V;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||q===null||(pt=Fs(V,q),pt!=null&&$t.push(Mo(V,pt,Q))),Pe)break;V=V.return}0<$t.length&&(et=new it(et,ne,null,a,ut),mt.push({event:et,listeners:$t}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",et&&a!==Kc&&(ne=a.relatedTarget||a.fromElement)&&(Hi(ne)||ne[wi]))break t;if((it||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,it?(ne=a.relatedTarget||a.toElement,it=J,ne=ne?Hi(ne):null,ne!==null&&(Pe=c(ne),$t=ne.tag,ne!==Pe||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(it=null,ne=J),it!==ne)){if($t=qd,pt="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&($t=jd,pt="onPointerLeave",q="onPointerEnter",V="pointer"),Pe=it==null?et:Ka(it),Q=ne==null?et:Ka(ne),et=new $t(pt,V+"leave",it,a,ut),et.target=Pe,et.relatedTarget=Q,pt=null,Hi(ut)===J&&($t=new $t(q,V+"enter",ne,a,ut),$t.target=Q,$t.relatedTarget=Pe,pt=$t),Pe=pt,it&&ne)e:{for($t=it,q=ne,V=0,Q=$t;Q;Q=ss(Q))V++;for(Q=0,pt=q;pt;pt=ss(pt))Q++;for(;0<V-Q;)$t=ss($t),V--;for(;0<Q-V;)q=ss(q),Q--;for(;V--;){if($t===q||q!==null&&$t===q.alternate)break e;$t=ss($t),q=ss(q)}$t=null}else $t=null;it!==null&&B0(mt,et,it,$t,!1),ne!==null&&Pe!==null&&B0(mt,Pe,ne,$t,!0)}}t:{if(et=J?Ka(J):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var Gt=np;else if(tp(et))if(ip)Gt=Vv;else{Gt=Hv;var pe=Fv}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Zc(J.elementType)&&(Gt=np):Gt=Gv;if(Gt&&(Gt=Gt(e,J))){ep(mt,Gt,a,ut);break t}pe&&pe(e,et,J),e==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&Rn(et,"number",et.value)}switch(pe=J?Ka(J):window,e){case"focusin":(tp(pe)||pe.contentEditable==="true")&&(zr=pe,cu=J,Ys=null);break;case"focusout":Ys=cu=zr=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,fp(mt,a,ut);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":fp(mt,a,ut)}var jt;if(ru)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Pr?Jd(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Zd&&a.locale!=="ko"&&(Pr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Pr&&(jt=Xd()):(ga=ut,tu="value"in ga?ga.value:ga.textContent,Pr=!0)),pe=kl(J,ee),0<pe.length&&(ee=new Yd(ee,e,null,a,ut),mt.push({event:ee,listeners:pe}),jt?ee.data=jt:(jt=$d(a),jt!==null&&(ee.data=jt)))),(jt=Ov?Pv(e,a):zv(e,a))&&(ee=kl(J,"onBeforeInput"),0<ee.length&&(pe=new Yd("onBeforeInput","beforeinput",null,a,ut),mt.push({event:pe,listeners:ee}),pe.data=jt)),Ax(mt,e,J,a,ut)}P0(mt,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Fs(e,a),u!=null&&o.unshift(Mo(e,u,f)),u=Fs(e,n),u!=null&&o.push(Mo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function ss(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function B0(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,P=T.alternate,J=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||J===null||(P=J,u?(J=Fs(a,f),J!=null&&S.unshift(Mo(a,J,P))):u||(J=Fs(a,f),J!=null&&S.push(Mo(a,J,P)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Dx=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function I0(e){return(typeof e=="string"?e:""+e).replace(Dx,`
`).replace(Ux,"")}function F0(e,n){return n=I0(n),I0(e)===n}function Xl(){}function Oe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||In(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&In(e,""+o);break;case"className":It(e,"class",o);break;case"tabIndex":It(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,a,o);break;case"style":Gd(e,o,f);break;case"data":if(n!=="object"){It(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Jo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",u.name,u,null),Oe(e,n,"formEncType",u.formEncType,u,null),Oe(e,n,"formMethod",u.formMethod,u,null),Oe(e,n,"formTarget",u.formTarget,u,null)):(Oe(e,n,"encType",u.encType,u,null),Oe(e,n,"method",u.method,u,null),Oe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Jo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Xl);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Jo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ut(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ut(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ov.get(a)||a,Ut(e,a,o))}}function Of(e,n,a,o,u,f){switch(a){case"style":Gd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?In(e,o):(typeof o=="number"||typeof o=="bigint")&&In(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Ke]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ut(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,f,S,a,null)}}u&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=S=u=null,P=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":u=ut;break;case"type":S=ut;break;case"checked":P=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Oe(e,n,o,ut,a,null)}}Nn(e,f,T,P,J,S,u,!1),ge(e);return;case"select":ve("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Oe(e,n,u,T,a,null)}n=f,a=S,e.multiple=!!o,n!=null?Qe(e,!!o,n,!1):a!=null&&Qe(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Oe(e,n,S,T,a,null)}Lr(e,o,u,f),ge(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,P,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<yo.length;o++)ve(yo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,J,o,a,null)}return;default:if(Zc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&Of(e,n,ut,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Oe(e,n,T,o,a,null))}function Lx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,P=null,J=null,ut=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=mt;default:o.hasOwnProperty(it)||Oe(e,n,it,null,o,mt)}}for(var et in o){var it=o[et];if(mt=a[et],o.hasOwnProperty(et)&&(it!=null||mt!=null))switch(et){case"type":f=it;break;case"name":u=it;break;case"checked":J=it;break;case"defaultChecked":ut=it;break;case"value":S=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==mt&&Oe(e,n,et,it,o,mt)}}Ie(e,S,T,P,J,ut,f,u);return;case"select":it=S=T=et=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":it=P;default:o.hasOwnProperty(f)||Oe(e,n,f,null,o,P)}for(u in o)if(f=o[u],P=a[u],o.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==P&&Oe(e,n,u,f,o,P)}n=T,a=S,o=it,et!=null?Qe(e,!!a,et,!1):!!o!=!!a&&(n!=null?Qe(e,!!a,n,!0):Qe(e,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(e,n,T,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":et=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Oe(e,n,S,u,o,f)}xn(e,et,it);return;case"option":for(var ne in a)if(et=a[ne],a.hasOwnProperty(ne)&&et!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Oe(e,n,ne,null,o,et)}for(P in o)if(et=o[P],it=a[P],o.hasOwnProperty(P)&&et!==it&&(et!=null||it!=null))switch(P){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Oe(e,n,P,et,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)et=a[$t],a.hasOwnProperty($t)&&et!=null&&!o.hasOwnProperty($t)&&Oe(e,n,$t,null,o,et);for(J in o)if(et=o[J],it=a[J],o.hasOwnProperty(J)&&et!==it&&(et!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Oe(e,n,J,et,o,it)}return;default:if(Zc(n)){for(var Pe in a)et=a[Pe],a.hasOwnProperty(Pe)&&et!==void 0&&!o.hasOwnProperty(Pe)&&Of(e,n,Pe,void 0,o,et);for(ut in o)et=o[ut],it=a[ut],!o.hasOwnProperty(ut)||et===it||et===void 0&&it===void 0||Of(e,n,ut,et,o,it);return}}for(var q in a)et=a[q],a.hasOwnProperty(q)&&et!=null&&!o.hasOwnProperty(q)&&Oe(e,n,q,null,o,et);for(mt in o)et=o[mt],it=a[mt],!o.hasOwnProperty(mt)||et===it||et==null&&it==null||Oe(e,n,mt,et,o,it)}var Pf=null,zf=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function H0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function G0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var If=null;function Nx(){var e=window.event;return e&&e.type==="popstate"?e===If?!1:(If=e,!0):(If=null,!1)}var V0=typeof setTimeout=="function"?setTimeout:void 0,Ox=typeof clearTimeout=="function"?clearTimeout:void 0,k0=typeof Promise=="function"?Promise:void 0,Px=typeof queueMicrotask=="function"?queueMicrotask:typeof k0<"u"?function(e){return k0.resolve(null).then(e).catch(zx)}:V0;function zx(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function X0(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&Eo(S.documentElement),a&2&&Eo(S.body),a&4)for(a=S.head,Eo(a),S=a.firstChild;S;){var T=S.nextSibling,P=S.nodeName;S[Ci]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(u===0){e.removeChild(f),Uo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Uo(n)}function Ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),Ur(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Bx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ci])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function Ix(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Fx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Gf=null;function W0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function q0(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ur(e)}var li=new Map,Y0=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=K.d;K.d={f:Hx,r:Gx,D:Vx,C:kx,L:Xx,m:Wx,X:Yx,S:qx,M:jx};function Hx(){var e=ta.f(),n=Bl();return e||n}function Gx(e){var n=pa(e);n!==null&&n.tag===5&&n.type==="form"?dm(n):ta.r(e)}var os=typeof document>"u"?null:document;function j0(e,n,a){var o=os;if(o&&typeof n=="string"&&n){var u=pn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Y0.has(u)||(Y0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Mn(n,"link",e),nn(n),o.head.appendChild(n)))}}function Vx(e){ta.D(e),j0("dns-prefetch",e,null)}function kx(e,n){ta.C(e,n),j0("preconnect",e,n)}function Xx(e,n,a){ta.L(e,n,a);var o=os;if(o&&e&&n){var u='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pn(a.imageSizes)+'"]')):u+='[href="'+pn(e)+'"]';var f=u;switch(n){case"style":f=ls(e);break;case"script":f=cs(e)}li.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(To(f))||n==="script"&&o.querySelector(bo(f))||(n=o.createElement("link"),Mn(n,"link",e),nn(n),o.head.appendChild(n)))}}function Wx(e,n){ta.m(e,n);var a=os;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pn(o)+'"][href="'+pn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cs(e)}if(!li.has(f)&&(e=g({rel:"modulepreload",href:e},n),li.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}o=a.createElement("link"),Mn(o,"link",e),nn(o),a.head.appendChild(o)}}}function qx(e,n,a){ta.S(e,n,a);var o=os;if(o&&e){var u=ma(o).hoistableStyles,f=ls(e);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(To(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(f))&&Vf(e,a);var P=S=o.createElement("link");nn(P),Mn(P,"link",e),P._p=new Promise(function(J,ut){P.onload=J,P.onerror=ut}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function Yx(e,n){ta.X(e,n);var a=os;if(a&&e){var o=ma(a).hoistableScripts,u=cs(e),f=o.get(u);f||(f=a.querySelector(bo(u)),f||(e=g({src:e,async:!0},n),(n=li.get(u))&&kf(e,n),f=a.createElement("script"),nn(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function jx(e,n){ta.M(e,n);var a=os;if(a&&e){var o=ma(a).hoistableScripts,u=cs(e),f=o.get(u);f||(f=a.querySelector(bo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=li.get(u))&&kf(e,n),f=a.createElement("script"),nn(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Z0(e,n,a,o){var u=(u=dt.current)?ql(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ls(a.href),a=ma(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ls(a.href);var f=ma(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(To(e)))&&!f._p&&(S.instance=f,S.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),f||Zx(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=ma(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ls(e){return'href="'+pn(e)+'"'}function To(e){return'link[rel="stylesheet"]['+e+"]"}function K0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Zx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),nn(n),e.head.appendChild(n))}function cs(e){return'[src="'+pn(e)+'"]'}function bo(e){return"script[async]"+e}function Q0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pn(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),Mn(o,"style",u),Yl(o,a.precedence,e),n.instance=o;case"stylesheet":u=ls(a.href);var f=e.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;o=K0(a),(u=li.get(u))&&Vf(o,u),f=(e.ownerDocument||e).createElement("link"),nn(f);var S=f;return S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),Mn(f,"link",o),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=cs(a.src),(u=e.querySelector(bo(f)))?(n.instance=u,nn(u),u):(o=a,(u=li.get(f))&&(o=g({},a),kf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nn(u),Mn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yl(o,a.precedence,e));return n.instance}function Yl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jl=null;function J0(e,n,a){if(jl===null){var o=new Map,u=jl=new Map;u.set(a,o)}else u=jl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ci]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function $0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Kx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function tg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ao=null;function Qx(){}function Jx(e,n,a){if(Ao===null)throw Error(r(475));var o=Ao;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ls(a.href),f=e.querySelector(To(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Zl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,nn(f);return}f=e.ownerDocument||e,a=K0(a),(u=li.get(u))&&Vf(a,u),f=f.createElement("link"),nn(f);var S=f;S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),Mn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Zl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function $x(){if(Ao===null)throw Error(r(475));var e=Ao;return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Zl(){if(this.count--,this.count===0){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Xf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(tS,e),Kl=null,Zl.call(e))}function tS(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var o=a.get(null);else{a=new Map,Kl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=Zl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function eS(e,n,a,o,u,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function eg(e,n,a,o,u,f,S,T,P,J,ut,mt){return e=new eS(e,n,a,S,T,P,J,mt),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Tu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},wu(f),e}function ng(e){return e?(e=Hr,e):Hr}function ig(e,n,a,o,u,f){u=ng(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Sa(e,o,n),a!==null&&(Jn(a,e,n),no(a,e,n))}function ag(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){ag(e,n),(e=e.alternate)&&ag(e,n)}function rg(e){if(e.tag===13){var n=Fr(e,67108864);n!==null&&Jn(n,e,67108864),Wf(e,67108864)}}var Ql=!0;function nS(e,n,a,o){var u=B.T;B.T=null;var f=K.p;try{K.p=2,qf(e,n,a,o)}finally{K.p=f,B.T=u}}function iS(e,n,a,o){var u=B.T;B.T=null;var f=K.p;try{K.p=8,qf(e,n,a,o)}finally{K.p=f,B.T=u}}function qf(e,n,a,o){if(Ql){var u=Yf(o);if(u===null)Nf(e,n,o,Jl,a),og(e,o);else if(rS(u,e,n,a,o))o.stopPropagation();else if(og(e,o),n&4&&-1<aS.indexOf(e)){for(;u!==null;){var f=pa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Zt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var P=1<<31-zt(S);T.entanglements[1]|=P,S&=~P}Oi(f),(Ce&6)===0&&(Pl=Ft()+500,So(0))}}break;case 13:T=Fr(f,2),T!==null&&Jn(T,f,2),Bl(),Wf(f,2)}if(f=Yf(o),f===null&&Nf(e,n,o,Jl,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Nf(e,n,o,null,a)}}function Yf(e){return e=Qc(e),jf(e)}var Jl=null;function jf(e){if(Jl=null,e=Hi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function sg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case Ht:return 2;case se:return 8;case Ye:case je:return 32;case N:return 268435456;default:return 32}default:return 32}}var Zf=!1,Na=null,Oa=null,Pa=null,wo=new Map,Co=new Map,za=[],aS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function og(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function Do(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=pa(n),n!==null&&rg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function rS(e,n,a,o,u){switch(n){case"focusin":return Na=Do(Na,e,n,a,o,u),!0;case"dragenter":return Oa=Do(Oa,e,n,a,o,u),!0;case"mouseover":return Pa=Do(Pa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,Do(wo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Co.set(f,Do(Co.get(f)||null,e,n,a,o,u)),!0}return!1}function lg(e){var n=Hi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,di(e.priority,function(){if(a.tag===13){var o=Qn();o=ae(o);var u=Fr(a,o);u!==null&&Jn(u,a,o),Wf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Kc=o,a.target.dispatchEvent(o),Kc=null}else return n=pa(a),n!==null&&rg(n),e.blockedOn=a,!1;n.shift()}return!0}function cg(e,n,a){$l(e)&&a.delete(n)}function sS(){Zf=!1,Na!==null&&$l(Na)&&(Na=null),Oa!==null&&$l(Oa)&&(Oa=null),Pa!==null&&$l(Pa)&&(Pa=null),wo.forEach(cg),Co.forEach(cg)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,sS)))}var ec=null;function ug(e){ec!==e&&(ec=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(jf(o||a)===null)continue;break}var f=pa(a);f!==null&&(e.splice(n,3),n-=3,Yu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Uo(e){function n(P){return tc(P,e)}Na!==null&&tc(Na,e),Oa!==null&&tc(Oa,e),Pa!==null&&tc(Pa,e),wo.forEach(n),Co.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)lg(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[Ke]||null;if(typeof f=="function")S||ug(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Ke]||null)T=S.formAction;else if(jf(u)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),ug(a)}}}function Kf(e){this._internalRoot=e}nc.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();ig(a,o,e,n,null,null)},nc.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ig(e.current,2,null,e,null,null),Bl(),n[wi]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ye();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&lg(e)}};var fg=t.version;if(fg!=="19.1.1")throw Error(r(527,fg,"19.1.1"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var oS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{ct=ic.inject(oS),_t=ic}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Rm,f=wm,S=Cm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=eg(e,1,!1,null,null,a,o,u,f,S,T,null),e[wi]=n.current,Lf(e),new Kf(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=Rm,S=wm,T=Cm,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=eg(e,1,!0,n,a??null,o,u,f,S,T,P,J),n.context=ng(null),a=n.current,o=Qn(),o=ae(o),u=xa(o),u.callback=null,Sa(a,u,o),a=o,n.current.lanes=a,Bt(n,a),Oi(n),e[wi]=n.current,Lf(e),new nc(n)},No.version="19.1.1",No}var yg;function vS(){if(yg)return $f.exports;yg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),$f.exports=_S(),$f.exports}var xS=vS();const SS="/assets/libertyStatue-BU-8cKZ7.jpg",yS="/assets/brooklyn-nEhiXLkq.jpg",MS="/assets/grandCentral-Bm2fPKUV.jpg",ES="/assets/groupPhoto-C6-nIINE.jpg",TS="/assets/wallSt-CISS5-K_.jpg",bS="/assets/timesSquare1-DXflqivP.jpg",AS="/assets/timesSquare2-buz51PWv.jpg",RS="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='40px'%20viewBox='0%20-960%20960%20960'%20width='40px'%20fill='%23000000'%3e%3cpath%20d='m448.67-240.67-240-240%20240-240L495.33-674l-193%20193.33%20193%20193.34-46.66%2046.66Zm256.66%200-240-240%20240-240L752-674%20559-480.67l193%20193.34-46.67%2046.66Z'/%3e%3c/svg%3e",wS="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='40px'%20viewBox='0%20-960%20960%20960'%20width='40px'%20fill='%23000000'%3e%3cpath%20d='M401.67-480.67%20208.67-674l46.66-46.67%20240%20240-240%20240-46.66-46.66%20193-193.34Zm256.66%200L465.33-674%20512-720.67l240%20240-240%20240-46.67-46.66%20193-193.34Z'/%3e%3c/svg%3e";function CS(){const[s,t]=yi.useState(0),i=[{title:"Me under the Liberty statue!",img:SS},{title:"A photo of the Manhattan bridge as seen from Brooklyn!",img:yS},{title:"Grand Central Station!",img:MS},{title:"A group photo with the other guys I went to New York with!",img:ES},{title:"A photo of the iconic Wall Street sign!",img:TS},{title:"Photo of the famous 'Red Stair' in Times Square.",img:bS},{title:"Another photo of Times Square!",img:AS}];function r(){t(c=>(c+1)%i.length)}function l(){t(c=>(c-1+i.length)%i.length)}return Lt.jsxs("div",{id:"imageContainer",children:[Lt.jsx("span",{className:"text",children:i[s].title}),Lt.jsxs("div",{id:"galleryDiv",children:[Lt.jsx("button",{className:"galleryBtn",id:"back",onClick:l,children:Lt.jsx("img",{className:"arrow",src:RS,alt:"Previous"})}),Lt.jsx("img",{src:i[s].img,alt:i[s].title,id:"gallery",className:"gabrieleImg"}),Lt.jsx("button",{className:"galleryBtn",id:"front",onClick:r,children:Lt.jsx("img",{className:"arrow",src:wS,alt:"Next"})})]})]})}function DS(){return Lt.jsxs("div",{id:"text",children:[Lt.jsxs("h4",{children:["Hello!",Lt.jsx("br",{}),"I'm Gabriele"]}),Lt.jsxs("p",{children:["I'm a ",new Date().getFullYear()-2008,` years old student, attending "Dell'Erba" school in Castellana Grotte where I'm studying Computer Science. I have a passion for programming and software development. I love creating new projects and learning new technologies. I have experience in various programming languages, and I'm always open to learn more. I was born in Putignano (Ba) and I now know programming languages like C, C++, Python, Java and also a little bit of the basics of php and Javascript (needed for this PortFolio)...`]})]})}function US(){return Lt.jsxs("div",{id:"about",children:[Lt.jsx("div",{id:"name",children:Lt.jsx("span",{children:"ABOUT MYSELF"})}),Lt.jsxs("div",{id:"content",children:[Lt.jsx(DS,{}),Lt.jsx(CS,{})]})]})}const LS="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='30px'%20height='30px'%20fill-rule='nonzero'%3e%3cg%20fill-opacity='0'%20fill='%23000000'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cpath%20d='M0,256v-256h256v256z'%20id='bgRectangle'%3e%3c/path%3e%3c/g%3e%3cg%20fill='%23ffffff'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(8.53333,8.53333)'%3e%3cpath%20d='M15,3c-6.627,0%20-12,5.373%20-12,12c0,5.623%203.872,10.328%209.092,11.63c-0.056,-0.162%20-0.092,-0.35%20-0.092,-0.583v-2.051c-0.487,0%20-1.303,0%20-1.508,0c-0.821,0%20-1.551,-0.353%20-1.905,-1.009c-0.393,-0.729%20-0.461,-1.844%20-1.435,-2.526c-0.289,-0.227%20-0.069,-0.486%200.264,-0.451c0.615,0.174%201.125,0.596%201.605,1.222c0.478,0.627%200.703,0.769%201.596,0.769c0.433,0%201.081,-0.025%201.691,-0.121c0.328,-0.833%200.895,-1.6%201.588,-1.962c-3.996,-0.411%20-5.903,-2.399%20-5.903,-5.098c0,-1.162%200.495,-2.286%201.336,-3.233c-0.276,-0.94%20-0.623,-2.857%200.106,-3.587c1.798,0%202.885,1.166%203.146,1.481c0.896,-0.307%201.88,-0.481%202.914,-0.481c1.036,0%202.024,0.174%202.922,0.483c0.258,-0.313%201.346,-1.483%203.148,-1.483c0.732,0.731%200.381,2.656%200.102,3.594c0.836,0.945%201.328,2.066%201.328,3.226c0,2.697%20-1.904,4.684%20-5.894,5.097c1.098,0.573%201.899,2.183%201.899,3.396v2.734c0,0.104%20-0.023,0.179%20-0.035,0.268c4.676,-1.639%208.035,-6.079%208.035,-11.315c0,-6.627%20-5.373,-12%20-12,-12z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",NS="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='50px'%20height='50px'%20fill-rule='nonzero'%3e%3cg%20fill-opacity='0'%20fill='%23000000'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cpath%20d='M0,256v-256h256v256z'%20id='bgRectangle'%3e%3c/path%3e%3c/g%3e%3cg%20fill='%23ffffff'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M16,3c-7.16752,0%20-13,5.83248%20-13,13v18c0,7.16752%205.83248,13%2013,13h18c7.16752,0%2013,-5.83248%2013,-13v-18c0,-7.16752%20-5.83248,-13%20-13,-13zM16,5h18c6.08648,0%2011,4.91352%2011,11v18c0,6.08648%20-4.91352,11%20-11,11h-18c-6.08648,0%20-11,-4.91352%20-11,-11v-18c0,-6.08648%204.91352,-11%2011,-11zM37,11c-1.10457,0%20-2,0.89543%20-2,2c0,1.10457%200.89543,2%202,2c1.10457,0%202,-0.89543%202,-2c0,-1.10457%20-0.89543,-2%20-2,-2zM25,14c-6.06329,0%20-11,4.93671%20-11,11c0,6.06329%204.93671,11%2011,11c6.06329,0%2011,-4.93671%2011,-11c0,-6.06329%20-4.93671,-11%20-11,-11zM25,16c4.98241,0%209,4.01759%209,9c0,4.98241%20-4.01759,9%20-9,9c-4.98241,0%20-9,-4.01759%20-9,-9c0,-4.98241%204.01759,-9%209,-9z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",OS="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='48px'%20viewBox='0%20-960%20960%20960'%20width='48px'%20fill='%23ffffff'%3e%3cpath%20d='M140-160q-24%200-42-18t-18-42v-520q0-24%2018-42t42-18h680q24%200%2042%2018t18%2042v520q0%2024-18%2042t-42%2018H140Zm340-302L140-685v465h680v-465L480-462Zm0-60%20336-218H145l335%20218ZM140-685v-55%20520-465Z'/%3e%3c/svg%3e";function PS(){return Lt.jsxs("footer",{id:"footer",children:[Lt.jsxs("div",{id:"contact",children:[Lt.jsx("span",{id:"github",children:Lt.jsxs("a",{href:"https://github.com/gabontrash",target:"_blank",children:[Lt.jsx("img",{src:LS,alt:"GitHub"}),"GitHub"]})}),Lt.jsx("span",{id:"instagram",children:Lt.jsxs("a",{href:"https://www.instagram.com/_gabrielearmenise",target:"_blank",children:[Lt.jsx("img",{src:NS,alt:"Instagram"}),"Instagram"]})}),Lt.jsx("span",{id:"gmail",children:Lt.jsxs("a",{href:"mailto:gabrielearmenise08@gmail.com",target:"_blank",children:[Lt.jsx("img",{src:OS,alt:"Gmail"}),"Gmail"]})})]}),Lt.jsxs("div",{id:"copyright",children:["© ",new Date().getFullYear()," Gabriele Armenise. All rights reserved."]})]})}var A_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Mg=br.createContext&&br.createContext(A_),zS=["attr","size","title"];function BS(s,t){if(s==null)return{};var i=IS(s,t),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(l=0;l<c.length;l++)r=c[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function IS(s,t){if(s==null)return{};var i={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(t.indexOf(r)>=0)continue;i[r]=s[r]}return i}function Fc(){return Fc=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Fc.apply(this,arguments)}function Eg(s,t){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function Hc(s){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Eg(Object(i),!0).forEach(function(r){FS(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):Eg(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function FS(s,t,i){return t=HS(t),t in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}function HS(s){var t=GS(s,"string");return typeof t=="symbol"?t:t+""}function GS(s,t){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function R_(s){return s&&s.map((t,i)=>br.createElement(t.tag,Hc({key:i},t.attr),R_(t.child)))}function w_(s){return t=>br.createElement(VS,Fc({attr:Hc({},s.attr)},t),R_(s.child))}function VS(s){var t=i=>{var{attr:r,size:l,title:c}=s,h=BS(s,zS),d=l||i.size||"1em",m;return i.className&&(m=i.className),s.className&&(m=(m?m+" ":"")+s.className),br.createElement("svg",Fc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:Hc(Hc({color:s.color||i.color},i.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&br.createElement("title",null,c),s.children)};return Mg!==void 0?br.createElement(Mg.Consumer,null,i=>t(i)):t(A_)}function kS(s){return w_({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(s)}function XS(s){return w_({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(s)}const WS="/assets/globe-DrtSGufA.png",qS="/assets/CV_Studente-DI6cZBjF.pdf";function YS(){const[s,t]=yi.useState(!1);return Lt.jsxs("nav",{id:"navbar",children:[Lt.jsxs("div",{id:"logo",children:[Lt.jsx("img",{src:WS,alt:"Logo"}),Lt.jsx("p",{children:"Gabriele"})]}),Lt.jsx("div",{className:"hamburger",onClick:()=>t(!s),children:s?Lt.jsx(XS,{}):Lt.jsx(kS,{})}),Lt.jsxs("ul",{className:s?"nav-links active":"nav-links",children:[Lt.jsx("li",{children:Lt.jsx("a",{href:"#about",children:"About me"})}),Lt.jsx("li",{children:Lt.jsx("a",{href:"#skills",children:"Dev skills"})}),Lt.jsx("li",{children:Lt.jsx("a",{href:"#contact",children:"Contact"})}),Lt.jsx("li",{children:Lt.jsx("a",{href:qS,target:"_blank",rel:"noopener noreferrer",children:"Curriculum"})})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ad="179",jS=0,Tg=1,ZS=2,C_=1,KS=2,sa=3,ja=0,Bn=1,oa=2,qa=0,Rs=1,bg=2,Ag=3,Rg=4,QS=5,yr=100,JS=101,$S=102,ty=103,ey=104,ny=200,iy=201,ay=202,ry=203,Bh=204,Ih=205,sy=206,oy=207,ly=208,cy=209,uy=210,fy=211,hy=212,dy=213,py=214,Fh=0,Hh=1,Gh=2,Us=3,Vh=4,kh=5,Xh=6,Wh=7,D_=0,my=1,gy=2,Ya=0,_y=1,vy=2,xy=3,Sy=4,yy=5,My=6,Ey=7,U_=300,Ls=301,Ns=302,qh=303,Yh=304,Wc=306,jh=1e3,Er=1001,Zh=1002,bi=1003,Ty=1004,ac=1005,Ii=1006,ih=1007,Tr=1008,fa=1009,L_=1010,N_=1011,Ho=1012,Rd=1013,Rr=1014,la=1015,Wo=1016,wd=1017,Cd=1018,Go=1020,O_=35902,P_=1021,z_=1022,Ei=1023,Vo=1026,ko=1027,B_=1028,Dd=1029,I_=1030,Ud=1031,Ld=1033,Nc=33776,Oc=33777,Pc=33778,zc=33779,Kh=35840,Qh=35841,Jh=35842,$h=35843,td=36196,ed=37492,nd=37496,id=37808,ad=37809,rd=37810,sd=37811,od=37812,ld=37813,cd=37814,ud=37815,fd=37816,hd=37817,dd=37818,pd=37819,md=37820,gd=37821,Bc=36492,_d=36494,vd=36495,F_=36283,xd=36284,Sd=36285,yd=36286,by=3200,Ay=3201,Ry=0,wy=1,Xa="",ui="srgb",Os="srgb-linear",Gc="linear",ze="srgb",us=7680,wg=519,Cy=512,Dy=513,Uy=514,H_=515,Ly=516,Ny=517,Oy=518,Py=519,Md=35044,Cg="300 es",Fi=2e3,Vc=2001;class zs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dg=1234567;const ws=Math.PI/180,Xo=180/Math.PI;function ca(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function oe(s,t,i){return Math.max(t,Math.min(i,s))}function Nd(s,t){return(s%t+t)%t}function zy(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function By(s,t,i){return s!==t?(i-s)/(t-s):0}function Fo(s,t,i){return(1-i)*s+i*t}function Iy(s,t,i,r){return Fo(s,t,1-Math.exp(-i*r))}function Fy(s,t=1){return t-Math.abs(Nd(s,t*2)-t)}function Hy(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function Gy(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function Vy(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ky(s,t){return s+Math.random()*(t-s)}function Xy(s){return s*(.5-Math.random())}function Wy(s){s!==void 0&&(Dg=s);let t=Dg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qy(s){return s*ws}function Yy(s){return s*Xo}function jy(s){return(s&s-1)===0&&s!==0}function Zy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ky(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qy(s,t,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+r)/2),g=h((t+r)/2),_=c((t-r)/2),x=h((t-r)/2),M=c((r-t)/2),b=h((r-t)/2);switch(l){case"XYX":s.set(d*g,m*_,m*x,d*p);break;case"YZY":s.set(m*x,d*g,m*_,d*p);break;case"ZXZ":s.set(m*_,m*x,d*g,d*p);break;case"XZX":s.set(d*g,m*b,m*M,d*p);break;case"YXY":s.set(m*M,d*g,m*b,d*p);break;case"ZYZ":s.set(m*b,m*M,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Mi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Jy={DEG2RAD:ws,RAD2DEG:Xo,generateUUID:ca,clamp:oe,euclideanModulo:Nd,mapLinear:zy,inverseLerp:By,lerp:Fo,damp:Iy,pingpong:Fy,smoothstep:Hy,smootherstep:Gy,randInt:Vy,randFloat:ky,randFloatSpread:Xy,seededRandom:Wy,degToRad:qy,radToDeg:Yy,isPowerOfTwo:jy,ceilPowerOfTwo:Zy,floorPowerOfTwo:Ky,setQuaternionFromProperEuler:Qy,normalize:Ue,denormalize:Mi};class be{constructor(t=0,i=0){be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(oe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(oe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const x=c[h+0],M=c[h+1],b=c[h+2],R=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=b,t[i+3]=R;return}if(_!==R||m!==x||p!==M||g!==b){let y=1-d;const v=m*x+p*M+g*b+_*R,O=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const z=Math.sqrt(U),H=Math.atan2(z,v*O);y=Math.sin(y*H)/z,d=Math.sin(d*H)/z}const w=d*O;if(m=m*y+x*w,p=p*y+M*w,g=g*y+b*w,_=_*y+R*w,y===1-d){const z=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=z,p*=z,g*=z,_*=z}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[h],x=c[h+1],M=c[h+2],b=c[h+3];return t[i]=d*b+g*_+m*M-p*x,t[i+1]=m*b+g*x+p*_-d*M,t[i+2]=p*b+g*M+d*x-m*_,t[i+3]=g*b-d*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(c/2),x=m(r/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=x*g*_+p*M*b,this._y=p*M*_-x*g*b,this._z=p*g*b+x*M*_,this._w=p*g*_-x*M*b;break;case"YXZ":this._x=x*g*_+p*M*b,this._y=p*M*_-x*g*b,this._z=p*g*b-x*M*_,this._w=p*g*_+x*M*b;break;case"ZXY":this._x=x*g*_-p*M*b,this._y=p*M*_+x*g*b,this._z=p*g*b+x*M*_,this._w=p*g*_-x*M*b;break;case"ZYX":this._x=x*g*_-p*M*b,this._y=p*M*_+x*g*b,this._z=p*g*b-x*M*_,this._w=p*g*_+x*M*b;break;case"YZX":this._x=x*g*_+p*M*b,this._y=p*M*_+x*g*b,this._z=p*g*b-x*M*_,this._w=p*g*_-x*M*b;break;case"XZY":this._x=x*g*_-p*M*b,this._y=p*M*_-x*g*b,this._z=p*g*b+x*M*_,this._w=p*g*_+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=r+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,r=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ug.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ug.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+m*p+h*_-d*g,this.y=r+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this.z=oe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this.z=oe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(oe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ah.copy(this).projectOnVector(t),this.sub(ah)}reflect(t){return this.sub(ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(oe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ah=new Z,Ug=new qo;class ce{constructor(t,i,r,l,c,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],x=r[2],M=r[5],b=r[8],R=l[0],y=l[3],v=l[6],O=l[1],U=l[4],w=l[7],z=l[2],H=l[5],F=l[8];return c[0]=h*R+d*O+m*z,c[3]=h*y+d*U+m*H,c[6]=h*v+d*w+m*F,c[1]=p*R+g*O+_*z,c[4]=p*y+g*U+_*H,c[7]=p*v+g*w+_*F,c[2]=x*R+M*O+b*z,c[5]=x*y+M*U+b*H,c[8]=x*v+M*w+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,x=d*m-g*c,M=p*c-h*m,b=i*_+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=_*R,t[1]=(l*p-g*r)*R,t[2]=(d*r-l*h)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=M*R,t[7]=(r*m-p*i)*R,t[8]=(h*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(rh.makeScale(t,i)),this}rotate(t){return this.premultiply(rh.makeRotation(-t)),this}translate(t,i){return this.premultiply(rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new ce;function G_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function kc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $y(){const s=kc("canvas");return s.style.display="block",s}const Lg={};function Cs(s){s in Lg||(Lg[s]=!0,console.warn(s))}function tM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Ng=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Og=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eM(){const s={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ze&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Ds(l.r),l.g=Ds(l.g),l.b=Ds(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Gc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Os]:{primaries:t,whitePoint:r,transfer:Gc,toXYZ:Ng,fromXYZ:Og,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:Ng,fromXYZ:Og,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Te=eM();function ua(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fs;class nM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{fs===void 0&&(fs=kc("canvas")),fs.width=t.width,fs.height=t.height;const l=fs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=fs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ua(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let iM=0;class Od{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=ca(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(sh(l[h].image)):c.push(sh(l[h]))}else c=sh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function sh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aM=0;const oh=new Z;class Xn extends zs{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Er,l=Er,c=Ii,h=Tr,d=Ei,m=fa,p=Xn.DEFAULT_ANISOTROPY,g=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=ca(),this.name="",this.source=new Od(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oh).x}get height(){return this.source.getSize(oh).y}get depth(){return this.source.getSize(oh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==U_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jh:t.x=t.x-Math.floor(t.x);break;case Er:t.x=t.x<0?0:1;break;case Zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jh:t.y=t.y-Math.floor(t.y);break;case Er:t.y=t.y<0?0:1;break;case Zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=U_;Xn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,i=0,r=0,l=1){ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],M=m[5],b=m[9],R=m[2],y=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(M+1)/2,z=(v+1)/2,H=(g+x)/4,F=(_+R)/4,k=(b+y)/4;return U>w&&U>z?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=H/r,c=F/r):w>z?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=H/l,c=k/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=F/c,l=k/c),this.set(r,l,c,i),this}let O=Math.sqrt((y-b)*(y-b)+(_-R)*(_-R)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(y-b)/O,this.y=(_-R)/O,this.z=(x-g)/O,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this.z=oe(this.z,t.z,i.z),this.w=oe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this.z=oe(this.z,t,i),this.w=oe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(oe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rM extends zs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ke(0,0,t,i),this.scissorTest=!1,this.viewport=new ke(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Xn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Od(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends rM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class V_ extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,vi):vi.fromBufferAttribute(c,h),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),sc.subVectors(this.max,Oo),hs.subVectors(t.a,Oo),ds.subVectors(t.b,Oo),ps.subVectors(t.c,Oo),Ia.subVectors(ds,hs),Fa.subVectors(ps,ds),dr.subVectors(hs,ps);let i=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-dr.z,dr.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,dr.z,0,-dr.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-dr.y,dr.x,0];return!lh(i,hs,ds,ps,sc)||(i=[1,0,0,0,1,0,0,0,1],!lh(i,hs,ds,ps,sc))?!1:(oc.crossVectors(Ia,Fa),i=[oc.x,oc.y,oc.z],lh(i,hs,ds,ps,sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],vi=new Z,rc=new Za,hs=new Z,ds=new Z,ps=new Z,Ia=new Z,Fa=new Z,dr=new Z,Oo=new Z,sc=new Z,oc=new Z,pr=new Z;function lh(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){pr.fromArray(s,c);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),m=t.dot(pr),p=i.dot(pr),g=r.dot(pr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const oM=new Za,Po=new Z,ch=new Z;class Yo{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):oM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Po,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(ch)),this.expandByPoint(Po.copy(t.center).sub(ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new Z,uh=new Z,lc=new Z,Ha=new Z,fh=new Z,cc=new Z,hh=new Z;class lM{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){uh.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(uh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(lc),d=Ha.dot(this.direction),m=-Ha.dot(lc),p=Ha.lengthSq(),g=Math.abs(1-h*h);let _,x,M,b;if(g>0)if(_=h*m-d,x=h*d-m,b=c*g,_>=0)if(x>=-b)if(x<=b){const R=1/g;_*=R,x*=R,M=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x<=-b?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p):x<=b?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(uh).addScaledVector(lc,x),M}intersectSphere(t,i){na.subVectors(t.center,this.origin);const r=na.dot(this.direction),l=na.dot(na)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,i,r,l,c){fh.subVectors(i,t),cc.subVectors(r,t),hh.crossVectors(fh,cc);let h=this.direction.dot(hh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ha.subVectors(this.origin,t);const m=d*this.direction.dot(cc.crossVectors(Ha,cc));if(m<0)return null;const p=d*this.direction.dot(fh.cross(Ha));if(p<0||m+p>h)return null;const g=-d*Ha.dot(hh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(t,i,r,l,c,h,d,m,p,g,_,x,M,b,R,y){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,_,x,M,b,R,y)}set(t,i,r,l,c,h,d,m,p,g,_,x,M,b,R,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=b,v[11]=R,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ms.setFromMatrixColumn(t,0).length(),c=1/ms.setFromMatrixColumn(t,1).length(),h=1/ms.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*g,M=h*_,b=d*g,R=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+b*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*_,b=p*g,R=p*_;i[0]=x+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*_,b=p*g,R=p*_;i[0]=x-R*d,i[4]=-h*_,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*_,b=d*g,R=d*_;i[0]=m*g,i[4]=b*p-M,i[8]=x*p+R,i[1]=m*_,i[5]=R*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=R-x*_,i[8]=b*_+M,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+b,i[10]=x-R*_}else if(t.order==="XZY"){const x=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+R,i[5]=h*g,i[9]=M*_-b,i[2]=b*_-M,i[6]=d*g,i[10]=R*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cM,t,uM)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ga.crossVectors(r,$n),Ga.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ga.crossVectors(r,$n)),Ga.normalize(),uc.crossVectors($n,Ga),l[0]=Ga.x,l[4]=uc.x,l[8]=$n.x,l[1]=Ga.y,l[5]=uc.y,l[9]=$n.y,l[2]=Ga.z,l[6]=uc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],x=r[9],M=r[13],b=r[2],R=r[6],y=r[10],v=r[14],O=r[3],U=r[7],w=r[11],z=r[15],H=l[0],F=l[4],k=l[8],C=l[12],D=l[1],I=l[5],st=l[9],lt=l[13],ft=l[2],ht=l[6],B=l[10],K=l[14],Y=l[3],xt=l[7],L=l[11],$=l[15];return c[0]=h*H+d*D+m*ft+p*Y,c[4]=h*F+d*I+m*ht+p*xt,c[8]=h*k+d*st+m*B+p*L,c[12]=h*C+d*lt+m*K+p*$,c[1]=g*H+_*D+x*ft+M*Y,c[5]=g*F+_*I+x*ht+M*xt,c[9]=g*k+_*st+x*B+M*L,c[13]=g*C+_*lt+x*K+M*$,c[2]=b*H+R*D+y*ft+v*Y,c[6]=b*F+R*I+y*ht+v*xt,c[10]=b*k+R*st+y*B+v*L,c[14]=b*C+R*lt+y*K+v*$,c[3]=O*H+U*D+w*ft+z*Y,c[7]=O*F+U*I+w*ht+z*xt,c[11]=O*k+U*st+w*B+z*L,c[15]=O*C+U*lt+w*K+z*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],M=t[14],b=t[3],R=t[7],y=t[11],v=t[15];return b*(+c*m*_-l*p*_-c*d*x+r*p*x+l*d*M-r*m*M)+R*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*g-c*m*g)+y*(+i*p*_-i*d*M-c*h*_+r*h*M+c*d*g-r*p*g)+v*(-l*d*g-i*m*_+i*d*x+l*h*_-r*h*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],M=t[11],b=t[12],R=t[13],y=t[14],v=t[15],O=_*y*p-R*x*p+R*m*M-d*y*M-_*m*v+d*x*v,U=b*x*p-g*y*p-b*m*M+h*y*M+g*m*v-h*x*v,w=g*R*p-b*_*p+b*d*M-h*R*M-g*d*v+h*_*v,z=b*_*m-g*R*m-b*d*x+h*R*x+g*d*y-h*_*y,H=i*O+r*U+l*w+c*z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return t[0]=O*F,t[1]=(R*x*c-_*y*c-R*l*M+r*y*M+_*l*v-r*x*v)*F,t[2]=(d*y*c-R*m*c+R*l*p-r*y*p-d*l*v+r*m*v)*F,t[3]=(_*m*c-d*x*c-_*l*p+r*x*p+d*l*M-r*m*M)*F,t[4]=U*F,t[5]=(g*y*c-b*x*c+b*l*M-i*y*M-g*l*v+i*x*v)*F,t[6]=(b*m*c-h*y*c-b*l*p+i*y*p+h*l*v-i*m*v)*F,t[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*M+i*m*M)*F,t[8]=w*F,t[9]=(b*_*c-g*R*c-b*r*M+i*R*M+g*r*v-i*_*v)*F,t[10]=(h*R*c-b*d*c+b*r*p-i*R*p-h*r*v+i*d*v)*F,t[11]=(g*d*c-h*_*c-g*r*p+i*_*p+h*r*M-i*d*M)*F,t[12]=z*F,t[13]=(g*R*l-b*_*l+b*r*x-i*R*x-g*r*y+i*_*y)*F,t[14]=(b*d*l-h*R*l-b*r*m+i*R*m+h*r*y-i*d*y)*F,t[15]=(h*_*l-g*d*l+g*r*m-i*_*m-h*r*x+i*d*x)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,x=c*p,M=c*g,b=c*_,R=h*g,y=h*_,v=d*_,O=m*p,U=m*g,w=m*_,z=r.x,H=r.y,F=r.z;return l[0]=(1-(R+v))*z,l[1]=(M+w)*z,l[2]=(b-U)*z,l[3]=0,l[4]=(M-w)*H,l[5]=(1-(x+v))*H,l[6]=(y+O)*H,l[7]=0,l[8]=(b+U)*F,l[9]=(y-O)*F,l[10]=(1-(x+R))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=ms.set(l[0],l[1],l[2]).length();const h=ms.set(l[4],l[5],l[6]).length(),d=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/c,g=1/h,_=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,i.setFromRotationMatrix(xi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Fi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(r-l),x=(i+t)/(i-t),M=(r+l)/(r-l);let b,R;if(m)b=c/(h-c),R=h*c/(h-c);else if(d===Fi)b=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Vc)b=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Fi,m=!1){const p=this.elements,g=2/(i-t),_=2/(r-l),x=-(i+t)/(i-t),M=-(r+l)/(r-l);let b,R;if(m)b=1/(h-c),R=h/(h-c);else if(d===Fi)b=-2/(h-c),R=-(h+c)/(h-c);else if(d===Vc)b=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ms=new Z,xi=new on,cM=new Z(0,0,0),uM=new Z(1,1,1),Ga=new Z,uc=new Z,$n=new Z,Pg=new on,zg=new qo;class ha{constructor(t=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(oe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-oe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(oe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Pg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return zg.setFromEuler(this),this.setFromQuaternion(zg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class k_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fM=0;const Bg=new Z,gs=new qo,ia=new on,fc=new Z,zo=new Z,hM=new Z,dM=new qo,Ig=new Z(1,0,0),Fg=new Z(0,1,0),Hg=new Z(0,0,1),Gg={type:"added"},pM={type:"removed"},_s={type:"childadded",child:null},dh={type:"childremoved",child:null};class ei extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const t=new Z,i=new ha,r=new qo,l=new Z(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ce}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return gs.setFromAxisAngle(t,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,i){return gs.setFromAxisAngle(t,i),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Ig,t)}rotateY(t){return this.rotateOnAxis(Fg,t)}rotateZ(t){return this.rotateOnAxis(Hg,t)}translateOnAxis(t,i){return Bg.copy(t).applyQuaternion(this.quaternion),this.position.add(Bg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ig,t)}translateY(t){return this.translateOnAxis(Fg,t)}translateZ(t){return this.translateOnAxis(Hg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fc.copy(t):fc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(zo,fc,this.up):ia.lookAt(fc,zo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(ia),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gg),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(pM),dh.child=t,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gg),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,hM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,dM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),x=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ei.DEFAULT_UP=new Z(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new Z,aa=new Z,ph=new Z,ra=new Z,vs=new Z,xs=new Z,Vg=new Z,mh=new Z,gh=new Z,_h=new Z,vh=new ke,xh=new ke,Sh=new ke;class hi{constructor(t=new Z,i=new Z,r=new Z){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Si.subVectors(t,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Si.subVectors(l,i),aa.subVectors(r,i),ph.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(aa),m=Si.dot(ph),p=aa.dot(aa),g=aa.dot(ph),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*m-d*g)*x,b=(h*g-d*m)*x;return c.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ra.x),m.addScaledVector(h,ra.y),m.addScaledVector(d,ra.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return vh.setScalar(0),xh.setScalar(0),Sh.setScalar(0),vh.fromBufferAttribute(t,i),xh.fromBufferAttribute(t,r),Sh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(vh,c.x),h.addScaledVector(xh,c.y),h.addScaledVector(Sh,c.z),h}static isFrontFacing(t,i,r,l){return Si.subVectors(r,i),aa.subVectors(t,i),Si.cross(aa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),Si.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return hi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return hi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;vs.subVectors(l,r),xs.subVectors(c,r),mh.subVectors(t,r);const m=vs.dot(mh),p=xs.dot(mh);if(m<=0&&p<=0)return i.copy(r);gh.subVectors(t,l);const g=vs.dot(gh),_=xs.dot(gh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(vs,h);_h.subVectors(t,c);const M=vs.dot(_h),b=xs.dot(_h);if(b>=0&&M<=b)return i.copy(c);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(xs,d);const y=g*b-M*_;if(y<=0&&_-g>=0&&M-b>=0)return Vg.subVectors(c,l),d=(_-g)/(_-g+(M-b)),i.copy(l).addScaledVector(Vg,d);const v=1/(y+R+x);return h=R*v,d=x*v,i.copy(r).addScaledVector(vs,h).addScaledVector(xs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},hc={h:0,s:0,l:0};function yh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Be{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Te.workingColorSpace){if(t=Nd(t,1),i=oe(i,0,1),r=oe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=yh(h,c,t+1/3),this.g=yh(h,c,t),this.b=yh(h,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const r=X_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Te.workingToColorSpace(Un.copy(this),t),Math.round(oe(Un.r*255,0,255))*65536+Math.round(oe(Un.g*255,0,255))*256+Math.round(oe(Un.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ui){Te.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+i,Va.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Va),t.getHSL(hc);const r=Fo(Va.h,hc.h,i),l=Fo(Va.s,hc.s,i),c=Fo(Va.l,hc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Be;Be.NAMES=X_;let mM=0;class qc extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=Rs,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Ih,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ih&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pd extends qc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=D_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new Z,dc=new be;let gM=0;class Ai{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Md,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Mi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ue(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Mi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Mi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Mi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Mi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array),l=Ue(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array),l=Ue(l,this.array),c=Ue(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Md&&(t.usage=this.usage),t}}class W_ extends Ai{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class q_ extends Ai{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Wn extends Ai{constructor(t,i,r){super(new Float32Array(t),i,r)}}let _M=0;const ci=new on,Mh=new ei,Ss=new Z,ti=new Za,Bo=new Za,vn=new Z;class Ri extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(G_(t)?q_:W_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return Mh.lookAt(t),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Wn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ti.min,Bo.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Bo.max),ti.expandByPoint(vn)):(ti.expandByPoint(Bo.min),ti.expandByPoint(Bo.max))}ti.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(Ss.fromBufferAttribute(t,p),vn.add(Ss)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<r.count;k++)d[k]=new Z,m[k]=new Z;const p=new Z,g=new Z,_=new Z,x=new be,M=new be,b=new be,R=new Z,y=new Z;function v(k,C,D){p.fromBufferAttribute(r,k),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,D),x.fromBufferAttribute(c,k),M.fromBufferAttribute(c,C),b.fromBufferAttribute(c,D),g.sub(p),_.sub(p),M.sub(x),b.sub(x);const I=1/(M.x*b.y-b.x*M.y);isFinite(I)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(I),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(I),d[k].add(R),d[C].add(R),d[D].add(R),m[k].add(y),m[C].add(y),m[D].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let k=0,C=O.length;k<C;++k){const D=O[k],I=D.start,st=D.count;for(let lt=I,ft=I+st;lt<ft;lt+=3)v(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const U=new Z,w=new Z,z=new Z,H=new Z;function F(k){z.fromBufferAttribute(l,k),H.copy(z);const C=d[k];U.copy(C),U.sub(z.multiplyScalar(z.dot(C))).normalize(),w.crossVectors(H,C);const I=w.dot(m[k])<0?-1:1;h.setXYZW(k,U.x,U.y,U.z,I)}for(let k=0,C=O.length;k<C;++k){const D=O[k],I=D.start,st=D.count;for(let lt=I,ft=I+st;lt<ft;lt+=3)F(t.getX(lt+0)),F(t.getX(lt+1)),F(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new Z,c=new Z,h=new Z,d=new Z,m=new Z,p=new Z,g=new Z,_=new Z;if(t)for(let x=0,M=t.count;x<M;x+=3){const b=t.getX(x+0),R=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let v=0;v<g;v++)x[b++]=p[M++]}return new Ai(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ri,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kg=new on,mr=new lM,pc=new Yo,Xg=new Z,mc=new Z,gc=new Z,_c=new Z,Eh=new Z,vc=new Z,Wg=new Z,xc=new Z;class Ti extends ei{constructor(t=new Ri,i=new Pd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Eh.fromBufferAttribute(_,t),h?vc.addScaledVector(Eh,g):vc.addScaledVector(Eh.sub(i),g))}i.add(vc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(c),mr.copy(t.ray).recast(t.near),!(pc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(pc,Xg)===null||mr.origin.distanceToSquared(Xg)>(t.far-t.near)**2))&&(kg.copy(c).invert(),mr.copy(t.ray).applyMatrix4(kg),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,mr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],v=h[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,z=U;w<z;w+=3){const H=d.getX(w),F=d.getX(w+1),k=d.getX(w+2);l=Sc(this,v,t,r,p,g,_,H,F,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,v=R;y<v;y+=3){const O=d.getX(y),U=d.getX(y+1),w=d.getX(y+2);l=Sc(this,h,t,r,p,g,_,O,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],v=h[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,z=U;w<z;w+=3){const H=w,F=w+1,k=w+2;l=Sc(this,v,t,r,p,g,_,H,F,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,v=R;y<v;y+=3){const O=y,U=y+1,w=y+2;l=Sc(this,h,t,r,p,g,_,O,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function vM(s,t,i,r,l,c,h,d){let m;if(t.side===Bn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===ja,d),m===null)return null;xc.copy(d),xc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(xc);return p<i.near||p>i.far?null:{distance:p,point:xc.clone(),object:s}}function Sc(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,mc),s.getVertexPosition(m,gc),s.getVertexPosition(p,_c);const g=vM(s,t,i,r,mc,gc,_c,Wg);if(g){const _=new Z;hi.getBarycoord(Wg,mc,gc,_c,_),l&&(g.uv=hi.getInterpolatedAttribute(l,d,m,p,_,new be)),c&&(g.uv1=hi.getInterpolatedAttribute(c,d,m,p,_,new be)),h&&(g.normal=hi.getInterpolatedAttribute(h,d,m,p,_,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new Z,materialIndex:0};hi.getNormal(mc,gc,_c,x.normal),g.face=x,g.barycoord=_}return g}class jo extends Ri{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,t,h,c,0),b("z","y","x",1,-1,r,i,-t,h,c,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Wn(p,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(_,2));function b(R,y,v,O,U,w,z,H,F,k,C){const D=w/F,I=z/k,st=w/2,lt=z/2,ft=H/2,ht=F+1,B=k+1;let K=0,Y=0;const xt=new Z;for(let L=0;L<B;L++){const $=L*I-lt;for(let vt=0;vt<ht;vt++){const St=vt*D-st;xt[R]=St*O,xt[y]=$*U,xt[v]=ft,p.push(xt.x,xt.y,xt.z),xt[R]=0,xt[y]=0,xt[v]=H>0?1:-1,g.push(xt.x,xt.y,xt.z),_.push(vt/F),_.push(1-L/k),K+=1}}for(let L=0;L<k;L++)for(let $=0;$<F;$++){const vt=x+$+ht*L,St=x+$+ht*(L+1),wt=x+($+1)+ht*(L+1),nt=x+($+1)+ht*L;m.push(vt,St,nt),m.push(St,wt,nt),Y+=6}d.addGroup(M,Y,C),M+=Y,x+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zn(s){const t={};for(let i=0;i<s.length;i++){const r=Ps(s[i]);for(const l in r)t[l]=r[l]}return t}function xM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Y_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const zd={clone:Ps,merge:zn};var SM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends qc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SM,this.fragmentShader=yM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=xM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class j_ extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new Z,qg=new be,Yg=new be;class fi extends j_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,qg,Yg),i.subVectors(Yg,qg)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ws*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ys=-90,Ms=1;class MM extends ei{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(ys,Ms,t,i);l.layers=this.layers,this.add(l);const c=new fi(ys,Ms,t,i);c.layers=this.layers,this.add(c);const h=new fi(ys,Ms,t,i);h.layers=this.layers,this.add(h);const d=new fi(ys,Ms,t,i);d.layers=this.layers,this.add(d);const m=new fi(ys,Ms,t,i);m.layers=this.layers,this.add(m);const p=new fi(ys,Ms,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Vc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Z_ extends Xn{constructor(t=[],i=Ls,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class EM extends wr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Z_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),c=new da({name:"CubemapFromEquirect",uniforms:Ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:qa});c.uniforms.tEquirect.value=i;const h=new Ti(l,c),d=i.minFilter;return i.minFilter===Tr&&(i.minFilter=Ii),new MM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class yc extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,r),v=this._getHandJoint(p,R);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new yc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class bM extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class AM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Md,this.updateRanges=[],this.version=0,this.uuid=ca()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ca()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ca()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new Z;class Wa{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyMatrix4(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyNormalMatrix(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.transformDirection(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Mi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ue(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Mi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Mi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Mi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Mi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array),l=Ue(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array),l=Ue(l,this.array),c=Ue(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ai(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const bh=new Z,RM=new Z,wM=new ce;class xr{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=bh.subVectors(r,i).cross(RM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(bh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||wM.getNormalMatrix(t),l=this.coplanarPoint(bh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Yo,CM=new be(.5,.5),Mc=new Z;class K_{constructor(t=new xr,i=new xr,r=new xr,l=new xr,c=new xr,h=new xr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Fi,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],M=c[7],b=c[8],R=c[9],y=c[10],v=c[11],O=c[12],U=c[13],w=c[14],z=c[15];if(l[0].setComponents(p-h,M-g,v-b,z-O).normalize(),l[1].setComponents(p+h,M+g,v+b,z+O).normalize(),l[2].setComponents(p+d,M+_,v+R,z+U).normalize(),l[3].setComponents(p-d,M-_,v-R,z-U).normalize(),r)l[4].setComponents(m,x,y,w).normalize(),l[5].setComponents(p-m,M-x,v-y,z-w).normalize();else if(l[4].setComponents(p-m,M-x,v-y,z-w).normalize(),i===Fi)l[5].setComponents(p+m,M+x,v+y,z+w).normalize();else if(i===Vc)l[5].setComponents(m,x,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){gr.center.set(0,0,0);const i=CM.distanceTo(t.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Q_ extends Xn{constructor(t,i,r=Rr,l,c,h,d=bi,m=bi,p,g=Vo,_=1){if(g!==Vo&&g!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Od(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Bd extends Ri{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const c=[],h=[];d(l),p(r),g(),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(c.slice(),3)),this.setAttribute("uv",new Wn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(O){const U=new Z,w=new Z,z=new Z;for(let H=0;H<i.length;H+=3)M(i[H+0],U),M(i[H+1],w),M(i[H+2],z),m(U,w,z,O)}function m(O,U,w,z){const H=z+1,F=[];for(let k=0;k<=H;k++){F[k]=[];const C=O.clone().lerp(w,k/H),D=U.clone().lerp(w,k/H),I=H-k;for(let st=0;st<=I;st++)st===0&&k===H?F[k][st]=C:F[k][st]=C.clone().lerp(D,st/I)}for(let k=0;k<H;k++)for(let C=0;C<2*(H-k)-1;C++){const D=Math.floor(C/2);C%2===0?(x(F[k][D+1]),x(F[k+1][D]),x(F[k][D])):(x(F[k][D+1]),x(F[k+1][D+1]),x(F[k+1][D]))}}function p(O){const U=new Z;for(let w=0;w<c.length;w+=3)U.x=c[w+0],U.y=c[w+1],U.z=c[w+2],U.normalize().multiplyScalar(O),c[w+0]=U.x,c[w+1]=U.y,c[w+2]=U.z}function g(){const O=new Z;for(let U=0;U<c.length;U+=3){O.x=c[U+0],O.y=c[U+1],O.z=c[U+2];const w=y(O)/2/Math.PI+.5,z=v(O)/Math.PI+.5;h.push(w,1-z)}b(),_()}function _(){for(let O=0;O<h.length;O+=6){const U=h[O+0],w=h[O+2],z=h[O+4],H=Math.max(U,w,z),F=Math.min(U,w,z);H>.9&&F<.1&&(U<.2&&(h[O+0]+=1),w<.2&&(h[O+2]+=1),z<.2&&(h[O+4]+=1))}}function x(O){c.push(O.x,O.y,O.z)}function M(O,U){const w=O*3;U.x=t[w+0],U.y=t[w+1],U.z=t[w+2]}function b(){const O=new Z,U=new Z,w=new Z,z=new Z,H=new be,F=new be,k=new be;for(let C=0,D=0;C<c.length;C+=9,D+=6){O.set(c[C+0],c[C+1],c[C+2]),U.set(c[C+3],c[C+4],c[C+5]),w.set(c[C+6],c[C+7],c[C+8]),H.set(h[D+0],h[D+1]),F.set(h[D+2],h[D+3]),k.set(h[D+4],h[D+5]),z.copy(O).add(U).add(w).divideScalar(3);const I=y(z);R(H,D+0,O,I),R(F,D+2,U,I),R(k,D+4,w,I)}}function R(O,U,w,z){z<0&&O.x===1&&(h[U]=O.x-1),w.x===0&&w.z===0&&(h[U]=z/2/Math.PI+.5)}function y(O){return Math.atan2(O.z,-O.x)}function v(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bd(t.vertices,t.indices,t.radius,t.details)}}const Ec=new Z,Tc=new Z,Ah=new Z,bc=new hi;class DM extends Ri{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(ws*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],g=["a","b","c"],_=new Array(3),x={},M=[];for(let b=0;b<m;b+=3){h?(p[0]=h.getX(b),p[1]=h.getX(b+1),p[2]=h.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:R,b:y,c:v}=bc;if(R.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),bc.getNormal(Ah),_[0]=`${Math.round(R.x*l)},${Math.round(R.y*l)},${Math.round(R.z*l)}`,_[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,_[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let O=0;O<3;O++){const U=(O+1)%3,w=_[O],z=_[U],H=bc[g[O]],F=bc[g[U]],k=`${w}_${z}`,C=`${z}_${w}`;C in x&&x[C]?(Ah.dot(x[C].normal)<=c&&(M.push(H.x,H.y,H.z),M.push(F.x,F.y,F.z)),x[C]=null):k in x||(x[k]={index0:p[O],index1:p[U],normal:Ah.clone()})}}for(const b in x)if(x[b]){const{index0:R,index1:y}=x[b];Ec.fromBufferAttribute(d,R),Tc.fromBufferAttribute(d,y),M.push(Ec.x,Ec.y,Ec.z),M.push(Tc.x,Tc.y,Tc.z)}this.setAttribute("position",new Wn(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Xc extends Bd{constructor(t=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Xc(t.radius,t.detail)}}class Yc extends Ri{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,M=[],b=[],R=[],y=[];for(let v=0;v<g;v++){const O=v*x-h;for(let U=0;U<p;U++){const w=U*_-c;b.push(w,-O,0),R.push(0,0,1),y.push(U/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<d;O++){const U=O+p*v,w=O+p*(v+1),z=O+1+p*(v+1),H=O+1+p*v;M.push(U,w,H),M.push(w,z,H)}this.setIndex(M),this.setAttribute("position",new Wn(b,3)),this.setAttribute("normal",new Wn(R,3)),this.setAttribute("uv",new Wn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.width,t.height,t.widthSegments,t.heightSegments)}}class UM extends Ri{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],r=new Set,l=new Z,c=new Z;if(t.index!==null){const h=t.attributes.position,d=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:d.count,materialIndex:0}]);for(let p=0,g=m.length;p<g;++p){const _=m[p],x=_.start,M=_.count;for(let b=x,R=x+M;b<R;b+=3)for(let y=0;y<3;y++){const v=d.getX(b+y),O=d.getX(b+(y+1)%3);l.fromBufferAttribute(h,v),c.fromBufferAttribute(h,O),jg(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const h=t.attributes.position;for(let d=0,m=h.count/3;d<m;d++)for(let p=0;p<3;p++){const g=3*d+p,_=3*d+(p+1)%3;l.fromBufferAttribute(h,g),c.fromBufferAttribute(h,_),jg(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new Wn(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function jg(s,t,i){const r=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return i.has(r)===!0||i.has(l)===!0?!1:(i.add(r),i.add(l),!0)}class LM extends qc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NM extends qc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class OM extends j_{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class PM extends Ri{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class zM extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ed extends AM{constructor(t,i,r=1){super(t,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const i=super.clone(t);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(t){const i=super.toJSON(t);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}const Zg=new Z,Ac=new Z,Es=new Z,Ts=new Z,Rh=new Z,BM=new Z,IM=new Z;class FM{constructor(t=new Z,i=new Z){this.start=t,this.end=i}set(t,i){return this.start.copy(t),this.end.copy(i),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,i){return this.delta(i).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,i){Zg.subVectors(t,this.start),Ac.subVectors(this.end,this.start);const r=Ac.dot(Ac);let c=Ac.dot(Zg)/r;return i&&(c=oe(c,0,1)),c}closestPointToPoint(t,i,r){const l=this.closestPointToPointParameter(t,i);return this.delta(r).multiplyScalar(l).add(this.start)}distanceSqToLine3(t,i=BM,r=IM){const l=10000000000000001e-32;let c,h;const d=this.start,m=t.start,p=this.end,g=t.end;Es.subVectors(p,d),Ts.subVectors(g,m),Rh.subVectors(d,m);const _=Es.dot(Es),x=Ts.dot(Ts),M=Ts.dot(Rh);if(_<=l&&x<=l)return i.copy(d),r.copy(m),i.sub(r),i.dot(i);if(_<=l)c=0,h=M/x,h=oe(h,0,1);else{const b=Es.dot(Rh);if(x<=l)h=0,c=oe(-b/_,0,1);else{const R=Es.dot(Ts),y=_*x-R*R;y!==0?c=oe((R*M-b*x)/y,0,1):c=0,h=(R*c+M)/x,h<0?(h=0,c=oe(-b/_,0,1)):h>1&&(h=1,c=oe((R-b)/_,0,1))}}return i.copy(d).add(Es.multiplyScalar(c)),r.copy(m).add(Ts.multiplyScalar(h)),i.sub(r),i.dot(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Kg(s,t,i,r){const l=HM(r);switch(i){case P_:return s*t;case B_:return s*t/l.components*l.byteLength;case Dd:return s*t/l.components*l.byteLength;case I_:return s*t*2/l.components*l.byteLength;case Ud:return s*t*2/l.components*l.byteLength;case z_:return s*t*3/l.components*l.byteLength;case Ei:return s*t*4/l.components*l.byteLength;case Ld:return s*t*4/l.components*l.byteLength;case Nc:case Oc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pc:case zc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qh:case $h:return Math.max(s,16)*Math.max(t,8)/4;case Kh:case Jh:return Math.max(s,8)*Math.max(t,8)/2;case td:case ed:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case nd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ad:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case rd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case sd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case od:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ld:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case cd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ud:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case fd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case hd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case dd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case md:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case gd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Bc:case _d:case vd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case F_:case xd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Sd:case yd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function HM(s){switch(s){case fa:case L_:return{byteLength:1,components:1};case Ho:case N_:case Wo:return{byteLength:2,components:1};case wd:case Cd:return{byteLength:2,components:4};case Rr:case Rd:case la:return{byteLength:4,components:1};case O_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function J_(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function GM(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<_.length;M++){const b=_[x],R=_[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,_[x]=R)}_.length=x+1;for(let M=0,b=_.length;M<b;M++){const R=_[M];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,QM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,f1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,h1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v1="gl_FragColor = linearToOutputTexel( gl_FragColor );",x1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,D1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,O1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,P1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,H1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ME=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:VM,alphahash_pars_fragment:kM,alphamap_fragment:XM,alphamap_pars_fragment:WM,alphatest_fragment:qM,alphatest_pars_fragment:YM,aomap_fragment:jM,aomap_pars_fragment:ZM,batching_pars_vertex:KM,batching_vertex:QM,begin_vertex:JM,beginnormal_vertex:$M,bsdfs:t1,iridescence_fragment:e1,bumpmap_pars_fragment:n1,clipping_planes_fragment:i1,clipping_planes_pars_fragment:a1,clipping_planes_pars_vertex:r1,clipping_planes_vertex:s1,color_fragment:o1,color_pars_fragment:l1,color_pars_vertex:c1,color_vertex:u1,common:f1,cube_uv_reflection_fragment:h1,defaultnormal_vertex:d1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:_1,colorspace_fragment:v1,colorspace_pars_fragment:x1,envmap_fragment:S1,envmap_common_pars_fragment:y1,envmap_pars_fragment:M1,envmap_pars_vertex:E1,envmap_physical_pars_fragment:O1,envmap_vertex:T1,fog_vertex:b1,fog_pars_vertex:A1,fog_fragment:R1,fog_pars_fragment:w1,gradientmap_pars_fragment:C1,lightmap_pars_fragment:D1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:L1,lights_pars_begin:N1,lights_toon_fragment:P1,lights_toon_pars_fragment:z1,lights_phong_fragment:B1,lights_phong_pars_fragment:I1,lights_physical_fragment:F1,lights_physical_pars_fragment:H1,lights_fragment_begin:G1,lights_fragment_maps:V1,lights_fragment_end:k1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:W1,logdepthbuf_pars_vertex:q1,logdepthbuf_vertex:Y1,map_fragment:j1,map_pars_fragment:Z1,map_particle_fragment:K1,map_particle_pars_fragment:Q1,metalnessmap_fragment:J1,metalnessmap_pars_fragment:$1,morphinstance_vertex:tE,morphcolor_vertex:eE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:aE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:_E,project_vertex:vE,dithering_fragment:xE,dithering_pars_fragment:SE,roughnessmap_fragment:yE,roughnessmap_pars_fragment:ME,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:TE,shadowmap_vertex:bE,shadowmask_pars_fragment:AE,skinbase_vertex:RE,skinning_pars_vertex:wE,skinning_vertex:CE,skinnormal_vertex:DE,specularmap_fragment:UE,specularmap_pars_fragment:LE,tonemapping_fragment:NE,tonemapping_pars_fragment:OE,transmission_fragment:PE,transmission_pars_fragment:zE,uv_pars_fragment:BE,uv_pars_vertex:IE,uv_vertex:FE,worldpos_vertex:HE,background_vert:GE,background_frag:VE,backgroundCube_vert:kE,backgroundCube_frag:XE,cube_vert:WE,cube_frag:qE,depth_vert:YE,depth_frag:jE,distanceRGBA_vert:ZE,distanceRGBA_frag:KE,equirect_vert:QE,equirect_frag:JE,linedashed_vert:$E,linedashed_frag:t2,meshbasic_vert:e2,meshbasic_frag:n2,meshlambert_vert:i2,meshlambert_frag:a2,meshmatcap_vert:r2,meshmatcap_frag:s2,meshnormal_vert:o2,meshnormal_frag:l2,meshphong_vert:c2,meshphong_frag:u2,meshphysical_vert:f2,meshphysical_frag:h2,meshtoon_vert:d2,meshtoon_frag:p2,points_vert:m2,points_frag:g2,shadow_vert:_2,shadow_frag:v2,sprite_vert:x2,sprite_frag:S2},Dt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},kn={basic:{uniforms:zn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:zn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Be(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:zn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:zn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:zn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Be(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:zn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:zn([Dt.points,Dt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:zn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:zn([Dt.common,Dt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:zn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:zn([Dt.sprite,Dt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:zn([Dt.common,Dt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:zn([Dt.lights,Dt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};kn.physical={uniforms:zn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Rc={r:0,b:0,g:0},_r=new ha,y2=new on;function M2(s,t,i,r,l,c,h){const d=new Be(0);let m=c===!0?0:1,p,g,_=null,x=0,M=null;function b(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function R(U){let w=!1;const z=b(U);z===null?v(d,m):z&&z.isColor&&(v(z,1),w=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,w){const z=b(w);z&&(z.isCubeTexture||z.mapping===Wc)?(g===void 0&&(g=new Ti(new jo(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:Ps(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),_r.copy(w.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(y2.makeRotationFromEuler(_r)),g.material.toneMapped=Te.getTransfer(z.colorSpace)!==ze,(_!==z||x!==z.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=z,x=z.version,M=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Ti(new Yc(2,2),new da({name:"BackgroundMaterial",uniforms:Ps(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Te.getTransfer(z.colorSpace)!==ze,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||x!==z.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=z,x=z.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,w){U.getRGB(Rc,Y_(s)),r.buffers.color.setClear(Rc.r,Rc.g,Rc.b,w,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),m=w,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:R,addToRenderList:y,dispose:O}}function E2(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(D,I,st,lt,ft){let ht=!1;const B=_(lt,st,I);c!==B&&(c=B,p(c.object)),ht=M(D,lt,st,ft),ht&&b(D,lt,st,ft),ft!==null&&t.update(ft,s.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,w(D,I,st,lt),ft!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function _(D,I,st){const lt=st.wireframe===!0;let ft=r[D.id];ft===void 0&&(ft={},r[D.id]=ft);let ht=ft[I.id];ht===void 0&&(ht={},ft[I.id]=ht);let B=ht[lt];return B===void 0&&(B=x(m()),ht[lt]=B),B}function x(D){const I=[],st=[],lt=[];for(let ft=0;ft<i;ft++)I[ft]=0,st[ft]=0,lt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:st,attributeDivisors:lt,object:D,attributes:{},index:null}}function M(D,I,st,lt){const ft=c.attributes,ht=I.attributes;let B=0;const K=st.getAttributes();for(const Y in K)if(K[Y].location>=0){const L=ft[Y];let $=ht[Y];if($===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),L===void 0||L.attribute!==$||$&&L.data!==$.data)return!0;B++}return c.attributesNum!==B||c.index!==lt}function b(D,I,st,lt){const ft={},ht=I.attributes;let B=0;const K=st.getAttributes();for(const Y in K)if(K[Y].location>=0){let L=ht[Y];L===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(L=D.instanceColor));const $={};$.attribute=L,L&&L.data&&($.data=L.data),ft[Y]=$,B++}c.attributes=ft,c.attributesNum=B,c.index=lt}function R(){const D=c.newAttributes;for(let I=0,st=D.length;I<st;I++)D[I]=0}function y(D){v(D,0)}function v(D,I){const st=c.newAttributes,lt=c.enabledAttributes,ft=c.attributeDivisors;st[D]=1,lt[D]===0&&(s.enableVertexAttribArray(D),lt[D]=1),ft[D]!==I&&(s.vertexAttribDivisor(D,I),ft[D]=I)}function O(){const D=c.newAttributes,I=c.enabledAttributes;for(let st=0,lt=I.length;st<lt;st++)I[st]!==D[st]&&(s.disableVertexAttribArray(st),I[st]=0)}function U(D,I,st,lt,ft,ht,B){B===!0?s.vertexAttribIPointer(D,I,st,ft,ht):s.vertexAttribPointer(D,I,st,lt,ft,ht)}function w(D,I,st,lt){R();const ft=lt.attributes,ht=st.getAttributes(),B=I.defaultAttributeValues;for(const K in ht){const Y=ht[K];if(Y.location>=0){let xt=ft[K];if(xt===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),xt!==void 0){const L=xt.normalized,$=xt.itemSize,vt=t.get(xt);if(vt===void 0)continue;const St=vt.buffer,wt=vt.type,nt=vt.bytesPerElement,dt=wt===s.INT||wt===s.UNSIGNED_INT||xt.gpuType===Rd;if(xt.isInterleavedBufferAttribute){const yt=xt.data,Pt=yt.stride,Yt=xt.offset;if(yt.isInstancedInterleavedBuffer){for(let ie=0;ie<Y.locationSize;ie++)v(Y.location+ie,yt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ie=0;ie<Y.locationSize;ie++)y(Y.location+ie);s.bindBuffer(s.ARRAY_BUFFER,St);for(let ie=0;ie<Y.locationSize;ie++)U(Y.location+ie,$/Y.locationSize,wt,L,Pt*nt,(Yt+$/Y.locationSize*ie)*nt,dt)}else{if(xt.isInstancedBufferAttribute){for(let yt=0;yt<Y.locationSize;yt++)v(Y.location+yt,xt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let yt=0;yt<Y.locationSize;yt++)y(Y.location+yt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let yt=0;yt<Y.locationSize;yt++)U(Y.location+yt,$/Y.locationSize,wt,L,$*nt,$/Y.locationSize*yt*nt,dt)}}else if(B!==void 0){const L=B[K];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(Y.location,L);break;case 3:s.vertexAttrib3fv(Y.location,L);break;case 4:s.vertexAttrib4fv(Y.location,L);break;default:s.vertexAttrib1fv(Y.location,L)}}}}O()}function z(){k();for(const D in r){const I=r[D];for(const st in I){const lt=I[st];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete I[st]}delete r[D]}}function H(D){if(r[D.id]===void 0)return;const I=r[D.id];for(const st in I){const lt=I[st];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete I[st]}delete r[D.id]}function F(D){for(const I in r){const st=r[I];if(st[D.id]===void 0)continue;const lt=st[D.id];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete st[D.id]}}function k(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:y,disableUnusedAttributes:O}}function T2(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b];i.update(M,r,1)}function m(p,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,_);let b=0;for(let R=0;R<_;R++)b+=g[R]*x[R];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function b2(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Ei&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const k=F===Wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==fa&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==la&&!k)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=b>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:z,maxSamples:H}}function A2(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new xr,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||l;return l=x,r=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const b=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!l||b===null||b.length===0||c&&!y)c?g(null):p();else{const O=c?0:r,U=O*4;let w=v.clippingState||null;m.value=w,w=g(b,x,U,M);for(let z=0;z!==U;++z)w[z]=i[z];v.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,x,M,b){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const v=M+R*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,w=M;U!==R;++U,w+=4)h.copy(_[U]).applyMatrix4(O,d),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function R2(s){let t=new WeakMap;function i(h,d){return d===qh?h.mapping=Ls:d===Yh&&(h.mapping=Ns),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===qh||d===Yh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new EM(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const As=4,Qg=[.125,.215,.35,.446,.526,.582],Mr=20,wh=new OM,Jg=new Be;let Ch=null,Dh=0,Uh=0,Lh=!1;const Sr=(1+Math.sqrt(5))/2,bs=1/Sr,$g=[new Z(-Sr,bs,0),new Z(Sr,bs,0),new Z(-bs,0,Sr),new Z(bs,0,Sr),new Z(0,Sr,-bs),new Z(0,Sr,bs),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],w2=new Z;class t_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=w2}=c;Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ch,Dh,Uh),this._renderer.xr.enabled=Lh,t.scissorTest=!1,wc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ls||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Wo,format:Ei,colorSpace:Os,depthBuffer:!1},l=e_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C2(c)),this._blurMaterial=D2(c,t,i)}return l}_compileMaterial(t){const i=new Ti(this._lodPlanes[0],t);this._renderer.compile(i,wh)}_sceneToCubeUV(t,i,r,l,c){const m=new fi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(Jg),_.toneMapping=Ya,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const R=new Pd({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),y=new Ti(new jo,R);let v=!1;const O=t.background;O?O.isColor&&(R.color.copy(O),t.background=null,v=!0):(R.color.copy(Jg),v=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const z=this._cubeSize;wc(l,w*z,U>2?z:0,z,z),_.setRenderTarget(l),v&&_.render(y,m),_.render(t,m)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=O}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ls||t.mapping===Ns;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ti(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;wc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,wh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=$g[(l-c-1)%$g.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ti(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Mr-1),R=c/b,y=isFinite(c)?1+Math.floor(g*R):Mr;y>Mr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const v=[];let O=0;for(let F=0;F<Mr;++F){const k=F/R,C=Math.exp(-k*k/2);v.push(C),F===0?O+=C:F<y&&(O+=2*C)}for(let F=0;F<v.length;F++)v[F]=v[F]/O;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-r;const w=this._sizeLods[l],z=3*w*(l>U-As?l-U+As:0),H=4*(this._cubeSize-w);wc(i,z,H,3*w,2*w),m.setRenderTarget(i),m.render(_,wh)}}function C2(s){const t=[],i=[],r=[];let l=s;const c=s-As+1+Qg.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-As?m=Qg[h-s+As-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,b=6,R=3,y=2,v=1,O=new Float32Array(R*b*M),U=new Float32Array(y*b*M),w=new Float32Array(v*b*M);for(let H=0;H<M;H++){const F=H%3*2/3-1,k=H>2?0:-1,C=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];O.set(C,R*b*H),U.set(x,y*b*H);const D=[H,H,H,H,H,H];w.set(D,v*b*H)}const z=new Ri;z.setAttribute("position",new Ai(O,R)),z.setAttribute("uv",new Ai(U,y)),z.setAttribute("faceIndex",new Ai(w,v)),t.push(z),l>As&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function e_(s,t,i){const r=new wr(s,t,i);return r.texture.mapping=Wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function D2(s,t,i){const r=new Float32Array(Mr),l=new Z(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function n_(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function i_(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function Id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function U2(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===qh||m===Yh,g=m===Ls||m===Ns;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new t_(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new t_(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function L2(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Cs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function N2(s,t,i,r){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,b=_.attributes.position;let R=0;if(M!==null){const O=M.array;R=M.version;for(let U=0,w=O.length;U<w;U+=3){const z=O[U+0],H=O[U+1],F=O[U+2];x.push(z,H,H,F,F,z)}}else if(b!==void 0){const O=b.array;R=b.version;for(let U=0,w=O.length/3-1;U<w;U+=3){const z=U+0,H=U+1,F=U+2;x.push(z,H,H,F,F,z)}}else return;const y=new(G_(x)?q_:W_)(x,1);y.version=R;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function O2(s,t,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*h),i.update(M,r,1)}function p(x,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,x*h,b),i.update(M,r,b))}function g(x,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,r,1)}function _(x,M,b,R){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/h,M[v],R[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,R,0,b);let v=0;for(let O=0;O<b;O++)v+=M[O]*R[O];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function P2(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function z2(s,t,i){const r=new WeakMap,l=new ke;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let D=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),R===!0&&(w=2),y===!0&&(w=3);let z=d.attributes.position.count*w,H=1;z>t.maxTextureSize&&(H=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const F=new Float32Array(z*H*4*_),k=new V_(F,z,H,_);k.type=la,k.needsUpdate=!0;const C=w*4;for(let I=0;I<_;I++){const st=v[I],lt=O[I],ft=U[I],ht=z*H*4*I;for(let B=0;B<st.count;B++){const K=B*C;b===!0&&(l.fromBufferAttribute(st,B),F[ht+K+0]=l.x,F[ht+K+1]=l.y,F[ht+K+2]=l.z,F[ht+K+3]=0),R===!0&&(l.fromBufferAttribute(lt,B),F[ht+K+4]=l.x,F[ht+K+5]=l.y,F[ht+K+6]=l.z,F[ht+K+7]=0),y===!0&&(l.fromBufferAttribute(ft,B),F[ht+K+8]=l.x,F[ht+K+9]=l.y,F[ht+K+10]=l.z,F[ht+K+11]=ft.itemSize===4?l.w:1)}}x={count:_,texture:k,size:new be(z,H)},r.set(d,x),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function B2(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const $_=new Xn,a_=new Q_(1,1),tv=new V_,ev=new sM,nv=new Z_,r_=[],s_=[],o_=new Float32Array(16),l_=new Float32Array(9),c_=new Float32Array(4);function Bs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=r_[l];if(c===void 0&&(c=new Float32Array(l),r_[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function hn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function dn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function jc(s,t){let i=s_[t];i===void 0&&(i=new Int32Array(t),s_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function I2(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function F2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2fv(this.addr,t),dn(i,t)}}function H2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;s.uniform3fv(this.addr,t),dn(i,t)}}function G2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4fv(this.addr,t),dn(i,t)}}function V2(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;c_.set(r),s.uniformMatrix2fv(this.addr,!1,c_),dn(i,r)}}function k2(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;l_.set(r),s.uniformMatrix3fv(this.addr,!1,l_),dn(i,r)}}function X2(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;o_.set(r),s.uniformMatrix4fv(this.addr,!1,o_),dn(i,r)}}function W2(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function q2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2iv(this.addr,t),dn(i,t)}}function Y2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3iv(this.addr,t),dn(i,t)}}function j2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4iv(this.addr,t),dn(i,t)}}function Z2(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function K2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2uiv(this.addr,t),dn(i,t)}}function Q2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3uiv(this.addr,t),dn(i,t)}}function J2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4uiv(this.addr,t),dn(i,t)}}function $2(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(a_.compareFunction=H_,c=a_):c=$_,i.setTexture2D(t||c,l)}function tT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||ev,l)}function eT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||nv,l)}function nT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||tv,l)}function iT(s){switch(s){case 5126:return I2;case 35664:return F2;case 35665:return H2;case 35666:return G2;case 35674:return V2;case 35675:return k2;case 35676:return X2;case 5124:case 35670:return W2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return j2;case 5125:return Z2;case 36294:return K2;case 36295:return Q2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return nT}}function aT(s,t){s.uniform1fv(this.addr,t)}function rT(s,t){const i=Bs(t,this.size,2);s.uniform2fv(this.addr,i)}function sT(s,t){const i=Bs(t,this.size,3);s.uniform3fv(this.addr,i)}function oT(s,t){const i=Bs(t,this.size,4);s.uniform4fv(this.addr,i)}function lT(s,t){const i=Bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function cT(s,t){const i=Bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function uT(s,t){const i=Bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function fT(s,t){s.uniform1iv(this.addr,t)}function hT(s,t){s.uniform2iv(this.addr,t)}function dT(s,t){s.uniform3iv(this.addr,t)}function pT(s,t){s.uniform4iv(this.addr,t)}function mT(s,t){s.uniform1uiv(this.addr,t)}function gT(s,t){s.uniform2uiv(this.addr,t)}function _T(s,t){s.uniform3uiv(this.addr,t)}function vT(s,t){s.uniform4uiv(this.addr,t)}function xT(s,t,i){const r=this.cache,l=t.length,c=jc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||$_,c[h])}function ST(s,t,i){const r=this.cache,l=t.length,c=jc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||ev,c[h])}function yT(s,t,i){const r=this.cache,l=t.length,c=jc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||nv,c[h])}function MT(s,t,i){const r=this.cache,l=t.length,c=jc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||tv,c[h])}function ET(s){switch(s){case 5126:return aT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return fT;case 35667:case 35671:return hT;case 35668:case 35672:return dT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return _T;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return MT}}class TT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=iT(i.type)}}class bT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ET(i.type)}}class AT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function u_(s,t){s.seq.push(t),s.map[t.id]=t}function RT(s,t,i){const r=s.name,l=r.length;for(Nh.lastIndex=0;;){const c=Nh.exec(r),h=Nh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){u_(i,p===void 0?new TT(d,s,t):new bT(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new AT(d),u_(i,_)),i=_}}}class Ic{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);RT(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function f_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const wT=37297;let CT=0;function DT(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const h_=new ce;function UT(s){Te._getMatrix(h_,Te.workingColorSpace,s);const t=`mat3( ${h_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(s)){case Gc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function d_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+DT(s.getShaderSource(t),d)}else return c}function LT(s,t){const i=UT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function NT(s,t){let i;switch(t){case _y:i="Linear";break;case vy:i="Reinhard";break;case xy:i="Cineon";break;case Sy:i="ACESFilmic";break;case My:i="AgX";break;case Ey:i="Neutral";break;case yy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new Z;function OT(){Te.getLuminanceCoefficients(Cc);const s=Cc.x.toFixed(4),t=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function zT(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function BT(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Io(s){return s!==""}function p_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function m_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(s){return s.replace(IT,HT)}const FT=new Map;function HT(s,t){let i=he[t];if(i===void 0){const r=FT.get(t);if(r!==void 0)i=he[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Td(i)}const GT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g_(s){return s.replace(GT,VT)}function VT(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function __(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kT(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===C_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===KS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function XT(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ls:case Ns:t="ENVMAP_TYPE_CUBE";break;case Wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function WT(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function qT(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case D_:t="ENVMAP_BLENDING_MULTIPLY";break;case my:t="ENVMAP_BLENDING_MIX";break;case gy:t="ENVMAP_BLENDING_ADD";break}return t}function YT(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function jT(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=kT(i),p=XT(i),g=WT(i),_=qT(i),x=YT(i),M=PT(i),b=zT(c),R=l.createProgram();let y,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),v.length>0&&(v+=`
`)):(y=[__(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),v=[__(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?he.tonemapping_pars_fragment:"",i.toneMapping!==Ya?NT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,LT("linearToOutputTexel",i.outputColorSpace),OT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),h=Td(h),h=p_(h,i),h=m_(h,i),d=Td(d),d=p_(d,i),d=m_(d,i),h=g_(h),d=g_(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=O+y+h,w=O+v+d,z=f_(l,l.VERTEX_SHADER,U),H=f_(l,l.FRAGMENT_SHADER,w);l.attachShader(R,z),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(I){if(s.debug.checkShaderErrors){const st=l.getProgramInfoLog(R)||"",lt=l.getShaderInfoLog(z)||"",ft=l.getShaderInfoLog(H)||"",ht=st.trim(),B=lt.trim(),K=ft.trim();let Y=!0,xt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,z,H);else{const L=d_(l,z,"vertex"),$=d_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ht+`
`+L+`
`+$)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(B===""||K==="")&&(xt=!1);xt&&(I.diagnostics={runnable:Y,programLog:ht,vertexShader:{log:B,prefix:y},fragmentShader:{log:K,prefix:v}})}l.deleteShader(z),l.deleteShader(H),k=new Ic(l,R),C=BT(l,R)}let k;this.getUniforms=function(){return k===void 0&&F(this),k};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(R,wT)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=CT++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=H,this}let ZT=0;class KT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new QT(t),i.set(t,r)),r}}class QT{constructor(t){this.id=ZT++,this.code=t,this.usedTimes=0}}function JT(s,t,i,r,l,c,h){const d=new k_,m=new KT,p=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,D,I,st,lt){const ft=st.fog,ht=lt.geometry,B=C.isMeshStandardMaterial?st.environment:null,K=(C.isMeshStandardMaterial?i:t).get(C.envMap||B),Y=K&&K.mapping===Wc?K.image.height:null,xt=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const L=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,$=L!==void 0?L.length:0;let vt=0;ht.morphAttributes.position!==void 0&&(vt=1),ht.morphAttributes.normal!==void 0&&(vt=2),ht.morphAttributes.color!==void 0&&(vt=3);let St,wt,nt,dt;if(xt){const ye=kn[xt];St=ye.vertexShader,wt=ye.fragmentShader}else St=C.vertexShader,wt=C.fragmentShader,m.update(C),nt=m.getVertexShaderID(C),dt=m.getFragmentShaderID(C);const yt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Yt=lt.isInstancedMesh===!0,ie=lt.isBatchedMesh===!0,He=!!C.map,me=!!C.matcap,G=!!K,Re=!!C.aoMap,Qt=!!C.lightMap,Se=!!C.bumpMap,Ft=!!C.normalMap,Ge=!!C.displacementMap,Ht=!!C.emissiveMap,se=!!C.metalnessMap,Ye=!!C.roughnessMap,je=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,tt=C.iridescence>0,ct=C.sheen>0,_t=C.transmission>0,ot=je&&!!C.anisotropyMap,zt=N&&!!C.clearcoatMap,At=N&&!!C.clearcoatNormalMap,Xt=N&&!!C.clearcoatRoughnessMap,qt=tt&&!!C.iridescenceMap,Mt=tt&&!!C.iridescenceThicknessMap,Nt=ct&&!!C.sheenColorMap,Zt=ct&&!!C.sheenRoughnessMap,kt=!!C.specularMap,Ct=!!C.specularColorMap,re=!!C.specularIntensityMap,X=_t&&!!C.transmissionMap,bt=_t&&!!C.thicknessMap,Rt=!!C.gradientMap,Bt=!!C.alphaMap,Et=C.alphaTest>0,gt=!!C.alphaHash,Vt=!!C.extensions;let ae=Ya;C.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ae=s.toneMapping);const we={shaderID:xt,shaderType:C.type,shaderName:C.name,vertexShader:St,fragmentShader:wt,defines:C.defines,customVertexShaderID:nt,customFragmentShaderID:dt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:ie,batchingColor:ie&&lt._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&lt.instanceColor!==null,instancingMorph:Yt&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Os,alphaToCoverage:!!C.alphaToCoverage,map:He,matcap:me,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:Y,aoMap:Re,lightMap:Qt,bumpMap:Se,normalMap:Ft,displacementMap:x&&Ge,emissiveMap:Ht,normalMapObjectSpace:Ft&&C.normalMapType===wy,normalMapTangentSpace:Ft&&C.normalMapType===Ry,metalnessMap:se,roughnessMap:Ye,anisotropy:je,anisotropyMap:ot,clearcoat:N,clearcoatMap:zt,clearcoatNormalMap:At,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:Mt,sheen:ct,sheenColorMap:Nt,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:Ct,specularIntensityMap:re,transmission:_t,transmissionMap:X,thicknessMap:bt,gradientMap:Rt,opaque:C.transparent===!1&&C.blending===Rs&&C.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:gt,combine:C.combine,mapUv:He&&R(C.map.channel),aoMapUv:Re&&R(C.aoMap.channel),lightMapUv:Qt&&R(C.lightMap.channel),bumpMapUv:Se&&R(C.bumpMap.channel),normalMapUv:Ft&&R(C.normalMap.channel),displacementMapUv:Ge&&R(C.displacementMap.channel),emissiveMapUv:Ht&&R(C.emissiveMap.channel),metalnessMapUv:se&&R(C.metalnessMap.channel),roughnessMapUv:Ye&&R(C.roughnessMap.channel),anisotropyMapUv:ot&&R(C.anisotropyMap.channel),clearcoatMapUv:zt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:At&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(C.sheenRoughnessMap.channel),specularMapUv:kt&&R(C.specularMap.channel),specularColorMapUv:Ct&&R(C.specularColorMap.channel),specularIntensityMapUv:re&&R(C.specularIntensityMap.channel),transmissionMapUv:X&&R(C.transmissionMap.channel),thicknessMapUv:bt&&R(C.thicknessMap.channel),alphaMapUv:Bt&&R(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Ft||je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ht.attributes.uv&&(He||Bt),fog:!!ft,useFog:C.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Pt,skinning:lt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:He&&C.map.isVideoTexture===!0&&Te.getTransfer(C.map.colorSpace)===ze,decodeVideoTextureEmissive:Ht&&C.emissiveMap.isVideoTexture===!0&&Te.getTransfer(C.emissiveMap.colorSpace)===ze,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===oa,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Vt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&C.extensions.multiDraw===!0||ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function v(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)D.push(I),D.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(O(D,C),U(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function O(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function U(C,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function w(C){const D=b[C.type];let I;if(D){const st=kn[D];I=zd.clone(st.uniforms)}else I=C.uniforms;return I}function z(C,D){let I;for(let st=0,lt=g.length;st<lt;st++){const ft=g[st];if(ft.cacheKey===D){I=ft,++I.usedTimes;break}}return I===void 0&&(I=new jT(s,D,C,c),g.push(I)),I}function H(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),C.destroy()}}function F(C){m.remove(C)}function k(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:w,acquireProgram:z,releaseProgram:H,releaseShaderCache:F,programs:g,dispose:k}}function $T(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function tb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function v_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function x_(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(_,x,M,b,R,y){let v=s[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:b,renderOrder:_.renderOrder,z:R,group:y},s[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=R,v.group=y),t++,v}function d(_,x,M,b,R,y){const v=h(_,x,M,b,R,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,x,M,b,R,y){const v=h(_,x,M,b,R,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||tb),r.length>1&&r.sort(x||v_),l.length>1&&l.sort(x||v_)}function g(){for(let _=t,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function eb(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new x_,s.set(r,[h])):l>=c.length?(h=new x_,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function nb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Be};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[t.id]=i,i}}}function ib(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let ab=0;function rb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function sb(s){const t=new nb,i=ib(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Z);const l=new Z,c=new on,h=new on;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,b=0,R=0,y=0,v=0,O=0,U=0,w=0,z=0,H=0,F=0;p.sort(rb);for(let C=0,D=p.length;C<D;C++){const I=p[C],st=I.color,lt=I.intensity,ft=I.distance,ht=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=st.r*lt,_+=st.g*lt,x+=st.b*lt;else if(I.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(I.sh.coefficients[B],lt);F++}else if(I.isDirectionalLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const K=I.shadow,Y=i.get(I);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=I.shadow.matrix,O++}r.directional[M]=B,M++}else if(I.isSpotLight){const B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(st).multiplyScalar(lt),B.distance=ft,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,r.spot[R]=B;const K=I.shadow;if(I.map&&(r.spotLightMap[z]=I.map,z++,K.updateMatrices(I),I.castShadow&&H++),r.spotLightMatrix[R]=K.matrix,I.castShadow){const Y=i.get(I);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=ht,w++}R++}else if(I.isRectAreaLight){const B=t.get(I);B.color.copy(st).multiplyScalar(lt),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=B,y++}else if(I.isPointLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const K=I.shadow,Y=i.get(I);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[b]=Y,r.pointShadowMap[b]=ht,r.pointShadowMatrix[b]=I.shadow.matrix,U++}r.point[b]=B,b++}else if(I.isHemisphereLight){const B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(lt),B.groundColor.copy(I.groundColor).multiplyScalar(lt),r.hemi[v]=B,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const k=r.hash;(k.directionalLength!==M||k.pointLength!==b||k.spotLength!==R||k.rectAreaLength!==y||k.hemiLength!==v||k.numDirectionalShadows!==O||k.numPointShadows!==U||k.numSpotShadows!==w||k.numSpotMaps!==z||k.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+z-H,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=F,k.directionalLength=M,k.pointLength=b,k.spotLength=R,k.rectAreaLength=y,k.hemiLength=v,k.numDirectionalShadows=O,k.numPointShadows=U,k.numSpotShadows=w,k.numSpotMaps=z,k.numLightProbes=F,r.version=ab++)}function m(p,g){let _=0,x=0,M=0,b=0,R=0;const y=g.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const U=p[v];if(U.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),_++}else if(U.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),h.identity(),c.copy(U.matrixWorld),c.premultiply(y),h.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(U.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const w=r.hemi[R];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:r}}function S_(s){const t=new sb(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function ob(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new S_(s),t.set(l,[d])):c>=h.length?(d=new S_(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ub(s,t,i){let r=new K_;const l=new be,c=new be,h=new ke,d=new LM({depthPacking:Ay}),m=new NM,p={},g=i.maxTextureSize,_={[ja]:Bn,[Bn]:ja,[oa]:oa},x=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:lb,fragmentShader:cb}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ri;b.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ti(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C_;let v=this.type;this.render=function(H,F,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const C=s.getRenderTarget(),D=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),st=s.state;st.setBlending(qa),st.buffers.depth.getReversed()?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const lt=v!==sa&&this.type===sa,ft=v===sa&&this.type!==sa;for(let ht=0,B=H.length;ht<B;ht++){const K=H[ht],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/xt.x),l.x=c.x*xt.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/xt.y),l.y=c.y*xt.y,Y.mapSize.y=c.y)),Y.map===null||lt===!0||ft===!0){const $=this.type!==sa?{minFilter:bi,magFilter:bi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new wr(l.x,l.y,$),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const L=Y.getViewportCount();for(let $=0;$<L;$++){const vt=Y.getViewport($);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),st.viewport(h),Y.updateMatrices(K,$),r=Y.getFrustum(),w(F,k,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===sa&&O(Y,k),Y.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(C,D,I)};function O(H,F){const k=t.update(R);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new wr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(F,null,k,x,R,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(F,null,k,M,R,null)}function U(H,F,k,C){let D=null;const I=k.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(I!==void 0)D=I;else if(D=k.isPointLight===!0?m:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const st=D.uuid,lt=F.uuid;let ft=p[st];ft===void 0&&(ft={},p[st]=ft);let ht=ft[lt];ht===void 0&&(ht=D.clone(),ft[lt]=ht,F.addEventListener("dispose",z)),D=ht}if(D.visible=F.visible,D.wireframe=F.wireframe,C===sa?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:_[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,k.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const st=s.properties.get(D);st.light=k}return D}function w(H,F,k,C,D){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&D===sa)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,H.matrixWorld);const lt=t.update(H),ft=H.material;if(Array.isArray(ft)){const ht=lt.groups;for(let B=0,K=ht.length;B<K;B++){const Y=ht[B],xt=ft[Y.materialIndex];if(xt&&xt.visible){const L=U(H,xt,C,D);H.onBeforeShadow(s,H,F,k,lt,L,Y),s.renderBufferDirect(k,null,lt,L,H,Y),H.onAfterShadow(s,H,F,k,lt,L,Y)}}}else if(ft.visible){const ht=U(H,ft,C,D);H.onBeforeShadow(s,H,F,k,lt,ht,null),s.renderBufferDirect(k,null,lt,ht,H,null),H.onAfterShadow(s,H,F,k,lt,ht,null)}}const st=H.children;for(let lt=0,ft=st.length;lt<ft;lt++)w(st[lt],F,k,C,D)}function z(H){H.target.removeEventListener("dispose",z);for(const k in p){const C=p[k],D=H.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const fb={[Fh]:Hh,[Gh]:Xh,[Vh]:Wh,[Us]:kh,[Hh]:Fh,[Xh]:Gh,[Wh]:Vh,[kh]:Us};function hb(s,t){function i(){let X=!1;const bt=new ke;let Rt=null;const Bt=new ke(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!X&&(s.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){X=Et},setClear:function(Et,gt,Vt,ae,we){we===!0&&(Et*=ae,gt*=ae,Vt*=ae),bt.set(Et,gt,Vt,ae),Bt.equals(bt)===!1&&(s.clearColor(Et,gt,Vt,ae),Bt.copy(bt))},reset:function(){X=!1,Rt=null,Bt.set(-1,0,0,0)}}}function r(){let X=!1,bt=!1,Rt=null,Bt=null,Et=null;return{setReversed:function(gt){if(bt!==gt){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),bt=gt;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return bt},setTest:function(gt){gt?yt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(gt){Rt!==gt&&!X&&(s.depthMask(gt),Rt=gt)},setFunc:function(gt){if(bt&&(gt=fb[gt]),Bt!==gt){switch(gt){case Fh:s.depthFunc(s.NEVER);break;case Hh:s.depthFunc(s.ALWAYS);break;case Gh:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case Vh:s.depthFunc(s.EQUAL);break;case kh:s.depthFunc(s.GEQUAL);break;case Xh:s.depthFunc(s.GREATER);break;case Wh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Bt=gt}},setLocked:function(gt){X=gt},setClear:function(gt){Et!==gt&&(bt&&(gt=1-gt),s.clearDepth(gt),Et=gt)},reset:function(){X=!1,Rt=null,Bt=null,Et=null,bt=!1}}}function l(){let X=!1,bt=null,Rt=null,Bt=null,Et=null,gt=null,Vt=null,ae=null,we=null;return{setTest:function(ye){X||(ye?yt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(ye){bt!==ye&&!X&&(s.stencilMask(ye),bt=ye)},setFunc:function(ye,di,ln){(Rt!==ye||Bt!==di||Et!==ln)&&(s.stencilFunc(ye,di,ln),Rt=ye,Bt=di,Et=ln)},setOp:function(ye,di,ln){(gt!==ye||Vt!==di||ae!==ln)&&(s.stencilOp(ye,di,ln),gt=ye,Vt=di,ae=ln)},setLocked:function(ye){X=ye},setClear:function(ye){we!==ye&&(s.clearStencil(ye),we=ye)},reset:function(){X=!1,bt=null,Rt=null,Bt=null,Et=null,gt=null,Vt=null,ae=null,we=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,M=[],b=null,R=!1,y=null,v=null,O=null,U=null,w=null,z=null,H=null,F=new Be(0,0,0),k=0,C=!1,D=null,I=null,st=null,lt=null,ft=null;const ht=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=K>=2);let xt=null,L={};const $=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),St=new ke().fromArray($),wt=new ke().fromArray(vt);function nt(X,bt,Rt,Bt){const Et=new Uint8Array(4),gt=s.createTexture();s.bindTexture(X,gt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Rt;Vt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,Bt,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(bt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return gt}const dt={};dt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),yt(s.DEPTH_TEST),h.setFunc(Us),Se(!1),Ft(Tg),yt(s.CULL_FACE),Re(qa);function yt(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Pt(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Yt(X,bt){return _[X]!==bt?(s.bindFramebuffer(X,bt),_[X]=bt,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=bt),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function ie(X,bt){let Rt=M,Bt=!1;if(X){Rt=x.get(bt),Rt===void 0&&(Rt=[],x.set(bt,Rt));const Et=X.textures;if(Rt.length!==Et.length||Rt[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Vt=Et.length;gt<Vt;gt++)Rt[gt]=s.COLOR_ATTACHMENT0+gt;Rt.length=Et.length,Bt=!0}}else Rt[0]!==s.BACK&&(Rt[0]=s.BACK,Bt=!0);Bt&&s.drawBuffers(Rt)}function He(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const me={[yr]:s.FUNC_ADD,[JS]:s.FUNC_SUBTRACT,[$S]:s.FUNC_REVERSE_SUBTRACT};me[ty]=s.MIN,me[ey]=s.MAX;const G={[ny]:s.ZERO,[iy]:s.ONE,[ay]:s.SRC_COLOR,[Bh]:s.SRC_ALPHA,[uy]:s.SRC_ALPHA_SATURATE,[ly]:s.DST_COLOR,[sy]:s.DST_ALPHA,[ry]:s.ONE_MINUS_SRC_COLOR,[Ih]:s.ONE_MINUS_SRC_ALPHA,[cy]:s.ONE_MINUS_DST_COLOR,[oy]:s.ONE_MINUS_DST_ALPHA,[fy]:s.CONSTANT_COLOR,[hy]:s.ONE_MINUS_CONSTANT_COLOR,[dy]:s.CONSTANT_ALPHA,[py]:s.ONE_MINUS_CONSTANT_ALPHA};function Re(X,bt,Rt,Bt,Et,gt,Vt,ae,we,ye){if(X===qa){R===!0&&(Pt(s.BLEND),R=!1);return}if(R===!1&&(yt(s.BLEND),R=!0),X!==QS){if(X!==y||ye!==C){if((v!==yr||w!==yr)&&(s.blendEquation(s.FUNC_ADD),v=yr,w=yr),ye)switch(X){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bg:s.blendFunc(s.ONE,s.ONE);break;case Ag:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ag:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}O=null,U=null,z=null,H=null,F.set(0,0,0),k=0,y=X,C=ye}return}Et=Et||bt,gt=gt||Rt,Vt=Vt||Bt,(bt!==v||Et!==w)&&(s.blendEquationSeparate(me[bt],me[Et]),v=bt,w=Et),(Rt!==O||Bt!==U||gt!==z||Vt!==H)&&(s.blendFuncSeparate(G[Rt],G[Bt],G[gt],G[Vt]),O=Rt,U=Bt,z=gt,H=Vt),(ae.equals(F)===!1||we!==k)&&(s.blendColor(ae.r,ae.g,ae.b,we),F.copy(ae),k=we),y=X,C=!1}function Qt(X,bt){X.side===oa?Pt(s.CULL_FACE):yt(s.CULL_FACE);let Rt=X.side===Bn;bt&&(Rt=!Rt),Se(Rt),X.blending===Rs&&X.transparent===!1?Re(qa):Re(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ht(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Se(X){D!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),D=X)}function Ft(X){X!==jS?(yt(s.CULL_FACE),X!==I&&(X===Tg?s.cullFace(s.BACK):X===ZS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),I=X}function Ge(X){X!==st&&(B&&s.lineWidth(X),st=X)}function Ht(X,bt,Rt){X?(yt(s.POLYGON_OFFSET_FILL),(lt!==bt||ft!==Rt)&&(s.polygonOffset(bt,Rt),lt=bt,ft=Rt)):Pt(s.POLYGON_OFFSET_FILL)}function se(X){X?yt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function Ye(X){X===void 0&&(X=s.TEXTURE0+ht-1),xt!==X&&(s.activeTexture(X),xt=X)}function je(X,bt,Rt){Rt===void 0&&(xt===null?Rt=s.TEXTURE0+ht-1:Rt=xt);let Bt=L[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},L[Rt]=Bt),(Bt.type!==X||Bt.texture!==bt)&&(xt!==Rt&&(s.activeTexture(Rt),xt=Rt),s.bindTexture(X,bt||dt[X]),Bt.type=X,Bt.texture=bt)}function N(){const X=L[xt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(X){St.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Zt(X){wt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),wt.copy(X))}function kt(X,bt){let Rt=p.get(bt);Rt===void 0&&(Rt=new WeakMap,p.set(bt,Rt));let Bt=Rt.get(X);Bt===void 0&&(Bt=s.getUniformBlockIndex(bt,X.name),Rt.set(X,Bt))}function Ct(X,bt){const Bt=p.get(bt).get(X);m.get(bt)!==Bt&&(s.uniformBlockBinding(bt,Bt,X.__bindingPointIndex),m.set(bt,Bt))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},xt=null,L={},_={},x=new WeakMap,M=[],b=null,R=!1,y=null,v=null,O=null,U=null,w=null,z=null,H=null,F=new Be(0,0,0),k=0,C=!1,D=null,I=null,st=null,lt=null,ft=null,St.set(0,0,s.canvas.width,s.canvas.height),wt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:yt,disable:Pt,bindFramebuffer:Yt,drawBuffers:ie,useProgram:He,setBlending:Re,setMaterial:Qt,setFlipSided:Se,setCullFace:Ft,setLineWidth:Ge,setPolygonOffset:Ht,setScissorTest:se,activeTexture:Ye,bindTexture:je,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:qt,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Ct,texStorage2D:At,texStorage3D:Xt,texSubImage2D:ct,texSubImage3D:_t,compressedTexSubImage2D:ot,compressedTexSubImage3D:zt,scissor:Nt,viewport:Zt,reset:re}}function db(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new be,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return M?new OffscreenCanvas(N,E):kc("canvas")}function R(N,E,tt){let ct=1;const _t=je(N);if((_t.width>tt||_t.height>tt)&&(ct=tt/Math.max(_t.width,_t.height)),ct<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ot=Math.floor(ct*_t.width),zt=Math.floor(ct*_t.height);_===void 0&&(_=b(ot,zt));const At=E?b(ot,zt):_;return At.width=ot,At.height=zt,At.getContext("2d").drawImage(N,0,0,ot,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ot+"x"+zt+")."),At}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(N,E,tt,ct,_t=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ot=E;if(E===s.RED&&(tt===s.FLOAT&&(ot=s.R32F),tt===s.HALF_FLOAT&&(ot=s.R16F),tt===s.UNSIGNED_BYTE&&(ot=s.R8)),E===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.R8UI),tt===s.UNSIGNED_SHORT&&(ot=s.R16UI),tt===s.UNSIGNED_INT&&(ot=s.R32UI),tt===s.BYTE&&(ot=s.R8I),tt===s.SHORT&&(ot=s.R16I),tt===s.INT&&(ot=s.R32I)),E===s.RG&&(tt===s.FLOAT&&(ot=s.RG32F),tt===s.HALF_FLOAT&&(ot=s.RG16F),tt===s.UNSIGNED_BYTE&&(ot=s.RG8)),E===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RG16UI),tt===s.UNSIGNED_INT&&(ot=s.RG32UI),tt===s.BYTE&&(ot=s.RG8I),tt===s.SHORT&&(ot=s.RG16I),tt===s.INT&&(ot=s.RG32I)),E===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RGB16UI),tt===s.UNSIGNED_INT&&(ot=s.RGB32UI),tt===s.BYTE&&(ot=s.RGB8I),tt===s.SHORT&&(ot=s.RGB16I),tt===s.INT&&(ot=s.RGB32I)),E===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ot=s.RGBA32UI),tt===s.BYTE&&(ot=s.RGBA8I),tt===s.SHORT&&(ot=s.RGBA16I),tt===s.INT&&(ot=s.RGBA32I)),E===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),E===s.RGBA){const zt=_t?Gc:Te.getTransfer(ct);tt===s.FLOAT&&(ot=s.RGBA32F),tt===s.HALF_FLOAT&&(ot=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ot=zt===ze?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function w(N,E){let tt;return N?E===null||E===Rr||E===Go?tt=s.DEPTH24_STENCIL8:E===la?tt=s.DEPTH32F_STENCIL8:E===Ho&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Rr||E===Go?tt=s.DEPTH_COMPONENT24:E===la?tt=s.DEPTH_COMPONENT32F:E===Ho&&(tt=s.DEPTH_COMPONENT16),tt}function z(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==bi&&N.minFilter!==Ii?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function H(N){const E=N.target;E.removeEventListener("dispose",H),k(E),E.isVideoTexture&&g.delete(E)}function F(N){const E=N.target;E.removeEventListener("dispose",F),D(E)}function k(N){const E=r.get(N);if(E.__webglInit===void 0)return;const tt=N.source,ct=x.get(tt);if(ct){const _t=ct[E.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&C(N),Object.keys(ct).length===0&&x.delete(tt)}r.remove(N)}function C(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const tt=N.source,ct=x.get(tt);delete ct[E.__cacheKey],h.memory.textures--}function D(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let _t=0;_t<E.__webglFramebuffer[ct].length;_t++)s.deleteFramebuffer(E.__webglFramebuffer[ct][_t]);else s.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)s.deleteFramebuffer(E.__webglFramebuffer[ct]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=N.textures;for(let ct=0,_t=tt.length;ct<_t;ct++){const ot=r.get(tt[ct]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),h.memory.textures--),r.remove(tt[ct])}r.remove(N)}let I=0;function st(){I=0}function lt(){const N=I;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),I+=1,N}function ft(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ht(N,E){const tt=r.get(N);if(N.isVideoTexture&&se(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const ct=N.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(tt,N,E);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+E)}function B(N,E){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){dt(tt,N,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+E)}function K(N,E){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){dt(tt,N,E);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+E)}function Y(N,E){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){yt(tt,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+E)}const xt={[jh]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[Zh]:s.MIRRORED_REPEAT},L={[bi]:s.NEAREST,[Ty]:s.NEAREST_MIPMAP_NEAREST,[ac]:s.NEAREST_MIPMAP_LINEAR,[Ii]:s.LINEAR,[ih]:s.LINEAR_MIPMAP_NEAREST,[Tr]:s.LINEAR_MIPMAP_LINEAR},$={[Cy]:s.NEVER,[Py]:s.ALWAYS,[Dy]:s.LESS,[H_]:s.LEQUAL,[Uy]:s.EQUAL,[Oy]:s.GEQUAL,[Ly]:s.GREATER,[Ny]:s.NOTEQUAL};function vt(N,E){if(E.type===la&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ii||E.magFilter===ih||E.magFilter===ac||E.magFilter===Tr||E.minFilter===Ii||E.minFilter===ih||E.minFilter===ac||E.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,xt[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,xt[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,xt[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,L[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===bi||E.minFilter!==ac&&E.minFilter!==Tr||E.type===la&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(N,E){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",H));const ct=E.source;let _t=x.get(ct);_t===void 0&&(_t={},x.set(ct,_t));const ot=ft(E);if(ot!==N.__cacheKey){_t[ot]===void 0&&(_t[ot]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),_t[ot].usedTimes++;const zt=_t[N.__cacheKey];zt!==void 0&&(_t[N.__cacheKey].usedTimes--,zt.usedTimes===0&&C(E)),N.__cacheKey=ot,N.__webglTexture=_t[ot].texture}return tt}function wt(N,E,tt){return Math.floor(Math.floor(N/tt)/E)}function nt(N,E,tt,ct){const ot=N.updateRanges;if(ot.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,tt,ct,E.data);else{ot.sort((Mt,Nt)=>Mt.start-Nt.start);let zt=0;for(let Mt=1;Mt<ot.length;Mt++){const Nt=ot[zt],Zt=ot[Mt],kt=Nt.start+Nt.count,Ct=wt(Zt.start,E.width,4),re=wt(Nt.start,E.width,4);Zt.start<=kt+1&&Ct===re&&wt(Zt.start+Zt.count-1,E.width,4)===Ct?Nt.count=Math.max(Nt.count,Zt.start+Zt.count-Nt.start):(++zt,ot[zt]=Zt)}ot.length=zt+1;const At=s.getParameter(s.UNPACK_ROW_LENGTH),Xt=s.getParameter(s.UNPACK_SKIP_PIXELS),qt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Nt=ot.length;Mt<Nt;Mt++){const Zt=ot[Mt],kt=Math.floor(Zt.start/4),Ct=Math.ceil(Zt.count/4),re=kt%E.width,X=Math.floor(kt/E.width),bt=Ct,Rt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,re),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,re,X,bt,Rt,tt,ct,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,At),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xt),s.pixelStorei(s.UNPACK_SKIP_ROWS,qt)}}function dt(N,E,tt){let ct=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=s.TEXTURE_3D);const _t=St(N,E),ot=E.source;i.bindTexture(ct,N.__webglTexture,s.TEXTURE0+tt);const zt=r.get(ot);if(ot.version!==zt.__version||_t===!0){i.activeTexture(s.TEXTURE0+tt);const At=Te.getPrimaries(Te.workingColorSpace),Xt=E.colorSpace===Xa?null:Te.getPrimaries(E.colorSpace),qt=E.colorSpace===Xa||At===Xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Mt=R(E.image,!1,l.maxTextureSize);Mt=Ye(E,Mt);const Nt=c.convert(E.format,E.colorSpace),Zt=c.convert(E.type);let kt=U(E.internalFormat,Nt,Zt,E.colorSpace,E.isVideoTexture);vt(ct,E);let Ct;const re=E.mipmaps,X=E.isVideoTexture!==!0,bt=zt.__version===void 0||_t===!0,Rt=ot.dataReady,Bt=z(E,Mt);if(E.isDepthTexture)kt=w(E.format===ko,E.type),bt&&(X?i.texStorage2D(s.TEXTURE_2D,1,kt,Mt.width,Mt.height):i.texImage2D(s.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Nt,Zt,null));else if(E.isDataTexture)if(re.length>0){X&&bt&&i.texStorage2D(s.TEXTURE_2D,Bt,kt,re[0].width,re[0].height);for(let Et=0,gt=re.length;Et<gt;Et++)Ct=re[Et],X?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Nt,Zt,Ct.data):i.texImage2D(s.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Nt,Zt,Ct.data);E.generateMipmaps=!1}else X?(bt&&i.texStorage2D(s.TEXTURE_2D,Bt,kt,Mt.width,Mt.height),Rt&&nt(E,Mt,Nt,Zt)):i.texImage2D(s.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Nt,Zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&bt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,kt,re[0].width,re[0].height,Mt.depth);for(let Et=0,gt=re.length;Et<gt;Et++)if(Ct=re[Et],E.format!==Ei)if(Nt!==null)if(X){if(Rt)if(E.layerUpdates.size>0){const Vt=Kg(Ct.width,Ct.height,E.format,E.type);for(const ae of E.layerUpdates){const we=Ct.data.subarray(ae*Vt/Ct.data.BYTES_PER_ELEMENT,(ae+1)*Vt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,ae,Ct.width,Ct.height,1,Nt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Nt,Ct.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Et,kt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Rt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Nt,Zt,Ct.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Et,kt,Ct.width,Ct.height,Mt.depth,0,Nt,Zt,Ct.data)}else{X&&bt&&i.texStorage2D(s.TEXTURE_2D,Bt,kt,re[0].width,re[0].height);for(let Et=0,gt=re.length;Et<gt;Et++)Ct=re[Et],E.format!==Ei?Nt!==null?X?Rt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Nt,Ct.data):i.compressedTexImage2D(s.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Nt,Zt,Ct.data):i.texImage2D(s.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Nt,Zt,Ct.data)}else if(E.isDataArrayTexture)if(X){if(bt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,kt,Mt.width,Mt.height,Mt.depth),Rt)if(E.layerUpdates.size>0){const Et=Kg(Mt.width,Mt.height,E.format,E.type);for(const gt of E.layerUpdates){const Vt=Mt.data.subarray(gt*Et/Mt.data.BYTES_PER_ELEMENT,(gt+1)*Et/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,Mt.width,Mt.height,1,Nt,Zt,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Nt,Zt,Mt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,Mt.width,Mt.height,Mt.depth,0,Nt,Zt,Mt.data);else if(E.isData3DTexture)X?(bt&&i.texStorage3D(s.TEXTURE_3D,Bt,kt,Mt.width,Mt.height,Mt.depth),Rt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Nt,Zt,Mt.data)):i.texImage3D(s.TEXTURE_3D,0,kt,Mt.width,Mt.height,Mt.depth,0,Nt,Zt,Mt.data);else if(E.isFramebufferTexture){if(bt)if(X)i.texStorage2D(s.TEXTURE_2D,Bt,kt,Mt.width,Mt.height);else{let Et=Mt.width,gt=Mt.height;for(let Vt=0;Vt<Bt;Vt++)i.texImage2D(s.TEXTURE_2D,Vt,kt,Et,gt,0,Nt,Zt,null),Et>>=1,gt>>=1}}else if(re.length>0){if(X&&bt){const Et=je(re[0]);i.texStorage2D(s.TEXTURE_2D,Bt,kt,Et.width,Et.height)}for(let Et=0,gt=re.length;Et<gt;Et++)Ct=re[Et],X?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,Nt,Zt,Ct):i.texImage2D(s.TEXTURE_2D,Et,kt,Nt,Zt,Ct);E.generateMipmaps=!1}else if(X){if(bt){const Et=je(Mt);i.texStorage2D(s.TEXTURE_2D,Bt,kt,Et.width,Et.height)}Rt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,Zt,Mt)}else i.texImage2D(s.TEXTURE_2D,0,kt,Nt,Zt,Mt);y(E)&&v(ct),zt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function yt(N,E,tt){if(E.image.length!==6)return;const ct=St(N,E),_t=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+tt);const ot=r.get(_t);if(_t.version!==ot.__version||ct===!0){i.activeTexture(s.TEXTURE0+tt);const zt=Te.getPrimaries(Te.workingColorSpace),At=E.colorSpace===Xa?null:Te.getPrimaries(E.colorSpace),Xt=E.colorSpace===Xa||zt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Nt=[];for(let gt=0;gt<6;gt++)!qt&&!Mt?Nt[gt]=R(E.image[gt],!0,l.maxCubemapSize):Nt[gt]=Mt?E.image[gt].image:E.image[gt],Nt[gt]=Ye(E,Nt[gt]);const Zt=Nt[0],kt=c.convert(E.format,E.colorSpace),Ct=c.convert(E.type),re=U(E.internalFormat,kt,Ct,E.colorSpace),X=E.isVideoTexture!==!0,bt=ot.__version===void 0||ct===!0,Rt=_t.dataReady;let Bt=z(E,Zt);vt(s.TEXTURE_CUBE_MAP,E);let Et;if(qt){X&&bt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,re,Zt.width,Zt.height);for(let gt=0;gt<6;gt++){Et=Nt[gt].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const ae=Et[Vt];E.format!==Ei?kt!==null?X?Rt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,ae.width,ae.height,kt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,re,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,ae.width,ae.height,kt,Ct,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,re,ae.width,ae.height,0,kt,Ct,ae.data)}}}else{if(Et=E.mipmaps,X&&bt){Et.length>0&&Bt++;const gt=je(Nt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,re,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Mt){X?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Nt[gt].width,Nt[gt].height,kt,Ct,Nt[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Nt[gt].width,Nt[gt].height,0,kt,Ct,Nt[gt].data);for(let Vt=0;Vt<Et.length;Vt++){const we=Et[Vt].image[gt].image;X?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,we.width,we.height,kt,Ct,we.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,re,we.width,we.height,0,kt,Ct,we.data)}}else{X?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt,Ct,Nt[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,kt,Ct,Nt[gt]);for(let Vt=0;Vt<Et.length;Vt++){const ae=Et[Vt];X?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,kt,Ct,ae.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,re,kt,Ct,ae.image[gt])}}}y(E)&&v(s.TEXTURE_CUBE_MAP),ot.__version=_t.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Pt(N,E,tt,ct,_t,ot){const zt=c.convert(tt.format,tt.colorSpace),At=c.convert(tt.type),Xt=U(tt.internalFormat,zt,At,tt.colorSpace),qt=r.get(E),Mt=r.get(tt);if(Mt.__renderTarget=E,!qt.__hasExternalTextures){const Nt=Math.max(1,E.width>>ot),Zt=Math.max(1,E.height>>ot);_t===s.TEXTURE_3D||_t===s.TEXTURE_2D_ARRAY?i.texImage3D(_t,ot,Xt,Nt,Zt,E.depth,0,zt,At,null):i.texImage2D(_t,ot,Xt,Nt,Zt,0,zt,At,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Ht(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,_t,Mt.__webglTexture,0,Ge(E)):(_t===s.TEXTURE_2D||_t>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,_t,Mt.__webglTexture,ot),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(N,E,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const ct=E.depthTexture,_t=ct&&ct.isDepthTexture?ct.type:null,ot=w(E.stencilBuffer,_t),zt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=Ge(E);Ht(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,ot,E.width,E.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,ot,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ot,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,zt,s.RENDERBUFFER,N)}else{const ct=E.textures;for(let _t=0;_t<ct.length;_t++){const ot=ct[_t],zt=c.convert(ot.format,ot.colorSpace),At=c.convert(ot.type),Xt=U(ot.internalFormat,zt,At,ot.colorSpace),qt=Ge(E);tt&&Ht(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Xt,E.width,E.height):Ht(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,Xt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Xt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const _t=ct.__webglTexture,ot=Ge(E);if(E.depthTexture.format===Vo)Ht(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0);else if(E.depthTexture.format===ko)Ht(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function He(N){const E=r.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ct=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const _t=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",_t)};ct.addEventListener("dispose",_t),E.__depthDisposeCallback=_t}E.__boundDepthTexture=ct}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ct=N.texture.mipmaps;ct&&ct.length>0?ie(E.__webglFramebuffer[0],N):ie(E.__webglFramebuffer,N)}else if(tt){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=s.createRenderbuffer(),Yt(E.__webglDepthbuffer[ct],N,!1);else{const _t=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,ot)}}else{const ct=N.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Yt(E.__webglDepthbuffer,N,!1);else{const _t=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,ot)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function me(N,E,tt){const ct=r.get(N);E!==void 0&&Pt(ct.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&He(N)}function G(N){const E=N.texture,tt=r.get(N),ct=r.get(E);N.addEventListener("dispose",F);const _t=N.textures,ot=N.isWebGLCubeRenderTarget===!0,zt=_t.length>1;if(zt||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=E.version,h.memory.textures++),ot){tt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[At]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)tt.__webglFramebuffer[At][Xt]=s.createFramebuffer()}else tt.__webglFramebuffer[At]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)tt.__webglFramebuffer[At]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(zt)for(let At=0,Xt=_t.length;At<Xt;At++){const qt=r.get(_t[At]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),h.memory.textures++)}if(N.samples>0&&Ht(N)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let At=0;At<_t.length;At++){const Xt=_t[At];tt.__webglColorRenderbuffer[At]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[At]);const qt=c.convert(Xt.format,Xt.colorSpace),Mt=c.convert(Xt.type),Nt=U(Xt.internalFormat,qt,Mt,Xt.colorSpace,N.isXRRenderTarget===!0),Zt=Ge(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Nt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,tt.__webglColorRenderbuffer[At])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),Yt(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){i.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),vt(s.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Pt(tt.__webglFramebuffer[At][Xt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,Xt);else Pt(tt.__webglFramebuffer[At],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);y(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let At=0,Xt=_t.length;At<Xt;At++){const qt=_t[At],Mt=r.get(qt);let Nt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Mt.__webglTexture),vt(Nt,qt),Pt(tt.__webglFramebuffer,N,qt,s.COLOR_ATTACHMENT0+At,Nt,0),y(qt)&&v(Nt)}i.unbindTexture()}else{let At=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(At=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(At,ct.__webglTexture),vt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Pt(tt.__webglFramebuffer[Xt],N,E,s.COLOR_ATTACHMENT0,At,Xt);else Pt(tt.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,At,0);y(E)&&v(At),i.unbindTexture()}N.depthBuffer&&He(N)}function Re(N){const E=N.textures;for(let tt=0,ct=E.length;tt<ct;tt++){const _t=E[tt];if(y(_t)){const ot=O(N),zt=r.get(_t).__webglTexture;i.bindTexture(ot,zt),v(ot),i.unbindTexture()}}}const Qt=[],Se=[];function Ft(N){if(N.samples>0){if(Ht(N)===!1){const E=N.textures,tt=N.width,ct=N.height;let _t=s.COLOR_BUFFER_BIT;const ot=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,zt=r.get(N),At=E.length>1;if(At)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Xt=N.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_t|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_t|=s.STENCIL_BUFFER_BIT)),At){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Mt,0)}s.blitFramebuffer(0,0,tt,ct,0,0,tt,ct,_t,s.NEAREST),m===!0&&(Qt.length=0,Se.length=0,Qt.push(s.COLOR_ATTACHMENT0+qt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Qt.push(ot),Se.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),At)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,Mt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ge(N){return Math.min(l.maxSamples,N.samples)}function Ht(N){const E=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(N){const E=h.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function Ye(N,E){const tt=N.colorSpace,ct=N.format,_t=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Os&&tt!==Xa&&(Te.getTransfer(tt)===ze?(ct!==Ei||_t!==fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=st,this.setTexture2D=ht,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=me,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Ht}function pb(s,t){function i(r,l=Xa){let c;const h=Te.getTransfer(l);if(r===fa)return s.UNSIGNED_BYTE;if(r===wd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Cd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===O_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===L_)return s.BYTE;if(r===N_)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===Rd)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===la)return s.FLOAT;if(r===Wo)return s.HALF_FLOAT;if(r===P_)return s.ALPHA;if(r===z_)return s.RGB;if(r===Ei)return s.RGBA;if(r===Vo)return s.DEPTH_COMPONENT;if(r===ko)return s.DEPTH_STENCIL;if(r===B_)return s.RED;if(r===Dd)return s.RED_INTEGER;if(r===I_)return s.RG;if(r===Ud)return s.RG_INTEGER;if(r===Ld)return s.RGBA_INTEGER;if(r===Nc||r===Oc||r===Pc||r===zc)if(h===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Nc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Nc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kh||r===Qh||r===Jh||r===$h)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Kh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===td||r===ed||r===nd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===td||r===ed)return h===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===nd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===id)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ad)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===od)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ld)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ud)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===md)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bc||r===_d||r===vd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Bc)return h===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_d)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===F_||r===xd||r===Sd||r===yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Bc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===xd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class iv extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new iv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new da({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ti(new Yc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vb extends zs{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,M=null,b=null;const R=new _b,y={},v=i.getContextAttributes();let O=null,U=null;const w=[],z=[],H=new be;let F=null;const k=new fi;k.viewport=new ke;const C=new fi;C.viewport=new ke;const D=[k,C],I=new zM;let st=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let dt=w[nt];return dt===void 0&&(dt=new Th,w[nt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(nt){let dt=w[nt];return dt===void 0&&(dt=new Th,w[nt]=dt),dt.getGripSpace()},this.getHand=function(nt){let dt=w[nt];return dt===void 0&&(dt=new Th,w[nt]=dt),dt.getHandSpace()};function ft(nt){const dt=z.indexOf(nt.inputSource);if(dt===-1)return;const yt=w[dt];yt!==void 0&&(yt.update(nt.inputSource,nt.frame,p||h),yt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function ht(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",B);for(let nt=0;nt<w.length;nt++){const dt=z[nt];dt!==null&&(z[nt]=null,w[nt].disconnect(dt))}st=null,lt=null,R.reset();for(const nt in y)delete y[nt];t.setRenderTarget(O),M=null,x=null,_=null,l=null,U=null,wt.stop(),r.isPresenting=!1,t.setPixelRatio(F),t.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Pt=null,Yt=null;v.depth&&(Yt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=v.stencil?ko:Vo,Pt=v.stencil?Go:Rr);const ie={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:c};x=_.createProjectionLayer(ie),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new wr(x.textureWidth,x.textureHeight,{format:Ei,type:fa,depthTexture:new Q_(x.textureWidth,x.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new wr(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:fa,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function B(nt){for(let dt=0;dt<nt.removed.length;dt++){const yt=nt.removed[dt],Pt=z.indexOf(yt);Pt>=0&&(z[Pt]=null,w[Pt].disconnect(yt))}for(let dt=0;dt<nt.added.length;dt++){const yt=nt.added[dt];let Pt=z.indexOf(yt);if(Pt===-1){for(let ie=0;ie<w.length;ie++)if(ie>=z.length){z.push(yt),Pt=ie;break}else if(z[ie]===null){z[ie]=yt,Pt=ie;break}if(Pt===-1)break}const Yt=w[Pt];Yt&&Yt.connect(yt)}}const K=new Z,Y=new Z;function xt(nt,dt,yt){K.setFromMatrixPosition(dt.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const Pt=K.distanceTo(Y),Yt=dt.projectionMatrix.elements,ie=yt.projectionMatrix.elements,He=Yt[14]/(Yt[10]-1),me=Yt[14]/(Yt[10]+1),G=(Yt[9]+1)/Yt[5],Re=(Yt[9]-1)/Yt[5],Qt=(Yt[8]-1)/Yt[0],Se=(ie[8]+1)/ie[0],Ft=He*Qt,Ge=He*Se,Ht=Pt/(-Qt+Se),se=Ht*-Qt;if(dt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(se),nt.translateZ(Ht),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Yt[10]===-1)nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ye=He+Ht,je=me+Ht,N=Ft-se,E=Ge+(Pt-se),tt=G*me/je*Ye,ct=Re*me/je*Ye;nt.projectionMatrix.makePerspective(N,E,tt,ct,Ye,je),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function L(nt,dt){dt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(dt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let dt=nt.near,yt=nt.far;R.texture!==null&&(R.depthNear>0&&(dt=R.depthNear),R.depthFar>0&&(yt=R.depthFar)),I.near=C.near=k.near=dt,I.far=C.far=k.far=yt,(st!==I.near||lt!==I.far)&&(l.updateRenderState({depthNear:I.near,depthFar:I.far}),st=I.near,lt=I.far),I.layers.mask=nt.layers.mask|6,k.layers.mask=I.layers.mask&3,C.layers.mask=I.layers.mask&5;const Pt=nt.parent,Yt=I.cameras;L(I,Pt);for(let ie=0;ie<Yt.length;ie++)L(Yt[ie],Pt);Yt.length===2?xt(I,k,C):I.projectionMatrix.copy(k.projectionMatrix),$(nt,I,Pt)};function $(nt,dt,yt){yt===null?nt.matrix.copy(dt.matrixWorld):(nt.matrix.copy(yt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(dt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Xo*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=nt)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(I)},this.getCameraTexture=function(nt){return y[nt]};let vt=null;function St(nt,dt){if(g=dt.getViewerPose(p||h),b=dt,g!==null){const yt=g.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Pt=!1;yt.length!==I.cameras.length&&(I.cameras.length=0,Pt=!0);for(let me=0;me<yt.length;me++){const G=yt[me];let Re=null;if(M!==null)Re=M.getViewport(G);else{const Se=_.getViewSubImage(x,G);Re=Se.viewport,me===0&&(t.setRenderTargetTextures(U,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(U))}let Qt=D[me];Qt===void 0&&(Qt=new fi,Qt.layers.enable(me),Qt.viewport=new ke,D[me]=Qt),Qt.matrix.fromArray(G.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(G.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Re.x,Re.y,Re.width,Re.height),me===0&&(I.matrix.copy(Qt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pt===!0&&I.cameras.push(Qt)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const me=_.getDepthInformation(yt[0]);me&&me.isValid&&me.texture&&R.init(me,l.renderState)}if(Yt&&Yt.includes("camera-access")&&(t.state.unbindTexture(),_))for(let me=0;me<yt.length;me++){const G=yt[me].camera;if(G){let Re=y[G];Re||(Re=new iv,y[G]=Re);const Qt=_.getCameraImage(G);Re.sourceTexture=Qt}}}for(let yt=0;yt<w.length;yt++){const Pt=z[yt],Yt=w[yt];Pt!==null&&Yt!==void 0&&Yt.update(Pt,dt,p||h)}vt&&vt(nt,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),b=null}const wt=new J_;wt.setAnimationLoop(St),this.setAnimationLoop=function(nt){vt=nt},this.dispose=function(){}}}const vr=new ha,xb=new on;function Sb(s,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Y_(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,O,U,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,w)):v.isMeshMatcapMaterial?(c(y,v),b(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),R(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,O,U):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Bn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Bn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const O=t.get(v),U=O.envMap,w=O.envMapRotation;U&&(y.envMap.value=U,vr.copy(w),vr.x*=-1,vr.y*=-1,vr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),y.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(vr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,O,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*O,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,O){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Bn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function R(y,v){const O=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function yb(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const w=U.program;r.uniformBlockBinding(O,w)}function p(O,U){let w=l[O.id];w===void 0&&(b(O),w=g(O),l[O.id]=w,O.addEventListener("dispose",y));const z=U.program;r.updateUBOMapping(O,z);const H=t.render.frame;c[O.id]!==H&&(x(O),c[O.id]=H)}function g(O){const U=_();O.__bindingPointIndex=U;const w=s.createBuffer(),z=O.__size,H=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,z,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function _(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const U=l[O.id],w=O.uniforms,z=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let H=0,F=w.length;H<F;H++){const k=Array.isArray(w[H])?w[H]:[w[H]];for(let C=0,D=k.length;C<D;C++){const I=k[C];if(M(I,H,C,z)===!0){const st=I.__offset,lt=Array.isArray(I.value)?I.value:[I.value];let ft=0;for(let ht=0;ht<lt.length;ht++){const B=lt[ht],K=R(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,st+ft,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,ft),ft+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,st,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(O,U,w,z){const H=O.value,F=U+"_"+w;if(z[F]===void 0)return typeof H=="number"||typeof H=="boolean"?z[F]=H:z[F]=H.clone(),!0;{const k=z[F];if(typeof H=="number"||typeof H=="boolean"){if(k!==H)return z[F]=H,!0}else if(k.equals(H)===!1)return k.copy(H),!0}return!1}function b(O){const U=O.uniforms;let w=0;const z=16;for(let F=0,k=U.length;F<k;F++){const C=Array.isArray(U[F])?U[F]:[U[F]];for(let D=0,I=C.length;D<I;D++){const st=C[D],lt=Array.isArray(st.value)?st.value:[st.value];for(let ft=0,ht=lt.length;ft<ht;ft++){const B=lt[ft],K=R(B),Y=w%z,xt=Y%K.boundary,L=Y+xt;w+=xt,L!==0&&z-L<K.storage&&(w+=z-L),st.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=w,w+=K.storage}}}const H=w%z;return H>0&&(w+=z-H),O.__size=w,O.__cache={},this}function R(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const w=h.indexOf(U.__bindingPointIndex);h.splice(w,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const O in l)s.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class Mb{constructor(t={}){const{canvas:i=$y(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,v=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let z=!1;this._outputColorSpace=ui;let H=0,F=0,k=null,C=-1,D=null;const I=new ke,st=new ke;let lt=null;const ft=new Be(0);let ht=0,B=i.width,K=i.height,Y=1,xt=null,L=null;const $=new ke(0,0,B,K),vt=new ke(0,0,B,K);let St=!1;const wt=new K_;let nt=!1,dt=!1;const yt=new on,Pt=new Z,Yt=new ke,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function me(){return k===null?Y:1}let G=r;function Re(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ad}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),G===null){const W="webgl2";if(G=Re(W,A),G===null)throw Re(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qt,Se,Ft,Ge,Ht,se,Ye,je,N,E,tt,ct,_t,ot,zt,At,Xt,qt,Mt,Nt,Zt,kt,Ct,re;function X(){Qt=new L2(G),Qt.init(),kt=new pb(G,Qt),Se=new b2(G,Qt,t,kt),Ft=new hb(G,Qt),Se.reversedDepthBuffer&&x&&Ft.buffers.depth.setReversed(!0),Ge=new P2(G),Ht=new $T,se=new db(G,Qt,Ft,Ht,Se,kt,Ge),Ye=new R2(w),je=new U2(w),N=new GM(G),Ct=new E2(G,N),E=new N2(G,N,Ge,Ct),tt=new B2(G,E,N,Ge),Mt=new z2(G,Se,se),At=new A2(Ht),ct=new JT(w,Ye,je,Qt,Se,Ct,At),_t=new Sb(w,Ht),ot=new eb,zt=new ob(Qt),qt=new M2(w,Ye,je,Ft,tt,M,m),Xt=new ub(w,tt,Se),re=new yb(G,Ge,Se,Ft),Nt=new T2(G,Qt,Ge),Zt=new O2(G,Qt,Ge),Ge.programs=ct.programs,w.capabilities=Se,w.extensions=Qt,w.properties=Ht,w.renderLists=ot,w.shadowMap=Xt,w.state=Ft,w.info=Ge}X();const bt=new vb(w,G);this.xr=bt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(B,K,!1))},this.getSize=function(A){return A.set(B,K)},this.setSize=function(A,W,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,K=W,i.width=Math.floor(A*Y),i.height=Math.floor(W*Y),at===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(B*Y,K*Y).floor()},this.setDrawingBufferSize=function(A,W,at){B=A,K=W,Y=at,i.width=Math.floor(A*at),i.height=Math.floor(W*at),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,W,at,rt){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,W,at,rt),Ft.viewport(I.copy($).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,W,at,rt){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,W,at,rt),Ft.scissor(st.copy(vt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Ft.setScissorTest(St=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,at=!0){let rt=0;if(A){let j=!1;if(k!==null){const Tt=k.texture.format;j=Tt===Ld||Tt===Ud||Tt===Dd}if(j){const Tt=k.texture.type,Ut=Tt===fa||Tt===Rr||Tt===Ho||Tt===Go||Tt===wd||Tt===Cd,It=qt.getClearColor(),Ot=qt.getClearAlpha(),Jt=It.r,te=It.g,Wt=It.b;Ut?(b[0]=Jt,b[1]=te,b[2]=Wt,b[3]=Ot,G.clearBufferuiv(G.COLOR,0,b)):(R[0]=Jt,R[1]=te,R[2]=Wt,R[3]=Ot,G.clearBufferiv(G.COLOR,0,R))}else rt|=G.COLOR_BUFFER_BIT}W&&(rt|=G.DEPTH_BUFFER_BIT),at&&(rt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),qt.dispose(),ot.dispose(),zt.dispose(),Ht.dispose(),Ye.dispose(),je.dispose(),tt.dispose(),Ct.dispose(),re.dispose(),ct.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ln),bt.removeEventListener("sessionend",cn),Ke.stop()};function Rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Ge.autoReset,W=Xt.enabled,at=Xt.autoUpdate,rt=Xt.needsUpdate,j=Xt.type;X(),Ge.autoReset=A,Xt.enabled=W,Xt.autoUpdate=at,Xt.needsUpdate=rt,Xt.type=j}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const W=A.target;W.removeEventListener("dispose",gt),Vt(W)}function Vt(A){ae(A),Ht.remove(A)}function ae(A){const W=Ht.get(A).programs;W!==void 0&&(W.forEach(function(at){ct.releaseProgram(at)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,at,rt,j,Tt){W===null&&(W=ie);const Ut=j.isMesh&&j.matrixWorld.determinant()<0,It=pa(A,W,at,rt,j);Ft.setMaterial(rt,Ut);let Ot=at.index,Jt=1;if(rt.wireframe===!0){if(Ot=E.getWireframeAttribute(at),Ot===void 0)return;Jt=2}const te=at.drawRange,Wt=at.attributes.position;let ue=te.start*Jt,Me=(te.start+te.count)*Jt;Tt!==null&&(ue=Math.max(ue,Tt.start*Jt),Me=Math.min(Me,(Tt.start+Tt.count)*Jt)),Ot!==null?(ue=Math.max(ue,0),Me=Math.min(Me,Ot.count)):Wt!=null&&(ue=Math.max(ue,0),Me=Math.min(Me,Wt.count));const We=Me-ue;if(We<0||We===1/0)return;Ct.setup(j,rt,It,at,Ot);let Le,fe=Nt;if(Ot!==null&&(Le=N.get(Ot),fe=Zt,fe.setIndex(Le)),j.isMesh)rt.wireframe===!0?(Ft.setLineWidth(rt.wireframeLinewidth*me()),fe.setMode(G.LINES)):fe.setMode(G.TRIANGLES);else if(j.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),Ft.setLineWidth(Kt*me()),j.isLineSegments?fe.setMode(G.LINES):j.isLineLoop?fe.setMode(G.LINE_LOOP):fe.setMode(G.LINE_STRIP)}else j.isPoints?fe.setMode(G.POINTS):j.isSprite&&fe.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))fe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,Xe=j._multiDrawCounts,ge=j._multiDrawCount,An=Ot?N.get(Ot).bytesPerElement:1,pi=Ht.get(rt).currentProgram.getUniforms();for(let Ln=0;Ln<ge;Ln++)pi.setValue(G,"_gl_DrawID",Ln),fe.render(Kt[Ln]/An,Xe[Ln])}else if(j.isInstancedMesh)fe.renderInstances(ue,We,j.count);else if(at.isInstancedBufferGeometry){const Kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Xe=Math.min(at.instanceCount,Kt);fe.renderInstances(ue,We,Xe)}else fe.render(ue,We)};function we(A,W,at){A.transparent===!0&&A.side===oa&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,Ci(A,W,at),A.side=ja,A.needsUpdate=!0,Ci(A,W,at),A.side=oa):Ci(A,W,at)}this.compile=function(A,W,at=null){at===null&&(at=A),v=zt.get(at),v.init(W),U.push(v),at.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),A!==at&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const rt=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const It=Tt[Ut];we(It,at,j),rt.add(It)}else we(Tt,at,j),rt.add(Tt)}),v=U.pop(),rt},this.compileAsync=function(A,W,at=null){const rt=this.compile(A,W,at);return new Promise(j=>{function Tt(){if(rt.forEach(function(Ut){Ht.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){j(A);return}setTimeout(Tt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ye=null;function di(A){ye&&ye(A)}function ln(){Ke.stop()}function cn(){Ke.start()}const Ke=new J_;Ke.setAnimationLoop(di),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(A){ye=A,bt.setAnimationLoop(A),A===null?Ke.stop():Ke.start()},bt.addEventListener("sessionstart",ln),bt.addEventListener("sessionend",cn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(W),W=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,W,k),v=zt.get(A,U.length),v.init(W),U.push(v),yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),wt.setFromProjectionMatrix(yt,Fi,W.reversedDepth),dt=this.localClippingEnabled,nt=At.init(this.clippingPlanes,dt),y=ot.get(A,O.length),y.init(),O.push(y),bt.enabled===!0&&bt.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&wi(Tt,W,-1/0,w.sortObjects)}wi(A,W,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(xt,L),He=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,He&&qt.addToRenderList(y,A),this.info.render.frame++,nt===!0&&At.beginShadows();const at=v.state.shadowsArray;Xt.render(at,A,W),nt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,j=y.transmissive;if(v.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(j.length>0)for(let Ut=0,It=Tt.length;Ut<It;Ut++){const Ot=Tt[Ut];Zo(rt,j,A,Ot)}He&&qt.render(A);for(let Ut=0,It=Tt.length;Ut<It;Ut++){const Ot=Tt[Ut];Cr(y,A,Ot,Ot.viewport)}}else j.length>0&&Zo(rt,j,A,W),He&&qt.render(A),Cr(y,A,W);k!==null&&F===0&&(se.updateMultisampleRenderTarget(k),se.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(w,A,W),Ct.resetDefaultState(),C=-1,D=null,U.pop(),U.length>0?(v=U[U.length-1],nt===!0&&At.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function wi(A,W,at,rt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||wt.intersectsSprite(A)){rt&&Yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(yt);const Ut=tt.update(A),It=A.material;It.visible&&y.push(A,Ut,It,at,Yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||wt.intersectsObject(A))){const Ut=tt.update(A),It=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Yt.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Yt.copy(Ut.boundingSphere.center)),Yt.applyMatrix4(A.matrixWorld).applyMatrix4(yt)),Array.isArray(It)){const Ot=Ut.groups;for(let Jt=0,te=Ot.length;Jt<te;Jt++){const Wt=Ot[Jt],ue=It[Wt.materialIndex];ue&&ue.visible&&y.push(A,Ut,ue,at,Yt.z,Wt)}}else It.visible&&y.push(A,Ut,It,at,Yt.z,null)}}const Tt=A.children;for(let Ut=0,It=Tt.length;Ut<It;Ut++)wi(Tt[Ut],W,at,rt)}function Cr(A,W,at,rt){const j=A.opaque,Tt=A.transmissive,Ut=A.transparent;v.setupLightsView(at),nt===!0&&At.setGlobalState(w.clippingPlanes,at),rt&&Ft.viewport(I.copy(rt)),j.length>0&&Dr(j,W,at),Tt.length>0&&Dr(Tt,W,at),Ut.length>0&&Dr(Ut,W,at),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Zo(A,W,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[rt.id]===void 0&&(v.state.transmissionRenderTarget[rt.id]=new wr(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Wo:fa,minFilter:Tr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=v.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||I;Tt.setSize(Ut.z*w.transmissionResolutionScale,Ut.w*w.transmissionResolutionScale);const It=w.getRenderTarget(),Ot=w.getActiveCubeFace(),Jt=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(ft),ht=w.getClearAlpha(),ht<1&&w.setClearColor(16777215,.5),w.clear(),He&&qt.render(at);const te=w.toneMapping;w.toneMapping=Ya;const Wt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),v.setupLightsView(rt),nt===!0&&At.setGlobalState(w.clippingPlanes,rt),Dr(A,at,rt),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Me=0,We=W.length;Me<We;Me++){const Le=W[Me],fe=Le.object,Kt=Le.geometry,Xe=Le.material,ge=Le.group;if(Xe.side===oa&&fe.layers.test(rt.layers)){const An=Xe.side;Xe.side=Bn,Xe.needsUpdate=!0,Is(fe,at,rt,Kt,Xe,ge),Xe.side=An,Xe.needsUpdate=!0,ue=!0}}ue===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}w.setRenderTarget(It,Ot,Jt),w.setClearColor(ft,ht),Wt!==void 0&&(rt.viewport=Wt),w.toneMapping=te}function Dr(A,W,at){const rt=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const Ut=A[j],It=Ut.object,Ot=Ut.geometry,Jt=Ut.group;let te=Ut.material;te.allowOverride===!0&&rt!==null&&(te=rt),It.layers.test(at.layers)&&Is(It,W,at,Ot,te,Jt)}}function Is(A,W,at,rt,j,Tt){A.onBeforeRender(w,W,at,rt,j,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(w,W,at,rt,A,Tt),j.transparent===!0&&j.side===oa&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,w.renderBufferDirect(at,W,rt,j,A,Tt),j.side=ja,j.needsUpdate=!0,w.renderBufferDirect(at,W,rt,j,A,Tt),j.side=oa):w.renderBufferDirect(at,W,rt,j,A,Tt),A.onAfterRender(w,W,at,rt,j,Tt)}function Ci(A,W,at){W.isScene!==!0&&(W=ie);const rt=Ht.get(A),j=v.state.lights,Tt=v.state.shadowsArray,Ut=j.state.version,It=ct.getParameters(A,j.state,Tt,W,at),Ot=ct.getProgramCacheKey(It);let Jt=rt.programs;rt.environment=A.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(A.isMeshStandardMaterial?je:Ye).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",gt),Jt=new Map,rt.programs=Jt);let te=Jt.get(Ot);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Ut)return Hi(A,It),te}else It.uniforms=ct.getUniforms(A),A.onBeforeCompile(It,w),te=ct.acquireProgram(It,Ot),Jt.set(Ot,te),rt.uniforms=It.uniforms;const Wt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=At.uniform),Hi(A,It),rt.needsLights=ma(A),rt.lightsStateVersion=Ut,rt.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function Ur(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Ic.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Hi(A,W){const at=Ht.get(A);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function pa(A,W,at,rt,j){W.isScene!==!0&&(W=ie),se.resetTextureUnits();const Tt=W.fog,Ut=rt.isMeshStandardMaterial?W.environment:null,It=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Os,Ot=(rt.isMeshStandardMaterial?je:Ye).get(rt.envMap||Ut),Jt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,te=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!at.morphAttributes.position,ue=!!at.morphAttributes.normal,Me=!!at.morphAttributes.color;let We=Ya;rt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(We=w.toneMapping);const Le=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,fe=Le!==void 0?Le.length:0,Kt=Ht.get(rt),Xe=v.state.lights;if(nt===!0&&(dt===!0||A!==D)){const Qe=A===D&&rt.id===C;At.setState(rt,A,Qe)}let ge=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Xe.state.version||Kt.outputColorSpace!==It||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Ot||rt.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==At.numPlanes||Kt.numIntersection!==At.numIntersection)||Kt.vertexAlphas!==Jt||Kt.vertexTangents!==te||Kt.morphTargets!==Wt||Kt.morphNormals!==ue||Kt.morphColors!==Me||Kt.toneMapping!==We||Kt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Kt.__version=rt.version);let An=Kt.currentProgram;ge===!0&&(An=Ci(rt,W,j));let pi=!1,Ln=!1,pn=!1;const Ie=An.getUniforms(),Nn=Kt.uniforms;if(Ft.useProgram(An.program)&&(pi=!0,Ln=!0,pn=!0),rt.id!==C&&(C=rt.id,Ln=!0),pi||D!==A){Ft.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ie.setValue(G,"projectionMatrix",A.projectionMatrix),Ie.setValue(G,"viewMatrix",A.matrixWorldInverse);const xn=Ie.map.cameraPosition;xn!==void 0&&xn.setValue(G,Pt.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&Ie.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ie.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Ln=!0,pn=!0)}if(j.isSkinnedMesh){Ie.setOptional(G,j,"bindMatrix"),Ie.setOptional(G,j,"bindMatrixInverse");const Qe=j.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ie.setValue(G,"boneTexture",Qe.boneTexture,se))}j.isBatchedMesh&&(Ie.setOptional(G,j,"batchingTexture"),Ie.setValue(G,"batchingTexture",j._matricesTexture,se),Ie.setOptional(G,j,"batchingIdTexture"),Ie.setValue(G,"batchingIdTexture",j._indirectTexture,se),Ie.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&Ie.setValue(G,"batchingColorTexture",j._colorsTexture,se));const Rn=at.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Mt.update(j,at,An),(Ln||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Ie.setValue(G,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Nn.envMap.value=Ot,Nn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(Nn.envMapIntensity.value=W.environmentIntensity),Ln&&(Ie.setValue(G,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&Ka(Nn,pn),Tt&&rt.fog===!0&&_t.refreshFogUniforms(Nn,Tt),_t.refreshMaterialUniforms(Nn,rt,Y,K,v.state.transmissionRenderTarget[A.id]),Ic.upload(G,Ur(Kt),Nn,se)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ic.upload(G,Ur(Kt),Nn,se),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ie.setValue(G,"center",j.center),Ie.setValue(G,"modelViewMatrix",j.modelViewMatrix),Ie.setValue(G,"normalMatrix",j.normalMatrix),Ie.setValue(G,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Qe=rt.uniformsGroups;for(let xn=0,Lr=Qe.length;xn<Lr;xn++){const In=Qe[xn];re.update(In,An),re.bind(In,An)}}return An}function Ka(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ma(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,W,at){const rt=Ht.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=W,Ht.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const at=Ht.get(A);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const nn=G.createFramebuffer();this.setRenderTarget=function(A,W=0,at=0){k=A,H=W,F=at;let rt=!0,j=null,Tt=!1,Ut=!1;if(A){const Ot=Ht.get(A);if(Ot.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(G.FRAMEBUFFER,null),rt=!1;else if(Ot.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(Ot.__hasExternalTextures)se.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Ot.__boundDepthTexture!==Wt){if(Wt!==null&&Ht.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ut=!0);const te=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[W])?j=te[W][at]:j=te[W],Tt=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?j=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?j=te[at]:j=te,I.copy(A.viewport),st.copy(A.scissor),lt=A.scissorTest}else I.copy($).multiplyScalar(Y).floor(),st.copy(vt).multiplyScalar(Y).floor(),lt=St;if(at!==0&&(j=nn),Ft.bindFramebuffer(G.FRAMEBUFFER,j)&&rt&&Ft.drawBuffers(A,j),Ft.viewport(I),Ft.scissor(st),Ft.setScissorTest(lt),Tt){const Ot=Ht.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,at)}else if(Ut){const Ot=W;for(let Jt=0;Jt<A.textures.length;Jt++){const te=Ht.get(A.textures[Jt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Jt,te.__webglTexture,at,Ot)}}else if(A!==null&&at!==0){const Ot=Ht.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(A,W,at,rt,j,Tt,Ut,It=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){Ft.bindFramebuffer(G.FRAMEBUFFER,Ot);try{const Jt=A.textures[It],te=Jt.format,Wt=Jt.type;if(!Se.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-rt&&at>=0&&at<=A.height-j&&(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+It),G.readPixels(W,at,rt,j,kt.convert(te),kt.convert(Wt),Tt))}finally{const Jt=k!==null?Ht.get(k).__webglFramebuffer:null;Ft.bindFramebuffer(G.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,W,at,rt,j,Tt,Ut,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot)if(W>=0&&W<=A.width-rt&&at>=0&&at<=A.height-j){Ft.bindFramebuffer(G.FRAMEBUFFER,Ot);const Jt=A.textures[It],te=Jt.format,Wt=Jt.type;if(!Se.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+It),G.readPixels(W,at,rt,j,kt.convert(te),kt.convert(Wt),0);const Me=k!==null?Ht.get(k).__webglFramebuffer:null;Ft.bindFramebuffer(G.FRAMEBUFFER,Me);const We=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await tM(G,We,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer(ue),G.deleteSync(We),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,at=0){const rt=Math.pow(2,-at),j=Math.floor(A.image.width*rt),Tt=Math.floor(A.image.height*rt),Ut=W!==null?W.x:0,It=W!==null?W.y:0;se.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,at,0,0,Ut,It,j,Tt),Ft.unbindTexture()};const Ko=G.createFramebuffer(),Qo=G.createFramebuffer();this.copyTextureToTexture=function(A,W,at=null,rt=null,j=0,Tt=null){Tt===null&&(j!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Ut,It,Ot,Jt,te,Wt,ue,Me,We;const Le=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)Ut=at.max.x-at.min.x,It=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,te=at.min.y,Wt=at.isBox3?at.min.z:0;else{const Rn=Math.pow(2,-j);Ut=Math.floor(Le.width*Rn),It=Math.floor(Le.height*Rn),A.isDataArrayTexture?Ot=Le.depth:A.isData3DTexture?Ot=Math.floor(Le.depth*Rn):Ot=1,Jt=0,te=0,Wt=0}rt!==null?(ue=rt.x,Me=rt.y,We=rt.z):(ue=0,Me=0,We=0);const fe=kt.convert(W.format),Kt=kt.convert(W.type);let Xe;W.isData3DTexture?(se.setTexture3D(W,0),Xe=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),Xe=G.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),Xe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const ge=G.getParameter(G.UNPACK_ROW_LENGTH),An=G.getParameter(G.UNPACK_IMAGE_HEIGHT),pi=G.getParameter(G.UNPACK_SKIP_PIXELS),Ln=G.getParameter(G.UNPACK_SKIP_ROWS),pn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Le.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,te),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Ie=A.isDataArrayTexture||A.isData3DTexture,Nn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Rn=Ht.get(A),Qe=Ht.get(W),xn=Ht.get(Rn.__renderTarget),Lr=Ht.get(Qe.__renderTarget);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let In=0;In<Ot;In++)Ie&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,j,Wt+In),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,Tt,We+In)),G.blitFramebuffer(Jt,te,Ut,It,ue,Me,Ut,It,G.DEPTH_BUFFER_BIT,G.NEAREST);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Ht.has(A)){const Rn=Ht.get(A),Qe=Ht.get(W);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,Ko),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,Qo);for(let xn=0;xn<Ot;xn++)Ie?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Rn.__webglTexture,j,Wt+xn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Rn.__webglTexture,j),Nn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,We+xn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Qe.__webglTexture,Tt),j!==0?G.blitFramebuffer(Jt,te,Ut,It,ue,Me,Ut,It,G.COLOR_BUFFER_BIT,G.NEAREST):Nn?G.copyTexSubImage3D(Xe,Tt,ue,Me,We+xn,Jt,te,Ut,It):G.copyTexSubImage2D(Xe,Tt,ue,Me,Jt,te,Ut,It);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Nn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Xe,Tt,ue,Me,We,Ut,It,Ot,fe,Kt,Le.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Xe,Tt,ue,Me,We,Ut,It,Ot,fe,Le.data):G.texSubImage3D(Xe,Tt,ue,Me,We,Ut,It,Ot,fe,Kt,Le):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,ue,Me,Ut,It,fe,Kt,Le.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,ue,Me,Le.width,Le.height,fe,Le.data):G.texSubImage2D(G.TEXTURE_2D,Tt,ue,Me,Ut,It,fe,Kt,Le);G.pixelStorei(G.UNPACK_ROW_LENGTH,ge),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,An),G.pixelStorei(G.UNPACK_SKIP_PIXELS,pi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ln),G.pixelStorei(G.UNPACK_SKIP_IMAGES,pn),Tt===0&&W.generateMipmaps&&G.generateMipmap(Xe),Ft.unbindTexture()},this.copyTextureToTexture3D=function(A,W,at=null,rt=null,j=0){return Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,at,rt,j)},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),Ft.unbindTexture()},this.resetState=function(){H=0,F=0,k=null,Ft.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const y_=new Za,Dc=new Z;class av extends PM{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],r=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(r),this.setAttribute("position",new Wn(t,3)),this.setAttribute("uv",new Wn(i,2))}applyMatrix4(t){const i=this.attributes.instanceStart,r=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(t),r.applyMatrix4(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const r=new Ed(i,6,1);return this.setAttribute("instanceStart",new Wa(r,3,0)),this.setAttribute("instanceEnd",new Wa(r,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const r=new Ed(i,6,1);return this.setAttribute("instanceColorStart",new Wa(r,3,0)),this.setAttribute("instanceColorEnd",new Wa(r,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new UM(t.geometry)),this}fromLineSegments(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;t!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(t),y_.setFromBufferAttribute(i),this.boundingBox.union(y_))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(t!==void 0&&i!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)Dc.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Dc)),Dc.fromBufferAttribute(i,c),l=Math.max(l,r.distanceToSquared(Dc));this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Dt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new be(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};kn.line={uniforms:zd.merge([Dt.common,Dt.fog,Dt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Fd extends da{constructor(t){super({type:"LineMaterial",uniforms:zd.clone(kn.line.uniforms),vertexShader:kn.line.vertexShader,fragmentShader:kn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Oh=new ke,M_=new Z,E_=new Z,En=new ke,Tn=new ke,Pi=new ke,Ph=new Z,zh=new on,bn=new FM,T_=new Z,Uc=new Za,Lc=new Yo,zi=new ke;let Bi,Ar;function b_(s,t,i){return zi.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),zi.multiplyScalar(1/zi.w),zi.x=Ar/i.width,zi.y=Ar/i.height,zi.applyMatrix4(s.projectionMatrixInverse),zi.multiplyScalar(1/zi.w),Math.abs(Math.max(zi.x,zi.y))}function Eb(s,t){const i=s.matrixWorld,r=s.geometry,l=r.attributes.instanceStart,c=r.attributes.instanceEnd,h=Math.min(r.instanceCount,l.count);for(let d=0,m=h;d<m;d++){bn.start.fromBufferAttribute(l,d),bn.end.fromBufferAttribute(c,d),bn.applyMatrix4(i);const p=new Z,g=new Z;Bi.distanceSqToSegment(bn.start,bn.end,g,p),g.distanceTo(p)<Ar*.5&&t.push({point:g,pointOnLine:p,distance:Bi.origin.distanceTo(g),object:s,face:null,faceIndex:d,uv:null,uv1:null})}}function Tb(s,t,i){const r=t.projectionMatrix,c=s.material.resolution,h=s.matrixWorld,d=s.geometry,m=d.attributes.instanceStart,p=d.attributes.instanceEnd,g=Math.min(d.instanceCount,m.count),_=-t.near;Bi.at(1,Pi),Pi.w=1,Pi.applyMatrix4(t.matrixWorldInverse),Pi.applyMatrix4(r),Pi.multiplyScalar(1/Pi.w),Pi.x*=c.x/2,Pi.y*=c.y/2,Pi.z=0,Ph.copy(Pi),zh.multiplyMatrices(t.matrixWorldInverse,h);for(let x=0,M=g;x<M;x++){if(En.fromBufferAttribute(m,x),Tn.fromBufferAttribute(p,x),En.w=1,Tn.w=1,En.applyMatrix4(zh),Tn.applyMatrix4(zh),En.z>_&&Tn.z>_)continue;if(En.z>_){const U=En.z-Tn.z,w=(En.z-_)/U;En.lerp(Tn,w)}else if(Tn.z>_){const U=Tn.z-En.z,w=(Tn.z-_)/U;Tn.lerp(En,w)}En.applyMatrix4(r),Tn.applyMatrix4(r),En.multiplyScalar(1/En.w),Tn.multiplyScalar(1/Tn.w),En.x*=c.x/2,En.y*=c.y/2,Tn.x*=c.x/2,Tn.y*=c.y/2,bn.start.copy(En),bn.start.z=0,bn.end.copy(Tn),bn.end.z=0;const R=bn.closestPointToPointParameter(Ph,!0);bn.at(R,T_);const y=Jy.lerp(En.z,Tn.z,R),v=y>=-1&&y<=1,O=Ph.distanceTo(T_)<Ar*.5;if(v&&O){bn.start.fromBufferAttribute(m,x),bn.end.fromBufferAttribute(p,x),bn.start.applyMatrix4(h),bn.end.applyMatrix4(h);const U=new Z,w=new Z;Bi.distanceSqToSegment(bn.start,bn.end,w,U),i.push({point:w,pointOnLine:U,distance:Bi.origin.distanceTo(w),object:s,face:null,faceIndex:x,uv:null,uv1:null})}}}class bb extends Ti{constructor(t=new av,i=new Fd({color:Math.random()*16777215})){super(t,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,i=t.attributes.instanceStart,r=t.attributes.instanceEnd,l=new Float32Array(2*i.count);for(let h=0,d=0,m=i.count;h<m;h++,d+=2)M_.fromBufferAttribute(i,h),E_.fromBufferAttribute(r,h),l[d]=d===0?0:l[d-1],l[d+1]=l[d]+M_.distanceTo(E_);const c=new Ed(l,2,1);return t.setAttribute("instanceDistanceStart",new Wa(c,1,0)),t.setAttribute("instanceDistanceEnd",new Wa(c,1,1)),this}raycast(t,i){const r=this.material.worldUnits,l=t.camera;l===null&&!r&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Bi=t.ray;const h=this.matrixWorld,d=this.geometry,m=this.material;Ar=m.linewidth+c,d.boundingSphere===null&&d.computeBoundingSphere(),Lc.copy(d.boundingSphere).applyMatrix4(h);let p;if(r)p=Ar*.5;else{const _=Math.max(l.near,Lc.distanceToPoint(Bi.origin));p=b_(l,_,m.resolution)}if(Lc.radius+=p,Bi.intersectsSphere(Lc)===!1)return;d.boundingBox===null&&d.computeBoundingBox(),Uc.copy(d.boundingBox).applyMatrix4(h);let g;if(r)g=Ar*.5;else{const _=Math.max(l.near,Uc.distanceToPoint(Bi.origin));g=b_(l,_,m.resolution)}Uc.expandByScalar(g),Bi.intersectsBox(Uc)!==!1&&(r?Eb(this,i):Tb(this,l,i))}onBeforeRender(t){const i=this.material.uniforms;i&&i.resolution&&(t.getViewport(Oh),this.material.uniforms.resolution.value.set(Oh.z,Oh.w))}}class rv extends av{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const i=t.length-3,r=new Float32Array(2*i);for(let l=0;l<i;l+=3)r[2*l]=t[l],r[2*l+1]=t[l+1],r[2*l+2]=t[l+2],r[2*l+3]=t[l+3],r[2*l+4]=t[l+4],r[2*l+5]=t[l+5];return super.setPositions(r),this}setColors(t){const i=t.length-3,r=new Float32Array(2*i);for(let l=0;l<i;l+=3)r[2*l]=t[l],r[2*l+1]=t[l+1],r[2*l+2]=t[l+2],r[2*l+3]=t[l+3],r[2*l+4]=t[l+4],r[2*l+5]=t[l+5];return super.setColors(r),this}setFromPoints(t){const i=t.length-1,r=new Float32Array(6*i);for(let l=0;l<i;l++)r[6*l]=t[l].x,r[6*l+1]=t[l].y,r[6*l+2]=t[l].z||0,r[6*l+3]=t[l+1].x,r[6*l+4]=t[l+1].y,r[6*l+5]=t[l+1].z||0;return super.setPositions(r),this}fromLine(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}}class Ab extends bb{constructor(t=new rv,i=new Fd({color:Math.random()*16777215})){super(t,i),this.isLine2=!0,this.type="Line2"}}function Rb(){const s=yi.useRef(null);return yi.useEffect(()=>{const t=s.current,i=new bM,r=new fi(45,t.clientWidth/t.clientHeight,.1,100);r.position.set(0,0,3);const l=new Mb({antialias:!0,alpha:!1});l.setClearColor(0,1),l.setSize(t.clientWidth,t.clientHeight),l.setPixelRatio(window.devicePixelRatio),t.appendChild(l.domElement);const c=new Xc(.8,0),h=new DM(c),d=Array.from(h.attributes.position.array),m=new rv;m.setPositions(d);const p=new Fd({color:8392397,linewidth:4,transparent:!0,opacity:1});p.resolution.set(t.clientWidth,t.clientHeight);const g=new Ab(m,p);g.computeLineDistances(),i.add(g);const _=new Ti(new Xc(.85,0),new Pd({color:8392397,transparent:!0,opacity:.06,side:Bn}));i.add(_);const x=()=>{requestAnimationFrame(x),g.rotation.x+=.003,g.rotation.y+=.005,_.rotation.x+=.003,_.rotation.y+=.005,l.render(i,r)};x();const M=()=>{const b=t.clientWidth,R=t.clientHeight;r.aspect=b/R,r.updateProjectionMatrix();const v=Math.max(.5,b/800);r.position.z=3/v,l.setSize(b,R),p.resolution.set(b,R)};return window.addEventListener("resize",M),M(),()=>{window.removeEventListener("resize",M),l.dispose(),i.clear(),t.removeChild(l.domElement)}},[]),Lt.jsxs("div",{id:"hero",children:[Lt.jsxs("div",{id:"sector",children:[Lt.jsx("div",{id:"description",children:Lt.jsx("p",{children:"Web Personal PortFolio by Gabriele Armenise, made using pure HTML, CSS and React with also third party npm packages like Three.js and FontAwesome."})}),Lt.jsx("div",{id:"canvas-container",ref:s})]}),Lt.jsx("div",{id:"overlay",children:Lt.jsx("span",{id:"link",children:Lt.jsx("a",{href:"#about",children:"Explore my PortFolio"})})})]})}const wb=[{id:"c",name:"C",color:"#5C6BC0",icon:"c",projects:[{name:"Tetris",link:"https://github.com/GabOnTrash/Tetris_1"},{name:"Space Shooter",link:"https://github.com/GabOnTrash/Space-Invader"},{name:"Pong",link:"https://github.com/GabOnTrash/Pong"},{name:"My Crosshair",link:"https://github.com/GabOnTrash/Crosshair"}]},{id:"cpp",name:"C++",color:"#0086D4",icon:"cpp",projects:[{name:"Tetris",link:"https://github.com/GabOnTrash/Tetris_1"},{name:"Space Shooter",link:"https://github.com/GabOnTrash/Space-Invader"},{name:"Pong",link:"https://github.com/GabOnTrash/Pong"},{name:"My Crosshair",link:"https://github.com/GabOnTrash/Crosshair"}]},{id:"python",name:"Python",color:"#FFC107",icon:"py",projects:[{name:"Sky Climb",link:"https://github.com/GabOnTrash/Sky-Climb"},{name:"Youtube Downloader",link:""},{name:"QR Code Generator",link:""},{name:"Vampire Survivor",link:""}]},{id:"java",name:"Java",color:"#4E7896",icon:"java",projects:[]},{id:"html",name:"Html",color:"#FF6D00",icon:"html",projects:[{name:"Calculator",link:"https://gabrielearmenise.altervista.org/Vecchi_prog/CalcAll1.html"},{name:"Login Page",link:"https://gabrielearmenise.altervista.org/Login/login.html"},{name:"Lecce's Map",link:"https://gabrielearmenise.altervista.org/lecce/Visitare%20lecce.html"},{name:"Dice Generator",link:"https://gabrielearmenise.altervista.org/DADI/Dadi.php"}]},{id:"css",name:"CSS",color:"#0277BD",icon:"css",projects:[{name:"Calculator",link:"https://gabrielearmenise.altervista.org/Vecchi_prog/CalcAll1.html"},{name:"Login Page",link:"https://gabrielearmenise.altervista.org/Login/login.html"},{name:"Lecce's Map",link:"https://gabrielearmenise.altervista.org/lecce/Visitare%20lecce.html"},{name:"Dice Generator",link:"https://gabrielearmenise.altervista.org/DADI/Dadi.php"}]},{id:"javasript",name:"Javascript",color:"#FFD600",icon:"javascript",projects:[{name:"Calculator",link:"https://gabrielearmenise.altervista.org/Vecchi_prog/CalcAll1.html"},{name:"Login Page",link:"https://gabrielearmenise.altervista.org/Login/login.html"},{name:"Lecce's Map",link:"https://gabrielearmenise.altervista.org/lecce/Visitare%20lecce.html"},{name:"Dice Generator",link:"https://gabrielearmenise.altervista.org/DADI/Dadi.php"}]},{id:"react",name:"React",color:"#61DAFBAA",icon:"react",projects:[{name:"Calculator",link:"https://gabrielearmenise.altervista.org/Vecchi_prog/CalcAll1.html"},{name:"Login Page",link:"https://gabrielearmenise.altervista.org/Login/login.html"},{name:"Lecce's Map",link:"https://gabrielearmenise.altervista.org/lecce/Visitare%20lecce.html"},{name:"Dice Generator",link:"https://gabrielearmenise.altervista.org/DADI/Dadi.php"}]},{id:"php",name:"PHP",color:"#777BB3",icon:"php",projects:[{name:"Calculator",link:"https://gabrielearmenise.altervista.org/Vecchi_prog/CalcAll1.html"},{name:"Login Page",link:"https://gabrielearmenise.altervista.org/Login/login.html"},{name:"Lecce's Map",link:"https://gabrielearmenise.altervista.org/lecce/Visitare%20lecce.html"},{name:"Dice Generator",link:"https://gabrielearmenise.altervista.org/DADI/Dadi.php"}]}];function Cb({icon:s,label:t,color:i,onClick:r}){return Lt.jsxs("div",{className:"card",style:{boxShadow:`0 0 1rem ${i}`},onClick:r,children:[s&&Lt.jsx("img",{src:s,alt:t}),t&&Lt.jsx("span",{children:t})]})}const Db="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%20fill-rule='evenodd'%20clip-rule='evenodd'%3e%3cpath%20fill='%23283593'%20fill-rule='evenodd'%20d='M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0%20c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867%20c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0%20c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867%20c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z'%20clip-rule='evenodd'/%3e%3cpath%20fill='%235c6bc0'%20fill-rule='evenodd'%20d='M5.304,34.404C5.038,34.048,5,33.71,5,33.255%20c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38%20c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z'%20clip-rule='evenodd'/%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14%20s-14-6.273-14-14S16.273,10,24,10z%20M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z'%20clip-rule='evenodd'/%3e%3cpath%20fill='%233949ab'%20fill-rule='evenodd'%20d='M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784%20c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z'%20clip-rule='evenodd'/%3e%3c/svg%3e",Ub="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%20fill-rule='evenodd'%20clip-rule='evenodd'%3e%3cpath%20fill='%2300549d'%20fill-rule='evenodd'%20d='M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0%20c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867%20c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0%20c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867%20c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z'%20clip-rule='evenodd'/%3e%3cpath%20fill='%230086d4'%20fill-rule='evenodd'%20d='M5.304,34.404C5.038,34.048,5,33.71,5,33.255%20c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38%20c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z'%20clip-rule='evenodd'/%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14%20s-14-6.273-14-14S16.273,10,24,10z%20M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z'%20clip-rule='evenodd'/%3e%3cpath%20fill='%230075c0'%20fill-rule='evenodd'%20d='M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784%20c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z'%20clip-rule='evenodd'/%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M31%2021H33V27H31zM38%2021H40V27H38z'%20clip-rule='evenodd'/%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M29%2023H35V25H29zM36%2023H42V25H36z'%20clip-rule='evenodd'/%3e%3c/svg%3e",Lb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%230277BD'%20d='M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z%20M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z'/%3e%3cpath%20fill='%23FFC107'%20d='M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z%20M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z'/%3e%3c/svg%3e",Nb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M11.622%2024.74s-1.23.748.855.962c2.51.32%203.847.267%206.625-.267a10.02%2010.02%200%200%200%201.763.855c-6.25%202.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336%201.015.748%201.23c2.725.267%204.862.32%208.55-.427a3.26%203.26%200%200%200%201.282.801c-7.534%202.244-15.976.214-10.58-1.603zm14.747%206.09s.908.748-1.015%201.336c-3.58%201.07-15.014%201.39-18.22%200-1.122-.48%201.015-1.175%201.7-1.282.695-.16%201.07-.16%201.07-.16-1.23-.855-8.175%201.763-3.526%202.51%2012.77%202.084%2023.296-.908%2019.983-2.404zM12.2%2017.633s-5.824%201.39-2.084%201.87c1.603.214%204.755.16%207.694-.053%202.404-.214%204.81-.64%204.81-.64s-.855.374-1.443.748c-5.93%201.55-17.312.855-14.052-.748%202.778-1.336%205.076-1.175%205.076-1.175zm10.42%205.824c5.984-3.1%203.206-6.09%201.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336%206.786%204.007-1.23%206.09%200%200%20.053-.053.107-.16zm-9.83%208.442c5.77.374%2014.587-.214%2014.8-2.94%200%200-.427%201.07-4.755%201.87-4.916.908-11.007.8-14.587.214%200%200%20.748.64%204.542.855z'%20fill='%234e7896'/%3e%3cpath%20d='M18.996.001s3.313%203.366-3.152%208.442c-5.183%204.114-1.175%206.465%200%209.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294%206.893%2020.332%205.3%2018.996.001zm-1.7%2015.335c1.55%201.763-.427%203.366-.427%203.366s3.954-2.03%202.137-4.542c-1.656-2.404-2.94-3.58%204.007-7.587%200%200-10.953%202.725-5.717%208.763z'%20fill='%23f58219'/%3e%3c/svg%3e",Ob="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%23E65100'%20d='M41,5H7l3,34l14,4l14-4L41,5L41,5z'/%3e%3cpath%20fill='%23FF6D00'%20d='M24%208L24%2039.9%2035.2%2036.7%2037.7%208z'/%3e%3cpath%20fill='%23FFF'%20d='M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z%20M32.9,17l0.3-4H24v4H32.9z'/%3e%3cpath%20fill='%23EEE'%20d='M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z%20M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z'/%3e%3c/svg%3e",Pb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%230277BD'%20d='M41,5H7l3,34l14,4l14-4L41,5L41,5z'/%3e%3cpath%20fill='%23039BE5'%20d='M24%208L24%2039.9%2035.2%2036.7%2037.7%208z'/%3e%3cpath%20fill='%23FFF'%20d='M33.1%2013L24%2013%2024%2017%2028.9%2017%2028.6%2021%2024%2021%2024%2025%2028.4%2025%2028.1%2029.5%2024%2030.9%2024%2035.1%2031.9%2032.5%2032.6%2021%2032.6%2021z'/%3e%3cpath%20fill='%23EEE'%20d='M24,13v4h-8.9l-0.3-4H24z%20M19.4,21l0.2,4H24v-4H19.4z%20M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z'/%3e%3c/svg%3e",zb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%23ffd600'%20d='M6,42V6h36v36H6z'/%3e%3cpath%20fill='%23000001'%20d='M29.538%2032.947c.692%201.124%201.444%202.201%203.037%202.201%201.338%200%202.04-.665%202.04-1.585%200-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841%200-2.41%201.845-4.244%204.728-4.244%202.053%200%203.528.711%204.592%202.573l-2.514%201.607c-.553-.988-1.151-1.377-2.078-1.377-.946%200-1.545.597-1.545%201.377%200%20.964.6%201.354%201.985%201.951l.807.344C36.452%2029.645%2038%2030.839%2038%2033.523%2038%2036.415%2035.716%2038%2032.65%2038c-2.999%200-4.702-1.505-5.65-3.368L29.538%2032.947zM17.952%2033.029c.506.906%201.275%201.603%202.381%201.603%201.058%200%201.667-.418%201.667-2.043V22h3.333v11.101c0%203.367-1.953%204.899-4.805%204.899-2.577%200-4.437-1.746-5.195-3.368L17.952%2033.029z'/%3e%3c/svg%3e",Bb="/assets/php-Bk7iOn3l.svg",Ib="/assets/react-CHdo91hT.svg",Fb={c:Db,cpp:Ub,py:Lb,java:Nb,html:Ob,css:Pb,javascript:zb,react:Ib,php:Bb};function Hb(){const[s,t]=yi.useState(!1),[i,r]=yi.useState(null),l=()=>{t(!s),r(null)},c=m=>{r(m)},h=yi.useRef(null),d=yi.useRef(null);return yi.useEffect(()=>{if(h.current)return d.current=new IntersectionObserver(([m])=>{m.isIntersecting||(t(!1),r(null))},{threshold:.1}),d.current.observe(h.current),()=>{d.current&&h.current&&d.current.unobserve(h.current)}},[s]),Lt.jsxs("section",{id:"skills",className:"project-section",children:[Lt.jsx("div",{className:"projects-label",children:Lt.jsx("h4",{onClick:l,children:"DEV SKILLS"})}),s&&Lt.jsx("div",{className:"cards",ref:h,children:wb.map(m=>Lt.jsx(Cb,{icon:Fb[m.icon],label:m.name,color:m.color,onClick:()=>c(m)},m.id))}),i&&Lt.jsxs("div",{className:"projects-container",children:[Lt.jsxs("h4",{children:[i.name," Projects"]}),Lt.jsx("div",{className:"projects-grid",children:i.projects.length>0?i.projects.map((m,p)=>Lt.jsx("div",{className:"project-card",children:Lt.jsx("a",{href:m.link,target:"_blank",rel:"noreferrer",children:m.name})},p)):Lt.jsx("p",{className:"no-projects",children:"No projects available yet"})})]})]})}function Gb(){return Lt.jsxs(Lt.Fragment,{children:[Lt.jsx(YS,{}),Lt.jsx(Rb,{}),Lt.jsx(US,{}),Lt.jsx(Hb,{}),Lt.jsx(PS,{})]})}xS.createRoot(document.getElementById("root")).render(Lt.jsx(yi.StrictMode,{children:Lt.jsx(Gb,{})}));
