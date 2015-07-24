module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "modelo_carro",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	marca : "varchar(40)",
	modelo : "varchar(40)",
}

var objs = [
	{marca : 'Fiat', modelo : 'Punto'},
	{marca : 'Peugeot', modelo : '307'},
	{marca : 'Hyundai', modelo : 'HB20'},
	{marca : 'Ford', modelo : 'Focus'},
	{marca : 'Renault', modelo : 'Logan'}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
