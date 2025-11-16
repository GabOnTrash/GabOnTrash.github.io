(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function fS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $f={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function dS(){if(p_)return No;p_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var m_;function hS(){return m_||(m_=1,$f.exports=dS()),$f.exports}var At=hS(),td={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function pS(){if(g_)return le;g_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function y(L,$,vt){this.props=L,this.context=$,this.refs=R,this.updater=vt||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=y.prototype;function O(L,$,vt){this.props=L,this.context=$,this.refs=R,this.updater=vt||M}var U=O.prototype=new _;U.constructor=O,b(U,y.prototype),U.isPureReactComponent=!0;var w=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function F(L,$,vt,St,Ct,nt){return vt=nt.ref,{$$typeof:s,type:L,key:$,ref:vt!==void 0?vt:null,props:nt}}function k(L,$){return F(L.type,$,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function D(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(vt){return $[vt]})}var I=/\/+/g;function st(L,$){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):$.toString(36)}function lt(){}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(lt,lt):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function dt(L,$,vt,St,Ct){var nt=typeof L;(nt==="undefined"||nt==="boolean")&&(L=null);var ht=!1;if(L===null)ht=!0;else switch(nt){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(L.$$typeof){case s:case t:ht=!0;break;case g:return ht=L._init,dt(ht(L._payload),$,vt,St,Ct)}}if(ht)return Ct=Ct(L),ht=St===""?"."+st(L,0):St,w(Ct)?(vt="",ht!=null&&(vt=ht.replace(I,"$&/")+"/"),dt(Ct,$,vt,"",function(Yt){return Yt})):Ct!=null&&(C(Ct)&&(Ct=k(Ct,vt+(Ct.key==null||L&&L.key===Ct.key?"":(""+Ct.key).replace(I,"$&/")+"/")+ht)),$.push(Ct)),1;ht=0;var yt=St===""?".":St+":";if(w(L))for(var Pt=0;Pt<L.length;Pt++)St=L[Pt],nt=yt+st(St,Pt),ht+=dt(St,$,vt,nt,Ct);else if(Pt=x(L),typeof Pt=="function")for(L=Pt.call(L),Pt=0;!(St=L.next()).done;)St=St.value,nt=yt+st(St,Pt++),ht+=dt(St,$,vt,nt,Ct);else if(nt==="object"){if(typeof L.then=="function")return dt(ft(L),$,vt,St,Ct);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ht}function B(L,$,vt){if(L==null)return L;var St=[],Ct=0;return dt(L,St,"","",function(nt){return $.call(vt,nt,Ct++)}),St}function K(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(vt){(L._status===0||L._status===-1)&&(L._status=1,L._result=vt)},function(vt){(L._status===0||L._status===-1)&&(L._status=2,L._result=vt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return le.Children={map:B,forEach:function(L,$,vt){B(L,function(){$.apply(this,arguments)},vt)},count:function(L){var $=0;return B(L,function(){$++}),$},toArray:function(L){return B(L,function($){return $})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},le.Component=y,le.Fragment=i,le.Profiler=l,le.PureComponent=O,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,le.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cloneElement=function(L,$,vt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var St=b({},L.props),Ct=L.key,nt=void 0;if($!=null)for(ht in $.ref!==void 0&&(nt=void 0),$.key!==void 0&&(Ct=""+$.key),$)!H.call($,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&$.ref===void 0||(St[ht]=$[ht]);var ht=arguments.length-2;if(ht===1)St.children=vt;else if(1<ht){for(var yt=Array(ht),Pt=0;Pt<ht;Pt++)yt[Pt]=arguments[Pt+2];St.children=yt}return F(L.type,Ct,void 0,void 0,nt,St)},le.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},le.createElement=function(L,$,vt){var St,Ct={},nt=null;if($!=null)for(St in $.key!==void 0&&(nt=""+$.key),$)H.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Ct[St]=$[St]);var ht=arguments.length-2;if(ht===1)Ct.children=vt;else if(1<ht){for(var yt=Array(ht),Pt=0;Pt<ht;Pt++)yt[Pt]=arguments[Pt+2];Ct.children=yt}if(L&&L.defaultProps)for(St in ht=L.defaultProps,ht)Ct[St]===void 0&&(Ct[St]=ht[St]);return F(L,nt,void 0,void 0,null,Ct)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:h,render:L}},le.isValidElement=C,le.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:K}},le.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},le.startTransition=function(L){var $=P.T,vt={};P.T=vt;try{var St=L(),Ct=P.S;Ct!==null&&Ct(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(xt,Y)}catch(nt){Y(nt)}finally{P.T=$}},le.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},le.use=function(L){return P.H.use(L)},le.useActionState=function(L,$,vt){return P.H.useActionState(L,$,vt)},le.useCallback=function(L,$){return P.H.useCallback(L,$)},le.useContext=function(L){return P.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,$){return P.H.useDeferredValue(L,$)},le.useEffect=function(L,$,vt){var St=P.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(L,$)},le.useId=function(){return P.H.useId()},le.useImperativeHandle=function(L,$,vt){return P.H.useImperativeHandle(L,$,vt)},le.useInsertionEffect=function(L,$){return P.H.useInsertionEffect(L,$)},le.useLayoutEffect=function(L,$){return P.H.useLayoutEffect(L,$)},le.useMemo=function(L,$){return P.H.useMemo(L,$)},le.useOptimistic=function(L,$){return P.H.useOptimistic(L,$)},le.useReducer=function(L,$,vt){return P.H.useReducer(L,$,vt)},le.useRef=function(L){return P.H.useRef(L)},le.useState=function(L){return P.H.useState(L)},le.useSyncExternalStore=function(L,$,vt){return P.H.useSyncExternalStore(L,$,vt)},le.useTransition=function(){return P.H.useTransition()},le.version="19.1.1",le}var __;function Rh(){return __||(__=1,td.exports=pS()),td.exports}var Ar=Rh();const Tr=fS(Ar);var ed={exports:{}},Oo={},nd={exports:{}},id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function mS(){return v_||(v_=1,function(s){function t(B,K){var Y=B.length;B.push(K);t:for(;0<Y;){var xt=Y-1>>>1,L=B[xt];if(0<l(L,K))B[xt]=K,B[Y]=L,Y=xt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Y=B.pop();if(Y!==K){B[0]=Y;t:for(var xt=0,L=B.length,$=L>>>1;xt<$;){var vt=2*(xt+1)-1,St=B[vt],Ct=vt+1,nt=B[Ct];if(0>l(St,Y))Ct<L&&0>l(nt,St)?(B[xt]=nt,B[Ct]=Y,xt=Ct):(B[xt]=St,B[vt]=Y,xt=vt);else if(Ct<L&&0>l(nt,Y))B[xt]=nt,B[Ct]=Y,xt=Ct;else break t}}return K}function l(B,K){var Y=B.sortIndex-K.sortIndex;return Y!==0?Y:B.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,v=null,x=3,M=!1,b=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=B)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function P(B){if(R=!1,w(B),!b)if(i(m)!==null)b=!0,H||(H=!0,st());else{var K=i(p);K!==null&&dt(P,K.startTime-B)}}var H=!1,F=-1,k=5,C=-1;function D(){return y?!0:!(s.unstable_now()-C<k)}function I(){if(y=!1,H){var B=s.unstable_now();C=B;var K=!0;try{t:{b=!1,R&&(R=!1,O(F),F=-1),M=!0;var Y=x;try{e:{for(w(B),v=i(m);v!==null&&!(v.expirationTime>B&&D());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,x=v.priorityLevel;var L=xt(v.expirationTime<=B);if(B=s.unstable_now(),typeof L=="function"){v.callback=L,w(B),K=!0;break e}v===i(m)&&r(m),w(B)}else r(m);v=i(m)}if(v!==null)K=!0;else{var $=i(p);$!==null&&dt(P,$.startTime-B),K=!1}}break t}finally{v=null,x=Y,M=!1}K=void 0}}finally{K?st():H=!1}}}var st;if(typeof U=="function")st=function(){U(I)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ft=lt.port2;lt.port1.onmessage=I,st=function(){ft.postMessage(null)}}else st=function(){_(I,0)};function dt(B,K){F=_(function(){B(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return B()}finally{x=Y}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=x;x=B;try{return K()}finally{x=Y}},s.unstable_scheduleCallback=function(B,K,Y){var xt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,B){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,B={id:g++,callback:K,priorityLevel:B,startTime:Y,expirationTime:L,sortIndex:-1},Y>xt?(B.sortIndex=Y,t(p,B),i(m)===null&&B===i(p)&&(R?(O(F),F=-1):R=!0,dt(P,Y-xt))):(B.sortIndex=L,t(m,B),b||M||(b=!0,H||(H=!0,st()))),B},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(B){var K=x;return function(){var Y=x;x=K;try{return B.apply(this,arguments)}finally{x=Y}}}}(id)),id}var x_;function gS(){return x_||(x_=1,nd.exports=mS()),nd.exports}var ad={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function _S(){if(S_)return Cn;S_=1;var s=Rh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Cn.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.1.1",Cn}var y_;function vS(){if(y_)return ad.exports;y_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ad.exports=_S(),ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function xS(){if(M_)return Oo;M_=1;var s=gS(),t=Rh(),i=vS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return h(u),e;if(f===o)return h(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,o=f;break}if(T===o){S=!0,o=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=u;break}if(T===o){S=!0,o=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case P:return"Suspense";case H:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var dt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xt=[],L=-1;function $(e){return{current:e}}function vt(e){0>L||(e.current=xt[L],xt[L]=null,L--)}function St(e,n){L++,xt[L]=e.current,e.current=n}var Ct=$(null),nt=$(null),ht=$(null),yt=$(null);function Pt(e,n){switch(St(ht,n),St(nt,e),St(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Vg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Vg(n),e=kg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Ct),St(Ct,e)}function Yt(){vt(Ct),vt(nt),vt(ht)}function ie(e){e.memoizedState!==null&&St(yt,e);var n=Ct.current,a=kg(n,e.type);n!==a&&(St(nt,e),St(Ct,a))}function He(e){nt.current===e&&(vt(Ct),vt(nt)),yt.current===e&&(vt(yt),wo._currentValue=Y)}var me=Object.prototype.hasOwnProperty,G=s.unstable_scheduleCallback,Re=s.unstable_cancelCallback,Qt=s.unstable_shouldYield,Se=s.unstable_requestPaint,Ft=s.unstable_now,Ge=s.unstable_getCurrentPriorityLevel,Ht=s.unstable_ImmediatePriority,se=s.unstable_UserBlockingPriority,Ye=s.unstable_NormalPriority,je=s.unstable_LowPriority,N=s.unstable_IdlePriority,E=s.log,tt=s.unstable_setDisableYieldValue,ct=null,_t=null;function ot(e){if(typeof E=="function"&&tt(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(ct,e)}catch{}}var zt=Math.clz32?Math.clz32:qt,Rt=Math.log,Xt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(Rt(e)/Xt|0)|0}var Mt=256,Nt=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Zt(o):(S&=T,S!==0?u=Zt(S):a||(a=T&~e,a!==0&&(u=Zt(a))))):(T=o&~f,T!==0?u=Zt(T):S!==0?u=Zt(S):a||(a=o&~e,a!==0&&(u=Zt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function bt(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,z=e.expirationTimes,J=e.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-zt(a),mt=1<<ut;T[ut]=0,z[ut]=-1;var et=J[ut];if(et!==null)for(J[ut]=null,ut=0;ut<et.length;ut++){var it=et[ut];it!==null&&(it.lane&=-536870913)}a&=~mt}o!==0&&gt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function gt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Vt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ye(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:l_(e.type))}function hi(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var ln=Math.random().toString(36).slice(2),cn="__reactFiber$"+ln,Ke="__reactProps$"+ln,Ri="__reactContainer$"+ln,Cr="__reactEvents$"+ln,Zo="__reactListeners$"+ln,Dr="__reactHandles$"+ln,Fs="__reactResources$"+ln,wi="__reactMarker$"+ln;function Ur(e){delete e[cn],delete e[Ke],delete e[Cr],delete e[Zo],delete e[Dr]}function Fi(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ri]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Yg(e);e!==null;){if(a=e[cn])return a;e=Yg(e)}return n}e=a,a=e.parentNode}return null}function pa(e){if(e=e[cn]||e[Ri]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Za(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ma(e){var n=e[Fs];return n||(n=e[Fs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[wi]=!0}var Ko=new Set,Qo={};function A(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(Qo[e]=n,e=0;e<n.length;e++)Ko.add(n[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},j={};function Tt(e){return me.call(j,e)?!0:me.call(rt,e)?!1:at.test(e)?j[e]=!0:(rt[e]=!0,!1)}function Lt(e,n,a){if(Tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function It(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Jt,te;function Wt(e){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+te}var ue=!1;function Me(e,n){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(it){var et=it}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(it){et=it}e.call(mt.prototype)}}else{try{throw Error()}catch(it){et=it}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var z=S.split(`
`),J=T.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===J.length)for(o=z.length-1,u=J.length-1;1<=o&&0<=u&&z[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==J[u]){var ut=`
`+z[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function We(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Me(e.type,!1);case 11:return Me(e.type.render,!1);case 1:return Me(e.type,!0);case 31:return Wt("Activity");default:return""}}function Le(e){try{var n="";do n+=We(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xe(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=Xe(e))}function An(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function pn(e){return e.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ie(e,n,a,o,u,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,S,fe(n)):a!=null?Rn(e,S,fe(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+fe(T):e.removeAttribute("name")}function Nn(e,n,a,o,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Rn(e,n,a){n==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qe(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function xn(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function Lr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(dt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function In(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var l0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vh(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||l0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function kh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Vh(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Vh(e,f,n[f])}function Qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var c0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),u0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(e){return u0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Jc=null;function $c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nr=null,Or=null;function Xh(e){var n=pa(e);if(n&&(e=n.stateNode)){var a=e[Ke]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ie(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Ke]||null;if(!u)throw Error(r(90));Ie(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&An(o)}break t;case"textarea":xn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(e,!!a.multiple,n,!1)}}}var tu=!1;function Wh(e,n,a){if(tu)return e(n,a);tu=!0;try{var o=e(n);return o}finally{if(tu=!1,(Nr!==null||Or!==null)&&(Bl(),Nr&&(n=Nr,e=Or,Or=Nr=null,Xh(n),e)))for(n=0;n<e.length;n++)Xh(e[n])}}function Hs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Ke]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Hi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{eu=!1}var ga=null,nu=null,$o=null;function qh(){if($o)return $o;var e,n=nu,a=n.length,o,u="value"in ga?ga.value:ga.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return $o=u.slice(e,1<o?1-o:void 0)}function tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Yh(){return!1}function Fn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:Yh,this.isPropagationStopped=Yh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Fn(Ka),Vs=g({},Ka,{view:0,detail:0}),f0=Fn(Vs),iu,au,ks,il=g({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ks&&(ks&&e.type==="mousemove"?(iu=e.screenX-ks.screenX,au=e.screenY-ks.screenY):au=iu=0,ks=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:au}}),jh=Fn(il),d0=g({},il,{dataTransfer:0}),h0=Fn(d0),p0=g({},Vs,{relatedTarget:0}),ru=Fn(p0),m0=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=Fn(m0),_0=g({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),v0=Fn(_0),x0=g({},Ka,{data:0}),Zh=Fn(x0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=M0[e])?!!n[e]:!1}function su(){return E0}var T0=g({},Vs,{key:function(e){if(e.key){var n=S0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?y0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b0=Fn(T0),A0=g({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=Fn(A0),R0=g({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),w0=Fn(R0),C0=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),D0=Fn(C0),U0=g({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),L0=Fn(U0),N0=g({},Ka,{newState:0,oldState:0}),O0=Fn(N0),P0=[9,13,27,32],ou=Hi&&"CompositionEvent"in window,Xs=null;Hi&&"documentMode"in document&&(Xs=document.documentMode);var z0=Hi&&"TextEvent"in window&&!Xs,Qh=Hi&&(!ou||Xs&&8<Xs&&11>=Xs),Jh=" ",$h=!1;function tp(e,n){switch(e){case"keyup":return P0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function B0(e,n){switch(e){case"compositionend":return ep(n);case"keypress":return n.which!==32?null:($h=!0,Jh);case"textInput":return e=n.data,e===Jh&&$h?null:e;default:return null}}function I0(e,n){if(Pr)return e==="compositionend"||!ou&&tp(e,n)?(e=qh(),$o=nu=ga=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qh&&n.locale!=="ko"?null:n.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!F0[e.type]:n==="textarea"}function ip(e,n,a,o){Nr?Or?Or.push(o):Or=[o]:Nr=o,n=kl(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ws=null,qs=null;function H0(e){Bg(e,0)}function al(e){var n=Za(e);if(An(n))return e}function ap(e,n){if(e==="change")return n}var rp=!1;if(Hi){var lu;if(Hi){var cu="oninput"in document;if(!cu){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),cu=typeof sp.oninput=="function"}lu=cu}else lu=!1;rp=lu&&(!document.documentMode||9<document.documentMode)}function op(){Ws&&(Ws.detachEvent("onpropertychange",lp),qs=Ws=null)}function lp(e){if(e.propertyName==="value"&&al(qs)){var n=[];ip(n,qs,e,$c(e)),Wh(H0,n)}}function G0(e,n,a){e==="focusin"?(op(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",lp)):e==="focusout"&&op()}function V0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(qs)}function k0(e,n){if(e==="click")return al(n)}function X0(e,n){if(e==="input"||e==="change")return al(n)}function W0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:W0;function Ys(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!me.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function up(e,n){var a=cp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=cp(a)}}function fp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pi(e.document)}return n}function uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var q0=Hi&&"documentMode"in document&&11>=document.documentMode,zr=null,fu=null,js=null,du=!1;function hp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||zr==null||zr!==pi(o)||(o=zr,"selectionStart"in o&&uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),js&&Ys(js,o)||(js=o,o=kl(fu,"onSelect"),0<o.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=zr)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Br={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},hu={},pp={};Hi&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function Ja(e){if(hu[e])return hu[e];if(!Br[e])return e;var n=Br[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in pp)return hu[e]=n[a];return e}var mp=Ja("animationend"),gp=Ja("animationiteration"),_p=Ja("animationstart"),Y0=Ja("transitionrun"),j0=Ja("transitionstart"),Z0=Ja("transitioncancel"),vp=Ja("transitionend"),xp=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function mi(e,n){xp.set(e,n),A(n,[e])}var Sp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=Sp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Le(n)},Sp.set(e,n),n)}return{value:e,source:n,stack:Le(n)}}var ai=[],Ir=0,mu=0;function rl(){for(var e=Ir,n=mu=Ir=0;n<e;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&yp(a,u,f)}}function sl(e,n,a,o){ai[Ir++]=e,ai[Ir++]=n,ai[Ir++]=a,ai[Ir++]=o,mu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function gu(e,n,a,o){return sl(e,n,a,o),ol(e)}function Fr(e,n){return sl(e,null,null,n),ol(e)}function yp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<So)throw So=0,Ef=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Hr={};function K0(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new K0(e,n,a,o)}function _u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")_u(e)&&(S=1);else if(typeof e=="string")S=Jx(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Yn(31,a,n,u),e.elementType=C,e.lanes=f,e;case b:return $a(a.children,u,f,n);case R:S=8,u|=24;break;case y:return e=Yn(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case P:return e=Yn(13,a,n,u),e.elementType=P,e.lanes=f,e;case H:return e=Yn(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case U:S=10;break t;case O:S=9;break t;case w:S=11;break t;case F:S=14;break t;case k:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Yn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function $a(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function vu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function xu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Gr=[],Vr=0,cl=null,ul=0,ri=[],si=0,tr=null,Vi=1,ki="";function er(e,n){Gr[Vr++]=ul,Gr[Vr++]=cl,cl=e,ul=n}function Ep(e,n,a){ri[si++]=Vi,ri[si++]=ki,ri[si++]=tr,tr=e;var o=Vi;e=ki;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Vi=1<<32-zt(n)+u|a<<u|o,ki=f+e}else Vi=1<<f|a<<u|o,ki=e}function Su(e){e.return!==null&&(er(e,1),Ep(e,1,0))}function yu(e){for(;e===cl;)cl=Gr[--Vr],Gr[Vr]=null,ul=Gr[--Vr],Gr[Vr]=null;for(;e===tr;)tr=ri[--si],ri[si]=null,ki=ri[--si],ri[si]=null,Vi=ri[--si],ri[si]=null}var On=null,Je=null,Ae=!1,nr=null,Ci=!1,Mu=Error(r(519));function ir(e){var n=Error(r(418,""));throw Qs(ii(n,e)),Mu}function Tp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[Ke]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)ve(Mo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ge(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Lr(n,o.value,o.defaultValue,o.children),ge(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Gg(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Xl),n=!0):n=!1,n||ir(e)}function bp(e){for(On=e.return;On;)switch(On.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:On=On.return}}function Zs(e){if(e!==On)return!1;if(!Ae)return bp(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ff(e.type,e.memoizedProps)),a=!a),a&&Je&&ir(e),bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Je=_i(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Je=null}}else n===27?(n=Je,La(e.type)?(e=kf,kf=null,Je=e):Je=n):Je=On?_i(e.stateNode.nextSibling):null;return!0}function Ks(){Je=On=null,Ae=!1}function Ap(){var e=nr;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),nr=null),e}function Qs(e){nr===null?nr=[e]:nr.push(e)}var Eu=$(null),ar=null,Xi=null;function _a(e,n,a){St(Eu,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=Eu.current,vt(Eu)}function Tu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function bu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var z=0;z<n.length;z++)if(T.context===n[z]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Tu(f.return,a,e),o||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Tu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Js(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;qn(u.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(u===yt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}u=u.return}e!==null&&bu(n,e,a,o),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rr(e){ar=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Rp(ar,e)}function dl(e,n){return ar===null&&rr(e),Rp(e,n)}function Rp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(r(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var Q0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},J0=s.unstable_scheduleCallback,$0=s.unstable_NormalPriority,un={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new Q0,data:new Map,refCount:0}}function $s(e){e.refCount--,e.refCount===0&&J0($0,function(){e.controller.abort()})}var to=null,Ru=0,kr=0,Xr=null;function tx(e,n){if(to===null){var a=to=[];Ru=0,kr=Df(),Xr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ru++,n.then(wp,wp),n}function wp(){if(--Ru===0&&to!==null){Xr!==null&&(Xr.status="fulfilled");var e=to;to=null,kr=0,Xr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ex(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Cp=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&tx(e,n),Cp!==null&&Cp(e,n)};var sr=$(null);function wu(){var e=sr.current;return e!==null?e:Ve.pooledCache}function hl(e,n){n===null?St(sr,sr.current):St(sr,n.pool)}function Dp(){var e=wu();return e===null?null:{parent:un._currentValue,pool:e}}var eo=Error(r(460)),Up=Error(r(474)),pl=Error(r(542)),Cu={then:function(){}};function Lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ml(){}function Np(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ml,ml),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e;default:if(typeof n.status=="string")n.then(ml,ml);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e}throw no=n,eo}}var no=null;function Op(){if(no===null)throw Error(r(459));var e=no;return no=null,e}function Pp(e){if(e===eo||e===pl)throw Error(r(483))}var va=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ol(e),yp(e,null,a),n}return sl(e,o,n,a),ol(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vt(e,a)}}function Lu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function ao(){if(Nu){var e=Xr;if(e!==null)throw e}}function ro(e,n,a,o){Nu=!1;var u=e.updateQueue;va=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var z=T,J=z.next;z.next=null,S===null?f=J:S.next=J,S=z;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==S&&(T===null?ut.firstBaseUpdate=J:T.next=J,ut.lastBaseUpdate=z))}if(f!==null){var mt=u.baseState;S=0,ut=J=z=null,T=f;do{var et=T.lane&-536870913,it=et!==T.lane;if(it?(xe&et)===et:(o&et)===et){et!==0&&et===kr&&(Nu=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=e,$t=T;et=n;var Pe=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){mt=ne.call(Pe,mt,et);break t}mt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,et=typeof ne=="function"?ne.call(Pe,mt,et):ne,et==null)break t;mt=g({},mt,et);break t;case 2:va=!0}}et=T.callback,et!==null&&(e.flags|=64,it&&(e.flags|=8192),it=u.callbacks,it===null?u.callbacks=[et]:it.push(et))}else it={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(J=ut=it,z=mt):ut=ut.next=it,S|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;it=T,T=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ut===null&&(z=mt),u.baseState=z,u.firstBaseUpdate=J,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),wa|=S,e.lanes=S,e.memoizedState=mt}}function zp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Bp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)zp(a[e],n)}var Wr=$(null),gl=$(0);function Ip(e,n){e=Ji,St(gl,e),St(Wr,n),Ji=e|n.baseLanes}function Ou(){St(gl,Ji),St(Wr,Wr.current)}function Pu(){Ji=gl.current,vt(Wr),vt(gl)}var ya=0,he=null,Ne=null,an=null,_l=!1,qr=!1,or=!1,vl=0,so=0,Yr=null,nx=0;function tn(){throw Error(r(321))}function zu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,o,u,f){return ya=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?ym:Mm,or=!1,f=a(o,u),or=!1,qr&&(f=Hp(n,a,o,u)),Fp(e),f}function Fp(e){B.H=Tl;var n=Ne!==null&&Ne.next!==null;if(ya=0,an=Ne=he=null,_l=!1,so=0,Yr=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&fl(e)&&(mn=!0))}function Hp(e,n,a,o){he=e;var u=0;do{if(qr&&(Yr=null),so=0,qr=!1,25<=u)throw Error(r(301));if(u+=1,an=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=cx,f=n(a,o)}while(qr);return f}function ix(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(he.flags|=1024),n}function Iu(){var e=vl!==0;return vl=0,e}function Fu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Hu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}ya=0,an=Ne=he=null,qr=!1,so=vl=0,Yr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?he.memoizedState=an=e:an=an.next=e,an}function rn(){if(Ne===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=an===null?he.memoizedState:an.next;if(n!==null)an=n,Ne=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},an===null?he.memoizedState=an=e:an=an.next=e}return an}function Gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=so;return so+=1,Yr===null&&(Yr=[]),e=Np(Yr,e,n),n=he,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?ym:Mm),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===U)return wn(e)}throw Error(r(438,String(e)))}function Vu(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gu(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=rn();return ku(n,Ne,e)}function ku(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=S=null,z=null,J=n,ut=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(xe&mt)===mt:(ya&mt)===mt){var et=J.revertLane;if(et===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===kr&&(ut=!0);else if((ya&et)===et){J=J.next,et===kr&&(ut=!0);continue}else mt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(T=z=mt,S=f):z=z.next=mt,he.lanes|=et,wa|=et;mt=J.action,or&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else et={lane:mt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(T=z=et,S=f):z=z.next=et,he.lanes|=mt,wa|=mt;J=J.next}while(J!==null&&J!==n);if(z===null?S=f:z.next=T,!qn(f,e.memoizedState)&&(mn=!0,ut&&(a=Xr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=z,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Xu(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);qn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Gp(e,n,a){var o=he,u=rn(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!qn((Ne||u).memoizedState,a);S&&(u.memoizedState=a,mn=!0),u=u.queue;var T=Xp.bind(null,o,u,e);if(lo(2048,8,T,[e]),u.getSnapshot!==n||S||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,jr(9,yl(),kp.bind(null,o,u,a,n),null),Ve===null)throw Error(r(349));f||(ya&124)!==0||Vp(o,n,a)}return a}function Vp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Gu(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function kp(e,n,a,o){n.value=a,n.getSnapshot=o,Wp(n)&&qp(e)}function Xp(e,n,a){return a(function(){Wp(n)&&qp(e)})}function Wp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function qp(e){var n=Fr(e,2);n!==null&&Jn(n,e,2)}function Wu(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),or){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function Yp(e,n,a,o){return e.baseState=a,ku(e,Ne,typeof o=="function"?o:qi)}function ax(e,n,a,o,u){if(El(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function jp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var T=a(u,o),z=B.S;z!==null&&z(S,T),Zp(e,n,T)}catch(J){qu(e,n,J)}finally{B.T=f}}else try{f=a(u,o),Zp(e,n,f)}catch(J){qu(e,n,J)}}function Zp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Kp(e,n,o)},function(o){return qu(e,n,o)}):Kp(e,n,a)}function Kp(e,n,a){n.status="fulfilled",n.value=a,Qp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,jp(e,a)))}function qu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Qp(n),n=n.next;while(n!==o)}e.action=null}function Qp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Jp(e,n){return n}function $p(e,n){if(Ae){var a=Ve.formState;if(a!==null){t:{var o=he;if(Ae){if(Je){e:{for(var u=Je,f=Ci;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Je=_i(u.nextSibling),o=u.data==="F!";break t}}ir(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:n},a.queue=o,a=vm.bind(null,he,o),o.dispatch=a,o=Wu(!1),f=Qu.bind(null,he,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ax.bind(null,he,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function tm(e){var n=rn();return em(n,Ne,e)}function em(e,n,a){if(n=ku(e,n,Jp)[0],e=Sl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(S){throw S===eo?pl:S}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,jr(9,yl(),rx.bind(null,u,a),null)),[o,f,e]}function rx(e,n){e.action=n}function nm(e){var n=rn(),a=Ne;if(a!==null)return em(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function jr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=Gu(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function yl(){return{destroy:void 0,resource:void 0}}function im(){return rn().memoizedState}function Ml(e,n,a,o){var u=Hn();o=o===void 0?null:o,he.flags|=e,u.memoizedState=jr(1|n,yl(),a,o)}function lo(e,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ne!==null&&o!==null&&zu(o,Ne.memoizedState.deps)?u.memoizedState=jr(n,f,a,o):(he.flags|=e,u.memoizedState=jr(1|n,f,a,o))}function am(e,n){Ml(8390656,8,e,n)}function rm(e,n){lo(2048,8,e,n)}function sm(e,n){return lo(4,2,e,n)}function om(e,n){return lo(4,4,e,n)}function lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cm(e,n,a){a=a!=null?a.concat([e]):null,lo(4,4,lm.bind(null,n,e),a)}function Yu(){}function um(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&zu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function fm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&zu(n,o[1]))return o[0];if(o=e(),or){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,n],o}function ju(e,n,a){return a===void 0||(ya&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=pg(),he.lanes|=e,wa|=e,a)}function dm(e,n,a,o){return qn(a,n)?a:Wr.current!==null?(e=ju(e,a,o),qn(e,n)||(mn=!0),e):(ya&42)===0?(mn=!0,e.memoizedState=a):(e=pg(),he.lanes|=e,wa|=e,n)}function hm(e,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var S=B.T,T={};B.T=T,Qu(e,!1,n,a);try{var z=u(),J=B.S;if(J!==null&&J(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=ex(z,o);co(e,n,ut,Qn(e))}else co(e,n,o,Qn(e))}catch(mt){co(e,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{K.p=f,B.T=S}}function sx(){}function Zu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=pm(e).queue;hm(e,u,n,Y,a===null?sx:function(){return mm(e),a(o)})}function pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function mm(e){var n=pm(e).next.queue;co(e,n,{},Qn())}function Ku(){return wn(wo)}function gm(){return rn().memoizedState}function _m(){return rn().memoizedState}function ox(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=xa(a);var o=Sa(n,e,a);o!==null&&(Jn(o,n,a),io(o,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function lx(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},El(e)?xm(n,a):(a=gu(e,n,a,o),a!==null&&(Jn(a,e,o),Sm(a,n,o)))}function vm(e,n,a){var o=Qn();co(e,n,a,o)}function co(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(e))xm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,qn(T,S))return sl(e,n,u,0),Ve===null&&rl(),!1}catch{}finally{}if(a=gu(e,n,u,o),a!==null)return Jn(a,e,o),Sm(a,n,o),!0}return!1}function Qu(e,n,a,o){if(o={lane:2,revertLane:Df(),action:o,hasEagerState:!1,eagerState:null,next:null},El(e)){if(n)throw Error(r(479))}else n=gu(e,a,o,2),n!==null&&Jn(n,e,2)}function El(e){var n=e.alternate;return e===he||n!==null&&n===he}function xm(e,n){qr=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Sm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vt(e,a)}}var Tl={readContext:wn,use:xl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},ym={readContext:wn,use:xl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(or){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(or){ot(!0);try{a(n)}finally{ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=lx.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wu(e);var n=e.queue,a=vm.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Yu,useDeferredValue:function(e,n){var a=Hn();return ju(a,e,n)},useTransition:function(){var e=Wu(!1);return e=hm.bind(null,he,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Hn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(xe&124)!==0||Vp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,am(Xp.bind(null,o,f,e),[e]),o.flags|=2048,jr(9,yl(),kp.bind(null,o,f,a,n),null),a},useId:function(){var e=Hn(),n=Ve.identifierPrefix;if(Ae){var a=ki,o=Vi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=nx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ku,useFormState:$p,useActionState:$p,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qu.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return Hn().memoizedState=ox.bind(null,he)}},Mm={readContext:wn,use:xl,useCallback:um,useContext:wn,useEffect:rm,useImperativeHandle:cm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:Sl,useRef:im,useState:function(){return Sl(qi)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=rn();return dm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Sl(qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:Ku,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=rn();return Yp(a,Ne,e,n)},useMemoCache:Vu,useCacheRefresh:_m},cx={readContext:wn,use:xl,useCallback:um,useContext:wn,useEffect:rm,useImperativeHandle:cm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:Xu,useRef:im,useState:function(){return Xu(qi)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=rn();return Ne===null?ju(a,e,n):dm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Xu(qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:Ku,useFormState:nm,useActionState:nm,useOptimistic:function(e,n){var a=rn();return Ne!==null?Yp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:_m},Zr=null,uo=0;function bl(e){var n=uo;return uo+=1,Zr===null&&(Zr=[]),Np(Zr,e,n)}function fo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Em(e){var n=e._init;return n(e._payload)}function Tm(e){function n(q,V){if(e){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function o(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function u(q,V){return q=Gi(q,V),q.index=0,q.sibling=null,q}function f(q,V,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=67108866,V):Q):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function S(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,V,Q,pt){return V===null||V.tag!==6?(V=vu(Q,q.mode,pt),V.return=q,V):(V=u(V,Q),V.return=q,V)}function z(q,V,Q,pt){var Gt=Q.type;return Gt===b?ut(q,V,Q.props.children,pt,Q.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===k&&Em(Gt)===V.type)?(V=u(V,Q.props),fo(V,Q),V.return=q,V):(V=ll(Q.type,Q.key,Q.props,null,q.mode,pt),fo(V,Q),V.return=q,V)}function J(q,V,Q,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=xu(Q,q.mode,pt),V.return=q,V):(V=u(V,Q.children||[]),V.return=q,V)}function ut(q,V,Q,pt,Gt){return V===null||V.tag!==7?(V=$a(Q,q.mode,pt,Gt),V.return=q,V):(V=u(V,Q),V.return=q,V)}function mt(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=vu(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return Q=ll(V.type,V.key,V.props,null,q.mode,Q),fo(Q,V),Q.return=q,Q;case M:return V=xu(V,q.mode,Q),V.return=q,V;case k:var pt=V._init;return V=pt(V._payload),mt(q,V,Q)}if(dt(V)||st(V))return V=$a(V,q.mode,Q,null),V.return=q,V;if(typeof V.then=="function")return mt(q,bl(V),Q);if(V.$$typeof===U)return mt(q,dl(q,V),Q);Al(q,V)}return null}function et(q,V,Q,pt){var Gt=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Gt!==null?null:T(q,V,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Gt?z(q,V,Q,pt):null;case M:return Q.key===Gt?J(q,V,Q,pt):null;case k:return Gt=Q._init,Q=Gt(Q._payload),et(q,V,Q,pt)}if(dt(Q)||st(Q))return Gt!==null?null:ut(q,V,Q,pt,null);if(typeof Q.then=="function")return et(q,V,bl(Q),pt);if(Q.$$typeof===U)return et(q,V,dl(q,Q),pt);Al(q,Q)}return null}function it(q,V,Q,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(Q)||null,T(V,q,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return q=q.get(pt.key===null?Q:pt.key)||null,z(V,q,pt,Gt);case M:return q=q.get(pt.key===null?Q:pt.key)||null,J(V,q,pt,Gt);case k:var pe=pt._init;return pt=pe(pt._payload),it(q,V,Q,pt,Gt)}if(dt(pt)||st(pt))return q=q.get(Q)||null,ut(V,q,pt,Gt,null);if(typeof pt.then=="function")return it(q,V,Q,bl(pt),Gt);if(pt.$$typeof===U)return it(q,V,Q,dl(V,pt),Gt);Al(V,pt)}return null}function ne(q,V,Q,pt){for(var Gt=null,pe=null,jt=V,ee=V=0,_n=null;jt!==null&&ee<Q.length;ee++){jt.index>ee?(_n=jt,jt=null):_n=jt.sibling;var Ee=et(q,jt,Q[ee],pt);if(Ee===null){jt===null&&(jt=_n);break}e&&jt&&Ee.alternate===null&&n(q,jt),V=f(Ee,V,ee),pe===null?Gt=Ee:pe.sibling=Ee,pe=Ee,jt=_n}if(ee===Q.length)return a(q,jt),Ae&&er(q,ee),Gt;if(jt===null){for(;ee<Q.length;ee++)jt=mt(q,Q[ee],pt),jt!==null&&(V=f(jt,V,ee),pe===null?Gt=jt:pe.sibling=jt,pe=jt);return Ae&&er(q,ee),Gt}for(jt=o(jt);ee<Q.length;ee++)_n=it(jt,q,ee,Q[ee],pt),_n!==null&&(e&&_n.alternate!==null&&jt.delete(_n.key===null?ee:_n.key),V=f(_n,V,ee),pe===null?Gt=_n:pe.sibling=_n,pe=_n);return e&&jt.forEach(function(Ba){return n(q,Ba)}),Ae&&er(q,ee),Gt}function $t(q,V,Q,pt){if(Q==null)throw Error(r(151));for(var Gt=null,pe=null,jt=V,ee=V=0,_n=null,Ee=Q.next();jt!==null&&!Ee.done;ee++,Ee=Q.next()){jt.index>ee?(_n=jt,jt=null):_n=jt.sibling;var Ba=et(q,jt,Ee.value,pt);if(Ba===null){jt===null&&(jt=_n);break}e&&jt&&Ba.alternate===null&&n(q,jt),V=f(Ba,V,ee),pe===null?Gt=Ba:pe.sibling=Ba,pe=Ba,jt=_n}if(Ee.done)return a(q,jt),Ae&&er(q,ee),Gt;if(jt===null){for(;!Ee.done;ee++,Ee=Q.next())Ee=mt(q,Ee.value,pt),Ee!==null&&(V=f(Ee,V,ee),pe===null?Gt=Ee:pe.sibling=Ee,pe=Ee);return Ae&&er(q,ee),Gt}for(jt=o(jt);!Ee.done;ee++,Ee=Q.next())Ee=it(jt,q,ee,Ee.value,pt),Ee!==null&&(e&&Ee.alternate!==null&&jt.delete(Ee.key===null?ee:Ee.key),V=f(Ee,V,ee),pe===null?Gt=Ee:pe.sibling=Ee,pe=Ee);return e&&jt.forEach(function(uS){return n(q,uS)}),Ae&&er(q,ee),Gt}function Pe(q,V,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Gt=Q.key;V!==null;){if(V.key===Gt){if(Gt=Q.type,Gt===b){if(V.tag===7){a(q,V.sibling),pt=u(V,Q.props.children),pt.return=q,q=pt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===k&&Em(Gt)===V.type){a(q,V.sibling),pt=u(V,Q.props),fo(pt,Q),pt.return=q,q=pt;break t}a(q,V);break}else n(q,V);V=V.sibling}Q.type===b?(pt=$a(Q.props.children,q.mode,pt,Q.key),pt.return=q,q=pt):(pt=ll(Q.type,Q.key,Q.props,null,q.mode,pt),fo(pt,Q),pt.return=q,q=pt)}return S(q);case M:t:{for(Gt=Q.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(q,V.sibling),pt=u(V,Q.children||[]),pt.return=q,q=pt;break t}else{a(q,V);break}else n(q,V);V=V.sibling}pt=xu(Q,q.mode,pt),pt.return=q,q=pt}return S(q);case k:return Gt=Q._init,Q=Gt(Q._payload),Pe(q,V,Q,pt)}if(dt(Q))return ne(q,V,Q,pt);if(st(Q)){if(Gt=st(Q),typeof Gt!="function")throw Error(r(150));return Q=Gt.call(Q),$t(q,V,Q,pt)}if(typeof Q.then=="function")return Pe(q,V,bl(Q),pt);if(Q.$$typeof===U)return Pe(q,V,dl(q,Q),pt);Al(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(q,V.sibling),pt=u(V,Q),pt.return=q,q=pt):(a(q,V),pt=vu(Q,q.mode,pt),pt.return=q,q=pt),S(q)):a(q,V)}return function(q,V,Q,pt){try{uo=0;var Gt=Pe(q,V,Q,pt);return Zr=null,Gt}catch(jt){if(jt===eo||jt===pl)throw jt;var pe=Yn(29,jt,null,q.mode);return pe.lanes=pt,pe.return=q,pe}finally{}}}var Kr=Tm(!0),bm=Tm(!1),oi=$(null),Di=null;function Ma(e){var n=e.alternate;St(fn,fn.current&1),St(oi,e),Di===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(Di=e)}function Am(e){if(e.tag===22){if(St(fn,fn.current),St(oi,e),Di===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Di=e)}}else Ea()}function Ea(){St(fn,fn.current),St(oi,oi.current)}function Yi(e){vt(oi),Di===e&&(Di=null),vt(fn)}var fn=$(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Vf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Ju(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $u={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=xa(o);u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(Jn(n,e,o),io(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(Jn(n,e,o),io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=Sa(e,o,a),n!==null&&(Jn(n,e,a),io(n,e,a))}};function Rm(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,o)||!Ys(u,f):!0}function wm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&$u.enqueueReplaceState(n,n.state,null)}function lr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Cm(e){wl(e)}function Dm(e){console.error(e)}function Um(e){wl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Lm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function tf(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function Nm(e){return e=xa(e),e.tag=3,e}function Om(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Lm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Lm(n,a,o),typeof u!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function ux(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 13:return Di===null?bf():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Rf(e,o,u)),!1;case 22:return a.flags|=65536,o===Cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Rf(e,o,u)),!1}throw Error(r(435,a.tag))}return Rf(e,o,u),bf(),!1}if(Ae)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Mu&&(e=Error(r(422),{cause:o}),Qs(ii(e,a)))):(o!==Mu&&(n=Error(r(423),{cause:o}),Qs(ii(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ii(o,a),u=tf(e.stateNode,o,u),Lu(e,u),$e!==4&&($e=2)),!1;var f=Error(r(520),{cause:o});if(f=ii(f,a),xo===null?xo=[f]:xo.push(f),$e!==4&&($e=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=tf(a.stateNode,o,e),Lu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Nm(u),Om(u,e,a,o),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var Pm=Error(r(461)),mn=!1;function Sn(e,n,a,o){n.child=e===null?bm(n,null,a,o):Kr(n,e.child,a,o)}function zm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return rr(n),o=Bu(e,n,a,S,f,u),T=Iu(),e!==null&&!mn?(Fu(e,n,u),ji(e,n,u)):(Ae&&T&&Su(n),n.flags|=1,Sn(e,n,o,u),n.child)}function Bm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Im(e,n,f,o,u)):(e=ll(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!cf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(S,o)&&e.ref===n.ref)return ji(e,n,u)}return n.flags|=1,e=Gi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Im(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Ys(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,cf(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,ji(e,n,u)}return ef(e,n,a,o,u)}function Fm(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Hm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?Ip(n,f):Ou(),Am(n);else return n.lanes=n.childLanes=536870912,Hm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(hl(n,f.cachePool),Ip(n,f),Ea(),n.memoizedState=null):(e!==null&&hl(n,null),Ou(),Ea());return Sn(e,n,u,a),n.child}function Hm(e,n,a,o){var u=wu();return u=u===null?null:{parent:un._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&hl(n,null),Ou(),Am(n),e!==null&&Js(e,n,o,!0),null}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ef(e,n,a,o,u){return rr(n),a=Bu(e,n,a,o,void 0,u),o=Iu(),e!==null&&!mn?(Fu(e,n,u),ji(e,n,u)):(Ae&&o&&Su(n),n.flags|=1,Sn(e,n,a,u),n.child)}function Gm(e,n,a,o,u,f){return rr(n),n.updateQueue=null,a=Hp(n,o,a,u),Fp(e),o=Iu(),e!==null&&!mn?(Fu(e,n,f),ji(e,n,f)):(Ae&&o&&Su(n),n.flags|=1,Sn(e,n,a,f),n.child)}function Vm(e,n,a,o,u){if(rr(n),n.stateNode===null){var f=Hr,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$u,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Du(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):Hr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ju(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&$u.enqueueReplaceState(f,f.state,null),ro(n,o,f,u),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,z=lr(a,T);f.props=z;var J=f.context,ut=a.contextType;S=Hr,typeof ut=="object"&&ut!==null&&(S=wn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==S)&&wm(n,f,o,S),va=!1;var et=n.memoizedState;f.state=et,ro(n,o,f,u),ao(),J=n.memoizedState,T||et!==J||va?(typeof mt=="function"&&(Ju(n,a,mt,o),J=n.memoizedState),(z=va||Rm(n,a,z,o,et,J,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=S,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Uu(e,n),S=n.memoizedProps,ut=lr(a,S),f.props=ut,mt=n.pendingProps,et=f.context,J=a.contextType,z=Hr,typeof J=="object"&&J!==null&&(z=wn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||et!==z)&&wm(n,f,o,z),va=!1,et=n.memoizedState,f.state=et,ro(n,o,f,u),ao();var it=n.memoizedState;S!==mt||et!==it||va||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof T=="function"&&(Ju(n,a,T,o),it=n.memoizedState),(ut=va||Rm(n,a,ut,o,et,it,z)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,it,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,it,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=z,o=ut):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Dl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Kr(n,e.child,null,u),n.child=Kr(n,null,a,u)):Sn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ji(e,n,u),e}function km(e,n,a,o){return Ks(),n.flags|=256,Sn(e,n,a,o),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(e){return{baseLanes:e,cachePool:Dp()}}function rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function Xm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Ma(n):Ea(),Ae){var T=Je,z;if(z=T){t:{for(z=T,T=Ci;z.nodeType!==8;){if(!T){T=null;break t}if(z=_i(z.nextSibling),z===null){T=null;break t}}T=z}T!==null?(n.memoizedState={dehydrated:T,treeContext:tr!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},z=Yn(18,null,null,0),z.stateNode=T,z.return=n,n.child=z,On=n,Je=null,z=!0):z=!1}z||ir(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Vf(T)?n.lanes=32:n.lanes=536870912,null;Yi(n)}return T=o.children,o=o.fallback,u?(Ea(),u=n.mode,T=Ul({mode:"hidden",children:T},u),o=$a(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=af(a),u.childLanes=rf(e,S,a),n.memoizedState=nf,o):(Ma(n),sf(n,T))}if(z=e.memoizedState,z!==null&&(T=z.dehydrated,T!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=of(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),u=o.fallback,T=n.mode,o=Ul({mode:"visible",children:o.children},T),u=$a(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Kr(n,e.child,null,a),o=n.child,o.memoizedState=af(a),o.childLanes=rf(e,S,a),n.memoizedState=nf,n=u);else if(Ma(n),Vf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var J=S.dgst;S=J,o=Error(r(419)),o.stack="",o.digest=S,Qs({value:o,source:null,stack:null}),n=of(e,n,a)}else if(mn||Js(e,n,a,!1),S=(a&e.childLanes)!==0,mn||S){if(S=Ve,S!==null&&(o=a&-a,o=(o&42)!==0?1:ae(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Fr(e,o),Jn(S,e,o),Pm;T.data==="$?"||bf(),n=of(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Je=_i(T.nextSibling),On=n,Ae=!0,nr=null,Ci=!1,e!==null&&(ri[si++]=Vi,ri[si++]=ki,ri[si++]=tr,Vi=e.id,ki=e.overflow,tr=n),n=sf(n,o.children),n.flags|=4096);return n}return u?(Ea(),u=o.fallback,T=n.mode,z=e.child,J=z.sibling,o=Gi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,J!==null?u=Gi(J,u):(u=$a(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=af(a):(z=T.cachePool,z!==null?(J=un._currentValue,z=z.parent!==J?{parent:J,pool:J}:z):z=Dp(),T={baseLanes:T.baseLanes|a,cachePool:z}),u.memoizedState=T,u.childLanes=rf(e,S,a),n.memoizedState=nf,o):(Ma(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function sf(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function of(e,n,a){return Kr(n,e.child,null,a),e=sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Tu(e.return,n,a)}function lf(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function qm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Sn(e,n,o.children,a),o=fn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wm(e,a,n);else if(e.tag===19)Wm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(fn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),lf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Rl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}lf(n,!0,a,null,f);break;case"together":lf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function fx(e,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),_a(n,un,e.memoizedState.cache),Ks();break;case 27:case 5:ie(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Xm(e,n,a):(Ma(n),e=ji(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Js(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return qm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(fn,fn.current),o)break;return null;case 22:case 23:return n.lanes=0,Fm(e,n,a);case 24:_a(n,un,e.memoizedState.cache)}return ji(e,n,a)}function Ym(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!cf(e,a)&&(n.flags&128)===0)return mn=!1,fx(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ae&&(n.flags&1048576)!==0&&Ep(n,ul,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")_u(o)?(e=lr(o,e),n.tag=1,n=Vm(null,n,o,e,a)):(n.tag=0,n=ef(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=zm(null,n,o,e,a);break t}else if(u===F){n.tag=14,n=Bm(null,n,o,e,a);break t}}throw n=ft(o)||o,Error(r(306,n,""))}}return n;case 0:return ef(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=lr(o,n.pendingProps),Vm(e,n,o,u,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Uu(e,n),ro(n,o,null,a);var S=n.memoizedState;if(o=S.cache,_a(n,un,o),o!==f.cache&&bu(n,[un],a,!0),ao(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=km(e,n,o,a);break t}else if(o!==u){u=ii(Error(r(424)),n),Qs(u),n=km(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=_i(e.firstChild),On=n,Ae=!0,nr=null,Ci=!0,a=bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ks(),o===u){n=ji(e,n,a);break t}Sn(e,n,o,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=Qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Wl(ht.current).createElement(a),o[cn]=n,o[Ke]=e,Mn(o,a,e),nn(o),n.stateNode=o):n.memoizedState=Qg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&Ae&&(o=n.stateNode=jg(n.type,n.pendingProps,ht.current),On=n,Ci=!0,u=Je,La(n.type)?(kf=u,Je=_i(o.firstChild)):Je=u),Sn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=Je)&&(o=Fx(o,n.type,n.pendingProps,Ci),o!==null?(n.stateNode=o,On=n,Je=_i(o.firstChild),Ci=!1,u=!0):u=!1),u||ir(n)),ie(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Ff(u,f)?o=null:S!==null&&Ff(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(e,n,ix,null,null,a),wo._currentValue=u),Dl(e,n),Sn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Je)&&(a=Hx(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,On=n,Je=null,e=!0):e=!1),e||ir(n)),null;case 13:return Xm(e,n,a);case 4:return Pt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Kr(n,null,o,a):Sn(e,n,o,a),n.child;case 11:return zm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),Sn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,rr(n),u=wn(u),o=o(u),n.flags|=1,Sn(e,n,o,a),n.child;case 14:return Bm(e,n,n.type,n.pendingProps,a);case 15:return Im(e,n,n.type,n.pendingProps,a);case 19:return qm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ul(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Gi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Fm(e,n,a);case 24:return rr(n),o=wn(un),e===null?(u=wu(),u===null&&(u=Ve,f=Au(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Du(n),_a(n,un,u)):((e.lanes&a)!==0&&(Uu(e,n),ro(n,null,null,a),ao()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,un,o)):(o=f.cache,_a(n,un,o),o!==u.cache&&bu(n,[un],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(e){e.flags|=4}function jm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!n_(n)){if(n=oi.current,n!==null&&((xe&4194048)===xe?Di!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==Di))throw no=Cu,Up;e.flags|=8192}}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bt():536870912,e.lanes|=n,ts|=n)}function ho(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function dx(e,n,a){var o=n.pendingProps;switch(yu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(un),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zs(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ap())),Ze(n),null;case 26:return a=n.memoizedState,e===null?(Zi(n),a!==null?(Ze(n),jm(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Zi(n),Ze(n),jm(n,a)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==o&&Zi(n),Ze(n),n.flags&=-16777217),null;case 27:He(n),a=ht.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=Ct.current,Zs(n)?Tp(n):(e=jg(u,o,a),n.stateNode=e,Zi(n))}return Ze(n),null;case 5:if(He(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(e=Ct.current,Zs(n))Tp(n);else{switch(u=Wl(ht.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[cn]=n,e[Ke]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Mn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=ht.current,Zs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=On,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Gg(e.nodeValue,a)),e||ir(n)}else e=Wl(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else Ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Ap(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yi(n),n):(Yi(n),null)}if(Yi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),Ze(n),null;case 4:return Yt(),e===null&&Of(n.stateNode.containerInfo),Ze(n),null;case 10:return Wi(n.type),Ze(n),null;case 19:if(vt(fn),u=n.memoizedState,u===null)return Ze(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)ho(u,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rl(e),f!==null){for(n.flags|=128,ho(u,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Mp(a,e),a=a.sibling;return St(fn,fn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ft()>Pl&&(n.flags|=128,o=!0,ho(u,!1),n.lanes=4194304)}else{if(!o)if(e=Rl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),ho(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ae)return Ze(n),null}else 2*Ft()-u.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,o=!0,ho(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ft(),n.sibling=null,e=fn.current,St(fn,o?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return Yi(n),Pu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(sr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function hx(e,n){switch(yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(un),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 13:if(Yi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ks()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(fn),null;case 4:return Yt(),null;case 10:return Wi(n.type),null;case 22:case 23:return Yi(n),Pu(),e!==null&&vt(sr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(un),null;case 25:return null;default:return null}}function Zm(e,n){switch(yu(n),n.tag){case 3:Wi(un),Yt();break;case 26:case 27:case 5:He(n);break;case 4:Yt();break;case 13:Yi(n);break;case 19:vt(fn);break;case 10:Wi(n.type);break;case 22:case 23:Yi(n),Pu(),e!==null&&vt(sr);break;case 24:Wi(un)}}function po(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(T){Fe(n,n.return,T)}}function Ta(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var z=a,J=T;try{J()}catch(ut){Fe(u,z,ut)}}}o=o.next}while(o!==f)}}catch(ut){Fe(n,n.return,ut)}}function Km(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Bp(n,a)}catch(o){Fe(e,e.return,o)}}}function Qm(e,n,a){a.props=lr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Ui(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Jm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function uf(e,n,a){try{var o=e.stateNode;Ox(o,e.type,a,n),o[Ke]=n}catch(u){Fe(e,e.return,u)}}function $m(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function ff(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xl));else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(df(e,n,a),e=e.sibling;e!==null;)df(e,n,a),e=e.sibling}function Nl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,n,a),e=e.sibling;e!==null;)Nl(e,n,a),e=e.sibling}function tg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,o,a),n[cn]=e,n[Ke]=a}catch(f){Fe(e,e.return,f)}}var Ki=!1,en=!1,hf=!1,eg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function px(e,n){if(e=e.containerInfo,Bf=Ql,e=dp(e),uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,z=-1,J=0,ut=0,mt=e,et=null;e:for(;;){for(var it;mt!==a||u!==0&&mt.nodeType!==3||(T=S+u),mt!==f||o!==0&&mt.nodeType!==3||(z=S+o),mt.nodeType===3&&(S+=mt.nodeValue.length),(it=mt.firstChild)!==null;)et=mt,mt=it;for(;;){if(mt===e)break e;if(et===a&&++J===u&&(T=S),et===f&&++ut===o&&(z=S),(it=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=it}a=T===-1||z===-1?null:{start:T,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},Ql=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ne=lr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ne,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Fe(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Gf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function ng(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),o&4&&po(5,a);break;case 1:if(ba(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Fe(a,a.return,S)}else{var u=lr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(a,a.return,S)}}o&64&&Km(a),o&512&&mo(a,a.return);break;case 3:if(ba(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bp(e,n)}catch(S){Fe(a,a.return,S)}}break;case 27:n===null&&o&4&&tg(a);case 26:case 5:ba(e,a),n===null&&o&4&&Jm(a),o&512&&mo(a,a.return);break;case 12:ba(e,a);break;case 13:ba(e,a),o&4&&rg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ex.bind(null,a),Gx(e,a))));break;case 22:if(o=a.memoizedState!==null||Ki,!o){n=n!==null&&n.memoizedState!==null||en,u=Ki;var f=en;Ki=o,(en=n)&&!f?Aa(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),Ki=u,en=f}break;case 30:break;default:ba(e,a)}}function ig(e){var n=e.alternate;n!==null&&(e.alternate=null,ig(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ur(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Gn=!1;function Qi(e,n,a){for(a=a.child;a!==null;)ag(e,n,a),a=a.sibling}function ag(e,n,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:en||Ui(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Ui(a,n);var o=qe,u=Gn;La(a.type)&&(qe=a.stateNode,Gn=!1),Qi(e,n,a),To(a.stateNode),qe=o,Gn=u;break;case 5:en||Ui(a,n);case 6:if(o=qe,u=Gn,qe=null,Qi(e,n,a),qe=o,Gn=u,qe!==null)if(Gn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:qe!==null&&(Gn?(e=qe,qg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Lo(e)):qg(qe,a.stateNode));break;case 4:o=qe,u=Gn,qe=a.stateNode.containerInfo,Gn=!0,Qi(e,n,a),qe=o,Gn=u;break;case 0:case 11:case 14:case 15:en||Ta(2,a,n),en||Ta(4,a,n),Qi(e,n,a);break;case 1:en||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Qm(a,n,o)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,Qi(e,n,a),en=o;break;default:Qi(e,n,a)}}function rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lo(e)}catch(a){Fe(n,n.return,a)}}function mx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new eg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new eg),n;default:throw Error(r(435,e.tag))}}function pf(e,n){var a=mx(e);n.forEach(function(o){var u=Tx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(La(T.type)){qe=T.stateNode,Gn=!1;break t}break;case 5:qe=T.stateNode,Gn=!1;break t;case 3:case 4:qe=T.stateNode.containerInfo,Gn=!0;break t}T=T.return}if(qe===null)throw Error(r(160));ag(f,S,u),qe=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)sg(n,e),n=n.sibling}var gi=null;function sg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Ta(3,e,e.return),po(3,e),Ta(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(en||a===null||Ui(a,a.return)),o&64&&Ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gi;if(jn(n,e),Zn(e),o&512&&(en||a===null||Ui(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[wi]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Mn(f,o,a),f[cn]=e,nn(f),o=f;break t;case"link":var S=t_("link","href",u).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=u.createElement(o),Mn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=t_("meta","content",u).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=u.createElement(o),Mn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[cn]=e,nn(f),o=f}e.stateNode=o}else e_(u,e.type,e.stateNode);else e.stateNode=$g(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?e_(u,e.type,e.stateNode):$g(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(en||a===null||Ui(a,a.return)),a!==null&&o&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(en||a===null||Ui(a,a.return)),e.flags&32){u=e.stateNode;try{In(u,"")}catch(it){Fe(e,e.return,it)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,uf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(hf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){Fe(e,e.return,it)}}break;case 3:if(jl=null,u=gi,gi=ql(n.containerInfo),jn(n,e),gi=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(it){Fe(e,e.return,it)}hf&&(hf=!1,og(e));break;case 4:o=gi,gi=ql(e.stateNode.containerInfo),jn(n,e),Zn(e),gi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Sf=Ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,pf(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,J=Ki,ut=en;if(Ki=J||u,en=ut||z,jn(n,e),en=ut,Ki=J,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Ki||en||cr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=z.stateNode;var mt=z.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){Fe(z,z.return,it)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(it){Fe(z,z.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,pf(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,pf(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if($m(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=ff(e);Nl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(In(S,""),a.flags&=-33);var T=ff(e);Nl(e,T,S);break;case 3:case 4:var z=a.stateNode.containerInfo,J=ff(e);df(e,J,z);break;default:throw Error(r(161))}}catch(ut){Fe(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function og(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;og(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ba(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ng(e,n.alternate,n),n=n.sibling}function cr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),cr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qm(n,n.return,a),cr(n);break;case 27:To(n.stateNode);case 26:case 5:Ui(n,n.return),cr(n);break;case 22:n.memoizedState===null&&cr(n);break;case 30:cr(n);break;default:cr(n)}e=e.sibling}}function Aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Aa(u,f,a),po(4,f);break;case 1:if(Aa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Fe(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)zp(z[u],T)}catch(J){Fe(o,o.return,J)}}a&&S&64&&Km(f),mo(f,f.return);break;case 27:tg(f);case 26:case 5:Aa(u,f,a),a&&o===null&&S&4&&Jm(f),mo(f,f.return);break;case 12:Aa(u,f,a);break;case 13:Aa(u,f,a),a&&S&4&&rg(u,f);break;case 22:f.memoizedState===null&&Aa(u,f,a),mo(f,f.return);break;case 30:break;default:Aa(u,f,a)}n=n.sibling}}function mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$s(a))}function gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e))}function Li(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)lg(e,n,a,o),n=n.sibling}function lg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,o),u&2048&&po(9,n);break;case 1:Li(e,n,a,o);break;case 3:Li(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e)));break;case 12:if(u&2048){Li(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else Li(e,n,a,o);break;case 13:Li(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Li(e,n,a,o):go(e,n):f._visibility&2?Li(e,n,a,o):(f._visibility|=2,Qr(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&mf(S,n);break;case 24:Li(e,n,a,o),u&2048&&gf(n.alternate,n);break;default:Li(e,n,a,o)}}function Qr(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,z=o,J=S.flags;switch(S.tag){case 0:case 11:case 15:Qr(f,S,T,z,u),po(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?Qr(f,S,T,z,u):go(f,S):(ut._visibility|=2,Qr(f,S,T,z,u)),u&&J&2048&&mf(S.alternate,S);break;case 24:Qr(f,S,T,z,u),u&&J&2048&&gf(S.alternate,S);break;default:Qr(f,S,T,z,u)}n=n.sibling}}function go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:go(a,o),u&2048&&mf(o.alternate,o);break;case 24:go(a,o),u&2048&&gf(o.alternate,o);break;default:go(a,o)}n=n.sibling}}var _o=8192;function Jr(e){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 26:Jr(e),e.flags&_o&&e.memoizedState!==null&&tS(gi,e.memoizedState,e.memoizedProps);break;case 5:Jr(e);break;case 3:case 4:var n=gi;gi=ql(e.stateNode.containerInfo),Jr(e),gi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=_o,_o=16777216,Jr(e),_o=n):Jr(e));break;default:Jr(e)}}function ug(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,dg(o,e)}ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fg(e),e=e.sibling}function fg(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):vo(e);break;default:vo(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,dg(o,e)}ug(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function dg(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$s(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,f=o.return;if(ig(o),o===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var gx={getCacheForType:function(e){var n=wn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},_x=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ve=null,_e=null,xe=0,De=0,Kn=null,Ra=!1,$r=!1,_f=!1,Ji=0,$e=0,wa=0,ur=0,vf=0,li=0,ts=0,xo=null,Vn=null,xf=!1,Sf=0,Pl=1/0,zl=null,Ca=null,yn=0,Da=null,es=null,ns=0,yf=0,Mf=null,hg=null,So=0,Ef=null;function Qn(){if((Ce&2)!==0&&xe!==0)return xe&-xe;if(B.T!==null){var e=kr;return e!==0?e:Df()}return ye()}function pg(){li===0&&(li=(xe&536870912)===0||Ae?X():536870912);var e=oi.current;return e!==null&&(e.flags|=32),li}function Jn(e,n,a){(e===Ve&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(is(e,0),Ua(e,xe,li,!1)),Bt(e,a),((Ce&2)===0||e!==Ve)&&(e===Ve&&((Ce&2)===0&&(ur|=a),$e===4&&Ua(e,xe,li,!1)),Ni(e))}function mg(e,n,a){if((Ce&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?Sx(e,n):Af(e,n,!0),f=o;do{if(u===0){$r&&!o&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!vx(a)){u=Af(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;u=xo;var z=T.current.memoizedState.isDehydrated;if(z&&(is(T,S).flags|=256),S=Af(T,S,!1),S!==2){if(_f&&!z){T.errorRecoveryDisabledLanes|=f,ur|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){is(e,0),Ua(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(o,n,li,!Ra);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Sf+300-Ft(),10<u)){if(Ua(o,n,li,!Ra),kt(o,0,!0)!==0)break t;o.timeoutHandle=Xg(gg.bind(null,o,a,Vn,zl,xf,n,li,ur,ts,Ra,f,2,-0,0),u);break t}gg(o,a,Vn,zl,xf,n,li,ur,ts,Ra,f,0,-0,0)}}break}while(!0);Ni(e)}function gg(e,n,a,o,u,f,S,T,z,J,ut,mt,et,it){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:$x},cg(n),mt=eS(),mt!==null)){e.cancelPendingCommit=mt(Eg.bind(null,e,n,f,a,o,u,S,T,z,ut,1,et,it)),Ua(e,f,S,!J);return}Eg(e,n,f,a,o,u,S,T,z)}function vx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,o){n&=~vf,n&=~ur,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&gt(e,a,n)}function Bl(){return(Ce&6)===0?(yo(0),!1):!0}function Tf(){if(_e!==null){if(De===0)var e=_e.return;else e=_e,Xi=ar=null,Hu(e),Zr=null,uo=0,e=_e;for(;e!==null;)Zm(e.alternate,e),e=e.return;_e=null}}function is(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,zx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Tf(),Ve=e,_e=a=Gi(e.current,null),xe=n,De=0,Kn=null,Ra=!1,$r=Dt(e,n),_f=!1,ts=li=vf=ur=wa=$e=0,Vn=xo=null,xf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),f=1<<u;n|=e[u],o&=~f}return Ji=n,rl(),a}function _g(e,n){he=null,B.H=Tl,n===eo||n===pl?(n=Op(),De=3):n===Up?(n=Op(),De=4):De=n===Pm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,_e===null&&($e=1,Cl(e,ii(n,e.current)))}function vg(){var e=B.H;return B.H=Tl,e===null?Tl:e}function xg(){var e=B.A;return B.A=gx,e}function bf(){$e=4,Ra||(xe&4194048)!==xe&&oi.current!==null||($r=!0),(wa&134217727)===0&&(ur&134217727)===0||Ve===null||Ua(Ve,xe,li,!1)}function Af(e,n,a){var o=Ce;Ce|=2;var u=vg(),f=xg();(Ve!==e||xe!==n)&&(zl=null,is(e,n)),n=!1;var S=$e;t:do try{if(De!==0&&_e!==null){var T=_e,z=Kn;switch(De){case 8:Tf(),S=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var J=De;if(De=0,Kn=null,as(e,T,z,J),a&&$r){S=0;break t}break;default:J=De,De=0,Kn=null,as(e,T,z,J)}}xx(),S=$e;break}catch(ut){_g(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Xi=ar=null,Ce=o,B.H=u,B.A=f,_e===null&&(Ve=null,xe=0,rl()),S}function xx(){for(;_e!==null;)Sg(_e)}function Sx(e,n){var a=Ce;Ce|=2;var o=vg(),u=xg();Ve!==e||xe!==n?(zl=null,Pl=Ft()+500,is(e,n)):$r=Dt(e,n);t:do try{if(De!==0&&_e!==null){n=_e;var f=Kn;e:switch(De){case 1:De=0,Kn=null,as(e,n,f,1);break;case 2:case 9:if(Lp(f)){De=0,Kn=null,yg(n);break}n=function(){De!==2&&De!==9||Ve!==e||(De=7),Ni(e)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:Lp(f)?(De=0,Kn=null,yg(n)):(De=0,Kn=null,as(e,n,f,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var T=_e;if(!S||n_(S)){De=0,Kn=null;var z=T.sibling;if(z!==null)_e=z;else{var J=T.return;J!==null?(_e=J,Il(J)):_e=null}break e}}De=0,Kn=null,as(e,n,f,5);break;case 6:De=0,Kn=null,as(e,n,f,6);break;case 8:Tf(),$e=6;break t;default:throw Error(r(462))}}yx();break}catch(ut){_g(e,ut)}while(!0);return Xi=ar=null,B.H=o,B.A=u,Ce=a,_e!==null?0:(Ve=null,xe=0,rl(),$e)}function yx(){for(;_e!==null&&!Qt();)Sg(_e)}function Sg(e){var n=Ym(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,n===null?Il(e):_e=n}function yg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Gm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Gm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Hu(n);default:Zm(a,n),n=_e=Mp(n,Ji),n=Ym(a,n,Ji)}e.memoizedProps=e.pendingProps,n===null?Il(e):_e=n}function as(e,n,a,o){Xi=ar=null,Hu(n),Zr=null,uo=0;var u=n.return;try{if(ux(e,u,n,a,xe)){$e=1,Cl(e,ii(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;$e=1,Cl(e,ii(a,e.current)),_e=null;return}n.flags&32768?(Ae||o===1?e=!0:$r||(xe&536870912)!==0?e=!1:(Ra=e=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Mg(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){Mg(n,Ra);return}e=n.return;var a=dx(n.alternate,n,Ji);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);$e===0&&($e=5)}function Mg(e,n){do{var a=hx(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);$e=6,_e=null}function Eg(e,n,a,o,u,f,S,T,z){e.cancelPendingCommit=null;do Fl();while(yn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=mu,Et(e,a,f,S,T,z),e===Ve&&(_e=Ve=null,xe=0),es=n,Da=e,ns=a,yf=f,Mf=u,hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bx(Ye,function(){return wg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=K.p,K.p=2,S=Ce,Ce|=4;try{px(e,n,a)}finally{Ce=S,K.p=u,B.T=o}}yn=1,Tg(),bg(),Ag()}}function Tg(){if(yn===1){yn=0;var e=Da,n=es,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Ce;Ce|=4;try{sg(n,e);var f=If,S=dp(e.containerInfo),T=f.focusedElem,z=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&fp(T.ownerDocument.documentElement,T)){if(z!==null&&uu(T)){var J=z.start,ut=z.end;if(ut===void 0&&(ut=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ut,T.value.length);else{var mt=T.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var it=et.getSelection(),ne=T.textContent.length,$t=Math.min(z.start,ne),Pe=z.end===void 0?$t:Math.min(z.end,ne);!it.extend&&$t>Pe&&(S=Pe,Pe=$t,$t=S);var q=up(T,$t),V=up(T,Pe);if(q&&V&&(it.rangeCount!==1||it.anchorNode!==q.node||it.anchorOffset!==q.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var Q=mt.createRange();Q.setStart(q.node,q.offset),it.removeAllRanges(),$t>Pe?(it.addRange(Q),it.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),it.addRange(Q))}}}}for(mt=[],it=T;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Ql=!!Bf,If=Bf=null}finally{Ce=u,K.p=o,B.T=a}}e.current=n,yn=2}}function bg(){if(yn===2){yn=0;var e=Da,n=es,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Ce;Ce|=4;try{ng(e,n.alternate,n)}finally{Ce=u,K.p=o,B.T=a}}yn=3}}function Ag(){if(yn===4||yn===3){yn=0,Se();var e=Da,n=es,a=ns,o=hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,es=Da=null,Rg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ca=null),we(a),n=n.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=K.p,K.p=2,B.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var T=o[S];f(T.value,{componentStack:T.stack})}}finally{B.T=n,K.p=u}}(ns&3)!==0&&Fl(),Ni(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Ef?So++:(So=0,Ef=e):So=0,yo(0)}}function Rg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$s(n)))}function Fl(e){return Tg(),bg(),Ag(),wg()}function wg(){if(yn!==5)return!1;var e=Da,n=yf;yf=0;var a=we(ns),o=B.T,u=K.p;try{K.p=32>a?32:a,B.T=null,a=Mf,Mf=null;var f=Da,S=ns;if(yn=0,es=Da=null,ns=0,(Ce&6)!==0)throw Error(r(331));var T=Ce;if(Ce|=4,fg(f.current),lg(f,f.current,S,a),Ce=T,yo(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{K.p=u,B.T=o,Rg(e,n)}}function Cg(e,n,a){n=ii(a,n),n=tf(e.stateNode,n,2),e=Sa(e,n,2),e!==null&&(Bt(e,2),Ni(e))}function Fe(e,n,a){if(e.tag===3)Cg(e,e,a);else for(;n!==null;){if(n.tag===3){Cg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){e=ii(a,e),a=Nm(2),o=Sa(n,a,2),o!==null&&(Om(a,o,n,e),Bt(o,2),Ni(o));break}}n=n.return}}function Rf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new _x;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(_f=!0,u.add(a),e=Mx.bind(null,e,n,a),n.then(e,e))}function Mx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(xe&a)===a&&($e===4||$e===3&&(xe&62914560)===xe&&300>Ft()-Sf?(Ce&2)===0&&is(e,0):vf|=a,ts===xe&&(ts=0)),Ni(e)}function Dg(e,n){n===0&&(n=bt()),e=Fr(e,n),e!==null&&(Bt(e,n),Ni(e))}function Ex(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Dg(e,a)}function Tx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Dg(e,a)}function bx(e,n){return G(e,n)}var Hl=null,rs=null,wf=!1,Gl=!1,Cf=!1,fr=0;function Ni(e){e!==rs&&e.next===null&&(rs===null?Hl=rs=e:rs=rs.next=e),Gl=!0,wf||(wf=!0,Rx())}function yo(e,n){if(!Cf&&Gl){Cf=!0;do for(var a=!1,o=Hl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Og(o,f))}else f=xe,f=kt(o,o===Ve?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Dt(o,f)||(a=!0,Og(o,f));o=o.next}while(a);Cf=!1}}function Ax(){Ug()}function Ug(){Gl=wf=!1;var e=0;fr!==0&&(Px()&&(e=fr),fr=0);for(var n=Ft(),a=null,o=Hl;o!==null;){var u=o.next,f=Lg(o,n);f===0?(o.next=null,a===null?Hl=u:a.next=u,u===null&&(rs=a)):(a=o,(e!==0||(f&3)!==0)&&(Gl=!0)),o=u}yo(e)}function Lg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-zt(f),T=1<<S,z=u[S];z===-1?((T&a)===0||(T&o)!==0)&&(u[S]=re(T,n)):z<=n&&(e.expiredLanes|=T),f&=~T}if(n=Ve,a=xe,a=kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(De===2||De===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Re(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Re(o),we(a)){case 2:case 8:a=se;break;case 32:a=Ye;break;case 268435456:a=N;break;default:a=Ye}return o=Ng.bind(null,e),a=G(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Re(o),e.callbackPriority=2,e.callbackNode=null,2}function Ng(e,n){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var o=xe;return o=kt(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(mg(e,o,n),Lg(e,Ft()),e.callbackNode!=null&&e.callbackNode===a?Ng.bind(null,e):null)}function Og(e,n){if(Fl())return null;mg(e,n,!0)}function Rx(){Bx(function(){(Ce&6)!==0?G(Ht,Ax):Ug()})}function Df(){return fr===0&&(fr=X()),fr}function Pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jo(""+e)}function zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function wx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Pg((u[Ke]||null).action),S=o.submitter;S&&(n=(n=S[Ke]||null)?Pg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new nl("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fr!==0){var z=S?zg(u,S):new FormData(u);Zu(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(T.preventDefault(),z=S?zg(u,S):new FormData(u),Zu(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Uf=0;Uf<pu.length;Uf++){var Lf=pu[Uf],Cx=Lf.toLowerCase(),Dx=Lf[0].toUpperCase()+Lf.slice(1);mi(Cx,"on"+Dx)}mi(mp,"onAnimationEnd"),mi(gp,"onAnimationIteration"),mi(_p,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Y0,"onTransitionRun"),mi(j0,"onTransitionStart"),mi(Z0,"onTransitionCancel"),mi(vp,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ux=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Bg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],z=T.instance,J=T.currentTarget;if(T=T.listener,z!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ut){wl(ut)}u.currentTarget=null,f=z}else for(S=0;S<o.length;S++){if(T=o[S],z=T.instance,J=T.currentTarget,T=T.listener,z!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ut){wl(ut)}u.currentTarget=null,f=z}}}}function ve(e,n){var a=n[Cr];a===void 0&&(a=n[Cr]=new Set);var o=e+"__bubble";a.has(o)||(Ig(n,e,2,!1),a.add(o))}function Nf(e,n,a){var o=0;n&&(o|=4),Ig(a,e,o,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Of(e){if(!e[Vl]){e[Vl]=!0,Ko.forEach(function(a){a!=="selectionchange"&&(Ux.has(a)||Nf(a,!1,e),Nf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,Nf("selectionchange",!1,n))}}function Ig(e,n,a,o){switch(l_(n)){case 2:var u=aS;break;case 8:u=rS;break;default:u=jf}a=u.bind(null,n,a,e),u=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Pf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=o.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Fi(T),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){o=f=S;continue t}T=T.parentNode}}o=o.return}Wh(function(){var J=f,ut=$c(a),mt=[];t:{var et=xp.get(e);if(et!==void 0){var it=nl,ne=e;switch(e){case"keypress":if(tl(a)===0)break t;case"keydown":case"keyup":it=b0;break;case"focusin":ne="focus",it=ru;break;case"focusout":ne="blur",it=ru;break;case"beforeblur":case"afterblur":it=ru;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=h0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=w0;break;case mp:case gp:case _p:it=g0;break;case vp:it=D0;break;case"scroll":case"scrollend":it=f0;break;case"wheel":it=L0;break;case"copy":case"cut":case"paste":it=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Kh;break;case"toggle":case"beforetoggle":it=O0}var $t=(n&4)!==0,Pe=!$t&&(e==="scroll"||e==="scrollend"),q=$t?et!==null?et+"Capture":null:et;$t=[];for(var V=J,Q;V!==null;){var pt=V;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||q===null||(pt=Hs(V,q),pt!=null&&$t.push(Eo(V,pt,Q))),Pe)break;V=V.return}0<$t.length&&(et=new it(et,ne,null,a,ut),mt.push({event:et,listeners:$t}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",et&&a!==Jc&&(ne=a.relatedTarget||a.fromElement)&&(Fi(ne)||ne[Ri]))break t;if((it||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,it?(ne=a.relatedTarget||a.toElement,it=J,ne=ne?Fi(ne):null,ne!==null&&(Pe=c(ne),$t=ne.tag,ne!==Pe||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(it=null,ne=J),it!==ne)){if($t=jh,pt="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&($t=Kh,pt="onPointerLeave",q="onPointerEnter",V="pointer"),Pe=it==null?et:Za(it),Q=ne==null?et:Za(ne),et=new $t(pt,V+"leave",it,a,ut),et.target=Pe,et.relatedTarget=Q,pt=null,Fi(ut)===J&&($t=new $t(q,V+"enter",ne,a,ut),$t.target=Q,$t.relatedTarget=Pe,pt=$t),Pe=pt,it&&ne)e:{for($t=it,q=ne,V=0,Q=$t;Q;Q=ss(Q))V++;for(Q=0,pt=q;pt;pt=ss(pt))Q++;for(;0<V-Q;)$t=ss($t),V--;for(;0<Q-V;)q=ss(q),Q--;for(;V--;){if($t===q||q!==null&&$t===q.alternate)break e;$t=ss($t),q=ss(q)}$t=null}else $t=null;it!==null&&Fg(mt,et,it,$t,!1),ne!==null&&Pe!==null&&Fg(mt,Pe,ne,$t,!0)}}t:{if(et=J?Za(J):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var Gt=ap;else if(np(et))if(rp)Gt=X0;else{Gt=V0;var pe=G0}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Qc(J.elementType)&&(Gt=ap):Gt=k0;if(Gt&&(Gt=Gt(e,J))){ip(mt,Gt,a,ut);break t}pe&&pe(e,et,J),e==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&Rn(et,"number",et.value)}switch(pe=J?Za(J):window,e){case"focusin":(np(pe)||pe.contentEditable==="true")&&(zr=pe,fu=J,js=null);break;case"focusout":js=fu=zr=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,hp(mt,a,ut);break;case"selectionchange":if(q0)break;case"keydown":case"keyup":hp(mt,a,ut)}var jt;if(ou)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Pr?tp(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Qh&&a.locale!=="ko"&&(Pr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Pr&&(jt=qh()):(ga=ut,nu="value"in ga?ga.value:ga.textContent,Pr=!0)),pe=kl(J,ee),0<pe.length&&(ee=new Zh(ee,e,null,a,ut),mt.push({event:ee,listeners:pe}),jt?ee.data=jt:(jt=ep(a),jt!==null&&(ee.data=jt)))),(jt=z0?B0(e,a):I0(e,a))&&(ee=kl(J,"onBeforeInput"),0<ee.length&&(pe=new Zh("onBeforeInput","beforeinput",null,a,ut),mt.push({event:pe,listeners:ee}),pe.data=jt)),wx(mt,e,J,a,ut)}Bg(mt,n)})}function Eo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Hs(e,a),u!=null&&o.unshift(Eo(e,u,f)),u=Hs(e,n),u!=null&&o.push(Eo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function ss(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fg(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,z=T.alternate,J=T.stateNode;if(T=T.tag,z!==null&&z===o)break;T!==5&&T!==26&&T!==27||J===null||(z=J,u?(J=Hs(a,f),J!=null&&S.unshift(Eo(a,J,z))):u||(J=Hs(a,f),J!=null&&S.push(Eo(a,J,z)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Lx=/\r\n?/g,Nx=/\u0000|\uFFFD/g;function Hg(e){return(typeof e=="string"?e:""+e).replace(Lx,`
`).replace(Nx,"")}function Gg(e,n){return n=Hg(n),Hg(e)===n}function Xl(){}function Oe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||In(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&In(e,""+o);break;case"className":It(e,"class",o);break;case"tabIndex":It(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,a,o);break;case"style":kh(e,o,f);break;case"data":if(n!=="object"){It(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Jo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",u.name,u,null),Oe(e,n,"formEncType",u.formEncType,u,null),Oe(e,n,"formMethod",u.formMethod,u,null),Oe(e,n,"formTarget",u.formTarget,u,null)):(Oe(e,n,"encType",u.encType,u,null),Oe(e,n,"method",u.method,u,null),Oe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Jo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Xl);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Jo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Lt(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Lt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=c0.get(a)||a,Lt(e,a,o))}}function zf(e,n,a,o,u,f){switch(a){case"style":kh(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?In(e,o):(typeof o=="number"||typeof o=="bigint")&&In(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Ke]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Lt(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,f,S,a,null)}}u&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=S=u=null,z=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":u=ut;break;case"type":S=ut;break;case"checked":z=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Oe(e,n,o,ut,a,null)}}Nn(e,f,T,z,J,S,u,!1),ge(e);return;case"select":ve("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Oe(e,n,u,T,a,null)}n=f,a=S,e.multiple=!!o,n!=null?Qe(e,!!o,n,!1):a!=null&&Qe(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Oe(e,n,S,T,a,null)}Lr(e,o,u,f),ge(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,z,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Mo.length;o++)ve(Mo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,J,o,a,null)}return;default:if(Qc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&zf(e,n,ut,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Oe(e,n,T,o,a,null))}function Ox(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,z=null,J=null,ut=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":z=mt;default:o.hasOwnProperty(it)||Oe(e,n,it,null,o,mt)}}for(var et in o){var it=o[et];if(mt=a[et],o.hasOwnProperty(et)&&(it!=null||mt!=null))switch(et){case"type":f=it;break;case"name":u=it;break;case"checked":J=it;break;case"defaultChecked":ut=it;break;case"value":S=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==mt&&Oe(e,n,et,it,o,mt)}}Ie(e,S,T,z,J,ut,f,u);return;case"select":it=S=T=et=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":it=z;default:o.hasOwnProperty(f)||Oe(e,n,f,null,o,z)}for(u in o)if(f=o[u],z=a[u],o.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==z&&Oe(e,n,u,f,o,z)}n=T,a=S,o=it,et!=null?Qe(e,!!a,et,!1):!!o!=!!a&&(n!=null?Qe(e,!!a,n,!0):Qe(e,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(e,n,T,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":et=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Oe(e,n,S,u,o,f)}xn(e,et,it);return;case"option":for(var ne in a)if(et=a[ne],a.hasOwnProperty(ne)&&et!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Oe(e,n,ne,null,o,et)}for(z in o)if(et=o[z],it=a[z],o.hasOwnProperty(z)&&et!==it&&(et!=null||it!=null))switch(z){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Oe(e,n,z,et,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)et=a[$t],a.hasOwnProperty($t)&&et!=null&&!o.hasOwnProperty($t)&&Oe(e,n,$t,null,o,et);for(J in o)if(et=o[J],it=a[J],o.hasOwnProperty(J)&&et!==it&&(et!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Oe(e,n,J,et,o,it)}return;default:if(Qc(n)){for(var Pe in a)et=a[Pe],a.hasOwnProperty(Pe)&&et!==void 0&&!o.hasOwnProperty(Pe)&&zf(e,n,Pe,void 0,o,et);for(ut in o)et=o[ut],it=a[ut],!o.hasOwnProperty(ut)||et===it||et===void 0&&it===void 0||zf(e,n,ut,et,o,it);return}}for(var q in a)et=a[q],a.hasOwnProperty(q)&&et!=null&&!o.hasOwnProperty(q)&&Oe(e,n,q,null,o,et);for(mt in o)et=o[mt],it=a[mt],!o.hasOwnProperty(mt)||et===it||et==null&&it==null||Oe(e,n,mt,et,o,it)}var Bf=null,If=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function Vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ff(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hf=null;function Px(){var e=window.event;return e&&e.type==="popstate"?e===Hf?!1:(Hf=e,!0):(Hf=null,!1)}var Xg=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(e){return Wg.resolve(null).then(e).catch(Ix)}:Xg;function Ix(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function qg(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&To(S.documentElement),a&2&&To(S.body),a&4)for(a=S.head,To(a),S=a.firstChild;S;){var T=S.nextSibling,z=S.nodeName;S[wi]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(u===0){e.removeChild(f),Lo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Lo(n)}function Gf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gf(a),Ur(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Fx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function Hx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Vf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Gx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var kf=null;function Yg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function jg(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ur(e)}var ci=new Map,Zg=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=K.d;K.d={f:Vx,r:kx,D:Xx,C:Wx,L:qx,m:Yx,X:Zx,S:jx,M:Kx};function Vx(){var e=$i.f(),n=Bl();return e||n}function kx(e){var n=pa(e);n!==null&&n.tag===5&&n.type==="form"?mm(n):$i.r(e)}var os=typeof document>"u"?null:document;function Kg(e,n,a){var o=os;if(o&&typeof n=="string"&&n){var u=pn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Zg.has(u)||(Zg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Mn(n,"link",e),nn(n),o.head.appendChild(n)))}}function Xx(e){$i.D(e),Kg("dns-prefetch",e,null)}function Wx(e,n){$i.C(e,n),Kg("preconnect",e,n)}function qx(e,n,a){$i.L(e,n,a);var o=os;if(o&&e&&n){var u='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pn(a.imageSizes)+'"]')):u+='[href="'+pn(e)+'"]';var f=u;switch(n){case"style":f=ls(e);break;case"script":f=cs(e)}ci.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(bo(f))||n==="script"&&o.querySelector(Ao(f))||(n=o.createElement("link"),Mn(n,"link",e),nn(n),o.head.appendChild(n)))}}function Yx(e,n){$i.m(e,n);var a=os;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pn(o)+'"][href="'+pn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cs(e)}if(!ci.has(f)&&(e=g({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}o=a.createElement("link"),Mn(o,"link",e),nn(o),a.head.appendChild(o)}}}function jx(e,n,a){$i.S(e,n,a);var o=os;if(o&&e){var u=ma(o).hoistableStyles,f=ls(e);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(bo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&Xf(e,a);var z=S=o.createElement("link");nn(z),Mn(z,"link",e),z._p=new Promise(function(J,ut){z.onload=J,z.onerror=ut}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function Zx(e,n){$i.X(e,n);var a=os;if(a&&e){var o=ma(a).hoistableScripts,u=cs(e),f=o.get(u);f||(f=a.querySelector(Ao(u)),f||(e=g({src:e,async:!0},n),(n=ci.get(u))&&Wf(e,n),f=a.createElement("script"),nn(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Kx(e,n){$i.M(e,n);var a=os;if(a&&e){var o=ma(a).hoistableScripts,u=cs(e),f=o.get(u);f||(f=a.querySelector(Ao(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ci.get(u))&&Wf(e,n),f=a.createElement("script"),nn(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Qg(e,n,a,o){var u=(u=ht.current)?ql(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ls(a.href),a=ma(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ls(a.href);var f=ma(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(bo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||Qx(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=ma(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ls(e){return'href="'+pn(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function Jg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Qx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),nn(n),e.head.appendChild(n))}function cs(e){return'[src="'+pn(e)+'"]'}function Ao(e){return"script[async]"+e}function $g(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pn(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),Mn(o,"style",u),Yl(o,a.precedence,e),n.instance=o;case"stylesheet":u=ls(a.href);var f=e.querySelector(bo(u));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;o=Jg(a),(u=ci.get(u))&&Xf(o,u),f=(e.ownerDocument||e).createElement("link"),nn(f);var S=f;return S._p=new Promise(function(T,z){S.onload=T,S.onerror=z}),Mn(f,"link",o),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=cs(a.src),(u=e.querySelector(Ao(f)))?(n.instance=u,nn(u),u):(o=a,(u=ci.get(f))&&(o=g({},a),Wf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nn(u),Mn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yl(o,a.precedence,e));return n.instance}function Yl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jl=null;function t_(e,n,a){if(jl===null){var o=new Map,u=jl=new Map;u.set(a,o)}else u=jl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[wi]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function e_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Jx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ro=null;function $x(){}function tS(e,n,a){if(Ro===null)throw Error(r(475));var o=Ro;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ls(a.href),f=e.querySelector(bo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Zl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,nn(f);return}f=e.ownerDocument||e,a=Jg(a),(u=ci.get(u))&&Xf(a,u),f=f.createElement("link"),nn(f);var S=f;S._p=new Promise(function(T,z){S.onload=T,S.onerror=z}),Mn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Zl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function eS(){if(Ro===null)throw Error(r(475));var e=Ro;return e.stylesheets&&e.count===0&&qf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&qf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Zl(){if(this.count--,this.count===0){if(this.stylesheets)qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function qf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(nS,e),Kl=null,Zl.call(e))}function nS(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var o=a.get(null);else{a=new Map,Kl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=Zl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function iS(e,n,a,o,u,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function i_(e,n,a,o,u,f,S,T,z,J,ut,mt){return e=new iS(e,n,a,S,T,z,J,mt),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Du(f),e}function a_(e){return e?(e=Hr,e):Hr}function r_(e,n,a,o,u,f){u=a_(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Sa(e,o,n),a!==null&&(Jn(a,e,n),io(a,e,n))}function s_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Yf(e,n){s_(e,n),(e=e.alternate)&&s_(e,n)}function o_(e){if(e.tag===13){var n=Fr(e,67108864);n!==null&&Jn(n,e,67108864),Yf(e,67108864)}}var Ql=!0;function aS(e,n,a,o){var u=B.T;B.T=null;var f=K.p;try{K.p=2,jf(e,n,a,o)}finally{K.p=f,B.T=u}}function rS(e,n,a,o){var u=B.T;B.T=null;var f=K.p;try{K.p=8,jf(e,n,a,o)}finally{K.p=f,B.T=u}}function jf(e,n,a,o){if(Ql){var u=Zf(o);if(u===null)Pf(e,n,o,Jl,a),c_(e,o);else if(oS(u,e,n,a,o))o.stopPropagation();else if(c_(e,o),n&4&&-1<sS.indexOf(e)){for(;u!==null;){var f=pa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Zt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var z=1<<31-zt(S);T.entanglements[1]|=z,S&=~z}Ni(f),(Ce&6)===0&&(Pl=Ft()+500,yo(0))}}break;case 13:T=Fr(f,2),T!==null&&Jn(T,f,2),Bl(),Yf(f,2)}if(f=Zf(o),f===null&&Pf(e,n,o,Jl,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Pf(e,n,o,null,a)}}function Zf(e){return e=$c(e),Kf(e)}var Jl=null;function Kf(e){if(Jl=null,e=Fi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function l_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case Ht:return 2;case se:return 8;case Ye:case je:return 32;case N:return 268435456;default:return 32}default:return 32}}var Qf=!1,Na=null,Oa=null,Pa=null,Co=new Map,Do=new Map,za=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c_(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=pa(n),n!==null&&o_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function oS(e,n,a,o,u){switch(n){case"focusin":return Na=Uo(Na,e,n,a,o,u),!0;case"dragenter":return Oa=Uo(Oa,e,n,a,o,u),!0;case"mouseover":return Pa=Uo(Pa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Uo(Co.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,e,n,a,o,u)),!0}return!1}function u_(e){var n=Fi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,hi(e.priority,function(){if(a.tag===13){var o=Qn();o=ae(o);var u=Fr(a,o);u!==null&&Jn(u,a,o),Yf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Zf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Jc=o,a.target.dispatchEvent(o),Jc=null}else return n=pa(a),n!==null&&o_(n),e.blockedOn=a,!1;n.shift()}return!0}function f_(e,n,a){$l(e)&&a.delete(n)}function lS(){Qf=!1,Na!==null&&$l(Na)&&(Na=null),Oa!==null&&$l(Oa)&&(Oa=null),Pa!==null&&$l(Pa)&&(Pa=null),Co.forEach(f_),Do.forEach(f_)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Qf||(Qf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,lS)))}var ec=null;function d_(e){ec!==e&&(ec=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Kf(o||a)===null)continue;break}var f=pa(a);f!==null&&(e.splice(n,3),n-=3,Zu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Lo(e){function n(z){return tc(z,e)}Na!==null&&tc(Na,e),Oa!==null&&tc(Oa,e),Pa!==null&&tc(Pa,e),Co.forEach(n),Do.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)u_(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[Ke]||null;if(typeof f=="function")S||d_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Ke]||null)T=S.formAction;else if(Kf(u)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),d_(a)}}}function Jf(e){this._internalRoot=e}nc.prototype.render=Jf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();r_(a,o,e,n,null,null)},nc.prototype.unmount=Jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;r_(e.current,2,null,e,null,null),Bl(),n[Ri]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ye();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&u_(e)}};var h_=t.version;if(h_!=="19.1.1")throw Error(r(527,h_,"19.1.1"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var cS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{ct=ic.inject(cS),_t=ic}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Cm,f=Dm,S=Um,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=i_(e,1,!1,null,null,a,o,u,f,S,T,null),e[Ri]=n.current,Of(e),new Jf(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=Cm,S=Dm,T=Um,z=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=i_(e,1,!0,n,a??null,o,u,f,S,T,z,J),n.context=a_(null),a=n.current,o=Qn(),o=ae(o),u=xa(o),u.callback=null,Sa(a,u,o),a=o,n.current.lanes=a,Bt(n,a),Ni(n),e[Ri]=n.current,Of(e),new nc(n)},Oo.version="19.1.1",Oo}var E_;function SS(){if(E_)return ed.exports;E_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ed.exports=xS(),ed.exports}var yS=SS();const MS="/images/libertyStatue.jpg",ES="/images/brooklyn.jpg",TS="/images/grandCentral.jpg",bS="/images/wallSt.jpg",AS="/images/timesSquare1.jpg",RS="/images/timesSquare2.jpg",wS="/svg/arrowLeft.svg",CS="/svg/arrowRight.svg";function DS(){const[s,t]=Ar.useState(0),i=[{title:"Me under the Liberty statue!",img:MS},{title:"A photo of the Manhattan bridge as seen from Brooklyn!",img:ES},{title:"Grand Central Station!",img:TS},{title:"A photo of the iconic Wall Street sign!",img:bS},{title:"Photo of the famous 'Red Stair' in Times Square.",img:AS},{title:"Another photo of Times Square!",img:RS}];function r(){t(c=>(c+1)%i.length)}function l(){t(c=>(c-1+i.length)%i.length)}return At.jsxs("div",{id:"imageContainer",children:[At.jsx("span",{className:"text",children:i[s].title}),At.jsxs("div",{id:"galleryDiv",children:[At.jsx("button",{className:"galleryBtn",id:"back",onClick:l,children:At.jsx("img",{className:"arrow",src:wS,alt:"Previous"})}),At.jsx("img",{src:i[s].img,alt:i[s].title,id:"gallery",className:"gabrieleImg"}),At.jsx("button",{className:"galleryBtn",id:"front",onClick:r,children:At.jsx("img",{className:"arrow",src:CS,alt:"Next"})})]})]})}function US(){return At.jsxs("div",{id:"text",children:[At.jsxs("h4",{children:["Hello!",At.jsx("br",{}),"I'm Gabriele"]}),At.jsxs("p",{children:["I'm a ",new Date().getFullYear()-2008,` years old student, attending "Dell'Erba" school in Castellana Grotte where I'm studying Computer Science. I have a passion for programming and software development. I love creating new projects and learning new technologies. I have experience in various programming languages, and I'm always open to learn more. I was born in Putignano (Ba) and I now know programming languages like C, C++, Python, Java and also a little bit of the basics of php and Javascript (needed for this PortFolio)...`]})]})}function LS(){return At.jsxs("div",{id:"about",children:[At.jsx("div",{id:"name",children:At.jsx("span",{children:"ABOUT MYSELF"})}),At.jsxs("div",{id:"content",children:[At.jsx(US,{}),At.jsx(DS,{})]})]})}const NS="/svg/github.svg",OS="/svg/instagram.svg",PS="/svg/gmail.svg";function zS(){return At.jsxs("footer",{id:"footer",children:[At.jsxs("div",{id:"contact",children:[At.jsx("span",{id:"github",children:At.jsxs("a",{href:"https://github.com/gabontrash",target:"_blank",children:[At.jsx("img",{src:NS,alt:"GitHub"}),"GitHub"]})}),At.jsx("span",{id:"instagram",children:At.jsxs("a",{href:"https://www.instagram.com/_gabrielearmenise",target:"_blank",children:[At.jsx("img",{src:OS,alt:"Instagram"}),"Instagram"]})}),At.jsx("span",{id:"gmail",children:At.jsxs("a",{href:"mailto:gabrielearmenise08@gmail.com",target:"_blank",children:[At.jsx("img",{src:PS,alt:"Gmail"}),"Gmail"]})})]}),At.jsxs("div",{id:"copyright",children:["© ",new Date().getFullYear()," Gabriele Armenise. All rights reserved."]})]})}var wv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},T_=Tr.createContext&&Tr.createContext(wv),BS=["attr","size","title"];function IS(s,t){if(s==null)return{};var i=FS(s,t),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(l=0;l<c.length;l++)r=c[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function FS(s,t){if(s==null)return{};var i={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(t.indexOf(r)>=0)continue;i[r]=s[r]}return i}function Hc(){return Hc=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Hc.apply(this,arguments)}function b_(s,t){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function Gc(s){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?b_(Object(i),!0).forEach(function(r){HS(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):b_(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function HS(s,t,i){return t=GS(t),t in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}function GS(s){var t=VS(s,"string");return typeof t=="symbol"?t:t+""}function VS(s,t){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function Cv(s){return s&&s.map((t,i)=>Tr.createElement(t.tag,Gc({key:i},t.attr),Cv(t.child)))}function qc(s){return t=>Tr.createElement(kS,Hc({attr:Gc({},s.attr)},t),Cv(s.child))}function kS(s){var t=i=>{var{attr:r,size:l,title:c}=s,d=IS(s,BS),h=l||i.size||"1em",m;return i.className&&(m=i.className),s.className&&(m=(m?m+" ":"")+s.className),Tr.createElement("svg",Hc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,d,{className:m,style:Gc(Gc({color:s.color||i.color},i.style),s.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&Tr.createElement("title",null,c),s.children)};return T_!==void 0?Tr.createElement(T_.Consumer,null,i=>t(i)):t(wv)}function XS(s){return qc({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function WS(s){return qc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(s)}function qS(s){return qc({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(s)}function YS(s){return qc({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(s)}const jS="/images/globe.png";function ZS(){const[s,t]=Ar.useState(!1);return At.jsxs("nav",{id:"navbar",className:s?"open":"",children:[At.jsxs("div",{id:"logo",children:[At.jsx("img",{src:jS,alt:"Logo"}),At.jsx("p",{children:"Gabriele"})]}),At.jsx("div",{className:"hamburger",onClick:()=>t(!s),children:s?At.jsx(YS,{}):At.jsx(WS,{})}),At.jsxs("ul",{className:s?"nav-links active":"nav-links",children:[At.jsx("li",{children:At.jsx("a",{href:"#about",children:"About me"})}),At.jsx("li",{children:At.jsx("a",{href:"#projects",children:"Projects"})}),At.jsx("li",{children:At.jsx("a",{href:"#contact",children:"Contact"})}),At.jsx("li",{children:At.jsxs("a",{href:"/Gabriele_Armenise_CV_IT_ENG.zip",download:!0,children:["Curriculum",At.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.3rem",viewBox:"0 -960 960 960",width:"1.3rem",fill:"currentColor",children:At.jsx("path",{d:"M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"})})]})})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="179",KS=0,A_=1,QS=2,Dv=1,JS=2,ra=3,ja=0,Bn=1,sa=2,qa=0,Rs=1,R_=2,w_=3,C_=4,$S=5,Sr=100,ty=101,ey=102,ny=103,iy=104,ay=200,ry=201,sy=202,oy=203,Fd=204,Hd=205,ly=206,cy=207,uy=208,fy=209,dy=210,hy=211,py=212,my=213,gy=214,Gd=0,Vd=1,kd=2,Us=3,Xd=4,Wd=5,qd=6,Yd=7,Uv=0,_y=1,vy=2,Ya=0,xy=1,Sy=2,yy=3,My=4,Ey=5,Ty=6,by=7,Lv=300,Ls=301,Ns=302,jd=303,Zd=304,Yc=306,Kd=1e3,Mr=1001,Qd=1002,Ti=1003,Ay=1004,ac=1005,Bi=1006,rd=1007,Er=1008,ua=1009,Nv=1010,Ov=1011,Go=1012,Ch=1013,Rr=1014,oa=1015,qo=1016,Dh=1017,Uh=1018,Vo=1020,Pv=35902,zv=1021,Bv=1022,Mi=1023,ko=1026,Xo=1027,Iv=1028,Lh=1029,Fv=1030,Nh=1031,Oh=1033,Oc=33776,Pc=33777,zc=33778,Bc=33779,Jd=35840,$d=35841,th=35842,eh=35843,nh=36196,ih=37492,ah=37496,rh=37808,sh=37809,oh=37810,lh=37811,ch=37812,uh=37813,fh=37814,dh=37815,hh=37816,ph=37817,mh=37818,gh=37819,_h=37820,vh=37821,Ic=36492,xh=36494,Sh=36495,Hv=36283,yh=36284,Mh=36285,Eh=36286,Ry=3200,wy=3201,Cy=0,Dy=1,Xa="",ei="srgb",Os="srgb-linear",Vc="linear",ze="srgb",us=7680,D_=519,Uy=512,Ly=513,Ny=514,Gv=515,Oy=516,Py=517,zy=518,By=519,Th=35044,U_="300 es",Ii=2e3,kc=2001;class zs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let L_=1234567;const ws=Math.PI/180,Wo=180/Math.PI;function la(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function oe(s,t,i){return Math.max(t,Math.min(i,s))}function Ph(s,t){return(s%t+t)%t}function Iy(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function Fy(s,t,i){return s!==t?(i-s)/(t-s):0}function Ho(s,t,i){return(1-i)*s+i*t}function Hy(s,t,i,r){return Ho(s,t,1-Math.exp(-i*r))}function Gy(s,t=1){return t-Math.abs(Ph(s,t*2)-t)}function Vy(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function ky(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function Xy(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Wy(s,t){return s+Math.random()*(t-s)}function qy(s){return s*(.5-Math.random())}function Yy(s){s!==void 0&&(L_=s);let t=L_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jy(s){return s*ws}function Zy(s){return s*Wo}function Ky(s){return(s&s-1)===0&&s!==0}function Qy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $y(s,t,i,r,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((t+r)/2),g=d((t+r)/2),v=c((t-r)/2),x=d((t-r)/2),M=c((r-t)/2),b=d((r-t)/2);switch(l){case"XYX":s.set(h*g,m*v,m*x,h*p);break;case"YZY":s.set(m*x,h*g,m*v,h*p);break;case"ZXZ":s.set(m*v,m*x,h*g,h*p);break;case"XZX":s.set(h*g,m*b,m*M,h*p);break;case"YXY":s.set(m*M,h*g,m*b,h*p);break;case"ZYZ":s.set(m*b,m*M,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function yi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vv={DEG2RAD:ws,RAD2DEG:Wo,generateUUID:la,clamp:oe,euclideanModulo:Ph,mapLinear:Iy,inverseLerp:Fy,lerp:Ho,damp:Hy,pingpong:Gy,smoothstep:Vy,smootherstep:ky,randInt:Xy,randFloat:Wy,randFloatSpread:qy,seededRandom:Yy,degToRad:jy,radToDeg:Zy,isPowerOfTwo:Ky,ceilPowerOfTwo:Qy,floorPowerOfTwo:Jy,setQuaternionFromProperEuler:$y,normalize:Ue,denormalize:yi};class be{constructor(t=0,i=0){be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(oe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(oe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=c[d+0],M=c[d+1],b=c[d+2],R=c[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=x,t[i+1]=M,t[i+2]=b,t[i+3]=R;return}if(v!==R||m!==x||p!==M||g!==b){let y=1-h;const _=m*x+p*M+g*b+v*R,O=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const P=Math.sqrt(U),H=Math.atan2(P,_*O);y=Math.sin(y*H)/P,h=Math.sin(h*H)/P}const w=h*O;if(m=m*y+x*w,p=p*y+M*w,g=g*y+b*w,v=v*y+R*w,y===1-h){const P=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=P,p*=P,g*=P,v*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[d],x=c[d+1],M=c[d+2],b=c[d+3];return t[i]=h*b+g*v+m*M-p*x,t[i+1]=m*b+g*x+p*v-h*M,t[i+2]=p*b+g*M+h*x-m*v,t[i+3]=g*b-h*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(c/2),x=m(r/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"YXZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"ZXY":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"ZYX":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"YZX":this._x=x*g*v+p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v-x*M*b;break;case"XZY":this._x=x*g*v-p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+h+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-r*p,this._z=c*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,r=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(N_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(N_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),g=2*(h*i-c*l),v=2*(c*r-d*i);return this.x=i+m*p+d*v-h*g,this.y=r+m*g+h*p-c*v,this.z=l+m*v+c*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this.z=oe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this.z=oe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(oe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return sd.copy(this).projectOnVector(t),this.sub(sd)}reflect(t){return this.sub(sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(oe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new Z,N_=new Yo;class ce{constructor(t,i,r,l,c,d,h,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],M=r[5],b=r[8],R=l[0],y=l[3],_=l[6],O=l[1],U=l[4],w=l[7],P=l[2],H=l[5],F=l[8];return c[0]=d*R+h*O+m*P,c[3]=d*y+h*U+m*H,c[6]=d*_+h*w+m*F,c[1]=p*R+g*O+v*P,c[4]=p*y+g*U+v*H,c[7]=p*_+g*w+v*F,c[2]=x*R+M*O+b*P,c[5]=x*y+M*U+b*H,c[8]=x*_+M*w+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-r*c*g+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*d-h*p,x=h*m-g*c,M=p*c-d*m,b=i*v+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=v*R,t[1]=(l*p-g*r)*R,t[2]=(h*r-l*d)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-h*i)*R,t[6]=M*R,t[7]=(r*m-p*i)*R,t[8]=(d*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(od.makeScale(t,i)),this}rotate(t){return this.premultiply(od.makeRotation(-t)),this}translate(t,i){return this.premultiply(od.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const od=new ce;function kv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tM(){const s=Xc("canvas");return s.style.display="block",s}const O_={};function Cs(s){s in O_||(O_[s]=!0,console.warn(s))}function eM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const P_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nM(){const s={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===ze&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ze&&(l.r=Ds(l.r),l.g=Ds(l.g),l.b=Ds(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Vc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Os]:{primaries:t,whitePoint:r,transfer:Vc,toXYZ:P_,fromXYZ:z_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:P_,fromXYZ:z_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const Te=nM();function ca(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fs;class iM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{fs===void 0&&(fs=Xc("canvas")),fs.width=t.width,fs.height=t.height;const l=fs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=fs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ca(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ca(i[r]/255)*255):i[r]=ca(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let aM=0;class zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=la(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(ld(l[d].image)):c.push(ld(l[d]))}else c=ld(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function ld(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rM=0;const cd=new Z;class Xn extends zs{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Mr,l=Mr,c=Bi,d=Er,h=Mi,m=ua,p=Xn.DEFAULT_ANISOTROPY,g=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=la(),this.name="",this.source=new zh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kd:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case Qd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kd:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case Qd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Lv;Xn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,i=0,r=0,l=1){ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],b=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(M+1)/2,P=(_+1)/2,H=(g+x)/4,F=(v+R)/4,k=(b+y)/4;return U>w&&U>P?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=H/r,c=F/r):w>P?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=H/l,c=k/l):P<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),r=F/c,l=k/c),this.set(r,l,c,i),this}let O=Math.sqrt((y-b)*(y-b)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(y-b)/O,this.y=(v-R)/O,this.z=(x-g)/O,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this.z=oe(this.z,t.z,i.z),this.w=oe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this.z=oe(this.z,t,i),this.w=oe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(oe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends zs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ke(0,0,t,i),this.scissorTest=!1,this.viewport=new ke(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Xn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Bi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new zh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends sM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Xv extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class oM extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ha{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,vi):vi.fromBufferAttribute(c,d),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),sc.subVectors(this.max,Po),ds.subVectors(t.a,Po),hs.subVectors(t.b,Po),ps.subVectors(t.c,Po),Ia.subVectors(hs,ds),Fa.subVectors(ps,hs),dr.subVectors(ds,ps);let i=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-dr.z,dr.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,dr.z,0,-dr.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-dr.y,dr.x,0];return!ud(i,ds,hs,ps,sc)||(i=[1,0,0,0,1,0,0,0,1],!ud(i,ds,hs,ps,sc))?!1:(oc.crossVectors(Ia,Fa),i=[oc.x,oc.y,oc.z],ud(i,ds,hs,ps,sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ta=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],vi=new Z,rc=new ha,ds=new Z,hs=new Z,ps=new Z,Ia=new Z,Fa=new Z,dr=new Z,Po=new Z,sc=new Z,oc=new Z,hr=new Z;function ud(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){hr.fromArray(s,c);const h=l.x*Math.abs(hr.x)+l.y*Math.abs(hr.y)+l.z*Math.abs(hr.z),m=t.dot(hr),p=i.dot(hr),g=r.dot(hr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const lM=new ha,zo=new Z,fd=new Z;class Bs{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):lM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(zo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(fd)),this.expandByPoint(zo.copy(t.center).sub(fd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ea=new Z,dd=new Z,lc=new Z,Ha=new Z,hd=new Z,cc=new Z,pd=new Z;class cM{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){dd.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(dd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(lc),h=Ha.dot(this.direction),m=-Ha.dot(lc),p=Ha.lengthSq(),g=Math.abs(1-d*d);let v,x,M,b;if(g>0)if(v=d*m-h,x=d*h-m,b=c*g,v>=0)if(x>=-b)if(x<=b){const R=1/g;v*=R,x*=R,M=v*(v+d*x+2*h)+x*(d*v+x+2*m)+p}else x=c,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-d*c+h)),x=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(v=Math.max(0,-(d*c+h)),x=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p);else x=d>0?-c:c,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(dd).addScaledVector(lc,x),M}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,d=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,d=(t.min.y-x.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,r,l,c){hd.subVectors(i,t),cc.subVectors(r,t),pd.crossVectors(hd,cc);let d=this.direction.dot(pd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ha.subVectors(this.origin,t);const m=h*this.direction.dot(cc.crossVectors(Ha,cc));if(m<0)return null;const p=h*this.direction.dot(hd.cross(Ha));if(p<0||m+p>d)return null;const g=-h*Ha.dot(pd);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(t,i,r,l,c,d,h,m,p,g,v,x,M,b,R,y){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,g,v,x,M,b,R,y)}set(t,i,r,l,c,d,h,m,p,g,v,x,M,b,R,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=b,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ms.setFromMatrixColumn(t,0).length(),c=1/ms.setFromMatrixColumn(t,1).length(),d=1/ms.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=d*g,M=d*v,b=h*g,R=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=x-R*p,i[9]=-h*m,i[2]=R-x*p,i[6]=b+M*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*g,M=m*v,b=p*g,R=p*v;i[0]=x+R*h,i[4]=b*h-M,i[8]=d*p,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=M*h-b,i[6]=R+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*g,M=m*v,b=p*g,R=p*v;i[0]=x-R*h,i[4]=-d*v,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*g,i[9]=R-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*g,M=d*v,b=h*g,R=h*v;i[0]=m*g,i[4]=b*p-M,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,M=d*p,b=h*m,R=h*p;i[0]=m*g,i[4]=R-x*v,i[8]=b*v+M,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*v+b,i[10]=x-R*v}else if(t.order==="XZY"){const x=d*m,M=d*p,b=h*m,R=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=d*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=h*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uM,t,fM)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ga.crossVectors(r,$n),Ga.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ga.crossVectors(r,$n)),Ga.normalize(),uc.crossVectors($n,Ga),l[0]=Ga.x,l[4]=uc.x,l[8]=$n.x,l[1]=Ga.y,l[5]=uc.y,l[9]=$n.y,l[2]=Ga.z,l[6]=uc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],M=r[13],b=r[2],R=r[6],y=r[10],_=r[14],O=r[3],U=r[7],w=r[11],P=r[15],H=l[0],F=l[4],k=l[8],C=l[12],D=l[1],I=l[5],st=l[9],lt=l[13],ft=l[2],dt=l[6],B=l[10],K=l[14],Y=l[3],xt=l[7],L=l[11],$=l[15];return c[0]=d*H+h*D+m*ft+p*Y,c[4]=d*F+h*I+m*dt+p*xt,c[8]=d*k+h*st+m*B+p*L,c[12]=d*C+h*lt+m*K+p*$,c[1]=g*H+v*D+x*ft+M*Y,c[5]=g*F+v*I+x*dt+M*xt,c[9]=g*k+v*st+x*B+M*L,c[13]=g*C+v*lt+x*K+M*$,c[2]=b*H+R*D+y*ft+_*Y,c[6]=b*F+R*I+y*dt+_*xt,c[10]=b*k+R*st+y*B+_*L,c[14]=b*C+R*lt+y*K+_*$,c[3]=O*H+U*D+w*ft+P*Y,c[7]=O*F+U*I+w*dt+P*xt,c[11]=O*k+U*st+w*B+P*L,c[15]=O*C+U*lt+w*K+P*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],M=t[14],b=t[3],R=t[7],y=t[11],_=t[15];return b*(+c*m*v-l*p*v-c*h*x+r*p*x+l*h*M-r*m*M)+R*(+i*m*M-i*p*x+c*d*x-l*d*M+l*p*g-c*m*g)+y*(+i*p*v-i*h*M-c*d*v+r*d*M+c*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*x+l*d*v-r*d*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],M=t[11],b=t[12],R=t[13],y=t[14],_=t[15],O=v*y*p-R*x*p+R*m*M-h*y*M-v*m*_+h*x*_,U=b*x*p-g*y*p-b*m*M+d*y*M+g*m*_-d*x*_,w=g*R*p-b*v*p+b*h*M-d*R*M-g*h*_+d*v*_,P=b*v*m-g*R*m-b*h*x+d*R*x+g*h*y-d*v*y,H=i*O+r*U+l*w+c*P;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return t[0]=O*F,t[1]=(R*x*c-v*y*c-R*l*M+r*y*M+v*l*_-r*x*_)*F,t[2]=(h*y*c-R*m*c+R*l*p-r*y*p-h*l*_+r*m*_)*F,t[3]=(v*m*c-h*x*c-v*l*p+r*x*p+h*l*M-r*m*M)*F,t[4]=U*F,t[5]=(g*y*c-b*x*c+b*l*M-i*y*M-g*l*_+i*x*_)*F,t[6]=(b*m*c-d*y*c-b*l*p+i*y*p+d*l*_-i*m*_)*F,t[7]=(d*x*c-g*m*c+g*l*p-i*x*p-d*l*M+i*m*M)*F,t[8]=w*F,t[9]=(b*v*c-g*R*c-b*r*M+i*R*M+g*r*_-i*v*_)*F,t[10]=(d*R*c-b*h*c+b*r*p-i*R*p-d*r*_+i*h*_)*F,t[11]=(g*h*c-d*v*c-g*r*p+i*v*p+d*r*M-i*h*M)*F,t[12]=P*F,t[13]=(g*R*l-b*v*l+b*r*x-i*R*x-g*r*y+i*v*y)*F,t[14]=(b*h*l-d*R*l-b*r*m+i*R*m+d*r*y-i*h*y)*F,t[15]=(d*v*l-g*h*l+g*r*m-i*v*m-d*r*x+i*h*x)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,g=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,v=h+h,x=c*p,M=c*g,b=c*v,R=d*g,y=d*v,_=h*v,O=m*p,U=m*g,w=m*v,P=r.x,H=r.y,F=r.z;return l[0]=(1-(R+_))*P,l[1]=(M+w)*P,l[2]=(b-U)*P,l[3]=0,l[4]=(M-w)*H,l[5]=(1-(x+_))*H,l[6]=(y+O)*H,l[7]=0,l[8]=(b+U)*F,l[9]=(y-O)*F,l[10]=(1-(x+R))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=ms.set(l[0],l[1],l[2]).length();const d=ms.set(l[4],l[5],l[6]).length(),h=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/c,g=1/d,v=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=v,xi.elements[9]*=v,xi.elements[10]*=v,i.setFromRotationMatrix(xi),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,g=2*c/(i-t),v=2*c/(r-l),x=(i+t)/(i-t),M=(r+l)/(r-l);let b,R;if(m)b=c/(d-c),R=d*c/(d-c);else if(h===Ii)b=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(h===kc)b=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),M=-(r+l)/(r-l);let b,R;if(m)b=1/(d-c),R=d/(d-c);else if(h===Ii)b=-2/(d-c),R=-(d+c)/(d-c);else if(h===kc)b=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ms=new Z,xi=new on,uM=new Z(0,0,0),fM=new Z(1,1,1),Ga=new Z,uc=new Z,$n=new Z,B_=new on,I_=new Yo;class fa{constructor(t=0,i=0,r=0,l=fa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(oe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-oe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(oe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return B_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(B_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return I_.setFromEuler(this),this.setFromQuaternion(I_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fa.DEFAULT_ORDER="XYZ";class Wv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dM=0;const F_=new Z,gs=new Yo,na=new on,fc=new Z,Bo=new Z,hM=new Z,pM=new Yo,H_=new Z(1,0,0),G_=new Z(0,1,0),V_=new Z(0,0,1),k_={type:"added"},mM={type:"removed"},_s={type:"childadded",child:null},md={type:"childremoved",child:null};class ni extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const t=new Z,i=new fa,r=new Yo,l=new Z(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ce}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return gs.setFromAxisAngle(t,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,i){return gs.setFromAxisAngle(t,i),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(H_,t)}rotateY(t){return this.rotateOnAxis(G_,t)}rotateZ(t){return this.rotateOnAxis(V_,t)}translateOnAxis(t,i){return F_.copy(t).applyQuaternion(this.quaternion),this.position.add(F_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(H_,t)}translateY(t){return this.translateOnAxis(G_,t)}translateZ(t){return this.translateOnAxis(V_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fc.copy(t):fc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Bo,fc,this.up):na.lookAt(fc,Bo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(na),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(k_),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(mM),md.child=t,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(k_),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,hM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,pM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),v=d(t.shapes),x=d(t.skeletons),M=d(t.animations),b=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new Z(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new Z,ia=new Z,gd=new Z,aa=new Z,vs=new Z,xs=new Z,X_=new Z,_d=new Z,vd=new Z,xd=new Z,Sd=new ke,yd=new ke,Md=new ke;class di{constructor(t=new Z,i=new Z,r=new Z){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Si.subVectors(t,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Si.subVectors(l,i),ia.subVectors(r,i),gd.subVectors(t,i);const d=Si.dot(Si),h=Si.dot(ia),m=Si.dot(gd),p=ia.dot(ia),g=ia.dot(gd),v=d*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,M=(p*m-h*g)*x,b=(d*g-h*m)*x;return c.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(d,aa.y),m.addScaledVector(h,aa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Sd.setScalar(0),yd.setScalar(0),Md.setScalar(0),Sd.fromBufferAttribute(t,i),yd.fromBufferAttribute(t,r),Md.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Sd,c.x),d.addScaledVector(yd,c.y),d.addScaledVector(Md,c.z),d}static isFrontFacing(t,i,r,l){return Si.subVectors(r,i),ia.subVectors(t,i),Si.cross(ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Si.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return di.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return di.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;vs.subVectors(l,r),xs.subVectors(c,r),_d.subVectors(t,r);const m=vs.dot(_d),p=xs.dot(_d);if(m<=0&&p<=0)return i.copy(r);vd.subVectors(t,l);const g=vs.dot(vd),v=xs.dot(vd);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(vs,d);xd.subVectors(t,c);const M=vs.dot(xd),b=xs.dot(xd);if(b>=0&&M<=b)return i.copy(c);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(xs,h);const y=g*b-M*v;if(y<=0&&v-g>=0&&M-b>=0)return X_.subVectors(c,l),h=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(X_,h);const _=1/(y+R+x);return d=R*_,h=x*_,i.copy(r).addScaledVector(vs,d).addScaledVector(xs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Ed(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Be{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Te.workingColorSpace){if(t=Ph(t,1),i=oe(i,0,1),r=oe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Ed(d,c,t+1/3),this.g=Ed(d,c,t),this.b=Ed(d,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=ei){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ei){const r=qv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Te.workingToColorSpace(Un.copy(this),t),Math.round(oe(Un.r*255,0,255))*65536+Math.round(oe(Un.g*255,0,255))*256+Math.round(oe(Un.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=g<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ei){Te.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==ei?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+i,Va.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Va),t.getHSL(dc);const r=Ho(Va.h,dc.h,i),l=Ho(Va.s,dc.s,i),c=Ho(Va.l,dc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Be;Be.NAMES=qv;let gM=0;class jc extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=la(),this.name="",this.type="Material",this.blending=Rs,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Hd,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fd&&(r.blendSrc=this.blendSrc),this.blendDst!==Hd&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bh extends jc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fa,this.combine=Uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new Z,hc=new be;let _M=0;class bi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_M++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Th,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=yi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ue(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=yi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=yi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=yi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=yi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array),l=Ue(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array),l=Ue(l,this.array),c=Ue(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Th&&(t.usage=this.usage),t}}class Yv extends bi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class jv extends bi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Wn extends bi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let vM=0;const ui=new on,Td=new ni,Ss=new Z,ti=new ha,Io=new ha,vn=new Z;class Ai extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kv(t)?jv:Yv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return Td.lookAt(t),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Wn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Io.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ti.min,Io.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Io.max),ti.expandByPoint(vn)):(ti.expandByPoint(Io.min),ti.expandByPoint(Io.max))}ti.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)vn.fromBufferAttribute(h,p),m&&(Ss.fromBufferAttribute(t,p),vn.add(Ss)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let k=0;k<r.count;k++)h[k]=new Z,m[k]=new Z;const p=new Z,g=new Z,v=new Z,x=new be,M=new be,b=new be,R=new Z,y=new Z;function _(k,C,D){p.fromBufferAttribute(r,k),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),x.fromBufferAttribute(c,k),M.fromBufferAttribute(c,C),b.fromBufferAttribute(c,D),g.sub(p),v.sub(p),M.sub(x),b.sub(x);const I=1/(M.x*b.y-b.x*M.y);isFinite(I)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(I),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(I),h[k].add(R),h[C].add(R),h[D].add(R),m[k].add(y),m[C].add(y),m[D].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let k=0,C=O.length;k<C;++k){const D=O[k],I=D.start,st=D.count;for(let lt=I,ft=I+st;lt<ft;lt+=3)_(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const U=new Z,w=new Z,P=new Z,H=new Z;function F(k){P.fromBufferAttribute(l,k),H.copy(P);const C=h[k];U.copy(C),U.sub(P.multiplyScalar(P.dot(C))).normalize(),w.crossVectors(H,C);const I=w.dot(m[k])<0?-1:1;d.setXYZW(k,U.x,U.y,U.z,I)}for(let k=0,C=O.length;k<C;++k){const D=O[k],I=D.start,st=D.count;for(let lt=I,ft=I+st;lt<ft;lt+=3)F(t.getX(lt+0)),F(t.getX(lt+1)),F(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new Z,c=new Z,d=new Z,h=new Z,m=new Z,p=new Z,g=new Z,v=new Z;if(t)for(let x=0,M=t.count;x<M;x+=3){const b=t.getX(x+0),R=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,y),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?M=m[R]*h.data.stride+h.offset:M=m[R]*g;for(let _=0;_<g;_++)x[b++]=p[M++]}return new bi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ai,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=t(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const W_=new on,pr=new cM,pc=new Bs,q_=new Z,mc=new Z,gc=new Z,_c=new Z,bd=new Z,vc=new Z,Y_=new Z,xc=new Z;class Ei extends ni{constructor(t=new Ai,i=new Bh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(bd.fromBufferAttribute(v,t),d?vc.addScaledVector(bd,g):vc.addScaledVector(bd.sub(i),g))}i.add(vc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(c),pr.copy(t.ray).recast(t.near),!(pc.containsPoint(pr.origin)===!1&&(pr.intersectSphere(pc,q_)===null||pr.origin.distanceToSquared(q_)>(t.far-t.near)**2))&&(W_.copy(c).invert(),pr.copy(t.ray).applyMatrix4(W_),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,pr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,R=x.length;b<R;b++){const y=x[b],_=d[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,P=U;w<P;w+=3){const H=h.getX(w),F=h.getX(w+1),k=h.getX(w+2);l=Sc(this,_,t,r,p,g,v,H,F,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const O=h.getX(y),U=h.getX(y+1),w=h.getX(y+2);l=Sc(this,d,t,r,p,g,v,O,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,R=x.length;b<R;b++){const y=x[b],_=d[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,P=U;w<P;w+=3){const H=w,F=w+1,k=w+2;l=Sc(this,_,t,r,p,g,v,H,F,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const O=y,U=y+1,w=y+2;l=Sc(this,d,t,r,p,g,v,O,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function xM(s,t,i,r,l,c,d,h){let m;if(t.side===Bn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===ja,h),m===null)return null;xc.copy(h),xc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(xc);return p<i.near||p>i.far?null:{distance:p,point:xc.clone(),object:s}}function Sc(s,t,i,r,l,c,d,h,m,p){s.getVertexPosition(h,mc),s.getVertexPosition(m,gc),s.getVertexPosition(p,_c);const g=xM(s,t,i,r,mc,gc,_c,Y_);if(g){const v=new Z;di.getBarycoord(Y_,mc,gc,_c,v),l&&(g.uv=di.getInterpolatedAttribute(l,h,m,p,v,new be)),c&&(g.uv1=di.getInterpolatedAttribute(c,h,m,p,v,new be)),d&&(g.normal=di.getInterpolatedAttribute(d,h,m,p,v,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new Z,materialIndex:0};di.getNormal(mc,gc,_c,x.normal),g.face=x,g.barycoord=v}return g}class jo extends Ai{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],v=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,t,d,c,0),b("z","y","x",1,-1,r,i,-t,d,c,1),b("x","z","y",1,1,t,r,i,l,d,2),b("x","z","y",1,-1,t,r,-i,l,d,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Wn(p,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(v,2));function b(R,y,_,O,U,w,P,H,F,k,C){const D=w/F,I=P/k,st=w/2,lt=P/2,ft=H/2,dt=F+1,B=k+1;let K=0,Y=0;const xt=new Z;for(let L=0;L<B;L++){const $=L*I-lt;for(let vt=0;vt<dt;vt++){const St=vt*D-st;xt[R]=St*O,xt[y]=$*U,xt[_]=ft,p.push(xt.x,xt.y,xt.z),xt[R]=0,xt[y]=0,xt[_]=H>0?1:-1,g.push(xt.x,xt.y,xt.z),v.push(vt/F),v.push(1-L/k),K+=1}}for(let L=0;L<k;L++)for(let $=0;$<F;$++){const vt=x+$+dt*L,St=x+$+dt*(L+1),Ct=x+($+1)+dt*(L+1),nt=x+($+1)+dt*L;m.push(vt,St,nt),m.push(St,Ct,nt),Y+=6}h.addGroup(M,Y,C),M+=Y,x+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zn(s){const t={};for(let i=0;i<s.length;i++){const r=Ps(s[i]);for(const l in r)t[l]=r[l]}return t}function SM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Zv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const Ih={clone:Ps,merge:zn};var yM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends jc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=SM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Kv extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new Z,j_=new be,Z_=new be;class fi extends Kv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,j_,Z_),i.subVectors(Z_,j_)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ws*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ys=-90,Ms=1;class EM extends ni{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(ys,Ms,t,i);l.layers=this.layers,this.add(l);const c=new fi(ys,Ms,t,i);c.layers=this.layers,this.add(c);const d=new fi(ys,Ms,t,i);d.layers=this.layers,this.add(d);const h=new fi(ys,Ms,t,i);h.layers=this.layers,this.add(h);const m=new fi(ys,Ms,t,i);m.layers=this.layers,this.add(m);const p=new fi(ys,Ms,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Qv extends Xn{constructor(t=[],i=Ls,r,l,c,d,h,m,p,g){super(t,i,r,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class TM extends wr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Qv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new jo(5,5,5),c=new da({name:"CubemapFromEquirect",uniforms:Ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:qa});c.uniforms.tEquirect.value=i;const d=new Ei(l,c),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=Bi),new EM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class yc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bM={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,r),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(bM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new yc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class AM extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fa,this.environmentIntensity=1,this.environmentRotation=new fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class RM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=la()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=la()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=la()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new Z;class Wa{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyMatrix4(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyNormalMatrix(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.transformDirection(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=yi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ue(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=yi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=yi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=yi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=yi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array),l=Ue(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ue(i,this.array),r=Ue(r,this.array),l=Ue(l,this.array),c=Ue(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new bi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Rd=new Z,wM=new Z,CM=new ce;class vr{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Rd.subVectors(r,i).cross(wM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||CM.getNormalMatrix(t),l=this.coplanarPoint(Rd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Bs,DM=new be(.5,.5),Mc=new Z;class Jv{constructor(t=new vr,i=new vr,r=new vr,l=new vr,c=new vr,d=new vr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ii,r=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],x=c[6],M=c[7],b=c[8],R=c[9],y=c[10],_=c[11],O=c[12],U=c[13],w=c[14],P=c[15];if(l[0].setComponents(p-d,M-g,_-b,P-O).normalize(),l[1].setComponents(p+d,M+g,_+b,P+O).normalize(),l[2].setComponents(p+h,M+v,_+R,P+U).normalize(),l[3].setComponents(p-h,M-v,_-R,P-U).normalize(),r)l[4].setComponents(m,x,y,w).normalize(),l[5].setComponents(p-m,M-x,_-y,P-w).normalize();else if(l[4].setComponents(p-m,M-x,_-y,P-w).normalize(),i===Ii)l[5].setComponents(p+m,M+x,_+y,P+w).normalize();else if(i===kc)l[5].setComponents(m,x,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){mr.center.set(0,0,0);const i=DM.distanceTo(t.center);return mr.radius=.7071067811865476+i,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $v extends Xn{constructor(t,i,r=Rr,l,c,d,h=Ti,m=Ti,p,g=ko,v=1){if(g!==ko&&g!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,c,d,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Fh extends Ai{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const c=[],d=[];h(l),p(r),g(),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(c.slice(),3)),this.setAttribute("uv",new Wn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(O){const U=new Z,w=new Z,P=new Z;for(let H=0;H<i.length;H+=3)M(i[H+0],U),M(i[H+1],w),M(i[H+2],P),m(U,w,P,O)}function m(O,U,w,P){const H=P+1,F=[];for(let k=0;k<=H;k++){F[k]=[];const C=O.clone().lerp(w,k/H),D=U.clone().lerp(w,k/H),I=H-k;for(let st=0;st<=I;st++)st===0&&k===H?F[k][st]=C:F[k][st]=C.clone().lerp(D,st/I)}for(let k=0;k<H;k++)for(let C=0;C<2*(H-k)-1;C++){const D=Math.floor(C/2);C%2===0?(x(F[k][D+1]),x(F[k+1][D]),x(F[k][D])):(x(F[k][D+1]),x(F[k+1][D+1]),x(F[k+1][D]))}}function p(O){const U=new Z;for(let w=0;w<c.length;w+=3)U.x=c[w+0],U.y=c[w+1],U.z=c[w+2],U.normalize().multiplyScalar(O),c[w+0]=U.x,c[w+1]=U.y,c[w+2]=U.z}function g(){const O=new Z;for(let U=0;U<c.length;U+=3){O.x=c[U+0],O.y=c[U+1],O.z=c[U+2];const w=y(O)/2/Math.PI+.5,P=_(O)/Math.PI+.5;d.push(w,1-P)}b(),v()}function v(){for(let O=0;O<d.length;O+=6){const U=d[O+0],w=d[O+2],P=d[O+4],H=Math.max(U,w,P),F=Math.min(U,w,P);H>.9&&F<.1&&(U<.2&&(d[O+0]+=1),w<.2&&(d[O+2]+=1),P<.2&&(d[O+4]+=1))}}function x(O){c.push(O.x,O.y,O.z)}function M(O,U){const w=O*3;U.x=t[w+0],U.y=t[w+1],U.z=t[w+2]}function b(){const O=new Z,U=new Z,w=new Z,P=new Z,H=new be,F=new be,k=new be;for(let C=0,D=0;C<c.length;C+=9,D+=6){O.set(c[C+0],c[C+1],c[C+2]),U.set(c[C+3],c[C+4],c[C+5]),w.set(c[C+6],c[C+7],c[C+8]),H.set(d[D+0],d[D+1]),F.set(d[D+2],d[D+3]),k.set(d[D+4],d[D+5]),P.copy(O).add(U).add(w).divideScalar(3);const I=y(P);R(H,D+0,O,I),R(F,D+2,U,I),R(k,D+4,w,I)}}function R(O,U,w,P){P<0&&O.x===1&&(d[U]=O.x-1),w.x===0&&w.z===0&&(d[U]=P/2/Math.PI+.5)}function y(O){return Math.atan2(O.z,-O.x)}function _(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fh(t.vertices,t.indices,t.radius,t.details)}}const Ec=new Z,Tc=new Z,wd=new Z,bc=new di;class UM extends Ai{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(ws*i),d=t.getIndex(),h=t.getAttribute("position"),m=d?d.count:h.count,p=[0,0,0],g=["a","b","c"],v=new Array(3),x={},M=[];for(let b=0;b<m;b+=3){d?(p[0]=d.getX(b),p[1]=d.getX(b+1),p[2]=d.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:R,b:y,c:_}=bc;if(R.fromBufferAttribute(h,p[0]),y.fromBufferAttribute(h,p[1]),_.fromBufferAttribute(h,p[2]),bc.getNormal(wd),v[0]=`${Math.round(R.x*l)},${Math.round(R.y*l)},${Math.round(R.z*l)}`,v[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,v[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let O=0;O<3;O++){const U=(O+1)%3,w=v[O],P=v[U],H=bc[g[O]],F=bc[g[U]],k=`${w}_${P}`,C=`${P}_${w}`;C in x&&x[C]?(wd.dot(x[C].normal)<=c&&(M.push(H.x,H.y,H.z),M.push(F.x,F.y,F.z)),x[C]=null):k in x||(x[k]={index0:p[O],index1:p[U],normal:wd.clone()})}}for(const b in x)if(x[b]){const{index0:R,index1:y}=x[b];Ec.fromBufferAttribute(h,R),Tc.fromBufferAttribute(h,y),M.push(Ec.x,Ec.y,Ec.z),M.push(Tc.x,Tc.y,Tc.z)}this.setAttribute("position",new Wn(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Wc extends Fh{constructor(t=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Wc(t.radius,t.detail)}}class Zc extends Ai{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=t/h,x=i/m,M=[],b=[],R=[],y=[];for(let _=0;_<g;_++){const O=_*x-d;for(let U=0;U<p;U++){const w=U*v-c;b.push(w,-O,0),R.push(0,0,1),y.push(U/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<h;O++){const U=O+p*_,w=O+p*(_+1),P=O+1+p*(_+1),H=O+1+p*_;M.push(U,w,H),M.push(w,P,H)}this.setIndex(M),this.setAttribute("position",new Wn(b,3)),this.setAttribute("normal",new Wn(R,3)),this.setAttribute("uv",new Wn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.width,t.height,t.widthSegments,t.heightSegments)}}class LM extends Ai{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],r=new Set,l=new Z,c=new Z;if(t.index!==null){const d=t.attributes.position,h=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,g=m.length;p<g;++p){const v=m[p],x=v.start,M=v.count;for(let b=x,R=x+M;b<R;b+=3)for(let y=0;y<3;y++){const _=h.getX(b+y),O=h.getX(b+(y+1)%3);l.fromBufferAttribute(d,_),c.fromBufferAttribute(d,O),K_(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const d=t.attributes.position;for(let h=0,m=d.count/3;h<m;h++)for(let p=0;p<3;p++){const g=3*h+p,v=3*h+(p+1)%3;l.fromBufferAttribute(d,g),c.fromBufferAttribute(d,v),K_(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new Wn(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function K_(s,t,i){const r=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return i.has(r)===!0||i.has(l)===!0?!1:(i.add(r),i.add(l),!0)}class NM extends jc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OM extends jc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class PM extends Kv{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zM extends Ai{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class BM extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class bh extends RM{constructor(t,i,r=1){super(t,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const i=super.clone(t);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(t){const i=super.toJSON(t);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}const Q_=new Z,Ac=new Z,Es=new Z,Ts=new Z,Cd=new Z,IM=new Z,FM=new Z;class HM{constructor(t=new Z,i=new Z){this.start=t,this.end=i}set(t,i){return this.start.copy(t),this.end.copy(i),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,i){return this.delta(i).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,i){Q_.subVectors(t,this.start),Ac.subVectors(this.end,this.start);const r=Ac.dot(Ac);let c=Ac.dot(Q_)/r;return i&&(c=oe(c,0,1)),c}closestPointToPoint(t,i,r){const l=this.closestPointToPointParameter(t,i);return this.delta(r).multiplyScalar(l).add(this.start)}distanceSqToLine3(t,i=IM,r=FM){const l=10000000000000001e-32;let c,d;const h=this.start,m=t.start,p=this.end,g=t.end;Es.subVectors(p,h),Ts.subVectors(g,m),Cd.subVectors(h,m);const v=Es.dot(Es),x=Ts.dot(Ts),M=Ts.dot(Cd);if(v<=l&&x<=l)return i.copy(h),r.copy(m),i.sub(r),i.dot(i);if(v<=l)c=0,d=M/x,d=oe(d,0,1);else{const b=Es.dot(Cd);if(x<=l)d=0,c=oe(-b/v,0,1);else{const R=Es.dot(Ts),y=v*x-R*R;y!==0?c=oe((R*M-b*x)/y,0,1):c=0,d=(R*c+M)/x,d<0?(d=0,c=oe(-b/v,0,1)):d>1&&(d=1,c=oe((R-b)/v,0,1))}}return i.copy(h).add(Es.multiplyScalar(c)),r.copy(m).add(Ts.multiplyScalar(d)),i.sub(r),i.dot(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function J_(s,t,i,r){const l=GM(r);switch(i){case zv:return s*t;case Iv:return s*t/l.components*l.byteLength;case Lh:return s*t/l.components*l.byteLength;case Fv:return s*t*2/l.components*l.byteLength;case Nh:return s*t*2/l.components*l.byteLength;case Bv:return s*t*3/l.components*l.byteLength;case Mi:return s*t*4/l.components*l.byteLength;case Oh:return s*t*4/l.components*l.byteLength;case Oc:case Pc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zc:case Bc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $d:case eh:return Math.max(s,16)*Math.max(t,8)/4;case Jd:case th:return Math.max(s,8)*Math.max(t,8)/2;case nh:case ih:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ah:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case oh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case lh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ch:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case uh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case fh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case dh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case hh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ph:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case mh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case gh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case _h:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ic:case xh:case Sh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Hv:case yh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Mh:case Eh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function GM(s){switch(s){case ua:case Nv:return{byteLength:1,components:1};case Go:case Ov:case qo:return{byteLength:2,components:1};case Dh:case Uh:return{byteLength:2,components:4};case Rr:case Ch:case oa:return{byteLength:4,components:1};case Pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function t0(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function VM(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<v.length;M++){const b=v[x],R=v[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,v[x]=R)}v.length=x+1;for(let M=0,b=v.length;M<b;M++){const R=v[M];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var kM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XM=`#ifdef USE_ALPHAHASH
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
#endif`,WM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
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
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QM=`#ifdef USE_BATCHING
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
#endif`,JM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nE=`#ifdef USE_IRIDESCENCE
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
#endif`,iE=`#ifdef USE_BUMPMAP
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
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dE=`#define PI 3.141592653589793
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
} // validated`,hE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pE=`vec3 transformedNormal = objectNormal;
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
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xE="gl_FragColor = linearToOutputTexel( gl_FragColor );",SE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yE=`#ifdef USE_ENVMAP
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
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DE=`#ifdef USE_GRADIENTMAP
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
}`,UE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OE=`uniform bool receiveShadow;
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
#endif`,PE=`#ifdef USE_ENVMAP
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
#endif`,zE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HE=`PhysicalMaterial material;
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
#endif`,GE=`struct PhysicalMaterial {
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
}`,VE=`
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
#endif`,kE=`#if defined( RE_IndirectDiffuse )
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
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JE=`#if defined( USE_POINTS_UV )
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
#endif`,$E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aT=`#ifdef USE_MORPHTARGETS
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
#endif`,rT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fT=`#ifdef USE_NORMALMAP
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
#endif`,dT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_T=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ST=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ET=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RT=`float getShadowMask() {
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
}`,wT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CT=`#ifdef USE_SKINNING
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
#endif`,DT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
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
#endif`,LT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
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
#endif`,BT=`#ifdef USE_TRANSMISSION
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
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kT=`uniform sampler2D t2D;
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
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`#include <common>
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
}`,ZT=`#if DEPTH_PACKING == 3200
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
}`,KT=`#define DISTANCE
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
}`,QT=`#define DISTANCE
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
}`,JT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
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
}`,eb=`uniform vec3 diffuse;
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
}`,nb=`#include <common>
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
}`,ib=`uniform vec3 diffuse;
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
}`,ab=`#define LAMBERT
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
}`,rb=`#define LAMBERT
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
}`,sb=`#define MATCAP
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
}`,ob=`#define MATCAP
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
}`,lb=`#define NORMAL
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
}`,cb=`#define NORMAL
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
}`,ub=`#define PHONG
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
}`,fb=`#define PHONG
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
}`,db=`#define STANDARD
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
}`,hb=`#define STANDARD
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
}`,pb=`#define TOON
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
}`,mb=`#define TOON
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
}`,gb=`uniform float size;
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
}`,_b=`uniform vec3 diffuse;
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
}`,vb=`#include <common>
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
}`,xb=`uniform vec3 color;
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
}`,Sb=`uniform float rotation;
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
}`,yb=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:kM,alphahash_pars_fragment:XM,alphamap_fragment:WM,alphamap_pars_fragment:qM,alphatest_fragment:YM,alphatest_pars_fragment:jM,aomap_fragment:ZM,aomap_pars_fragment:KM,batching_pars_vertex:QM,batching_vertex:JM,begin_vertex:$M,beginnormal_vertex:tE,bsdfs:eE,iridescence_fragment:nE,bumpmap_pars_fragment:iE,clipping_planes_fragment:aE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:sE,clipping_planes_vertex:oE,color_fragment:lE,color_pars_fragment:cE,color_pars_vertex:uE,color_vertex:fE,common:dE,cube_uv_reflection_fragment:hE,defaultnormal_vertex:pE,displacementmap_pars_vertex:mE,displacementmap_vertex:gE,emissivemap_fragment:_E,emissivemap_pars_fragment:vE,colorspace_fragment:xE,colorspace_pars_fragment:SE,envmap_fragment:yE,envmap_common_pars_fragment:ME,envmap_pars_fragment:EE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:PE,envmap_vertex:bE,fog_vertex:AE,fog_pars_vertex:RE,fog_fragment:wE,fog_pars_fragment:CE,gradientmap_pars_fragment:DE,lightmap_pars_fragment:UE,lights_lambert_fragment:LE,lights_lambert_pars_fragment:NE,lights_pars_begin:OE,lights_toon_fragment:zE,lights_toon_pars_fragment:BE,lights_phong_fragment:IE,lights_phong_pars_fragment:FE,lights_physical_fragment:HE,lights_physical_pars_fragment:GE,lights_fragment_begin:VE,lights_fragment_maps:kE,lights_fragment_end:XE,logdepthbuf_fragment:WE,logdepthbuf_pars_fragment:qE,logdepthbuf_pars_vertex:YE,logdepthbuf_vertex:jE,map_fragment:ZE,map_pars_fragment:KE,map_particle_fragment:QE,map_particle_pars_fragment:JE,metalnessmap_fragment:$E,metalnessmap_pars_fragment:tT,morphinstance_vertex:eT,morphcolor_vertex:nT,morphnormal_vertex:iT,morphtarget_pars_vertex:aT,morphtarget_vertex:rT,normal_fragment_begin:sT,normal_fragment_maps:oT,normal_pars_fragment:lT,normal_pars_vertex:cT,normal_vertex:uT,normalmap_pars_fragment:fT,clearcoat_normal_fragment_begin:dT,clearcoat_normal_fragment_maps:hT,clearcoat_pars_fragment:pT,iridescence_pars_fragment:mT,opaque_fragment:gT,packing:_T,premultiplied_alpha_fragment:vT,project_vertex:xT,dithering_fragment:ST,dithering_pars_fragment:yT,roughnessmap_fragment:MT,roughnessmap_pars_fragment:ET,shadowmap_pars_fragment:TT,shadowmap_pars_vertex:bT,shadowmap_vertex:AT,shadowmask_pars_fragment:RT,skinbase_vertex:wT,skinning_pars_vertex:CT,skinning_vertex:DT,skinnormal_vertex:UT,specularmap_fragment:LT,specularmap_pars_fragment:NT,tonemapping_fragment:OT,tonemapping_pars_fragment:PT,transmission_fragment:zT,transmission_pars_fragment:BT,uv_pars_fragment:IT,uv_pars_vertex:FT,uv_vertex:HT,worldpos_vertex:GT,background_vert:VT,background_frag:kT,backgroundCube_vert:XT,backgroundCube_frag:WT,cube_vert:qT,cube_frag:YT,depth_vert:jT,depth_frag:ZT,distanceRGBA_vert:KT,distanceRGBA_frag:QT,equirect_vert:JT,equirect_frag:$T,linedashed_vert:tb,linedashed_frag:eb,meshbasic_vert:nb,meshbasic_frag:ib,meshlambert_vert:ab,meshlambert_frag:rb,meshmatcap_vert:sb,meshmatcap_frag:ob,meshnormal_vert:lb,meshnormal_frag:cb,meshphong_vert:ub,meshphong_frag:fb,meshphysical_vert:db,meshphysical_frag:hb,meshtoon_vert:pb,meshtoon_frag:mb,points_vert:gb,points_frag:_b,shadow_vert:vb,shadow_frag:xb,sprite_vert:Sb,sprite_frag:yb},Ut={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},kn={basic:{uniforms:zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Be(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:zn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:zn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Be(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:zn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:zn([Ut.points,Ut.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:zn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:zn([Ut.common,Ut.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:zn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:zn([Ut.sprite,Ut.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:zn([Ut.common,Ut.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:zn([Ut.lights,Ut.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};kn.physical={uniforms:zn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Rc={r:0,b:0,g:0},gr=new fa,Mb=new on;function Eb(s,t,i,r,l,c,d){const h=new Be(0);let m=c===!0?0:1,p,g,v=null,x=0,M=null;function b(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function R(U){let w=!1;const P=b(U);P===null?_(h,m):P&&P.isColor&&(_(P,1),w=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,w){const P=b(w);P&&(P.isCubeTexture||P.mapping===Yc)?(g===void 0&&(g=new Ei(new jo(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:Ps(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(w.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(gr)),g.material.toneMapped=Te.getTransfer(P.colorSpace)!==ze,(v!==P||x!==P.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,v=P,x=P.version,M=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ei(new Zc(2,2),new da({name:"BackgroundMaterial",uniforms:Ps(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Te.getTransfer(P.colorSpace)!==ze,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||x!==P.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,x=P.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,w){U.getRGB(Rc,Zv(s)),r.buffers.color.setClear(Rc.r,Rc.g,Rc.b,w,d)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,w=1){h.set(U),m=w,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:R,addToRenderList:y,dispose:O}}function Tb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,d=!1;function h(D,I,st,lt,ft){let dt=!1;const B=v(lt,st,I);c!==B&&(c=B,p(c.object)),dt=M(D,lt,st,ft),dt&&b(D,lt,st,ft),ft!==null&&t.update(ft,s.ELEMENT_ARRAY_BUFFER),(dt||d)&&(d=!1,w(D,I,st,lt),ft!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function v(D,I,st){const lt=st.wireframe===!0;let ft=r[D.id];ft===void 0&&(ft={},r[D.id]=ft);let dt=ft[I.id];dt===void 0&&(dt={},ft[I.id]=dt);let B=dt[lt];return B===void 0&&(B=x(m()),dt[lt]=B),B}function x(D){const I=[],st=[],lt=[];for(let ft=0;ft<i;ft++)I[ft]=0,st[ft]=0,lt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:st,attributeDivisors:lt,object:D,attributes:{},index:null}}function M(D,I,st,lt){const ft=c.attributes,dt=I.attributes;let B=0;const K=st.getAttributes();for(const Y in K)if(K[Y].location>=0){const L=ft[Y];let $=dt[Y];if($===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),L===void 0||L.attribute!==$||$&&L.data!==$.data)return!0;B++}return c.attributesNum!==B||c.index!==lt}function b(D,I,st,lt){const ft={},dt=I.attributes;let B=0;const K=st.getAttributes();for(const Y in K)if(K[Y].location>=0){let L=dt[Y];L===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(L=D.instanceColor));const $={};$.attribute=L,L&&L.data&&($.data=L.data),ft[Y]=$,B++}c.attributes=ft,c.attributesNum=B,c.index=lt}function R(){const D=c.newAttributes;for(let I=0,st=D.length;I<st;I++)D[I]=0}function y(D){_(D,0)}function _(D,I){const st=c.newAttributes,lt=c.enabledAttributes,ft=c.attributeDivisors;st[D]=1,lt[D]===0&&(s.enableVertexAttribArray(D),lt[D]=1),ft[D]!==I&&(s.vertexAttribDivisor(D,I),ft[D]=I)}function O(){const D=c.newAttributes,I=c.enabledAttributes;for(let st=0,lt=I.length;st<lt;st++)I[st]!==D[st]&&(s.disableVertexAttribArray(st),I[st]=0)}function U(D,I,st,lt,ft,dt,B){B===!0?s.vertexAttribIPointer(D,I,st,ft,dt):s.vertexAttribPointer(D,I,st,lt,ft,dt)}function w(D,I,st,lt){R();const ft=lt.attributes,dt=st.getAttributes(),B=I.defaultAttributeValues;for(const K in dt){const Y=dt[K];if(Y.location>=0){let xt=ft[K];if(xt===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),xt!==void 0){const L=xt.normalized,$=xt.itemSize,vt=t.get(xt);if(vt===void 0)continue;const St=vt.buffer,Ct=vt.type,nt=vt.bytesPerElement,ht=Ct===s.INT||Ct===s.UNSIGNED_INT||xt.gpuType===Ch;if(xt.isInterleavedBufferAttribute){const yt=xt.data,Pt=yt.stride,Yt=xt.offset;if(yt.isInstancedInterleavedBuffer){for(let ie=0;ie<Y.locationSize;ie++)_(Y.location+ie,yt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ie=0;ie<Y.locationSize;ie++)y(Y.location+ie);s.bindBuffer(s.ARRAY_BUFFER,St);for(let ie=0;ie<Y.locationSize;ie++)U(Y.location+ie,$/Y.locationSize,Ct,L,Pt*nt,(Yt+$/Y.locationSize*ie)*nt,ht)}else{if(xt.isInstancedBufferAttribute){for(let yt=0;yt<Y.locationSize;yt++)_(Y.location+yt,xt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let yt=0;yt<Y.locationSize;yt++)y(Y.location+yt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let yt=0;yt<Y.locationSize;yt++)U(Y.location+yt,$/Y.locationSize,Ct,L,$*nt,$/Y.locationSize*yt*nt,ht)}}else if(B!==void 0){const L=B[K];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(Y.location,L);break;case 3:s.vertexAttrib3fv(Y.location,L);break;case 4:s.vertexAttrib4fv(Y.location,L);break;default:s.vertexAttrib1fv(Y.location,L)}}}}O()}function P(){k();for(const D in r){const I=r[D];for(const st in I){const lt=I[st];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete I[st]}delete r[D]}}function H(D){if(r[D.id]===void 0)return;const I=r[D.id];for(const st in I){const lt=I[st];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete I[st]}delete r[D.id]}function F(D){for(const I in r){const st=r[I];if(st[D.id]===void 0)continue;const lt=st[D.id];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete st[D.id]}}function k(){C(),d=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:H,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:y,disableUnusedAttributes:O}}function bb(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b];i.update(M,r,1)}function m(p,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)d(p[b],g[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let b=0;for(let R=0;R<v;R++)b+=g[R]*x[R];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Ab(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Mi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const k=F===qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ua&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==oa&&!k)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=b>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:P,maxSamples:H}}function Rb(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new vr,h=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const b=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!l||b===null||b.length===0||c&&!y)c?g(null):p();else{const O=c?0:r,U=O*4;let w=_.clippingState||null;m.value=w,w=g(b,x,U,M);for(let P=0;P!==U;++P)w[P]=i[P];_.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,M,b){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const _=M+R*4,O=x.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<_)&&(y=new Float32Array(_));for(let U=0,w=M;U!==R;++U,w+=4)d.copy(v[U]).applyMatrix4(O,h),d.normal.toArray(y,w),y[w+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function wb(s){let t=new WeakMap;function i(d,h){return h===jd?d.mapping=Ls:h===Zd&&(d.mapping=Ns),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===jd||h===Zd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new TM(m.height);return p.fromEquirectangularTexture(s,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const As=4,$_=[.125,.215,.35,.446,.526,.582],yr=20,Dd=new PM,tv=new Be;let Ud=null,Ld=0,Nd=0,Od=!1;const xr=(1+Math.sqrt(5))/2,bs=1/xr,ev=[new Z(-xr,bs,0),new Z(xr,bs,0),new Z(-bs,0,xr),new Z(bs,0,xr),new Z(0,xr,-bs),new Z(0,xr,bs),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],Cb=new Z;class nv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=Cb}=c;Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ud,Ld,Nd),this._renderer.xr.enabled=Od,t.scissorTest=!1,wc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ls||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:qo,format:Mi,colorSpace:Os,depthBuffer:!1},l=iv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Db(c)),this._blurMaterial=Ub(c,t,i)}return l}_compileMaterial(t){const i=new Ei(this._lodPlanes[0],t);this._renderer.compile(i,Dd)}_sceneToCubeUV(t,i,r,l,c){const m=new fi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(tv),v.toneMapping=Ya,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new Bh({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),y=new Ei(new jo,R);let _=!1;const O=t.background;O?O.isColor&&(R.color.copy(O),t.background=null,_=!0):(R.color.copy(tv),_=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const P=this._cubeSize;wc(l,w*P,U>2?P:0,P,P),v.setRenderTarget(l),_&&v.render(y,m),v.render(t,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=O}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ls||t.mapping===Ns;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Ei(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;wc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Dd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=ev[(l-c-1)%ev.length];this._blur(t,c-1,c,d,h)}i.autoClear=r}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ei(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*yr-1),R=c/b,y=isFinite(c)?1+Math.floor(g*R):yr;y>yr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${yr}`);const _=[];let O=0;for(let F=0;F<yr;++F){const k=F/R,C=Math.exp(-k*k/2);_.push(C),F===0?O+=C:F<y&&(O+=2*C)}for(let F=0;F<_.length;F++)_[F]=_[F]/O;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-r;const w=this._sizeLods[l],P=3*w*(l>U-As?l-U+As:0),H=4*(this._cubeSize-w);wc(i,P,H,3*w,2*w),m.setRenderTarget(i),m.render(v,Dd)}}function Db(s){const t=[],i=[],r=[];let l=s;const c=s-As+1+$_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>s-As?m=$_[d-s+As-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,R=3,y=2,_=1,O=new Float32Array(R*b*M),U=new Float32Array(y*b*M),w=new Float32Array(_*b*M);for(let H=0;H<M;H++){const F=H%3*2/3-1,k=H>2?0:-1,C=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];O.set(C,R*b*H),U.set(x,y*b*H);const D=[H,H,H,H,H,H];w.set(D,_*b*H)}const P=new Ai;P.setAttribute("position",new bi(O,R)),P.setAttribute("uv",new bi(U,y)),P.setAttribute("faceIndex",new bi(w,_)),t.push(P),l>As&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function iv(s,t,i){const r=new wr(s,t,i);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function Ub(s,t,i){const r=new Float32Array(yr),l=new Z(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:qa,depthTest:!1,depthWrite:!1})}function av(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:qa,depthTest:!1,depthWrite:!1})}function rv(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function Hh(){return`

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
	`}function Lb(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===jd||m===Zd,g=m===Ls||m===Ns;if(p||g){let v=t.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new nv(s)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new nv(s)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Nb(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Cs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Ob(s,t,i,r){const l={},c=new WeakMap;function d(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",d),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,b=v.attributes.position;let R=0;if(M!==null){const O=M.array;R=M.version;for(let U=0,w=O.length;U<w;U+=3){const P=O[U+0],H=O[U+1],F=O[U+2];x.push(P,H,H,F,F,P)}}else if(b!==void 0){const O=b.array;R=b.version;for(let U=0,w=O.length/3-1;U<w;U+=3){const P=U+0,H=U+1,F=U+2;x.push(P,H,H,F,F,P)}}else return;const y=new(kv(x)?jv:Yv)(x,1);y.version=R;const _=c.get(v);_&&t.remove(_),c.set(v,y)}function g(v){const x=c.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function Pb(s,t,i){let r;function l(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*d),i.update(M,r,1)}function p(x,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,x*d,b),i.update(M,r,b))}function g(x,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,r,1)}function v(x,M,b,R){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/d,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,R,0,b);let _=0;for(let O=0;O<b;O++)_+=M[O]*R[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function zb(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Bb(s,t,i){const r=new WeakMap,l=new ke;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let D=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let w=0;b===!0&&(w=1),R===!0&&(w=2),y===!0&&(w=3);let P=h.attributes.position.count*w,H=1;P>t.maxTextureSize&&(H=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const F=new Float32Array(P*H*4*v),k=new Xv(F,P,H,v);k.type=oa,k.needsUpdate=!0;const C=w*4;for(let I=0;I<v;I++){const st=_[I],lt=O[I],ft=U[I],dt=P*H*4*I;for(let B=0;B<st.count;B++){const K=B*C;b===!0&&(l.fromBufferAttribute(st,B),F[dt+K+0]=l.x,F[dt+K+1]=l.y,F[dt+K+2]=l.z,F[dt+K+3]=0),R===!0&&(l.fromBufferAttribute(lt,B),F[dt+K+4]=l.x,F[dt+K+5]=l.y,F[dt+K+6]=l.z,F[dt+K+7]=0),y===!0&&(l.fromBufferAttribute(ft,B),F[dt+K+8]=l.x,F[dt+K+9]=l.y,F[dt+K+10]=l.z,F[dt+K+11]=ft.itemSize===4?l.w:1)}}x={count:v,texture:k,size:new be(P,H)},r.set(h,x),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function Ib(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const e0=new Xn,sv=new $v(1,1),n0=new Xv,i0=new oM,a0=new Qv,ov=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),fv=new Float32Array(4);function Is(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=ov[l];if(c===void 0&&(c=new Float32Array(l),ov[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(c,h)}return c}function dn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Kc(s,t){let i=lv[t];i===void 0&&(i=new Int32Array(t),lv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function Fb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function Hb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function Gb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function Vb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function kb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(dn(i,r))return;fv.set(r),s.uniformMatrix2fv(this.addr,!1,fv),hn(i,r)}}function Xb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(dn(i,r))return;uv.set(r),s.uniformMatrix3fv(this.addr,!1,uv),hn(i,r)}}function Wb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(dn(i,r))return;cv.set(r),s.uniformMatrix4fv(this.addr,!1,cv),hn(i,r)}}function qb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function Yb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function jb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function Zb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function Kb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function Qb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function Jb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function $b(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function t1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(sv.compareFunction=Gv,c=sv):c=e0,i.setTexture2D(t||c,l)}function e1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||i0,l)}function n1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||a0,l)}function i1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||n0,l)}function a1(s){switch(s){case 5126:return Fb;case 35664:return Hb;case 35665:return Gb;case 35666:return Vb;case 35674:return kb;case 35675:return Xb;case 35676:return Wb;case 5124:case 35670:return qb;case 35667:case 35671:return Yb;case 35668:case 35672:return jb;case 35669:case 35673:return Zb;case 5125:return Kb;case 36294:return Qb;case 36295:return Jb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function r1(s,t){s.uniform1fv(this.addr,t)}function s1(s,t){const i=Is(t,this.size,2);s.uniform2fv(this.addr,i)}function o1(s,t){const i=Is(t,this.size,3);s.uniform3fv(this.addr,i)}function l1(s,t){const i=Is(t,this.size,4);s.uniform4fv(this.addr,i)}function c1(s,t){const i=Is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function u1(s,t){const i=Is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function f1(s,t){const i=Is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function d1(s,t){s.uniform1iv(this.addr,t)}function h1(s,t){s.uniform2iv(this.addr,t)}function p1(s,t){s.uniform3iv(this.addr,t)}function m1(s,t){s.uniform4iv(this.addr,t)}function g1(s,t){s.uniform1uiv(this.addr,t)}function _1(s,t){s.uniform2uiv(this.addr,t)}function v1(s,t){s.uniform3uiv(this.addr,t)}function x1(s,t){s.uniform4uiv(this.addr,t)}function S1(s,t,i){const r=this.cache,l=t.length,c=Kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||e0,c[d])}function y1(s,t,i){const r=this.cache,l=t.length,c=Kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||i0,c[d])}function M1(s,t,i){const r=this.cache,l=t.length,c=Kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||a0,c[d])}function E1(s,t,i){const r=this.cache,l=t.length,c=Kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||n0,c[d])}function T1(s){switch(s){case 5126:return r1;case 35664:return s1;case 35665:return o1;case 35666:return l1;case 35674:return c1;case 35675:return u1;case 35676:return f1;case 5124:case 35670:return d1;case 35667:case 35671:return h1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return _1;case 36295:return v1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return E1}}class b1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=a1(i.type)}}class A1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=T1(i.type)}}class R1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function dv(s,t){s.seq.push(t),s.map[t.id]=t}function w1(s,t,i){const r=s.name,l=r.length;for(Pd.lastIndex=0;;){const c=Pd.exec(r),d=Pd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){dv(i,p===void 0?new b1(h,s,t):new A1(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new R1(h),dv(i,v)),i=v}}}class Fc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);w1(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function hv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const C1=37297;let D1=0;function U1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const pv=new ce;function L1(s){Te._getMatrix(pv,Te.workingColorSpace,s);const t=`mat3( ${pv.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(s)){case Vc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function mv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+U1(s.getShaderSource(t),h)}else return c}function N1(s,t){const i=L1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function O1(s,t){let i;switch(t){case xy:i="Linear";break;case Sy:i="Reinhard";break;case yy:i="Cineon";break;case My:i="ACESFilmic";break;case Ty:i="AgX";break;case by:i="Neutral";break;case Ey:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new Z;function P1(){Te.getLuminanceCoefficients(Cc);const s=Cc.x.toFixed(4),t=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function B1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function I1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function Fo(s){return s!==""}function gv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _v(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const F1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(s){return s.replace(F1,G1)}const H1=new Map;function G1(s,t){let i=de[t];if(i===void 0){const r=H1.get(t);if(r!==void 0)i=de[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ah(i)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(s){return s.replace(V1,k1)}function k1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function xv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function X1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===JS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function W1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ls:case Ns:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Y1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Uv:t="ENVMAP_BLENDING_MULTIPLY";break;case _y:t="ENVMAP_BLENDING_MIX";break;case vy:t="ENVMAP_BLENDING_ADD";break}return t}function j1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Z1(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=X1(i),p=W1(i),g=q1(i),v=Y1(i),x=j1(i),M=z1(i),b=B1(c),R=l.createProgram();let y,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Fo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Fo).join(`
`),_.length>0&&(_+=`
`)):(y=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),_=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?de.tonemapping_pars_fragment:"",i.toneMapping!==Ya?O1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,N1("linearToOutputTexel",i.outputColorSpace),P1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fo).join(`
`)),d=Ah(d),d=gv(d,i),d=_v(d,i),h=Ah(h),h=gv(h,i),h=_v(h,i),d=vv(d),h=vv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===U_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===U_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=O+y+d,w=O+_+h,P=hv(l,l.VERTEX_SHADER,U),H=hv(l,l.FRAGMENT_SHADER,w);l.attachShader(R,P),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(I){if(s.debug.checkShaderErrors){const st=l.getProgramInfoLog(R)||"",lt=l.getShaderInfoLog(P)||"",ft=l.getShaderInfoLog(H)||"",dt=st.trim(),B=lt.trim(),K=ft.trim();let Y=!0,xt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,P,H);else{const L=mv(l,P,"vertex"),$=mv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+dt+`
`+L+`
`+$)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(B===""||K==="")&&(xt=!1);xt&&(I.diagnostics={runnable:Y,programLog:dt,vertexShader:{log:B,prefix:y},fragmentShader:{log:K,prefix:_}})}l.deleteShader(P),l.deleteShader(H),k=new Fc(l,R),C=I1(l,R)}let k;this.getUniforms=function(){return k===void 0&&F(this),k};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(R,C1)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=D1++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=P,this.fragmentShader=H,this}let K1=0;class Q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new J1(t),i.set(t,r)),r}}class J1{constructor(t){this.id=K1++,this.code=t,this.usedTimes=0}}function $1(s,t,i,r,l,c,d){const h=new Wv,m=new Q1,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,D,I,st,lt){const ft=st.fog,dt=lt.geometry,B=C.isMeshStandardMaterial?st.environment:null,K=(C.isMeshStandardMaterial?i:t).get(C.envMap||B),Y=K&&K.mapping===Yc?K.image.height:null,xt=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const L=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,$=L!==void 0?L.length:0;let vt=0;dt.morphAttributes.position!==void 0&&(vt=1),dt.morphAttributes.normal!==void 0&&(vt=2),dt.morphAttributes.color!==void 0&&(vt=3);let St,Ct,nt,ht;if(xt){const ye=kn[xt];St=ye.vertexShader,Ct=ye.fragmentShader}else St=C.vertexShader,Ct=C.fragmentShader,m.update(C),nt=m.getVertexShaderID(C),ht=m.getFragmentShaderID(C);const yt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Yt=lt.isInstancedMesh===!0,ie=lt.isBatchedMesh===!0,He=!!C.map,me=!!C.matcap,G=!!K,Re=!!C.aoMap,Qt=!!C.lightMap,Se=!!C.bumpMap,Ft=!!C.normalMap,Ge=!!C.displacementMap,Ht=!!C.emissiveMap,se=!!C.metalnessMap,Ye=!!C.roughnessMap,je=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,tt=C.iridescence>0,ct=C.sheen>0,_t=C.transmission>0,ot=je&&!!C.anisotropyMap,zt=N&&!!C.clearcoatMap,Rt=N&&!!C.clearcoatNormalMap,Xt=N&&!!C.clearcoatRoughnessMap,qt=tt&&!!C.iridescenceMap,Mt=tt&&!!C.iridescenceThicknessMap,Nt=ct&&!!C.sheenColorMap,Zt=ct&&!!C.sheenRoughnessMap,kt=!!C.specularMap,Dt=!!C.specularColorMap,re=!!C.specularIntensityMap,X=_t&&!!C.transmissionMap,bt=_t&&!!C.thicknessMap,wt=!!C.gradientMap,Bt=!!C.alphaMap,Et=C.alphaTest>0,gt=!!C.alphaHash,Vt=!!C.extensions;let ae=Ya;C.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ae=s.toneMapping);const we={shaderID:xt,shaderType:C.type,shaderName:C.name,vertexShader:St,fragmentShader:Ct,defines:C.defines,customVertexShaderID:nt,customFragmentShaderID:ht,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:ie,batchingColor:ie&&lt._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&lt.instanceColor!==null,instancingMorph:Yt&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Os,alphaToCoverage:!!C.alphaToCoverage,map:He,matcap:me,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:Y,aoMap:Re,lightMap:Qt,bumpMap:Se,normalMap:Ft,displacementMap:x&&Ge,emissiveMap:Ht,normalMapObjectSpace:Ft&&C.normalMapType===Dy,normalMapTangentSpace:Ft&&C.normalMapType===Cy,metalnessMap:se,roughnessMap:Ye,anisotropy:je,anisotropyMap:ot,clearcoat:N,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:Mt,sheen:ct,sheenColorMap:Nt,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:Dt,specularIntensityMap:re,transmission:_t,transmissionMap:X,thicknessMap:bt,gradientMap:wt,opaque:C.transparent===!1&&C.blending===Rs&&C.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:gt,combine:C.combine,mapUv:He&&R(C.map.channel),aoMapUv:Re&&R(C.aoMap.channel),lightMapUv:Qt&&R(C.lightMap.channel),bumpMapUv:Se&&R(C.bumpMap.channel),normalMapUv:Ft&&R(C.normalMap.channel),displacementMapUv:Ge&&R(C.displacementMap.channel),emissiveMapUv:Ht&&R(C.emissiveMap.channel),metalnessMapUv:se&&R(C.metalnessMap.channel),roughnessMapUv:Ye&&R(C.roughnessMap.channel),anisotropyMapUv:ot&&R(C.anisotropyMap.channel),clearcoatMapUv:zt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(C.sheenRoughnessMap.channel),specularMapUv:kt&&R(C.specularMap.channel),specularColorMapUv:Dt&&R(C.specularColorMap.channel),specularIntensityMapUv:re&&R(C.specularIntensityMap.channel),transmissionMapUv:X&&R(C.transmissionMap.channel),thicknessMapUv:bt&&R(C.thicknessMap.channel),alphaMapUv:Bt&&R(C.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Ft||je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!dt.attributes.uv&&(He||Bt),fog:!!ft,useFog:C.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pt,skinning:lt.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:He&&C.map.isVideoTexture===!0&&Te.getTransfer(C.map.colorSpace)===ze,decodeVideoTextureEmissive:Ht&&C.emissiveMap.isVideoTexture===!0&&Te.getTransfer(C.emissiveMap.colorSpace)===ze,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===sa,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Vt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&C.extensions.multiDraw===!0||ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function _(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)D.push(I),D.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(O(D,C),U(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function O(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function U(C,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),C.push(h.mask)}function w(C){const D=b[C.type];let I;if(D){const st=kn[D];I=Ih.clone(st.uniforms)}else I=C.uniforms;return I}function P(C,D){let I;for(let st=0,lt=g.length;st<lt;st++){const ft=g[st];if(ft.cacheKey===D){I=ft,++I.usedTimes;break}}return I===void 0&&(I=new Z1(s,D,C,c),g.push(I)),I}function H(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),C.destroy()}}function F(C){m.remove(C)}function k(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:w,acquireProgram:P,releaseProgram:H,releaseShaderCache:F,programs:g,dispose:k}}function tA(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function eA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Sv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(v,x,M,b,R,y){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:b,renderOrder:v.renderOrder,z:R,group:y},s[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=R,_.group=y),t++,_}function h(v,x,M,b,R,y){const _=d(v,x,M,b,R,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,b,R,y){const _=d(v,x,M,b,R,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||eA),r.length>1&&r.sort(x||Sv),l.length>1&&l.sort(x||Sv)}function g(){for(let v=t,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function nA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new yv,s.set(r,[d])):l>=c.length?(d=new yv,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function iA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Be};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[t.id]=i,i}}}function aA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let rA=0;function sA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function oA(s){const t=new iA,i=aA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Z);const l=new Z,c=new on,d=new on;function h(p){let g=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,b=0,R=0,y=0,_=0,O=0,U=0,w=0,P=0,H=0,F=0;p.sort(sA);for(let C=0,D=p.length;C<D;C++){const I=p[C],st=I.color,lt=I.intensity,ft=I.distance,dt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=st.r*lt,v+=st.g*lt,x+=st.b*lt;else if(I.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(I.sh.coefficients[B],lt);F++}else if(I.isDirectionalLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const K=I.shadow,Y=i.get(I);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=dt,r.directionalShadowMatrix[M]=I.shadow.matrix,O++}r.directional[M]=B,M++}else if(I.isSpotLight){const B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(st).multiplyScalar(lt),B.distance=ft,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,r.spot[R]=B;const K=I.shadow;if(I.map&&(r.spotLightMap[P]=I.map,P++,K.updateMatrices(I),I.castShadow&&H++),r.spotLightMatrix[R]=K.matrix,I.castShadow){const Y=i.get(I);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=dt,w++}R++}else if(I.isRectAreaLight){const B=t.get(I);B.color.copy(st).multiplyScalar(lt),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=B,y++}else if(I.isPointLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const K=I.shadow,Y=i.get(I);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[b]=Y,r.pointShadowMap[b]=dt,r.pointShadowMatrix[b]=I.shadow.matrix,U++}r.point[b]=B,b++}else if(I.isHemisphereLight){const B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(lt),B.groundColor.copy(I.groundColor).multiplyScalar(lt),r.hemi[_]=B,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const k=r.hash;(k.directionalLength!==M||k.pointLength!==b||k.spotLength!==R||k.rectAreaLength!==y||k.hemiLength!==_||k.numDirectionalShadows!==O||k.numPointShadows!==U||k.numSpotShadows!==w||k.numSpotMaps!==P||k.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+P-H,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=F,k.directionalLength=M,k.pointLength=b,k.spotLength=R,k.rectAreaLength=y,k.hemiLength=_,k.numDirectionalShadows=O,k.numPointShadows=U,k.numSpotShadows=w,k.numSpotMaps=P,k.numLightProbes=F,r.version=rA++)}function m(p,g){let v=0,x=0,M=0,b=0,R=0;const y=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const U=p[_];if(U.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),v++}else if(U.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),d.identity(),c.copy(U.matrixWorld),c.premultiply(y),d.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),b++}else if(U.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const w=r.hemi[R];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:r}}function Mv(s){const t=new oA(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function d(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function lA(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new Mv(s),t.set(l,[h])):c>=d.length?(h=new Mv(s),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uA=`uniform sampler2D shadow_pass;
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
}`;function fA(s,t,i){let r=new Jv;const l=new be,c=new be,d=new ke,h=new NM({depthPacking:wy}),m=new OM,p={},g=i.maxTextureSize,v={[ja]:Bn,[Bn]:ja,[sa]:sa},x=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:cA,fragmentShader:uA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ai;b.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ei(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dv;let _=this.type;this.render=function(H,F,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const C=s.getRenderTarget(),D=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),st=s.state;st.setBlending(qa),st.buffers.depth.getReversed()?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const lt=_!==ra&&this.type===ra,ft=_===ra&&this.type!==ra;for(let dt=0,B=H.length;dt<B;dt++){const K=H[dt],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/xt.x),l.x=c.x*xt.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/xt.y),l.y=c.y*xt.y,Y.mapSize.y=c.y)),Y.map===null||lt===!0||ft===!0){const $=this.type!==ra?{minFilter:Ti,magFilter:Ti}:{};Y.map!==null&&Y.map.dispose(),Y.map=new wr(l.x,l.y,$),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const L=Y.getViewportCount();for(let $=0;$<L;$++){const vt=Y.getViewport($);d.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),st.viewport(d),Y.updateMatrices(K,$),r=Y.getFrustum(),w(F,k,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ra&&O(Y,k),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(C,D,I)};function O(H,F){const k=t.update(R);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new wr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(F,null,k,x,R,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(F,null,k,M,R,null)}function U(H,F,k,C){let D=null;const I=k.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(I!==void 0)D=I;else if(D=k.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const st=D.uuid,lt=F.uuid;let ft=p[st];ft===void 0&&(ft={},p[st]=ft);let dt=ft[lt];dt===void 0&&(dt=D.clone(),ft[lt]=dt,F.addEventListener("dispose",P)),D=dt}if(D.visible=F.visible,D.wireframe=F.wireframe,C===ra?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:v[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,k.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const st=s.properties.get(D);st.light=k}return D}function w(H,F,k,C,D){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&D===ra)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,H.matrixWorld);const lt=t.update(H),ft=H.material;if(Array.isArray(ft)){const dt=lt.groups;for(let B=0,K=dt.length;B<K;B++){const Y=dt[B],xt=ft[Y.materialIndex];if(xt&&xt.visible){const L=U(H,xt,C,D);H.onBeforeShadow(s,H,F,k,lt,L,Y),s.renderBufferDirect(k,null,lt,L,H,Y),H.onAfterShadow(s,H,F,k,lt,L,Y)}}}else if(ft.visible){const dt=U(H,ft,C,D);H.onBeforeShadow(s,H,F,k,lt,dt,null),s.renderBufferDirect(k,null,lt,dt,H,null),H.onAfterShadow(s,H,F,k,lt,dt,null)}}const st=H.children;for(let lt=0,ft=st.length;lt<ft;lt++)w(st[lt],F,k,C,D)}function P(H){H.target.removeEventListener("dispose",P);for(const k in p){const C=p[k],D=H.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const dA={[Gd]:Vd,[kd]:qd,[Xd]:Yd,[Us]:Wd,[Vd]:Gd,[qd]:kd,[Yd]:Xd,[Wd]:Us};function hA(s,t){function i(){let X=!1;const bt=new ke;let wt=null;const Bt=new ke(0,0,0,0);return{setMask:function(Et){wt!==Et&&!X&&(s.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){X=Et},setClear:function(Et,gt,Vt,ae,we){we===!0&&(Et*=ae,gt*=ae,Vt*=ae),bt.set(Et,gt,Vt,ae),Bt.equals(bt)===!1&&(s.clearColor(Et,gt,Vt,ae),Bt.copy(bt))},reset:function(){X=!1,wt=null,Bt.set(-1,0,0,0)}}}function r(){let X=!1,bt=!1,wt=null,Bt=null,Et=null;return{setReversed:function(gt){if(bt!==gt){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),bt=gt;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return bt},setTest:function(gt){gt?yt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(gt){wt!==gt&&!X&&(s.depthMask(gt),wt=gt)},setFunc:function(gt){if(bt&&(gt=dA[gt]),Bt!==gt){switch(gt){case Gd:s.depthFunc(s.NEVER);break;case Vd:s.depthFunc(s.ALWAYS);break;case kd:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case Xd:s.depthFunc(s.EQUAL);break;case Wd:s.depthFunc(s.GEQUAL);break;case qd:s.depthFunc(s.GREATER);break;case Yd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Bt=gt}},setLocked:function(gt){X=gt},setClear:function(gt){Et!==gt&&(bt&&(gt=1-gt),s.clearDepth(gt),Et=gt)},reset:function(){X=!1,wt=null,Bt=null,Et=null,bt=!1}}}function l(){let X=!1,bt=null,wt=null,Bt=null,Et=null,gt=null,Vt=null,ae=null,we=null;return{setTest:function(ye){X||(ye?yt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(ye){bt!==ye&&!X&&(s.stencilMask(ye),bt=ye)},setFunc:function(ye,hi,ln){(wt!==ye||Bt!==hi||Et!==ln)&&(s.stencilFunc(ye,hi,ln),wt=ye,Bt=hi,Et=ln)},setOp:function(ye,hi,ln){(gt!==ye||Vt!==hi||ae!==ln)&&(s.stencilOp(ye,hi,ln),gt=ye,Vt=hi,ae=ln)},setLocked:function(ye){X=ye},setClear:function(ye){we!==ye&&(s.clearStencil(ye),we=ye)},reset:function(){X=!1,bt=null,wt=null,Bt=null,Et=null,gt=null,Vt=null,ae=null,we=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],b=null,R=!1,y=null,_=null,O=null,U=null,w=null,P=null,H=null,F=new Be(0,0,0),k=0,C=!1,D=null,I=null,st=null,lt=null,ft=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=K>=2);let xt=null,L={};const $=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),St=new ke().fromArray($),Ct=new ke().fromArray(vt);function nt(X,bt,wt,Bt){const Et=new Uint8Array(4),gt=s.createTexture();s.bindTexture(X,gt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<wt;Vt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,Bt,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(bt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return gt}const ht={};ht[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),ht[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ht[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),yt(s.DEPTH_TEST),d.setFunc(Us),Se(!1),Ft(A_),yt(s.CULL_FACE),Re(qa);function yt(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Pt(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Yt(X,bt){return v[X]!==bt?(s.bindFramebuffer(X,bt),v[X]=bt,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=bt),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function ie(X,bt){let wt=M,Bt=!1;if(X){wt=x.get(bt),wt===void 0&&(wt=[],x.set(bt,wt));const Et=X.textures;if(wt.length!==Et.length||wt[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Vt=Et.length;gt<Vt;gt++)wt[gt]=s.COLOR_ATTACHMENT0+gt;wt.length=Et.length,Bt=!0}}else wt[0]!==s.BACK&&(wt[0]=s.BACK,Bt=!0);Bt&&s.drawBuffers(wt)}function He(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const me={[Sr]:s.FUNC_ADD,[ty]:s.FUNC_SUBTRACT,[ey]:s.FUNC_REVERSE_SUBTRACT};me[ny]=s.MIN,me[iy]=s.MAX;const G={[ay]:s.ZERO,[ry]:s.ONE,[sy]:s.SRC_COLOR,[Fd]:s.SRC_ALPHA,[dy]:s.SRC_ALPHA_SATURATE,[uy]:s.DST_COLOR,[ly]:s.DST_ALPHA,[oy]:s.ONE_MINUS_SRC_COLOR,[Hd]:s.ONE_MINUS_SRC_ALPHA,[fy]:s.ONE_MINUS_DST_COLOR,[cy]:s.ONE_MINUS_DST_ALPHA,[hy]:s.CONSTANT_COLOR,[py]:s.ONE_MINUS_CONSTANT_COLOR,[my]:s.CONSTANT_ALPHA,[gy]:s.ONE_MINUS_CONSTANT_ALPHA};function Re(X,bt,wt,Bt,Et,gt,Vt,ae,we,ye){if(X===qa){R===!0&&(Pt(s.BLEND),R=!1);return}if(R===!1&&(yt(s.BLEND),R=!0),X!==$S){if(X!==y||ye!==C){if((_!==Sr||w!==Sr)&&(s.blendEquation(s.FUNC_ADD),_=Sr,w=Sr),ye)switch(X){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case R_:s.blendFunc(s.ONE,s.ONE);break;case w_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case C_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case R_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case w_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}O=null,U=null,P=null,H=null,F.set(0,0,0),k=0,y=X,C=ye}return}Et=Et||bt,gt=gt||wt,Vt=Vt||Bt,(bt!==_||Et!==w)&&(s.blendEquationSeparate(me[bt],me[Et]),_=bt,w=Et),(wt!==O||Bt!==U||gt!==P||Vt!==H)&&(s.blendFuncSeparate(G[wt],G[Bt],G[gt],G[Vt]),O=wt,U=Bt,P=gt,H=Vt),(ae.equals(F)===!1||we!==k)&&(s.blendColor(ae.r,ae.g,ae.b,we),F.copy(ae),k=we),y=X,C=!1}function Qt(X,bt){X.side===sa?Pt(s.CULL_FACE):yt(s.CULL_FACE);let wt=X.side===Bn;bt&&(wt=!wt),Se(wt),X.blending===Rs&&X.transparent===!1?Re(qa):Re(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Bt=X.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ht(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Se(X){D!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),D=X)}function Ft(X){X!==KS?(yt(s.CULL_FACE),X!==I&&(X===A_?s.cullFace(s.BACK):X===QS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),I=X}function Ge(X){X!==st&&(B&&s.lineWidth(X),st=X)}function Ht(X,bt,wt){X?(yt(s.POLYGON_OFFSET_FILL),(lt!==bt||ft!==wt)&&(s.polygonOffset(bt,wt),lt=bt,ft=wt)):Pt(s.POLYGON_OFFSET_FILL)}function se(X){X?yt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function Ye(X){X===void 0&&(X=s.TEXTURE0+dt-1),xt!==X&&(s.activeTexture(X),xt=X)}function je(X,bt,wt){wt===void 0&&(xt===null?wt=s.TEXTURE0+dt-1:wt=xt);let Bt=L[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},L[wt]=Bt),(Bt.type!==X||Bt.texture!==bt)&&(xt!==wt&&(s.activeTexture(wt),xt=wt),s.bindTexture(X,bt||ht[X]),Bt.type=X,Bt.texture=bt)}function N(){const X=L[xt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(X){St.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Zt(X){Ct.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ct.copy(X))}function kt(X,bt){let wt=p.get(bt);wt===void 0&&(wt=new WeakMap,p.set(bt,wt));let Bt=wt.get(X);Bt===void 0&&(Bt=s.getUniformBlockIndex(bt,X.name),wt.set(X,Bt))}function Dt(X,bt){const Bt=p.get(bt).get(X);m.get(bt)!==Bt&&(s.uniformBlockBinding(bt,Bt,X.__bindingPointIndex),m.set(bt,Bt))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},xt=null,L={},v={},x=new WeakMap,M=[],b=null,R=!1,y=null,_=null,O=null,U=null,w=null,P=null,H=null,F=new Be(0,0,0),k=0,C=!1,D=null,I=null,st=null,lt=null,ft=null,St.set(0,0,s.canvas.width,s.canvas.height),Ct.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:yt,disable:Pt,bindFramebuffer:Yt,drawBuffers:ie,useProgram:He,setBlending:Re,setMaterial:Qt,setFlipSided:Se,setCullFace:Ft,setLineWidth:Ge,setPolygonOffset:Ht,setScissorTest:se,activeTexture:Ye,bindTexture:je,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:qt,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ct,texSubImage3D:_t,compressedTexSubImage2D:ot,compressedTexSubImage3D:zt,scissor:Nt,viewport:Zt,reset:re}}function pA(s,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new be,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return M?new OffscreenCanvas(N,E):Xc("canvas")}function R(N,E,tt){let ct=1;const _t=je(N);if((_t.width>tt||_t.height>tt)&&(ct=tt/Math.max(_t.width,_t.height)),ct<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ot=Math.floor(ct*_t.width),zt=Math.floor(ct*_t.height);v===void 0&&(v=b(ot,zt));const Rt=E?b(ot,zt):v;return Rt.width=ot,Rt.height=zt,Rt.getContext("2d").drawImage(N,0,0,ot,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ot+"x"+zt+")."),Rt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(N,E,tt,ct,_t=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ot=E;if(E===s.RED&&(tt===s.FLOAT&&(ot=s.R32F),tt===s.HALF_FLOAT&&(ot=s.R16F),tt===s.UNSIGNED_BYTE&&(ot=s.R8)),E===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.R8UI),tt===s.UNSIGNED_SHORT&&(ot=s.R16UI),tt===s.UNSIGNED_INT&&(ot=s.R32UI),tt===s.BYTE&&(ot=s.R8I),tt===s.SHORT&&(ot=s.R16I),tt===s.INT&&(ot=s.R32I)),E===s.RG&&(tt===s.FLOAT&&(ot=s.RG32F),tt===s.HALF_FLOAT&&(ot=s.RG16F),tt===s.UNSIGNED_BYTE&&(ot=s.RG8)),E===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RG16UI),tt===s.UNSIGNED_INT&&(ot=s.RG32UI),tt===s.BYTE&&(ot=s.RG8I),tt===s.SHORT&&(ot=s.RG16I),tt===s.INT&&(ot=s.RG32I)),E===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RGB16UI),tt===s.UNSIGNED_INT&&(ot=s.RGB32UI),tt===s.BYTE&&(ot=s.RGB8I),tt===s.SHORT&&(ot=s.RGB16I),tt===s.INT&&(ot=s.RGB32I)),E===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ot=s.RGBA32UI),tt===s.BYTE&&(ot=s.RGBA8I),tt===s.SHORT&&(ot=s.RGBA16I),tt===s.INT&&(ot=s.RGBA32I)),E===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),E===s.RGBA){const zt=_t?Vc:Te.getTransfer(ct);tt===s.FLOAT&&(ot=s.RGBA32F),tt===s.HALF_FLOAT&&(ot=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ot=zt===ze?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function w(N,E){let tt;return N?E===null||E===Rr||E===Vo?tt=s.DEPTH24_STENCIL8:E===oa?tt=s.DEPTH32F_STENCIL8:E===Go&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Rr||E===Vo?tt=s.DEPTH_COMPONENT24:E===oa?tt=s.DEPTH_COMPONENT32F:E===Go&&(tt=s.DEPTH_COMPONENT16),tt}function P(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ti&&N.minFilter!==Bi?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function H(N){const E=N.target;E.removeEventListener("dispose",H),k(E),E.isVideoTexture&&g.delete(E)}function F(N){const E=N.target;E.removeEventListener("dispose",F),D(E)}function k(N){const E=r.get(N);if(E.__webglInit===void 0)return;const tt=N.source,ct=x.get(tt);if(ct){const _t=ct[E.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&C(N),Object.keys(ct).length===0&&x.delete(tt)}r.remove(N)}function C(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const tt=N.source,ct=x.get(tt);delete ct[E.__cacheKey],d.memory.textures--}function D(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let _t=0;_t<E.__webglFramebuffer[ct].length;_t++)s.deleteFramebuffer(E.__webglFramebuffer[ct][_t]);else s.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)s.deleteFramebuffer(E.__webglFramebuffer[ct]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=N.textures;for(let ct=0,_t=tt.length;ct<_t;ct++){const ot=r.get(tt[ct]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),d.memory.textures--),r.remove(tt[ct])}r.remove(N)}let I=0;function st(){I=0}function lt(){const N=I;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),I+=1,N}function ft(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function dt(N,E){const tt=r.get(N);if(N.isVideoTexture&&se(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const ct=N.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(tt,N,E);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+E)}function B(N,E){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){ht(tt,N,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+E)}function K(N,E){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){ht(tt,N,E);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+E)}function Y(N,E){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){yt(tt,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+E)}const xt={[Kd]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[Qd]:s.MIRRORED_REPEAT},L={[Ti]:s.NEAREST,[Ay]:s.NEAREST_MIPMAP_NEAREST,[ac]:s.NEAREST_MIPMAP_LINEAR,[Bi]:s.LINEAR,[rd]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},$={[Uy]:s.NEVER,[By]:s.ALWAYS,[Ly]:s.LESS,[Gv]:s.LEQUAL,[Ny]:s.EQUAL,[zy]:s.GEQUAL,[Oy]:s.GREATER,[Py]:s.NOTEQUAL};function vt(N,E){if(E.type===oa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Bi||E.magFilter===rd||E.magFilter===ac||E.magFilter===Er||E.minFilter===Bi||E.minFilter===rd||E.minFilter===ac||E.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,xt[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,xt[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,xt[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,L[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ti||E.minFilter!==ac&&E.minFilter!==Er||E.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(N,E){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",H));const ct=E.source;let _t=x.get(ct);_t===void 0&&(_t={},x.set(ct,_t));const ot=ft(E);if(ot!==N.__cacheKey){_t[ot]===void 0&&(_t[ot]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,tt=!0),_t[ot].usedTimes++;const zt=_t[N.__cacheKey];zt!==void 0&&(_t[N.__cacheKey].usedTimes--,zt.usedTimes===0&&C(E)),N.__cacheKey=ot,N.__webglTexture=_t[ot].texture}return tt}function Ct(N,E,tt){return Math.floor(Math.floor(N/tt)/E)}function nt(N,E,tt,ct){const ot=N.updateRanges;if(ot.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,tt,ct,E.data);else{ot.sort((Mt,Nt)=>Mt.start-Nt.start);let zt=0;for(let Mt=1;Mt<ot.length;Mt++){const Nt=ot[zt],Zt=ot[Mt],kt=Nt.start+Nt.count,Dt=Ct(Zt.start,E.width,4),re=Ct(Nt.start,E.width,4);Zt.start<=kt+1&&Dt===re&&Ct(Zt.start+Zt.count-1,E.width,4)===Dt?Nt.count=Math.max(Nt.count,Zt.start+Zt.count-Nt.start):(++zt,ot[zt]=Zt)}ot.length=zt+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),Xt=s.getParameter(s.UNPACK_SKIP_PIXELS),qt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Nt=ot.length;Mt<Nt;Mt++){const Zt=ot[Mt],kt=Math.floor(Zt.start/4),Dt=Math.ceil(Zt.count/4),re=kt%E.width,X=Math.floor(kt/E.width),bt=Dt,wt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,re),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,re,X,bt,wt,tt,ct,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xt),s.pixelStorei(s.UNPACK_SKIP_ROWS,qt)}}function ht(N,E,tt){let ct=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=s.TEXTURE_3D);const _t=St(N,E),ot=E.source;i.bindTexture(ct,N.__webglTexture,s.TEXTURE0+tt);const zt=r.get(ot);if(ot.version!==zt.__version||_t===!0){i.activeTexture(s.TEXTURE0+tt);const Rt=Te.getPrimaries(Te.workingColorSpace),Xt=E.colorSpace===Xa?null:Te.getPrimaries(E.colorSpace),qt=E.colorSpace===Xa||Rt===Xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Mt=R(E.image,!1,l.maxTextureSize);Mt=Ye(E,Mt);const Nt=c.convert(E.format,E.colorSpace),Zt=c.convert(E.type);let kt=U(E.internalFormat,Nt,Zt,E.colorSpace,E.isVideoTexture);vt(ct,E);let Dt;const re=E.mipmaps,X=E.isVideoTexture!==!0,bt=zt.__version===void 0||_t===!0,wt=ot.dataReady,Bt=P(E,Mt);if(E.isDepthTexture)kt=w(E.format===Xo,E.type),bt&&(X?i.texStorage2D(s.TEXTURE_2D,1,kt,Mt.width,Mt.height):i.texImage2D(s.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Nt,Zt,null));else if(E.isDataTexture)if(re.length>0){X&&bt&&i.texStorage2D(s.TEXTURE_2D,Bt,kt,re[0].width,re[0].height);for(let Et=0,gt=re.length;Et<gt;Et++)Dt=re[Et],X?wt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Nt,Zt,Dt.data):i.texImage2D(s.TEXTURE_2D,Et,kt,Dt.width,Dt.height,0,Nt,Zt,Dt.data);E.generateMipmaps=!1}else X?(bt&&i.texStorage2D(s.TEXTURE_2D,Bt,kt,Mt.width,Mt.height),wt&&nt(E,Mt,Nt,Zt)):i.texImage2D(s.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Nt,Zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&bt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,kt,re[0].width,re[0].height,Mt.depth);for(let Et=0,gt=re.length;Et<gt;Et++)if(Dt=re[Et],E.format!==Mi)if(Nt!==null)if(X){if(wt)if(E.layerUpdates.size>0){const Vt=J_(Dt.width,Dt.height,E.format,E.type);for(const ae of E.layerUpdates){const we=Dt.data.subarray(ae*Vt/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Vt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,ae,Dt.width,Dt.height,1,Nt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,Mt.depth,Nt,Dt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Et,kt,Dt.width,Dt.height,Mt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,Mt.depth,Nt,Zt,Dt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Et,kt,Dt.width,Dt.height,Mt.depth,0,Nt,Zt,Dt.data)}else{X&&bt&&i.texStorage2D(s.TEXTURE_2D,Bt,kt,re[0].width,re[0].height);for(let Et=0,gt=re.length;Et<gt;Et++)Dt=re[Et],E.format!==Mi?Nt!==null?X?wt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Nt,Dt.data):i.compressedTexImage2D(s.TEXTURE_2D,Et,kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Nt,Zt,Dt.data):i.texImage2D(s.TEXTURE_2D,Et,kt,Dt.width,Dt.height,0,Nt,Zt,Dt.data)}else if(E.isDataArrayTexture)if(X){if(bt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,kt,Mt.width,Mt.height,Mt.depth),wt)if(E.layerUpdates.size>0){const Et=J_(Mt.width,Mt.height,E.format,E.type);for(const gt of E.layerUpdates){const Vt=Mt.data.subarray(gt*Et/Mt.data.BYTES_PER_ELEMENT,(gt+1)*Et/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,Mt.width,Mt.height,1,Nt,Zt,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Nt,Zt,Mt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,Mt.width,Mt.height,Mt.depth,0,Nt,Zt,Mt.data);else if(E.isData3DTexture)X?(bt&&i.texStorage3D(s.TEXTURE_3D,Bt,kt,Mt.width,Mt.height,Mt.depth),wt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Nt,Zt,Mt.data)):i.texImage3D(s.TEXTURE_3D,0,kt,Mt.width,Mt.height,Mt.depth,0,Nt,Zt,Mt.data);else if(E.isFramebufferTexture){if(bt)if(X)i.texStorage2D(s.TEXTURE_2D,Bt,kt,Mt.width,Mt.height);else{let Et=Mt.width,gt=Mt.height;for(let Vt=0;Vt<Bt;Vt++)i.texImage2D(s.TEXTURE_2D,Vt,kt,Et,gt,0,Nt,Zt,null),Et>>=1,gt>>=1}}else if(re.length>0){if(X&&bt){const Et=je(re[0]);i.texStorage2D(s.TEXTURE_2D,Bt,kt,Et.width,Et.height)}for(let Et=0,gt=re.length;Et<gt;Et++)Dt=re[Et],X?wt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,Nt,Zt,Dt):i.texImage2D(s.TEXTURE_2D,Et,kt,Nt,Zt,Dt);E.generateMipmaps=!1}else if(X){if(bt){const Et=je(Mt);i.texStorage2D(s.TEXTURE_2D,Bt,kt,Et.width,Et.height)}wt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,Zt,Mt)}else i.texImage2D(s.TEXTURE_2D,0,kt,Nt,Zt,Mt);y(E)&&_(ct),zt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function yt(N,E,tt){if(E.image.length!==6)return;const ct=St(N,E),_t=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+tt);const ot=r.get(_t);if(_t.version!==ot.__version||ct===!0){i.activeTexture(s.TEXTURE0+tt);const zt=Te.getPrimaries(Te.workingColorSpace),Rt=E.colorSpace===Xa?null:Te.getPrimaries(E.colorSpace),Xt=E.colorSpace===Xa||zt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Nt=[];for(let gt=0;gt<6;gt++)!qt&&!Mt?Nt[gt]=R(E.image[gt],!0,l.maxCubemapSize):Nt[gt]=Mt?E.image[gt].image:E.image[gt],Nt[gt]=Ye(E,Nt[gt]);const Zt=Nt[0],kt=c.convert(E.format,E.colorSpace),Dt=c.convert(E.type),re=U(E.internalFormat,kt,Dt,E.colorSpace),X=E.isVideoTexture!==!0,bt=ot.__version===void 0||ct===!0,wt=_t.dataReady;let Bt=P(E,Zt);vt(s.TEXTURE_CUBE_MAP,E);let Et;if(qt){X&&bt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,re,Zt.width,Zt.height);for(let gt=0;gt<6;gt++){Et=Nt[gt].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const ae=Et[Vt];E.format!==Mi?kt!==null?X?wt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,ae.width,ae.height,kt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,re,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,ae.width,ae.height,kt,Dt,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,re,ae.width,ae.height,0,kt,Dt,ae.data)}}}else{if(Et=E.mipmaps,X&&bt){Et.length>0&&Bt++;const gt=je(Nt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,re,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Mt){X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Nt[gt].width,Nt[gt].height,kt,Dt,Nt[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Nt[gt].width,Nt[gt].height,0,kt,Dt,Nt[gt].data);for(let Vt=0;Vt<Et.length;Vt++){const we=Et[Vt].image[gt].image;X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,we.width,we.height,kt,Dt,we.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,re,we.width,we.height,0,kt,Dt,we.data)}}else{X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt,Dt,Nt[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,kt,Dt,Nt[gt]);for(let Vt=0;Vt<Et.length;Vt++){const ae=Et[Vt];X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,kt,Dt,ae.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,re,kt,Dt,ae.image[gt])}}}y(E)&&_(s.TEXTURE_CUBE_MAP),ot.__version=_t.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Pt(N,E,tt,ct,_t,ot){const zt=c.convert(tt.format,tt.colorSpace),Rt=c.convert(tt.type),Xt=U(tt.internalFormat,zt,Rt,tt.colorSpace),qt=r.get(E),Mt=r.get(tt);if(Mt.__renderTarget=E,!qt.__hasExternalTextures){const Nt=Math.max(1,E.width>>ot),Zt=Math.max(1,E.height>>ot);_t===s.TEXTURE_3D||_t===s.TEXTURE_2D_ARRAY?i.texImage3D(_t,ot,Xt,Nt,Zt,E.depth,0,zt,Rt,null):i.texImage2D(_t,ot,Xt,Nt,Zt,0,zt,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,_t,Mt.__webglTexture,0,Ge(E)):(_t===s.TEXTURE_2D||_t>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,_t,Mt.__webglTexture,ot),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(N,E,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const ct=E.depthTexture,_t=ct&&ct.isDepthTexture?ct.type:null,ot=w(E.stencilBuffer,_t),zt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=Ge(E);Ht(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,ot,E.width,E.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ot,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ot,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,zt,s.RENDERBUFFER,N)}else{const ct=E.textures;for(let _t=0;_t<ct.length;_t++){const ot=ct[_t],zt=c.convert(ot.format,ot.colorSpace),Rt=c.convert(ot.type),Xt=U(ot.internalFormat,zt,Rt,ot.colorSpace),qt=Ge(E);tt&&Ht(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Xt,E.width,E.height):Ht(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,Xt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Xt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt(E.depthTexture,0);const _t=ct.__webglTexture,ot=Ge(E);if(E.depthTexture.format===ko)Ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0);else if(E.depthTexture.format===Xo)Ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function He(N){const E=r.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ct=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const _t=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",_t)};ct.addEventListener("dispose",_t),E.__depthDisposeCallback=_t}E.__boundDepthTexture=ct}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ct=N.texture.mipmaps;ct&&ct.length>0?ie(E.__webglFramebuffer[0],N):ie(E.__webglFramebuffer,N)}else if(tt){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=s.createRenderbuffer(),Yt(E.__webglDepthbuffer[ct],N,!1);else{const _t=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,ot)}}else{const ct=N.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Yt(E.__webglDepthbuffer,N,!1);else{const _t=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,ot)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function me(N,E,tt){const ct=r.get(N);E!==void 0&&Pt(ct.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&He(N)}function G(N){const E=N.texture,tt=r.get(N),ct=r.get(E);N.addEventListener("dispose",F);const _t=N.textures,ot=N.isWebGLCubeRenderTarget===!0,zt=_t.length>1;if(zt||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=E.version,d.memory.textures++),ot){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)tt.__webglFramebuffer[Rt][Xt]=s.createFramebuffer()}else tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(zt)for(let Rt=0,Xt=_t.length;Rt<Xt;Rt++){const qt=r.get(_t[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),d.memory.textures++)}if(N.samples>0&&Ht(N)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<_t.length;Rt++){const Xt=_t[Rt];tt.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const qt=c.convert(Xt.format,Xt.colorSpace),Mt=c.convert(Xt.type),Nt=U(Xt.internalFormat,qt,Mt,Xt.colorSpace,N.isXRRenderTarget===!0),Zt=Ge(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Nt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),Yt(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){i.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),vt(s.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Pt(tt.__webglFramebuffer[Rt][Xt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else Pt(tt.__webglFramebuffer[Rt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(E)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Rt=0,Xt=_t.length;Rt<Xt;Rt++){const qt=_t[Rt],Mt=r.get(qt);let Nt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Mt.__webglTexture),vt(Nt,qt),Pt(tt.__webglFramebuffer,N,qt,s.COLOR_ATTACHMENT0+Rt,Nt,0),y(qt)&&_(Nt)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ct.__webglTexture),vt(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Pt(tt.__webglFramebuffer[Xt],N,E,s.COLOR_ATTACHMENT0,Rt,Xt);else Pt(tt.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,Rt,0);y(E)&&_(Rt),i.unbindTexture()}N.depthBuffer&&He(N)}function Re(N){const E=N.textures;for(let tt=0,ct=E.length;tt<ct;tt++){const _t=E[tt];if(y(_t)){const ot=O(N),zt=r.get(_t).__webglTexture;i.bindTexture(ot,zt),_(ot),i.unbindTexture()}}}const Qt=[],Se=[];function Ft(N){if(N.samples>0){if(Ht(N)===!1){const E=N.textures,tt=N.width,ct=N.height;let _t=s.COLOR_BUFFER_BIT;const ot=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,zt=r.get(N),Rt=E.length>1;if(Rt)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Xt=N.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_t|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_t|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Mt,0)}s.blitFramebuffer(0,0,tt,ct,0,0,tt,ct,_t,s.NEAREST),m===!0&&(Qt.length=0,Se.length=0,Qt.push(s.COLOR_ATTACHMENT0+qt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Qt.push(ot),Se.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,Mt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ge(N){return Math.min(l.maxSamples,N.samples)}function Ht(N){const E=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(N){const E=d.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function Ye(N,E){const tt=N.colorSpace,ct=N.format,_t=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Os&&tt!==Xa&&(Te.getTransfer(tt)===ze?(ct!==Mi||_t!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=st,this.setTexture2D=dt,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=me,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Ht}function mA(s,t){function i(r,l=Xa){let c;const d=Te.getTransfer(l);if(r===ua)return s.UNSIGNED_BYTE;if(r===Dh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Uh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Nv)return s.BYTE;if(r===Ov)return s.SHORT;if(r===Go)return s.UNSIGNED_SHORT;if(r===Ch)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===oa)return s.FLOAT;if(r===qo)return s.HALF_FLOAT;if(r===zv)return s.ALPHA;if(r===Bv)return s.RGB;if(r===Mi)return s.RGBA;if(r===ko)return s.DEPTH_COMPONENT;if(r===Xo)return s.DEPTH_STENCIL;if(r===Iv)return s.RED;if(r===Lh)return s.RED_INTEGER;if(r===Fv)return s.RG;if(r===Nh)return s.RG_INTEGER;if(r===Oh)return s.RGBA_INTEGER;if(r===Oc||r===Pc||r===zc||r===Bc)if(d===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jd||r===$d||r===th||r===eh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Jd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===th)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===eh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nh||r===ih||r===ah)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===nh||r===ih)return d===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ah)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===_h||r===vh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===rh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===oh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ch)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ph)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_h)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ic||r===xh||r===Sh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Ic)return d===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hv||r===yh||r===Mh||r===Eh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ic)return c.COMPRESSED_RED_RGTC1_EXT;if(r===yh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class r0 extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const gA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_A=`
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

}`;class vA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new r0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new da({vertexShader:gA,fragmentShader:_A,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new Zc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xA extends zs{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,b=null;const R=new vA,y={},_=i.getContextAttributes();let O=null,U=null;const w=[],P=[],H=new be;let F=null;const k=new fi;k.viewport=new ke;const C=new fi;C.viewport=new ke;const D=[k,C],I=new BM;let st=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ht=w[nt];return ht===void 0&&(ht=new Ad,w[nt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(nt){let ht=w[nt];return ht===void 0&&(ht=new Ad,w[nt]=ht),ht.getGripSpace()},this.getHand=function(nt){let ht=w[nt];return ht===void 0&&(ht=new Ad,w[nt]=ht),ht.getHandSpace()};function ft(nt){const ht=P.indexOf(nt.inputSource);if(ht===-1)return;const yt=w[ht];yt!==void 0&&(yt.update(nt.inputSource,nt.frame,p||d),yt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function dt(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",B);for(let nt=0;nt<w.length;nt++){const ht=P[nt];ht!==null&&(P[nt]=null,w[nt].disconnect(ht))}st=null,lt=null,R.reset();for(const nt in y)delete y[nt];t.setRenderTarget(O),M=null,x=null,v=null,l=null,U=null,Ct.stop(),r.isPresenting=!1,t.setPixelRatio(F),t.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Pt=null,Yt=null;_.depth&&(Yt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=_.stencil?Xo:ko,Pt=_.stencil?Vo:Rr);const ie={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:c};x=v.createProjectionLayer(ie),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new wr(x.textureWidth,x.textureHeight,{format:Mi,type:ua,depthTexture:new $v(x.textureWidth,x.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const yt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new wr(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:ua,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ct.setContext(l),Ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function B(nt){for(let ht=0;ht<nt.removed.length;ht++){const yt=nt.removed[ht],Pt=P.indexOf(yt);Pt>=0&&(P[Pt]=null,w[Pt].disconnect(yt))}for(let ht=0;ht<nt.added.length;ht++){const yt=nt.added[ht];let Pt=P.indexOf(yt);if(Pt===-1){for(let ie=0;ie<w.length;ie++)if(ie>=P.length){P.push(yt),Pt=ie;break}else if(P[ie]===null){P[ie]=yt,Pt=ie;break}if(Pt===-1)break}const Yt=w[Pt];Yt&&Yt.connect(yt)}}const K=new Z,Y=new Z;function xt(nt,ht,yt){K.setFromMatrixPosition(ht.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const Pt=K.distanceTo(Y),Yt=ht.projectionMatrix.elements,ie=yt.projectionMatrix.elements,He=Yt[14]/(Yt[10]-1),me=Yt[14]/(Yt[10]+1),G=(Yt[9]+1)/Yt[5],Re=(Yt[9]-1)/Yt[5],Qt=(Yt[8]-1)/Yt[0],Se=(ie[8]+1)/ie[0],Ft=He*Qt,Ge=He*Se,Ht=Pt/(-Qt+Se),se=Ht*-Qt;if(ht.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(se),nt.translateZ(Ht),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Yt[10]===-1)nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Ye=He+Ht,je=me+Ht,N=Ft-se,E=Ge+(Pt-se),tt=G*me/je*Ye,ct=Re*me/je*Ye;nt.projectionMatrix.makePerspective(N,E,tt,ct,Ye,je),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function L(nt,ht){ht===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ht.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ht=nt.near,yt=nt.far;R.texture!==null&&(R.depthNear>0&&(ht=R.depthNear),R.depthFar>0&&(yt=R.depthFar)),I.near=C.near=k.near=ht,I.far=C.far=k.far=yt,(st!==I.near||lt!==I.far)&&(l.updateRenderState({depthNear:I.near,depthFar:I.far}),st=I.near,lt=I.far),I.layers.mask=nt.layers.mask|6,k.layers.mask=I.layers.mask&3,C.layers.mask=I.layers.mask&5;const Pt=nt.parent,Yt=I.cameras;L(I,Pt);for(let ie=0;ie<Yt.length;ie++)L(Yt[ie],Pt);Yt.length===2?xt(I,k,C):I.projectionMatrix.copy(k.projectionMatrix),$(nt,I,Pt)};function $(nt,ht,yt){yt===null?nt.matrix.copy(ht.matrixWorld):(nt.matrix.copy(yt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ht.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Wo*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=nt)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(I)},this.getCameraTexture=function(nt){return y[nt]};let vt=null;function St(nt,ht){if(g=ht.getViewerPose(p||d),b=ht,g!==null){const yt=g.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Pt=!1;yt.length!==I.cameras.length&&(I.cameras.length=0,Pt=!0);for(let me=0;me<yt.length;me++){const G=yt[me];let Re=null;if(M!==null)Re=M.getViewport(G);else{const Se=v.getViewSubImage(x,G);Re=Se.viewport,me===0&&(t.setRenderTargetTextures(U,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(U))}let Qt=D[me];Qt===void 0&&(Qt=new fi,Qt.layers.enable(me),Qt.viewport=new ke,D[me]=Qt),Qt.matrix.fromArray(G.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(G.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Re.x,Re.y,Re.width,Re.height),me===0&&(I.matrix.copy(Qt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pt===!0&&I.cameras.push(Qt)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const me=v.getDepthInformation(yt[0]);me&&me.isValid&&me.texture&&R.init(me,l.renderState)}if(Yt&&Yt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let me=0;me<yt.length;me++){const G=yt[me].camera;if(G){let Re=y[G];Re||(Re=new r0,y[G]=Re);const Qt=v.getCameraImage(G);Re.sourceTexture=Qt}}}for(let yt=0;yt<w.length;yt++){const Pt=P[yt],Yt=w[yt];Pt!==null&&Yt!==void 0&&Yt.update(Pt,ht,p||d)}vt&&vt(nt,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),b=null}const Ct=new t0;Ct.setAnimationLoop(St),this.setAnimationLoop=function(nt){vt=nt},this.dispose=function(){}}}const _r=new fa,SA=new on;function yA(s,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Zv(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,O,U,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),v(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,w)):_.isMeshMatcapMaterial?(c(y,_),b(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),R(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,O,U):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Bn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Bn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const O=t.get(_),U=O.envMap,w=O.envMapRotation;U&&(y.envMap.value=U,_r.copy(w),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),y.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(_r)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,O,U){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*O,y.scale.value=U*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,O){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const O=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function MA(s,t,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const w=U.program;r.uniformBlockBinding(O,w)}function p(O,U){let w=l[O.id];w===void 0&&(b(O),w=g(O),l[O.id]=w,O.addEventListener("dispose",y));const P=U.program;r.updateUBOMapping(O,P);const H=t.render.frame;c[O.id]!==H&&(x(O),c[O.id]=H)}function g(O){const U=v();O.__bindingPointIndex=U;const w=s.createBuffer(),P=O.__size,H=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,P,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function v(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const U=l[O.id],w=O.uniforms,P=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let H=0,F=w.length;H<F;H++){const k=Array.isArray(w[H])?w[H]:[w[H]];for(let C=0,D=k.length;C<D;C++){const I=k[C];if(M(I,H,C,P)===!0){const st=I.__offset,lt=Array.isArray(I.value)?I.value:[I.value];let ft=0;for(let dt=0;dt<lt.length;dt++){const B=lt[dt],K=R(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,st+ft,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,ft),ft+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,st,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(O,U,w,P){const H=O.value,F=U+"_"+w;if(P[F]===void 0)return typeof H=="number"||typeof H=="boolean"?P[F]=H:P[F]=H.clone(),!0;{const k=P[F];if(typeof H=="number"||typeof H=="boolean"){if(k!==H)return P[F]=H,!0}else if(k.equals(H)===!1)return k.copy(H),!0}return!1}function b(O){const U=O.uniforms;let w=0;const P=16;for(let F=0,k=U.length;F<k;F++){const C=Array.isArray(U[F])?U[F]:[U[F]];for(let D=0,I=C.length;D<I;D++){const st=C[D],lt=Array.isArray(st.value)?st.value:[st.value];for(let ft=0,dt=lt.length;ft<dt;ft++){const B=lt[ft],K=R(B),Y=w%P,xt=Y%K.boundary,L=Y+xt;w+=xt,L!==0&&P-L<K.storage&&(w+=P-L),st.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=w,w+=K.storage}}}const H=w%P;return H>0&&(w+=P-H),O.__size=w,O.__cache={},this}function R(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const w=d.indexOf(U.__bindingPointIndex);d.splice(w,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}class EA{constructor(t={}){const{canvas:i=tM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let P=!1;this._outputColorSpace=ei;let H=0,F=0,k=null,C=-1,D=null;const I=new ke,st=new ke;let lt=null;const ft=new Be(0);let dt=0,B=i.width,K=i.height,Y=1,xt=null,L=null;const $=new ke(0,0,B,K),vt=new ke(0,0,B,K);let St=!1;const Ct=new Jv;let nt=!1,ht=!1;const yt=new on,Pt=new Z,Yt=new ke,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function me(){return k===null?Y:1}let G=r;function Re(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),G===null){const W="webgl2";if(G=Re(W,A),G===null)throw Re(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qt,Se,Ft,Ge,Ht,se,Ye,je,N,E,tt,ct,_t,ot,zt,Rt,Xt,qt,Mt,Nt,Zt,kt,Dt,re;function X(){Qt=new Nb(G),Qt.init(),kt=new mA(G,Qt),Se=new Ab(G,Qt,t,kt),Ft=new hA(G,Qt),Se.reversedDepthBuffer&&x&&Ft.buffers.depth.setReversed(!0),Ge=new zb(G),Ht=new tA,se=new pA(G,Qt,Ft,Ht,Se,kt,Ge),Ye=new wb(w),je=new Lb(w),N=new VM(G),Dt=new Tb(G,N),E=new Ob(G,N,Ge,Dt),tt=new Ib(G,E,N,Ge),Mt=new Bb(G,Se,se),Rt=new Rb(Ht),ct=new $1(w,Ye,je,Qt,Se,Dt,Rt),_t=new yA(w,Ht),ot=new nA,zt=new lA(Qt),qt=new Eb(w,Ye,je,Ft,tt,M,m),Xt=new fA(w,tt,Se),re=new MA(G,Ge,Se,Ft),Nt=new bb(G,Qt,Ge),Zt=new Pb(G,Qt,Ge),Ge.programs=ct.programs,w.capabilities=Se,w.extensions=Qt,w.properties=Ht,w.renderLists=ot,w.shadowMap=Xt,w.state=Ft,w.info=Ge}X();const bt=new xA(w,G);this.xr=bt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(B,K,!1))},this.getSize=function(A){return A.set(B,K)},this.setSize=function(A,W,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,K=W,i.width=Math.floor(A*Y),i.height=Math.floor(W*Y),at===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(B*Y,K*Y).floor()},this.setDrawingBufferSize=function(A,W,at){B=A,K=W,Y=at,i.width=Math.floor(A*at),i.height=Math.floor(W*at),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,W,at,rt){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,W,at,rt),Ft.viewport(I.copy($).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,W,at,rt){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,W,at,rt),Ft.scissor(st.copy(vt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Ft.setScissorTest(St=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,at=!0){let rt=0;if(A){let j=!1;if(k!==null){const Tt=k.texture.format;j=Tt===Oh||Tt===Nh||Tt===Lh}if(j){const Tt=k.texture.type,Lt=Tt===ua||Tt===Rr||Tt===Go||Tt===Vo||Tt===Dh||Tt===Uh,It=qt.getClearColor(),Ot=qt.getClearAlpha(),Jt=It.r,te=It.g,Wt=It.b;Lt?(b[0]=Jt,b[1]=te,b[2]=Wt,b[3]=Ot,G.clearBufferuiv(G.COLOR,0,b)):(R[0]=Jt,R[1]=te,R[2]=Wt,R[3]=Ot,G.clearBufferiv(G.COLOR,0,R))}else rt|=G.COLOR_BUFFER_BIT}W&&(rt|=G.DEPTH_BUFFER_BIT),at&&(rt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),qt.dispose(),ot.dispose(),zt.dispose(),Ht.dispose(),Ye.dispose(),je.dispose(),tt.dispose(),Dt.dispose(),re.dispose(),ct.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ln),bt.removeEventListener("sessionend",cn),Ke.stop()};function wt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=Ge.autoReset,W=Xt.enabled,at=Xt.autoUpdate,rt=Xt.needsUpdate,j=Xt.type;X(),Ge.autoReset=A,Xt.enabled=W,Xt.autoUpdate=at,Xt.needsUpdate=rt,Xt.type=j}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const W=A.target;W.removeEventListener("dispose",gt),Vt(W)}function Vt(A){ae(A),Ht.remove(A)}function ae(A){const W=Ht.get(A).programs;W!==void 0&&(W.forEach(function(at){ct.releaseProgram(at)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,at,rt,j,Tt){W===null&&(W=ie);const Lt=j.isMesh&&j.matrixWorld.determinant()<0,It=pa(A,W,at,rt,j);Ft.setMaterial(rt,Lt);let Ot=at.index,Jt=1;if(rt.wireframe===!0){if(Ot=E.getWireframeAttribute(at),Ot===void 0)return;Jt=2}const te=at.drawRange,Wt=at.attributes.position;let ue=te.start*Jt,Me=(te.start+te.count)*Jt;Tt!==null&&(ue=Math.max(ue,Tt.start*Jt),Me=Math.min(Me,(Tt.start+Tt.count)*Jt)),Ot!==null?(ue=Math.max(ue,0),Me=Math.min(Me,Ot.count)):Wt!=null&&(ue=Math.max(ue,0),Me=Math.min(Me,Wt.count));const We=Me-ue;if(We<0||We===1/0)return;Dt.setup(j,rt,It,at,Ot);let Le,fe=Nt;if(Ot!==null&&(Le=N.get(Ot),fe=Zt,fe.setIndex(Le)),j.isMesh)rt.wireframe===!0?(Ft.setLineWidth(rt.wireframeLinewidth*me()),fe.setMode(G.LINES)):fe.setMode(G.TRIANGLES);else if(j.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),Ft.setLineWidth(Kt*me()),j.isLineSegments?fe.setMode(G.LINES):j.isLineLoop?fe.setMode(G.LINE_LOOP):fe.setMode(G.LINE_STRIP)}else j.isPoints?fe.setMode(G.POINTS):j.isSprite&&fe.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))fe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,Xe=j._multiDrawCounts,ge=j._multiDrawCount,An=Ot?N.get(Ot).bytesPerElement:1,pi=Ht.get(rt).currentProgram.getUniforms();for(let Ln=0;Ln<ge;Ln++)pi.setValue(G,"_gl_DrawID",Ln),fe.render(Kt[Ln]/An,Xe[Ln])}else if(j.isInstancedMesh)fe.renderInstances(ue,We,j.count);else if(at.isInstancedBufferGeometry){const Kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Xe=Math.min(at.instanceCount,Kt);fe.renderInstances(ue,We,Xe)}else fe.render(ue,We)};function we(A,W,at){A.transparent===!0&&A.side===sa&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,wi(A,W,at),A.side=ja,A.needsUpdate=!0,wi(A,W,at),A.side=sa):wi(A,W,at)}this.compile=function(A,W,at=null){at===null&&(at=A),_=zt.get(at),_.init(W),U.push(_),at.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==at&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const rt=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){const It=Tt[Lt];we(It,at,j),rt.add(It)}else we(Tt,at,j),rt.add(Tt)}),_=U.pop(),rt},this.compileAsync=function(A,W,at=null){const rt=this.compile(A,W,at);return new Promise(j=>{function Tt(){if(rt.forEach(function(Lt){Ht.get(Lt).currentProgram.isReady()&&rt.delete(Lt)}),rt.size===0){j(A);return}setTimeout(Tt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ye=null;function hi(A){ye&&ye(A)}function ln(){Ke.stop()}function cn(){Ke.start()}const Ke=new t0;Ke.setAnimationLoop(hi),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(A){ye=A,bt.setAnimationLoop(A),A===null?Ke.stop():Ke.start()},bt.addEventListener("sessionstart",ln),bt.addEventListener("sessionend",cn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(W),W=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,W,k),_=zt.get(A,U.length),_.init(W),U.push(_),yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ct.setFromProjectionMatrix(yt,Ii,W.reversedDepth),ht=this.localClippingEnabled,nt=Rt.init(this.clippingPlanes,ht),y=ot.get(A,O.length),y.init(),O.push(y),bt.enabled===!0&&bt.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Ri(Tt,W,-1/0,w.sortObjects)}Ri(A,W,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(xt,L),He=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,He&&qt.addToRenderList(y,A),this.info.render.frame++,nt===!0&&Rt.beginShadows();const at=_.state.shadowsArray;Xt.render(at,A,W),nt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,j=y.transmissive;if(_.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(j.length>0)for(let Lt=0,It=Tt.length;Lt<It;Lt++){const Ot=Tt[Lt];Zo(rt,j,A,Ot)}He&&qt.render(A);for(let Lt=0,It=Tt.length;Lt<It;Lt++){const Ot=Tt[Lt];Cr(y,A,Ot,Ot.viewport)}}else j.length>0&&Zo(rt,j,A,W),He&&qt.render(A),Cr(y,A,W);k!==null&&F===0&&(se.updateMultisampleRenderTarget(k),se.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(w,A,W),Dt.resetDefaultState(),C=-1,D=null,U.pop(),U.length>0?(_=U[U.length-1],nt===!0&&Rt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Ri(A,W,at,rt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ct.intersectsSprite(A)){rt&&Yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(yt);const Lt=tt.update(A),It=A.material;It.visible&&y.push(A,Lt,It,at,Yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ct.intersectsObject(A))){const Lt=tt.update(A),It=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Yt.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Yt.copy(Lt.boundingSphere.center)),Yt.applyMatrix4(A.matrixWorld).applyMatrix4(yt)),Array.isArray(It)){const Ot=Lt.groups;for(let Jt=0,te=Ot.length;Jt<te;Jt++){const Wt=Ot[Jt],ue=It[Wt.materialIndex];ue&&ue.visible&&y.push(A,Lt,ue,at,Yt.z,Wt)}}else It.visible&&y.push(A,Lt,It,at,Yt.z,null)}}const Tt=A.children;for(let Lt=0,It=Tt.length;Lt<It;Lt++)Ri(Tt[Lt],W,at,rt)}function Cr(A,W,at,rt){const j=A.opaque,Tt=A.transmissive,Lt=A.transparent;_.setupLightsView(at),nt===!0&&Rt.setGlobalState(w.clippingPlanes,at),rt&&Ft.viewport(I.copy(rt)),j.length>0&&Dr(j,W,at),Tt.length>0&&Dr(Tt,W,at),Lt.length>0&&Dr(Lt,W,at),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Zo(A,W,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new wr(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?qo:ua,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[rt.id],Lt=rt.viewport||I;Tt.setSize(Lt.z*w.transmissionResolutionScale,Lt.w*w.transmissionResolutionScale);const It=w.getRenderTarget(),Ot=w.getActiveCubeFace(),Jt=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(ft),dt=w.getClearAlpha(),dt<1&&w.setClearColor(16777215,.5),w.clear(),He&&qt.render(at);const te=w.toneMapping;w.toneMapping=Ya;const Wt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),nt===!0&&Rt.setGlobalState(w.clippingPlanes,rt),Dr(A,at,rt),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Me=0,We=W.length;Me<We;Me++){const Le=W[Me],fe=Le.object,Kt=Le.geometry,Xe=Le.material,ge=Le.group;if(Xe.side===sa&&fe.layers.test(rt.layers)){const An=Xe.side;Xe.side=Bn,Xe.needsUpdate=!0,Fs(fe,at,rt,Kt,Xe,ge),Xe.side=An,Xe.needsUpdate=!0,ue=!0}}ue===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}w.setRenderTarget(It,Ot,Jt),w.setClearColor(ft,dt),Wt!==void 0&&(rt.viewport=Wt),w.toneMapping=te}function Dr(A,W,at){const rt=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const Lt=A[j],It=Lt.object,Ot=Lt.geometry,Jt=Lt.group;let te=Lt.material;te.allowOverride===!0&&rt!==null&&(te=rt),It.layers.test(at.layers)&&Fs(It,W,at,Ot,te,Jt)}}function Fs(A,W,at,rt,j,Tt){A.onBeforeRender(w,W,at,rt,j,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(w,W,at,rt,A,Tt),j.transparent===!0&&j.side===sa&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,w.renderBufferDirect(at,W,rt,j,A,Tt),j.side=ja,j.needsUpdate=!0,w.renderBufferDirect(at,W,rt,j,A,Tt),j.side=sa):w.renderBufferDirect(at,W,rt,j,A,Tt),A.onAfterRender(w,W,at,rt,j,Tt)}function wi(A,W,at){W.isScene!==!0&&(W=ie);const rt=Ht.get(A),j=_.state.lights,Tt=_.state.shadowsArray,Lt=j.state.version,It=ct.getParameters(A,j.state,Tt,W,at),Ot=ct.getProgramCacheKey(It);let Jt=rt.programs;rt.environment=A.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(A.isMeshStandardMaterial?je:Ye).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",gt),Jt=new Map,rt.programs=Jt);let te=Jt.get(Ot);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Lt)return Fi(A,It),te}else It.uniforms=ct.getUniforms(A),A.onBeforeCompile(It,w),te=ct.acquireProgram(It,Ot),Jt.set(Ot,te),rt.uniforms=It.uniforms;const Wt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Rt.uniform),Fi(A,It),rt.needsLights=ma(A),rt.lightsStateVersion=Lt,rt.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function Ur(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Fc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Fi(A,W){const at=Ht.get(A);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function pa(A,W,at,rt,j){W.isScene!==!0&&(W=ie),se.resetTextureUnits();const Tt=W.fog,Lt=rt.isMeshStandardMaterial?W.environment:null,It=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Os,Ot=(rt.isMeshStandardMaterial?je:Ye).get(rt.envMap||Lt),Jt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,te=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!at.morphAttributes.position,ue=!!at.morphAttributes.normal,Me=!!at.morphAttributes.color;let We=Ya;rt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(We=w.toneMapping);const Le=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,fe=Le!==void 0?Le.length:0,Kt=Ht.get(rt),Xe=_.state.lights;if(nt===!0&&(ht===!0||A!==D)){const Qe=A===D&&rt.id===C;Rt.setState(rt,A,Qe)}let ge=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Xe.state.version||Kt.outputColorSpace!==It||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Ot||rt.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Rt.numPlanes||Kt.numIntersection!==Rt.numIntersection)||Kt.vertexAlphas!==Jt||Kt.vertexTangents!==te||Kt.morphTargets!==Wt||Kt.morphNormals!==ue||Kt.morphColors!==Me||Kt.toneMapping!==We||Kt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Kt.__version=rt.version);let An=Kt.currentProgram;ge===!0&&(An=wi(rt,W,j));let pi=!1,Ln=!1,pn=!1;const Ie=An.getUniforms(),Nn=Kt.uniforms;if(Ft.useProgram(An.program)&&(pi=!0,Ln=!0,pn=!0),rt.id!==C&&(C=rt.id,Ln=!0),pi||D!==A){Ft.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ie.setValue(G,"projectionMatrix",A.projectionMatrix),Ie.setValue(G,"viewMatrix",A.matrixWorldInverse);const xn=Ie.map.cameraPosition;xn!==void 0&&xn.setValue(G,Pt.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&Ie.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ie.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Ln=!0,pn=!0)}if(j.isSkinnedMesh){Ie.setOptional(G,j,"bindMatrix"),Ie.setOptional(G,j,"bindMatrixInverse");const Qe=j.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ie.setValue(G,"boneTexture",Qe.boneTexture,se))}j.isBatchedMesh&&(Ie.setOptional(G,j,"batchingTexture"),Ie.setValue(G,"batchingTexture",j._matricesTexture,se),Ie.setOptional(G,j,"batchingIdTexture"),Ie.setValue(G,"batchingIdTexture",j._indirectTexture,se),Ie.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&Ie.setValue(G,"batchingColorTexture",j._colorsTexture,se));const Rn=at.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Mt.update(j,at,An),(Ln||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Ie.setValue(G,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Nn.envMap.value=Ot,Nn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(Nn.envMapIntensity.value=W.environmentIntensity),Ln&&(Ie.setValue(G,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&Za(Nn,pn),Tt&&rt.fog===!0&&_t.refreshFogUniforms(Nn,Tt),_t.refreshMaterialUniforms(Nn,rt,Y,K,_.state.transmissionRenderTarget[A.id]),Fc.upload(G,Ur(Kt),Nn,se)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Fc.upload(G,Ur(Kt),Nn,se),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ie.setValue(G,"center",j.center),Ie.setValue(G,"modelViewMatrix",j.modelViewMatrix),Ie.setValue(G,"normalMatrix",j.normalMatrix),Ie.setValue(G,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Qe=rt.uniformsGroups;for(let xn=0,Lr=Qe.length;xn<Lr;xn++){const In=Qe[xn];re.update(In,An),re.bind(In,An)}}return An}function Za(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ma(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,W,at){const rt=Ht.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=W,Ht.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const at=Ht.get(A);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const nn=G.createFramebuffer();this.setRenderTarget=function(A,W=0,at=0){k=A,H=W,F=at;let rt=!0,j=null,Tt=!1,Lt=!1;if(A){const Ot=Ht.get(A);if(Ot.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(G.FRAMEBUFFER,null),rt=!1;else if(Ot.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(Ot.__hasExternalTextures)se.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Ot.__boundDepthTexture!==Wt){if(Wt!==null&&Ht.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Lt=!0);const te=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[W])?j=te[W][at]:j=te[W],Tt=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?j=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?j=te[at]:j=te,I.copy(A.viewport),st.copy(A.scissor),lt=A.scissorTest}else I.copy($).multiplyScalar(Y).floor(),st.copy(vt).multiplyScalar(Y).floor(),lt=St;if(at!==0&&(j=nn),Ft.bindFramebuffer(G.FRAMEBUFFER,j)&&rt&&Ft.drawBuffers(A,j),Ft.viewport(I),Ft.scissor(st),Ft.setScissorTest(lt),Tt){const Ot=Ht.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,at)}else if(Lt){const Ot=W;for(let Jt=0;Jt<A.textures.length;Jt++){const te=Ht.get(A.textures[Jt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Jt,te.__webglTexture,at,Ot)}}else if(A!==null&&at!==0){const Ot=Ht.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(A,W,at,rt,j,Tt,Lt,It=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){Ft.bindFramebuffer(G.FRAMEBUFFER,Ot);try{const Jt=A.textures[It],te=Jt.format,Wt=Jt.type;if(!Se.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-rt&&at>=0&&at<=A.height-j&&(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+It),G.readPixels(W,at,rt,j,kt.convert(te),kt.convert(Wt),Tt))}finally{const Jt=k!==null?Ht.get(k).__webglFramebuffer:null;Ft.bindFramebuffer(G.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,W,at,rt,j,Tt,Lt,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(W>=0&&W<=A.width-rt&&at>=0&&at<=A.height-j){Ft.bindFramebuffer(G.FRAMEBUFFER,Ot);const Jt=A.textures[It],te=Jt.format,Wt=Jt.type;if(!Se.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+It),G.readPixels(W,at,rt,j,kt.convert(te),kt.convert(Wt),0);const Me=k!==null?Ht.get(k).__webglFramebuffer:null;Ft.bindFramebuffer(G.FRAMEBUFFER,Me);const We=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await eM(G,We,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer(ue),G.deleteSync(We),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,at=0){const rt=Math.pow(2,-at),j=Math.floor(A.image.width*rt),Tt=Math.floor(A.image.height*rt),Lt=W!==null?W.x:0,It=W!==null?W.y:0;se.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,at,0,0,Lt,It,j,Tt),Ft.unbindTexture()};const Ko=G.createFramebuffer(),Qo=G.createFramebuffer();this.copyTextureToTexture=function(A,W,at=null,rt=null,j=0,Tt=null){Tt===null&&(j!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Lt,It,Ot,Jt,te,Wt,ue,Me,We;const Le=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)Lt=at.max.x-at.min.x,It=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,te=at.min.y,Wt=at.isBox3?at.min.z:0;else{const Rn=Math.pow(2,-j);Lt=Math.floor(Le.width*Rn),It=Math.floor(Le.height*Rn),A.isDataArrayTexture?Ot=Le.depth:A.isData3DTexture?Ot=Math.floor(Le.depth*Rn):Ot=1,Jt=0,te=0,Wt=0}rt!==null?(ue=rt.x,Me=rt.y,We=rt.z):(ue=0,Me=0,We=0);const fe=kt.convert(W.format),Kt=kt.convert(W.type);let Xe;W.isData3DTexture?(se.setTexture3D(W,0),Xe=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),Xe=G.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),Xe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const ge=G.getParameter(G.UNPACK_ROW_LENGTH),An=G.getParameter(G.UNPACK_IMAGE_HEIGHT),pi=G.getParameter(G.UNPACK_SKIP_PIXELS),Ln=G.getParameter(G.UNPACK_SKIP_ROWS),pn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Le.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,te),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Ie=A.isDataArrayTexture||A.isData3DTexture,Nn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Rn=Ht.get(A),Qe=Ht.get(W),xn=Ht.get(Rn.__renderTarget),Lr=Ht.get(Qe.__renderTarget);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let In=0;In<Ot;In++)Ie&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,j,Wt+In),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,Tt,We+In)),G.blitFramebuffer(Jt,te,Lt,It,ue,Me,Lt,It,G.DEPTH_BUFFER_BIT,G.NEAREST);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Ht.has(A)){const Rn=Ht.get(A),Qe=Ht.get(W);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,Ko),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,Qo);for(let xn=0;xn<Ot;xn++)Ie?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Rn.__webglTexture,j,Wt+xn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Rn.__webglTexture,j),Nn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,We+xn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Qe.__webglTexture,Tt),j!==0?G.blitFramebuffer(Jt,te,Lt,It,ue,Me,Lt,It,G.COLOR_BUFFER_BIT,G.NEAREST):Nn?G.copyTexSubImage3D(Xe,Tt,ue,Me,We+xn,Jt,te,Lt,It):G.copyTexSubImage2D(Xe,Tt,ue,Me,Jt,te,Lt,It);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Nn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Xe,Tt,ue,Me,We,Lt,It,Ot,fe,Kt,Le.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Xe,Tt,ue,Me,We,Lt,It,Ot,fe,Le.data):G.texSubImage3D(Xe,Tt,ue,Me,We,Lt,It,Ot,fe,Kt,Le):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,ue,Me,Lt,It,fe,Kt,Le.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,ue,Me,Le.width,Le.height,fe,Le.data):G.texSubImage2D(G.TEXTURE_2D,Tt,ue,Me,Lt,It,fe,Kt,Le);G.pixelStorei(G.UNPACK_ROW_LENGTH,ge),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,An),G.pixelStorei(G.UNPACK_SKIP_PIXELS,pi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ln),G.pixelStorei(G.UNPACK_SKIP_IMAGES,pn),Tt===0&&W.generateMipmaps&&G.generateMipmap(Xe),Ft.unbindTexture()},this.copyTextureToTexture3D=function(A,W,at=null,rt=null,j=0){return Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,at,rt,j)},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),Ft.unbindTexture()},this.resetState=function(){H=0,F=0,k=null,Ft.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const Ev=new ha,Dc=new Z;class s0 extends zM{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],r=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(r),this.setAttribute("position",new Wn(t,3)),this.setAttribute("uv",new Wn(i,2))}applyMatrix4(t){const i=this.attributes.instanceStart,r=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(t),r.applyMatrix4(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const r=new bh(i,6,1);return this.setAttribute("instanceStart",new Wa(r,3,0)),this.setAttribute("instanceEnd",new Wa(r,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const r=new bh(i,6,1);return this.setAttribute("instanceColorStart",new Wa(r,3,0)),this.setAttribute("instanceColorEnd",new Wa(r,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new LM(t.geometry)),this}fromLineSegments(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;t!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Ev.setFromBufferAttribute(i),this.boundingBox.union(Ev))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(t!==void 0&&i!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)Dc.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Dc)),Dc.fromBufferAttribute(i,c),l=Math.max(l,r.distanceToSquared(Dc));this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Ut.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new be(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};kn.line={uniforms:Ih.merge([Ut.common,Ut.fog,Ut.line]),vertexShader:`
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
		`};class Gh extends da{constructor(t){super({type:"LineMaterial",uniforms:Ih.clone(kn.line.uniforms),vertexShader:kn.line.vertexShader,fragmentShader:kn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const zd=new ke,Tv=new Z,bv=new Z,En=new ke,Tn=new ke,Oi=new ke,Bd=new Z,Id=new on,bn=new HM,Av=new Z,Uc=new ha,Lc=new Bs,Pi=new ke;let zi,br;function Rv(s,t,i){return Pi.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),Pi.multiplyScalar(1/Pi.w),Pi.x=br/i.width,Pi.y=br/i.height,Pi.applyMatrix4(s.projectionMatrixInverse),Pi.multiplyScalar(1/Pi.w),Math.abs(Math.max(Pi.x,Pi.y))}function TA(s,t){const i=s.matrixWorld,r=s.geometry,l=r.attributes.instanceStart,c=r.attributes.instanceEnd,d=Math.min(r.instanceCount,l.count);for(let h=0,m=d;h<m;h++){bn.start.fromBufferAttribute(l,h),bn.end.fromBufferAttribute(c,h),bn.applyMatrix4(i);const p=new Z,g=new Z;zi.distanceSqToSegment(bn.start,bn.end,g,p),g.distanceTo(p)<br*.5&&t.push({point:g,pointOnLine:p,distance:zi.origin.distanceTo(g),object:s,face:null,faceIndex:h,uv:null,uv1:null})}}function bA(s,t,i){const r=t.projectionMatrix,c=s.material.resolution,d=s.matrixWorld,h=s.geometry,m=h.attributes.instanceStart,p=h.attributes.instanceEnd,g=Math.min(h.instanceCount,m.count),v=-t.near;zi.at(1,Oi),Oi.w=1,Oi.applyMatrix4(t.matrixWorldInverse),Oi.applyMatrix4(r),Oi.multiplyScalar(1/Oi.w),Oi.x*=c.x/2,Oi.y*=c.y/2,Oi.z=0,Bd.copy(Oi),Id.multiplyMatrices(t.matrixWorldInverse,d);for(let x=0,M=g;x<M;x++){if(En.fromBufferAttribute(m,x),Tn.fromBufferAttribute(p,x),En.w=1,Tn.w=1,En.applyMatrix4(Id),Tn.applyMatrix4(Id),En.z>v&&Tn.z>v)continue;if(En.z>v){const U=En.z-Tn.z,w=(En.z-v)/U;En.lerp(Tn,w)}else if(Tn.z>v){const U=Tn.z-En.z,w=(Tn.z-v)/U;Tn.lerp(En,w)}En.applyMatrix4(r),Tn.applyMatrix4(r),En.multiplyScalar(1/En.w),Tn.multiplyScalar(1/Tn.w),En.x*=c.x/2,En.y*=c.y/2,Tn.x*=c.x/2,Tn.y*=c.y/2,bn.start.copy(En),bn.start.z=0,bn.end.copy(Tn),bn.end.z=0;const R=bn.closestPointToPointParameter(Bd,!0);bn.at(R,Av);const y=Vv.lerp(En.z,Tn.z,R),_=y>=-1&&y<=1,O=Bd.distanceTo(Av)<br*.5;if(_&&O){bn.start.fromBufferAttribute(m,x),bn.end.fromBufferAttribute(p,x),bn.start.applyMatrix4(d),bn.end.applyMatrix4(d);const U=new Z,w=new Z;zi.distanceSqToSegment(bn.start,bn.end,w,U),i.push({point:w,pointOnLine:U,distance:zi.origin.distanceTo(w),object:s,face:null,faceIndex:x,uv:null,uv1:null})}}}class AA extends Ei{constructor(t=new s0,i=new Gh({color:Math.random()*16777215})){super(t,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,i=t.attributes.instanceStart,r=t.attributes.instanceEnd,l=new Float32Array(2*i.count);for(let d=0,h=0,m=i.count;d<m;d++,h+=2)Tv.fromBufferAttribute(i,d),bv.fromBufferAttribute(r,d),l[h]=h===0?0:l[h-1],l[h+1]=l[h]+Tv.distanceTo(bv);const c=new bh(l,2,1);return t.setAttribute("instanceDistanceStart",new Wa(c,1,0)),t.setAttribute("instanceDistanceEnd",new Wa(c,1,1)),this}raycast(t,i){const r=this.material.worldUnits,l=t.camera;l===null&&!r&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=t.params.Line2!==void 0&&t.params.Line2.threshold||0;zi=t.ray;const d=this.matrixWorld,h=this.geometry,m=this.material;br=m.linewidth+c,h.boundingSphere===null&&h.computeBoundingSphere(),Lc.copy(h.boundingSphere).applyMatrix4(d);let p;if(r)p=br*.5;else{const v=Math.max(l.near,Lc.distanceToPoint(zi.origin));p=Rv(l,v,m.resolution)}if(Lc.radius+=p,zi.intersectsSphere(Lc)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),Uc.copy(h.boundingBox).applyMatrix4(d);let g;if(r)g=br*.5;else{const v=Math.max(l.near,Uc.distanceToPoint(zi.origin));g=Rv(l,v,m.resolution)}Uc.expandByScalar(g),zi.intersectsBox(Uc)!==!1&&(r?TA(this,i):bA(this,l,i))}onBeforeRender(t){const i=this.material.uniforms;i&&i.resolution&&(t.getViewport(zd),this.material.uniforms.resolution.value.set(zd.z,zd.w))}}class o0 extends s0{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const i=t.length-3,r=new Float32Array(2*i);for(let l=0;l<i;l+=3)r[2*l]=t[l],r[2*l+1]=t[l+1],r[2*l+2]=t[l+2],r[2*l+3]=t[l+3],r[2*l+4]=t[l+4],r[2*l+5]=t[l+5];return super.setPositions(r),this}setColors(t){const i=t.length-3,r=new Float32Array(2*i);for(let l=0;l<i;l+=3)r[2*l]=t[l],r[2*l+1]=t[l+1],r[2*l+2]=t[l+2],r[2*l+3]=t[l+3],r[2*l+4]=t[l+4],r[2*l+5]=t[l+5];return super.setColors(r),this}setFromPoints(t){const i=t.length-1,r=new Float32Array(6*i);for(let l=0;l<i;l++)r[6*l]=t[l].x,r[6*l+1]=t[l].y,r[6*l+2]=t[l].z||0,r[6*l+3]=t[l+1].x,r[6*l+4]=t[l+1].y,r[6*l+5]=t[l+1].z||0;return super.setPositions(r),this}fromLine(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}}class RA extends AA{constructor(t=new o0,i=new Gh({color:Math.random()*16777215})){super(t,i),this.isLine2=!0,this.type="Line2"}}function wA(){const s=Ar.useRef(null);return Ar.useEffect(()=>{const t=s.current;if(!t)return;const i=new AM,r=new fi(45,1,.01,100),l=new EA({antialias:!0,alpha:!1});l.setClearColor(0,1),l.outputColorSpace=ei,t.appendChild(l.domElement);const c=new Wc(.8,0),d=new UM(c),h=Array.from(d.attributes.position.array),m=new o0;m.setPositions(h);const p=new Gh({color:12862780,linewidth:.02*window.devicePixelRatio*100,transparent:!0,opacity:1}),g=new RA(m,p);g.computeLineDistances(),i.add(g);const v=new Ei(new Wc(.85,0),new Bh({color:12862780,transparent:!0,opacity:.06,side:Bn}));i.add(v);const x=(y=1)=>{const _=new Bs;new ha().setFromObject(v).getBoundingSphere(_);const O=Math.floor(t.clientWidth),U=Math.floor(t.clientHeight);r.aspect=O/U;const P=Vv.degToRad(r.fov)/2,H=Math.atan(Math.tan(P)*r.aspect),F=_.radius/Math.sin(P),k=_.radius/Math.sin(H),C=Math.max(F,k)*y;r.position.set(_.center.x,_.center.y,_.center.z+C),r.lookAt(_.center),r.near=Math.max(.01,C-_.radius*2),r.far=C+_.radius*2,r.updateProjectionMatrix(),l.setSize(O,U,!1),p.resolution.set(O,U)},M=()=>{t&&x(1)},b=new ResizeObserver(()=>M());b.observe(t),requestAnimationFrame(()=>M());const R=()=>{g.rotation.x+=.003,g.rotation.y+=.005,v.rotation.x+=.003,v.rotation.y+=.005,l.render(i,r),requestAnimationFrame(R)};return R(),window.addEventListener("resize",M),()=>{b.disconnect(),window.removeEventListener("resize",M),l.dispose(),m.dispose(),p.dispose(),c.dispose(),d.dispose(),v.geometry.dispose(),v.material.dispose(),i.clear(),l.domElement.parentNode===t&&t.removeChild(l.domElement)}},[]),At.jsxs("div",{id:"hero",children:[At.jsxs("div",{id:"sector",children:[At.jsx("div",{id:"description",children:At.jsx("p",{children:"Web Personal PortFolio by Gabriele Armenise, made using pure HTML, CSS and React with also third party npm packages like Three.js and FontAwesome."})}),At.jsx("div",{id:"canvas-container",ref:s})]}),At.jsx("div",{id:"overlay",children:At.jsx("span",{id:"link",children:At.jsx("a",{href:"#about",children:"Explore my PortFolio"})})})]})}function CA({project:s}){return At.jsxs("article",{className:"project-card",children:[s.featured&&At.jsx("span",{className:"featured-badge",children:"Featured"}),At.jsxs("div",{className:"card-image",children:[At.jsx("img",{src:s.image,alt:`${s.title} screenshot`,loading:"lazy"}),At.jsx("div",{className:"card-overlay",children:At.jsxs("div",{className:"card-links",children:[s.github&&At.jsx("a",{href:s.github,target:"_blank",rel:"noopener noreferrer","aria-label":`View ${s.title} source code on GitHub`,title:"View Source",children:At.jsx(XS,{})}),s.demo&&At.jsx("a",{href:s.demo,target:"_blank",rel:"noopener noreferrer","aria-label":`View ${s.title} live demo`,title:"Live Demo",children:At.jsx(qS,{})})]})})]}),At.jsxs("div",{className:"card-content",children:[At.jsx("h3",{children:s.title}),At.jsx("p",{children:s.description}),At.jsx("ul",{className:"tech-stack",children:s.technologies.map((t,i)=>At.jsx("li",{className:"tech-tag",children:t},i))})]})]})}const Nc=[{id:1,title:"Space Shooter Game",description:"Arcade style space shooter with multiple difficulties, and power-ups, with plenty of customizable settings.",technologies:["C++","Raylib","Json","Windows"],image:"/images/spaceinvader.png",github:"https://github.com/GabOnTrash/Space-Invader",demo:null,featured:!0},{id:2,title:"Customizeable crosshair",description:"Desktop application to create and customize crosshairs for FPS games. Features customizeable sizes and the option to save data locally.",technologies:["C++","GLFW","Dear ImGui","Json"],image:"/images/crosshair.jpg",github:"https://github.com/GabOnTrash/Crosshair",demo:null,featured:!0},{id:3,title:"Platformer game",description:"2D platformer game with multiple levels, enemies. Features smooth controls and pixel art style.",technologies:["Python","Pygame-ce","Tiled"],image:"/images/skyclimb.png",github:"https://github.com/GabOnTrash/Sky-Climb",demo:null,featured:!0},{id:4,title:"QR Code Generator",description:"QR Code generator web app for encoding URLs and text into QR codes, with Python backend.",technologies:["Python","Flask","Html","CSS"],image:"/images/qrcode.png",github:null,demo:"https://gabriele.pythonanywhere.com",featured:!0},{id:5,title:"Random Dice generator",description:"Random dice generator with image visualization.",technologies:["Html","CSS","PHP"],image:"/images/dadi.jpg",github:null,demo:"https://gabrielearmenise.altervista.org/DADI/Dadi.php",featured:!1},{id:6,title:"Pong Game",description:"Classic Pong game in single player mode. Features simple controls and retro graphics.",technologies:["C++","Raylib"],image:"/images/pong.png",github:"https://github.com/GabOnTrash/Pong",demo:null,featured:!1}];function DA(){const[s,t]=Ar.useState("all"),i=s==="all"?Nc:Nc.filter(r=>r.featured);return At.jsx("section",{id:"projects",children:At.jsxs("div",{className:"projects-container",children:[At.jsxs("div",{className:"projects-header",children:[At.jsx("h2",{children:"Projects"}),At.jsxs("div",{className:"filter-tabs",children:[At.jsxs("button",{className:s==="all"?"active":"",onClick:()=>t("all"),children:["All Projects (",Nc.length,")"]}),At.jsxs("button",{className:s==="featured"?"active":"",onClick:()=>t("featured"),children:["Featured (",Nc.filter(r=>r.featured).length,")"]})]})]}),At.jsx("div",{className:"projects-grid",children:i.map(r=>At.jsx(CA,{project:r},r.id))})]})})}function UA(){return At.jsxs(At.Fragment,{children:[At.jsx(ZS,{}),At.jsx(wA,{}),At.jsx(LS,{}),At.jsx(DA,{}),At.jsx(zS,{})]})}yS.createRoot(document.getElementById("root")).render(At.jsx(Ar.StrictMode,{children:At.jsx(UA,{})}));
