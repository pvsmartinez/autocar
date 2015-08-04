module.exports = {
	findById : findById,
	listAll : listAll,
	update : update,
	excluir : excluir,
	cadastro : cadastro,
	listByIds : listByIds,
	findByRevisaoId : findByRevisaoId
}


function findById(id) {
	return "select * from tipo_de_servico where id = " + id;
}

function listAll() {
	return "select * from tipo_de_servico";
}

function update(id, nome, preco, duracao) {
	return "update tipo_de_servico set nome='"+nome+"', preco="+preco+", duracao="+duracao+" where id = "+id;
}

function excluir(id) {
	return "delete from tipo_de_servico where id = "+id;
}

function cadastro(nome, preco, duracao) {
	return "insert into tipo_de_servico (nome, preco, duracao) values ('"+nome+"', "+preco+", "+duracao+")";
}

function listByIds(ids) {
	return "select * from tipo_de_servico where id in (" + ids + ")";
}

function findByRevisaoId(id) {
	return "select * from revisao_x_tipo_de_servico where revisao_id = "+id;
}