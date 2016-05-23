var agregarHijoPadreController = require('../controladores/agregarHijoPadreController.js')


var routerAgregarHijoPadre = function(server, estudiantes, grado_grupo){
	server.post('/agregarHijoPadre', agregarHijoPadreController(estudiantes, grado_grupo))
}

module.exports = routerAgregarHijoPadre