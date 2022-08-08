---
sidebar_position: 4
---

# Front-Backend

As seen in [back-backend](./back-backend.md) the server transforms data received from Node-RED into displayable data (color, text).
To do this the server matches the raw data to the sentence and color that the teacher has chosen. 

*Example :* <br/>
Node-RED side &rarr; When my plug is connected I generate the availability status 1 <br/>
Express side &rarr; For me the state 1 corresponds to "I am available" in green 

However, to do this, Express must retrieve its own information from a database, so the front-backend graphical interface is necessary to allow teachers to modify their messages, add states, change the color of some messages etc.


## The needs

After discussions we have identified 3 needs:

- To be able to match a specific message to a certain state 
- To be able to manage the visibility of the messages according to the students
- To be able to deactivate its presence on the site (to be in an "undifined" state no matter what information the devices have)

### Be able to match a specific message to a certain state
Chaque etat brute renvoyé par Node-RED doit avoir un corespondance propre constitué d'un message et d'une coleur d'affichage
```json
// database/staff.json
"id professeur": {
    ...
    "states": {
        "1": {
            "msg": "in his office but busy",
            "color": "orange",
        },
        ...
    }
} 
```
On the site :
![alt text](./img/input1.png)




### Be able to manage the visibility of the messages according to the students
Every teacher to want to limit some message only to the 'researcher' for example. To do this a chmaps has been added to filter this. If a grade is set to false then that grade will see a default message instead of the true message.

this default message is related to the colors, if the color of the real message is red it must mean that the teacher is not available. The real message will be *'In meeting with the director'* in red, the default message will then be the one in the field `"unavailable":` which could be *'not available'*.
```json
// database/staff.json
"id professeur": {
    ...
    "states": {
        "1": {
            "msg": "in his office but busy",
            "color": "orange",
            "visibility": { // <--- 
                "student": false,
                "researcher": true,
                "colleague": true
            }
        },
        ...
    },

    "default": { // <--- 
            "available": "I'm available !",
            "busy": "I'm busy !",
            "unavailable": "I'm unavailable !"
    }
}

```
On the site :
![alt text](./img/input2.png)
![alt text](./img/default.png)



### Be able to deactivate its presence on the site
It should also be possible to completely deactivate everything in order not to be "traced" anymore. For this purpose a field `"tracking":` has been set up 

```json
// database/staff.json
"id professeur": {
    ...
    "states": {
        "1": {
            "msg": "in his office but busy",
            "color": "orange",
            "visibility": { 
                "student": false,
                "researcher": true,
                "colleague": true
            }
        },
        ...
    },

    "default": {  
            "available": "I'm available !",
            "busy": "I'm busy !",
            "unavailable": "I'm unavailable !"
    },
    "tracking": "ON" // <---
}
```
On the site :
![alt text](./img/tracker.png)

## Login & Security 

A login/password system has been set up to secure the data.

This connection is managed with passport.js (same system as in fontend)

the database storing the login/password in `/database/db_acc.json`
and looks like :
```json
{
    "id professeur 1 (username)" : "5868",
    "id professeur 2" : "5868",
    ...
}
```

## ?
** Why no registration pages? **
because the professor are theorically already in the concordia database.