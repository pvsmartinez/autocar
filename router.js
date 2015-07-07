var fs = require('fs');
var pathModels = require("path").join(__dirname, "services");
var fileModels = fs.readdirSync(pathModels);
var services = {};
fileModels.forEach(function(name) {
    services[name.slice(0, -6)] = require("./services/" + name);
});
console.log(services);

module.exports = {
    map: map
}

function map(app, db) {

    // load the single view file (angular will handle the page changes on the front-end)
    // for spa and angular
    // app.get('*', function(req, res) {
    // 		res.sendfile('./public/index.html'); 
    // });

    // index page 
    app.get('/', function(req, res) {
    
        db.query(services.user.getAll(), function(err, rows) {
            if (err) {
                console.log("ERROR: " + err.message);
                throw err;
            }
            //return rows;
            res.render('index', {
                users: rows
            });
        });


    });

    // about page 
    app.get('/about', function(req, res) {
        res.render('about');
    });
}