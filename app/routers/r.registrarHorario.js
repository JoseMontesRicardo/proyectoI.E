var registrarHorarioController = require('../controladores/registrarHorarioController.js')

var routerRegistrarHorario = (server, horarios, docentes)=>{
	server.post('/registrarHorario', registrarHorarioController(horarios, docentes))
}

module.exports = routerRegistrarHorario