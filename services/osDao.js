module.exports = {
	listAll : listAll,
	showOS : showOS,
	getServicos : getServicos,
	getEquipes : getEquipes
}

function listAll() {
	//return "select * from ordem_de_servico";
	
	text = "SELECT os.horario, os.preco, os.tipo, os.status, e.nome, a.modelo";
	text += " FROM ordem_de_servico os";
	text += " LEFT JOIN equipe e";
	text += " ON os.equipe_id = e.id";
	text += " LEFT JOIN automovel a";
	text += " ON os.automovel_id = a.id";
	text += " ORDER BY os.horario";
	return text;

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