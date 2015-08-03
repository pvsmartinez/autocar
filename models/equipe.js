module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "equipe",
	__primaryKey : "id",
	id : "int(11) auto_increment",
	nome : "varchar(100)",
	especialidade_id : "int(11)",
	id_func1 : "int(11)",
	id_func2 : "int(11)",
	proximo_horario : "datetime",
	__foreignKeys : ["(especialidade_id) REFERENCES especialidade(id)","(id_func1) REFERENCES usuario(id)", "(id_func2) REFERENCES usuario(id)"]
}

var today = function(sum) {
	td = new Date();
	return td.getFullYear() + '-' + ("0" + (td.getMonth() + 1)).slice(-2) + '-' + (td.getDate() + sum);
};

var objs = [
	{nome: 'equipe rocket', especialidade_id: 1, id_func1: 7, id_func2:4, proximo_horario: today(2) + ' 8:00:00'},
	{nome: 'power rangers', especialidade_id: 2, id_func1: 5, id_func2:6, proximo_horario: today(1) + ' 8:00:00' }
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
