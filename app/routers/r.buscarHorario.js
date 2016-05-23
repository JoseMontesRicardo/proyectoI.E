buscarHorarioController = require('../controladores/buscarHorarioController.js')


routerBuscarHorario = function(server, horarios){
	server.post('/buscarHorario', buscarHorarioController(horarios))
}

module.exports = routerBuscarHorario