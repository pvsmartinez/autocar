module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "equipe",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	nome : "varchar(100)",
	especialidade : "int(11)",
	id_func1 : "int(11)",
	id_func2 : "int(11)",
	__foreignKeys : ["(especialidade) REFERENCES especialidade(id)","(id_func1) REFERENCES usuario(id)", "(id_func2) REFERENCES usuario(id)"]
}

var objs = [
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
