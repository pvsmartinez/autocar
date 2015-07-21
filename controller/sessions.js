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
                req.session.user_permission = rows[0].permissao;
                res.redirect('/home');
            }
        });
    });

    global.app.post('/cadastro', function(req, res) {
        var post = req.body;
        global.db.query(global.services.usuario.register(post.nome, post.email, post.senha, post.telefone, post.endereco), function(err, rows) {
            if (err) {
                erro = err.errno == 1062?'Email já cadastrado':'Ocorreu um erro inesperado.';
                res.render('cadastro', {locals: {erro: erro}});
            } else if (rows.length !== 0) {
                console.log(rows);
                req.session.user_id = rows.insertId;
                req.session.user_permission = 0;
                res.redirect('/home');
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

    global.app.post('/logout', global.checkAuth([0,1,2,3,4]), function (req, res) {
        req.session.destroy();
        res.redirect('/login');
    });
}