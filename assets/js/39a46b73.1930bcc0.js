"use strict";(self.webpackChunkexamples_classic=self.webpackChunkexamples_classic||[]).push([[9591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6547:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Backend Exposition",s={unversionedId:"deploy/expose_backend",id:"deploy/expose_backend",isDocsHomePage:!1,title:"Backend Exposition",description:"This page will describe how to expose the Backend part of the WIMP system so that it can be accessed by the teachers and the administrators.",source:"@site/docs/deploy/expose_backend.md",sourceDirName:"deploy",slug:"/deploy/expose_backend",permalink:"/wimp-wiki/docs/deploy/expose_backend",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/deploy/expose_backend.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Frontend Configuration",permalink:"/wimp-wiki/docs/deploy/configure_frontend"},next:{title:"Frontend Exposition",permalink:"/wimp-wiki/docs/deploy/expose_frontend"}},l=[{value:"Create a Backend service",id:"create-a-backend-service",children:[]},{value:"Generate SSL certificate",id:"generate-ssl-certificate",children:[]},{value:"Configure Nginx",id:"configure-nginx",children:[]},{value:"Test the Backend",id:"test-the-backend",children:[]}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backend-exposition"},"Backend Exposition"),(0,r.kt)("p",null,"This page will describe how to expose the Backend part of the WIMP system so that it can be accessed by the teachers and the administrators."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'As a reminder, the "Backend" term in the WIMP system refers to the part that is accessible to teachers and administrators. For more information about the definitions used in the WIMP system, please see ',(0,r.kt)("a",{parentName:"p",href:"/wimp-wiki/docs/intro"},"this page"),"."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For this part of the tutorial, you must be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpressNodeRed")," directory :"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/wimp-backend/ExpressNodeRed/\n")))),(0,r.kt)("h2",{id:"create-a-backend-service"},"Create a Backend service"),(0,r.kt)("p",null,"You can create a systemd service for the Backend part :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy the file ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/wimp-backend.service")," into the systemd directory :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp conf/wimp-backend.service /etc/systemd/system/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start the Backend service :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start wimp-backend.service\n")),(0,r.kt)("p",null,"Here, the Backend part of the WIMP system is running on the Port that you have defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify that the service has started correctly : ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status wimp-backend.service\n")),(0,r.kt)("h2",{id:"generate-ssl-certificate"},"Generate SSL certificate"),(0,r.kt)("p",null,"In order to make the frontend work with HTTPS, you can generate a self-signed SSL certificate. To generate a self-signed certificate, you need to follow the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create your own Certification Authority (CA)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Install openssl on the server:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install openssl\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a directory to store the certificates:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /etc/ssl/wimp\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create the following configuration file for your CA:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vim openssl-ca.cnf\n\n    HOME            = .\nRANDFILE        = $ENV::HOME/.rnd\n\n####################################################################\n[ ca ]\ndefault_ca    = CA_default      # The default ca section\n\n[ CA_default ]\n\ndefault_days     = 365          # How long to certify for\ndefault_crl_days = 30           # How long before next CRL\ndefault_md       = sha256       # Use public key default MD\npreserve         = no           # Keep passed DN ordering\n\nx509_extensions = ca_extensions # The extensions to add to the cert\n\nemail_in_dn     = no            # Don't concat the email in the DN\ncopy_extensions = copy          # Required to copy SANs from CSR to cert\n\n####################################################################\n[ req ]\ndefault_bits       = 4096\ndefault_keyfile    = cakey.pem\ndistinguished_name = ca_distinguished_name\nx509_extensions    = ca_extensions\nstring_mask        = utf8only\n\n####################################################################\n[ ca_distinguished_name ]\ncountryName         = Country Name (2 letter code)\ncountryName_default = US\n\nstateOrProvinceName         = State or Province Name (full name)\nstateOrProvinceName_default = Maryland\n\nlocalityName                = Locality Name (eg, city)\nlocalityName_default        = Baltimore\n\norganizationName            = Organization Name (eg, company)\norganizationName_default    = Test CA, Limited\n\norganizationalUnitName         = Organizational Unit (eg, division)\norganizationalUnitName_default = Server Research Department\n\ncommonName         = Common Name (e.g. server FQDN or YOUR name)\ncommonName_default = Test CA\n\nemailAddress         = Email Address\nemailAddress_default = test@example.com\n\n####################################################################\n[ ca_extensions ]\n\nsubjectKeyIdentifier   = hash\nauthorityKeyIdentifier = keyid:always, issuer\nbasicConstraints       = critical, CA:true\nkeyUsage               = keyCertSign, cRLSign\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Generate the CA:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl req -x509 -config openssl-ca.cnf -newkey rsa:4096 -sha256 -nodes -out cacert.pem -outform PEM\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can inspect the content of the CA generated:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -in cacert.pem -text -noout\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a certificate signing request (CSR) for the server that hosts the frontend"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create the configuration file for the generation of the CSR:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vim openssl-server.cnf\n\nHOME            = .\nRANDFILE        = $ENV::HOME/.rnd\n\n####################################################################\n[ req ]\ndefault_bits       = 2048\ndefault_keyfile    = serverkey.pem\ndistinguished_name = server_distinguished_name\nreq_extensions     = server_req_extensions\nstring_mask        = utf8only\n\n####################################################################\n[ server_distinguished_name ]\ncountryName         = Country Name (2 letter code)\ncountryName_default = US\n\nstateOrProvinceName         = State or Province Name (full name)\nstateOrProvinceName_default = MD\n\nlocalityName         = Locality Name (eg, city)\nlocalityName_default = Baltimore\n\norganizationName            = Organization Name (eg, company)\norganizationName_default    = Test Server, Limited\n\ncommonName           = Common Name (e.g. server FQDN or YOUR name)\ncommonName_default   = Test Server\n\nemailAddress         = Email Address\nemailAddress_default = test@example.com\n\n####################################################################\n[ server_req_extensions ]\n\nsubjectKeyIdentifier = hash\nbasicConstraints     = CA:FALSE\nkeyUsage             = digitalSignature, keyEncipherment\nsubjectAltName       = @alternate_names\nnsComment            = \"OpenSSL Generated Certificate\"\n\n####################################################################\n[ alternate_names ]\n\nDNS.1  = example.com\nDNS.2  = www.example.com\nDNS.3  = mail.example.com\nDNS.4  = ftp.example.com\n\n# If you don't have a DNS name in production, you have to put the IP of your\n# server that the browser can reach.\n\n# Add these if you need them. But usually you don't want them or\n#   need them in production. You may need them for development.\n# DNS.5       = localhost\n# DNS.6       = localhost.localdomain\n# IP.1        = 127.0.0.1\n# IP.2        = ::1\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Generate the CSR:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl req -config openssl-server.cnf -newkey rsa:2048 -sha256 -nodes -out servercert.csr -outform PEM\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can inspected the content of the CSR generated:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl req -text -noout -verify -in servercert.csr\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign the server's CSR with your CA key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update the CA's configuration file with the following changes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the two following sections at the end of the configuration file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"####################################################################\n[ signing_policy ]\ncountryName            = optional\nstateOrProvinceName    = optional\nlocalityName           = optional\norganizationName       = optional\norganizationalUnitName = optional\ncommonName             = supplied\nemailAddress           = optional\n\n####################################################################\n[ signing_req ]\nsubjectKeyIdentifier   = hash\nauthorityKeyIdentifier = keyid,issuer\nbasicConstraints       = CA:FALSE\nkeyUsage               = digitalSignature, keyEncipherment\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the following information to the ",(0,r.kt)("inlineCode",{parentName:"p"},"[CA-default]")," section:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"base_dir      = .\ncertificate   = $base_dir/cacert.pem   # The CA certifcate\nprivate_key   = $base_dir/cakey.pem    # The CA private key\nnew_certs_dir = $base_dir              # Location for new certs after signing\ndatabase      = $base_dir/index.txt    # Database index file\nserial        = $base_dir/serial.txt   # The current serial number\n\nunique_subject = no  # Set to 'no' to allow creation of\n                    # several certificates with same subject.\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create the files index.txt and serial.txt :"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch index.txt\necho '01' > serial.txt\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sign the CSR with your CA : ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl ca -config openssl-ca.cnf -policy signing_policy -extensions signing_req -out servercert.pem -infiles servercert.csr\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the CA certificate on the client (users' browser)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Import the file ",(0,r.kt)("inlineCode",{parentName:"li"},"cacert.pem")," as an Authority in your users' browser")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The information mentionned in this part are extracted from the following resources:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/21297139/how-do-you-sign-a-certificate-signing-request-with-your-certification-authority/21340898#21340898"},"https://stackoverflow.com/questions/21297139/how-do-you-sign-a-certificate-signing-request-with-your-certification-authority/21340898#21340898")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/10175812/how-to-generate-a-self-signed-ssl-certificate-using-openssl"},"https://stackoverflow.com/questions/10175812/how-to-generate-a-self-signed-ssl-certificate-using-openssl"))))),(0,r.kt)("h2",{id:"configure-nginx"},"Configure Nginx"),(0,r.kt)("p",null,"Now, we need to expose the Backend service to the users thanks to an Nginx Reverse Proxy. The Nginx reverse proxy will allow you to setup HTTPS traffic : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Nginx on your Raspberry Pi or your server by using the ",(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04"},"following guide"),"."),(0,r.kt)("li",{parentName:"ul"},"Copy the WIMP proxy configuration file ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/wimp-proxy")," into the Nginx directory ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/nginx/sites-available")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp ./ExpressNodeRed/conf/wimp-proxy /etc/nginx/sites-available\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a symbolic link in the directory ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/nginx/sites-enabled")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ln -s /etc/nginx/sites-available/wimp-proxy /etc/nginx/sites-enabled\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Restart nginx :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service nginx restart\n")),(0,r.kt)("h2",{id:"test-the-backend"},"Test the Backend"),(0,r.kt)("p",null,"Now you can verify that the Backend is well deployed : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect on the local network"),(0,r.kt)("li",{parentName:"ul"},"Open your browser and point it to : https://",(0,r.kt)("strong",{parentName:"li"},"Backend IP"),"/"),(0,r.kt)("li",{parentName:"ul"},"Check that you are well redirected on the login page and that the Backend is functional.")),(0,r.kt)("p",null,"Now you can move on to configuring the Frontend part of the WIMP system."))}p.isMDXComponent=!0}}]);