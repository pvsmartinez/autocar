module.exports = {
    map : map
}

function map() {
    global.app.get('/relatorios', global.checkAuth([4]), function (req, res, next) {
        res.render('relatorios');
    });
}
