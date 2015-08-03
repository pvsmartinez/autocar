module.exports = {
    map : map
}

function map() {
    global.app.get('/relatorios', global.checkAuth([4]), function (req, res, next) {
        res.render('relatorios');
    });
}


//TODO: devolver status de os x quantidade (por mês)

//TODO: devolver quantidade de funcionários x area de atuação

//TODO: devolver valor de os concluidas(receita) x mês