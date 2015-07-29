module.exports = {
    map: map
}

function map() {
    global.app.get('/os', global.checkAuth([1, 2, 3, 4]), function(req, res, next) {
        global.db.query(global.services.os.listCurrent(req.session.user_permission != 4, req.session.user_id), function(err, rows) {
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
    global.app.get('/os/detalhes/:id', global.checkAuth([1,2,3,4]), function(req, res, next) {
        global.db.query(global.services.os.showOS(req.params.id, 0), function(err, rows) {
            global.error(err);
            global.db.query(global.services.os.showOS(req.params.id, 1), function(err, rws) {
                global.error(err);
                global.db.query(global.services.os.showOS(req.params.id, 2), function(err, srvs) {
                    global.error(err);
                    global.db.query(global.services.os.showOS(req.params.id, 3), function(err, pcs) {
                        global.error(err);
                        console.log('--- yey ---')
                        console.log(srvs);
                        console.log(pcs);
                        res.render('detalheOs', {
                            locals : {
                                order : rows[0],
                                time : rws[0],
                                servicos : srvs,
                                pecas : pcs,
                                os_id : req.params.id
                            }
                        });
                    });
                });
            });
        });
    });
    global.app.get('/os/autorizado/:id' , global.checkAuth([1,2,3,4]), function(req, res) {
        global.db.query(global.services.os.setStatus(req.params.id, 1), function(err, rows){
            global.error(err);
            res.redirect('/os');
        })
    });
    global.app.get('/os/suspenso/:id' , global.checkAuth([1,2,3,4]), function(req, res) {
        global.db.query(global.services.os.setStatus(req.params.id, 2), function(err, rows){
            global.error(err);
            res.redirect('/os');
        })
    });
    global.app.get('/os/cancelado/:id' , global.checkAuth([1,2,3,4]), function(req, res) {
        global.db.query(global.services.os.setStatus(req.params.id, 3), function(err, rows){
            global.error(err);
            res.redirect('/os');
        })
    });
    global.app.get('/os/feito/:id' , global.checkAuth([1,2,3,4]), function(req, res) {
        global.db.query(global.services.os.setStatus(req.params.id, 4), function(err, rows){
            global.error(err);
            res.redirect('/os');
        })
    });

    global.app.get('/api/os/equipeSugerida/:id', global.checkAuth([2,4]), function (req, res) {
        // PEDRO - FAZER ISSO AQUI!
        // vem o id na url
        res.send({nome: 'equipe x', f1_nome: 'mecanico y', f2_nome: 'mecanico z'});
    });

    global.app.get('/api/os/equipes', global.checkAuth([2,4]), function (req, res) {
        global.db.query(global.services.equipe.listAll(), function (err, rows) {
            if (err) {
                console.log(err);
            }
            res.send(rows);
        });
    });

    global.app.post('/os/editarEquipe/:id', checkAuth([2,3,4]), function (req, res) {
        global.db.query(global.services.os.setEquipe(req.params.id, req.body.equipe), function (err, result) {
            if (err) {
                console.log(err);
            }
            res.redirect('/os/detalhes/'+req.params.id);
        });
    });
}