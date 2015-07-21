module.exports = {
	listAll : listAll,
	showOS : showOS,
	getServicos : getServicos
}

function listAll() {
	return "select * from ordem_de_servico";
}

function showOS(id) {
	return "select ordem_de_servico.* from ordem_de_servico where ordem_de_servico = "+ id;
}

function getServicos() {
	return "select * from tipo_de_servico";
}

function getEquipes() {
	return "select * from equipe";
}