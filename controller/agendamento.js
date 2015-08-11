module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.get('/agendamento', global.checkAuth([0, 1, 2, 3, 4]), function(req, res) {
        res.render('agendamento');
    });

    global.app.post('/agendamento', global.checkAuth([0, 1, 2, 3, 4]), function(req, res) {
        var post = req.body;
        global.db.query(global.services.atendimento.insertAutomovel(req.session.user_id, post.placa, post.renavan, post.modelo, post.ano, post.quilometragem), function(err, info) {
            global.error(err);
            var carroId = info.insertId ? info.insertId : post.carro;
            global.db.query(global.services.atendimento.insertAtendimento(post.horario, carroId), function(err, rows) {
                global.error(err);
                res.render('mensagem',{locals: {
                    tipo:"success",
                    titulo:"Agendamento concluido",
                    mensagem:"Seu agendamento foi realizado com sucesso."
                }});
            });
        });
    });


    global.app.get('/api/horarios-de-atendimento', global.checkAuth([0, 1, 2, 3, 4]), function(req, res) {
    	var get = req.query;
        global.db.query(global.services.atendimento.getAllHours(get.date), function(err, rows) {
        	global.error(err);
        	res.send(rows);
        });
    });

    global.app.get('/api/modelos-carros', global.checkAuth([0, 1, 2, 3, 4]), function(req, res) {
        global.db.query(global.services.atendimento.getModeloCarros(), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });

    global.app.get('/api/especialidades', global.checkAuth([1, 2, 3, 4]), function(req, res) {
        global.db.query(global.services.especialidade.listAll(), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });

    global.app.get('/agendamento/cancelar/:id', global.checkAuth([0,1,2,3,4]), function(req, res) {
        var id = req.params.id;
        global.db.query(global.services.atendimento.findClientById(id), function(err, rows) {
            console.log(id);
            if (rows.length > 0 && rows[0].cliente_id == req.session.user_id) {
                    global.db.query(global.services.atendimento.cancelarAtendimento(id), function(err, rows) {
                        global.error(err);
                        res.render('mensagem',{locals: {
                            tipo:"success",
                            titulo:"Agendamento cancelado",
                            mensagem:"Seu agendamento foi cancelado com sucesso.",
                            redir:"/cliente"
                        }});
                    });
            } else {
                res.render('mensagem',{locals: {
                    tipo:"danger",
                    titulo:"Erro",
                    mensagem:"Erro ao cancelar o agendamento.",
                    redir:"/cliente"
                }});
            }
        });
    });

}