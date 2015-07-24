module.exports = {
	listAll : listAll,
	listCurrent : listCurrent,
	showOS : showOS,
	getServicos : getServicos,
	getEquipes : getEquipes
}

function listAll() {
	text = "SELECT os.id, os.horario, os.preco, os.tipo, os.status, e.nome, a.placa";
	text += " FROM ordem_de_servico os";
	text += " LEFT JOIN equipe e";
	text += " ON os.equipe_id = e.id";
	text += " LEFT JOIN automovel a";
	text += " ON os.automovel_id = a.id";
	text += " WHERE os.horario > NOW()"
	text += " ORDER BY os.horario";
	return text;
}

function listCurrent() {
	text = "SELECT os.id, os.horario, os.preco, os.tipo, os.status, e.nome, a.placa";
	text += " FROM ordem_de_servico os";
	text += " LEFT JOIN equipe e";
	text += " ON os.equipe_id = e.id";
	text += " LEFT JOIN automovel a";
	text += " ON os.automovel_id = a.id";
	text += " WHERE os.horario > NOW()";
	text += " ORDER BY os.horario";
	return text;
}

function showOS(id) {
	text = "SELECT os.*, e.*, f1.*, f2.*, a.*, m.*, c.*";
	text += " FROM ordem_de_servico os";
	text += " LEFT JOIN equipe e";
	text += " ON os.equipe_id = e.id";
	text += " LEFT JOIN usuario f1";
	text += " ON e.id_func1 = f1.id";
	text += " LEFT JOIN usuario f2";
	text += " ON e.id_func2 = f2.id";
	text += " LEFT JOIN automovel a";
	text += " ON os.automovel_id = a.id";
	text += " LEFT JOIN modelo_carro m";
	text += " ON a.modelo_id = m.id";
	text += " LEFT JOIN usuario c";
	text += " ON a.cliente_id = c.id";
	text += " WHERE os.id = "+id;
	return text;
}

function getServicos() {
	return "select * from tipo_de_servico";
}

function getEquipes() {
	return "select * from equipe";
}