module.exports = {
	findById : findById,
	createUser : createUser,
	countByEmailAndPassword : countByEmailAndPassword,
	findByEmailAndPassword : findByEmailAndPassword,
	register : register
}


function findById(id) {
	return "select * from usuario where id = " + id;
}

function createUser(email, senha, nome, telefone, permissao, especialidade) {
	return "insert into usuario (email, senha, nome, telefone, permissao, especialidade) values ('"+email+"', '"+senha+"', '"+ nome+"', '"+telefone+"', "+permissao+", "+especialidade+")";
}

function countByEmailAndPassword(email, senha) {
	return "select count(*) from usuario where email = '"+email+"' and senha = '"+senha+"'";
}

function findByEmailAndPassword(email, senha) {
	return "select id, permissao from usuario where email = '" + email + "' and senha = '"+ senha + "'";
}

function register(nome, email, senha) {
	return "insert into usuario (nome, email, senha) values ('"+nome+"', '"+email+"', '"+senha+"')";
}