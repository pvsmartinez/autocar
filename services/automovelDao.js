module.exports = {
	findById : findById,
}


function findById(id) {
	return "select * from automovel where id = " + id;
}
