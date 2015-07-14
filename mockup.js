// require
var mysql = require('mysql');
var fs = require('fs');
var pathModels = require("path").join(__dirname, "models");
var fileModels = fs.readdirSync(pathModels);
var text;
var lines;

if (typeof String.prototype.startsWith != 'function') {
    // see below for better implementation!
    String.prototype.startsWith = function(str) {
        return this.indexOf(str) === 0;
    };
}
// connect
console.log("connecting...");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'autocar'
});

connection.connect(function(err, results) {
    error(err);
    console.log("connected.");
    generateSQL();
    //Connected();
});

generateSQL = function() {
    text = "set autocommit = 0;\n";
    text += "set foreign_key_checks = 0;\n";
    fileModels.forEach(function(name) {
        var model = require("./models/" + name);
        var entity = model.ent();
        var objs = model.populate();
        text += "truncate " + entity.__name + ";\n";
        objs.forEach(function(obj) {
            text += createRow(entity.__name, obj) + ";\n";
        });
    });
    text += "set foreign_key_checks = 1;\n";
    text += "commit;\n";
    lines = text.split("\n");
    writeQuery(0);
}

writeQuery = function(index) {
    if (index === lines.length - 1) {
        connection.end();
        console.log("commited!");
        console.log("writing sql file...");
        fs.writeFile("mockup.sql", text, function(err) {
            error(err);
            console.log("sql file complete!");
        });
    } else {
        consoles(lines[index].slice(0, -1));
        connection.query(lines[index].slice(0, -1), function(err, results) {
            error(err);
            writeQuery(index + 1);
        });
    }
}

consoles = function(query) {
    if (query.startsWith('set')) {
        console.log("configuring...");
    } else if (query.startsWith('truncate')) {
        console.log("preparing table " + query.split(" ")[1]);
    } else if (query.startsWith('insert')) {
        console.log("inserting into table " + query.split(" ")[2]);
    } else if (query.startsWith('commit')) {
        console.log("commiting...");
    }
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

    return row;
}

error = function(err) {
    if (err) {
        console.log("ERROR: " + err.message);
        throw err;
    }
};