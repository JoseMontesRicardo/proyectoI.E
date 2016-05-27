var DocenteController 		= require('../controladores/DocenteController.js')
var middlewareDocente 		= require('../middlewares/siEsDocente.js')
var middlewareLoggin		= require('../middlewares/siEstasLoggeado.js')

var routerDocente = function(server){
	server.get('/docente', middlewareLoggin, middlewareDocente, DocenteController)
}

module.exports = routerDocente