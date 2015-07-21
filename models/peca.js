module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "peca",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	valor :  "decimal(6,2)",
	nome : "varchar(100)",
	quantidade_em_estoque : "int(10) default 0"
}

var objs = [
	{valor: 1.50, nome: 'Fuzível', quantidade_em_estoque: 30},
	{valor: 300, nome : 'Pneu', quantidade_em_estoque: 32},
	{valor: 450, nome : 'Vidro', quantidade_em_estoque: 32},
	{valor: 600, nome : 'Parachoque', quantidade_em_estoque: 8},
	{valor: 400, nome : 'Direção', quantidade_em_estoque: 20},
	{valor: 50, nome : 'Óleo', quantidade_em_estoque: 300}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
