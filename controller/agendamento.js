module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.get('/agendamento', global.checkAuth, function(req, res) {
        
    });

    global.app.get('/api/horarios-de-atendimento', global.checkAuth, function(req, res) {
        
    });

}