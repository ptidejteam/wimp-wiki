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
