import{z as n,v as a,A as o,s}from"./index.fef4c77f.js";import{i as d,T as l}from"./index.382b0d6a.js";import{L as r}from"./index.17d4fabd.js";const p="_docs_dimkm_1",m="_link_dimkm_5";var i={docs:p,link:m};const h={react:"https://arco.design/react/docs/start",vue:"https://arco.design/vue/docs/start",designLab:"https://arco.design/themes",materialMarket:"https://arco.design/material/"};function u(){const e=n(d);return a(o,{children:[a("div",{style:{display:"flex",justifyContent:"space-between"},children:[s(l.Title,{heading:6,children:e["workplace.docs"]}),s(r,{children:e["workplace.seeMore"]})]}),s("div",{className:i.docs,children:Object.entries(h).map(([t,c])=>s(r,{className:i.link,href:c,target:"_blank",children:e[`workplace.${t}`]},t))})]})}export{u as default};