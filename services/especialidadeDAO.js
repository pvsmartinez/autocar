module.exports = {
	findById : findById,
	listAll : listAll
}


function findById(id) {
	return "select * from especialidade where id = " + id;
}

function listAll() {
	return "select * from especialidade";
}