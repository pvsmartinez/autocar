module.exports = {
	findById : findById,
	getAllHours : getAllHours,
	getModeloCarros : getModeloCarros,
	insertAutomovel : insertAutomovel,
	insertAtendimento : insertAtendimento
}


function findById(id) {
	return "select * from atendimento where id = " + id;
}

function getAllHours(data) {
	return "select horario from atendimento where horario >= '" + data + " 00:00:00' and horario < '" + data + " 23:59:59'"
}

function getModeloCarros() {
	return "select id,marca,modelo from modelo_carro"
}

function insertAutomovel(cliente_id, placa, renavan, modelo, ano, quilometragem) {
	return "insert into automovel(cliente_id, placa, renavan, modelo_id, ano, quilometragem) values (" + cliente_id + ",'" + placa + "','" + renavan + "','" + modelo + "','" + ano +"','" + quilometragem + "')"; 
}

function insertAtendimento(horario, automovel_id) {
	return "insert into atendimento(horario, automovel_id) values ('" + horario + "','" + automovel_id + "')";
}