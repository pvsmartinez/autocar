module.exports = {
	map : map
}

function map() {

    global.app.get('/api/automovel/buscar', global.checkAuth([1,2,3,4]), function(req, res) {
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

}