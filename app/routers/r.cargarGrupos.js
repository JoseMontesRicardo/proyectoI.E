const cargarGruposController = require('../controladores/cargarGruposController.js')


var routerCargarGrupos = (server, grupo) => {
	server.post('/cargarGrupos', cargarGruposController(grupo))
}

module.exports = routerCargarGrupos