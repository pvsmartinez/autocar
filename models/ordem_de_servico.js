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
	descricao : "varchar(2047)",
	__foreignKeys : ["(equipe_id) REFERENCES equipe(id)", "(automovel_id) REFERENCES automovel(id)", "(revisao_id) REFERENCES revisao(id)"]
}

var objs = [
	{equipe_id : '2', automovel_id : '2', data_emissao : '2015-07-14 11:00:00', horario : '2015-07-28 8:00:00', preco :  "2000.00", tipo : "0", status : "0", descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : '1', automovel_id : '1', data_emissao : '2015-07-14 13:00:00', horario : '2015-07-29 8:00:00', preco :  "1000.00", tipo : "0", status : "0", descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}

/*
======================= TIPO =======================
0 - NORMAL
1 - REVISÃO
======================= STATUS =======================
0 - CRIADO
1 - AUTORIZADO
2 - SUSPENSO
3 - CANCELADO
4 - CONCLUIDO
*/