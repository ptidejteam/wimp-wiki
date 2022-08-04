"use strict";(self.webpackChunkexamples_classic=self.webpackChunkexamples_classic||[]).push([[331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,h=u["".concat(l,".").concat(f)]||u[f]||p[f]||s;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6248:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={},o="back-backend",i={unversionedId:"backend/back-backend",id:"backend/back-backend",isDocsHomePage:!1,title:"back-backend",description:"This part his the node-red  REST API",source:"@site/docs/backend/back-backend.md",sourceDirName:"backend",slug:"/backend/back-backend",permalink:"/wimp-wiki/docs/backend/back-backend",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/backend/back-backend.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frontend",permalink:"/wimp-wiki/docs/frontend/frontend"},next:{title:"front-backend",permalink:"/wimp-wiki/docs/backend/front-backend"}},l=[],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"back-backend"},"back-backend"),(0,a.kt)("p",null,"This part his the node-red <-> REST API "),(0,a.kt)("p",null,"Each time a student wants to access the status of his teachers, the frontend server sends a request to the express api.\nExpress. Express will check this request and then interogate node-red with a GET in order to notify the different states of the professor. Finally Express will transform the raw information received by node-red (as 'int', for example) and return clean information (as 'not available')."),(0,a.kt)("h1",{id:"node-red"},"node red"),(0,a.kt)("p",null,"Node-red is embedded in the server express. That is to say that it plays the role of an api. However node-red will be launched as a classical server except that all requests will go through the express server.\nThe express server will make requests to /api to acces the node-red server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var settings = {\n    httpAdminRoot:"/red",\n    httpNodeRoot: "/api",\n    userDir: __dirname + "/../flows",\n    flowFile:\'flows.json\', \n    editorTheme: {\n    tours: false,\n    },\n    functionGlobalContext: { }    // enables global context\n};\n\nRED.init(server,settings);\napp.use("/red",checkAuthenticated,RED.httpAdmin); // ipserver:8000/red will return the flow UI of node-red\n\n...\n\nRED.start();\n')),(0,a.kt)("h1",{id:"recieve-request"},"Recieve request"),(0,a.kt)("p",null,"All the API routes are in the /modules/aiRouter.js"),(0,a.kt)("p",null,"The front end webserver call a GET on /states to get the states\nand a first ip verification is done to make sure that the request comes from an authorized web server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    apiRouter.get('/states', ipfilter(authorizedIPs, ipfilterConfig)...\n")),(0,a.kt)("p",null,"The program will browse the entire database where the teachers are stored.\nIt will create a profile for each teacher containing the information that will be sent as a response. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nconst db_staff = new JSONdb(\'./database/staff.json\');\n    let staff = {};\n    let states = [];\n    try{\n        staff = db_staff.JSON();\n        Object.keys(staff).forEach(e => {\n            const person = staff[e];\n            let state = {\n                id: e,\n                pp: "",\n                firstNameRaw: person.firstName,\n                firstName: "",\n                lastName: person.lastName,\n                building: person.building,\n                department: person.department,\n                office: person.office,\n                statusColor: "",\n                statusMsg: "",\n                defaultMsg: "",\n                currentState: "",\n                visibility: {}\n            }\n    ...\n')),(0,a.kt)("p",null,"Finally, the program will fill in the relevant fields through a series of processes and then store the profile in a list that will be sent as a response.\nThe most important part is when the server calls node-red to get the teacher's availability status. To do this the server makes an http request to node-red (which is actually implemented as an internet API to the server)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//try{\n    ...\n        // Find if the person is in the database\n        if (fs.existsSync(path.resolve(\'./pp/\' + person.pp))) {\n            state.pp = e;\n        } else {\n            state.pp = "undefined";\n        }\n\n        // Reduce first name\n        if(person.firstName.includes(" ")){\n            fn = person.firstName.split(\' \')\n            fn = fn.reduce((a,aa)=>{return (  a + "." + aa[0]) },"");\n            state.firstName = fn.slice(1);\n        } else {\n            state.firstName = person.firstName;\n        }\n        // check if the professor is on mode "tracking off"\n        if (person.tracking === "OFF") {\n            state.statusColor = "grey";\n            state.statusMsg = "Disconnected";\n        } else {\n\n            // Find if the current state is defined <----\n            const db_data = new JSONdb(path.resolve(\'./database/db.json\'));\n            let currentState = "undefined";\n            if (db_data.has(e)){\n                currentState = db_data.get(e);\n            }\n            state.currentState = currentState;\n            \n            // Find the color & msg of the state \n            if(currentState !== "undefined"){\n                state.visibility = person.states[currentState].visibility;\n                state.statusColor = person.states[currentState].color;\n                state.statusMsg = person.states[currentState].msg;\n                switch (state.statusColor) {\n                    case "green":\n                        state.defaultMsg = person.default.available;\n                        break;\n                    case "orange":\n                        state.defaultMsg = person.default.busy;\n                        break;\n                    case "red":\n                        state.defaultMsg = person.default.unavailable;\n                        break;\n                }\n            }\n            else {\n                state.statusColor = "grey";\n                state.statusMsg = "undefined";\n            }\n        }\n        states.push(state);\n    })\n}\ncatch (e){\n    console.log(e);   \n}\nres.send(states).status(200);\n')))}d.isMDXComponent=!0}}]);