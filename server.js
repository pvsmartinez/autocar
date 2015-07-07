// server.js

// requirements ================================================================
console.log("node: starting...");
var express = require('express');
var app = express(); // create our app w/ express
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var mysql = require('mysql');
var router = require('./router.js');
var port = 8080;

// mysql configuration =========================================================
console.log("mySQL: connecting...");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database : 'autocar'
});
connection.connect();
console.log("mySQL: connected!");

// backend to frontend configuration ===========================================
console.log("express: configuring...");
app.set('views', __dirname + '/public/views/pages');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
console.log("express: configured!");

// routes ======================================================================
console.log("express: routing...");
router.map(app, connection);
console.log("express: routed!");

// listen (start app with node server.js) ======================================
console.log("node: opening port...");
app.listen(port);
console.log("node: listening on port " + port);

// pronto! está rodando ========================================================