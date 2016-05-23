getAsignaturasController = require('../controladores/getAsignaturasController.js')
var routerBuscarAsignaturas = (server, db)=>{
	server.post('/getAsignatura', getAsignaturasController(db))
}

module.exports = routerBuscarAsignaturas