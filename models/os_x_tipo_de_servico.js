module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "os_x_tipo_de_servico",
	__primaryKey : "os_id, tipo_id",
	os_id : "int(11)",
	tipo_id : "int(11)",
	__foreignKeys : ["(os_id) REFERENCES ordem_de_servico(id)", "(tipo_id) REFERENCES tipo_de_servico(id)"]

}

var objs = [
	{os_id : '1', tipo_id : '1'},
	{os_id : '1', tipo_id : '3'},
	{os_id : '2', tipo_id : '2'},
	{os_id : '2', tipo_id : '4'}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
