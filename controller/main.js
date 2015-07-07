module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.get('/', function(req, res) {

            res.render('index');

    });

    // about page 
    global.app.get('/about', function(req, res) {
        res.render('about');
    });


}