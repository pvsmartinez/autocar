module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.post('/login', function(req, res) {
        var post = req.body;
        global.db.query(global.services.usuario.findByEmailAndPassword(post.email, post.senha), function(err, rows) {
            global.error(err);
            if (rows.length === 0) {

                res.render('index',{errorMsg: "Email ou senha incorretos"});

            } else {
                console.log(rows[0].id);
                req.session.user_id = rows[0].id;
                res.redirect('/welcome');
            }
        });
    });
    
}