var AcudienteController = require('../controladores/AcudienteController.js')

var routerAcudiente = function(server){
	server.get('/acudiente', AcudienteController)

}

module.exports = routerAcudiente