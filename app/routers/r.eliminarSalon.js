const eliminarSalonController = require('../controladores/eliminarSalonController.js')


var routerEliminarSalon = (server, grado_grupo) => {
	server.post('/eliminarSalon', eliminarSalonController(grado_grupo))
}

module.exports = routerEliminarSalon