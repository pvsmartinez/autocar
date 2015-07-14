module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.post('/cadastro', function(req, res) {
        var post = req.body;
        global.db.query(global.services.usuario.register(post.nome, post.email, post.senha), function(err, rows) {
            global.error(err);
            if (rows.length !== 0) {
                console.log(rows);
                req.session.user_id = rows.insertId;
                res.redirect('/welcome');
            }
        });
    });

    global.app.get('/cadastro', function(req, res) {
        if (req.session.user_id) {
            res.redirect('/');
        } else {
            res.render('cadastro');
        }
    });
    
}