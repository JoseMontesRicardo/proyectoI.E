var verificarController = require('../controladores/verificarController.js')

var routerVerificar = (server, usuarios)=>{
	server.post('/verificar', verificarController(usuarios))
}

module.exports = routerVerificar