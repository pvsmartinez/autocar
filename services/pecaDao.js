module.exports = {
	findById : findById,
	listAll : listAll,
	update : update,
	deletePeca : deletePeca,
	cadastro : cadastro,
	listByIds : listByIds,
	listByRevisaoId : listByRevisaoId
}


function findById(id) {
	return "select * from peca where id = " + id;
}

function listAll() {
	return "select * from peca";
}

function update(id, nome, valor, quantidade) {
	return "update peca set nome='"+nome+"', valor="+valor+", quantidade_em_estoque="+quantidade+" where id = "+id;
}

function deletePeca(id) {
	return "delete from peca where id = "+id;
}

function cadastro(nome, valor, quantidade) {
	return "insert into peca (nome, valor, quantidade_em_estoque) values ('"+nome+"', "+valor+", "+quantidade+")";
}

function listByIds(ids) {
	return "select * from peca where id in (" + ids + ")";
}

function listByRevisaoId(id) {
	return "select * from revisao_x_peca where revisao_id = "+id;
}