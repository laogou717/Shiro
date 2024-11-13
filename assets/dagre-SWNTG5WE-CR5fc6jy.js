import{_ as w,a3 as F,a4 as Y,a5 as _,a6 as H,l as i,d as V,a7 as U,a8 as $,U as q,$ as z,V as P,T as K,a9 as Q,aa as W,ab as Z}from"./mermaid.core-BvDutKqC.js";import{G as B}from"./graph-Du9NTTXJ.js";import{l as I}from"./layout-DWHSlPwW.js";import{i as b}from"./_baseUniq-Su2bbkL-.js";import{c as L}from"./clone-BbSaKZR9.js";import{m as A}from"./_basePickBy-DfnWw-Wj.js";import"./index-Cl4dktKH.js";import"./owner-DcBWCeNV.js";import"./StyledButton-C8s-qyiw.js";import"./proxy-DZregW24.js";import"./isEmpty-DVc1NNx0.js";import"./line-DXtxjsEH.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./union-BrCZxpHF.js";import"./zipObject-CztN56XO.js";import"./has-BhlPWlhe.js";function h(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:ee(e),edges:ne(e)};return b(e.graph())||(t.value=L(e.graph())),t}function ee(e){return A(e.nodes(),function(t){var n=e.node(t),a=e.parent(t),r={v:t};return b(n)||(r.value=n),b(a)||(r.parent=a),r})}function ne(e){return A(e.edges(),function(t){var n=e.edge(t),a={v:t.v,w:t.w};return b(t.name)||(a.name=t.name),b(n)||(a.value=n),a})}var d=new Map,X=new Map,J=new Map,te=w(()=>{X.clear(),J.clear(),d.clear()},"clear"),D=w((e,t)=>{const n=X.get(t)||[];return i.trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)},"isDescendant"),se=w((e,t)=>{const n=X.get(t)||[];return i.info("Descendants of ",t," is ",n),i.info("Edge is ",e),e.v===t||e.w===t?!1:n?n.includes(e.v)||D(e.v,t)||D(e.w,t)||n.includes(e.w):(i.debug("Tilt, ",t,",not in descendants"),!1)},"edgeInCluster"),G=w((e,t,n,a)=>{i.warn("Copying children of ",e,"root",a,"data",t.node(e),a);const r=t.children(e)||[];e!==a&&r.push(e),i.warn("Copying (nodes) clusterId",e,"nodes",r),r.forEach(o=>{if(t.children(o).length>0)G(o,t,n,a);else{const l=t.node(o);i.info("cp ",o," to ",a," with parent ",e),n.setNode(o,l),a!==t.parent(o)&&(i.warn("Setting parent",o,t.parent(o)),n.setParent(o,t.parent(o))),e!==a&&o!==e?(i.debug("Setting parent",o,e),n.setParent(o,e)):(i.info("In copy ",e,"root",a,"data",t.node(e),a),i.debug("Not Setting parent for node=",o,"cluster!==rootId",e!==a,"node!==clusterId",o!==e));const u=t.edges(o);i.debug("Copying Edges",u),u.forEach(c=>{i.info("Edge",c);const m=t.edge(c.v,c.w,c.name);i.info("Edge data",m,a);try{se(c,a)?(i.info("Copying as ",c.v,c.w,m,c.name),n.setEdge(c.v,c.w,m,c.name),i.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):i.info("Skipping copy of edge ",c.v,"-->",c.w," rootId: ",a," clusterId:",e)}catch(v){i.error(v)}})}i.debug("Removing node",o),t.removeNode(o)})},"copy"),R=w((e,t)=>{const n=t.children(e);let a=[...n];for(const r of n)J.set(r,e),a=[...a,...R(r,t)];return a},"extractDescendants"),ie=w((e,t,n)=>{const a=e.edges().filter(c=>c.v===t||c.w===t),r=e.edges().filter(c=>c.v===n||c.w===n),o=a.map(c=>({v:c.v===t?n:c.v,w:c.w===t?t:c.w})),l=r.map(c=>({v:c.v,w:c.w}));return o.filter(c=>l.some(m=>c.v===m.v&&c.w===m.w))},"findCommonEdges"),C=w((e,t,n)=>{const a=t.children(e);if(i.trace("Searching children of id ",e,a),a.length<1)return e;let r;for(const o of a){const l=C(o,t,n),u=ie(t,n,l);if(l)if(u.length>0)r=l;else return l}return r},"findNonClusterChild"),k=w(e=>!d.has(e)||!d.get(e).externalConnections?e:d.has(e)?d.get(e).id:e,"getAnchorId"),re=w((e,t)=>{if(!e||t>10){i.debug("Opting out, no graph ");return}else i.debug("Opting in, graph ");e.nodes().forEach(function(n){e.children(n).length>0&&(i.warn("Cluster identified",n," Replacement id in edges: ",C(n,e,n)),X.set(n,R(n,e)),d.set(n,{id:C(n,e,n),clusterData:e.node(n)}))}),e.nodes().forEach(function(n){const a=e.children(n),r=e.edges();a.length>0?(i.debug("Cluster identified",n,X),r.forEach(o=>{const l=D(o.v,n),u=D(o.w,n);l^u&&(i.warn("Edge: ",o," leaves cluster ",n),i.warn("Descendants of XXX ",n,": ",X.get(n)),d.get(n).externalConnections=!0)})):i.debug("Not a cluster ",n,X)});for(let n of d.keys()){const a=d.get(n).id,r=e.parent(a);r!==n&&d.has(r)&&!d.get(r).externalConnections&&(d.get(n).id=r)}e.edges().forEach(function(n){const a=e.edge(n);i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let r=n.v,o=n.w;if(i.warn("Fix XXX",d,"ids:",n.v,n.w,"Translating: ",d.get(n.v)," --- ",d.get(n.w)),d.get(n.v)||d.get(n.w)){if(i.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),r=k(n.v),o=k(n.w),e.removeEdge(n.v,n.w,n.name),r!==n.v){const l=e.parent(r);d.get(l).externalConnections=!0,a.fromCluster=n.v}if(o!==n.w){const l=e.parent(o);d.get(l).externalConnections=!0,a.toCluster=n.w}i.warn("Fix Replacing with XXX",r,o,n.name),e.setEdge(r,o,a,n.name)}}),i.warn("Adjusted Graph",h(e)),T(e,0),i.trace(d)},"adjustClustersAndEdges"),T=w((e,t)=>{if(i.warn("extractor - ",t,h(e),e.children("D")),t>10){i.error("Bailing out");return}let n=e.nodes(),a=!1;for(const r of n){const o=e.children(r);a=a||o.length>0}if(!a){i.debug("Done, no node has children",e.nodes());return}i.debug("Nodes = ",n,t);for(const r of n)if(i.debug("Extracting node",r,d,d.has(r)&&!d.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),!d.has(r))i.debug("Not a cluster",r,t);else if(!d.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){i.warn("Cluster without external connections, without a parent and with children",r,t);let l=e.graph().rankdir==="TB"?"LR":"TB";d.get(r)?.clusterData?.dir&&(l=d.get(r).clusterData.dir,i.warn("Fixing dir",d.get(r).clusterData.dir,l));const u=new B({multigraph:!0,compound:!0}).setGraph({rankdir:l,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.warn("Old graph before copy",h(e)),G(r,e,u,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:d.get(r).clusterData,label:d.get(r).label,graph:u}),i.warn("New graph after copy node: (",r,")",h(u)),i.debug("Old graph after copy",h(e))}else i.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!d.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),i.debug(d);n=e.nodes(),i.warn("New list of nodes",n);for(const r of n){const o=e.node(r);i.warn(" Now next level",r,o),o?.clusterNode&&T(o.graph,t+1)}},"extractor"),M=w((e,t)=>{if(t.length===0)return[];let n=Object.assign([],t);return t.forEach(a=>{const r=e.children(a),o=M(e,r);n=[...n,...o]}),n},"sorter"),oe=w(e=>M(e,e.children()),"sortNodesByHierarchy"),j=w(async(e,t,n,a,r,o)=>{i.warn("Graph in recursive render:XAX",h(t),r);const l=t.graph().rankdir;i.trace("Dir in recursive render - dir:",l);const u=e.insert("g").attr("class","root");t.nodes()?i.info("Recursive render XXX",t.nodes()):i.info("No nodes found for",t),t.edges().length>0&&i.info("Recursive edges",t.edge(t.edges()[0]));const c=u.insert("g").attr("class","clusters"),m=u.insert("g").attr("class","edgePaths"),v=u.insert("g").attr("class","edgeLabels"),p=u.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(f){const s=t.node(f);if(r!==void 0){const g=JSON.parse(JSON.stringify(r.clusterData));i.trace(`Setting data for parent cluster XXX
 Node.id = `,f,`
 data=`,g.height,`
Parent cluster`,r.height),t.setNode(r.id,g),t.parent(f)||(i.trace("Setting parent",f,r.id),t.setParent(f,r.id,g))}if(i.info("(Insert) Node XXX"+f+": "+JSON.stringify(t.node(f))),s?.clusterNode){i.info("Cluster identified XBX",f,s.width,t.node(f));const{ranksep:g,nodesep:E}=t.graph();s.graph.setGraph({...s.graph.graph(),ranksep:g+25,nodesep:E});const y=await j(p,s.graph,n,a,t.node(f),o),S=y.elem;U(s,S),s.diff=y.diff||0,i.info("New compound node after recursive render XAX",f,"width",s.width,"height",s.height),$(S,s)}else t.children(f).length>0?(i.trace("Cluster - the non recursive path XBX",f,s.id,s,s.width,"Graph:",t),i.trace(C(s.id,t)),d.set(s.id,{id:C(s.id,t),node:s})):(i.trace("Node - the non recursive path XAX",f,p,t.node(f),l),await q(p,t.node(f),{config:o,dir:l}))})),await w(async()=>{const f=t.edges().map(async function(s){const g=t.edge(s.v,s.w,s.name);i.info("Edge "+s.v+" -> "+s.w+": "+JSON.stringify(s)),i.info("Edge "+s.v+" -> "+s.w+": ",s," ",JSON.stringify(t.edge(s))),i.info("Fix",d,"ids:",s.v,s.w,"Translating: ",d.get(s.v),d.get(s.w)),await Z(v,g)});await Promise.all(f)},"processEdges")(),i.info("Graph before layout:",JSON.stringify(h(t))),i.info("############################################# XXX"),i.info("###                Layout                 ### XXX"),i.info("############################################# XXX"),I(t),i.info("Graph after layout:",JSON.stringify(h(t)));let O=0,{subGraphTitleTotalMargin:x}=z(o);return await Promise.all(oe(t).map(async function(f){const s=t.node(f);if(i.info("Position XBX => "+f+": ("+s.x,","+s.y,") width: ",s.width," height: ",s.height),s?.clusterNode)s.y+=x,i.info("A tainted cluster node XBX1",f,s.id,s.width,s.height,s.x,s.y,t.parent(f)),d.get(s.id).node=s,P(s);else if(t.children(f).length>0){i.info("A pure cluster node XBX1",f,s.id,s.x,s.y,s.width,s.height,t.parent(f)),s.height+=x,t.node(s.parentId);const g=s?.padding/2||0,E=s?.labelBBox?.height||0,y=E-g||0;i.debug("OffsetY",y,"labelHeight",E,"halfPadding",g),await K(c,s),d.get(s.id).node=s}else{const g=t.node(s.parentId);s.y+=x/2,i.info("A regular node XBX1 - using the padding",s.id,"parent",s.parentId,s.width,s.height,s.x,s.y,"offsetY",s.offsetY,"parent",g,g?.offsetY,s),P(s)}})),t.edges().forEach(function(f){const s=t.edge(f);i.info("Edge "+f.v+" -> "+f.w+": "+JSON.stringify(s),s),s.points.forEach(S=>S.y+=x/2);const g=t.node(f.v);var E=t.node(f.w);const y=Q(m,s,d,n,g,E,a);W(s,y)}),t.nodes().forEach(function(f){const s=t.node(f);i.info(f,s.type,s.diff),s.isGroup&&(O=s.diff)}),i.warn("Returning from recursive render XAX",u,O),{elem:u,diff:O}},"recursiveRender"),Ce=w(async(e,t)=>{const n=new B({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),a=t.select("g");F(a,e.markers,e.type,e.diagramId),Y(),_(),H(),te(),e.nodes.forEach(o=>{n.setNode(o.id,{...o}),o.parentId&&n.setParent(o.id,o.parentId)}),i.debug("Edges:",e.edges),e.edges.forEach(o=>{if(o.start===o.end){const l=o.start,u=l+"---"+l+"---1",c=l+"---"+l+"---2",m=n.node(l);n.setNode(u,{domId:u,id:u,parentId:m.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(u,m.parentId),n.setNode(c,{domId:c,id:c,parentId:m.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(c,m.parentId);const v=structuredClone(o),p=structuredClone(o),N=structuredClone(o);v.label="",v.arrowTypeEnd="none",v.id=l+"-cyclic-special-1",p.arrowTypeEnd="none",p.id=l+"-cyclic-special-mid",N.label="",m.isGroup&&(v.fromCluster=l,N.toCluster=l),N.id=l+"-cyclic-special-2",n.setEdge(l,u,v,l+"-cyclic-special-0"),n.setEdge(u,c,p,l+"-cyclic-special-1"),n.setEdge(c,l,N,l+"-cyc<lic-special-2")}else n.setEdge(o.start,o.end,{...o},o.id)}),i.warn("Graph at first:",JSON.stringify(h(n))),re(n),i.warn("Graph after XAX:",JSON.stringify(h(n)));const r=V();await j(a,n,e.type,e.diagramId,void 0,r)},"render");export{Ce as render};
