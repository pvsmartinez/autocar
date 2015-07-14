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
	{email: "cliente@usp.br", senha : "1234", nome : "cliente", telefone : "12345678", permissao :"0"},
	{email: "atendente@usp.br", senha : "1234", nome : "atendente", telefone : "12345678", permissao :"1"},
	{email: "tecnico@usp.br", senha : "1234", nome : "tecnico", telefone : "12345678", permissao :"2"},
	{email: "mecanico@usp.br", senha : "1234", nome : "mecanico", telefone : "12345678", permissao :"3"},
	{email: "administrador@usp.br", senha : "1234", nome : "administrador", telefone : "12345678", permissao :"4"}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}

/*
======================= PERMISSÕES =======================
0 - CLIENTE
1 - ATENDENTE
2 - TECNICO
3 - MECANICO
4 - ADMINISTRADOR
*/