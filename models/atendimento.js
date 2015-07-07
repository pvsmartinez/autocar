module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "atendimento",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	horario_id : "int(11)",
	automovel_id : "int(11)",
	__foreignKeys : ["(horario_id) REFERENCES horario_atendimento(id)", "(automovel_id) REFERENCES automovel(id)"]
}

var objs = [
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
