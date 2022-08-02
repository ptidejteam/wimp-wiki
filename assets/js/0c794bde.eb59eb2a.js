"use strict";(self.webpackChunkexamples_classic=self.webpackChunkexamples_classic||[]).push([[993],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),y=o,h=m["".concat(s,".").concat(y)]||m[y]||c[y]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1357:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:8},i="Deploy your WIMP system",l={unversionedId:"deploy_wimp",id:"deploy_wimp",isDocsHomePage:!1,title:"Deploy your WIMP system",description:"This page will learn you how to deploy your WIMP system for your entity.",source:"@site/docs/deploy_wimp.md",sourceDirName:".",slug:"/deploy_wimp",permalink:"/wimp-wiki/docs/deploy_wimp",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/deploy_wimp.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Admin Guide",permalink:"/wimp-wiki/docs/admin/admin"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Deploy the Teacher/Admin part of the system",id:"deploy-the-teacheradmin-part-of-the-system",children:[]},{value:"Deploy the Student part of the system",id:"deploy-the-student-part-of-the-system",children:[]},{value:"Test the system",id:"test-the-system",children:[]}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-your-wimp-system"},"Deploy your WIMP system"),(0,o.kt)("p",null,"This page will learn you how to deploy your WIMP system for your entity."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To deploy you WIMP system, you will need at least two Raspeberry Pi or servers which can support Node-RED and ExpressAPI.\nThe network configuration of your system must look like the following schema : "),(0,o.kt)("h2",{id:"deploy-the-teacheradmin-part-of-the-system"},"Deploy the Teacher/Admin part of the system"),(0,o.kt)("p",null,"On your first Raspberry Pi (or server), if you have a firewall installed, then the first step is to add some new rules : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure that the port 8000 is open for ExpressAPI communication."),(0,o.kt)("li",{parentName:"ul"},"Ensure that the port 1880 is open for Node-RED communication."),(0,o.kt)("li",{parentName:"ul"},"Ensure that all the ports for the communications between your IoT devices and your Raspberry are open (for example, use a WeMo smart plug implies to open the port 9000).")),(0,o.kt)("p",null,"Once you have configured your firewall, you can now pull the Github project that corresponds to the Teacher/Admin part :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In order to pull the repository, you must ask to an admin for a Github access token."),(0,o.kt)("li",{parentName:"ul"},"Once you have your access token, you can simply pull the repository :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://<github-username>:<github-token>@github.com/ptidejteam/industry\n")),(0,o.kt)("p",null,"Now you can configure the uWSGI service for the Teacher/Admin part : "),(0,o.kt)("h2",{id:"deploy-the-student-part-of-the-system"},"Deploy the Student part of the system"),(0,o.kt)("p",null,"On your second Raspberry Pi (or server), if you have a firewall installed, then the first step is to add some new rules : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure that the port 3000 is open for ExpressAPI communication.")),(0,o.kt)("p",null,"Once you have configured your firewall, you can now pull the Github project that corresponds to the Student part :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In order to pull the repository, you must ask to an admin for a Github access token."),(0,o.kt)("li",{parentName:"ul"},"Once you have your access token, you can simply pull the repository :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://<github-username>:<github-token>@github.com/ptidejteam/wimp_webserver\n")),(0,o.kt)("p",null,"Now you need to configure the communication between the Student part and the Teacher/Admin part of the system : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file, replace the line :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NODE_RED_EXPRESS_HOST=localhost\n")),(0,o.kt)("p",null,"by :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NODE_RED_EXPRESS_HOST=**your_teacheradmin_part_raspberry_ip**\n")),(0,o.kt)("p",null,"Now you can configure the uWSGI service for the Teacher/Admin part : "),(0,o.kt)("h2",{id:"test-the-system"},"Test the system"))}u.isMDXComponent=!0}}]);