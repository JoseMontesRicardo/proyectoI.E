const cargarCargasController = require('../controladores/cargarCargasController.js')


var routerCargarCargas = (server, carga_academica) => {
	server.post('/cargarCargas', cargarCargasController(carga_academica))
}

module.exports = routerCargarCargas