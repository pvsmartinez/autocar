module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "automovel",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	cliente_id : "int(11)",
	placa : "varchar(10)",
	renavan : "varchar(50)",
	modelo : "int(1) not null default 0",
	ano : "int(4) null",
	quilometragem : "int(10) null",
	__foreignKeys : ["(cliente_id) REFERENCES usuario(id)"]
}

var objs = [
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
