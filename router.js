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

            res.render('index');

    });

    // about page
    app.get('/about', function(req, res) {
        res.render('about');
    });
}