//configuration.js

// require
var mysql = require('mysql');
var fs = require('fs');
var pathModels = require("path").join(__dirname, "models");
var fileModels = fs.readdirSync(pathModels);

// connect
console.log("connecting...");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

connection.connect(function(err, results) {
    if (err) {
        console.log("ERROR: " + err.message);
        throw err;
    }
    console.log("connected.");
    Connected();
});

Connected = function() {
    connection.query('create database if not exists autocar', function(err, results) {
        if (err && err.number != connection.ERROR_DB_CREATE_EXISTS) {
            console.log("ERROR: " + err.message);
            throw err;
        }
        console.log("database created OR already exists.");
        dbCreated();
    });
};
dbCreated = function() {
    connection.query('use autocar', function(err, results) {
        if (err) {
            console.log("ERROR: " + err.message);
            throw err;
        }
        console.log("database connected");
        useOk();
    });
};
useOk = function() {
    var entity;
    fileModels.forEach(function(name) {
		entity = require("./models/" + name).ent();
        console.log(entity.__name + " entity loaded");
        connection.query(createTable(entity), function(err, results) {
            if (err && err.number != connection.ERROR_TABLE_EXISTS_ERROR) {
                console.log("ERROR: " + err.message);
                throw err;
            }
            console.log("table " + entity.__name + " ready");
            connection.end();
        });
    });
};
createTable = function(entity) {
    var query = "CREATE TABLE " + entity.__name + '(';
    for (var field in entity) {
        if (entity.hasOwnProperty(field) && field.indexOf("__") === -1) {
            query += field + ' ';
            query += entity[field] + ', ';
        }
    }
    query += 'primary key (' + entity['__primaryKey'] + '))';

    console.log(query);
    return query;
};