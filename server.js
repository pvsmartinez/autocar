// server.js

// requirements ================================================================
console.log("node: starting...");
var express = require('express');
global.app = express(); // create our app w/ express
var session = require('express-session');
var bodyParser = require('body-parser')
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var mysql = require('mysql');
var fs = require('fs');
var pathServices = require("path").join(__dirname, "services");
var fileServices = fs.readdirSync(pathServices);
global.services = {};
fileServices.forEach(function(name) {
    global.services[name.slice(0, -6)] = require("./services/" + name);
});
var pathRoutes = require("path").join(__dirname, "controller");
var fileRoutes = fs.readdirSync(pathRoutes);
var port = 8080;

// mysql configuration =========================================================
console.log("mySQL: connecting...");
global.db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database : 'autocar'
});
global.db.connect();
console.log("mySQL: connected!");

// backend to frontend configuration ===========================================
console.log("express: configuring...");
global.app.set('views', __dirname + '/public/views/pages');
global.app.set('view engine', 'ejs');
global.app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
global.app.use(morgan('dev')); // log every request to the console
global.app.use( bodyParser.json() );       // to support JSON-encoded bodies
global.app.use( bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
global.app.use(session({secret:'autocarsecret',saveUninitialized:false,resave:false}));
console.log("express: configured!");

global.checkAuth = function(req, res, next) {

  console.log(req.session);
  if (!req.session.user_id) {
    res.redirect('/');
  } else {
    next();
  }

}

// routes ======================================================================
console.log("express: routing...");
fileRoutes.forEach(function(name) {
    require("./controller/" + name).map();
});
console.log("express: routed!");

// listen (start app with node server.js) ======================================
console.log("node: opening port...");
global.app.listen(port);
console.log("node: listening on port " + port);

// pronto! está rodando ========================================================
global.error = function(err) {
    if (err) {
        console.log("ERROR: " + err.message);
        throw err;
    }
};