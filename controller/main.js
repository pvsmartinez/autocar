module.exports = {
	map : map
}

function map() {
	// index page 

    global.app.get('/login', function(req, res) {
        if (req.session.user_id) {
            res.redirect('/home');
        }
        else {
            res.render('index');
        }
    });

    global.app.get('/', function(req, res) {
        if (req.session.user_id) {
            res.redirect('/home');
        }
        else {
            res.render('index');
        }
    });


}