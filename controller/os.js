module.exports = {
    map: map
}

function map() {
    global.app.get('/os', global.checkAuth([1, 2, 3, 4]), function(req, res, next) {
        var flag = req.session.user_permission != 4 && req.session.user_permission != 2;
        global.db.query(global.services.os.listCurrent(flag, req.session.user_id), function(err, rows) {
            global.error(err);
            res.render('listarOs', {
                locals: {
                    orders: rows,
                    todos: false
                }
            });
        });
    });
    global.app.get('/os/todos', global.checkAuth([1, 2, 3, 4]), function(req, res, next) {
        global.db.query(global.services.os.listAll(req.session.user_permission != 4, req.session.user_id), function(err, rows) {
            global.error(err);
            res.render('listarOs', {
                locals: {
                    orders: rows,
                    todos: true
                }
            });
        });
    });
    global.app.get('/os/detalhes/:id', global.checkAuth([1, 2, 3, 4]), function(req, res, next) {
        global.db.query(global.services.os.showOS(req.params.id, 0), function(err, rows) {
            global.error(err);
            global.db.query(global.services.os.showOS(req.params.id, 1), function(err, rws) {
                global.error(err);
                global.db.query(global.services.os.showOS(req.params.id, 2), function(err, srvs) {
                    global.error(err);
                    global.db.query(global.services.os.showOS(req.params.id, 3), function(err, pcs) {
                        global.error(err);
                        global.db.query(global.services.os.showOS(req.params.id, 4), function(err, rev) {
                            global.error(err);
                            res.render('detalheOs', {
                                locals : {
                                    order : rows[0],
                                    time : rws[0],
                                    servicos : srvs,
                                    pecas : pcs,
                                    revisao: rev[0],
                                    os_id : req.params.id
                                }
                            });
                        });
                    });
                });
            });
        });
    });
    global.app.get('/os/autorizado/:id', global.checkAuth([1, 2, 3, 4]), function(req, res) {
        global.db.query(global.services.os.setStatus(req.params.id, 1), function(err, rows) {
            global.error(err);
            res.redirect('/os');
        })
    });
    global.app.get('/os/suspenso/:id', global.checkAuth([1, 2, 3, 4]), function(req, res) {
        global.db.query(global.services.os.setStatus(req.params.id, 2), function(err, rows) {
            global.error(err);
            res.redirect('/os');
        })
    });
    global.app.get('/os/cancelado/:id', global.checkAuth([1, 2, 3, 4]), function(req, res) {
        global.db.query(global.services.os.setStatus(req.params.id, 3), function(err, rows) {
            global.error(err);
            setTimeout(function() {
                global.db.query(global.services.os.cantRecover(req.params.id), function(err, rows) {
                    global.error(err);
                    console.log('canceled for good');
                });
            }, 24 * 60 * 60 * 1000);
            res.redirect('/os');
        })
    });
    global.app.get('/os/feito/:id', global.checkAuth([1, 2, 3, 4]), function(req, res) {
        global.db.query(global.services.os.setStatus(req.params.id, 4), function(err, rows) {
            global.error(err);
            res.redirect('/os');
        })
    });
    global.app.get('/api/os/equipeSugerida/:id', global.checkAuth([2, 4]), function(req, res) {
        global.db.query(global.services.os.getNextEquipe(req.params.id, true), function(err, rows) {
            res.send(rows[0]);
        });
    });
    global.app.get('/api/os/equipeSugeridaNaCriacao/:id', global.checkAuth([2, 4]), function (req, res) {
        global.db.query(global.services.os.getNextEquipe(req.params.id, false), function(err, rows) {
            res.send(rows[0]);
        });
    });
    global.app.get('/api/os/equipes', global.checkAuth([2, 4]), function(req, res) {
        global.db.query(global.services.equipe.listAll(), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });
    global.app.post('/os/alterarEquipe/:id', checkAuth([2, 3, 4]), function(req, res) {
        global.db.query(global.services.os.setEquipe(req.params.id, req.body.equipe), function(err, result) {
            global.error(err);
            global.db.query(global.services.equipe.findById(req.body.equipe), function(err, rows) {
                global.error(err);
                var equipe = rows[0];
                global.db.query(global.services.equipe.newHour(equipe.id, equipe.proximo_horario, req.body.duracao), function(err, rows) {
                    global.error(err);
                    res.redirect('/os/detalhes/' + req.params.id);
                });
            });
        });
    });
    global.app.post('/os/cadastrar/', global.checkAuth([1,2,3,4]), function (req, res) {
        var dt = moment().format();
        var equipe = JSON.parse(req.body.equipe);
        global.db.query(global.services.os.cadastrar(equipe.id, req.body.automovel, req.body.atendimento, dt, equipe.proximo_horario, req.body.preco, req.body.tipo, req.body.revisao, req.body.especialidade, req.body.descricao, req.body.duracao), function(err, result) {
            if (err) {
                console.log(err);
                res.render('mensagem', {
                    locals: {
                        tipo: "danger",
                        titulo: "Erro ao criar ordem de serviço",
                        mensagem: err
                    }
                });
            } else {
                if (req.body.pecas != "") {
                    var jsonPecas = JSON.parse(req.body.pecas);
                    for (var i in jsonPecas) {
                        global.db.query(global.services.os.cadastrarPeca(result.insertId, jsonPecas[i].id, jsonPecas[i].qtd), function(err, presult) {
                            if (err) {
                                console.log(err);
                            }
                        });
                    }
                }
                for (var i in req.body.servicos) {
                    console.log("servico:" + req.body.servicos[i]);
                    global.db.query(global.services.os.cadastrarServico(result.insertId, req.body.servicos[i]), function(err, presult) {
                        if (err) {
                            console.log(err);
                        }
                    });
                }

                global.db.query(global.services.equipe.newHour(equipe.id, equipe.proximo_horario, req.body.duracao), function(err, rows) {
                    global.error(err);
                });
            }
            res.render('mensagem', {
                locals: {
                    tipo: "success",
                    titulo: "Ordem de serviço criado",
                    mensagem: "Nova ordem de serviço criada com sucesso.",
                    redir: "/os/detalhes/" + result.insertId
                }
            });
        });
    });
    global.app.get('/api/os/precoIdeal', global.checkAuth([1,2,3,4]), function (req, res) {
        var preco = 0;
        var quantidades = req.query.quantidades.split(",");
        if (req.query.pecas == '') var pecas = [];
        else var pecas = req.query.pecas.split(",");
        if (req.query.servicos == '') var servicos = [];
        else var servicos = req.query.servicos.split(",");
        var revisao = req.query.revisao;
        console.log(req.query);
        var n_requests = pecas.length + servicos.length + revisao.length;
        var req_counter = 0;
        var pecas_counter = 0;
        var queryCallback = function() {

            if (++req_counter == n_requests) {
                preco = preco.toFixed(2);
                res.send({
                    "preco": preco
                });
            }

        };
        for (var i = 0; i < pecas.length; i++) {
            global.db.query(global.services.peca.findById(pecas[i]), function(err, rows) {
                if (err) {
                    console.log(err);
                }  
                preco += rows[0].valor * parseInt(quantidades[pecas_counter]);
                queryCallback();
                pecas_counter++;
            });
        }
        for (var i = 0; i < servicos.length; i++) {
            global.db.query(global.services.tipo_de_servico.findById(servicos[i]), function(err, rows) {
                if (err) {
                    console.log(err);
                }  
                preco += rows[0].preco;
                queryCallback();
            });
        }
        if (revisao != '') {
            global.db.query(global.services.revisao.findById(revisao), function(err, rows) {
                if (err) {
                    console.log(err);
                }  
                preco += rows[0].preco;
                queryCallback();
            });
        }
    });
    global.app.get('/api/os/atendimento', global.checkAuth([1, 2, 3, 4]), function(req, res, next) {
        global.db.query(global.services.os.findByAtendimentoId(req.query.id), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });
}