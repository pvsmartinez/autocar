module.exports = {
	map : map
}

function map() {
	// index page 

    global.app.get('/welcome', checkAuth, function(req, res) {

            res.send('if you are viewing this page it means you are logged in');

    });


}

function checkAuth(req, res, next) {
  console.log(req.session);
  if (!req.session.user_id) {
    res.send('You are not authorized to view this page');
  } else {
    next();
  }
}