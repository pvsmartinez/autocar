module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "tipo_de_servico",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	nome : "varchar(50)",
	preco :  "decimal(6,2)",
	duracao : "int(11)"
}

var objs = [
	{nome : 'tirar amaços', preco : '799.99', duracao : 450},
	{nome : 'pintura', preco : '299.99', duracao : 300},
	{nome : 'restauração', preco : '2499.99', duracao : 1200},
	{nome : 'troca de oleo', preco : '49.99', duracao : 30},
	{nome : 'Conserto de parachoque', preco : 400, duracao : 240},
	{nome : 'Conserto de motor', preco : 1200, duracao : 600},
	{nome : 'Troca de embreagem', preco : 500, duracao : 240}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
