var cargarGradosGruposController = require('../controladores/cargarGradosGruposController.js')

var routerCargarGradosGrupos = function(server, grados, grupos){
	server.post('/cargarGradosGrupos', cargarGradosGruposController(grados, grupos))
}

module.exports = routerCargarGradosGrupos