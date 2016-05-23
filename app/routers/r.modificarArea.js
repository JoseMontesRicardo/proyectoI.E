var modificarAreaController = require ('../controladores/modificarAreaController.js')

var routerModificarArea = function (server, areas){
	server.post('/modificarArea' , modificarAreaController(areas))
}
module.exports = routerModificarArea