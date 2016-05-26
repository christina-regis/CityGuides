var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db.js');

var port = process.env.PORT || 3000;

var app = express();

//to allow front to access back
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};
app.use(allowCrossDomain);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./config/passport')(passport, Strategy);

//middleware
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(session({secret: config.sessions_secret, resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/index')(app, passport);

app.use(express.static(path.join(__dirname, 'public')));

//setting routes
var authRoutes = require('./routes/hostAuth.js');
app.use('/auth', authRoutes);
var gauthRoutes = require('./routes/guestAuth.js');
app.use('/gauth', gauthRoutes);
var hostRoutes = require('./routes/hosts.js');
app.use('/hosts', hostRoutes);
var guestRoutes = require('./routes/guests.js');
app.use('/guests', guestRoutes);

app.listen(port);
console.log('puppies are listenng on port ' + port);


