const eliminarGrupoController = require('../controladores/eliminarGrupoController.js')


var routerEliminarGrupo = (server, grupo) => {
	server.post('/eliminarGrupo', eliminarGrupoController(grupo))
}

module.exports = routerEliminarGrupo