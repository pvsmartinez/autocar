module.exports = {
	findById : findById,
	listAll : listAll,
	details : details,
	pecasAssociadas : pecasAssociadas,
	cadastro : cadastro,
	adicionarPecas : adicionarPecas,
	excluirPecasAssociadas : excluirPecasAssociadas,
	excluir : excluir,
	update : update
}


function findById(id) {
	return "select * from revisao where id = " + id;
}

function listAll() {
	return "select revisao.*, modelo_carro.marca, modelo_carro.modelo from revisao left join modelo_carro on revisao.modelo_id = modelo_carro.id";
}

function details(id) {
	return "select revisao.*, modelo_carro.marca, modelo_carro.modelo from revisao left join modelo_carro on revisao.modelo_id = modelo_carro.id where revisao.id = "+id;
}

function pecasAssociadas(id) {
	return "select peca.*, rel.quantidade from revisao_x_peca rel left join peca on rel.peca_id = peca.id where rel.revisao_id = "+id;
}

function cadastro(modelo, quilometragem, preco) {
	return "insert into revisao (modelo_id, quilometragem, preco) values ("+modelo+", "+quilometragem+", "+preco+")";
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

function update (id, modelo_id, preco, quilometragem) {
	return "update revisao set modelo_id="+modelo_id+", preco="+preco+", quilometragem="+quilometragem+" where id="+id;
}