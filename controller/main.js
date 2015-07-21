module.exports = {
    map: map
}

function map() {
    // index page 

    global.app.get('/login', function(req, res) {
        if (req.session.user_id) {
            res.redirect('/home');
        } else {
            res.render('index');
        }
    });

    global.app.get(['/', '/home'], function(req, res) {
        if (req.session.user_id) {
            switch (req.session.user_permission) {
                case 0:
                case 1:
                    res.redirect('/agendamento');
                    break;
                case 2:
                case 3:
                    res.redirect('/os');
                    break;
                case 4:
                    res.redirect('/listarFuncionarios');
                    break;
            }
        } else {
            res.redirect('/login');
        }
    });
}