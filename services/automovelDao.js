module.exports = {
	findById : findById,
	listUserCars : listUserCars,
	excluir : excluir,
	createCar : createCar,
	editCar : editCar
}


function findById(id) {
	return "select * from automovel where id = " + id;
}


function listUserCars(id) {
	text = "SELECT a.*, m.marca, m.modelo";
	text += " FROM automovel a";
	text += " INNER JOIN modelo_carro m";
	text += " ON a.modelo_id = m.id";
	text += " WHERE a.cliente_id = " + id;
	text += " ORDER BY a.placa";
	return text;
}

function excluir(id) {
	return "delete from automovel where id = "+id;
}

function createCar(car, user_id) {
	text = "insert into automovel (cliente_id, placa, renavan, modelo_id, ano, quilometragem) values";
	text += " ('"+user_id+"', '"+car.placa+"', '"+car.renavan+"', '"+car.modelo_id+"', '"+car.ano+"', '"+car.quilometragem+"')";
	return text;
}

function editCar(car) {
	text = "UPDATE automovel set";
	text += " placa='"+car.placa+"'";
	text += ", renavan='"+car.renavan+"'";
	text += ", modelo_id='"+car.modelo_id+"'";
	text += ", ano='"+car.ano+"'";
	text += ", quilometragem='"+car.quilometragem+"'";
	text += " WHERE id ="+car.id;
	return text;
}