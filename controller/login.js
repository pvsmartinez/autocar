module.exports = {
	map : map
}

function map() {
	// index page 
    global.app.post('/login', function(req, res) {
        var post = req.body;
        console.log(post);
        global.db.query(global.services.usuario.findByEmailAndPassword(post.email, post.senha), function(err, rows) {
            global.error(err);
            if (rows.length === 0) {

            } else {
                console.log(rows);
                res.redirect('/my_secret_page');
            }
        });
    });

    
}