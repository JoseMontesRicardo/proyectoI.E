var AdministradorController = require('../controladores/AdministradorController.js')
var middlewareAdministrador = require('../middlewares/siEsAdministrador.js')
var middlewareLoggin		= require('../middlewares/siEstasLoggeado.js')


var routerAdministrador = function(server, grados){
	server.get('/administrador', middlewareLoggin, middlewareAdministrador, AdministradorController(grados))
}

module.exports = routerAdministrador
