module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "automovel",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	cliente_id : "int(11)",
	placa : "varchar(10) unique",
	renavan : "varchar(50)",
	modelo_id : "int(11)",
	ano : "int(4) null",
	quilometragem : "int(10) null",
	__foreignKeys : ["(cliente_id) REFERENCES usuario(id)", "(modelo_id) REFERENCES modelo_carro(id)"]
}

var objs = [
	{cliente_id : '1', placa : 'EMD 2790', renavan : '213123123', modelo_id:'3', ano:'2010', quilometragem:'10000'},
	{cliente_id : '1', placa : 'MBM 1234', renavan : '213123123', modelo_id:'1', ano:'2011', quilometragem:'10000'},
	{cliente_id : '1', placa : 'VSF 0000', renavan : '213123123', modelo_id:'2', ano:'2004', quilometragem:'10000'},
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
