var getHorarioDocenteController = require('../controladores/getHorarioDocenteController.js')

var routerHorarioDocente = (server, db)=>{
	server.post('/horarioDocente', getHorarioDocenteController(db))
}

module.exports = routerHorarioDocente