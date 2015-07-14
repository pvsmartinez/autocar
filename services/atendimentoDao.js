module.exports = {
	findById : findById,
	createUser : createUser,
	countByEmailAndPassword : countByEmailAndPassword,
	findByEmailAndPassword : findByEmailAndPassword,
	register : register
}


function findById(id) {
	return "select * from atendimento where id = " + id;
}

function createAtendimento() {
	return "insert into atendimento () values ()";
}

function getAllHours() {
	return ""
}