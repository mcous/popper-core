(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{qD2Y:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return b}));t("E5k/"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("q1tI");var n=t("7ljp"),c=t("7oih");t("qKvR");function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o={},p={_frontmatter:o},r=c.a;function b(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,["components"]);return Object(n.b)(r,s({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"tree-shaking",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h1"},{href:"#tree-shaking","aria-label":"tree shaking permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Tree-shaking"),Object(n.b)("p",null,"While Popper v2 saw a sizeable decrease in bundle size from v1 (-2 kB from ~7 kB\nminzipped to ~5 kB minzipped), this is still not optimal."),Object(n.b)("p",null,'Popper addresses a lot of use cases and complexity, but to help keep consumers\'\nbundle sizes small, we made the library tree-shakable. "Tree-shaking" is the\nprocess of eliminating unused code from your bundles, which is achieved by\nbundlers such as webpack, Rollup and Parcel.'),Object(n.b)("p",null,"If you're using the CDN, tree-shaking will not be available."),Object(n.b)("h2",{id:"popper-lite",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#popper-lite","aria-label":"popper lite permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Popper Lite"),Object(n.b)("p",null,"The most straightforward way to enable tree-shaking is to use Popper Lite and\nconfigure it with your needs."),Object(n.b)("p",null,"Instead of:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ❌ Imports all of Popper!"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{")," createPopper ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'@popperjs/core'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"Use:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ✅"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{")," createPopper ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/popper-lite'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"Popper Lite only comes with the following modifiers:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"popperOffsets")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"computeStyles")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"applyStyles")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"eventListeners"))),Object(n.b)("p",null,"This effectively achieves the bare minimum functionality, and is around 3 kB\nminzipped. If 3 kB is still too much for your application, we recommend trying\nout CSS tooltip alternatives which are as tiny as 1 kB. Please note that such\nlibraries have many disadvantages that Popper doesn't, so assess the trade-offs\nwhere necessary."),Object(n.b)("p",null,"Now, you'll need to add the modifiers you need. These are accessible under the\n",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"@popperjs/core/lib/modifiers/")," directory."),Object(n.b)("p",null,"Generally, we recommend ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"flip")," and ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"preventOverflow")," since these are the most\nattractive reasons for using Popper in the first place:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{")," createPopper ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/popper-lite'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"import")," flip ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/flip'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"import")," preventOverflow ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/preventOverflow'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  modifiers",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),"flip",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," preventOverflow",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h3",{id:"popper-generator",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h3"},{href:"#popper-generator","aria-label":"popper generator permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Popper Generator"),Object(n.b)("p",null,"To pass these extra modifiers as default, you can use the ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"popperGenerator"),"\nfunction:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  popperGenerator",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  defaultModifiers",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/popper-lite'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"import")," flip ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/flip'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"import")," preventOverflow ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/preventOverflow'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," createPopper ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"popperGenerator"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  defaultModifiers",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"..."),"defaultModifiers",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," flip",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," preventOverflow",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// Now you can use `createPopper`")))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-tree-shaking-mdx-1037a1fe7d052638d059.js.map