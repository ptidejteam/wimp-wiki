"use strict";(self.webpackChunkexamples_classic=self.webpackChunkexamples_classic||[]).push([[861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2469:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="Backend Introduction",c={unversionedId:"backend/intro",id:"backend/intro",isDocsHomePage:!1,title:"Backend Introduction",description:"The principle of this backend is :",source:"@site/docs/backend/intro.md",sourceDirName:"backend",slug:"/backend/intro",permalink:"/wimp-wiki/docs/backend/intro",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/backend/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"front-backend",permalink:"/wimp-wiki/docs/backend/front-backend"},next:{title:"Backend Node-RED",permalink:"/wimp-wiki/docs/backend/node-red"}},l=[],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backend-introduction"},"Backend Introduction"),(0,o.kt)("p",null,"The principle of this backend is :"),(0,o.kt)("p",null,"A red node server is used to process the information received from the different devices.\nThis server will be embedded in a Express.js server which will have 3 uses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Serve as a firewall for the access to node-red"),(0,o.kt)("li",{parentName:"ul"},"to make an API REST endpoint"),(0,o.kt)("li",{parentName:"ul"},"to host the Admin part")),(0,o.kt)("p",null,"this backend is separated in 2 sub parts : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the front-backend which will manage the Admin part via web pages, the backend end will then be coresponding to a classic web server"),(0,o.kt)("li",{parentName:"ul"},"the backend which will contain the node-red part ")),(0,o.kt)("p",null,"the two parts being linked thanks to the express.js server"))}p.isMDXComponent=!0}}]);