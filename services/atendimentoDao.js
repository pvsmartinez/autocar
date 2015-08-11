module.exports = {
	findById : findById,
	getAllHours : getAllHours,
	getModeloCarros : getModeloCarros,
	insertAutomovel : insertAutomovel,
	insertAtendimento : insertAtendimento,
	getByClienteId : getByClienteId,
	cancelarAtendimento : cancelarAtendimento,
	findClientById : findClientById
}


function findById(id) {
	return "select * from atendimento where id = " + id;
}

function getAllHours(data) {
	return "select id,horario,automovel_id from atendimento where horario >= '" + data + " 00:00:00' and horario < '" + data + " 23:59:59'"
}

function getModeloCarros() {
	return "select id,marca,modelo from modelo_carro"
}

function insertAutomovel(cliente_id, placa, renavan, modelo, ano, quilometragem) {
	return "insert into automovel(cliente_id, placa, renavan, modelo_id, ano, quilometragem) values (" + cliente_id + ",'" + placa + "','" + renavan + "','" + modelo + "','" + ano +"','" + quilometragem + "') on duplicate key update quilometragem = '"+quilometragem+"'"; 
}

function insertAtendimento(horario, automovel_id) {
	console.log("insert into atendimento(horario, automovel_id) values ('" + horario + "','" + automovel_id + "')");
	return "insert into atendimento(horario, automovel_id) values ('" + horario + "','" + automovel_id + "')";
}

function getByClienteId(id) {
	return "SELECT atendimento.* FROM atendimento LEFT JOIN automovel ON atendimento.automovel_id = automovel.id WHERE automovel.cliente_id = " + id;
}

function cancelarAtendimento(id) {
	return "DELETE from atendimento WHERE id = "+id;
}

function findClientById(id) {
	return "select atendimento.*, automovel.cliente_id FROM atendimento LEFT JOIN automovel ON atendimento.automovel_id = automovel.id WHERE atendimento.id = " + id;
}