var registrarGradoController = require('../controladores/registrarGradoController.js')

var routerRegistrarGrado = function(server, grados){
	server.post('/registrarGrado', registrarGradoController(grados))
}

module.exports = routerRegistrarGrado