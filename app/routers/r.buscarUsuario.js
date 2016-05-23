buscarUsuarioController = require('../controladores/buscarUsuarioController.js')


routerBuscarUsuario = function(server, usuarios){
	server.post('/buscarUsuario', buscarUsuarioController(usuarios))
}

module.exports = routerBuscarUsuario