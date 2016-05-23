var modificarUsuarioController = require ('../controladores/modificarUsuarioController.js')

var routerModificarUsuario = function (server, usuarios){
	server.post('/modificarUsuario' , modificarUsuarioController(usuarios))
}
module.exports = routerModificarUsuario 