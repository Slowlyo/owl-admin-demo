"use strict";(self.webpackChunkslow_admin=self.webpackChunkslow_admin||[]).push([[276],{60276:function(P,B,c){c.r(B),c.d(B,{gexf:function(){return y},prepareBoxplotData:function(){return F},version:function(){return N}});var y={};c.r(y),c.d(y,{parse:function(){return R}});var x=c(36788),C=c(33051);function R(a){var r;if(typeof a=="string"){var e=new DOMParser;r=e.parseFromString(a,"text/xml")}else r=a;if(!r||r.getElementsByTagName("parsererror").length)return null;var i=u(r,"gexf");if(!i)return null;for(var v=u(i,"graph"),t=E(u(v,"attributes")),s={},o=0;o<t.length;o++)s[t[o].id]=t[o];return{nodes:A(u(v,"nodes"),s),links:I(u(v,"edges"))}}function E(a){return a?C.map(m(a,"attribute"),function(r){return{id:n(r,"id"),title:n(r,"title"),type:n(r,"type")}}):[]}function A(a,r){return a?C.map(m(a,"node"),function(e){var i=n(e,"id"),v=n(e,"label"),t={id:i,name:v,itemStyle:{normal:{}}},s=u(e,"viz:size"),o=u(e,"viz:position"),l=u(e,"viz:color"),f=u(e,"attvalues");if(s&&(t.symbolSize=parseFloat(n(s,"value"))),o&&(t.x=parseFloat(n(o,"x")),t.y=parseFloat(n(o,"y"))),l&&(t.itemStyle.normal.color="rgb("+[n(l,"r")|0,n(l,"g")|0,n(l,"b")|0].join(",")+")"),f){var z=m(f,"attvalue");t.attributes={};for(var d=0;d<z.length;d++){var h=z[d],p=n(h,"for"),g=n(h,"value"),b=r[p];if(b){switch(b.type){case"integer":case"long":g=parseInt(g,10);break;case"float":case"double":g=parseFloat(g);break;case"boolean":g=g.toLowerCase()==="true";break;default:}t.attributes[p]=g}}}return t}):[]}function I(a){return a?C.map(m(a,"edge"),function(r){var e=n(r,"id"),i=n(r,"label"),v=n(r,"source"),t=n(r,"target"),s={id:e,name:i,source:v,target:t,lineStyle:{normal:{}}},o=s.lineStyle.normal,l=u(r,"viz:thickness"),f=u(r,"viz:color");return l&&(o.width=parseFloat(l.getAttribute("value"))),f&&(o.color="rgb("+[n(f,"r")|0,n(f,"g")|0,n(f,"b")|0].join(",")+")"),s}):[]}function n(a,r){return a.getAttribute(r)}function u(a,r){for(var e=a.firstChild;e;)if(e.nodeType!==1||e.nodeName.toLowerCase()!==r.toLowerCase())e=e.nextSibling;else return e;return null}function m(a,r){for(var e=a.firstChild,i=[];e;)e.nodeName.toLowerCase()===r.toLowerCase()&&i.push(e),e=e.nextSibling;return i}function O(a){return a.sort(function(r,e){return r-e}),a}function S(a,r){var e=(a.length-1)*r+1,i=Math.floor(e),v=+a[i-1],t=e-i;return t?v+t*(a[i]-v):v}function F(a,r){r=r||{};for(var e=[],i=[],v=[],t=r.boundIQR,s=t==="none"||t===0,o=0;o<a.length;o++){v.push(o+"");var l=O(a[o].slice()),f=S(l,.25),z=S(l,.5),d=S(l,.75),h=l[0],p=l[l.length-1],g=(t==null?1.5:t)*(d-f),b=s?h:Math.max(h,f-g),k=s?p:Math.min(p,d+g);e.push([b,f,z,d,k]);for(var T=0;T<l.length;T++){var w=l[T];if(w<b||w>k){var M=[o,w];r.layout==="vertical"&&M.reverse(),i.push(M)}}}return{boxData:e,outliers:i,axisData:v}}var N="1.0.0";x.dataTool&&(x.dataTool.version=N,x.dataTool.gexf=y,x.dataTool.prepareBoxplotData=F)}}]);
