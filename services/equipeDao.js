module.exports = {
	findById : findById,
	listAll : listAll,
	cadastro : cadastro,
	editar : editar,
	excluir : excluir
}


function findById(id) {
	return "select " + tables() + " where equipe.id = " + id;
}

function listAll() {
	return "select " + tables();
}

function tables() {
	return "equipe.*, func1.nome as funcionario1, func2.nome as funcionario2, especialidade.nome as nome_especialidade from equipe left join usuario func1 on equipe.id_func1 = func1.id left join usuario func2 on equipe.id_func2 = func2.id left join especialidade on equipe.especialidade_id = especialidade.id";
}

function cadastro(nome, especialidade, func1, func2) {
	return "insert into equipe (nome, especialidade_id, id_func1, id_func2) values ('"+nome+"', "+especialidade+", "+func1+", "+func2+")";
}

function editar(id, nome, especialidade, func1, func2) {
	return "update equipe set nome='"+nome+"', especialidade_id="+especialidade+", id_func1="+func1+", id_func2="+func2+" where id = "+id;
}

function excluir(id) {
	return "delete from equipe where id = "+id;
}