"use strict";(self.webpackChunkexamples_classic=self.webpackChunkexamples_classic||[]).push([[6249],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7484:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="Frontend",s={unversionedId:"frontend/frontend",id:"frontend/frontend",isDocsHomePage:!1,title:"Frontend",description:"Routes",source:"@site/docs/frontend/frontend.md",sourceDirName:"frontend",slug:"/frontend/frontend",permalink:"/wimp-wiki/docs/frontend/frontend",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/frontend/frontend.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/wimp-wiki/docs/frontend/intro"},next:{title:"Introduction",permalink:"/wimp-wiki/docs/backend/intro"}},l=[{value:"Routes",id:"routes",children:[]},{value:"Data (will change soon)",id:"data-will-change-soon",children:[]},{value:"Login",id:"login",children:[]},{value:"Security",id:"security",children:[]},{value:"?",id:"",children:[]}],c={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frontend"},"Frontend"),(0,o.kt)("h2",{id:"routes"},"Routes"),(0,o.kt)("p",null,"The express server delivers a very classical REST api whose routes are :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/home ","\u2192"," redirection to the dashboard with information on teachers"),(0,o.kt)("li",{parentName:"ul"},"/login ","\u2192"," login page"),(0,o.kt)("li",{parentName:"ul"},"/error ","\u2192"," display http errors")),(0,o.kt)("h2",{id:"data-will-change-soon"},"Data (will change soon)"),(0,o.kt)("p",null,"This server uses the REST API provided by the backend server to retrieve information as .json. With a ",(0,o.kt)("inlineCode",{parentName:"p"},"[GET]/states")," the web server receives all the status of the teachers.\nThe web server processes the information according to the level of education of the connected person and returns the corresponding page.\nSee ",(0,o.kt)("inlineCode",{parentName:"p"},"app.get('/home'...")," in /server.js."),(0,o.kt)("h2",{id:"login"},"Login"),(0,o.kt)("p",null,"A connection system has been set up to allow data security and to authenticate the students (especially to know the level of study called ",(0,o.kt)("em",{parentName:"p"},"role"),").\nthere are 3 different roles :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"student"),(0,o.kt)("li",{parentName:"ul"},"researcher"),(0,o.kt)("li",{parentName:"ul"},"colleague\nStudents who go to the site without a logged session are redirected to the login page. They fill their username and password.\n",(0,o.kt)("img",{alt:"Login Page",src:n(5581).Z}))),(0,o.kt)("p",null,"This page is under the /login route.\nWith ","[GET]","/login that sends the page back and ","[POST]","/login that receives the information to establish the connection or not.\nThe /static/login.js which is link to the page/login/html do the ","[POST]"," request to submit the form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$(function(){\n    $(function(){\n        $('#login-form').on('submit', function(e){\n            alertify.set('notifier','position', 'top-right');\n            e.preventDefault();\n\n            //----- post the form to [POST]/login \n            $.ajax({\n                url: 'http://localhost:3000/login',\n                type: 'POST',\n                data: $('#login-form').serialize(),\n                success: function(data){\n                    location.href = \"/home\";\n                },\n                error: function(data){\n                    console.log(\"failed\");\n                    if (data.status === 401) { alertify.error(data.statusText + \": Invalid credentials\", 'error', 5 )};\n                }            \n            });\n            // ------\n\n        });\n    });\n});\n\n")),(0,o.kt)("h2",{id:"security"},"Security"),(0,o.kt)("p",null,"The connection is made with Passport.js.\nWhen the connection form is submitted (","[POST]","/login) Passport is called and checks if the couple ",(0,o.kt)("inlineCode",{parentName:"p"},'{"idStudent" : "password" }')," in the database ",(0,o.kt)("inlineCode",{parentName:"p"},"/database/db_acc.json"),".\nPassport store the conections data in a http session to maintain the connection without having to reconnect each time.\n",(0,o.kt)("a",{parentName:"p",href:"https://www.passportjs.org/packages/passport-local/"},"see more about passport")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// /server.js\npassport.use(new LocalStrategy(\n(username, password, done) => {\n    let acc = db_acc.get(username);\n    if (acc === undefined || acc.pwd != password){ #check if password match\n        console.log('failed auth')\n        return done(null, false); # authentication failed\n    } \n    else{\n        console.log('auth ok')\n        let authenticated_user = { \"id\": username};\n        return done(null, authenticated_user); # authentication suceeded\n    }  \n}\n));\n\napp.post('/login', \n    passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),\n    async (req, res) => {\n        res.redirect('/home' + req.user.id);\n    }\n);\n")),(0,o.kt)("p",null,"The checkAuthenticated function is used as a middelware to check if the session contains a login. If not, the requested page is inaccessible and the user is redirected to /login"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// /server.js\ncheckAuthenticated = (req, res, next) => {\n    console.log("Authenticating for access to " + req.originalUrl + "...")\n    if (req.isAuthenticated()) { \n        console.log("Authentication done for access to " + req.originalUrl);\n        return next();\n    }\n    res.redirect("/login")\n}\n')),(0,o.kt)("h2",{id:""},"?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Why no registration pages? "),"\nbecause the students are theorically already in the concordia database."))}d.isMDXComponent=!0},5581:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/login-1210eb69af77f919e4646ca708679268.png"}}]);