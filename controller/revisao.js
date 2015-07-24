module.exports = {
	map : map
}

function map() {
	global.app.get('/listarRevisoes', global.checkAuth([4]), function(req, res) {
        global.db.query(global.services.revisao.listAll(), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/404');
            } else {
               res.render('listarRevisoes',{locals: {revisoes:rows}});
            }
        });
    });

    global.app.get('/cadastroRevisao', global.checkAuth([4]), function(req, res) {
        global.db.query(global.services.modelo_carro.listAll(), function (err, rows_carros) {
            if (err) {
                console.log(err);
            }
            global.db.query(global.services.peca.listAll(), function (err, rows_pecas) {
                res.render('cadastroRevisao', {locals:{carros: rows_carros, pecas: rows_pecas}});
            });
        });
    });

    global.app.post('/cadastroRevisao', global.checkAuth([4]), function(req, res) {
         post = req.body;
         global.db.query(global.services.revisao.cadastro(post.modelo, post.quilometragem, post.preco), function (err, sqlres) {
            if (post.peca.length > 0) {
                global.db.query(global.services.revisao.adicionarPecas(sqlres.insertId, post.peca, post.qtd), function (err, rows) {
                    if (err) {
                        console.log(err);
                    }
                    res.redirect('/listarRevisoes');
                });
            } else {
                    res.redirect('/listarRevisoes');
            }
         });
    });

    global.app.get('/detalheRevisao', global.checkAuth([4]), function (req, res) {
            if (!req.query.id) {
                res.redirect('/404');
            } else {
                global.db.query(global.services.revisao.details(req.query.id), function (err, rows_detail) {
                    if (err) {
                        console.log(err);
                        res.redirect('/404');
                    } else {
                        global.db.query(global.services.revisao.pecasAssociadas(req.query.id), function (err, rows) {
                            if (err) {
                                console.log(err);
                            }
                            res.render('detalheRevisao', {locals: {revisao: rows_detail[0], pecasAssociadas: rows}});
                        });
                    }
                });
            }
    });


    global.app.get('/editarRevisao', global.checkAuth([4]), function(req, res) {
        /*if (!req.query.id) {
                res.redirect('/404');
        } else {
            global.db.query(global.services.revisao.findById(req.query.id), function(err, rows) {
                if (err) {
                    console.log(err);
                    res.redirect('/404');
                } else {
                   res.render('cadastroPeca',{locals: {peca:rows[0], query : req.query}});
                }
            });
        }*/
    });

    global.app.post('/editarRevisao', global.checkAuth([4]), function(req, res) {
        // post = req.body;
        // global.db.query(global.services.peca.update(post.id, post.nome, post.valor, post.quantidade_em_estoque), function(err, rows) {
        //     if (err) {
        //         console.log(err);
        //         res.redirect('/editarPeca?id='+post.id+'&err='+err.errno);
        //     } else {
        //        res.redirect('/listarPecas');
        //     }
        // });
    });

    global.app.post('/excluirRevisao', global.checkAuth([4]), function(req, res) {
        global.db.query(global.services.revisao.excluir(req.body.id), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/editarRevisao?id='+req.body.id+'&err='+err.errno);
            } else {
               res.redirect('/listarRevisoes');
            }
        });
    });

}