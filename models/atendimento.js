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

var today = function (sum) {
	td = new Date();
	return td.getFullYear() + '-' + ("0" + (td.getMonth() + 1)).slice(-2) + '-' + (td.getDate() + sum);
}

var objs = [
	{horario : today(0) + ' 10:00:00', automovel_id : 1},
	{horario : today(0) + ' 11:00:00', automovel_id : 2},
	{horario : today(0) + ' 15:00:00', automovel_id : 1},
	{horario : today(0) + ' 17:00:00', automovel_id : 1},
	{horario : today(1) + ' 08:00:00', automovel_id : 3},
	{horario : today(1) + ' 15:00:00', automovel_id : 1},
	{horario : today(2) + ' 08:00:00', automovel_id : 2},
	{horario : today(2) + ' 10:00:00', automovel_id : 1},
	{horario : today(2) + ' 14:00:00', automovel_id : 2}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
