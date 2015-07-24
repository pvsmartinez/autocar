module.exports = {
    map: map
}

function map() {
    global.app.get('/os', global.checkAuth([1, 2, 3, 4]), function(req, res, next) {
        global.db.query(global.services.os.listAll(), function(err, rows) {
            global.error(err);
            res.render('os', {
                locals: {
                    orders: rows
                }
            });
        });

    });
}