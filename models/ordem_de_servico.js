module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "ordem_de_servico",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	equipe_id : "int(11)",
	automovel_id : "int(11)",
	data_emissao : "datetime",
	data_conclusao : "datetime",
	horario : "datetime",
	preco :  "decimal(6,2)",
	tipo : "int(1) not null default 0",
	revisao_id : "int(11) null",
	status : "int(1)",
	__foreignKeys : ["(equipe_id) REFERENCES equipe(id)", "(automovel_id) REFERENCES automovel(id)", "(revisao_id) REFERENCES revisao(id)"]

}

var objs = [
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
