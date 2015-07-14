module.exports = {
	map : map
}

function map() {
	// index page 

    global.app.get('/welcome', checkAuth, function(req, res) {

            //res.send('if you are viewing this page it means you are logged in');
            res.render('homeLogada')
    });
}

function checkAuth(req, res, next) {
  console.log(req.session);
  if (!req.session.user_id) {
    res.redirect('/');
  } else {
    next();
  }
}