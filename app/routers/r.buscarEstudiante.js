buscarEstudianteController = require('../controladores/buscarEstudianteController.js')


routerBuscarEstudiante = function(server, estudiantes){
	server.post('/buscarEstudiante', buscarEstudianteController(estudiantes))
}

module.exports = routerBuscarEstudiante