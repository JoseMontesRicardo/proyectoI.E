var registrarAreaController = require('../controladores/registrarAreaController.js')

var routerRegistrarArea = function(server, areas){
	server.post('/registrarArea', registrarAreaController(areas))
}

module.exports = routerRegistrarArea