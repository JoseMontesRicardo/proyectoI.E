getDatosDocenteController = require('../controladores/getDatosDocenteController.js')
var routerDatosDocente = (server, db)=>{
	server.post('/getDatosDocente', getDatosDocenteController(db))
}

module.exports = routerDatosDocente