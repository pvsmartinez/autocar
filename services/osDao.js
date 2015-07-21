module.exports = {
	listAll : listAll,
	showOS : showOS
}

function listAll() {
	return "select * from ordem_de_servico";
}

function showOS(id) {
	return "select ordem_de_servico.* from ordem_de_servico where ordem_de_servico = "+ id;
}