module.exports = {
	findById : findById,
	createAtendimento : createAtendimento,
	getAllHours : getAllHours
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