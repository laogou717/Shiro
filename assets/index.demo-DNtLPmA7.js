import{j as o,r}from"./index-Cl4dktKH.js";import{c}from"./StyledButton-C8s-qyiw.js";import{F as x}from"./FloatPopover-DRG9Z3SM.js";import"./proxy-DZregW24.js";import"./viewport-BJDpWxny.js";import"./owner-DcBWCeNV.js";import"./spring-C80N1tKa.js";import"./use-event-callback-a_KhAs7r.js";import"./index-CydbTCIs.js";import"./index-ByAm_Mwe.js";const h=t=>t.offsetWidth<t.scrollWidth||t.offsetHeight<t.scrollHeight,w=t=>{const{children:e,className:i,width:l,disabled:p,wrapperClassName:m}=t,[s,d]=r.useState(),[u,f]=r.useState(!1),n=()=>{s&&f(h(s))};return r.useEffect(()=>{n()},[s,e]),r.useEffect(()=>{if(!s)return;const a=new ResizeObserver(()=>{n()});return a.observe(s),()=>{a.disconnect()}},[s]),o.jsx(x,{mobileAsSheet:!0,type:"tooltip",wrapperClassName:c("w-full min-w-0 truncate",m),isDisabled:!u||p,TriggerComponent:r.useCallback(()=>o.jsx("span",{className:i,ref:d,style:l?{maxWidth:l}:void 0,children:e}),[e,i,l]),children:o.jsx("span",{className:"max-w-[30vw] break-all hover:!bg-transparent",onClick:a=>a.stopPropagation(),children:e})})},b=t=>{const{className:e,...i}=t;return o.jsx(w,{className:c("block truncate",e),...i})},v=()=>o.jsx(b,{width:"12rem",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"});v.meta={title:"文本溢出省略 + 提示",description:"如果文本溢出则省略，省略时伴随 Tooltip 提示"};const z={title:"文本溢出",description:"一个简单的处理文本溢出省略的组件"};export{v as EllipsisTextWithTooltipDemo,z as metadata};
