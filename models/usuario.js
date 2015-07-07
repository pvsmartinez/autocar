module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "usuario",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	email : "varchar(255) unique not null",
	senha : "varchar(255) not null",
	nome : "varchar(255) not null",
	telefone : "varchar(255)",
	permissao : "int(1) not null default 0",
	especialidade : "int(2) null"
}

var objs = [
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
