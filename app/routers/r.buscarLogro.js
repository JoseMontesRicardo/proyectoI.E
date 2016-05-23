buscarLogroController = require('../controladores/buscarLogroController.js')


routerBuscarLogro = function(server, logros){
	server.post('/buscarLogro', buscarLogroController(logros))
}

module.exports = routerBuscarLogro