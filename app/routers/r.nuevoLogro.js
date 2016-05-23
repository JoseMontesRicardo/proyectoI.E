var nuevoLogroController = require('../controladores/nuevoLogroController.js')

var routerNuevoLogro = function(server, logros){
	server.post('/nuevoLogro', nuevoLogroController(logros))
}

module.exports = routerNuevoLogro

