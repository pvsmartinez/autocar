module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "revisao",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	preco :  "decimal(10,2)",
	modelo_id : "int(11) not null",
	quilometragem : "int(10) default 0",
	__foreignKeys : ["(modelo_id) REFERENCES modelo_carro(id)"]
}

var objs = [
	{preco: 320, modelo_id : 1, quilometragem: 5000},
	{preco: 500, modelo_id: 2, quilometragem: 6000},
	{preco: 500, modelo_id: 3, quilometragem: 5000},
	{preco: 400, modelo_id: 4, quilometragem: 4000}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
