require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      ctrl = require('./controller'),
      authCtrl = require('./authController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60}
}));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
})

// authctrl endpoints
app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/login', authCtrl.login);
app.post('/api/auth/logout', authCtrl.logout);

//ctrl endpoints
app.get('/api/posts/:userid', ctrl.getPosts);

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server sprinting on port ${port}`));