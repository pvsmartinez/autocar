module.exports = {
    listAll: listAll,
    listCurrent: listCurrent,
    showOS: showOS,
    getServicos: getServicos,
    getEquipes: getEquipes,
    setStatus: setStatus
}
var text;

function listAll(flag, id) {
    text = "SELECT os.id, os.horario, os.preco, os.tipo, os.status, e.nome, a.placa";
    text += " FROM ordem_de_servico os";
    text += " INNER JOIN equipe e";
    text += " ON os.equipe_id = e.id";
    text += " INNER JOIN automovel a";
    text += " ON os.automovel_id = a.id";
    text += flag ? " WHERE e.id_func1 = " + id + " OR e.id_func2 = "+id:"";
    text += " ORDER BY os.horario";
    return text;
}

function listCurrent(flag, id) {
    text = "SELECT os.id, os.horario, os.preco, os.tipo, os.status, e.nome, a.placa";
    text += " FROM ordem_de_servico os";
    text += " INNER JOIN equipe e";
    text += " ON os.equipe_id = e.id";
    text += " INNER JOIN automovel a";
    text += " ON os.automovel_id = a.id";
    text += " WHERE os.horario > NOW()";
    text += " AND os.status < 3";
    text += flag ? " AND (e.id_func1 = " + id + " OR e.id_func2 = "+id+")":"";
    text += " ORDER BY os.horario";
    return text;
}

function showOS(id, step) {
    var info;
    var join;
    var flag = true;
    switch(step) {
        case 0:
            info = 'os.*, a.*, m.*, c.*';
            join = " INNER JOIN automovel a";
            join += " ON os.automovel_id = a.id";
            join += " INNER JOIN modelo_carro m";
            join += " ON a.modelo_id = m.id";
            join += " INNER JOIN usuario c";
            join += " ON a.cliente_id = c.id";
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