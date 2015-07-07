module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "revisao",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	preco :  "decimal(6,2)",
	modelo : "int(1) not null",
	quilometragem : "int(10) default 0"
}

var objs = [
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
