module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "tipo_de_servico",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	nome : "varchar(50)",
	preco :  "decimal(6,2)"
}

var objs = [
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
