module.exports = {
	map : map
}

function map() {
	global.app.get('/cadastroFuncionario', global.checkAuth([4]), function (req, res) {
        global.db.query(global.services.especialidade.listAll(), function(err, rows) {
            res.render('cadastroFuncionario', {locals: {especialidades: rows, query : req.query}});
        });
    });

    global.app.post('/cadastroFuncionario', global.checkAuth([4]), function (req, res) {
        var post = req.body;
        global.db.query(global.services.usuario.registerFuncionario(post.nome, post.email, post.senha, post.telefone, post.endereco, post.tipo, post.tipo == 3? post.especialidade:null), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/cadastroFuncionario?err='+err.errno);
            } else if (rows.length !== 0) {
                res.redirect('/cadastroFuncionario');
            }
        });
    });
}