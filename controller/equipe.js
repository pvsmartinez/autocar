module.exports = {
	map : map
}

function map() {
	global.app.get('/listarEquipes', global.checkAuth([4]), function (req, res) {
        global.db.query(global.services.equipe.listAll(), function (err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/404');
            } else {
                res.render('listarEquipes',{locals: {equipes:rows}});
            }
        });
    });

    global.app.get('/cadastroEquipe', global.checkAuth([4]), function (req, res) {
        global.db.query(global.services.usuario.listMecanicos(), function (err, rows_mec) {
            if (err) {
                console.log(err);
            }
            global.db.query(global.services.especialidade.listAll(), function (err, rows_espec) {
                res.render('cadastroEquipe', {locals: {mecanicos: rows_mec, especialidades: rows_espec, query : req.query}});    
            });
            
        }); 
    });

    global.app.post('/cadastroEquipe', global.checkAuth([4]), function (req, res) {
        post = req.body;
        global.db.query(global.services.equipe.cadastro(post.nome, post.especialidade, post.funcionario1, post.funcionario2), function (err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/cadastroEquipe?err='+err.errno);
            }
            res.redirect('/listarEquipes');
        });
    });

    global.app.get('/editarEquipe', global.checkAuth([4]), function (req, res) {
        if (!req.query.id) {
            res.redirect('/404');
        } else {
            global.db.query(global.services.equipe.findById(req.query.id), function (err, rows) {
                if (err) {
                    console.log(err);
                    res.redirect('/404');
                } if (rows.length < 1) {
                    res.redirect('/404');
                } else {
                   global.db.query(global.services.usuario.listMecanicos(), function (err, rows_mec) {
                        if (err) {
                            console.log(err);
                        }
                        global.db.query(global.services.especialidade.listAll(), function (err, rows_espec) {
                            res.render('cadastroEquipe', {locals: {mecanicos: rows_mec, especialidades: rows_espec, query : req.query, equipe : rows[0]}});    
                        });
                    }); 
                }
            });
        }
    });
    
    global.app.post('/editarEquipe', global.checkAuth([4]), function (req, res) {
        post = req.body;
        global.db.query(global.services.equipe.editar(post.id, post.nome, post.especialidade, post.funcionario1, post.funcionario2), function (err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/editarEquipe?id='+post.id+'&err='+err.errno);
            }
            res.redirect('/listarEquipes');
        });
    });

    global.app.post('/excluirEquipe', global.checkAuth([4]), function (req, res) {
        post = req.body;
        global.db.query(global.services.equipe.excluir(post.id), function (err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/editarEquipe?id='+post.id+'&err='+err.errno);
            }
            res.redirect('/listarEquipes');
        });
    });

    global.app.post('/api/equipes', global.checkAuth([1,2,3,4]), function (req, res) {
        global.db.query(global.services.equipe.listAll(), function (err, rows) {
            global.error(err);
            res.send(rows);
        });
    });

}