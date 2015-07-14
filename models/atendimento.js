module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "atendimento",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	horario : "datetime",
	automovel_id : "int(11)",
	__foreignKeys : ["(automovel_id) REFERENCES automovel(id)"]
}

var objs = [
	{horario : '2015-07-14 10:00:00', automovel_id : '1'},
	{horario : '2015-07-14 11:00:00', automovel_id : '2'},
	{horario : '2015-07-14 15:00:00', automovel_id : '1'},
	{horario : '2015-07-14 17:00:00', automovel_id : '1'},
	{horario : '2015-07-14 08:00:00', automovel_id : '3'},
	{horario : '2015-07-14 15:00:00', automovel_id : '1'},
	{horario : '2015-07-14 14:00:00', automovel_id : '2'},
	{horario : '2015-07-15 10:00:00', automovel_id : '1'},
	{horario : '2015-07-15 08:00:00', automovel_id : '2'}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
