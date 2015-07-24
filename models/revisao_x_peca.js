module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "revisao_x_peca",
	__primaryKey : "revisao_id, peca_id",
	revisao_id : "int(11)",
	peca_id : "int(11)",
	quantidade : "int(5) default 1",
	__foreignKeys : ["(revisao_id) REFERENCES revisao(id)", "(peca_id) REFERENCES peca(id)"]

}

var objs = [
	{revisao_id : 1, peca_id: 1, quantidade: 2},
	{revisao_id : 1, peca_id: 3, quantidade: 1},
	{revisao_id : 1, peca_id: 2, quantidade: 4}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
