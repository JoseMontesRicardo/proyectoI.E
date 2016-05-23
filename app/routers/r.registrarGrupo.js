var registrarGrupoController = require('../controladores/registrarGrupoController.js')

var routerRegistrarGrupo = function(server, grupos){
	server.post('/registrarGrupo', registrarGrupoController(grupos))
}

module.exports = routerRegistrarGrupo