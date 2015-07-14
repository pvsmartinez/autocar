module.exports = {
    map : map
}

function map() {
    // index page

    global.app.get('/home', global.checkAuth([0,1,2,3,4]), function (req, res) {

        //res.send('if you are viewing this page it means you are logged in');
        res.render('homeLogada')
    });

    global.app.get('/tela1', global.checkAuth([0,1,2,3,4]), function (req, res) {
            res.render('tela1');
    });

    global.app.get('/tela2', global.checkAuth([0,1,2,3,4]), function (req, res) {
            res.render('tela2');
    });

    global.app.get('/tela3', global.checkAuth([0,1,2,3,4]), function (req, res) {
            res.render('tela3');
    });

    global.app.get('/tela4', global.checkAuth([0,1,2,3,4]), function (req, res) {
        res.render('tela4');
    });

    global.app.get('/tela5', global.checkAuth([0,1,2,3,4]), function (req, res) {
        res.render('tela5');
    });

    global.app.get('/tela6', global.checkAuth([0,1,2,3,4]), function (req, res) {
        res.render('tela6');
    });

    global.app.get('/tela7', global.checkAuth([0,1,2,3,4]), function (req, res) {
        res.render('tela7');
    });
}