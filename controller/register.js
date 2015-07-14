module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.post('/cadastro', function(req, res) {
        var post = req.body;
        global.db.query(global.services.usuario.register(post.nome, post.email, post.senha, post.telefone, post.endereco), function(err, rows) {
            if (err) {
                erro = err.errno == 1062?'Email já cadastrado':'Ocorreu um erro inesperado.';
                if (err.errno == 1062) {
                    res.render('cadastro', {locals: {erro: erro}});
                }
            } else if (rows.length !== 0) {
                console.log(rows);
                req.session.user_id = rows.insertId;
                req.session.user_permission = 0;
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