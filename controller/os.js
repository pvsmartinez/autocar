module.exports = {
    map: map
}

function map() {
    global.app.get('/os', global.checkAuth([1, 2, 3, 4]), function(req, res, next) {
        global.db.query(global.services.os.listCurrent(), function(err, rows) {
            global.error(err);
            res.render('listarOs', {
                locals: {
                    orders: rows
                }
            });
        });
    });
    global.app.get('/os/detalhes/:id', global.checkAuth([1,2,3,4]), function(req, res, next) {
        global.db.query(global.services.os.showOS(req.params.id), function(err, rows) {
            global.error(err);
            console.log(rows[0]);
            res.render('detalheOs', {
                locals : {
                    order : rows[0]
                }
            });
        });
    });
}