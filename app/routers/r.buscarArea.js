buscarAreaController = require('../controladores/buscarAreaController.js')


routerBuscarArea = function(server, areas){
	server.post('/buscarArea', buscarAreaController(areas))
}

module.exports = routerBuscarArea