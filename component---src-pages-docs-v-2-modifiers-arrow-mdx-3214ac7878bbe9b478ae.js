(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7oih":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("zTTH"),a("HQhv"),a("v9g0");var n=a("wTIg"),o=a("q1tI"),r=a.n(o),s=a("Wbzz"),c=a("7ljp"),p=a("qKvR"),i=a("eVhr"),l=a("4FWg"),d=a("Z3Aq"),b=function(e){var t=e.children;return Object(p.d)(s.StaticQuery,{query:"1879031470",render:function(e){var a=e.allMdx.edges.map((function(e){return{navigationLabel:e.node.frontmatter.navigationLabel,slug:e.node.fields.slug,order:e.node.frontmatter.order,fileAbsolutePath:e.node.fileAbsolutePath}}));return t(a)},data:d})};a("zGcK"),a("TAD1");function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];if(e.slug.startsWith(n.slug))return void u(e,n.children)}t.push({navigationLabel:e.navigationLabel,slug:e.slug,order:e.order,children:[]}),t=t.sort((function(e,t){return e.order-t.order}))}function m(e){e=e.sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).filter((function(e){return null!=e.navigationLabel}));for(var t=[],a=0;a<e.length;a++){u(e[a],t)}return t.sort((function(e,t){return t.order-e.order})),t}a("Ll4R");function g(e,t){var a=t.match(/^\/docs\/(v[0-9]+)\//),n=a?a[1]:null;return e.filter((function(e){return!e.slug.startsWith("/docs/")||e.slug.startsWith("/docs/"+n+"/")||e.slug.match(/^\/docs\/v[0-9]+\/$/)}))}a("pJf4"),a("gZdQ");var f=!("undefined"==typeof window||!window.document||!window.document.createElement),h={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},v=Object(n.a)("div",{target:"ednh1zf0"})("padding-bottom:10px;display:none;transition:box-shadow 0.4s ease-out;flex-direction:column;align-items:stretch;padding:10px;",(function(e){return e.scrolled&&h})," ",l.e.lg,"{display:flex;}.algolia-autocomplete,input{width:100%;}input{border:0;border-radius:20px;padding:10px 20px;transition:box-shadow 0.2s ease-in-out;&:focus{outline:0;box-shadow:0 0 0 5px #a93244;}}.algolia-autocomplete .ds-dropdown-menu:before{left:10px;}"),j=function(e){var t=e.name,n=e.className,r=e.scrolled;return Object(o.useEffect)((function(){f&&a.e(30).then(a.t.bind(null,"UjO/",7)).then((function(e){return null==document.querySelector(".algolia-autocomplete")&&e.default({apiKey:"d5fa05c4e33e776fbf2b8021cbc15b37",indexName:"popper",inputSelector:".docsearch-input-"+t,algoliaOptions:{facetFilters:["tags:v2"]}})}))}),[t]),Object(p.d)(v,{className:n,scrolled:r},Object(p.d)("input",{type:"search",placeholder:"Search the docs...",className:"docsearch-input-"+t}))},N=a("vUvN"),O=a.n(N),x=(a("sc67"),a("4DPX"),a("17x9")),k=a.n(x);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var L=function(e){var t=e.color,a=e.size,n=w(e,["color","size"]);return r.a.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};L.propTypes={color:k.a.string,size:k.a.oneOfType([k.a.string,k.a.number])},L.defaultProps={color:"currentColor",size:"24"};var S=L,P={name:"2p83c6",styles:"display:flex;flex-direction:column;transform:translateX(0);"},z=Object(n.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;transform:translateX(-",260,"px);display:none;z-index:2;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&P})," ",l.e.lg,"{display:flex;flex-direction:column;transform:translateX(0);box-shadow:none;}"),A={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},C=Object(n.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(e){return e.root?0:15}),"px;margin-top:0;line-height:1.5;",(function(e){return!e.root&&A})),H=Object(n.a)(s.Link,{target:"e1y4lhx02"})({name:"60c8rm",styles:"display:block;color:white;text-decoration:none;padding:6px 15px;font-size:18px;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;font-weight:500;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),T=Object(n.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:2;",l.e.lg,"{display:none;}"),q=Object(n.a)("div",{target:"e1y4lhx04"})("background:#c83b50;width:100%;padding:6px 0 0;display:none;",l.e.lg,"{display:flex;flex-direction:column;align-items:center;}"),E={name:"1czmu1r",styles:"width:100px;height:50px;"},V=function(e){var t=e.mobile;return Object(p.d)(s.Link,{to:"/",css:Object(p.c)("display:block;margin:0 auto;user-select:none;margin-top:",t?"-12px":"0",";&,&:hover{border-width:0;}")},Object(p.d)("img",{src:O.a,draggable:"false",alt:"Popper Logo",css:E}))},M=Object(n.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),B=Object(n.a)("button",{target:"e1y4lhx06"})("display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;margin:10px 10px 0 10px;",l.e.lg,"{display:none;}"),D=Object(n.a)("div",{target:"e1y4lhx07"})("overflow:auto;min-height:0;flex:1;padding:0 10px 20px 0;margin-top:20px;",l.e.lg,"{margin-top:10px;}"),R=function e(t){var a=t.route;return Object(p.d)(r.a.Fragment,null,Object(p.d)(C,{root:!0},Object(p.d)("li",{style:{marginBottom:0}},Object(p.d)(H,{to:a.slug,activeStyle:{backgroundColor:"#FFF",color:"#C83B50",fontWeight:"bold"}},a.navigationLabel)),Object(p.d)(C,{root:2===a.slug.split("/").length},a.children.map((function(t,a){return Object(p.d)(e,{key:a,route:t})})))))},I=0;function F(e){e.description,e.lang,e.meta;var t=e.path,a=Object(o.useState)(!1),n=a[0],s=a[1],c=Object(o.useState)(!1),i=c[0],l=c[1],d=Object(o.useRef)();function u(){s(!0)}function f(){s(!1)}function h(){var e=d.current.scrollTop;I=e,l(e>10)}return Object(o.useLayoutEffect)((function(){var e=d.current;e.scrollTop=I;var t=e.querySelector('[aria-current="page"]');if(t){var a=t.getBoundingClientRect();(a.bottom>window.innerHeight||a.top<0)&&t.scrollIntoView()}}),[]),Object(p.d)(b,null,(function(e){return Object(p.d)(r.a.Fragment,null,Object(p.d)(T,null,Object(p.d)(M,{onClick:u,"aria-expanded":n?"true":"false","aria-label":"Click to open navigation menu"},Object(p.d)(S,{size:30})),Object(p.d)(V,{mobile:!0})),Object(p.d)(z,{open:n},Object(p.d)(q,null,Object(p.d)(V,null)),Object(p.d)(B,{onClick:f},"Close Menu"),Object(p.d)(j,{scrolled:i,name:"docs"}),Object(p.d)(D,{ref:d,onScroll:h},m(g(e,t)).map((function(e,t){return Object(p.d)(R,{route:e,key:t})})))))}))}var W=a("9CUm");a("8ypT"),a("cu9l");function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var U=function(e){var t=e.color,a=e.size,n=K(e,["color","size"]);return r.a.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};U.propTypes={color:k.a.string,size:k.a.oneOfType([k.a.string,k.a.number])},U.defaultProps={color:"currentColor",size:"24"};var X=U,Z=a("EAKA");function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Q=Object(n.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",l.e.lg,"{padding-top:0;margin-left:",260,"px;}"),_=Object(n.a)(l.c,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",l.e.lg,"{margin-left:",260,"px;}"),Y=Object(n.a)("div",{target:"e1fogcta2"})({name:"1u8mrbl",styles:"display:flex;border-top:1px solid #44395d;margin-top:50px;"}),$=Object(n.a)(l.a,{target:"e1fogcta3"})("display:flex;justify-content:space-between;width:100%;padding:0;",l.e.md,"{padding:0 40px;}"),ee=Object(n.a)("div",{target:"e1fogcta4"})({name:"1tq8hsw",styles:"display:flex;min-width:0;width:100%;"}),te=Object(n.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",l.e.md,"{display:block;}"),ae=Object(n.a)(s.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;word-break:break-word;width:100%;&[data-first]{padding-right:10px;}&[data-last]{padding-left:10px;text-align:right;}",l.e.md,"{font-size:22px;}",l.e.lg,"{font-size:24px;}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}"),ne=Object(p.c)("vertical-align:3px;",l.e.md,"{vertical-align:0;}"),oe=Object(n.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",l.e.md,"{top:54px;}",l.e.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),re={"x-ad":i.a,a:function(e){return Object(p.d)("a",J({},e,{onClick:se}),e.children)}};function se(e){try{var t=document.querySelector(window.location.hash);t.scrollIntoView();var a="H2"===t.nodeName;window.innerWidth<=l.f.lg?a||window.scrollBy(0,-60):a&&window.scrollBy(0,50)}catch(n){}}var ce=function e(t){return t.reduce((function(t,a){return t.concat(a).concat(e(a.children))}),[])},pe={name:"1cbva5p",styles:"margin-top:15px;display:inline-block;"},ie=function(e){var t=e.path;return Object(p.d)(b,null,(function(e){var a=e.find((function(e){return e.slug===t}));return a&&Object(p.d)("a",{css:pe,href:"https://github.com/popperjs/popper-core/edit/master/docs/src/"+a.fileAbsolutePath.split("/docs/src/")[1],rel:"noopener noreferrer",target:"_blank"},"Edit this page")}))};t.a=function(e){var t=e.children,a=e.path,n=e.pageResources;!function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a])}(e,["children","path","pageResources"]);return Object(o.useLayoutEffect)(se,[]),Object(p.d)(c.a,{components:re},Object(p.d)(p.a,{styles:Object(p.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;font-weight:bold;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;line-height:1.3;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}li{margin-bottom:5px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",l.e.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",l.e.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(p.d)("div",null,n&&Object(p.d)(W.a,{title:n.json.pageContext.frontmatter.navigationLabel}),Object(p.d)(F,{root:"/",target:"location",path:a}),Object(p.d)(Q,null,Object(p.d)(l.a,null,t,Object(p.d)(ie,{path:a})),Object(p.d)(b,null,(function(e){var t=function(e){var t=ce(m(g(e,a))),n=t.findIndex((function(e){return e.slug===a}));return{prev:t[n-1],next:t[n+1]}}(e),n=t.prev,o=t.next;return Object(p.d)(Y,null,Object(p.d)($,null,Object(p.d)(ee,null,n&&Object(p.d)(ae,{to:n.slug+"/","data-first":!0},Object(p.d)(oe,{"data-prev":!0},Object(p.d)(X,{size:28,css:ne})),n.navigationLabel)),Object(p.d)(te,null),Object(p.d)(ee,null,o&&Object(p.d)(ae,{to:o.slug+"/","data-last":!0},o.navigationLabel,Object(p.d)(oe,{"data-next":!0},Object(p.d)(Z.a,{size:28,css:ne}))))))}))),Object(p.d)(_,null,"© ",(new Date).getFullYear()," MIT License")))}},HeSi:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return l}));a("E5k/"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("q1tI");var n=a("7ljp"),o=a("7oih"),r=a("KK5/");a("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={},p={_frontmatter:c},i=o.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(i,s({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"arrow",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h1"},{href:"#arrow","aria-label":"arrow permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Arrow"),Object(n.b)("p",null,"The ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"arrow")," modifier positions an inner element of the popper so it appears\ncentered relative to the reference element, usually the triangle or caret that\npoints toward the reference element."),Object(n.b)("x-ad",null),Object(n.b)("h2",{id:"demo",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#demo","aria-label":"demo permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Demo"),Object(n.b)(r.a,{mdxType:"ArrowDemo"}),Object(n.b)("h2",{id:"phase",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#phase","aria-label":"phase permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Phase"),Object(n.b)("p",null,Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"main")),Object(n.b)("h2",{id:"options",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#options","aria-label":"options permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Options"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(n.b)("pre",s({parentName:"div"},{className:"language-flow"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-flow"}),Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"type")," Options ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  element",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," HTMLElement ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"|")," ",Object(n.b)("span",s({parentName:"code"},{className:"token type tag"}),"string"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),'// "[data-popper-arrow]"'),"\n  padding",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," Padding",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// 0"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h3",{id:"element",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h3"},{href:"#element","aria-label":"element permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(n.b)("code",s({parentName:"h3"},{className:"language-text"}),"element")),Object(n.b)("p",null,"Specifies the element to position as the arrow. This element must be a child of\nthe popper element."),Object(n.b)("p",null,"A string represents a ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"CSS")," selector queried within the context of the popper\nelement."),Object(n.b)("p",null,"Popper will automatically pick up the following element (using the\n",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"data-popper-arrow")," attribute) and position it:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(n.b)("pre",s({parentName:"div"},{className:"language-html"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-html"}),Object(n.b)("span",s({parentName:"code"},{className:"token tag"}),Object(n.b)("span",s({parentName:"span"},{className:"token tag"}),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(n.b)("span",s({parentName:"span"},{className:"token attr-name"}),"id"),Object(n.b)("span",s({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),'"'),"popper",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token tag"}),Object(n.b)("span",s({parentName:"span"},{className:"token tag"}),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(n.b)("span",s({parentName:"span"},{className:"token attr-name"}),"data-popper-arrow"),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),">")),Object(n.b)("span",s({parentName:"code"},{className:"token tag"}),Object(n.b)("span",s({parentName:"span"},{className:"token tag"}),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token tag"}),Object(n.b)("span",s({parentName:"span"},{className:"token tag"}),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),">"))))),Object(n.b)("p",null,"Or you can pass an element without an attribute:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," arrow ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," document",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"querySelector"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'#arrow'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  modifiers",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n      name",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'arrow'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n      options",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n        element",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," arrow",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h3",{id:"padding",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h3"},{href:"#padding","aria-label":"padding permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(n.b)("code",s({parentName:"h3"},{className:"language-text"}),"padding")),Object(n.b)("p",null,"If you don't want the arrow to reach the ",Object(n.b)("em",{parentName:"p"},"very")," edge of the popper (this is\ncommon if your popper has rounded corners using ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"border-radius"),"), you can apply\nsome padding to it."),Object(n.b)("p",null,"You can pass a ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"number"),", which will be equal padding on all four sides, or an\n",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"object")," containing side properties each with their own padding value."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  modifiers",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n      name",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'arrow'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n      options",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n        padding",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token number"}),"5"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// 5px from the edges of the popper"),"\n      ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h2",{id:"data",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#data","aria-label":"data permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Data"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(n.b)("pre",s({parentName:"div"},{className:"language-flow"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-flow"}),Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"type")," Data ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  x",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token type tag"}),"number"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  y",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token type tag"}),"number"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))))}l.isMDXComponent=!0},Z3Aq:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/404.mdx","fields":{"slug":"/404/"},"frontmatter":{"navigationLabel":null,"order":null}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/index.mdx","fields":{"slug":"/"},"frontmatter":{"navigationLabel":"Home","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v1/index.mdx","fields":{"slug":"/docs/v1/"},"frontmatter":{"navigationLabel":"Documentation (v1.x)","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/browser-support.mdx","fields":{"slug":"/docs/v2/browser-support/"},"frontmatter":{"navigationLabel":"Browser Support","order":10}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/constructors.mdx","fields":{"slug":"/docs/v2/constructors/"},"frontmatter":{"navigationLabel":"Constructors","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/faq.mdx","fields":{"slug":"/docs/v2/faq/"},"frontmatter":{"navigationLabel":"FAQ","order":8}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/index.mdx","fields":{"slug":"/docs/v2/"},"frontmatter":{"navigationLabel":"Documentation (v2.x)","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/lifecycle.mdx","fields":{"slug":"/docs/v2/lifecycle/"},"frontmatter":{"navigationLabel":"Lifecycle","order":3}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/migration-guide.mdx","fields":{"slug":"/docs/v2/migration-guide/"},"frontmatter":{"navigationLabel":"Migration Guide","order":11}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tippy.mdx","fields":{"slug":"/docs/v2/tippy/"},"frontmatter":{"navigationLabel":"Tippy.js","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tree-shaking.mdx","fields":{"slug":"/docs/v2/tree-shaking/"},"frontmatter":{"navigationLabel":"Tree-shaking","order":7}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tutorial.mdx","fields":{"slug":"/docs/v2/tutorial/"},"frontmatter":{"navigationLabel":"Tutorial","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/typings.mdx","fields":{"slug":"/docs/v2/typings/"},"frontmatter":{"navigationLabel":"Typings","order":9}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/virtual-elements.mdx","fields":{"slug":"/docs/v2/virtual-elements/"},"frontmatter":{"navigationLabel":"Virtual Elements","order":6}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/apply-styles.mdx","fields":{"slug":"/docs/v2/modifiers/apply-styles/"},"frontmatter":{"navigationLabel":"Apply Styles","order":8}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/arrow.mdx","fields":{"slug":"/docs/v2/modifiers/arrow/"},"frontmatter":{"navigationLabel":"Arrow","order":3}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/compute-styles.mdx","fields":{"slug":"/docs/v2/modifiers/compute-styles/"},"frontmatter":{"navigationLabel":"Compute Styles","order":6}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/event-listeners.mdx","fields":{"slug":"/docs/v2/modifiers/event-listeners/"},"frontmatter":{"navigationLabel":"Event Listeners","order":9}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/flip.mdx","fields":{"slug":"/docs/v2/modifiers/flip/"},"frontmatter":{"navigationLabel":"Flip","order":4}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/hide.mdx","fields":{"slug":"/docs/v2/modifiers/hide/"},"frontmatter":{"navigationLabel":"Hide","order":5}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/offset.mdx","fields":{"slug":"/docs/v2/modifiers/offset/"},"frontmatter":{"navigationLabel":"Offset","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/popper-offsets.mdx","fields":{"slug":"/docs/v2/modifiers/popper-offsets/"},"frontmatter":{"navigationLabel":"Popper Offsets","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/prevent-overflow.mdx","fields":{"slug":"/docs/v2/modifiers/prevent-overflow/"},"frontmatter":{"navigationLabel":"Prevent Overflow","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/utils/detect-overflow.mdx","fields":{"slug":"/docs/v2/utils/detect-overflow/"},"frontmatter":{"navigationLabel":"Detect Overflow","order":null}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/utils/index.mdx","fields":{"slug":"/docs/v2/utils/"},"frontmatter":{"navigationLabel":"Utils","order":5}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/index.mdx","fields":{"slug":"/docs/v2/modifiers/"},"frontmatter":{"navigationLabel":"Modifiers","order":4}}}]}}}')},vUvN:function(e,t,a){e.exports=a.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,a){"use strict";var n=a("P8UN"),o=a("Wadk")(6),r="findIndex",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),n(n.P+n.F*s,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-modifiers-arrow-mdx-3214ac7878bbe9b478ae.js.map