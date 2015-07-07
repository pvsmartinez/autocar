module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "teste",
	__primaryKey : "id",
	__weak : true,
	id : "int (11)",
	client_id : "int (11)",
}

var objs = [
	{id : "1", client_id : "23"},
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
