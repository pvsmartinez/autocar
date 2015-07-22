module.exports = {
	map : map
}

function map() {
	global.app.get('/listarTiposDeServico', global.checkAuth([4]), function(req, res) {
        global.db.query(global.services.tipo_de_servico.listAll(), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/404');
            } else {
               res.render('listarTiposDeServico',{locals: {tipos:rows}});
            }
        });
    });

    global.app.get('/cadastroTipoDeServico', global.checkAuth([4]), function(req, res) {
        res.render('cadastroTipoDeServico');
    });

    global.app.post('/cadastroTipoDeServico', global.checkAuth([4]), function(req, res) {
        post = req.body;
        global.db.query(global.services.tipo_de_servico.cadastro(post.nome, post.preco, post.duracao), function (err, rows) {
            if (err) {
                console.log(err);
                res.render('cadastroTipoDeServico', {locals: {query : {err : err.errno}}});
            } else {
                res.redirect('/listarTiposDeServico');
            }
        });
    });


    global.app.get('/editarTipoDeServico', global.checkAuth([4]), function(req, res) {
        if (!req.query.id) {
                res.redirect('/404');
        } else {
            global.db.query(global.services.tipo_de_servico.findById(req.query.id), function(err, rows) {
                if (err) {
                    console.log(err);
                    res.redirect('/404');
                } else {
                   res.render('cadastroTipoDeServico',{locals: {tipo:rows[0], query : req.query}});
                }
            });
        }
    });

    global.app.post('/editarTipoDeServico', global.checkAuth([4]), function(req, res) {
        post = req.body;
        global.db.query(global.services.tipo_de_servico.update(post.id, post.nome, post.preco, post.duracao), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/editarTipoDeServico?id='+post.id+'&err='+err.errno);
            } else {
               res.redirect('/listarTiposDeServico');
            }
        });
    });

    global.app.post('/excluirTipoDeServico', global.checkAuth([4]), function(req, res) {
        global.db.query(global.services.tipo_de_servico.excluir(req.body.id), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/editarTipoDeServico?id='+req.body.id+'&err='+err.errno);
            } else {
               res.redirect('/listarTiposDeServico');
            }
        });
    });

}