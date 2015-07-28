module.exports = {
    map: map
}

function map() {
    global.app.get('/os', global.checkAuth([1, 2, 3, 4]), function(req, res, next) {
        global.db.query(global.services.os.listCurrent(), function(err, rows) {
            global.error(err);
            res.render('listarOs', {
                locals: {
                    orders: rows,
                    todos: false
                }
            });
        });
    });
    global.app.get('/os/todos', global.checkAuth([1, 2, 3, 4]), function(req, res, next) {
        global.db.query(global.services.os.listAll(), function(err, rows) {
            global.error(err);
            res.render('listarOs', {
                locals: {
                    orders: rows,
                    todos: true
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
    global.app.get('/os/feito/:id' , global.checkAuth([1,2,3,4]), function(req, res) {
        global.db.query(global.services.os.setStatus(req.params.id, 4), function(err, rows){
            global.error(err);
            res.redirect('/os');
        })
    });
}