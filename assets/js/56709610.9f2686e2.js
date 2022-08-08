"use strict";(self.webpackChunkexamples_classic=self.webpackChunkexamples_classic||[]).push([[962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8036:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={},s="Backend Node-RED",i={unversionedId:"backend/node-red",id:"backend/node-red",isDocsHomePage:!1,title:"Backend Node-RED",description:"Node red is the core technology of this backend. It allows to create flows (a set of nodes linked together) to perform processing.",source:"@site/docs/backend/4-node-red.md",sourceDirName:"backend",slug:"/backend/node-red",permalink:"/wimp-wiki/docs/backend/node-red",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/backend/4-node-red.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Back-Backend",permalink:"/wimp-wiki/docs/backend/back-backend"},next:{title:"Teacher Guide",permalink:"/wimp-wiki/docs/teacher/teacher"}},l=[{value:"The base",id:"the-base",children:[{value:"the Nodes",id:"the-nodes",children:[]},{value:"The subflows",id:"the-subflows",children:[]}]},{value:"Our case",id:"our-case",children:[]},{value:"teacher&#39;s sub-flow :",id:"teachers-sub-flow-",children:[]},{value:"Main flow :",id:"main-flow-",children:[]}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backend-node-red"},"Backend Node-RED"),(0,o.kt)("p",null,"Node red is the core technology of this backend. It allows to create flows (a set of nodes linked together) to perform processing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Exemple de flow",src:a(7601).Z})),(0,o.kt)("h2",{id:"the-base"},"The base"),(0,o.kt)("h3",{id:"the-nodes"},"the Nodes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," /!\\ Here are only simplified explanations in order to give some explanation to understand the rest. ",(0,o.kt)("a",{parentName:"strong",href:"https://nodered.org/docs/"},"To know more about the functioning of node-red")," ")),(0,o.kt)("p",null,"Node-red works with a graph system: each intelligent part is a node that will perform a processing on the data it receives as input and return data as output.\nThe data transmitted in the graph are called messages and are jsavascript objects. The information is usually found in message.payload. Here is an example of a message.payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_msgid": "12345",\n    "payload": {\n        "Status of the LED" : 1,\n        "Temperature" : "34\xb0C"\n    }\n}\n\n')),(0,o.kt)("p",null,"Each node is actually a javascript package that can have dependencies. Some of them are already implemented in node-red but it is possible to download them or to create them by yourself (like the database management neud that we have realized)\nTo make the analogy with classical programming, the nodes are simply functions and the flow is the main.js."),(0,o.kt)("h3",{id:"the-subflows"},"The subflows"),(0,o.kt)("p",null,"The flow can be transformed into nodes by creating sub flows. We create a flow for a certain task but instead of copying and pasting this flow every time we want to use it, we put it in a node that can be more easily implemented later. To make the analogy with classical programming, it would be a module."),(0,o.kt)("h2",{id:"our-case"},"Our case"),(0,o.kt)("p",null,"We use node-red as the processing center for all information received by the smart devices.No data processing is done in the server.\nThe main flow will be an api rest accessible by the server with the /api.\nGlobal Pricipe :\n",(0,o.kt)("img",{src:a(3966).Z})),(0,o.kt)("p",null,"Each teacher will have a sub-flow in which he will collect the information from his devices, process them as he wants in order to return his state."),(0,o.kt)("h2",{id:"teachers-sub-flow-"},"teacher's sub-flow :"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"input"),"\nthe subflow must have 1 input that will be used to trigger the subflow when there is a call to /api/state.\nHowever, inside the subflow the teacher can put inputs to receive information from his devices (like an mqtt, http... input)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"output"),"\nEach teacher's sub-flow must return their status in the form of a .payload message coded to look like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_msgid": "12345",\n    "payload": {\n        "professeurID" : 12,\n        "state" : 1\n    }\n}\n')),(0,o.kt)("p",null,"Each teacher can have as many states as they want. He will be able to assign to this status a corresponding message on his profile page (see back-frontend)"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2103).Z})),(0,o.kt)("h2",{id:"main-flow-"},"Main flow :"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"input")," To trigger the calculation of the states at each /api/state"),(0,o.kt)("p",null,"After starting the calculation of the states, the flow gathers them to put them in a message to be sent as a reply. ",(0,o.kt)("strong",{parentName:"p"},"Since the message is sent once the calculation of the state by each subflow, a 'TimeOut' node should be implemnted to avoid that a subflow of a teacher too slow slows down all the other flows"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"output")," A .json that coressponding to all the states of all the teachers of the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "professor1" : 1,\n    "professeur2" : 22,\n    "professeur3" : 0,\n    ...\n}\n')))}d.isMDXComponent=!0},3966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mainFlow-410aac9a5c20219d6b6d91fda2a70738.png"},7601:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/showcase-flow-45577bf4f2692f747b74889325adc94e.png"},2103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subflow-77a1db8b0a407c1357051411c34aa5d9.png"}}]);