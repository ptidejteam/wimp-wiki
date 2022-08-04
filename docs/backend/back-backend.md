# back-backend

This part his the node-red <-> REST API 

Each time a student wants to access the status of his teachers, the frontend server sends a request to the express api.
Express. Express will check this request and then interogate node-red with a GET in order to notify the different states of the professor. Finally Express will transform the raw information received by node-red (as 'int', for example) and return clean information (as 'not available').


# node red
Node-red is embedded in the server express. That is to say that it plays the role of an api. However node-red will be launched as a classical server except that all requests will go through the express server.
The express server will make requests to /api to acces the node-red server.

```javascript
var settings = {
    httpAdminRoot:"/red",
    httpNodeRoot: "/api",
    userDir: __dirname + "/../flows",
    flowFile:'flows.json', 
    editorTheme: {
    tours: false,
    },
    functionGlobalContext: { }    // enables global context
};

RED.init(server,settings);
app.use("/red",checkAuthenticated,RED.httpAdmin); // ipserver:8000/red will return the flow UI of node-red

...

RED.start();
```

# Recieve request

All the API routes are in the /modules/aiRouter.js

The front end webserver call a GET on /states to get the states
and a first ip verification is done to make sure that the request comes from an authorized web server.
```js
    apiRouter.get('/states', ipfilter(authorizedIPs, ipfilterConfig)...
```
The program will browse the entire database where the teachers are stored.
It will create a profile for each teacher containing the information that will be sent as a response. 
```js
...
const db_staff = new JSONdb('./database/staff.json');
    let staff = {};
    let states = [];
    try{
        staff = db_staff.JSON();
        Object.keys(staff).forEach(e => {
            const person = staff[e];
            let state = {
                id: e,
                pp: "",
                firstNameRaw: person.firstName,
                firstName: "",
                lastName: person.lastName,
                building: person.building,
                department: person.department,
                office: person.office,
                statusColor: "",
                statusMsg: "",
                defaultMsg: "",
                currentState: "",
                visibility: {}
            }
    ...
```

Finally, the program will fill in the relevant fields through a series of processes and then store the profile in a list that will be sent as a response.
The most important part is when the server calls node-red to get the teacher's availability status. To do this the server makes an http request to node-red (which is actually implemented as an internet API to the server).
```js
//try{
    ...
        // Find if the person is in the database
        if (fs.existsSync(path.resolve('./pp/' + person.pp))) {
            state.pp = e;
        } else {
            state.pp = "undefined";
        }

        // Reduce first name
        if(person.firstName.includes(" ")){
            fn = person.firstName.split(' ')
            fn = fn.reduce((a,aa)=>{return (  a + "." + aa[0]) },"");
            state.firstName = fn.slice(1);
        } else {
            state.firstName = person.firstName;
        }
        // check if the professor is on mode "tracking off"
        if (person.tracking === "OFF") {
            state.statusColor = "grey";
            state.statusMsg = "Disconnected";
        } else {

            // Find if the current state is defined <----
            const db_data = new JSONdb(path.resolve('./database/db.json'));
            let currentState = "undefined";
            if (db_data.has(e)){
                currentState = db_data.get(e);
            }
            state.currentState = currentState;
            
            // Find the color & msg of the state 
            if(currentState !== "undefined"){
                state.visibility = person.states[currentState].visibility;
                state.statusColor = person.states[currentState].color;
                state.statusMsg = person.states[currentState].msg;
                switch (state.statusColor) {
                    case "green":
                        state.defaultMsg = person.default.available;
                        break;
                    case "orange":
                        state.defaultMsg = person.default.busy;
                        break;
                    case "red":
                        state.defaultMsg = person.default.unavailable;
                        break;
                }
            }
            else {
                state.statusColor = "grey";
                state.statusMsg = "undefined";
            }
        }
        states.push(state);
    })
}
catch (e){
    console.log(e);   
}
res.send(states).status(200);
```

