var registrarSalonController = require('../controladores/registrarSalonController.js')

var routerRegistrarSalon = (server, grado_grupo)=>{
	server.post('/registrarSalon', registrarSalonController(grado_grupo))
}

module.exports = routerRegistrarSalon