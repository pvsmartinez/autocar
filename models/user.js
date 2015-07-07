module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "user",
	__primaryKey : "id",
	__weak : true,
	id : "int(11) auto_increment",
	name : "varchar(255)",
	age : "int(11)"
}

var objs = [
	{name : "Edu Levy", age : "23"},
	{name : "Filipe Arena", age : "24"},
	{name : "Mayer Levy", age : "21"},
	{name : "Pedro Martinez", age : "22"}
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
