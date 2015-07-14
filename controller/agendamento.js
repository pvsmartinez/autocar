module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.get('/agendamento', global.checkAuth([0, 1, 2, 3, 4]), function(req, res) {
        global.db.query(global.services.atendimento.getModeloCarros(), function(err, rows) {
            global.error(err);
            res.render('agendamento',{locals: {modelos:rows}});
        });
    });

    global.app.post('/api/horarios-de-atendimento', global.checkAuth([0, 1, 2, 3, 4]), function(req, res) {
    	var post = req.body;
        global.db.query(global.services.atendimento.getAllHours(post.date), function(err, rows) {
        	global.error(err);
        	res.send(rows);
        });
    });

    global.app.post('/api/modelos-carros', global.checkAuth([0, 1, 2, 3, 4]), function(req, res) {
        var post = req.body;
        global.db.query(global.services.atendimento.getModeloCarros(), function(err, rows) {
            global.error(err);
            res.send(rows);
        });
    });
}