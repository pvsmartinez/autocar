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

var foreingKeys = [];

connection.connect(function(err, results) {
    error(err);
    console.log("connected.");
    removeDb();
});

removeDb = function() {
    connection.query('drop database if exists autocar', function(err, results) {
        error(err);
        console.log("database deleted.");
        createDb();
    });
}

createDb = function() {
    connection.query('create database autocar', function(err, results) {
        error(err);
        console.log("database created OR already exists.");
        useDb();
    });
};
useDb = function() {
    connection.query('use autocar', function(err, results) {
        error(err);
        console.log("database connected");
        createTables();
    });
};
createTables = function() {
    var entity;
    fileModels.forEach(function(name) {
		entity = require("./models/" + name).ent();
        console.log(entity.__name + " entity loaded");
        connection.query(createTable(entity), function(err, results) {
            error(err);
            console.log("table " + entity.__name + " ready");
        });
    });
    for (var tb in foreingKeys) {
        connection.query(makeForeingKeys(tb,foreingKeys[tb]), function(err, results) {
            if (err) {
                console.log("ERROR: " + err.message);
                throw err;
            }
            console.log("foreign keys for " + tb + " created");
        });
    }
    connection.end();
};
createTable = function(entity) {
    var query = "CREATE TABLE " + entity.__name + '(';
    for (var field in entity) {
        if (entity.hasOwnProperty(field) && field.indexOf("__") === -1) {
            query += field + ' ';
            query += entity[field] + ', ';
        }
    }
    var regEx = new RegExp(/\((\w*)\)\s/);
    if (entity.hasOwnProperty("__foreignKeys")) {
        foreingKeys[entity.__name] = "";
        for (var fk in entity["__foreignKeys"]) {
            if (entity["__foreignKeys"].hasOwnProperty(fk)) {
                match = regEx.exec(entity["__foreignKeys"][fk]);
                foreingKeys[entity.__name] += "ADD INDEX " + match[0] + ",";
                foreingKeys[entity.__name] += "ADD FOREIGN KEY ";
                foreingKeys[entity.__name] += entity["__foreignKeys"][fk] + ','; 
            }
            
        }
        foreingKeys[entity.__name] = foreingKeys[entity.__name].slice(0, -1);
    }
    query += 'primary key (' + entity['__primaryKey'] + '))';

    console.log(query);
    return query;
};

makeForeingKeys = function(table,fk) {
     var query = "ALTER TABLE " + table + " " + fk;
     console.log(query);
     return query;
};

error = function(err) {
    if (err) {
        console.log("ERROR: " + err.message);
        throw err;
    }
};