module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.get('/agendamento', global.checkAuth([0, 1, 2, 3, 4]), function(req, res) {
        
    });

    global.app.get('/api/horarios-de-atendimento', global.checkAuth([0, 1, 2, 3, 4]), function(req, res) {
        
    });

}