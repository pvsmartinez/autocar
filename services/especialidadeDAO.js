module.exports = {
	findById : findById,
	listAll : listAll,
	cadastro : cadastro,
	update : update,
	excluir : excluir
}


function findById(id) {
	return "select * from especialidade where id = " + id;
}

function listAll() {
	return "select * from especialidade";
}

function cadastro(nome) {
	return "insert into especialidade (nome) values ('"+nome+"')";
}

function update (id, nome) {
	return "update especialidade set nome='"+nome+"' where id = "+id;
}

function excluir (id) {
	return "delete from especialidade where id = "+id;
}