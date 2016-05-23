var nuevoEstudianteController = require('../controladores/nuevoEstudianteController.js')

var routerNuevoEstudiante = function(server, estudiates, grado_grupo){
	server.post('/nuevoEstudiante', nuevoEstudianteController(estudiantes, grado_grupo))
}

module.exports = routerNuevoEstudiante

