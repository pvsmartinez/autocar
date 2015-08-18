module.exports = {
    map: map
}

function map() {
    // index page 
    global.app.get('/cliente', global.checkAuth([0]), function(req, res) {
        global.db.query(global.services.automovel.listUserCars(req.session.user_id), function(err, rows) {
            global.db.query(global.services.atendimento.getByClienteId(req.session.user_id), function(err, arows) {
                global.db.query(global.services.os.getByClienteId(req.session.user_id), function(err, osrows) {
                    res.render('cliente', {
                        locals : {
                            cars : rows,
                            agendamentos: arows,
                            ordens: osrows
                        }
                    });
                });
            });
        });
    });
    global.app.get('/editarPerfilCliente', global.checkAuth([0]), function(req, res) {
        res.render('cadastro', {
            locals: {
                query: req.query
            }
        });
    });

    global.app.post('/editarPerfilCliente', global.checkAuth([0]), function(req, res) {
        var post = req.body;
        global.db.query(global.services.usuario.editarPerfilCliente(post.id, post.nome, post.email, post.senha, post.telefone, post.endereco), function(err, info) {
            if (err) {
                console.log(err);
                res.redirect('/editarPerfilCliente?erro=' + err.errno);
            } else {
                res.redirect('/cliente');
            }
        });
    });

    global.app.get('/api/cliente/buscar', global.checkAuth([1,2,3,4]), function(req, res) {
        var get = req.query;
        global.db.query(global.services.usuario.findById(get.id), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });

    global.app.get('/api/cliente/listar', global.checkAuth([1,2,3,4]), function(req, res) {
        global.db.query(global.services.usuario.listClientes(), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });
    
}