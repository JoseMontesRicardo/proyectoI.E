getDocentesController = require('../controladores/getDocentesController.js')
var routerBuscarDocentes = (server, db)=>{
	server.post('/getDocente', getDocentesController(db))
}

module.exports = routerBuscarDocentes