module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "tipo_de_servico",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	nome : "varchar(50)",
	preco :  "decimal(6,2)"
}

var objs = [
	{nome:"Conserto de parachoque",preco:400},
	{nome:"Conserto de motor",preco:1200},
	{nome:"Troca de embreagem",preco:500}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
