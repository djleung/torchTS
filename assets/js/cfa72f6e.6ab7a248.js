(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[364],{3905:function(a,e,s){"use strict";s.d(e,{Zo:function(){return i},kt:function(){return o}});var t=s(7294);function n(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}function m(a,e){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.push.apply(s,t)}return s}function p(a){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?m(Object(s),!0).forEach((function(e){n(a,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(s,e))}))}return a}function r(a,e){if(null==a)return{};var s,t,n=function(a,e){if(null==a)return{};var s,t,n={},m=Object.keys(a);for(t=0;t<m.length;t++)s=m[t],e.indexOf(s)>=0||(n[s]=a[s]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(t=0;t<m.length;t++)s=m[t],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(a,s)&&(n[s]=a[s])}return n}var l=t.createContext({}),N=function(a){var e=t.useContext(l),s=e;return a&&(s="function"==typeof a?a(e):p(p({},e),a)),s},i=function(a){var e=N(a.components);return t.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},k=t.forwardRef((function(a,e){var s=a.components,n=a.mdxType,m=a.originalType,l=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),k=N(s),o=n,h=k["".concat(l,".").concat(o)]||k[o]||c[o]||m;return s?t.createElement(h,p(p({ref:e},i),{},{components:s})):t.createElement(h,p({ref:e},i))}));function o(a,e){var s=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=s.length,p=new Array(m);p[0]=k;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:n,p[1]=r;for(var N=2;N<m;N++)p[N]=s[N];return t.createElement.apply(null,p)}return t.createElement.apply(null,s)}k.displayName="MDXCreateElement"},5041:function(a,e,s){"use strict";s.r(e),s.d(e,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return N},toc:function(){return i},default:function(){return k}});var t=s(2122),n=s(9756),m=(s(7294),s(3905)),p=["components"],r={title:"Diffusion Convolutional LSTM",slug:"/diffusion-convolutional-lstm"},l=void 0,N={unversionedId:"deep-spatiotemporal-models/diffusion-convolutional-lstm",id:"deep-spatiotemporal-models/diffusion-convolutional-lstm",isDocsHomePage:!1,title:"Diffusion Convolutional LSTM",description:"In spatiotemporal forecasting, assume we have multiple time series generated from a fixed space $x(s,t)$. Diffusion Convolutional LSTM models the time series on an irregular grid (graph) as a diffusion process.",source:"@site/docs/deep-spatiotemporal-models/diffusion-convolutional-lstm.md",sourceDirName:"deep-spatiotemporal-models",slug:"/diffusion-convolutional-lstm",permalink:"/torchTS/docs/diffusion-convolutional-lstm",editUrl:"https://github.com/Rose-STL-Lab/torchTS/edit/main/website/docs/deep-spatiotemporal-models/diffusion-convolutional-lstm.md",version:"current",lastUpdatedBy:"Kevin Lane",lastUpdatedAt:1632583678,formattedLastUpdatedAt:"9/25/2021",frontMatter:{title:"Diffusion Convolutional LSTM",slug:"/diffusion-convolutional-lstm"},sidebar:"tutorialSidebar",previous:{title:"Convolutional LSTM",permalink:"/torchTS/docs/convolutional-lstm"},next:{title:"AutoODE",permalink:"/torchTS/docs/autoode"}},i=[],c={toc:i};function k(a){var e=a.components,s=(0,n.Z)(a,p);return(0,m.kt)("wrapper",(0,t.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"In spatiotemporal forecasting, assume we have multiple time series generated from a fixed space ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x(s,t)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),". ",(0,m.kt)("a",{parentName:"p",href:"https://openreview.net/pdf?id=SJiHXGWAZ"},"Diffusion Convolutional LSTM")," models the time series on an irregular grid (graph) as a diffusion process."),(0,m.kt)("p",null,"Diffusion Convolutional LSTM replaces the matrix multiplication in a regular LSTM with diffusion convolution. It determines the future state of a certain cell in the graph by the inputs and past states of its local neighbors:"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"["),(0,m.kt)("mtable",{parentName:"mrow",rowspacing:"0.15999999999999992em",columnspacing:"1em"},(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("msub",{parentName:"mstyle"},(0,m.kt)("mi",{parentName:"msub"},"i"),(0,m.kt)("mi",{parentName:"msub"},"t"))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("msub",{parentName:"mstyle"},(0,m.kt)("mi",{parentName:"msub"},"f"),(0,m.kt)("mi",{parentName:"msub"},"t"))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("msub",{parentName:"mstyle"},(0,m.kt)("mi",{parentName:"msub"},"o"),(0,m.kt)("mi",{parentName:"msub"},"t")))))),(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"]")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"\u03c3"),(0,m.kt)("mo",{parentName:"mrow",fence:"false"},"("),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"W"),(0,m.kt)("mi",{parentName:"msup"},"x")),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msub"},"\u22c6"),(0,m.kt)("mi",{parentName:"msub"},"g")),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mi",{parentName:"msub"},"t")),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"W"),(0,m.kt)("mi",{parentName:"msup"},"h")),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msub"},"\u22c6"),(0,m.kt)("mi",{parentName:"msub"},"g")),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"h"),(0,m.kt)("mrow",{parentName:"msub"},(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1"))),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"W"),(0,m.kt)("mi",{parentName:"msup"},"c")),(0,m.kt)("mo",{parentName:"mrow"},"\u2218"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"c"),(0,m.kt)("mrow",{parentName:"msub"},(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1"))),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mo",{parentName:"mrow",fence:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\begin{bmatrix} i_t \\\\ f_t \\\\ o_t \\end{bmatrix} = \\sigma\\big(W^{x} \\star_g x_t + W^h \\star_g h_{t-1} + W^c \\circ c_{t-1} + b\\big)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"3.6010299999999997em",verticalAlign:"-1.55002em"}}),(0,m.kt)("span",{parentName:"span",className:"minner"},(0,m.kt)("span",{parentName:"span",className:"mopen"},(0,m.kt)("span",{parentName:"span",className:"delimsizing mult"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.0510099999999998em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.2500000000000004em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.1550000000000002em"}}),(0,m.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,m.kt)("span",{parentName:"span"},"\u23a3"))),(0,m.kt)("span",{parentName:"span",style:{top:"-2.8099900000000004em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.1550000000000002em"}}),(0,m.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,m.kt)("span",{parentName:"span"},"\u23a2"))),(0,m.kt)("span",{parentName:"span",style:{top:"-4.05101em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.1550000000000002em"}}),(0,m.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,m.kt)("span",{parentName:"span"},"\u23a1")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.55002em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mtable"},(0,m.kt)("span",{parentName:"span",className:"col-align-c"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.05em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-4.21em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2805559999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.0099999999999993em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2805559999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.10764em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))))),(0,m.kt)("span",{parentName:"span",style:{top:"-1.8099999999999994em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2805559999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"}))))))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.5500000000000007em"}},(0,m.kt)("span",{parentName:"span"}))))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},(0,m.kt)("span",{parentName:"span",className:"delimsizing mult"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.0510099999999998em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.2500000000000004em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.1550000000000002em"}}),(0,m.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,m.kt)("span",{parentName:"span"},"\u23a6"))),(0,m.kt)("span",{parentName:"span",style:{top:"-2.8099900000000004em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.1550000000000002em"}}),(0,m.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,m.kt)("span",{parentName:"span"},"\u23a5"))),(0,m.kt)("span",{parentName:"span",style:{top:"-4.05101em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.1550000000000002em"}}),(0,m.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,m.kt)("span",{parentName:"span"},"\u23a4")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.55002em"}},(0,m.kt)("span",{parentName:"span"}))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.20001em",verticalAlign:"-0.35001em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c3"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"delimsizing size1"},"(")),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7143919999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u22c6"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15139200000000003em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"g")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.286108em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.73333em",verticalAlign:"-0.15em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2805559999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1852159999999998em",verticalAlign:"-0.286108em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8991079999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h")))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u22c6"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15139200000000003em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"g")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.286108em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.902771em",verticalAlign:"-0.208331em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.301108em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,m.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.208331em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7143919999999999em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7143919999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"c")))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2218"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.791661em",verticalAlign:"-0.208331em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.301108em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,m.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.208331em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.20001em",verticalAlign:"-0.35001em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"delimsizing size1"},")"))))))),(0,m.kt)("p",null,"where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"W"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msub"},"\u22c6"),(0,m.kt)("mi",{parentName:"msub"},"g")),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("msubsup",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msubsup"},"\u2211"),(0,m.kt)("mrow",{parentName:"msubsup"},(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("mi",{parentName:"msubsup"},"k")),(0,m.kt)("mo",{parentName:"mrow",fence:"false"},"("),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"D"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1"))),(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msup",fence:"false"},")"),(0,m.kt)("mi",{parentName:"msup"},"i")),(0,m.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,m.kt)("mi",{parentName:"mrow"},"W"),(0,m.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"W \\star_g x = \\sum_{i=1}^k \\big(D^{-1}A\\big)^i \\cdot W \\cdot x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.969438em",verticalAlign:"-0.286108em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u22c6"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15139200000000003em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"g")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.286108em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.4145739999999998em",verticalAlign:"-0.35001em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"-0.0000050000000000050004em"}},"\u2211"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9890079999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.40029em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,m.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.2029em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.29971000000000003em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"delimsizing size1"},"(")),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"delimsizing size1"},")")),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.0645639999999998em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.3029em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," is the diffusion convolution."))}k.isMDXComponent=!0}}]);