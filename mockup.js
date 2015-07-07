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
    password: 'root',
    database: 'autocar'
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
    connection.query("set autocommit = 0", function(err, results) {
        if (err) {
            console.log("ERROR: " + err.message);
            throw err;
        }
    });
    connection.query("set foreign_key_checks = 0", function(err, results) {
        if (err) {
            console.log("ERROR: " + err.message);
            throw err;
        }
        console.log("mockup starting...");
        populate();
    });
}

populate = function() {
    var model;
    var entity;
    var objs;
    fileModels.forEach(function(name) {
        model = require("./models/" + name);
        entity = model.ent();
        objs = model.populate();
        if (entity.__weak) {
            connection.query("truncate " + entity.__name, function(err, results) {
                if (err && err.number != connection.ERROR_TABLE_EXISTS_ERROR) {
                    console.log("ERROR: " + err.message);
                    throw err;
                }
                console.log(entity.__name + " entity ready for populating");
            });
        }
        
        objs.forEach(function(obj) {
            connection.query(createRow(entity.__name, obj), function(err, results) {
                if (err && err.number != connection.ERROR_TABLE_EXISTS_ERROR) {
                    console.log("ERROR: " + err.message);
                    throw err;
                }
                console.log("1 row inserted");
            });
        });
        console.log("table " + entity.__name + " populated");

    });
    finish();
};

finish = function() {
    connection.query("set foreign_key_checks = 1", function(err, results) {
        if (err) {
            console.log("ERROR: " + err.message);
            throw err;
        }
    });
    connection.query("commit", function(err, results) {
        if (err) {
            console.log("ERROR: " + err.message);
            throw err;
        }
        console.log("mockup concluido!");
    });
    connection.end();
}

createRow = function(entity, obj) {
    var row = "insert into " + entity + " (";
    var fields = [];
    var values = [];
    for (var field in obj) {
        if (obj.hasOwnProperty(field) && field.indexOf("__") === -1) {
            fields.push(field);
            values.push(obj[field]);
        }
    }
    fields.forEach(function(field) {
        row += field + ',';
    });
    row = row.slice(0, -1) + ') values (';
    values.forEach(function(value) {
        row += "'" + value + "',";
    });
    row = row.slice(0, -1) + ")";

    console.log(row);
    return row;
}