const cargarGradosController = require('../controladores/cargarGradosController.js')


var routerCargarGrados = (server, grado) => {
	server.post('/cargarGrados', cargarGradosController(grado))
}

module.exports = routerCargarGrados