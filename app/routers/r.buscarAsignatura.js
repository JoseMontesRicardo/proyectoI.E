buscarAsignaturaController = require('../controladores/buscarAsignaturaController.js')


routerBuscarAsignatura = function(server, asignaturas){
	server.post('/buscarAsignatura', buscarAsignaturaController(asignaturas))
}

module.exports = routerBuscarAsignatura