module.exports = {
	findById : findById,
	createAtendimento : createAtendimento,
	getAllHours : getAllHours,
	getModeloCarros : getModeloCarros
}


function findById(id) {
	return "select * from atendimento where id = " + id;
}

function createAtendimento() {
	return "insert into atendimento () values ()";
}

function getAllHours(data) {
	return "select horario from atendimento where horario >= '" + data + " 00:00:00' and horario < '" + data + " 23:59:59'"
}

function getModeloCarros() {
	return "select marca,modelo from modelo_carro"
}