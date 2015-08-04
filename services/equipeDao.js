module.exports = {
	findById : findById,
	listAll : listAll,
	cadastro : cadastro,
	editar : editar,
	excluir : excluir,
	newHour : newHour
}


function findById(id) {
	return "select " + tables() + " where equipe.id = " + id;
}

function listAll() {
	return "select " + tables();
}

function tables() {
	return "equipe.*, func1.nome as funcionario1, func2.nome as funcionario2, especialidade.nome as nome_especialidade from equipe left join usuario func1 on equipe.id_func1 = func1.id left join usuario func2 on equipe.id_func2 = func2.id left join especialidade on equipe.especialidade_id = especialidade.id";
}

function cadastro(nome, especialidade, func1, func2) {
	return "insert into equipe (nome, especialidade_id, id_func1, id_func2) values ('"+nome+"', "+especialidade+", "+func1+", "+func2+")";
}

function editar(id, nome, especialidade, func1, func2) {
	return "update equipe set nome='"+nome+"', especialidade_id="+especialidade+", id_func1="+func1+", id_func2="+func2+" where id = "+id;
}

function excluir(id) {
	return "delete from equipe where id = "+id;
}

function newHour(id, atual, duration) {
	var dias = Math.floor(duration / (10 * 60));
    var horas = duration % (10 * 60);
    var hatual = new Date(atual);
    var new_hour = (hatual.getHours() * 60) + hatual.getMinutes() + horas;
    if (new_hour > 18 * 60) {
        new_hour -= 600;
        dias += 1;
    }
    var weekends = 2 * Math.floor(dias / 7);
    var wk = hatual.getDay() + (dias % 7);
    weekends += wk > 4 ? 2: 0;
    dias += weekends;
    var new_dia = hatual.getDate() + dias;
    hatual.setDate(new_dia);
    hatual.setHours(Math.floor(new_hour / 60),new_hour % 60);
    var hour = hatual.toISOString();
	return "update equipe set proximo_horario='"+hour+"' where id = "+id;
}