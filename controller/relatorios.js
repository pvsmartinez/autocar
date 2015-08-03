module.exports = {
    map : map
}

function map() {
    global.app.get('/relatorios', global.checkAuth([4]), function (req, res) {
        res.render('relatorios');
    });

    global.app.get('/api/estat/osByMonth', global.checkAuth([4]), function(req, res) {
    	global.db.query(global.services.relatorios.osByMonth(), function(err, rows) {
    		res.send(rows);
    	});
    });

    global.app.get('/api/estat/funcByType', global.checkAuth([4]), function(req, res) {
    	global.db.query(global.services.relatorios.funcByType(), function(err, rows) {
    		res.send(rows);
    	});
    });
    
    global.app.get('/api/estat/funcBySpec', global.checkAuth([4]), function(req, res) {
    	global.db.query(global.services.relatorios.funcBySpec(), function(err, rows) {
    		console.log(rows);
    		res.send(rows);
    	});
    });

    global.app.get('/api/estat/moneyByMonth', global.checkAuth([4]), function(req, res) {
    	global.db.query(global.services.relatorios.moneyByMonth(), function(err, rows) {
    		res.send(rows);
    	});
    });

}
