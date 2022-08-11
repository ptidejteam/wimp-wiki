"use strict";(self.webpackChunkexamples_classic=self.webpackChunkexamples_classic||[]).push([[954],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=o,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4296:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:2},i="Node-RED",s={unversionedId:"backend/node-red",id:"backend/node-red",isDocsHomePage:!1,title:"Node-RED",description:"Node red is the core technology of this backend. It allows to create flows (a set of nodes linked together) to perform processing.",source:"@site/docs/backend/node-red.md",sourceDirName:"backend",slug:"/backend/node-red",permalink:"/wimp-wiki/docs/backend/node-red",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/backend/node-red.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/wimp-wiki/docs/backend/intro"},next:{title:"Back-Backend",permalink:"/wimp-wiki/docs/backend/back-backend"}},l=[{value:"Basics",id:"basics",children:[{value:"The Nodes",id:"the-nodes",children:[]},{value:"The subflows",id:"the-subflows",children:[]}]},{value:"Our case",id:"our-case",children:[]},{value:"Teacher&#39;s subflow",id:"teachers-subflow",children:[]},{value:"Main flow",id:"main-flow",children:[]},{value:"Add a new Teacher Flow",id:"add-a-new-teacher-flow",children:[]}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-red"},"Node-RED"),(0,o.kt)("p",null,"Node red is the core technology of this backend. It allows to create flows (a set of nodes linked together) to perform processing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example of Node-RED flow",src:a(7601).Z})),(0,o.kt)("h2",{id:"basics"},"Basics"),(0,o.kt)("h3",{id:"the-nodes"},"The Nodes"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Here are only simplified explanations in order to give some guidelines to understand the rest. ",(0,o.kt)("a",{parentName:"p",href:"https://nodered.org/docs/"},"To know more about the functioning of node-red")))),(0,o.kt)("p",null,"Node-red works with a graph system: each intelligent part is a node that will perform a processing on the data it receives as input and return data as output.\nThe data transmitted in the graph are called messages and are jsavascript objects. The information is usually found in message.payload. Here is an example of a message.payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_msgid": "12345",\n    "payload": {\n        "Status of the LED" : 1,\n        "Temperature" : "34\xb0C"\n    }\n}\n')),(0,o.kt)("p",null,"Each node is actually a javascript package that can have dependencies. Some of them are already implemented in node-red but it is possible to download them or to create them by yourself (like the database management neud that we have realized)\nTo make the analogy with classical programming, the nodes are simply functions and the flow is the main.js."),(0,o.kt)("h3",{id:"the-subflows"},"The subflows"),(0,o.kt)("p",null,"The flow can be transformed into nodes by creating sub flows. We create a flow for a certain task but instead of copying and pasting this flow every time we want to use it, we put it in a node that can be more easily implemented later. To make the analogy with classical programming, it would be a module."),(0,o.kt)("h2",{id:"our-case"},"Our case"),(0,o.kt)("p",null,"We use node-red as the processing center for all information received by the smart devices.No data processing is done in the server.\nThe main flow will be an api rest accessible by the server with the /api.\nGlobal Principle :\n",(0,o.kt)("img",{alt:"Global Principle of the Main Flow",src:a(3966).Z})),(0,o.kt)("p",null,"Each teacher will have a sub-flow in which he will collect the information from his devices, process them as he wants in order to return his state."),(0,o.kt)("h2",{id:"teachers-subflow"},"Teacher's subflow"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Input")),(0,o.kt)("p",null,"The subflow must have 1 input that will be used to trigger the subflow when there is a call to /api/state.\nHowever, inside the subflow the teacher can put inputs to receive information from his devices (like an mqtt, http... input)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output")),(0,o.kt)("p",null,"Each teacher's sub-flow must return their status in the form of a .payload message coded to look like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_msgid": "12345",\n    "payload": {\n        "fianl": {\n            "professeurID" : 12,\n            "state" : 1\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Each teacher can have as many states as they want. He will be able to assign to this status a corresponding message on his profile page, see this ",(0,o.kt)("a",{parentName:"p",href:"/wimp-wiki/docs/backend/front-backend#be-able-to-match-a-specific-message-to-a-certain-state"},"page"),"."),(0,o.kt)("p",null,"Here is an example of the organisation of a teacher's subflow:\n",(0,o.kt)("img",{alt:"Teacher Subflow Organisation",src:a(2103).Z})),(0,o.kt)("p",null,"And here is an example of the teacher subflow using the template :\n",(0,o.kt)("img",{alt:"Teacher Flow Using Template",src:a(6099).Z})),(0,o.kt)("h2",{id:"main-flow"},"Main flow"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Input")),(0,o.kt)("p",null,"The calculation of the states are triggered at each ","[post]","/node/currentstates from the Express server to the Node-Red server"),(0,o.kt)("p",null,"After starting the calculation of the states, the flow gathers them to put them in a message to be sent as a reply. ",(0,o.kt)("strong",{parentName:"p"},"Since the message is sent once the calculation of the state by each subflow, a 'TimeOut' node should be implemnted to avoid that a subflow of a teacher too slow slows down all the other flows"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output"),"\nA .json that coressponding to all the states of all the teachers of the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "professor1" : 1,\n    "professeur2" : 22,\n    "professeur3" : 0,\n    ...\n}\n')),(0,o.kt)("p",null,"Here is an example of the main flow with two teacher's subflows :\n",(0,o.kt)("img",{alt:"Teachers Flows Manager",src:a(6992).Z})),(0,o.kt)("h2",{id:"add-a-new-teacher-flow"},"Add a new Teacher Flow"),(0,o.kt)("p",null,"If you are an admnistrator of the WIMP system and you want to add a teacher flow, what you need is to :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a subflow for the teacher using the following Teacher's subflow template: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on the menu burger in the right hand corner, then click on Subflows > Create a new Subflow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on the menu burger in the right hand corner, then click on Import, and paste the code of the Teacher's template. Then, click on import."))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[{"id":"005fb3c15057f302","type":"comment","z":"30c4fc871e6e7071","name":"Subflow for Teacher X","info":"","x":960,"y":100,"wires":[]},{"id":"710e3430d4a9e280","type":"group","z":"30c4fc871e6e7071","style":{"stroke":"#999999","stroke-opacity":"1","fill":"none","fill-opacity":"1","label":true,"label-position":"nw","color":"#a4a4a4"},"nodes":["3c0f887b4fb0ba63","11e61f6715fb34ac"],"x":354,"y":79,"w":452,"h":302},{"id":"3c0f887b4fb0ba63","type":"function","z":"30c4fc871e6e7071","g":"710e3430d4a9e280","name":"Decision","func":"const msgBkp = msg;\\ntry {\\n    //** WRITE YOUR LOGIC HERE **\\n\\n    // Example of logic\\n    // if (msg.payload.state === true) {\\n    //     msg.payload.final = 1;\\n    // } else {\\n    //     msg.payload.final = 0;\\n    // }\\n    // return msg;\\n} catch (e) {\\n    console.log(\\"ERROR IN FLOW OF TEACHER \\" + env.get(\\"TEACHER_ID\\") + \\": \\" + e);\\n    return msgBkp;\\n}","outputs":1,"noerr":0,"initialize":"","finalize":"","libs":[],"x":460,"y":340,"wires":[["0f247dee9b086374"]]},{"id":"11e61f6715fb34ac","type":"comment","z":"30c4fc871e6e7071","g":"710e3430d4a9e280","name":"Your logic : Please write output in **msg.payload.final**","info":"","x":580,"y":120,"wires":[]},{"id":"70e56e2b21733f79","type":"group","z":"30c4fc871e6e7071","style":{"stroke":"#999999","stroke-opacity":"1","fill":"none","fill-opacity":"1","label":true,"label-position":"nw","color":"#a4a4a4"},"nodes":["0f247dee9b086374","ccf8822056e292dc","561b6c548502c622","6c91e252aa21c287"],"x":354,"y":439,"w":372,"h":202},{"id":"0f247dee9b086374","type":"template","z":"30c4fc871e6e7071","g":"70e56e2b21733f79","name":"","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\\n    \\"{{env.TEACHER_ID}}\\": \\"{{payload.final}}\\"\\n}","output":"json","x":460,"y":480,"wires":[[]]},{"id":"ccf8822056e292dc","type":"comment","z":"30c4fc871e6e7071","g":"70e56e2b21733f79","name":"Format Ouput : Please don\'t modify","info":"If msg.payload.final is not set,\\nthen a default value \\"\\" will be set.","x":520,"y":600,"wires":[]},{"id":"561b6c548502c622","type":"catch","z":"30c4fc871e6e7071","g":"70e56e2b21733f79","name":"","scope":null,"uncaught":false,"x":460,"y":540,"wires":[["6c91e252aa21c287"]]},{"id":"6c91e252aa21c287","type":"template","z":"30c4fc871e6e7071","g":"70e56e2b21733f79","name":"","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\\n    \\"{{env.TEACHER_ID}}\\": \\"\\"\\n}","output":"json","x":640,"y":540,"wires":[[]]}]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Configure the Teacher's sublfow: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Rename the subflow with the Teacher ID by clicking on the subflow name (which is "X" in the template).')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"TEACHER_ID"),' environment variable by clicking on "edit properties" button in the left-hand corner and replacing "X" the Teacher ID.')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")," in the right hand corner. You can deploy it even if it is empty, there will be no impact on the system since the subflow is not connected in the Teachers Flows Manager."))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The next steps must be done when the Teacher's subflow is functioning correctly."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add the new Teacher's subflow in the Teachers Flows Manager:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Drag & Drop the new Teacher's subflow in the nods group ",(0,o.kt)("inlineCode",{parentName:"p"},"Teachers Subflows")," of the flow.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Connect the output of the POST endpoint to the input of the new subflow.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Connect the output of the new subflow to the input of the node named ",(0,o.kt)("inlineCode",{parentName:"p"},"Join Teachers Status"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Double click on the node named ",(0,o.kt)("inlineCode",{parentName:"p"},"Join Teachers Status")," and increase the value of the field ",(0,o.kt)("inlineCode",{parentName:"p"},"After a number of message parts")," by 1 (current value + 1).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")," in the right hand corner and check that everthing is functioning correctly."))))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As a reminder, you can only use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Debug")," node in a flow (not in a subflow). Therefore, you can only use the debug node in the Teachers Flows Manager and not in a Teacher's subflow. If you want to debug a teacher subflow, we recommend to make a copy in a local flow to correct it in order not to disturb the organization of the system."))))}p.isMDXComponent=!0},6099:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Teacher_Flow_Using_Template-4c5950c026bca28b4ed3386f97e04063.png"},6992:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Teachers_Flows_Manager-e84a5f3ba1f7a3ba0099458b3c962d16.png"},3966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mainFlow-410aac9a5c20219d6b6d91fda2a70738.png"},7601:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/showcase-flow-45577bf4f2692f747b74889325adc94e.png"},2103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subflow-77a1db8b0a407c1357051411c34aa5d9.png"}}]);