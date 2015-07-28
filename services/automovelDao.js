module.exports = {
	findById : findById,
	getModeloAndClienteById : getModeloAndClienteById
}


function findById(id) {
	return "select * from automovel where id = " + id;
}

function getModeloAndClienteById(id) {
	return "select modelo_carro.modelo, modelo_carro.marca, usuario.nome, automovel.id from automovel inner join modelo_carro on automovel.modelo_id = modelo_carro.id inner join usuario on automovel.cliente_id = usuario.id where automovel.id = "+id;
}
