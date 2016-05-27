const cargarPlanesController = require('../controladores/cargarPlanesController.js')


var routerCargarPlanes = (server, grado_asignatura) => {
	server.post('/cargarPlanes', cargarPlanesController(grado_asignatura))
}

module.exports = routerCargarPlanes