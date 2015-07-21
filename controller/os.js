module.exports = {
	map : map
}

function map() {
	global.app.get('/os', global.checkAuth([1,2,3,4]), function (req, res, next) {
		res.render('os');
	});
}