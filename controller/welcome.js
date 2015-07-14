module.exports = {
	map : map
}

function map() {
	// index page 

    global.app.get('/welcome', global.checkAuth([0,1,2,3,4]), function(req, res) {
            res.render('homeLogada')
    });
}