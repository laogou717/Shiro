const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mermaid.core-BvDutKqC.js","./index-Cl4dktKH.js","./index-BUILuLAv.css","./owner-DcBWCeNV.js","./StyledButton-C8s-qyiw.js","./proxy-DZregW24.js","./isEmpty-DVc1NNx0.js","./line-DXtxjsEH.js","./array-BKyUJesY.js","./path-CbwjOpE9.js"])))=>i.map(i=>d[i]);
import{r as t,_ as g,j as s}from"./index-Cl4dktKH.js";import{u as b}from"./use-is-dark-E0-mRKIO.js";import{u as w,F as y}from"./Gallery-BBfH66bt.js";import{B as L}from"./alert-o07C9J3O.js";import"./StyledButton-C8s-qyiw.js";import"./proxy-DZregW24.js";import"./image-CelnMDlb.js";import"./use-ref-value-DWh_V7z_.js";import"./owner-DcBWCeNV.js";import"./index-CNY_49dt.js";import"./viewport-BJDpWxny.js";import"./use-is-unmounted-GbxNghQI.js";import"./index--srFfUc4.js";import"./dom-BowoBODo.js";import"./Shiki-B6BlAE-X.js";import"./spring-C80N1tKa.js";import"./use-event-callback-a_KhAs7r.js";import"./index-ByAm_Mwe.js";import"./FloatPopover-DRG9Z3SM.js";import"./index-CydbTCIs.js";import"./visual-element-DrGICM3J.js";import"./provider-D-pmQ6RB.js";import"./use-drag-controls-DiiAWesX.js";import"./SocialSourceLink-D0p1YLZ2.js";import"./LinkCard-BEtSW0T-.js";import"./use-motion-template-F6RoCAKc.js";import"./Collapse-D2bHqnZA.js";import"./useQuery-Dgno9XuK.js";const it=m=>{const[h,d]=t.useState(!0),[E,n]=t.useState(""),[c,p]=t.useState(""),[x,u]=t.useState(),[v,l]=t.useState(),f=b();t.useEffect(()=>{g(()=>import("./mermaid.core-BvDutKqC.js").then(r=>r.af),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(async r=>{r.default.initialize({theme:f?"dark":"default"})})},[f]);const a=t.useId().split(":").join("");t.useEffect(()=>{if(!m.content)return;n(""),d(!0);let r=!1;g(()=>import("./mermaid.core-BvDutKqC.js").then(o=>o.af),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(async o=>{const I=o.default;let i;try{i=await I.render(`mermaid-${a}`,m.content)}catch(e){document.getElementById(`dmermaid-${a}`)?.remove(),e instanceof Error&&n(e.message),p(""),u(void 0),l(void 0)}if(!r){if(i){p(i.svg);const e=i.svg.match(/viewBox="[^"]*\s([\d.]+)\s([\d.]+)"/);e?.[1]&&e?.[2]&&(u(Number.parseInt(e?.[1])),l(Number.parseInt(e?.[2]))),n("")}return d(!1),()=>{r=!0}}})},[a,m.content]);const{w:_}=w(),S=new TextEncoder().encode(c),j=`data:image/svg+xml;base64,${btoa(String.fromCharCode(...new Uint8Array(S)))}`;return h?s.jsx(L,{children:"Mermaid Loading..."}):c?s.jsx("div",{children:s.jsx(y,{containerWidth:_,src:j,width:x,height:v})}):s.jsx("div",{className:"flex min-h-[50px] items-center justify-center rounded-lg bg-red-100 text-sm",children:E||"Error"})};export{it as Mermaid};