(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{109:function(e,t,n){},120:function(e,t){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),i=n(26),s=n.n(i),o=(n(109),n(29)),l=n.n(o),d=n(63),u=n(40),j=n(10),h=n(155),b=n(93);function f(e){var t=e.data,n=e.onHide;return Object(a.jsxs)(h.a,{show:!0,onHide:n,children:[Object(a.jsx)(h.a.Header,{closeButton:!0,children:Object(a.jsx)(h.a.Title,{children:"Feature details"})}),Object(a.jsxs)(h.a.Body,{children:[Object(a.jsx)("div",{children:"Attributes"}),Object.entries(t).filter((function(e){return!["source","target","linkNum","tags"].includes(e[0])})).map((function(e){var t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{style:{display:"flex",maxHeight:150,margin:3},children:[Object(a.jsx)("div",{style:{backgroundColor:"#dda",minWidth:100},children:n}),Object(a.jsx)("div",{style:{wordBreak:"break-word",overflow:"auto"},children:String(r)})]},"".concat(n,"_").concat(r))})),Object(a.jsx)("hr",{}),t.tags&&Object.keys(t.tags).length?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:"Tags"}),Object.entries(t.tags).map((function(e){var t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{style:{display:"flex",maxHeight:150,margin:3},children:[Object(a.jsx)("div",{style:{backgroundColor:"#dda",minWidth:100},children:n}),Object(a.jsx)("div",{style:{wordBreak:"break-word",overflow:"auto"},children:String(r)})]},"".concat(n,"_").concat(r))}))]}):null,Object(a.jsx)(h.a.Footer,{children:Object(a.jsx)(b.a,{variant:"secondary",onClick:n,children:"Close"})})]})]})}var O=n(12),p=n(33),g=n(160),x=n(102),v=n(153),m=n(89),k=n(156),w=n(150),y=n(151),S=n(91),C=n(100),T=n(101);function L(e){for(var t=[],n=0;n<e.length;n++){var a=e[n];t.push([a.source.x,a.source.y])}var r=e[n-1];return t.push([r.target.x,r.target.y]),t}function H(e,t){var n;return(n="linkNum",e.reduce((function(e,t){var a=n instanceof Function?n(t):t[n];if(void 0!==a){var r=e.find((function(e){return e&&e.key===a}));r?r.values.push(t):e.push({key:a,values:[t]})}return e}),[])).map((function(e){return{links:L(e.values),original:t[e.key]}}))}function I(e,t,n,a,r){var c=Math.sqrt(Math.pow(a-t,2)+Math.pow(n-e,2));return[n+r*((n-e)/c),a+r*((a-t)/c)]}var M=S.a;var G=c.a.forwardRef((function(e,t){var n=e.graph,a=e.drawPaths,i=void 0!==a&&a,s=e.drawLabels,o=void 0!==s&&s,l=e.drag,d=void 0!==l&&l,h=e.settings,b=h.chunkSize,f=void 0===b?1e3:b,S=h.linkSteps,L=void 0===S?3:S,G=h.sequenceThickness,N=void 0===G?10:G,B=h.linkThickness,A=void 0===B?2:B,q=h.theta,E=void 0===q?.9:q,D=h.strengthCenter,F=void 0===D?-50:D,P=e.color,R=void 0===P?"Rainbow":P,z=e.width,W=void 0===z?2e3:z,_=e.height,J=void 0===_?1e3:_,U=e.redraw,V=void 0===U?0:U,X=e.onFeatureClick,Y=void 0===X?function(){console.log("no feature click configured")}:X;Object(r.useRef)().current=d;var Z=Object(r.useMemo)((function(){return function(e,t){for(var n={nodes:[],links:[]},a={},r=0;r<(e.paths||{}).length;r++)for(var c=e.paths[r],i=c.path.split(","),s=0;s<i.length-1;s++){var o="".concat(i[s],"_").concat(i[s+1]);a[o]?a[o].push(c.name):a[o]=[c.name]}for(var l=0;l<e.nodes.length;l++){var d=e.nodes[l],j=d.id,h=d.sequence,b=d.length,f=Object(u.a)(d,["id","sequence","length"]),p=[];p.push(Object(O.a)(Object(O.a)({},f),{},{id:"".concat(j,"-start")}));for(var g=t;g<b-t;g+=t)p.push(Object(O.a)(Object(O.a)({},f),{},{id:"".concat(j,"-").concat(g)}));p.push(Object(O.a)(Object(O.a)({},f),{},{id:"".concat(j,"-end")}));for(var x=0;x<p.length-1;x++){var v=p[x].id,m=p[x+1].id;n.links.push(Object(O.a)(Object(O.a)({},f),{},{source:v,target:m,id:j,length:b,sequence:h,linkNum:l}))}n.nodes=n.nodes.concat(p)}for(var k=0;k<e.links.length;k++){var w=e.links[k],y=w.strand1,S=w.strand2,C=w.source,T=w.target,L=Object(u.a)(w,["strand1","strand2","source","target"]),H=a["".concat(C).concat(y,"_").concat(T).concat(S)]||[],I=C===T,M=Object(O.a)({source:"".concat(C,"-").concat("+"===y?"end":"start"),target:"".concat(T,"-").concat("+"===S?"start":"end")},L);I&&(M.loop=!0),H.length&&(M.paths=H),n.links.push(M)}return n}(n,f)}),[f,n]),K=Object(r.useMemo)((function(){return Object.fromEntries((n.paths||[]).map((function(e,t){return[e.name,M[t]]})))}),[n.paths]);return Object(r.useEffect)((function(){if(t.current){var e=Z.links.map((function(e){return Object(O.a)({},e)})),a=Z.nodes.map((function(e){return Object(O.a)({},e)}));t.current.innerHTML="";var r=Object(m.a)().nodes(a),c=Object(k.a)().strength(F).theta(E),s=Object(w.a)(W/3,J/3),o=Object(y.a)(e).id((function(e){return e.id})).distance((function(e){return e.sequence?1:10})).iterations(L);r.force("charge",c).force("center",s).force("links",o),r.on("tick",(function(){B.attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y}));for(var t=H(e,n.nodes),a={},r=0;r<t.length;r++){var c=t[r],i=c.links.length;a["".concat(c.original.id,"-start")]=[c.links[1],c.links[0]],a["".concat(c.original.id,"-end")]=[c.links[i-2],c.links[i-1]]}G.attr("d",(function(e){var t=e.source.x,n=e.source.y,r=e.target.x,c=e.target.y;if(void 0===e.pathIndex){var i=0,s=0,o=0,l=0,d=e.source.id.slice(0,e.source.id.lastIndexOf("-"))===e.target.id.slice(0,e.target.id.lastIndexOf("-"))&&!e.id,u=a[e.source.id]||[],h=Object(j.a)(u,2),b=h[0],f=void 0===b?0:b,O=h[1],p=void 0===O?0:O,g=a[e.target.id]||[],x=Object(j.a)(g,2),m=(x[0],x[1]),k=void 0===m?0:m,w=Object(v.a)([p[0]-f[0],p[1]-f[1]],[p[0]-k[0],p[1]-k[1]]);return d&&!Number.isNaN(w)&&w>0&&(console.log({dotresult:w}),o=-45,l=1,i=25,s=20),"M".concat(t,",").concat(n,"A").concat(i,",").concat(s,",").concat(o,",").concat(l,",").concat(0," ").concat(r,",").concat(c)}var y=Object(j.a)(a[e.source.id],2),S=y[0],C=y[1],T=Object(j.a)(a[e.target.id],2),L=T[0],H=T[1],M=(c-n)/(r-t),G=(S[1]-C[1])/(S[0]-C[0]),N=(L[1]-H[1])/(L[0]-H[0]);if(Math.abs(M-G)<.2||Math.abs(M-N)<.2){var B=r-t,A=c-n,q=Math.sqrt(B*B+A*A)+40*Math.random(),E=e.pathIndex%2;return"M".concat(t,",").concat(n,"A").concat(q,",").concat(q," 0 0,").concat(E," ").concat(r,",").concat(c)}var D=I(S[0],S[1],C[0],C[1],20+30*e.pathIndex),F=Object(j.a)(D,2),P=F[0],R=F[1],z=I(L[0],L[1],H[0],H[1],20+30*e.pathIndex),W=Object(j.a)(z,2),_=W[0],J=W[1];return"M ".concat(t," ").concat(n," C ").concat(P," ").concat(R,", ").concat(_," ").concat(J,", ").concat(r,", ").concat(c)})),q&&q.attr("d",(function(e){return"M".concat(e.source.x,",").concat(e.source.y,"L").concat(e.target.x,",").concat(e.target.y)}))}));var l=Object(x.a)(t.current);l.append("defs").append("marker").attr("id","arrowhead").attr("viewBox","-0 -5 10 10").attr("refX",10).attr("refY",0).attr("orient","auto").attr("markerWidth",4).attr("markerHeight",4).attr("xoverflow","visible").append("svg:path").attr("d","M 0,-5 L 10 ,0 L 0,5").attr("fill","rgba(120,120,120,0.9)").style("stroke","none");for(var d=l.append("g"),h=H(e,n.nodes),b={},f=0;f<h.length;f++){var S=h[f],M=S.links.length;b["".concat(S.original.id,"-start")]=[S.links[1],S.links[0]],b["".concat(S.original.id,"-end")]=[S.links[M-2],S.links[M-1]]}var G=d.selectAll("path").data(i?function(e){for(var t=[],n=[],a=0;a<e.length;a++){var r=e[a],c=r.paths,i=Object(u.a)(r,["paths"]);if(c)for(var s=0;s<c.length;s++){var o=c[s],l=n.indexOf(o);-1===l&&(n.push(o),l=n.length-1),t.push(Object(O.a)(Object(O.a)({},i),{},{pathId:o,pathIndex:l}))}else t.push(i)}return t}(e):e).join("path").attr("marker-end",(function(e){return e.id?void 0:"url(#arrowhead)"})).attr("stroke",(function(e){if(void 0!==e.linkNum){var t=h.findIndex((function(t){return t.original.id===e.id}));return R.startsWith("Just")?R.replace("Just","").toLowerCase():Object(p.f)(C["interpolate".concat(R)](t/h.length)).darker()}return i?K[e.pathId]:"rgba(120,120,120,0.8)"})).attr("fill","none").attr("stroke-width",(function(e){return void 0!==e.linkNum?N:A})).on("click",(function(e,t){Y(t)})),B=d.selectAll("circle").data(a).join("circle").attr("r",7).attr("fill","rgba(255,255,255,0.0)"),q=d.selectAll(".edgepath").data(e).enter().append("path").attr("d",(function(e){return"M".concat(e.source.x,",").concat(e.source.y,"L").concat(e.target.x,",").concat(e.target.y)})).attr("id",(function(e,t){return"edgepath-"+t}));d.selectAll(".edgelabel").data(e).enter().append("text").attr("dy",12).attr("id",(function(e,t){return"edgelabel-"+t})).append("textPath").attr("href",(function(e,t){return"#edgepath-".concat(t)})).attr("startOffset","50%").attr("text-anchor","middle").text((function(e){var t=e.source.id.slice(0,e.source.id.lastIndexOf("-"));return t===e.target.id.slice(0,e.target.id.lastIndexOf("-"))&&e.id?t:""})),g.a().on("start",(function(e,t){e.active||r.alphaTarget(.3).restart(),t.fx=e.x,t.fy=e.y})).on("drag",(function(e,t){t.fx=e.x,t.fy=e.y})).on("end",(function(e,t){e.active||r.alphaTarget(0),t.fx=null,t.fy=null}))(B);var D=Object(T.a)();D.on("zoom",(function(e){d.attr("transform",e.transform)})),D(l)}}),[Z.links,Z.nodes,R,L,i,F,N,A,E,W,V,J]),c.a.createElement("svg",{width:"100%",height:"100%",ref:t,style:{fontSize:o?10:0},viewBox:[0,0,W,J].toString()})})),N=n(157);function B(e){var t=e.onDrawLabels,n=e.drawLabels,r=e.drawPaths,c=(e.drag,e.onDrag,e.onColorChange),i=e.onPathDraw,s=e.onRedraw,o=e.colorScheme;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Settings"}),Object(a.jsx)(N.a.Label,{children:"Color"}),Object(a.jsxs)(N.a.Control,{value:o,onChange:function(e){return c(e.target.value)},as:"select",children:[Object(a.jsx)("option",{children:"JustGrey"}),Object(a.jsx)("option",{children:"Turbo"}),Object(a.jsx)("option",{children:"Rainbow"}),Object(a.jsx)("option",{children:"Spectral"}),Object(a.jsx)("option",{children:"Viridis"}),Object(a.jsx)("option",{children:"RdYlBu"})]}),Object(a.jsx)("br",{}),Object(a.jsx)(N.a.Group,{children:Object(a.jsx)(N.a.Check,{onChange:function(e){i(e.target.checked)},type:"checkbox",label:"Draw paths",checked:r})}),Object(a.jsx)(N.a.Group,{children:Object(a.jsx)(N.a.Check,{onChange:function(e){t(e.target.checked)},type:"checkbox",label:"Draw labels",checked:n})}),Object(a.jsx)(b.a,{onClick:function(){return s()},children:"Redraw"})]})}var A=n(158),q=n(159),E=n(154),D=n(152),F=n(97);function P(e){var t=e.onHide,n=e.settings,c=e.onSettings,i=Object(r.useState)(n),s=Object(j.a)(i,2),o=s[0],l=s[1],d=o.chunkSize,u=o.linkSteps,f=o.strengthCenter,p=o.theta,g=o.sequenceThickness,x=o.linkThickness;return Object(a.jsxs)(h.a,{show:!0,onHide:t,size:"lg",children:[Object(a.jsx)(h.a.Header,{closeButton:!0,children:Object(a.jsx)(h.a.Title,{children:"Settings"})}),Object(a.jsx)(h.a.Body,{children:Object(a.jsxs)(N.a,{onSubmit:function(e){e.preventDefault(),c(Object(O.a)(Object(O.a)({},o),{},{chunkSize:+d,linkSteps:+u,strengthCenter:+f,theta:+p,sequenceThickness:+g,linkThickness:+x})),t()},children:[Object(a.jsxs)(N.a.Group,{as:D.a,children:[Object(a.jsxs)(N.a.Label,{column:!0,sm:"4",children:["Number of simulation steps for the links",Object(a.jsx)(N.a.Text,{muted:!0,children:"Increases the rigidity of the link based constraints. May be helpful for circular contigs to increase"})]}),Object(a.jsx)(F.a,{children:Object(a.jsx)(N.a.Control,{type:"number",value:u,onChange:function(e){var t=e.target.value;l((function(e){return Object(O.a)(Object(O.a)({},e),{},{linkSteps:t})}))}})})]}),Object(a.jsxs)(N.a.Group,{as:D.a,children:[Object(a.jsxs)(N.a.Label,{column:!0,sm:"4",children:["Sequence chunk size",Object(a.jsx)(N.a.Text,{muted:!0,children:"If a contig is of length 5000, then chunk length 1000 would become 5 segments. Note that contigs smaller than the chunk length may not be proportionally sized"})]}),Object(a.jsx)(F.a,{children:Object(a.jsx)(N.a.Control,{type:"number",value:d,onChange:function(e){var t=e.target.value;l((function(e){return Object(O.a)(Object(O.a)({},e),{},{chunkSize:t})}))}})})]}),Object(a.jsxs)(N.a.Group,{as:D.a,children:[Object(a.jsxs)(N.a.Label,{column:!0,sm:"4",children:["Theta",Object(a.jsx)(N.a.Text,{muted:!0,children:"Parameter for the force directed layout"})]}),Object(a.jsx)(F.a,{children:Object(a.jsx)(N.a.Control,{type:"number",value:p,onChange:function(e){var t=e.target.value;l((function(e){return Object(O.a)(Object(O.a)({},e),{},{theta:t})}))}})})]}),Object(a.jsxs)(N.a.Group,{as:D.a,children:[Object(a.jsxs)(N.a.Label,{column:!0,sm:"4",children:["Strength (particle charge)",Object(a.jsx)(N.a.Text,{muted:!0,children:"This value is like a charged particle force, by being negative it keeps things farther apart"})]}),Object(a.jsx)(F.a,{children:Object(a.jsx)(N.a.Control,{type:"number",value:f,onChange:function(e){var t=e.target.value;l((function(e){return Object(O.a)(Object(O.a)({},e),{},{strengthCenter:t})}))}})})]}),Object(a.jsxs)(N.a.Group,{as:D.a,children:[Object(a.jsx)(N.a.Label,{column:!0,sm:"4",children:"Sequence thickness"}),Object(a.jsx)(F.a,{children:Object(a.jsx)("input",{type:"range",min:1,max:100,style:{width:"100%"},value:g,onChange:function(e){var t=e.target.value;l((function(e){return Object(O.a)(Object(O.a)({},e),{},{sequenceThickness:t})}))}})})]}),Object(a.jsxs)(N.a.Group,{as:D.a,children:[Object(a.jsx)(N.a.Label,{column:!0,sm:"4",children:"Link thickness"}),Object(a.jsx)(F.a,{children:Object(a.jsx)("input",{type:"range",min:1,max:100,style:{width:"100%"},value:x,onChange:function(e){var t=e.target.value;l((function(e){return Object(O.a)(Object(O.a)({},e),{},{linkThickness:t})}))}})})]}),Object(a.jsx)(b.a,{type:"submit",children:"Submit"})]})})]})}var R=n(98);function z(e){var t=e.onHide;return Object(a.jsxs)(h.a,{show:!0,onHide:t,children:[Object(a.jsx)(h.a.Header,{closeButton:!0,children:Object(a.jsxs)(h.a.Title,{children:["graphgenome browser ",R.version]})}),Object(a.jsxs)(h.a.Body,{children:[Object(a.jsx)("p",{children:"This is a small demo of browsing simple graph genomes. The app can read GFA format URLs and local files, all processing is done client side currently."}),Object(a.jsxs)("p",{children:["Contact ",Object(a.jsx)("a",{href:"mainto:colin.diesh@gmail.com",children:"Colin Diesh"})]}),Object(a.jsxs)("p",{children:["Thanks to the BCC2020 pangenome team, and"," ",Object(a.jsx)("a",{href:"https://github.com/rrwick/Bandage",children:"Bandage"})," for inspiration."]}),Object(a.jsx)("p",{children:"Sample data from GFA-spec repo (MT.gfa), Andrea Guarracino (path example), and gfalint (Shaun Jackman)"}),Object(a.jsx)("p",{children:"This app attempts to support GFA2 but does not properly render fragments, intricate edge details, or U and O paths"}),Object(a.jsx)("a",{href:"https://github.com/cmdcolin/graphgenomeviewer",children:"GitHub"})]})]})}function W(e){var t=e.onHide,n=e.onData,c=Object(r.useState)(),i=Object(j.a)(c,2),s=i[0],o=i[1];return Object(a.jsxs)(h.a,{show:!0,onHide:t,children:[Object(a.jsx)(h.a.Header,{closeButton:!0,children:Object(a.jsx)(h.a.Title,{children:"graphgenome browser"})}),Object(a.jsx)(h.a.Body,{children:Object(a.jsxs)(N.a,{onSubmit:function(){n(s),t()},children:[Object(a.jsxs)(N.a.Group,{children:[Object(a.jsx)(N.a.Label,{children:"Enter URL"}),Object(a.jsx)(N.a.Control,{type:"input",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(a.jsx)(b.a,{type:"submit",children:"Submit"})]})})]})}function _(e){var t=e.onHide,n=e.onGraph,c=Object(r.useRef)();return Object(a.jsxs)(h.a,{show:!0,onHide:t,children:[Object(a.jsx)(h.a.Header,{closeButton:!0,children:Object(a.jsx)(h.a.Title,{children:"Open file"})}),Object(a.jsx)(h.a.Body,{children:Object(a.jsxs)(N.a,{onSubmit:function(){var e=Object(d.a)(l.a.mark((function e(a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,c.current.files[0].text();case 3:r=e.sent,n(r),t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(a.jsxs)(N.a.Group,{children:[Object(a.jsx)(N.a.Label,{children:"Open file"}),Object(a.jsx)(N.a.Control,{ref:c,type:"file"})]}),Object(a.jsx)(b.a,{type:"submit",children:"Submit"})]})})]})}function J(e){var t=e.onData,n=e.settings,c=e.onGraph,i=e.onExportSVG,s=e.onSettings,o=Object(r.useState)(),l=Object(j.a)(o,2),d=l[0],u=l[1],h=Object(r.useState)(),b=Object(j.a)(h,2),f=b[0],O=b[1],p=Object(r.useState)(),g=Object(j.a)(p,2),x=g[0],v=g[1],m=Object(r.useState)(),k=Object(j.a)(m,2),w=k[0],y=k[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(A.a,{bg:"light",expand:"lg",children:[Object(a.jsx)(A.a.Brand,{href:"#home",children:"graphgenome browser"}),Object(a.jsx)(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(A.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(q.a,{className:"mr-auto",children:[Object(a.jsxs)(E.a,{title:"File",id:"basic-nav-dropdown",children:[Object(a.jsx)(E.a.Item,{onClick:function(){return v(!0)},children:"Open URL"}),Object(a.jsx)(E.a.Item,{onClick:function(){return y(!0)},children:"Open file"}),Object(a.jsx)(E.a.Item,{onClick:function(){return i()},children:"Export SVG"})]}),Object(a.jsxs)(E.a,{title:"Examples",id:"basic-nav-dropdown",children:[Object(a.jsx)(E.a.Item,{onClick:function(){return t("MT.gfa")},children:"MT GFA-spec example"}),Object(a.jsx)(E.a.Item,{onClick:function(){return t("toy_pangenome.gfa")},children:"Paths example"}),Object(a.jsx)(E.a.Item,{onClick:function(){return t("example1.gfa")},children:"Paths example 2"}),Object(a.jsx)(E.a.Item,{onClick:function(){return t("big1.gfa")},children:"Big1"}),Object(a.jsx)(E.a.Item,{onClick:function(){return t("ir1.gfa")},children:"Ir1"}),Object(a.jsx)(E.a.Item,{onClick:function(){return t("test_contig_placement_assembly_graph.gfa")},children:"Unicycler example"}),Object(a.jsx)(E.a.Item,{onClick:function(){return t("circle.gfa")},children:"Simple circle"}),Object(a.jsx)(E.a.Item,{onClick:function(){return t("example1.gfa2")},children:"GFA2.0 example"})]}),Object(a.jsx)(q.a.Link,{onClick:function(){O(!0)},children:"Settings"}),Object(a.jsx)(q.a.Link,{onClick:function(){u(!0)},children:"About"})]})})]}),d?Object(a.jsx)(z,{onHide:function(){return u(!1)}}):null,f?Object(a.jsx)(P,{settings:n,onHide:function(){return O(!1)},onSettings:s}):null,x?Object(a.jsx)(W,{onData:t,onHide:function(){return v(!1)}}):null,w?Object(a.jsx)(_,{onGraph:c,onHide:function(){return y(!1)}}):null]})}var U=n(57),V=n(61);function X(e,t){var n=e.split(":"),a=Object(j.a)(n,3),r=a[0],c=a[1],i=a[2];"i"===c?t[r]=+i:"Z"===c&&(t[r]=i)}var Y=n(99),Z=n.n(Y),K=n(11);n(137),n(138);var Q=function(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)(),o=Object(j.a)(s,2),h=o[0],b=o[1],O=Object(r.useState)(),p=Object(j.a)(O,2),g=p[0],x=p[1],v=Object(r.useState)(),m=Object(j.a)(v,2)[1],k=c.a.useCallback((function(){return m({})}),[]),w=Object(r.useState)(0),y=Object(j.a)(w,2),S=y[0],C=y[1],T=Object(K.e)({strengthCenter:Object(K.f)(K.b,-50),strengthXY:Object(K.f)(K.b,.1),chunkSize:Object(K.f)(K.b,1e3),forceSteps:Object(K.f)(K.b,200),linkSteps:Object(K.f)(K.b,1),sequenceThickness:Object(K.f)(K.b,10),linkThickness:Object(K.f)(K.b,2),theta:Object(K.f)(K.b,.9),forceType:Object(K.f)(K.d,"center"),dataset:Object(K.f)(K.d,"MT.gfa"),colorScheme:Object(K.f)(K.d,"Rainbow"),drawLabels:Object(K.f)(K.a,!1),drawPaths:Object(K.f)(K.a,!1),drag:Object(K.f)(K.a,!0)}),L=Object(j.a)(T,2),H=L[0],I=L[1],M=H.dataset,N=H.drawLabels,A=H.drawPaths,q=H.colorScheme,E=H.drag,D=Object(u.a)(H,["dataset","drawLabels","drawPaths","colorScheme","drag"]),F=Object(r.useRef)();Object(r.useEffect)((function(){Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(M);case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch ".concat(t.statusText));case 6:return e.next=8,t.text();case 8:n=e.sent,b(n),x(void 0),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0),x(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[M]);var P=Object(r.useMemo)((function(){return h?function(e){var t,n={nodes:[],links:[],paths:[],header:[]},a=Object(V.a)(e.split("\n"));try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r.startsWith("H")&&function(){var e={},t=r.split("\t");Object(U.a)(t).slice(1).forEach((function(t){return X(t,e)})),n.header.push(e)}(),r.startsWith("S")){var c=r.split("\t"),i=Object(U.a)(c),s=i[1],o=i.slice(2),l=0,d="",u=void 0,j=!1;+o[0]?(l=+o[0],d=o[1],u=o.slice(2)):(j=!0,l=(d=o[0]).length,u=o.slice(1));for(var h={},b=0;b<u.length;b++)X(o[b],h);j&&h.LN&&(l=h.LN),n.nodes.push({id:s,length:l,sequence:d,tags:h})}else if(r.startsWith("E")){for(var f=r.split("\t"),O=Object(U.a)(f),p=O[2],g=O[3],x=O[8],v=O.slice(9),m=p.slice(0,-1),k=g.slice(0,-1),w=p.charAt(p.length-1),y=p.charAt(g.length-1),S={},C=0;C<v.length;C++)X(v[C],S);n.links.push({source:m,target:k,strand1:w,strand2:y,cigar:x,tags:S})}else if(r.startsWith("L")){for(var T=r.split("\t"),L=Object(U.a)(T),H=L[1],I=L[2],M=L[3],G=L[4],N=L[5],B=L.slice(6),A={},q=0;q<B.length;q++)X(B[q],A);n.links.push({source:H,target:M,strand1:I,strand2:G,cigar:N,tags:A})}else if(r.startsWith("P")){var E=r.split("\t"),D=Object(U.a)(E),F=D[1],P=D[2],R=D.slice(3);n.paths.push({name:F,path:P,rest:R})}}}catch(z){a.e(z)}finally{a.f()}return n}(h):void 0}),[h]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(J,{onData:function(e){I({dataset:e}),k()},onGraph:function(e){b(e)},onSettings:function(e){I(e),k()},onExportSVG:function(){Z()(function(e){var t="http://www.w3.org/2000/xmlns/";e=e.cloneNode(!0);for(var n="".concat(window.location.href,"#"),a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,null,!1);a.nextNode();){var r,c=Object(V.a)(a.currentNode.attributes);try{for(c.s();!(r=c.n()).done;){var i=r.value;i.value.includes(n)&&(i.value=i.value.replace(n,"#"))}}catch(o){c.e(o)}finally{c.f()}}e.setAttributeNS(t,"xmlns","http://www.w3.org/2000/svg"),e.setAttributeNS(t,"xmlns:xlink","http://www.w3.org/1999/xlink");var s=(new window.XMLSerializer).serializeToString(e);return new Blob([s],{type:"image/svg+xml"})}(F.current))},settings:D}),n?Object(a.jsx)(f,{data:n,onModal:function(e){i(e)},onHide:function(){i(void 0)}}):null,Object(a.jsxs)("div",{className:"flexcontainer",children:[Object(a.jsx)("div",{id:"sidebar",className:"sidebar",children:Object(a.jsx)(B,{colorScheme:q,drawPaths:A,drawLabels:N,drag:E,onColorChange:function(e){I({colorScheme:e}),k()},onDrawLabels:function(e){I({drawLabels:e}),k()},onDrag:function(e){I({drag:e}),k()},onPathDraw:function(e){I({drawPaths:e}),k()},onRedraw:function(){return C((function(e){return e+1}))}})}),Object(a.jsxs)("div",{className:"body",children:[g?Object(a.jsx)("div",{style:{color:"red"},children:g}):null,P?Object(a.jsx)(G,{graph:P,ref:F,redraw:S,drag:E,color:q,drawLabels:N,drawPaths:A,onFeatureClick:function(e){i(e)},settings:D}):null]})]})]})};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(K.c,{children:Object(a.jsx)(Q,{})})}),document.getElementById("root"))},98:function(e){e.exports=JSON.parse('{"name":"app","version":"1.0.0","private":true,"dependencies":{"@testing-library/jest-dom":"^5.11.10","@testing-library/react":"^11.2.6","@testing-library/user-event":"^13.1.1","bootstrap":"^4.6.0","file-saver":"^2.0.5","gh-pages":"^3.1.0","graphgenomeviewer":"^2.0.0","query-string":"^7.0.0","react":"^17.0.2","react-bootstrap":"^1.5.2","react-dom":"^17.0.2","react-scripts":"4.0.3","use-query-params":"^1.2.2","web-vitals":"^1.1.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"yarn build","deploy":"gh-pages -d build","lint":"eslint src"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"homepage":"."}')}},[[139,1,2]]]);
//# sourceMappingURL=main.19a00c45.chunk.js.map