module.exports = {
	getAll : getAll,
	findById : findById
}

function getAll() {
	return "select * from user";
}

function findById(id) {
	return "select * from user where id = " + id;
}