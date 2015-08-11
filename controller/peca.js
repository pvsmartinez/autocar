module.exports = {
	map : map
}

function map() {
	global.app.get('/listarPecas', global.checkAuth([4]), function(req, res) {
        global.db.query(global.services.peca.listAll(), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/404');
            } else {
               res.render('listarPecas',{locals: {pecas:rows}});
            }
        });
    });

    global.app.get('/cadastroPeca', global.checkAuth([4]), function(req, res) {
        res.render('cadastroPeca');
    });

    global.app.post('/cadastroPeca', global.checkAuth([4]), function(req, res) {
        post = req.body;
        global.db.query(global.services.peca.cadastro(post.nome, post.valor, post.quantidade_em_estoque), function (err, rows) {
            if (err) {
                console.log(err);
                res.render('cadastroPeca', {locals: {query : {err : err.errno}}});
            } else {
                res.redirect('/listarPecas');
            }
        });
    });


    global.app.get('/editarPeca', global.checkAuth([4]), function(req, res) {
        if (!req.query.id) {
                res.redirect('/404');
        } else {
            global.db.query(global.services.peca.findById(req.query.id), function(err, rows) {
                if (err) {
                    console.log(err);
                    res.redirect('/404');
                } else {
                   res.render('cadastroPeca',{locals: {peca:rows[0], query : req.query}});
                }
            });
        }
    });

    global.app.post('/editarPeca', global.checkAuth([4]), function(req, res) {
        post = req.body;
        global.db.query(global.services.peca.update(post.id, post.nome, post.valor, post.quantidade_em_estoque), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/editarPeca?id='+post.id+'&err='+err.errno);
            } else {
               res.redirect('/listarPecas');
            }
        });
    });

    global.app.post('/excluirPeca', global.checkAuth([4]), function(req, res) {
        global.db.query(global.services.peca.deletePeca(req.body.id), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/editarPeca?id='+req.body.id+'&err='+err.errno);
            } else {
               res.redirect('/listarPecas');
            }
        });
    });

    global.app.get('/api/pecas', global.checkAuth([1,2,3,4]), function(req, res) {
        global.db.query(global.services.peca.listAll(), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });

    global.app.get('/api/pecas/revisao', global.checkAuth([1,2,3,4]), function(req, res) {
        global.db.query(global.services.peca.listByRevisaoId(req.query.id), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });

}