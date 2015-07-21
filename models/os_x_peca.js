module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "os_x_peca",
	__primaryKey : "os_id, peca_id",
	os_id : "int(11)",
	peca_id : "int(11)",
	__foreignKeys : ["(os_id) REFERENCES ordem_de_servico(id)", "(peca_id) REFERENCES peca(id)"]

}

var objs = [
	{os_id : "0", peca_id : "0"},
	{os_id : "0", peca_id : "1"},
	{os_id : "0", peca_id : "2"},
	{os_id : "0", peca_id : "4"},
	{os_id : "0", peca_id : "5"},
	{os_id : "1", peca_id : "2"},
	{os_id : "1", peca_id : "4"},
	{os_id : "0", peca_id : "3"},
	{os_id : "1", peca_id : "0"},
	{os_id : "1", peca_id : "1"}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
