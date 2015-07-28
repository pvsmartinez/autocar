module.exports = {
    map: map
}

function map() {

    global.app.get('/api/automovel/buscar', global.checkAuth([1, 2, 3, 4]), function(req, res) {
        var get = req.query;
        global.db.query(global.services.automovel.findById(get.id), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });


    global.app.get('/api/automovel/buscarModeloCliente', global.checkAuth([1,2,3,4]), function(req, res) {
        var get = req.query;
        global.db.query(global.services.automovel.getModeloAndClienteById(get.id), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });


    global.app.get('/carro/editar/:id', global.checkAuth([0]), function(req, res) {
        global.db.query(global.services.automovel.findById(req.params.id), function(err, rows) {
            global.error(err);
            global.db.query(global.services.modelo_carro.listAll(), function(err, rws) {
                global.error(err);
                res.render('cadastroCarro', {
                    locals: {
                        carro: rows[0],
                        modelos: rws
                    }
                });
            });
        });
    });
    global.app.get('/carro/deletar/:id', global.checkAuth([0]), function(req, res) {
        global.db.query(global.services.automovel.excluir(req.params.id), function(err, rows) {
            global.error(err);
            res.redirect('/cliente');
        });
    });
    global.app.get('/carro/criar', global.checkAuth([0]), function(req, res) {
        global.db.query(global.services.modelo_carro.listAll(), function(err, rws) {
            global.error(err);
            res.render('cadastroCarro', {
                locals: {
                    modelos: rws
                }
            });
        });
    });
    global.app.post('/carro/criar', global.checkAuth([0]), function(req, res) {
        global.db.query(global.services.automovel.createCar(req.body, req.session.user_id), function(err, rows) {
            global.error(err);
            res.redirect('/cliente');
        });
    });
    global.app.post('/carro/editar', global.checkAuth([0]), function(req, res) {
        global.db.query(global.services.automovel.editCar(req.body), function(err, rows) {
            global.error(err);
            res.redirect('/cliente');
        });
    });

}