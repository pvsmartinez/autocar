module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "os_x_peca",
	__primaryKey : "os_id, peca_id",
	os_id : "int(11)",
	peca_id : "int(11)",
	quantidade : "int(11)",
	__foreignKeys : ["(os_id) REFERENCES ordem_de_servico(id)", "(peca_id) REFERENCES peca(id)"]

}

var objs = [
	{os_id : 1, peca_id : 1, quantidade : 10},
	{os_id : 1, peca_id : 2, quantidade : 1},
	{os_id : 1, peca_id : 3, quantidade : 8},
	{os_id : 1, peca_id : 4, quantidade : 15},
	{os_id : 1, peca_id : 5, quantidade : 2},
	{os_id : 1, peca_id : 6, quantidade : 15},
	{os_id : 2, peca_id : 1, quantidade : 3},
	{os_id : 2, peca_id : 2, quantidade : 6},
	{os_id : 2, peca_id : 4, quantidade : 17},
	{os_id : 2, peca_id : 6, quantidade : 12}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
