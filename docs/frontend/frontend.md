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
A connection system has been set up to allow data security and to authenticate the students (especially to know the level of study called *role*)
Students who go to the site without a logged in session are presented with a home page. `They fill in their username and password.
![](img/login.png)

This page is under the /login route.
With [GET]/login that sends the page back and [POST]/login that receives the information to establish the connection or not.
The /static/login.js which is link to the page/login/html do the [POST] request to submit the form.
```js
$(function(){
    $(function(){
        $('#login-form').on('submit', function(e){
            alertify.set('notifier','position', 'top-right');
            e.preventDefault();

            //----- post the form to [POST]/login 
            $.ajax({
                url: 'http://localhost:3000/login',
                type: 'POST',
                data: $('#login-form').serialize(),
                success: function(data){
                    location.href = "/home";
                },
                error: function(data){
                    console.log("failed");
                    if (data.status === 401) { alertify.error(data.statusText + ": Invalid credentials", 'error', 5 )};
                }            
            });
            // ------

        });
    });
});

```



## security
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
because the students are theorically already in the concordia database.
