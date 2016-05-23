
var cargarAsignaturasController = require ('../controladores/cargarAsignaturasController.js')
var routerCargarAsignaturas = function (server, asignaturas){
	server.post('/cargarAsignaturas' , cargarAsignaturasController(asignaturas))
}

module.exports = routerCargarAsignaturas