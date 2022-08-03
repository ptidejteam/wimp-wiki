---
sidebar_position: 1
---

# Introduction
The wimp project for "where is my professor" is an iot project/proof of concept. The goal is to gather a set of iot devices giving various information on the building,location etc... whose goal is that after processing we can tell in an automated way if a teacher is available or not. 


This proof of concept shows the possibility of taking the smart-home concept to a higher scale with more devices, role systems, profiles etc... 


## architecture
The project is divided into 2 main parts at the architecture level. One is the Student part and the other one is the Teacher/admin part. 
- The student part consists for the moment of a web server accessible by the students in order to have access to a graphic interface summarizing the state of availability of the teachers. 
- The teacher-admin part (that we will call backend), is the heart of the project see [link to future page] for more details.

# Scenario Student 
- the student-accessible server will retrieve the teacher availability information by sending a GET request to the backend.
- the Express.js server will check the security of the request (the ip for example)
- The Express.js server will get the information from its API (which is actually the node-red server)
- The node-red server will interogate the devices and process the information and send a .json back to the Express server.
- The Express server will send the information back to the web server for the student


# Scenario professor
- The professor need to be connected to the local concordia network to have access to the backend server.
- This server will act as a classic web server for him. The server will send him a his perosnal page where his information is stored so that he can, for example, modify his availability messages.
- All saved changes will modify the database
- the professor will also be able to access his node-red flow to modify the treatment that will be done on the information of these devices


## technologie 

**Node-Red**
>Javascript technology allowing to manage iot devices thanks to a system of neuds. This system of neuds allows to make treatment more simple than with javascript code directly. This allows neofit in programming (like many teachers) to use WIMP. Moreover it is very easy to create its own nodes in javascript which is very useful for advanced users.

**Express**
>Express.js is a framework for building web applications based on Node.js. It is in fact the standard framework for server development in Node.js. Since node-red is also a .js technology it integrates well with Express. Indeed Express can embed a node-red server to use node-red as an api

**Other**
>other technologies less important because easily replaceable by others have been used as Passport.js for security or simple-db-json.js for database management. They have been chosen due to their simplicity, and the fact that they are very often used technologies.

## Main collaborators 

* Yann-Gaël Guéhéneuc
* Timothé Verstraete
* Eloi Menaud
* ...
