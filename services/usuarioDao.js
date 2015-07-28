module.exports = {
	findById : findById,
	createUser : createUser,
	countByEmailAndPassword : countByEmailAndPassword,
	findByEmailAndPassword : findByEmailAndPassword,
	register : register,
	registerFuncionario : registerFuncionario,
	listFuncionarios : listFuncionarios,
	findFuncionarioById : findFuncionarioById,
	editFuncionario : editFuncionario,
	deleteFuncionario : deleteFuncionario,
	listMecanicos : listMecanicos,
	editarPerfilCliente : editarPerfilCliente
}


function findById(id) {
	return "select * from usuario where id = " + id;
}

function createUser(email, senha, nome, telefone, permissao, especialidade) {
	return "insert into usuario (email, senha, nome, telefone, permissao, especialidade_id) values ('"+email+"', '"+senha+"', '"+ nome+"', '"+telefone+"', "+permissao+", "+especialidade+")";
}

function countByEmailAndPassword(email, senha) {
	return "select count(*) from usuario where email = '"+email+"' and senha = '"+senha+"'";
}

function findByEmailAndPassword(email, senha) {
	return "select id, permissao from usuario where email = '" + email + "' and senha = '"+ senha + "'";
}

function register(nome, email, senha, telefone, endereco) {
	return "insert into usuario (nome, email, senha, telefone, endereco) values ('"+nome+"', '"+email+"', '"+senha+"', '"+telefone+"', '"+endereco+"')";
}

function registerFuncionario(nome, email, senha, telefone, endereco, tipo, especialidade) {
	return "insert into usuario (nome, email, senha, telefone, endereco, permissao"+(especialidade==null?"":", especialidade_id")+") values ('"+nome+"', '"+email+"', '"+senha+"', '"+telefone+"', '"+endereco+"', "+tipo+(especialidade!=null?", "+especialidade:"")+")";
}

function editFuncionario(id, nome, email, senha, telefone, endereco, tipo, especialidade) {
	return "update usuario set nome='"+nome+"', email='"+email+"', senha='"+senha+"', telefone='"+telefone+
			"', endereco='"+endereco+"', permissao="+tipo+(especialidade==null?"":", especialidade_id="+especialidade)+" where id = "+id+" and permissao in (1, 2, 3)";
}

function listFuncionarios() {
	return "select * from usuario where permissao in (1, 2, 3)";
}

function findFuncionarioById(id) {
	return "select usuario.*, especialidade.nome as espec from usuario left join especialidade on usuario.especialidade_id = especialidade.id where permissao in (1, 2, 3) and usuario.id="+id;
}

function deleteFuncionario(id) {
	return "delete from usuario where id = "+id+" and permissao in (1, 2, 3)";
}

function listMecanicos() {
	return "select usuario.*, especialidade.nome as espec from usuario left join especialidade on usuario.especialidade_id = especialidade.id where usuario.permissao = 3";
}

function editarPerfilCliente(id, nome, email, senha, telefone, endereco) {
	return "update usuario set nome='"+nome+"', email='"+email+"', senha='"+senha+"', telefone='"+telefone+"', endereco='"+endereco+"' where id="+id+" and permissao = 0";
}

/*
======================= PERMISSÕES =======================
0 - CLIENTE
1 - ATENDENTE
2 - TECNICO
3 - MECANICO
4 - ADMINISTRADOR
*/
