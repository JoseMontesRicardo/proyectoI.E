var AdministradorController = require('../controladores/AdministradorController.js')


var routerAdministrador = function(server, grados){
	server.get('/administrador', AdministradorController(grados))
}

module.exports = routerAdministrador
