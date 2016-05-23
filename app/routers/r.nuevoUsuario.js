var nuevoUsuarioController = require('../controladores/nuevoUsuarioController.js')

routerNuevoUsuario = function(server, usuarios, acudientes, docentes){
	server.post('/nuevoUsuario', nuevoUsuarioController(usuarios, acudientes, docentes))
}

module.exports = routerNuevoUsuario