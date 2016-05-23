var modificarEstudianteController = require ('../controladores/modificarEstudianteController.js')

var routerModificarEstudiante= function (server, estudiantes){
	server.post('/modificarEstudiante' , modificarEstudianteController(estudiantes))
}
module.exports = routerModificarEstudiante