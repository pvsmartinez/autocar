module.exports = {
	findById : findById,
	listAll : listAll,
	details : details,
	pecasAssociadas : pecasAssociadas,
	cadastro : cadastro,
	adicionarPecas : adicionarPecas,
	excluirPecasAssociadas : excluirPecasAssociadas,
	excluir : excluir,
	update : update,
	buscar : buscar
}


function findById(id) {
	return "select * from revisao where id = " + id;
}

function listAll() {
	return "select revisao.*, modelo_carro.marca, modelo_carro.modelo, especialidade.nome as 'especialidade' from revisao left join modelo_carro on revisao.modelo_id = modelo_carro.id left join especialidade on revisao.especialidade_id = especialidade.id";
}

function details(id) {
	return "select revisao.*, modelo_carro.marca, modelo_carro.modelo, especialidade.nome as 'especialidade' from revisao left join modelo_carro on revisao.modelo_id = modelo_carro.id left join especialidade on revisao.especialidade_id = especialidade.id where revisao.id = "+id;
}

function pecasAssociadas(id) {
	return "select peca.*, rel.quantidade from revisao_x_peca rel left join peca on rel.peca_id = peca.id where rel.revisao_id = "+id;
}

function cadastro(modelo, quilometragem, especialidade, preco) {
	return "insert into revisao (modelo_id, quilometragem, especialidade_id, preco) values ("+modelo+", "+quilometragem+", "+especialidade+", "+preco+")";
}

function adicionarPecas(id, pecas, qtds) {
	str = "insert into revisao_x_peca (revisao_id, peca_id, quantidade) values ";
	pecas.forEach(function (peca, index) {
		str = str.concat('('+id+', '+peca+', '+qtds[index]+')');
		if (index < pecas.length-1) {
			str = str.concat(', ');
		}
	});
	return str;
}

function excluirPecasAssociadas (id) {
	return "delete from revisao_x_peca where revisao_id = "+id;
}
function excluir (id) {
	return "delete from revisao where id = "+id;
}

function update (id, modelo_id, preco, quilometragem, especialidade_id) {
	return "update revisao set modelo_id="+modelo_id+", preco="+preco+", quilometragem="+quilometragem+", especialidade_id="+especialidade_id+" where id="+id;
}

function buscar(modelo_id) {
	return "select revisao.*,modelo_carro.modelo, modelo_carro.marca, especialidade.nome as 'especialidade' from revisao inner join modelo_carro on revisao.modelo_id = modelo_carro.id left join especialidade on revisao.especialidade_id = especialidade.id where revisao.modelo_id = "+modelo_id;
}