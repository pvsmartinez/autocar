module.exports = {
	map : map
}

function map() {
    global.app.get('/listarFuncionarios', global.checkAuth([4]), function (req, res) {
        console.log("chamou o controller");
        global.db.query(global.services.usuario.listFuncionarios(), function (err, rows) {
            if (err) {
                console.log(err);
                res.render('listarFuncionarios', {locals:{erro: 'Ocorreu um erro inesperado'}});
            } else {
                res.render('listarFuncionarios', {locals: {funcs: rows}});
            }
        });
    });
    
    global.app.get('/editarFuncionario', global.checkAuth([4]), function (req, res) {
        global.db.query(global.services.usuario.findFuncionarioById(req.query.id), function (err, funcs) {
            if (err) {
                console.log(err);
                res.redirect('/cadastroFuncionario?err='+err.errno);
            } else {
                if (funcs.length < 1) res.redirect('/404');
                else {
                    global.db.query(global.services.especialidade.listAll(), function(err, rows) {
                        res.render('cadastroFuncionario', {locals: {especialidades: rows, func: funcs[0]}});
                    });
                }
            }
        });
    });
    
    global.app.post('/editarFuncionario', global.checkAuth([4]), function (req, res) {
        post = req.body;
        global.db.query(global.services.usuario.editFuncionario(post.id, post.nome, post.email, post.senha, post.telefone, post.endereco, post.tipo, post.tipo == 3? post.especialidade:null), function (err, rows) {
            if (err) {
                res.redirect('/cadastroFuncionario?id='+post.id+'&err='+errno);
            } else {
                res.redirect('/detalheFuncionario?id='+post.id);
            }
        });
    });

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

    global.app.get('/detalheFuncionario', global.checkAuth([4]), function (req, res) {
        global.db.query(global.services.usuario.findFuncionarioById(req.query.id), function (err, rows) {
            if (err) {
                console.log(err);
            } else if (rows.length < 1) {
                res.redirect('/404');
            } else {
                res.render('detalheFuncionario', {locals: {func : rows[0]}});
            }
        });
    });
}