# Frontend

The frontend is an Express.js web server with a simple-json-db.js database management and authentication with passport.js.

This web server is used to host a website accessible from the global network. Each student must be logged to prove that he is a student and know his level of study. Once logged he can see the status of the teachers (if they are available or not). 

Depending on their level of study students will see different information, a bachelor student could have access to more precise information on a professor.

## Routes
The express server delivers a very classical REST api whose routes are :
* /home -> redirection to the dashboard with information on teachers
* /login -> login page
* /error -> display http errors

## Data (will change soon)
This server uses the REST API provided by the backend server to retrieve information as .json. With a ```[GET]/states``` the web server receives all the status of the teachers.
The web server processes the information according to the level of education of the connected person and returns the corresponding page. 
See ```app.get('/home'...``` in /server.js.

## login
The connection is made with Passport.js.
When the connection form is submitted ([POST]/login) Passport is called and checks if the couple ``{"idStudent" : "password" }`` in the database ``/database/db_acc.json``.
Passport store the conections data in a http session to maintain the connection without having to reconnect each time.
[see more about passport](https://www.passportjs.org/packages/passport-local/)

```js
// /server.js
passport.use(new LocalStrategy(
(username, password, done) => {
    let acc = db_acc.get(username);
    if (acc === undefined || acc.pwd != password){ #check if password match
        console.log('failed auth')
        return done(null, false); # authentication failed
    } 
    else{
        console.log('auth ok')
        let authenticated_user = { "id": username};
        return done(null, authenticated_user); # authentication suceeded
    }  
}
));

app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
    async (req, res) => {
        res.redirect('/home' + req.user.id);
    }
);
```

the checkAuthenticated function is used as a middelware to check if the session contains a login. If not, the requested page is inaccessible and the user is redirected to /login

```js
// /server.js
checkAuthenticated = (req, res, next) => {
    console.log("Authenticating for access to " + req.originalUrl + "...")
    if (req.isAuthenticated()) { 
        console.log("Authentication done for access to " + req.originalUrl);
        return next();
    }
    res.redirect("/login")
}
```

## ?
** Why no registration pages? **
because the students are theoretically already in the concordia database.
