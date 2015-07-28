module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.get('/editarPerfilCliente', global.checkAuth([0]), function(req, res) {
        res.render('cadastro', {locals: {query : req.query}});
    });

    global.app.post('/editarPerfilCliente', global.checkAuth([0]), function(req, res) {
        var post = req.body;
        global.db.query(global.services.usuario.editarPerfilCliente(post.id, post.nome, post.email, post.senha, post.telefone, post.endereco), function(err, info) {
            if (err) {
                console.log(err);
                res.redirect('/editarPerfilCliente?erro='+err.errno);
            } else {
                res.redirect('/editarPerfilCliente');
            }
        });
    });
}