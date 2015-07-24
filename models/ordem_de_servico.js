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
	{equipe_id : '0', automovel_id : '0', data_emissao : '2015-07-14 11:00:00', horario : '2015-07-28 8:00:00', preco :  "2000.00", tipo : "0", status : "0"},
	{equipe_id : '1', automovel_id : '1', data_emissao : '2015-07-14 13:00:00', horario : '2015-07-29 8:00:00', preco :  "1000.00", tipo : "0", status : "0"}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
