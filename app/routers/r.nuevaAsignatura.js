var nuevaAsignaturaController = require('../controladores/nuevaAsignaturaController.js')

var routerNuevaAsignatura = function(server, asignaturas){
	server.post('/nuevaAsignatura', nuevaAsignaturaController(asignaturas))
}

module.exports = routerNuevaAsignatura