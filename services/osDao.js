module.exports = {
	getServicos : getServicos
}


function getServicos() {
	return "select * from tipo_de_servico";
}

function getEquipes() {
	return "select * from equipe";
}