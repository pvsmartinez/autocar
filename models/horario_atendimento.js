module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "horario_atendimento",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	horario : "datetime",
	disponivel : "bool"
}

var objs = [
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
