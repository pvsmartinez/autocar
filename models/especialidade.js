module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "especialidade",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	nome : "varchar(32)"
	
}

var objs = [
	{nome : 'Pneu'},
	{nome : 'Parachoque'},
	{nome : 'Motor'}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}