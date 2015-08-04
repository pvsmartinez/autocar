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
	atendimento_id : "int(11)",
	data_emissao : "datetime",
	data_conclusao : "datetime",
	horario : "datetime",
	preco :  "decimal(6,2)",
	tipo : "int(1) not null default 0",
	revisao_id : "int(11) null",
	status : "int(1) default 0",
	recover : "int(1) default 0",
	especialidade_id : "int(11)",
	descricao : "varchar(2047)",
	__foreignKeys : ["(equipe_id) REFERENCES equipe(id)", "(automovel_id) REFERENCES automovel(id)", "(atendimento_id) REFERENCES atendimento(id)", "(revisao_id) REFERENCES revisao(id)", "(especialidade_id) REFERENCES especialidade(id)"]
}

var today = function(sum) {
	td = new Date();
	return td.getFullYear() + '-' + ("0" + (td.getMonth() + 1)).slice(-2) + '-' + (td.getDate() + sum);
};

var objs = [
	{equipe_id : 2, automovel_id : 2, atendimento_id : 1, data_emissao : '2015-07-28 11:00:00', horario : today(1) + ' 8:00:00', preco :  2000.00, tipo : 0, status : 0, especialidade_id: 1, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 1, automovel_id : 1, atendimento_id : 1, data_emissao : '2015-07-29 13:00:00', horario : today(1) + ' 11:00:00', preco :  1000.00, tipo : 0, status : 0, especialidade_id: 2, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 2, automovel_id : 2, atendimento_id : 1, data_emissao : '2015-07-28 11:00:00', horario : today(1) + ' 8:00:00', preco :  2000.00, tipo : 0, status : 0, especialidade_id: 1, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 1, automovel_id : 1, atendimento_id : 1, data_emissao : '2015-07-29 13:00:00', horario : today(1) + ' 11:00:00', preco :  1000.00, tipo : 0, status : 0, especialidade_id: 2, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 2, automovel_id : 2, atendimento_id : 1, data_emissao : '2015-06-28 11:00:00', horario : '2014-10-29 8:00:00', preco :  3000.00, tipo : 0, status : 3, especialidade_id: 1, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 1, automovel_id : 1, atendimento_id : 1, data_emissao : '2015-06-28 11:00:00', horario : '2015-01-29 9:00:00', preco :  2000.00, tipo : 0, status : 4, especialidade_id: 2, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 2, automovel_id : 2, atendimento_id : 1, data_emissao : '2015-06-28 11:00:00', horario : '2015-01-26 8:00:00', preco :  1000.00, tipo : 0, status : 4, especialidade_id: 1, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 1, automovel_id : 2, atendimento_id : 1, data_emissao : '2015-06-28 11:00:00', horario : '2015-01-25 9:00:00', preco :  2000.00, tipo : 0, status : 4, especialidade_id: 2, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 2, automovel_id : 1, atendimento_id : 1, data_emissao : '2015-06-28 11:00:00', horario : '2015-03-29 8:00:00', preco :  8000.00, tipo : 0, status : 4, especialidade_id: 1, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 1, automovel_id : 1, atendimento_id : 1, data_emissao : '2015-06-28 11:00:00', horario : '2015-03-29 9:00:00', preco :  2000.00, tipo : 0, status : 4, especialidade_id: 3, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 2, automovel_id : 2, atendimento_id : 2, data_emissao : '2015-06-28 11:00:00', horario : '2015-03-29 6:00:00', preco :  500.00, tipo : 0, status : 3, especialidade_id: 1, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 1, automovel_id : 1, atendimento_id : 3, data_emissao : '2015-06-28 11:00:00', horario : '2015-04-29 8:00:00', preco :  2000.00, tipo : 0, status : 4, especialidade_id: 2, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 2, automovel_id : 2, atendimento_id : 4, data_emissao : '2015-06-28 11:00:00', horario : '2015-05-29 9:00:00', preco :  30000.00, tipo : 0, status : 3, especialidade_id: 1, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 2, automovel_id : 1, atendimento_id : 5, data_emissao : '2015-06-28 11:00:00', horario : '2015-06-29 6:00:00', preco :  2000.00, tipo : 0, status : 4, especialidade_id: 2, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'},
	{equipe_id : 2, automovel_id : 2, atendimento_id : 6, data_emissao : '2015-06-28 11:00:00', horario : '2015-06-29 8:00:00', preco :  2000.00, tipo : 0, status : 4, especialidade_id: 1, descricao:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui eget metus congue ultricies ac sit amet metus. Etiam a mattis mauris. Maecenas ultrices risus sed viverra dictum.'}
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