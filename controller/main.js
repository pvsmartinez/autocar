module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.get('/', function(req, res) {
        global.db.query(global.services.user.getAll(), function(err, rows) {
            global.error(err);
            res.render('index', {
                users: rows
            });
        });
    });

    // about page 
    global.app.get('/about', function(req, res) {
        res.render('about');
    });
}