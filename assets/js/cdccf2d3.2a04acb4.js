"use strict";(self.webpackChunkexamples_classic=self.webpackChunkexamples_classic||[]).push([[325],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),b=c(a),p=s,m=b["".concat(l,".").concat(p)]||b[p]||u[p]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function p(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},7759:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(7462),s=(a(7294),a(3905));const r={},o=void 0,i={unversionedId:"backend/front-backend",id:"backend/front-backend",isDocsHomePage:!1,title:"front-backend",description:"As seen in backend/back-backend the server transforms data received from node-red into displayable data (color, text).",source:"@site/docs/backend/front-backend.md",sourceDirName:"backend",slug:"/backend/front-backend",permalink:"/wimp-wiki/docs/backend/front-backend",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/backend/front-backend.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"back-backend",permalink:"/wimp-wiki/docs/backend/back-backend"},next:{title:"Backend Introduction",permalink:"/wimp-wiki/docs/backend/intro"}},l=[{value:"Les besoins:",id:"les-besoins",children:[{value:"to be able to match a specific message to a certain state",id:"to-be-able-to-match-a-specific-message-to-a-certain-state",children:[]},{value:"to be able to manage the visibility of the messages according to the students",id:"to-be-able-to-manage-the-visibility-of-the-messages-according-to-the-students",children:[]},{value:"to be able to deactivate its presence on the site",id:"to-be-able-to-deactivate-its-presence-on-the-site",children:[]}]},{value:"login/security",id:"loginsecurity",children:[]},{value:"?",id:"",children:[]}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As seen in backend/back-backend the server transforms data received from node-red into displayable data (color, text).\nTo do this the server matches the raw data to the sentence and color that the teacher has chosen. "),(0,s.kt)("p",null,'Example :\nnode-red side -> when my plug is connected I generate the availability status 1\nexpress side -> for me the state 1 corresponds to "I am available" in green '),(0,s.kt)("p",null,"However, to do this, express must retrieve its own information from a database, so the front-backend graphical interface is necessary to allow teachers to modify their messages, add states, change the color of some messages etc..."),(0,s.kt)("h2",{id:"les-besoins"},"Les besoins:"),(0,s.kt)("p",null,"After discussions we have established 3 needs:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"to be able to match a specific message to a certain state "),(0,s.kt)("li",{parentName:"ul"},"to be able to manage the visibility of the messages according to the students"),(0,s.kt)("li",{parentName:"ul"},'to be able to deactivate its presence on the site (to be in an "undifined" state no matter what information the devices have)')),(0,s.kt)("h3",{id:"to-be-able-to-match-a-specific-message-to-a-certain-state"},"to be able to match a specific message to a certain state"),(0,s.kt)("p",null,"Chaque etat brute renvoy\xe9 par node-red doit avoir un corespondance propre constitu\xe9 d'un message et d'une coleur d'affichage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// database/staff.json\n"id professeur": {\n    ...\n    "states": {\n        "1": {\n            "msg": "in his office but busy",\n            "color": "orange",\n        },\n        ...\n    }\n} \n')),(0,s.kt)("p",null,"On the site :\n",(0,s.kt)("img",{alt:"alt text",src:a(18).Z})),(0,s.kt)("h3",{id:"to-be-able-to-manage-the-visibility-of-the-messages-according-to-the-students"},"to be able to manage the visibility of the messages according to the students"),(0,s.kt)("p",null,"Every teacher to want to limit some message only to the 'researcher' for example. To do this a chmaps has been added to filter this. If a grade is set to false then that grade will see a default message instead of the true message."),(0,s.kt)("p",null,"this default message is related to the colors, if the color of the real message is red it must mean that the teacher is not available. The real message will be ",(0,s.kt)("em",{parentName:"p"},"'In meeting with the director'")," in red, the default message will then be the one in the field ",(0,s.kt)("inlineCode",{parentName:"p"},'"unavailable":')," which could be ",(0,s.kt)("em",{parentName:"p"},"'not available'"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// database/staff.json\n"id professeur": {\n    ...\n    "states": {\n        "1": {\n            "msg": "in his office but busy",\n            "color": "orange",\n            "visibility": { // <--- \n                "student": false,\n                "researcher": true,\n                "colleague": true\n            }\n        },\n        ...\n    },\n\n    "default": { // <--- \n            "available": "I\'m available !",\n            "busy": "I\'m busy !",\n            "unavailable": "I\'m unavailable !"\n    }\n}\n\n')),(0,s.kt)("p",null,"On the site :\n",(0,s.kt)("img",{alt:"alt text",src:a(9963).Z}),"\n",(0,s.kt)("img",{alt:"alt text",src:a(4748).Z})),(0,s.kt)("h3",{id:"to-be-able-to-deactivate-its-presence-on-the-site"},"to be able to deactivate its presence on the site"),(0,s.kt)("p",null,'It should also be possible to completely deactivate everything in order not to be "traced" anymore. For this purpose a field ',(0,s.kt)("inlineCode",{parentName:"p"},'"tracking":')," has been set up "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// database/staff.json\n"id professeur": {\n    ...\n    "states": {\n        "1": {\n            "msg": "in his office but busy",\n            "color": "orange",\n            "visibility": { \n                "student": false,\n                "researcher": true,\n                "colleague": true\n            }\n        },\n        ...\n    },\n\n    "default": {  \n            "available": "I\'m available !",\n            "busy": "I\'m busy !",\n            "unavailable": "I\'m unavailable !"\n    },\n    "tracking": "ON" // <---\n}\n')),(0,s.kt)("p",null,"On the site :\n",(0,s.kt)("img",{alt:"alt text",src:a(9703).Z})),(0,s.kt)("h2",{id:"loginsecurity"},"login/security"),(0,s.kt)("p",null,"A login/password system has been set up to secure the data."),(0,s.kt)("p",null,"This connection is managed with passport.js (same system as in fontend)"),(0,s.kt)("p",null,"the database storing the login/password in ",(0,s.kt)("inlineCode",{parentName:"p"},"/database/db_acc.json"),"\nand looks like :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id professeur 1 (username)" : "5868",\n    "id professeur 2" : "5868",\n    ...\n}\n')),(0,s.kt)("h2",{id:""},"?"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," Why no registration pages? "),"\nbecause the professor are theorically already in the concordia database."))}d.isMDXComponent=!0},4748:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/default-03fdb57a4d7cf929878007e7dc780b7a.png"},18:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/input1-d7f41a7f2ceaa0d3ffbdfbb36b7f48b2.png"},9963:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/input2-b9ac6861874a8eb9d9e041febc135aca.png"},9703:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tracker-41ef7570183f3f1bd3b2b85a72f94819.png"}}]);