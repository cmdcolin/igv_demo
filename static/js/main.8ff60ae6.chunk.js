(this.webpackJsonpgenomegraph=this.webpackJsonpgenomegraph||[]).push([[0],{64:function(e,t,a){e.exports=a(78)},69:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(69),a(31)),i=a.n(o),u=a(38),s=a(6),m=a(84),d=a(56);function h(e){var t=e.data,a=e.onHide;return r.a.createElement(m.a,{show:!0,onHide:a},r.a.createElement(m.a.Header,{closeButton:!0},r.a.createElement(m.a.Title,null,"Feature details")),r.a.createElement(m.a.Body,null,r.a.createElement("div",null,"Attributes"),Object.entries(t).filter((function(e){return!["source","target","linkNum","tags"].includes(e[0])})).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{key:"".concat(a,"_").concat(n),style:{display:"flex",maxHeight:150,margin:3}},r.a.createElement("div",{style:{backgroundColor:"#dda",minWidth:100}},a),r.a.createElement("div",{style:{wordBreak:"break-word",overflow:"auto"}},String(n)))})),r.a.createElement("hr",null),t.tags&&Object.keys(t.tags).length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Tags"),Object.entries(t.tags).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{key:"".concat(a,"_").concat(n),style:{display:"flex",maxHeight:150,margin:3}},r.a.createElement("div",{style:{backgroundColor:"#dda",minWidth:100}},a),r.a.createElement("div",{style:{wordBreak:"break-word",overflow:"auto"}},String(n)))}))):null,r.a.createElement(m.a.Footer,null,r.a.createElement(d.a,{variant:"secondary",onClick:a},"Close"))))}var f=a(61),g=a(9),p=a(11),E=a(52),b=a(50),v=a(53);function k(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];t.push([n.source.x,n.source.y])}var r=e[a-1];return t.push([r.target.x,r.target.y]),t}function y(e,t){var a;return(a="linkNum",e.reduce((function(e,t){var n=a instanceof Function?a(t):t[a];if(void 0!==n){var r=e.find((function(e){return e&&e.key===n}));r?r.values.push(t):e.push({key:n,values:[t]})}return e}),[])).map((function(e){return{links:k(e.values),original:t[e.key]}}))}function O(e,t,a,n,r){var c=r/Math.sqrt(Math.pow(n-t,2)+Math.pow(a-e,2));return[(1-c)*e+c*a,(1-c)*t+c*n]}var w=r.a.forwardRef((function(e,t){var a=Object(n.useRef)(),c=e.graph,l=e.drawPaths,o=void 0!==l&&l,i=e.drawLabels,u=void 0!==i&&i,m=e.settings,d=m.chunkSize,h=void 0===d?1e3:d,b=m.forceSteps,v=void 0===b?500:b,k=m.linkSteps,w=void 0===k?3:k,j=m.sequenceThickness,S=void 0===j?10:j,x=m.linkThickness,C=void 0===x?2:x,T=m.strength,L=void 0===T?-50:T,M=m.theta,G=void 0===M?.9:M,H=e.color,B=void 0===H?"Rainbow":H,N=e.width,F=void 0===N?2e3:N,W=e.height,q=void 0===W?1e3:W,z=e.redraw,R=void 0===z?0:z,D=e.onFeatureClick,I=void 0===D?function(){console.log("no feature click configured")}:D,_=Object(n.useMemo)((function(){return function(e,t){for(var a={nodes:[],links:[]},n={},r=0;r<(e.paths||{}).length;r++)for(var c=e.paths[r],l=c.path.split(","),o=0;o<l.length-1;o++){var i="".concat(l[o],"_").concat(l[o+1]);n[i]?n[i].push(c.name):n[i]=[c.name]}for(var u=0;u<e.nodes.length;u++){var s=e.nodes[u],m=s.id,d=s.sequence,h=Object(E.a)(s,["id","sequence"]),f=[],p="*"===d?h.tags.LN:d.length;f.push(Object(g.a)({},h,{id:"".concat(m,"-start")}));for(var b=t;b<p-t;b+=t)f.push(Object(g.a)({},h,{id:"".concat(m,"-").concat(b)}));f.push(Object(g.a)({},h,{id:"".concat(m,"-end")}));for(var v=0;v<f.length-1;v++){var k=f[v].id,y=f[v+1].id;a.links.push(Object(g.a)({},h,{source:k,target:y,id:m,length:p,sequence:d,linkNum:u}))}a.nodes=a.nodes.concat(f)}for(var O=0;O<e.links.length;O++){var w=e.links[O],j=w.strand1,S=w.strand2,x=w.source,C=w.target,T=Object(E.a)(w,["strand1","strand2","source","target"]),L=n["".concat(x).concat(j,"_").concat(C).concat(S)]||[],M=x===C,G=Object(g.a)({source:"".concat(x,"-").concat("+"===j?"end":"start"),target:"".concat(C,"-").concat("+"===S?"start":"end")},T);M&&(G.loop=!0),L.length&&(G.paths=L),a.links.push(G)}return a}(c,h)}),[h,c]),A=Object(n.useMemo)((function(){return Object.fromEntries((c.paths||[]).map((function(e,t){return[e.name,p.schemeCategory10[t]]})))}),[c.paths]),P=Object(n.useMemo)((function(){for(var e=_.links.map((function(e){return Object.create(Object(g.a)({},e,{x:Math.random(),y:Math.random()}))})),t=_.nodes.map((function(e){return Object.create(Object(g.a)({},e,{x:Math.random(),y:Math.random()}))})),a=p.forceSimulation(t).force("link",p.forceLink(e).id((function(e){return e.id})).distance((function(e){return e.sequence?1:10})).iterations(w)).force("charge",p.forceManyBody().strength(L).theta(G)).force("center",p.forceCenter(F/2,q/2)),n=0;n<v;++n)a.tick();return e}),[_.links,R,_.nodes,v,q,w,L,G,F]);Object(n.useEffect)((function(){p.select(t.current).call(p.zoom().extent([[0,0],[F,q]]).scaleExtent([.1,8]).on("zoom",(function(){p.select(a.current).attr("transform",p.event.transform)})))}),[q,t,F]);for(var J=y(P,c.nodes),U=function(e,t){for(var a=[],n=0;n<e.length;n++){var r=e[n],c=t[n];c.id||a.push({links:[[r.source.x,r.source.y],[r.target.x,r.target.y]],original:c})}return a}(P,_.links),V={},Z=0;Z<P.length;Z++){var X=_.links[Z],Y=X.source,$=X.target,K=P[Z].linkNum;void 0!==K&&(Y.endsWith("start")?(V[Y]={source:P[K].target,target:P[K].source},V[$]={target:P[K].target,source:P[K].source}):(V[Y]={source:P[K].source,target:P[K].target},V[$]={target:P[K].source,source:P[K].target}))}return r.a.createElement("svg",{width:"100%",height:"100%",ref:t,style:{fontSize:10},viewBox:[0,0,F,q].toString()},r.a.createElement("g",{ref:a},U.map((function(e){var t=e.links[0][0],a=e.links[0][1],n=e.links[1][0],c=e.links[1][1];if(o){if(!e.original.paths)return null;var l=V[e.original.source],i=l.source,u=l.target,m=V[e.original.target],d=m.source,h=m.target,f=(c-a)/(n-t),g=(i.y-u.y)/(i.x-u.x),E=(d.y-h.y)/(d.x-h.x);return Math.abs(f-g)<.5||Math.abs(f-E)<.5?e.original.paths.map((function(l,o){var i=n-t,u=c-a,s=Math.sqrt(i*i+u*u)+40*Math.random(),m="M".concat(t,",").concat(a,"A").concat(s,",").concat(s," 0 0,").concat(o%2," ").concat(n,",").concat(c);return r.a.createElement("path",{key:"".concat(m,"-").concat(o),d:m,strokeWidth:C,stroke:A[l],fill:"none",onClick:function(){return I(e.original)}},r.a.createElement("title",null,l))})):e.original.paths.map((function(l,o){var m=O(i.x,i.y,u.x,u.y,60+50*o),f=Object(s.a)(m,2),g=f[0],E=f[1],b=O(d.x,d.y,h.x,h.y,60+50*o),v=Object(s.a)(b,2),k=v[0],y=v[1],w=p.path();return w.moveTo(t,a),w.bezierCurveTo(g,E,k,y,n,c),r.a.createElement("path",{key:w.toString(),d:w,strokeWidth:C,stroke:A[l],fill:"none",onClick:function(){return I(e.original)}},r.a.createElement("title",null,l))}))}var b=V[e.original.source],v=b.source,k=b.target,y=V[e.original.target],w=y.source,j=y.target,S=(c-a)/(n-t),x=(v.y-k.y)/(v.x-k.x),T=(w.y-j.y)/(w.x-j.x),L=p.line().context(null),M=e.original.loop&&!(S-x<.5||S-T<.5)?"M".concat(t,",").concat(a,"A").concat(-30,",").concat(-20," ").concat(90,",").concat(1,",").concat(0," ").concat(n,",").concat(c):L(e.links);return r.a.createElement("path",{key:M.toString(),d:M,strokeWidth:C,stroke:"black",fill:"none",onClick:function(){return I(e.original)}},r.a.createElement("title",null,e.original.id))})),J.map((function(e,t){var a=p.line().context(null),n=a(e.links),c=e.links[0],l=e.links[1],o=e.links[e.links.length-1],i=e.links[e.links.length-2],m=O(l[0],l[1],c[0],c[1],100),d=Object(s.a)(m,2),h=d[0],g=d[1],E=O(i[0],i[1],o[0],o[1],100),b=Object(s.a)(E,2),v=b[0],k=b[1],y=a([[h,g]].concat(Object(f.a)(e.links),[[v,k]])),w=B.startsWith("Just")?B.replace("Just","").toLowerCase():p.hsl(p["interpolate".concat(B)](t/J.length)).darker();return r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{key:n.toString(),id:e.original.id,d:n,strokeWidth:S,stroke:w,fill:"none",onClick:function(){return I(e.original)}},r.a.createElement("title",null,e.original.id)),u?r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{key:y.toString(),id:"".concat(e.original.id,"_invisible"),d:y,fill:"none"}),r.a.createElement("text",{dy:12},r.a.createElement("textPath",{startOffset:"50%",textAnchor:"middle",href:"#".concat(e.original.id,"_invisible")},e.original.id))):null)}))))})),j=a(85);function S(e){var t=e.onDrawLabels,a=e.onColorChange,n=e.onPathDraw,c=e.onRedraw,l=e.color;return r.a.createElement("div",null,r.a.createElement("p",null,"Settings"),r.a.createElement(j.a.Label,null,"Color"),r.a.createElement(j.a.Control,{value:l,onChange:function(e){return a(e.target.value)},as:"select"},r.a.createElement("option",null,"JustGrey"),r.a.createElement("option",null,"Turbo"),r.a.createElement("option",null,"Rainbow"),r.a.createElement("option",null,"Spectral"),r.a.createElement("option",null,"Viridis"),r.a.createElement("option",null,"RdYlBu")),r.a.createElement("br",null),r.a.createElement(j.a.Group,{onChange:function(e){n(e.target.checked)}},r.a.createElement(j.a.Check,{type:"checkbox",label:"Draw paths"})),r.a.createElement("br",null),r.a.createElement(j.a.Group,{onChange:function(e){t(e.target.checked)}},r.a.createElement(j.a.Check,{type:"checkbox",label:"Draw labels"})),r.a.createElement("br",null),r.a.createElement(d.a,{onClick:function(){return c()}},"Redraw"))}var x=a(87),C=a(88),T=a(86),L=a(83),M=a(57);function G(e){var t=e.onHide,a=e.settings,c=e.onSettings,l=Object(n.useState)(a),o=Object(s.a)(l,2),i=o[0],u=o[1],h=i.chunkSize,f=i.forceSteps,p=i.linkSteps,E=i.strength,b=i.theta,v=i.sequenceThickness,k=i.linkThickness;return r.a.createElement(m.a,{show:!0,onHide:t,size:"lg"},r.a.createElement(m.a.Header,{closeButton:!0},r.a.createElement(m.a.Title,null,"Settings")),r.a.createElement(m.a.Body,null,r.a.createElement(j.a,{onSubmit:function(e){e.preventDefault(),c(Object(g.a)({},i,{chunkSize:+h,forceSteps:+f,linkSteps:+p,strength:+E,theta:+b,sequenceThickness:+v,linkThickness:+k})),t()}},r.a.createElement(j.a.Group,{as:L.a},r.a.createElement(j.a.Label,{column:!0,sm:"4"},"Number of simulation steps for the nodes",r.a.createElement(j.a.Text,{muted:!0},"Used in the force-based layout simulation")),r.a.createElement(M.a,null,r.a.createElement(j.a.Control,{type:"number",value:f,onChange:function(e){var t=e.target.value;u((function(e){return Object(g.a)({},e,{forceSteps:t})}))}}))),r.a.createElement(j.a.Group,{as:L.a},r.a.createElement(j.a.Label,{column:!0,sm:"4"},"Number of simulation steps for the links",r.a.createElement(j.a.Text,{muted:!0},"Used in the force-based layout simulation")),r.a.createElement(M.a,null,r.a.createElement(j.a.Control,{type:"number",value:p,onChange:function(e){var t=e.target.value;u((function(e){return Object(g.a)({},e,{linkSteps:t})}))}}))),r.a.createElement(j.a.Group,{as:L.a},r.a.createElement(j.a.Label,{column:!0,sm:"4"},"Sequence chunk size",r.a.createElement(j.a.Text,{muted:!0},"If a contig is of length 5000, then chunk length 1000 would become 5 segments. Note that contigs smaller than the chunk length may not be proportionally sized")),r.a.createElement(M.a,null,r.a.createElement(j.a.Control,{type:"number",value:h,onChange:function(e){var t=e.target.value;u((function(e){return Object(g.a)({},e,{chunkSize:t})}))}}))),r.a.createElement(j.a.Group,{as:L.a},r.a.createElement(j.a.Label,{column:!0,sm:"4"},"Theta",r.a.createElement(j.a.Text,{muted:!0},"Parameter for the force directed layout")),r.a.createElement(M.a,null,r.a.createElement(j.a.Control,{type:"number",value:b,onChange:function(e){var t=e.target.value;u((function(e){return Object(g.a)({},e,{theta:t})}))}}))),r.a.createElement(j.a.Group,{as:L.a},r.a.createElement(j.a.Label,{column:!0,sm:"4"},"Strength"),r.a.createElement(M.a,null,r.a.createElement(j.a.Control,{type:"number",value:E,onChange:function(e){var t=e.target.value;u((function(e){return Object(g.a)({},e,{strength:t})}))}}))),r.a.createElement(j.a.Group,{as:L.a},r.a.createElement(j.a.Label,{column:!0,sm:"4"},"Sequence thickness"),r.a.createElement(M.a,null,r.a.createElement("input",{type:"range",min:1,max:100,style:{width:"100%"},value:v,onChange:function(e){var t=e.target.value;u((function(e){return Object(g.a)({},e,{sequenceThickness:t})}))}}))),r.a.createElement(j.a.Group,{as:L.a},r.a.createElement(j.a.Label,{column:!0,sm:"4"},"Link thickness"),r.a.createElement(M.a,null,r.a.createElement("input",{type:"range",min:1,max:100,style:{width:"100%"},value:k,onChange:function(e){var t=e.target.value;u((function(e){return Object(g.a)({},e,{linkThickness:t})}))}}))),r.a.createElement(d.a,{type:"submit"},"Submit"))))}function H(e){var t=e.onHide;return r.a.createElement(m.a,{show:!0,onHide:t},r.a.createElement(m.a.Header,{closeButton:!0},r.a.createElement(m.a.Title,null,"graphgenome browser")),r.a.createElement(m.a.Body,null,r.a.createElement("p",null,"This is a small demo of browsing simple graph genomes. The app can read GFA format URLs and local files, all processing is done client side currently."),r.a.createElement("p",null,"Contact ",r.a.createElement("a",{href:"mainto:colin.diesh@gmail.com"},"Colin Diesh")),r.a.createElement("p",null,"Thanks to the BCC2020 pangenome team, and"," ",r.a.createElement("a",{href:"https://github.com/rrwick/Bandage"},"Bandage")," for inspiration."),r.a.createElement("p",null,"Sample data from GFA-spec repo (MT.gfa), Andrea Guarracino (path example), and gfalint (Shaun Jackman)"),r.a.createElement("a",{href:"https://github.com/cmdcolin/graphgenomeviewer"},"GitHub")))}function B(e){var t=e.onHide,a=e.onData,c=Object(n.useState)(),l=Object(s.a)(c,2),o=l[0],i=l[1];return r.a.createElement(m.a,{show:!0,onHide:t},r.a.createElement(m.a.Header,{closeButton:!0},r.a.createElement(m.a.Title,null,"graphgenome browser")),r.a.createElement(m.a.Body,null,r.a.createElement(j.a,{onSubmit:function(){a(o),t()}},r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Enter URL"),r.a.createElement(j.a.Control,{type:"input",value:o,onChange:function(e){return i(e.target.value)}})),r.a.createElement(d.a,{type:"submit"},"Submit"))))}function N(e){var t=e.onHide,a=e.onGraph,c=Object(n.useRef)();return r.a.createElement(m.a,{show:!0,onHide:t},r.a.createElement(m.a.Header,{closeButton:!0},r.a.createElement(m.a.Title,null,"Open file")),r.a.createElement(m.a.Body,null,r.a.createElement(j.a,{onSubmit:function(){var e=Object(u.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,c.current.files[0].text();case 3:r=e.sent,a(r),t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Open file"),r.a.createElement(j.a.Control,{ref:c,type:"file"})),r.a.createElement(d.a,{type:"submit"},"Submit"))))}function F(e){var t=e.onData,a=e.settings,c=e.onGraph,l=e.onExportSVG,o=e.onSettings,i=Object(n.useState)(),u=Object(s.a)(i,2),m=u[0],d=u[1],h=Object(n.useState)(),f=Object(s.a)(h,2),g=f[0],p=f[1],E=Object(n.useState)(),b=Object(s.a)(E,2),v=b[0],k=b[1],y=Object(n.useState)(),O=Object(s.a)(y,2),w=O[0],j=O[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{bg:"light",expand:"lg"},r.a.createElement(x.a.Brand,{href:"#home"},"graphgenome browser"),r.a.createElement(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(x.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a,{className:"mr-auto"},r.a.createElement(T.a,{title:"File",id:"basic-nav-dropdown"},r.a.createElement(T.a.Item,{onClick:function(){return k(!0)}},"Open URL"),r.a.createElement(T.a.Item,{onClick:function(){return j(!0)}},"Open file"),r.a.createElement(T.a.Item,{onClick:function(){return l()}},"Export SVG")),r.a.createElement(T.a,{title:"Examples",id:"basic-nav-dropdown"},r.a.createElement(T.a.Item,{onClick:function(){return t("MT.gfa")}},"MT GFA-spec example"),r.a.createElement(T.a.Item,{onClick:function(){return t("toy_pangenome.gfa")}},"Paths example"),r.a.createElement(T.a.Item,{onClick:function(){return t("example1.gfa")}},"Paths example 2"),r.a.createElement(T.a.Item,{onClick:function(){return t("big1.gfa")}},"Big1"),r.a.createElement(T.a.Item,{onClick:function(){return t("ir1.gfa")}},"Ir1"),r.a.createElement(T.a.Item,{onClick:function(){return t("test_contig_placement_assembly_graph.gfa")}},"Unicycler example"),r.a.createElement(T.a.Item,{onClick:function(){return t("circle.gfa")}},"Simple circle")),r.a.createElement(C.a.Link,{onClick:function(){p(!0)}},"Settings"),r.a.createElement(C.a.Link,{onClick:function(){d(!0)}},"About")))),m?r.a.createElement(H,{onHide:function(){return d(!1)}}):null,g?r.a.createElement(G,{settings:a,onHide:function(){return p(!1)},onSettings:o}):null,v?r.a.createElement(B,{onData:t,onHide:function(){return k(!1)}}):null,w?r.a.createElement(N,{onGraph:c,onHide:function(){return j(!1)}}):null)}var W=a(59),q=a.n(W);a(76),a(77);var z=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("MT.gfa"),o=Object(s.a)(l,2),m=o[0],d=o[1],f=Object(n.useState)(),g=Object(s.a)(f,2),p=g[0],E=g[1],k=Object(n.useState)(),y=Object(s.a)(k,2),O=y[0],j=y[1],x=Object(n.useState)("Rainbow"),C=Object(s.a)(x,2),T=C[0],L=C[1],M=Object(n.useState)(!1),G=Object(s.a)(M,2),H=G[0],B=G[1],N=Object(n.useState)(0),W=Object(s.a)(N,2),z=W[0],R=W[1],D=Object(n.useState)(!1),I=Object(s.a)(D,2),_=I[0],A=I[1],P=Object(n.useState)({strength:-50,chunkSize:1e3,forceSteps:200,linkSteps:1,sequenceThickness:10,linkThickness:2,theta:.9}),J=Object(s.a)(P,2),U=J[0],V=J[1],Z=Object(n.useRef)();Object(n.useEffect)((function(){Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(m);case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch ".concat(t.statusText));case 6:return e.next=8,t.text();case 8:a=e.sent,E(a),j(void 0),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0),j(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[m]);var X=Object(n.useMemo)((function(){return p?function(e){var t,a={nodes:[],links:[],paths:[]},n=Object(v.a)(e.split("\n"));try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.startsWith("S")){for(var c=r.split("\t"),l=Object(b.a)(c),o=l[1],i=l[2],u=l.slice(3),m={},d=0;d<u.length;d++){var h=u[d].split(":"),f=Object(s.a)(h,3),g=f[0],p=f[1],E=f[2];"i"===p?m[g]=+E:"Z"===p&&(m[g]=E)}a.nodes.push({id:o,sequence:i,tags:m})}else if(r.startsWith("L")){for(var k=r.split("\t"),y=Object(b.a)(k),O=y[1],w=y[2],j=y[3],S=y[4],x=y[5],C=y.slice(6),T={},L=0;L<C.length;L++){var M=C[L].split(":"),G=Object(s.a)(M,3),H=G[0],B=G[1],N=G[2];"i"===B?T[H]=+N:"Z"===B&&(T[H]=N)}a.links.push({source:O,target:j,strand1:w,strand2:S,cigar:x,tags:T})}else if(r.startsWith("P")){var F=r.split("\t"),W=Object(b.a)(F),q=W[1],z=W[2],R=W.slice(3);a.paths.push({name:q,path:z,rest:R})}}}catch(D){n.e(D)}finally{n.f()}return a}(p):void 0}),[p]);return r.a.createElement("div",null,r.a.createElement(F,{onData:function(e){d(e)},onGraph:function(e){E(e)},onSettings:function(e){V(e)},onExportSVG:function(){q()(function(e){var t="http://www.w3.org/2000/xmlns/";e=e.cloneNode(!0);for(var a="".concat(window.location.href,"#"),n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,null,!1);n.nextNode();){var r,c=Object(v.a)(n.currentNode.attributes);try{for(c.s();!(r=c.n()).done;){var l=r.value;l.value.includes(a)&&(l.value=l.value.replace(a,"#"))}}catch(i){c.e(i)}finally{c.f()}}e.setAttributeNS(t,"xmlns","http://www.w3.org/2000/svg"),e.setAttributeNS(t,"xmlns:xlink","http://www.w3.org/1999/xlink");var o=(new window.XMLSerializer).serializeToString(e);return new Blob([o],{type:"image/svg+xml"})}(Z.current))},settings:U}),a?r.a.createElement(h,{data:a,onModal:function(e){c(e)},onHide:function(){c(void 0)}}):null,r.a.createElement("div",{className:"flexcontainer"},r.a.createElement("div",{id:"sidebar",className:"sidebar"},r.a.createElement(S,{color:T,onColorChange:function(e){return L(e)},onDrawLabels:function(e){return A(e)},onPathDraw:function(e){return B(e)},onRedraw:function(){return R((function(e){return e+1}))}})),r.a.createElement("div",{className:"body"},O?r.a.createElement("div",{style:{color:"red"}},O):null,X?r.a.createElement(w,{graph:X,ref:Z,color:T,redraw:z,drawLabels:_,drawPaths:H,onFeatureClick:function(e){c(e)},settings:U}):null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.8ff60ae6.chunk.js.map