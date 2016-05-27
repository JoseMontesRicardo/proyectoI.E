const eliminarCargaController = require('../controladores/eliminarCargaController.js')


var routerEliminarCarga = (server, carga_academica) => {
	server.post('/eliminarCarga', eliminarCargaController(carga_academica))
}

module.exports = routerEliminarCarga