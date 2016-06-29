

var express = require("express");
var app = express();

var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var html	= require('html');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + 'public')); //setup static public directory
app.use(express.static(__dirname + 'app')); //setup static public directory

app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');
app.use(session({ secret: 'secret' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
require('./app/routes.js')(app,passport);
app.use( express.static( "img" ) );
app.use( express.static( "public" ) );
app.use( express.static( "app" ) );


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});