var verificarPadreController = require('../controladores/verificarPadreController.js')

var routerVerificarPadre = (server, acudientes)=>{
	server.post('/verificarPadre', verificarPadreController(acudientes))
}

module.exports = routerVerificarPadre