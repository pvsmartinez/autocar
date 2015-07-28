module.exports = {
	map : map
}

function map() {
	global.app.get('/listarEspecialidades', global.checkAuth([4]), function(req, res) {
        global.db.query(global.services.especialidade.listAll(), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/404');
            } else {
               res.render('listarEspecialidades',{locals: {especialidades:rows}});
            }
        });
    });

    global.app.get('/cadastroEspecialidade', global.checkAuth([4]), function(req, res) {
        res.render('cadastroEspecialidade');
    });

    global.app.post('/cadastroEspecialidade', global.checkAuth([4]), function(req, res) {
        post = req.body;
        global.db.query(global.services.especialidade.cadastro(post.nome), function (err, rows) {
            if (err) {
                console.log(err);
                res.render('cadastroEspecialidade', {locals: {query : {err : err.errno}}});
            } else {
                res.redirect('/listarEspecialidades');
            }
        });
    });


    global.app.get('/editarEspecialidade', global.checkAuth([4]), function(req, res) {
        if (!req.query.id) {
                res.redirect('/404');
        } else {
            global.db.query(global.services.especialidade.findById(req.query.id), function(err, rows) {
                if (err) {
                    console.log(err);
                    res.redirect('/404');
                } else {
                   res.render('cadastroEspecialidade',{locals: {especialidade:rows[0], query : req.query}});
                }
            });
        }
    });

    global.app.post('/editarEspecialidade', global.checkAuth([4]), function(req, res) {
        post = req.body;
        global.db.query(global.services.especialidade.update(post.id, post.nome), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/editarEspecialidade?id='+post.id+'&err='+err.errno);
            } else {
               res.redirect('/listarEspecialidades');
            }
        });
    });

    global.app.post('/excluirEspecialidade', global.checkAuth([4]), function(req, res) {
        global.db.query(global.services.especialidade.excluir(req.body.id), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/editarEspecialidade?id='+req.body.id+'&err='+err.errno);
            } else {
               res.redirect('/listarEspecialidades');
            }
        });
    });

}