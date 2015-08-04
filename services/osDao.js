module.exports = {
    listAll: listAll,
    listCurrent: listCurrent,
    showOS: showOS,
    getServicos: getServicos,
    getEquipes: getEquipes,
    setStatus: setStatus,
    setEquipe: setEquipe,
    getNextEquipe: getNextEquipe,
    cadastrar : cadastrar,
    cadastrarPeca : cadastrarPeca,
    cadastrarServico : cadastrarServico,
    getPrecoIdeal : getPrecoIdeal,
    findByAtendimentoId : findByAtendimentoId,
    cantRecover: cantRecover
}
var text;

function listAll(flag, id) {
    text = "SELECT os.id, os.horario, os.preco, esp.nome as espec, os.status, e.nome, a.placa, os.recover";
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
    text = "SELECT os.id, os.horario, os.preco, esp.nome as espec, os.status, eq.nome, a.placa, os.recover";
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
    text = "update ordem_de_servico set status = " + status;
    if (status === 3) {
        text += ", recover = 1";
    }
    text += " where id =" + id;
    return text;
}

function setEquipe(id, equipe_id) {
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

function cadastrar(equipe, automovel, atendimento, date, horario, preco, tipo, revisao, especialidade, descricao, duracao) {

    if (tipo != 1) revisao = "NULL";
    return "insert into ordem_de_servico (equipe_id, automovel_id, atendimento_id, data_emissao, horario, preco, tipo, revisao_id, especialidade_id, descricao, duracao) values ("+equipe+","+automovel+","+atendimento+",'"+date+"','"+horario+"',"+preco+","+tipo+","+revisao+","+especialidade+",'"+descricao+"',"+duracao+")";

}

function cadastrarPeca(os_id, peca_id, quantidade) {

    return "insert into os_x_peca (os_id, peca_id, quantidade) values ("+os_id+","+peca_id+","+quantidade+")";

}

function cadastrarServico(os_id, servico_id) {

    return "insert into os_x_tipo_de_servico (os_id, tipo_id) values ("+os_id+","+servico_id+")";

}

function getPrecoIdeal(pecas, servicos) {

    return "SELECT sum(preco) as preco FROM (SELECT sum(valor*quantidade) as preco FROM os_x_peca left JOIN peca on os_x_peca.peca_id = peca.id  WHERE os_x_peca.peca_id in ("+pecas+") UNION SELECT sum(preco) as preco FROM os_x_tipo_de_servico left JOIN tipo_de_servico on os_x_tipo_de_servico.tipo_id = tipo_de_servico.id  WHERE os_x_tipo_de_servico.tipo_id in ("+servicos+")) as precoTable";

}

function findByAtendimentoId(atendimento) {

    return "select * from ordem_de_servico where atendimento_id = "+atendimento;

}

function cantRecover(id) {
    return "update ordem_de_servico set recover = 0 where id =" + id;
}