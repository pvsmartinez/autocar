module.exports = {
    listAll: listAll,
    listCurrent: listCurrent,
    showOS: showOS,
    getServicos: getServicos,
    getEquipes: getEquipes,
    setStatus: setStatus,
    setEquipe: setEquipe,
    getNextEquipe: getNextEquipe
}
var text;

function listAll(flag, id) {
    text = "SELECT os.id, os.horario, os.preco, esp.nome as espec, os.status, e.nome, a.placa";
    text += " FROM ordem_de_servico os";
    text += " INNER JOIN equipe e";
    text += " ON os.equipe_id = e.id";
    text += " INNER JOIN automovel a";
    text += " ON os.automovel_id = a.id";
    text += " INNER JOIN especialidade esp";
    text += " ON os.especialidade_id = esp.id";
    text += flag ? " WHERE e.id_func1 = " + id + " OR e.id_func2 = "+id:"";
    text += " ORDER BY os.horario";
    return text;
}

function listCurrent(flag, id) {
    text = "SELECT os.id, os.horario, os.preco, esp.nome as espec, os.status, eq.nome, a.placa";
    text += " FROM ordem_de_servico os";
    text += " INNER JOIN equipe eq";
    text += " ON os.equipe_id = eq.id";
    text += " INNER JOIN automovel a";
    text += " ON os.automovel_id = a.id";
    text += " INNER JOIN especialidade esp";
    text += " ON os.especialidade_id = esp.id";
    text += " WHERE os.horario > CURRENT_DATE()";
    text += " AND os.status < 3";
    text += flag ? " AND (eq.id_func1 = " + id + " OR eq.id_func2 = "+id+")":"";
    text += " ORDER BY os.horario";
    return text;
}

function showOS(id, step) {
    var info;
    var join;
    var flag = true;
    switch(step) {
        case 0:
            info = 'os.*, a.*, m.*, c.*, e.nome as espec';
            join = " INNER JOIN automovel a";
            join += " ON os.automovel_id = a.id";
            join += " INNER JOIN modelo_carro m";
            join += " ON a.modelo_id = m.id";
            join += " INNER JOIN usuario c";
            join += " ON a.cliente_id = c.id";
            join += " INNER JOIN especialidade e";
            join += " ON os.especialidade_id = e.id";
            break;
        case 1:
            info = 'f1.nome as f1_nome, ep2.nome as f1_esp,';
            info += ' f2.nome as f2_nome, ep3.nome as f2_esp,';
            info += ' e.nome as e_nome, ep1.nome as e_esp';
            join = " INNER JOIN equipe e";
            join += " ON os.equipe_id = e.id";
            join += " INNER JOIN usuario f1";
            join += " ON e.id_func1 = f1.id";
            join += " INNER JOIN usuario f2";
            join += " ON e.id_func2 = f2.id";
            join += " INNER JOIN especialidade ep1";
            join += " ON e.especialidade_id = ep1.id";
            join += " LEFT JOIN especialidade ep2";
            join += " ON f1.especialidade_id = ep2.id";
            join += " LEFT JOIN especialidade ep3";
            join += " ON f2.especialidade_id = ep3.id";
            break;
        case 2:
            flag = false;
            text = "SELECT tp.*";
            text += " FROM os_x_tipo_de_servico oxt";
            text += " INNER JOIN tipo_de_servico tp";
            text += " ON oxt.tipo_id = tp.id";
            text += " WHERE oxt.os_id = " + id;
            break;
        case 3:
            flag = false;
            text = "SELECT p.*, oxp.quantidade";
            text += " FROM os_x_peca oxp";
            text += " INNER JOIN peca p";
            text += " ON oxp.peca_id = p.id";
            text += " WHERE oxp.os_id = " + id;
            break;
    }
    if (flag) {
        text = "SELECT " + info;
        text += " FROM ordem_de_servico os";
        text += join;
        text += " WHERE os.id = " + id;
    }
    return text;
}

function getServicos() {
    return "select * from tipo_de_servico";
}

function getEquipes() {
    return "select * from equipe";
}

function setStatus(id, status) {
    return "update ordem_de_servico set status=" + status + " where id =" + id;
}

function setEquipe(id, equipe_id) {
    // PEDRO, MEXER NISSO AQUI, FIZ ASSIM SÓ PRA NÃO FICAR VAZIO
    return "update ordem_de_servico set equipe_id="+equipe_id+" where id = " + id;
}

function getNextEquipe(id, os) {
    text = "select e.id as id, e.nome as nome, f1.nome as f1_nome, f2.nome as f2_nome";
    text += " from equipe e";
    text += " inner join usuario f1";
    text += " on e.id_func1 = f1.id";
    text += " inner join usuario f2";
    text += " on e.id_func2 = f2.id";
    text += " where e.especialidade_id = ";
    if (os === true) {
        text += " (select os.especialidade_id";
        text += " from ordem_de_servico os";
        text += " where os.id = " + id + ")";
    } else {
        text += id;
    }
    text += " ORDER BY e.proximo_horario";
    return text;
}

