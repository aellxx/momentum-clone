"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5012,3761],{197:function(e,t,n){var r=n(24955),l=n.n(r)()("0I5D1ET0B7","f1ee785174a5a7d938f445f0c30ce97d");t.Z=l},3761:function(e,t,n){n.r(t);var r=n(85893);t.default=function(e){var t=e.children;return(0,r.jsx)("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8",children:t})}},69823:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(85893),l=n(41664),a=n(67294),s=n(3761),o=n(11163),i=function(e){var t=e.contents,n=(0,o.useRouter)().query,s=(0,a.useState)(null),i=s[0],c=s[1];return(0,a.useEffect)((function(){var e=t.findIndex((function(e){return e.slug==n.category}));-1!=e&&c(e)}),[n]),(0,r.jsx)("div",{className:"sticky top-0 hidden md:block",children:t.map((function(e,t){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{onClick:function(){return c((e=t)===i?null:e);var e},className:"  flex items-center justify-between hover:text-blue-500 dark:hover:text-white transition-colors  mb-2 cursor-pointer font-semibold ".concat(i===t||e.slug==n.category?"text-blue-500 dark:text-white":"text-gray-600 dark:text-gray-500"),children:[(0,r.jsx)("span",{children:e.title}),i===t?(0,r.jsx)("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}):(0,r.jsx)("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),i===t?(0,r.jsx)("div",{className:"ml-3",children:Object.keys(e.categories).map((function(t,a){return(0,r.jsxs)("div",{className:"my-3",children:[(0,r.jsx)("span",{className:"block mb-2 font-bold text-gray-700 dark:text-gray-500 text-sm",children:t},a),(0,r.jsx)("div",{className:"ml-2",children:e.categories[t].articles.map((function(t,a){return(0,r.jsx)(l.default,{href:"/faq/".concat(e.slug,"/").concat(null===t||void 0===t?void 0:t.slug),children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{className:"block mb-2 text-gray-500 dark:text-gray-400 hover:underline hover:text-blue-500 dark:hover:text-white ".concat((null===t||void 0===t?void 0:t.slug)===n.slug?"text-blue-500 dark:text-white":""),children:null===t||void 0===t?void 0:t.title},a)})},a)}))})]},a)}))}):null]},t)}))})},c=n(56843),d=n(34859),u=n(197),x=(0,n(47849).Z)((function(e){var t=e.hits,n=e.currentRefinement,a=e.refine,s=e.toggleSearch;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{zIndex:60,height:60},className:"relative top-0 max-w-screen-sm w-full flex items-center",children:[(0,r.jsx)("svg",{className:"w-6 h-6 absolute text-gray-400 left-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),(0,r.jsx)("input",{className:" w-full p-5 pl-14 rounded-md shadow-md focus:border-blue-500 focus:border-transparent focus:outline-none focus:ring-2 ring-offset-2 focus:ring-blue-500",type:"search",autoFocus:!0,value:n,onChange:function(e){return a(e.currentTarget.value)}})]}),t.length>0&&""!=n?(0,r.jsx)("div",{style:{marginTop:69,zIndex:60},className:"bg-white dark:bg-gray-700 dark:text-white h-screen max-w-screen-sm w-full pt-7 pb-10 overflow-y-scroll rounded-md flex flex-col absolute ",children:t.map((function(e,t){return(0,r.jsx)(l.default,{href:"/faq/".concat(e.categorySlug,"/").concat(e.articleSlug),children:(0,r.jsxs)("a",{onClick:function(){return s()},className:"mb-8 px-7 pb-7 border-b border-gray-300 dark:border-gray-500 cursor-pointer",children:[(0,r.jsx)("span",{className:"font-medium mb-3 block",children:e.title}),(0,r.jsxs)("p",{className:"text-gray-500 dark:text-gray-300",children:[e.contents.slice(0,120),"..."]}),(0,r.jsx)("span",{className:"text-blue-500 dark:text-blue-50 underline mt-4 block",children:"\ub354 \ubcf4\uae30"})]},e.objectID)},t)}))}):null]})}));function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(e){var t=e.children,n=e.breadcrumbs,o=e.sidebar,m=e.sidebarContents,h=(0,a.useState)(!1),p=h[0],g=h[1],v=function(){document.body.classList.toggle("overflow-hidden"),g((function(e){return!e}))},j=function(e){"Escape"!==e.key&&"Esc"!==e.key||p&&(document.body.classList.remove("overflow-hidden"),g(!1))};return(0,a.useEffect)((function(){return p?window.addEventListener("keydown",j):window.removeEventListener("keydown",j),function(){return window.removeEventListener("keydown",j)}}),[p]),(0,r.jsxs)(r.Fragment,{children:[p?(0,r.jsxs)("div",{className:"h-screen fixed w-full flex pt-8 md:pt-60 justify-center top-0 z-50",children:[(0,r.jsx)("div",{onClick:v,className:"h-screen w-full z-50 absolute bg-gray-800 bg-opacity-60 top-0 "}),(0,r.jsxs)(c.Z,{searchClient:u.Z,indexName:"faq",children:[(0,r.jsx)(d.Z,{hitsPerPage:15}),(0,r.jsx)(x,{toggleSearch:v})]})]}):null,(0,r.jsx)(s.default,{children:(0,r.jsxs)("div",{className:"pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28 pb-32",children:[(0,r.jsx)("h2",{className:"text-5xl text-center tracking-tight leading-tight font-semibold text-gray-900 dark:text-white sm:leading-none",children:"FAQ"}),(0,r.jsx)("p",{className:"mt-3 text-center text-base text-gray-500 dark:text-gray-300 sm:mt-3 sm:text-lg sm:mx-auto md:text-xl lg:mx-0",children:"\ub178\ub9c8\ub4dc\ucf54\ub354\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \uac83! \uad81\uae08\ud55c \uac83\uc774 \uc788\ub2e4\uba74 \uaf3c\uaf3c\ud788 \uc77d\uc5b4\ubd10\uc8fc\uc138\uc694!"})]})}),(0,r.jsx)("div",{className:"bg-gray-50 dark:bg-gray-900 py-7 pb-32",children:(0,r.jsx)(s.default,{children:(0,r.jsxs)("div",{className:"w-full ".concat(o?"md:grid-cols-4 grid gap-28":""),children:[o&&m?(0,r.jsx)(i,{contents:m}):null,(0,r.jsxs)("div",{className:"".concat(o?"col-span-3":"max-w-3xl w-full mx-auto"),children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[void 0===n?(0,r.jsx)("div",{}):(0,r.jsx)("div",{className:"flex items-center",children:function(){if(n){var e=[{title:"FAQ",slug:"/"}].concat(f(n));return e.map((function(t,n){return(0,r.jsx)(l.default,{href:"/faq".concat(t.slug),children:(0,r.jsx)("a",{children:(0,r.jsxs)("span",{className:"flex items-center text-sm hover:underline text-blue-500 dark:text-white leading-3",children:[(0,r.jsx)("span",{children:t.title})," ",n==e.length-1?null:(0,r.jsx)("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})})},n)}))}return null}()}),(0,r.jsxs)("span",{className:"md:flex hidden items-center text-blue-500 dark:text-white cursor-pointer",onClick:v,children:[(0,r.jsx)("svg",{className:"w-5 h-5 ",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),(0,r.jsx)("span",{className:"font-semibold text-sm ml-2",children:"Search"})]})]}),t]})]})})})]})}},95717:function(e,t,n){n.r(t);var r=n(85893),l=n(65988),a=n(5152),s=(0,a.default)((function(){return Promise.all([n.e(9019),n.e(9796),n.e(4025),n.e(6461)]).then(n.bind(n,16461))}),{loadableGenerated:{webpack:function(){return[16461]}}}),o=(0,a.default)((function(){return Promise.all([n.e(7112),n.e(2814),n.e(5295)]).then(n.bind(n,15295))}),{loadableGenerated:{webpack:function(){return[15295]}}});t.default=function(e){var t=e.children,n=e.showLinks,a=void 0===n||n,i=e.onlyLogo,c=void 0!==i&&i,d=e.showFooter,u=void 0===d||d,x=e.fixed,m=void 0===x||x;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{fixed:m,showLinks:a,onlyLogo:c}),t,u&&(0,r.jsx)(o,{}),(0,r.jsx)(l.default,{id:"5bfb2d1f17f541a8",children:"body{padding-top:64px}"})]})}},39425:function(e,t,n){var r=n(85893),l=n(9008);t.Z=function(e){var t=e.description,n=void 0===t?"":t,a=e.pageTitle,s=e.ogTitle,o=void 0===s?a:s,i=e.image,c=void 0===i?"graphDefault":i,d=(e.price,e.index,e.path);return(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:a}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:o}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://nomadcoders.co".concat(d)}),(0,r.jsx)("meta",{property:"og:image",content:"https://d1telmomo28umc.cloudfront.net/media/seo/".concat(c,".jpg")}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:site_name",content:"Nomad Coders"}),(0,r.jsx)("meta",{property:"og:locale",content:"ko_KR"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,r.jsx)("meta",{property:"og:image:height",content:"630"}),(0,r.jsx)("meta",{property:"fb:admins",content:"2366600330252017"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"twitter:title",content:o}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:c}),(0,r.jsx)("meta",{name:"naver-site-verification",content:"202966525a961e258ded0fcc0042857cea6d15f3"})]})}}}]);