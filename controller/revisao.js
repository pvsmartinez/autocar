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
         global.db.beginTransaction(function (err) {
            global.db.query(global.services.revisao.cadastro(post.modelo, post.quilometragem, post.preco), function (err, sqlres) {
            if (err) {
                console.log(err);
                global.db.rollback();
            }
            if (post.peca && post.peca.length > 0) {
                global.db.query(global.services.revisao.adicionarPecas(sqlres.insertId, post.peca, post.qtd), function (err, rows) {
                    if (err) {
                        console.log(err);
                        global.db.rollback();
                    } else {
                        global.db.commit(function (err) {
                            console.log(err);
                            global.db.rollback();
                        });
                    }
                    res.redirect('/listarRevisoes');
                });
            } else {
                    res.redirect('/listarRevisoes');
            }
         });

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
        if (!req.query.id) {
                res.redirect('/404');
        } else {
            global.db.query(global.services.revisao.findById(req.query.id), function(err, rows_rev) {
                if (err) {
                    console.log(err);
                    res.redirect('/404');
                } else if (rows_rev.length < 1) {
                    res.redirect('/404');
                }else {
                    global.db.query(global.services.revisao.pecasAssociadas(req.query.id), function (err, rows_pec) {
                        if (err) {
                            console.log(err);
                        }
                        var revisao = rows_rev[0];
                        revisao.pecasAssociadas = rows_pec;
                        global.db.query(global.services.modelo_carro.listAll(), function (err, rows_carros) {
                            if (err) {
                                console.log(err);
                            }
                            global.db.query(global.services.peca.listAll(), function (err, rows_pecas) {
                                res.render('cadastroRevisao',{locals: {revisao: revisao, query : req.query, pecas: rows_pecas, carros: rows_carros}});
                            });
                        });


                        
                    });
                }
            });
        }
    });

    global.app.post('/editarRevisao', global.checkAuth([4]), function(req, res) {
        post = req.body;
        global.db.beginTransaction(function (err) {
            if (err) {
                throw err;
            }
            global.db.query(global.services.revisao.excluirPecasAssociadas(post.id), function (err, rows) {
                if (err) {
                    console.log(err);
                    global.db.rollback();
                    res.redirect('/editarRevisao?id='+req.body.id+'&err='+err.errno);
                } else {
                    global.db.query(global.services.revisao.adicionarPecas(post.id, post.peca, post.qtd), function (err, rows) {
                        if (err) {
                            console.log(err);
                            global.db.rollback();
                            res.redirect('/editarRevisao?id='+req.body.id+'&err='+err.errno);
                        } else {
                            global.db.query(global.services.revisao.update(post.id, post.modelo, post.preco, post.quilometragem), function (err, rows) {
                                if (err) {
                                    console.log(err);
                                    global.db.rollback();
                                    res.redirect('/editarRevisao?id='+req.body.id+'&err='+err.errno);
                                } else {
                                    global.db.commit(function (err) {
                                        global.db.rollback();
                                    });
                                    res.redirect('/detalheRevisao?id='+post.id);
                                }
                            });
                        }
                    });
                }
            });
        });
    });

    global.app.post('/excluirRevisao', global.checkAuth([4]), function(req, res) {
        global.db.query(global.services.revisao.excluirPecasAssociadas(req.body.id), function(err, rows) {
            if (err) {
                console.log(err);
                res.redirect('/editarRevisao?id='+req.body.id+'&err='+err.errno);
            } else {
                global.db.query(global.services.revisao.excluir(req.body.id), function (err, rows) {
                    if (err) {
                        console.log(err);
                        res.redirect('/editarRevisao?id='+req.body.id+'&err='+err.errno);
                    } else {
                        res.redirect('/listarRevisoes');
                    }  
                });
               
            }
        });
    });

    global.app.get('/api/revisoes', global.checkAuth([1,2,3,4]), function(req, res) {
        var get = req.query;
        global.db.query(global.services.revisao.buscar(get.modelo_id), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });

}