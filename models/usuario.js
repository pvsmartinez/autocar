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
	endereco : "varchar(255)",
	permissao : "int(1) not null default 0",
	especialidade_id : "int(11) null",
	__foreignKeys : ["(especialidade_id) REFERENCES especialidade(id)"]
}

var objs = [
	{email: "cliente@usp.br", senha : "1234", nome : "cliente", telefone : "12345678", endereco : "Av Luciano Gualberto, 123", permissao :"0"},
	{email: "atendente@usp.br", senha : "1234", nome : "atendente", telefone : "12345678", endereco : "Av Luciano Gualberto, 123", permissao :"1"},
	{email: "tecnico@usp.br", senha : "1234", nome : "tecnico", telefone : "12345678", endereco : "Av Luciano Gualberto, 123", permissao :"2"},
	{email: "mecanico@usp.br", senha : "1234", nome : "mecanico", telefone : "12345678", endereco : "Av Luciano Gualberto, 123", permissao :"3", especialidade_id : "1"},
	{email: "mecanico2@usp.br", senha : "1234", nome : "mecanico2", telefone : "12345678", endereco : "Av Luciano Gualberto, 123", permissao :"3", especialidade_id : "2"},
	{email: "mecanic3@usp.br", senha : "1234", nome : "mecanico3", telefone : "12345678", endereco : "Av Luciano Gualberto, 123", permissao :"3", especialidade_id : "1"},
	{email: "mecanico4@usp.br", senha : "1234", nome : "mecanico4", telefone : "12345678", endereco : "Av Luciano Gualberto, 123", permissao :"3", especialidade_id : "2"},
	{email: "administrador@usp.br", senha : "1234", nome : "administrador", telefone : "12345678", endereco : "Av Luciano Gualberto, 123", permissao :"4"}
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