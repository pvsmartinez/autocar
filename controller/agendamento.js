module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.get('/agendamento', global.checkAuth([0, 1, 2, 3, 4]), function(req, res) {
        
    });

    global.app.get('/api/horarios-de-atendimento', global.checkAuth([0, 1, 2, 3, 4]), function(req, res) {
    	var post = req.body;
        global.db.query(global.services.atendimento.getAllHours(post.date), function(err, rows) {
        	global.error(err);
        	return rows;
        });
    });

}