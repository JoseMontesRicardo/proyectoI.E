getHorarioController = require('../controladores/getHorarioController.js')
var routerBuscarHorario = (server, db)=>{
	server.post('/getHorario', getHorarioController(db))
}

module.exports = routerBuscarHorario