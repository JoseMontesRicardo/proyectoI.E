var AcudienteController = require('../controladores/AcudienteController.js')
var middlewareAcudiente	= require('../middlewares/siEsAcudiente.js')
var middlewareLoggin	= require('../middlewares/siEstasLoggeado.js')

var routerAcudiente = function(server){
server.get('/acudiente', middlewareLoggin,middlewareAcudiente,AcudienteController)
}

module.exports = routerAcudiente