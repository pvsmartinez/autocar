module.exports = {
	ent : ent,
	populate : populate
}

var obj = {
	__name : "revisao_x_peca",
	__primaryKey : "revisao_id, peca_id",
	revisao_id : "int(11)",
	peca_id : "int(11)",
	__foreignKeys : ["(revisao_id) REFERENCES revisao(id)", "(peca_id) REFERENCES peca(id)"]

}

var objs = [
];

function ent() {
	return obj;
}

function populate() {
	return objs;
}
