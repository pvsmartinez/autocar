module.exports = {
	map : map
}

function map() {
	// index page 

    global.app.get('/welcome', global.checkAuth, function(req, res) {

            //res.send('if you are viewing this page it means you are logged in');
            res.render('homeLogada')
    });
}