"use strict";(self.webpackChunkwhat_if=self.webpackChunkwhat_if||[]).push([[3249],{1275:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var a=n(6540),i=n(4164),r=n(1213),s=n(7559),l=n(7131),o=n(7465),c=n(2115),d=n(8774);const u={title:"title_xvU1"};var m=n(4848);function g(e){let{className:t}=e;const{metadata:n,isBlogPostPage:a}=(0,l.e)(),{permalink:r,title:s}=n,o=a?"h1":"h2";return(0,m.jsx)(o,{className:(0,i.A)(u.title,t),children:a?s:(0,m.jsx)(d.A,{to:r,children:s})})}var h=n(2264),f=n(9862);function x(){return(0,m.jsxs)("header",{children:[(0,m.jsx)(g,{}),(0,m.jsx)(h.A,{}),(0,m.jsx)(f.A,{})]})}var p=n(7197),v=n(4550);function b(){return a.useEffect((()=>{const e=document.createElement("script");return e.src="https://giscus.app/client.js",e.async=!0,e.setAttribute("data-repo","la-rebelion/what-if"),e.setAttribute("data-repo-id","R_kgDOL4igkw"),e.setAttribute("data-category","Conversations"),e.setAttribute("data-category-id","DIC_kwDOL4igk84CfT-Z"),e.setAttribute("data-mapping","title"),e.setAttribute("data-strict","0"),e.setAttribute("data-reactions-enabled","1"),e.setAttribute("data-emit-metadata","0"),e.setAttribute("data-input-position","bottom"),e.setAttribute("data-theme","light"),e.setAttribute("data-lang","en"),e.setAttribute("data-loading","lazy"),e.crossOrigin="anonymous",document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{class:"giscus",id:"giscus"})})}var j=n(1397),A=n(7614);function y(e){let{children:t,className:n}=e;const a=function(){const{isBlogPostPage:e}=(0,l.e)();return e?void 0:"margin-bottom--xl"}();return(0,m.jsxs)(c.A,{className:(0,i.A)(a,n),children:[(0,m.jsx)(x,{}),(0,m.jsx)(p.A,{children:t}),(0,m.jsx)(j.A,{inset:"none",orientation:"horizontal",sx:{my:2}}),(0,m.jsx)(A.A,{size:"lg",variant:"soft",color:"neutral",children:"Let us know your thoughts"}),(0,m.jsx)(b,{}),(0,m.jsx)(v.A,{})]})}var N=n(1312),w=n(9022);function k(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,N.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(w.A,{...n,subLabel:(0,m.jsx)(N.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,m.jsx)(w.A,{...t,subLabel:(0,m.jsx)(N.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function _(){const{assets:e,metadata:t}=(0,l.e)(),{title:n,description:a,date:i,tags:s,authors:o,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(r.be,{title:n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:i}),o.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")})]})}var L=n(5260),C=n(6676);function P(){const e=(0,C.J)();return(0,m.jsx)(L.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var H=n(3691),T=n(996);function I(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:i}=(0,l.e)(),{nextItem:r,prevItem:s,frontMatter:c,unlisted:d}=a,{hide_table_of_contents:u,toc_min_heading_level:g,toc_max_heading_level:h}=c;return(0,m.jsxs)(o.A,{sidebar:t,toc:!u&&i.length>0?(0,m.jsx)(H.A,{toc:i,minHeadingLevel:g,maxHeadingLevel:h}):void 0,children:[d&&(0,m.jsx)(T.A,{}),(0,m.jsx)(y,{children:n}),(r||s)&&(0,m.jsx)(k,{nextItem:r,prevItem:s})]})}function O(e){const t=e.content;return(0,m.jsx)(l.i,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(r.e3,{className:(0,i.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,m.jsx)(_,{}),(0,m.jsx)(P,{}),(0,m.jsx)(I,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},9022:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164),i=n(8774),r=n(4848);function s(e){const{permalink:t,title:n,subLabel:s,isNext:l}=e;return(0,r.jsxs)(i.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},3691:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(6540),i=n(4164),r=n(6342);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,a.useRef)(void 0),n=d();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:s}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),o=c(l,{anchorTopOffset:n.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(8774),g=n(4848);function h(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?(0,g.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,g.jsxs)("li",{children:[(0,g.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,g.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const f=a.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const h=(0,r.p)(),x=c??h.tableOfContents.minHeadingLevel,p=d??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>l({toc:s(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:x,maxHeadingLevel:p});return u((0,a.useMemo)((()=>{if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:x,maxHeadingLevel:p}}),[i,o,x,p])),(0,g.jsx)(f,{toc:v,className:n,linkClassName:i,...m})}const p={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},v="table-of-contents__link toc-highlight",b="table-of-contents__link--active";function j(e){let{className:t,...n}=e;return(0,g.jsx)("div",{className:(0,i.A)(p.tableOfContents,"thin-scrollbar",t),children:(0,g.jsx)(x,{...n,linkClassName:v,linkActiveClassName:b})})}},2053:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164),i=n(1312),r=n(6133);const s={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(4848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(s.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:s.tag,children:(0,l.jsx)(r.A,{label:t,permalink:n})},n)}))})]})}},996:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var a=n(4164),i=n(1312),r=n(5260),s=n(4848);function l(){return(0,s.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(r.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),u=n(7293);function m(e){let{className:t}=e;return(0,s.jsx)(u.A,{type:"caution",title:(0,s.jsx)(l,{}),className:(0,a.A)(t,d.G.common.unlistedBanner),children:(0,s.jsx)(o,{})})}function g(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(m,{...e})]})}},7131:(e,t,n)=>{n.d(t,{e:()=>o,i:()=>l});var a=n(6540),i=n(9532),r=n(4848);const s=a.createContext(null);function l(e){let{children:t,content:n,isBlogPostPage:i=!1}=e;const l=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:i});return(0,r.jsx)(s.Provider,{value:l,children:t})}function o(){const e=(0,a.useContext)(s);if(null===e)throw new i.dV("BlogPostProvider");return e}},6676:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>u});var a=n(6025),i=n(4586),r=n(6803);var s=n(7131);const l=e=>new Date(e).toISOString();function o(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,i.A)(),{withBaseUrl:n}=(0,a.h)(),{metadata:{blogDescription:r,blogTitle:s,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:s,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:r}=e,{date:s,title:d,description:u,lastUpdatedAt:m}=r,g=a.image??i.image,h=i.keywords??[],f=`${t.url}${r.permalink}`,x=m?l(m):void 0;return{"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:d,name:d,description:u,datePublished:s,...x?{dateModified:x}:{},...o(r.authors),...c(g,n,d),...h?{keywords:h}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,s.e)(),{siteConfig:d}=(0,i.A)(),{withBaseUrl:u}=(0,a.h)(),{date:m,title:g,description:h,frontMatter:f,lastUpdatedAt:x}=n,p=t.image??f.image,v=f.keywords??[],b=x?l(x):void 0,j=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:g,name:g,description:h,datePublished:m,...b?{dateModified:b}:{},...o(n.authors),...c(p,u,g),...v?{keywords:v}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},3465:(e,t,n)=>{n.d(t,{W:()=>c});var a=n(6540),i=n(4586);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const i=n.select(t),r=n.pluralForms.indexOf(i);return a[Math.min(r,a.length-1)]}(n,t,e)}}},7465:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(6540),i=n(6347),r=n(4164),s=n(1430),l=n(8256),o=n(7614),c=n(5878),d=n(5824),u=n(3539),m=n(6376),g=n(4812),h=n(4848);function f(e){let{children:t,reversed:n}=e;return(0,h.jsxs)(m.A,{sx:e=>({position:"relative",minHeight:"auto",display:"flex",flexDirection:n?"column-reverse":"column",alignItems:"center",py:10,gap:4,[e.breakpoints.up(834)]:{flexDirection:"row",gap:6},[e.breakpoints.up(1199)]:{gap:12}}),children:[(0,h.jsx)(u.A,{sx:e=>({display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",maxWidth:"50ch",textAlign:"center",flexShrink:999,[e.breakpoints.up(834)]:{minWidth:420,alignItems:"flex-start",textAlign:"initial"},[`& .${g.A.root}`]:{textWrap:"balance"}}),children:t}),(0,h.jsx)(d.A,{ratio:600/520,variant:"outlined",maxHeight:300,sx:e=>({minWidth:300,alignSelf:"stretch",[e.breakpoints.up(834)]:{alignSelf:"initial",flexGrow:1,"--AspectRatio-maxHeight":"520px","--AspectRatio-minHeight":"400px"},borderRadius:"sm",bgcolor:"background.level2",flexBasis:"50%"}),children:(0,h.jsx)("img",{src:"img/what-if-book.jpeg",alt:""})})]})}var x=n(1397),p=n(8e3),v=n(2370);function b(e){let{divider:t=!0}=e;return a.useEffect((()=>{const e=document.createElement("script");e.src="https://js.hsforms.net/forms/v2.js",document.body.appendChild(e),e.addEventListener("load",(()=>{window.hbspt&&window.hbspt.forms.create({region:"na1",portalId:"21339207",formId:"bc634838-af7c-412b-9b70-d2f1c617563e",target:"#hubspotForm"})}))}),[]),(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsx)(x.A,{inset:"none",orientation:"horizontal",sx:{my:2}}),(0,h.jsx)(u.A,{sx:{display:"flex",gap:1,my:2,alignSelf:"stretch",flexBasis:"80%",flexDirection:"column"},children:(0,h.jsxs)(p.A,{spacing:1,children:[(0,h.jsx)("div",{id:"hubspotForm",style:{margin:"auto"}}),(0,h.jsxs)(c.Ay,{fontSize:"xs",textColor:"text.secondary",children:["By continuing you agree to our"," ",(0,h.jsx)(v.A,{color:"neutral",children:(0,h.jsx)("b",{children:"Privacy Policy"})})]})]})})]})}function j(){return(0,h.jsxs)(f,{reversed:!0,children:[(0,h.jsx)(o.A,{size:"lg",variant:"outlined",color:"neutral",children:"What If In Alternative Reality"}),(0,h.jsx)(c.Ay,{level:"h1",fontWeight:"xl",fontSize:"clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",children:"From an anthology standpoint What-If"}),(0,h.jsx)(c.Ay,{fontSize:"lg",textColor:"text.secondary",lineHeight:"lg",children:"What-If the sci-fi and thriller best seller books teach us how would be the world if things were different. Welcome to the ultimate destination for tech professionals seeking to elevate their skills."}),(0,h.jsx)(b,{divider:!1})]})}function A(e){const{sidebar:t,toc:n,children:a,...o}=e,c=t&&t.items.length>0,d=(0,i.zy)();return(0,h.jsx)(s.A,{...o,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(l.A,{sidebar:t}),"/"===d.pathname&&(0,h.jsx)(j,{}),(0,h.jsxs)("main",{className:(0,r.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),children:[a,"/"!==d.pathname&&(0,h.jsx)(b,{})]}),n&&(0,h.jsx)("div",{className:"col col--2",children:n})]})})})}},2115:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4848);function i(e){let{children:t,className:n}=e;return(0,a.jsx)("article",{className:n,children:t})}},7197:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164),i=n(440),r=n(7131),s=n(1544),l=n(4848);function o(e){let{children:t,className:n}=e;const{isBlogPostPage:o}=(0,r.e)();return(0,l.jsx)("div",{id:o?i.blogPostContainerID:void 0,className:(0,a.A)("markdown",n),children:(0,l.jsx)(s.A,{children:t})})}},4550:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var a=n(4164),i=n(7131),r=n(7559),s=n(4336),l=n(2053),o=n(1312),c=n(8774),d=n(4848);function u(){return(0,d.jsx)("b",{children:(0,d.jsx)(o.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function m(e){const{blogPostTitle:t,...n}=e;return(0,d.jsx)(c.A,{"aria-label":(0,o.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,d.jsx)(u,{})})}function g(){const{metadata:e,isBlogPostPage:t}=(0,i.e)(),{tags:n,title:o,editUrl:c,hasTruncateMarker:u,lastUpdatedBy:g,lastUpdatedAt:h}=e,f=!t&&u,x=n.length>0;if(!(x||f||c))return null;if(t){const e=!!(c||h||g);return(0,d.jsxs)("footer",{className:"docusaurus-mt-lg",children:[x&&(0,d.jsx)("div",{className:(0,a.A)("row","margin-top--sm",r.G.blog.blogFooterEditMetaRow),children:(0,d.jsx)("div",{className:"col",children:(0,d.jsx)(l.A,{tags:n})})}),e&&(0,d.jsx)(s.A,{className:(0,a.A)("margin-top--sm",r.G.blog.blogFooterEditMetaRow),editUrl:c,lastUpdatedAt:h,lastUpdatedBy:g})]})}return(0,d.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[x&&(0,d.jsx)("div",{className:(0,a.A)("col",{"col--9":f}),children:(0,d.jsx)(l.A,{tags:n})}),f&&(0,d.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":x}),children:(0,d.jsx)(m,{blogPostTitle:o,to:e.permalink})})]})}},9862:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var a=n(4164),i=n(7131),r=n(8774),s=n(4848);function l(e){return e.href?(0,s.jsx)(r.A,{...e}):(0,s.jsx)(s.Fragment,{children:e.children})}function o(e){let{author:t,className:n}=e;const{name:i,title:r,url:o,imageURL:c,email:d}=t,u=o||d&&`mailto:${d}`||void 0;return(0,s.jsxs)("div",{className:(0,a.A)("avatar margin-bottom--sm",n),children:[c&&(0,s.jsx)(l,{href:u,className:"avatar__photo-link",children:(0,s.jsx)("img",{className:"avatar__photo",src:c,alt:i})}),i&&(0,s.jsxs)("div",{className:"avatar__intro",children:[(0,s.jsx)("div",{className:"avatar__name",children:(0,s.jsx)(l,{href:u,children:(0,s.jsx)("span",{children:i})})}),r&&(0,s.jsx)("small",{className:"avatar__subtitle",children:r})]})]})}const c={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function d(e){let{className:t}=e;const{metadata:{authors:n},assets:r}=(0,i.e)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t}));return(0,s.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",l?c.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,s.jsx)("div",{className:(0,a.A)(!l&&"col col--6",l?c.imageOnlyAuthorCol:c.authorCol),children:(0,s.jsx)(o,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}},2264:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var a=n(4164),i=n(1312),r=n(3465),s=n(7131),l=n(6266);const o={container:"container_iJTo"};var c=n(4848);function d(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,r.W)();return t=>{const n=Math.ceil(t);return e(n,(0,i.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,c.jsx)(c.Fragment,{children:n(t)})}function u(e){let{date:t,formattedDate:n}=e;return(0,c.jsx)("time",{dateTime:t,children:n})}function m(){return(0,c.jsx)(c.Fragment,{children:" \xb7 "})}function g(e){let{className:t}=e;const{metadata:n}=(0,s.e)(),{date:i,readingTime:r}=n,g=(0,l.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,c.jsxs)("div",{className:(0,a.A)(o.container,"margin-vert--md",t),children:[(0,c.jsx)(u,{date:i,formattedDate:(h=i,g.format(new Date(h)))}),void 0!==r&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{}),(0,c.jsx)(d,{readingTime:r})]})]});var h}}}]);