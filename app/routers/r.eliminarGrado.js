const eliminarGradoController = require('../controladores/eliminarGradoController.js')


var routerEliminarGrado = (server, grado) => {
	server.post('/eliminarGrado', eliminarGradoController(grado))
}

module.exports = routerEliminarGrado