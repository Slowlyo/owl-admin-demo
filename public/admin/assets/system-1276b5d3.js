import{a9 as oe,r as V,b,o as G,a as H,A as He,Q as K,h as i,x as T,ak as Ue,n as L,y,q as I,ao as Ke,an as We,d as Q,u as D,e as S,aA as Ye,l as J,ac as W,i as ye,p as j,aB as Xe,am as Ze,w as Y,v as ie,T as ke,s as se,aC as qe,a0 as Ge,aD as Qe,aE as Je,aF as en}from"./index-0a18f324.js";import{p as Pe,q as X,h as xe,r as Z,s as U,j as Ee,g as nn,N as tn,t as on,u as $e,v as sn,w as an,x as rn,y as ln,i as cn,F as dn,z as un,k as q,_ as fn,A as hn,f as vn,B as gn,C as mn,L as pn,D as Cn}from"./Card-759cf6fe.js";import{l as bn,a as Le,f as wn,b as Re,r as ae,_ as re,m as le,w as yn,i as kn,k as z}from"./Button-e96fa394.js";function Wn(e,n=[],t){const o={};return Object.getOwnPropertyNames(e).forEach(c=>{n.includes(c)||(o[c]=e[c])}),Object.assign(o,t)}const O=(e,...n)=>typeof e=="function"?e(...n):typeof e=="string"?oe(e):typeof e=="number"?oe(String(e)):null,Te=new WeakSet;function Yn(e){Te.add(e)}function Pn(e){return!Te.has(e)}const A=b(null);function ce(e){if(e.clientX>0||e.clientY>0)A.value={x:e.clientX,y:e.clientY};else{const{target:n}=e;if(n instanceof Element){const{left:t,top:o,width:a,height:c}=n.getBoundingClientRect();t>0||o>0?A.value={x:t+a/2,y:o+c/2}:A.value={x:0,y:0}}else A.value=null}}let F=0,de=!0;function xn(){if(!Pe)return V(b(null));F===0&&X("click",document,ce,!0);const e=()=>{F+=1};return de&&(de=xe())?(G(e),H(()=>{F-=1,F===0&&Z("click",document,ce,!0)})):e(),V(A)}const En=b(void 0);let N=0;function ue(){En.value=Date.now()}let fe=!0;function $n(e){if(!Pe)return V(b(!1));const n=b(!1);let t=null;function o(){t!==null&&window.clearTimeout(t)}function a(){o(),n.value=!0,t=window.setTimeout(()=>{n.value=!1},e)}N===0&&X("click",window,ue,!0);const c=()=>{N+=1,X("click",window,a,!0)};return fe&&(fe=xe())?(G(c),H(()=>{N-=1,N===0&&Z("click",window,ue,!0),Z("click",window,a,!0),o()})):c(),V(n)}let B=0,he="",ve="",ge="",me="";const pe=b("0px");function Ln(e){if(typeof document>"u")return;const n=document.documentElement;let t,o=!1;const a=()=>{n.style.marginRight=he,n.style.overflow=ve,n.style.overflowX=ge,n.style.overflowY=me,pe.value="0px"};He(()=>{t=K(e,c=>{if(c){if(!B){const d=window.innerWidth-n.offsetWidth;d>0&&(he=n.style.marginRight,n.style.marginRight=`${d}px`,pe.value=`${d}px`),ve=n.style.overflow,ge=n.style.overflowX,me=n.style.overflowY,n.style.overflow="hidden",n.style.overflowX="hidden",n.style.overflowY="hidden"}o=!0,B++}else B--,B||a(),o=!1},{immediate:!0})}),H(()=>{t==null||t(),o&&(B--,B||a(),o=!1)})}const ee=b(!1),Ce=()=>{ee.value=!0},be=()=>{ee.value=!1};let M=0;const Rn=()=>(bn&&(G(()=>{M||(window.addEventListener("compositionstart",Ce),window.addEventListener("compositionend",be)),M++}),H(()=>{M<=1?(window.removeEventListener("compositionstart",Ce),window.removeEventListener("compositionend",be),M=0):M--})),ee),Tn=U("error",i("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},i("g",{"fill-rule":"nonzero"},i("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),we=U("info",i("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},i("g",{"fill-rule":"nonzero"},i("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),_n=U("success",i("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},i("g",{"fill-rule":"nonzero"},i("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),On=U("warning",i("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},i("g",{"fill-rule":"nonzero"},i("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),{cubicBezierEaseInOut:P,cubicBezierEaseOut:Bn,cubicBezierEaseIn:Sn}=Ue;function Xn({overflow:e="hidden",duration:n=".3s",originalTransition:t="",leavingDelay:o="0s",foldPadding:a=!1,enterToProps:c=void 0,leaveToProps:d=void 0,reverse:h=!1}={}){const v=h?"leave":"enter",p=h?"enter":"leave";return[T(`&.fade-in-height-expand-transition-${p}-from,
 &.fade-in-height-expand-transition-${v}-to`,Object.assign(Object.assign({},c),{opacity:1})),T(`&.fade-in-height-expand-transition-${p}-to,
 &.fade-in-height-expand-transition-${v}-from`,Object.assign(Object.assign({},d),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:a?"0 !important":void 0,paddingBottom:a?"0 !important":void 0})),T(`&.fade-in-height-expand-transition-${p}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${P} ${o},
 opacity ${n} ${Bn} ${o},
 margin-top ${n} ${P} ${o},
 margin-bottom ${n} ${P} ${o},
 padding-top ${n} ${P} ${o},
 padding-bottom ${n} ${P} ${o}
 ${t?","+t:""}
 `),T(`&.fade-in-height-expand-transition-${v}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${P},
 opacity ${n} ${Sn},
 margin-top ${n} ${P},
 margin-bottom ${n} ${P},
 padding-top ${n} ${P},
 padding-bottom ${n} ${P}
 ${t?","+t:""}
 `)]}const ne={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},In=Ee(ne),Mn=T([L("dialog",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[y("icon",{color:"var(--n-icon-color)"}),I("bordered",{border:"var(--n-border)"}),I("icon-top",[y("close",{margin:"var(--n-close-margin)"}),y("icon",{margin:"var(--n-icon-margin)"}),y("content",{textAlign:"center"}),y("title",{justifyContent:"center"}),y("action",{justifyContent:"center"})]),I("icon-left",[y("icon",{margin:"var(--n-icon-margin)"}),I("closable",[y("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),y("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),y("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[I("last","margin-bottom: 0;")]),y("action",`
 display: flex;
 justify-content: flex-end;
 `,[T("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),y("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),y("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),L("dialog-icon-container",{display:"flex",justifyContent:"center"})]),Ke(L("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),L("dialog",[We(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),An={default:()=>i(we,null),info:()=>i(we,null),success:()=>i(_n,null),warning:()=>i(On,null),error:()=>i(Tn,null)},zn=Q({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},D.props),ne),setup(e){const{mergedComponentPropsRef:n,mergedClsPrefixRef:t,inlineThemeDisabled:o}=Le(e),a=S(()=>{var l,g;const{iconPlacement:x}=e;return x||((g=(l=n==null?void 0:n.value)===null||l===void 0?void 0:l.Dialog)===null||g===void 0?void 0:g.iconPlacement)||"left"});function c(l){const{onPositiveClick:g}=e;g&&g(l)}function d(l){const{onNegativeClick:g}=e;g&&g(l)}function h(){const{onClose:l}=e;l&&l()}const v=D("Dialog","-dialog",Mn,Ye,e,t),p=S(()=>{const{type:l}=e,g=a.value,{common:{cubicBezierEaseInOut:x},self:{fontSize:R,lineHeight:k,border:u,titleTextColor:m,textColor:f,color:E,closeBorderRadius:w,closeColorHover:s,closeColorPressed:r,closeIconColor:$,closeIconColorHover:_,closeIconColorPressed:_e,closeIconSize:Oe,borderRadius:Be,titleFontWeight:Se,titleFontSize:Ie,padding:Me,iconSize:Ae,actionSpace:ze,contentMargin:Fe,closeSize:Ne,[g==="top"?"iconMarginIconTop":"iconMargin"]:je,[g==="top"?"closeMarginIconTop":"closeMargin"]:Ve,[wn("iconColor",l)]:De}}=v.value;return{"--n-font-size":R,"--n-icon-color":De,"--n-bezier":x,"--n-close-margin":Ve,"--n-icon-margin":je,"--n-icon-size":Ae,"--n-close-size":Ne,"--n-close-icon-size":Oe,"--n-close-border-radius":w,"--n-close-color-hover":s,"--n-close-color-pressed":r,"--n-close-icon-color":$,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":_e,"--n-color":E,"--n-text-color":f,"--n-border-radius":Be,"--n-padding":Me,"--n-line-height":k,"--n-border":u,"--n-content-margin":Fe,"--n-title-font-size":Ie,"--n-title-font-weight":Se,"--n-title-text-color":m,"--n-action-space":ze}}),C=o?Re("dialog",S(()=>`${e.type[0]}${a.value[0]}`),p,e):void 0;return{mergedClsPrefix:t,mergedIconPlacement:a,mergedTheme:v,handlePositiveClick:c,handleNegativeClick:d,handleCloseClick:h,cssVars:o?void 0:p,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){var e;const{bordered:n,mergedIconPlacement:t,cssVars:o,closable:a,showIcon:c,title:d,content:h,action:v,negativeText:p,positiveText:C,positiveButtonProps:l,negativeButtonProps:g,handlePositiveClick:x,handleNegativeClick:R,mergedTheme:k,loading:u,type:m,mergedClsPrefix:f}=this;(e=this.onRender)===null||e===void 0||e.call(this);const E=c?i(nn,{clsPrefix:f,class:`${f}-dialog__icon`},{default:()=>ae(this.$slots.icon,s=>s||(this.icon?O(this.icon):An[this.type]()))}):null,w=ae(this.$slots.action,s=>s||C||p||v?i("div",{class:`${f}-dialog__action`},s||(v?[O(v)]:[this.negativeText&&i(re,Object.assign({theme:k.peers.Button,themeOverrides:k.peerOverrides.Button,ghost:!0,size:"small",onClick:R},g),{default:()=>O(this.negativeText)}),this.positiveText&&i(re,Object.assign({theme:k.peers.Button,themeOverrides:k.peerOverrides.Button,size:"small",type:m==="default"?"primary":m,disabled:u,loading:u,onClick:x},l),{default:()=>O(this.positiveText)})])):null);return i("div",{class:[`${f}-dialog`,this.themeClass,this.closable&&`${f}-dialog--closable`,`${f}-dialog--icon-${t}`,n&&`${f}-dialog--bordered`],style:o,role:"dialog"},a?i(tn,{clsPrefix:f,class:`${f}-dialog__close`,onClick:this.handleCloseClick}):null,c&&t==="top"?i("div",{class:`${f}-dialog-icon-container`},E):null,i("div",{class:`${f}-dialog__title`},c&&t==="left"?E:null,le(this.$slots.header,()=>[O(d)])),i("div",{class:[`${f}-dialog__content`,w?"":`${f}-dialog__content--last`]},le(this.$slots.default,()=>[O(h)])),w)}}),Fn=J("n-dialog-provider"),Zn=J("n-dialog-api"),qn=J("n-dialog-reactive-list"),te=Object.assign(Object.assign({},on),ne),Nn=Ee(te),jn=Q({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},te),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const n=b(null),t=b(null),o=b(e.show),a=b(null),c=b(null);K(W(e,"show"),u=>{u&&(o.value=!0)}),Ln(S(()=>e.blockScroll&&o.value));const d=ye($e);function h(){if(d.transformOriginRef.value==="center")return"";const{value:u}=a,{value:m}=c;if(u===null||m===null)return"";if(t.value){const f=t.value.containerScrollTop;return`${u}px ${m+f}px`}return""}function v(u){if(d.transformOriginRef.value==="center")return;const m=d.getMousePosition();if(!m||!t.value)return;const f=t.value.containerScrollTop,{offsetLeft:E,offsetTop:w}=u;if(m){const s=m.y,r=m.x;a.value=-(E-r),c.value=-(w-s-f)}u.style.transformOrigin=h()}function p(u){se(()=>{v(u)})}function C(u){u.style.transformOrigin=h(),e.onBeforeLeave()}function l(){o.value=!1,a.value=null,c.value=null,e.onAfterLeave()}function g(){const{onClose:u}=e;u&&u()}function x(){e.onNegativeClick()}function R(){e.onPositiveClick()}const k=b(null);return K(k,u=>{u&&se(()=>{const m=u.el;m&&n.value!==m&&(n.value=m)})}),j(sn,n),j(an,null),j(rn,null),{mergedTheme:d.mergedThemeRef,appear:d.appearRef,isMounted:d.isMountedRef,mergedClsPrefix:d.mergedClsPrefixRef,bodyRef:n,scrollbarRef:t,displayed:o,childNodeRef:k,handlePositiveClick:R,handleNegativeClick:x,handleCloseClick:g,handleAfterLeave:l,handleBeforeLeave:C,handleEnter:p}},render(){const{$slots:e,$attrs:n,handleEnter:t,handleAfterLeave:o,handleBeforeLeave:a,preset:c,mergedClsPrefix:d}=this;let h=null;if(!c){if(h=ln(e),!h){yn("modal","default slot is empty");return}h=Xe(h),h.props=Ze({class:`${d}-modal`},n,h.props||{})}return this.displayDirective==="show"||this.displayed||this.show?Y(i("div",{role:"none",class:`${d}-modal-body-wrapper`},i(cn,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${d}-modal-scroll-content`},{default:()=>{var v;return[(v=this.renderMask)===null||v===void 0?void 0:v.call(this),i(dn,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var p;return i(ke,{name:"fade-in-scale-up-transition",appear:(p=this.appear)!==null&&p!==void 0?p:this.isMounted,onEnter:t,onAfterEnter:this.onAfterEnter,onAfterLeave:o,onBeforeLeave:a},{default:()=>{const C=[[ie,this.show]],{onClickoutside:l}=this;return l&&C.push([un,this.onClickoutside,void 0,{capture:!0}]),Y(this.preset==="confirm"||this.preset==="dialog"?i(zn,Object.assign({},this.$attrs,{class:[`${d}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},q(this.$props,In),{"aria-modal":"true"}),e):this.preset==="card"?i(fn,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${d}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},q(this.$props,hn),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=h,C)}})}})]}})),[[ie,this.displayDirective==="if"||this.displayed||this.show]]):null}}),Vn=T([L("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),L("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[vn({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),L("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[L("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),L("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[gn({duration:".25s",enterScale:".5"})])]),Dn=Object.assign(Object.assign(Object.assign(Object.assign({},D.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),te),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),Gn=Q({name:"Modal",inheritAttrs:!1,props:Dn,setup(e){const n=b(null),{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:a}=Le(e),c=D("Modal","-modal",Vn,qe,e,t),d=$n(64),h=xn(),v=kn(),p=e.internalDialog?ye(Fn,null):null,C=Rn();function l(s){const{onUpdateShow:r,"onUpdate:show":$,onHide:_}=e;r&&z(r,s),$&&z($,s),_&&!s&&_(s)}function g(){const{onClose:s}=e;s?Promise.resolve(s()).then(r=>{r!==!1&&l(!1)}):l(!1)}function x(){const{onPositiveClick:s}=e;s?Promise.resolve(s()).then(r=>{r!==!1&&l(!1)}):l(!1)}function R(){const{onNegativeClick:s}=e;s?Promise.resolve(s()).then(r=>{r!==!1&&l(!1)}):l(!1)}function k(){const{onBeforeLeave:s,onBeforeHide:r}=e;s&&z(s),r&&r()}function u(){const{onAfterLeave:s,onAfterHide:r}=e;s&&z(s),r&&r()}function m(s){var r;const{onMaskClick:$}=e;$&&$(s),e.maskClosable&&!((r=n.value)===null||r===void 0)&&r.contains(Cn(s))&&l(!1)}function f(s){var r;(r=e.onEsc)===null||r===void 0||r.call(e),e.show&&e.closeOnEsc&&Pn(s)&&!C.value&&l(!1)}j($e,{getMousePosition:()=>{if(p){const{clickedRef:s,clickPositionRef:r}=p;if(s.value&&r.value)return r.value}return d.value?h.value:null},mergedClsPrefixRef:t,mergedThemeRef:c,isMountedRef:v,appearRef:W(e,"internalAppear"),transformOriginRef:W(e,"transformOrigin")});const E=S(()=>{const{common:{cubicBezierEaseOut:s},self:{boxShadow:r,color:$,textColor:_}}=c.value;return{"--n-bezier-ease-out":s,"--n-box-shadow":r,"--n-color":$,"--n-text-color":_}}),w=a?Re("theme-class",void 0,E,e):void 0;return{mergedClsPrefix:t,namespace:o,isMounted:v,containerRef:n,presetProps:S(()=>q(e,Nn)),handleEsc:f,handleAfterLeave:u,handleClickoutside:m,handleBeforeLeave:k,doUpdateShow:l,handleNegativeClick:R,handlePositiveClick:x,handleCloseClick:g,cssVars:a?void 0:E,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:e}=this;return i(pn,{to:this.to,show:this.show},{default:()=>{var n;(n=this.onRender)===null||n===void 0||n.call(this);const{unstableShowMask:t}=this;return Y(i("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},i(jn,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:t?void 0:this.handleClickoutside,renderMask:t?()=>{var o;return i(ke,{name:"fade-in-transition",key:"mask",appear:(o=this.internalAppear)!==null&&o!==void 0?o:this.isMounted},{default:()=>this.show?i("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[mn,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Qn="网络不可用~";function Jn(){const{VITE_APP_NAME:e,VITE_APP_TITLE:n,VITE_APP_DESC:t}={VITE_BASE_URL:"/admin",VITE_APP_NAME:"",VITE_APP_TITLE:"",VITE_APP_DESC:"SlowAdmin是一个基于Laravel和amis的后台管理系统",VITE_AUTH_ROUTE_MODE:"dynamic",VITE_ROUTE_HOME_PATH:"/dashboard",VITE_ICON_PREFFIX:"icon",VITE_ICON_LOCAL_PREFFIX:"icon-local",VITE_HTTP_PROXY:"Y",VITE_HASH_ROUTE:"Y",VITE_VISUALIZER:"N",VITE_COMPRESS:"N",VITE_COMPRESS_TYPE:"gzip",VITE_PWA:"N",VITE_SERVICE_ENV:"prod",BASE_URL:"/admin",MODE:"production",DEV:!1,PROD:!0};return{name:e,title:n,desc:t}}function et(){return new en().getResult()}function nt(){const e=Ge();function n(t){const{userRole:o}=e.userInfo;let a=o==="super";return a||(Qe(t)&&(a=t.includes(o)),Je(t)&&(a=t===o)),a}return{hasPermission:n}}export{Tn as E,we as I,zn as N,_n as S,On as W,Gn as _,In as a,Zn as b,xn as c,ne as d,Fn as e,qn as f,Xn as g,Qn as h,nt as i,Ln as j,Rn as k,pe as l,Yn as m,Pn as n,Wn as o,et as p,Jn as q,O as r,$n as u};
