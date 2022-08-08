<<<<<<< HEAD:docs/backend/intro.md
---
sidebar_position: 1
---
=======
# Introduction
>>>>>>> 0d292bd5e82719d3e9b0d9bd8505c3bf2069b547:docs/backend/1-intro.md

# Introduction

<<<<<<< HEAD:docs/backend/intro.md
The backend part allows teachers to manage and define their states and to build their own logic in a Node-RED flow in order to compute their current state.
=======
A node-red server is used to process the information received from the different devices.
This server will be embedded in a Express.js server which will have 3 uses:
- Serve as a firewall for the access to node-red
- to make an API REST endpoint
- to host the Admin part
>>>>>>> 0d292bd5e82719d3e9b0d9bd8505c3bf2069b547:docs/backend/1-intro.md

The principle of the backend part of the system is as follows:

<<<<<<< HEAD:docs/backend/intro.md
A Node-RED server is used to process the information received from the different devices. This server is embedded in a Express.js server which have 3 main features:
=======
this backend is separated in 2 sub parts : 
- the front-backend which will manage the Admin part via web pages, the backend will then be coresponding to a classic web server
- the backend which will contain the node-red part 
>>>>>>> 0d292bd5e82719d3e9b0d9bd8505c3bf2069b547:docs/backend/1-intro.md

- Serve as a firewall for the access to Node-RED.
- Expose a REST API which can be accessed through the frontend part of the system.
- Host the web pages accessible by the teachers.

In terms of software design, the backend part is separated in 2 sub parts :

- The front-backend which manages the Teacher interface via web pages. In this case, the backend corresponds to a classic web server
- The back-backend which contains the Node-Red part and the API accesible through the bakcend or the front of the system

The two parts of the backend are linked thanks to the Express.js server.