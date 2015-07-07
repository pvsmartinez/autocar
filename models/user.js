module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "user",
	__primaryKey : "id",
	__weak : true,
	id : "auto:key",
	name : "string:255",
	age : "int"
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
