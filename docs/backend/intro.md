# Backend Introduction

The principle of this backend is :

A red node server is used to process the information received from the different devices.
This server will be embedded in a Express.js server which will have 3 uses:
- Serve as a firewall for the access to node-red
- to make an API REST endpoint
- to host the Admin part


this backend is separated in 2 sub parts : 
- the front-backend which will manage the Admin part via web pages, the backend end will then be coresponding to a classic web server
- the backend which will contain the node-red part 

the two parts being linked thanks to the express.js server
