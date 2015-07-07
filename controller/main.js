module.exports = {
	map : map
}

function map() {
	// index page 

    global.app.get('/', function(req, res) {

            res.render('index');

    });

    global.app.post('/', function(req, res) {

            res.render('index', {errorMsg: req.body.errorMsg});

    });

    // about page 
    global.app.get('/about', function(req, res) {
        res.render('about');
    });


}