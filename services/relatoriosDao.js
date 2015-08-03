module.exports = {
	osByMonth : osByMonth,
	funcByType : funcByType,
	funcBySpec : funcBySpec,
	moneyByMonth : moneyByMonth
}

function osByMonth() {
	text = "select status, year(horario), month(horario), count(*)";
	text += " from ordem_de_servico";
	text += " group by year(horario), month(horario), status";
	return text;
}

function funcByType() {
	text = "select permissao, count(*)";
	text += " from usuario";
	text += " where permissao != 4 and permissao != 0";
	text += " group by permissao";
	return text;
}

function funcBySpec() {
	text = "select e.nome, count(f.id)";
	text += " from usuario f";
	text += " inner join especialidade e";
	text += " on f.especialidade_id = e.id";
	text += " where f.permissao = 3";
	text += " group by e.id";
	return text;
}

function moneyByMonth() {
	text = "select year(horario), month(horario), sum(preco)";
	text += " from ordem_de_servico";
	text += " where status = 4";
	text += " group by year(horario), month(horario)";
	return text;	
}