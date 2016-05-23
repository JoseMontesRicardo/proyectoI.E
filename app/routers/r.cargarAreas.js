
var cargarAreasController = require ('../controladores/cargarAreasController.js')
var routerCargarAreas = function (server, areas){
	server.post('/cargarAreas' , cargarAreasController(areas))
}

module.exports = routerCargarAreas