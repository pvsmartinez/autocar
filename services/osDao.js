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
    text += " LEFT JOIN equipe e";
    text += " ON os.equipe_id = e.id";
    text += " LEFT JOIN automovel a";
    text += " ON os.automovel_id = a.id";
    text += flag ? " WHERE e.id_func1 = " + id + " OR e.id_func2 = "+id:"";
    text += " ORDER BY os.horario";
    return text;
}

function listCurrent(flag, id) {
    text = "SELECT os.id, os.horario, os.preco, os.tipo, os.status, e.nome, a.placa";
    text += " FROM ordem_de_servico os";
    text += " LEFT JOIN equipe e";
    text += " ON os.equipe_id = e.id";
    text += " LEFT JOIN automovel a";
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
    if (step === 0) {
        info = 'os.*, a.*, m.*, c.*';
        join = " LEFT JOIN automovel a";
        join += " ON os.automovel_id = a.id";
        join += " LEFT JOIN modelo_carro m";
        join += " ON a.modelo_id = m.id";
        join += " LEFT JOIN usuario c";
        join += " ON a.cliente_id = c.id";
    } else {
        info = 'f1.nome as f1_nome, f1.especialidade as f1_esp,';
        info += ' f2.nome as f2_nome, f2.especialidade as f2_esp,';
        info += ' e.nome as e_nome, e.especialidade as e_esp';
        join = " LEFT JOIN equipe e";
        join += " ON os.equipe_id = e.id";
        join += " LEFT JOIN usuario f1";
        join += " ON e.id_func1 = f1.id";
        join += " LEFT JOIN usuario f2";
        join += " ON e.id_func2 = f2.id";
    }
    text = "SELECT " + info;
    text += " FROM ordem_de_servico os";
    text += join;
    text += " WHERE os.id = " + id;

    // text = "SELECT os.*, e.*, f1.*, f2.*, a.*, m.*, c.*";
    // text += " FROM ordem_de_servico os";
    // text += " LEFT JOIN equipe e";
    // text += " ON os.equipe_id = e.id";
    // text += " LEFT JOIN usuario f1";
    // text += " ON e.id_func1 = f1.id";
    // text += " LEFT JOIN usuario f2";
    // text += " ON e.id_func2 = f2.id";
    // text += " LEFT JOIN automovel a";
    // text += " ON os.automovel_id = a.id";
    // text += " LEFT JOIN modelo_carro m";
    // text += " ON a.modelo_id = m.id";
    // text += " LEFT JOIN usuario c";
    // text += " ON a.cliente_id = c.id";
    // text += " WHERE os.id = " + id;
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