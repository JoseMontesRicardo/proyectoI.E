var getMensajesController = require('../controladores/getMensajesController.js')

var routerGetMensajes = (server, mensajes)=>{
	server.post('/getMensajes', getMensajesController(mensajes))
}

module.exports = routerGetMensajes