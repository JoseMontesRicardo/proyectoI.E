var DocenteController = require('../controladores/DocenteController.js')

var routerDocente = function(server){
	server.get('/docente', DocenteController)
}

module.exports = routerDocente