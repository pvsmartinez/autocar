module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "revisao_x_tipo_de_servico",
	__primaryKey : "revisao_id, tipo_id",
	revisao_id : "int(11)",
	tipo_id : "int(11)",
	__foreignKeys : ["(revisao_id) REFERENCES revisao(id)", "(tipo_id) REFERENCES tipo_de_servico(id)"]

}

var objs = [
	{revisao_id : 1, tipo_id: 1},
	{revisao_id : 1, tipo_id: 2},
	{revisao_id : 2, tipo_id: 1},
	{revisao_id : 2, tipo_id: 2},
	{revisao_id : 3, tipo_id: 1},
	{revisao_id : 3, tipo_id: 2},
	{revisao_id : 4, tipo_id: 1},
	{revisao_id : 4, tipo_id: 2},
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
